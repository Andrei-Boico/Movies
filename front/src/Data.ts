import { create } from "zustand";

type Data = {
  name: string;
  url: string;
};
type Descrip = {
  name: string;
  descr: string;
};
type Store = {
  data: Data[],
    data2: Data[];
info : Descrip[]

};

const useData = create<Store>(() => ({
  data: [
    { name: "Action", url: "/ImagesMovies/9c8ede6c-056e-474d-870c-8b0ec386ae8a.jpeg" },
     { name: "Adventure", url: "/ImagesMovies/50-guy-movies-collage.jpg" },
      { name: "Comedy", url: "/ImagesMovies/10_defining_buddy_comedies.jpg" },
       { name: "Drama", url: "/ImagesMovies/30-streamable-period-dramas.png" },
        { name: "Horor", url: "/ImagesMovies/s-l1200.jpg" },
         { name: "Fantasy", url: "/ImagesMovies/424.jpg" },
  ],
    data2: [
    { name: "True Detective", url: "/ImagesSerials/a82aa03b-09c5-4cb4-ba85-561a9e25a90b.avif" },
{name:"Sopranos" , url:"/ImagesSerials/1eae1a01825768fd831c425f3a0b9524489d163ce3d50083322d13676abfe477.jpg"} ,
    { name: "Game of Thrones", url: "/ImagesSerials/9431d5fd76b59f032b23b8e9f8569c73be936a730c97cadb84ce0a8ea7839736.jpg" },
{name:"Breaking Bad" , url:"/ImagesSerials/breaking-bad-background-hd-wallpaper.png"} ,

    { name: "Crown", url: "/ImagesSerials/1593859334_1.jpg" },
{name:"The Last of Us" , url:"/ImagesSerials/The-Last-Of-Us-Season-2-.jpg"} ,

  ], 
  info:[
    {name:"What is StreamVibe" , descr:"StreamVibe is an online platform for watching movies and TV shows in high quality."},
        {name:"How can I support the project?" , descr:"In the Support Us section, different donation options are available (card, PayPal, etc.)"},
        {name:"Do I need to pay to use it?" , descr:"No, there is no paid subscription. The project is free, but you can support it with a donation.."},
        {name:"On which devices does StreamVibe work?" , descr:"On smartphones, tablets, computers, and smart TVs."},
        {name:"Is Russian language supported?" , descr:"Yes, the interface and subtitles are available in Russian."},
        {name:"Are new releases supported" , descr:"Yes, new movies and TV shows are regularly added to the library."},
        {name:"Can I share my account?" , descr:"An account is not required, but when registered, you get personal settings and a viewing history."},
        {name:"Where can I go if I have problems?" , descr:"In the Support section of the app or website, as well as via email"},
    
  ]

}));

export default useData;
