import React from "react";

//{fav} = props.fav
function Food({ name, image }) {
  return <div>
    <img src={image} alt={name}/>
    <h1>I like {name}</h1>
  </div>
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id: 2,
    name: "ramen",
    image: "https://www.kikkoman.eu/fileadmin/_processed_/0/0/csm_WEB_Traditional_Fukuoka_Ramen_0af581b084.jpg"
  }
];
function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} image={dish.image}/> )}
    </div>
    );
}

export default App;
