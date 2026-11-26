//import Home from "./Home";
//import './App.css'
//import Counter from "./Hooks/UseState/Counter.jsx";
//import Score from "./Hooks/UseState/Score.jsx";

//function Players(props) {
  //return (
    //<div className="players">
    //<h2>List of Players</h2>

      //{props.data.map((player) => (
        //<div key={player.id} className="player-card">
          //<h3>ID: {player.id}</h3>
          //<h3>Name: {player.name}</h3>
         // <h3>Team: {player.team}</h3>
        //</div>
     // ))}
    //</div>
//  );
//}



//function Data(props) {
  //console.log(props);

  //return (
    //<div className="data">
      //<h2>Data Component</h2>
      //<h2>College Name: {props.name}</h2>
    //</div>
  //);
//}

//function App() {

  //let players_data = [
    //{
      //id: 100,
      //name: "Kohli",
      //team: "India"
    //},
    //{
      //id: 101,/
      //name: "Rohit",
     // team: "India"
    //},
    //{
      //id: 102,
      //name: "Dhoni",
     // team: "India"
    //},
   
  //];

  //return (
    //<div className="app">
     // <h1>This is the App component</h1>
      //<h2>Welcome to my React project!</h2>

      //<Home />
      //<Counter />
     //<Score />

    // <Data name="SECE" />

      //<Players data={players_data} />
  // </div>
// );
//}

//export default App;

import React from 'react'
import Counter from './Hooks/UseState/Counter'
import Score from './Hooks/UseState/Score'
import './App.css'
import Flipkart from './Components/Flipkart'

function App() {
  const mobile = "Samsung";
  return (
    <div className="app">
  <h1>App Component</h1>
  

  <div className="counter">
   <Counter />
  </div>

  <hr />

  <div className="score">
    <Score />
  </div>

  <div className="flipkart">
<Flipkart mobile={mobile}/>
  </div>
</div>
  )
}

export default App
