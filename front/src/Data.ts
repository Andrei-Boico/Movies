import { create } from "zustand";

type Data = {
  name: string;
  url: string;
};

type Store = {
  data: Data[];

};

const useData = create<Store>(() => ({
  data: [
    { name: "Action", url: "/Images/9c8ede6c-056e-474d-870c-8b0ec386ae8a.jpeg" },
     { name: "Adventure", url: "/Images/50-guy-movies-collage.jpg" },
      { name: "Comedy", url: "/Images/9c8ede6c-056e-474d-870c-8b0ec386ae8a.jpeg" },
       { name: "Drama", url: "/Images/9c8ede6c-056e-474d-870c-8b0ec386ae8a.jpeg" },
        { name: "Horor", url: "/Images/9c8ede6c-056e-474d-870c-8b0ec386ae8a.jpeg" },
         { name: "Fantasy", url: "/Images/9c8ede6c-056e-474d-870c-8b0ec386ae8a.jpeg" },
  ],

}));

export default useData;
