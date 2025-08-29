import {Router} from "express"

import {google} from "googleapis"

import pool from "./Base.js"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"

const auth2CLient = new google.auth.OAuth2(
    process.env.Client_Id ,
   process.env.Client_Secret ,
   process.env.GOOGLE_REDIRECT_URI
)
let account = Router()

account.get("/auth/google" , async (req , res)=>{
let url = auth2CLient.generateAuthUrl({
  access_type: "offline" ,
  scope:["profile" , "email"] ,
  prompt: "consent"
})
res.redirect(url)
})


account.get("/auth/google/callback" , async (req,res)=>{
    try{

const {code} = req.query
const {tokens} = await auth2CLient.getToken(code)
auth2CLient.setCredentials(tokens)

const oauth2 = google.oauth2({version:"v2" , auth:auth2CLient}) 
const {data} = await oauth2.userinfo.get()
    const { id: google_id, name, email, picture: avatar } = data

    let user 
let result = await pool.query("SELECT * FROM users WHERE google_id = $1" , [google_id])
 if (result.rows.length === 0) {
      const insert = await pool.query(
        'INSERT INTO users (google_id, name, email, avatar , verified) VALUES ($1, $2, $3, $4 , $5) RETURNING *',
        [google_id, name, email, avatar , true]
      )
      user = insert.rows[0]
    } else {
      user = result.rows[0]
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
res.cookie("token", token, {
  httpOnly: true,
  secure: true,      
  sameSite: "None",   
  path: '/',
  maxAge: 7 * 24 * 60 * 60 * 1000
});

  
    res.redirect( "http://localhost:5173")

    }
   catch (err) {
    console.error('OAuth callback error:', err)
    res.status(500).send('Authentication failed')
  }

})





account.post("/SignUp" , async (req,res)=>{
try{
    let {username , email , password} = req.body
    if(!username || !email || !password){
      return    res.status(500).json("Data not Found")
    }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(email)){
  return    res.status(500).json("Not valid email")
  }
  let result = await pool.query("SELECT * FROM users WHERE email =$1" , [email])
  if(result.rows.length > 0){
    return  res.status(500).json("Acount in base")
  }
let code = Math.floor(100000 + Math.random() * 900000);
  let resi = await pool.query("INSERT INTO users (username , email , password ,vericode  ) Values($1 , $2 ,$3 ,$4) RETURNING *" , [username , email , password , code])
  if(resi.rows.length < 0){
  return res.status(500).json("Problem with create user")
  }

  let user = resi.rows[0]

  let token = jwt.sign({id:user.id} , process.env.JWT_SECRET , {expiresIn:"7d"})

  res.cookie("token" , token , {
      httpOnly: true,
  secure: true,      
  sameSite: "None",   
  path: '/',
  maxAge: 7 * 24 * 60 * 60 * 1000
  })
Send(email, code)

  res.status(201).json("User created succesful")

}
catch(err){
    console.log(err)
}
})



async function Send(email, code) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "boicoandrei160@gmail.com",     
      pass: "kcqt sdcd ougq oswz"  
    },
  })

 
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${code}`,
   
  }


  let info = await transporter.sendMail(mailOptions)
  console.log('Message sent: %s', info.messageId)
}



account.post("/Verif"  , async (req,res)=>{
    let token = req.cookies.token
    if(!token) return res.status(401).json("No token");
let   decoded = jwt.verify(token, process.env.JWT_SECRET);
let id = decoded.id
    let {code} = req.body
    if(!id || !code){
        return  res.status(500).json("Id or Code not found")
    }
    let resi = await pool.query("SELECT * FROM users WHERE id = $1 " , [id])
let user = resi.rows[0]
    if(!user){
       return   res.status(500).json("user not found")
    }
    if(code != user.verifcode){
     return  res.status(500).json("Incorect code")
    }
     
    await pool.query("UPDATE USERS SET verif = $1 WHERE id = $2 " , [true , id])
    res.status(200).json("User verify corect")


})

account.get("/LogOut" , async (req,res)=>{
    res.clearCookie("token" , {
          httpOnly: true,
  secure: true,      
  sameSite: "None",   
  path: '/',
  maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(200).json("Log out succes")
})


account.get("/Info" , async (req,res)=>{
       let token = req.cookies.token
    if(!token) return res.status(401).json("No token");
let   decoded = jwt.verify(token, process.env.JWT_SECRET);
let id = decoded.id
 if(!id ){
        return  res.status(500).json("Id or Code not found")
    }
    let resi = await pool.query("SELECT * FROM users WHERE id = $1 " , [id])
let user = resi.rows[0]
    if(!user){
      return    res.status(500).json("user not found")
    }
    res.status(200).json(user)
})

account.post("/LogIn" , async (req,res)=>{
    let {email , password} = req.body

    if(!email || !password){
     return     res.status(500).json("Data not found")
    }

    let result = await pool.query("SELECT * FROM users WHERE email =$1" , [email])
    let user = result.rows[0]
    if(!user){
      return    res.status(500).json("User not found")
    }
    if(user.password != password){
        return   res.status(500).json("Incorect password")
    }


    let token = jwt.sign({id:user.id} , process.env.JWT_SECRET , {expiresIn:'7d'})
    res.cookie("token" , token , {
          httpOnly: true,
  secure: true,      
  sameSite: "None",   
  path: '/',
  maxAge: 7 * 24 * 60 * 60 * 1000
    })
})
export default account
