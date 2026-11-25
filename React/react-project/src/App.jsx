import Home from "./Home";
import './App.css'

function Players(props) {
  return (
    <div className="players">
    <h2>List of Players</h2>

      {props.data.map((player) => (
        <div key={player.id} className="player-card">
          <h3>ID: {player.id}</h3>
          <h3>Name: {player.name}</h3>
          <h3>Team: {player.team}</h3>
        </div>
      ))}
    </div>
  );
}



function Data(props) {
  console.log(props);

  return (
    <div className="data">
      <h2>Data Component</h2>
      <h2>College Name: {props.name}</h2>
    </div>
  );
}

function App() {

  let players_data = [
    {
      id: 100,
      name: "Kohli",
      team: "India"
    },
    {
      id: 101,
      name: "Rohit",
      team: "India"
    },
    {
      id: 102,
      name: "Dhoni",
      team: "India"
    },
   
  ];

  return (
    <div className="app">
      <h1>This is the App component</h1>
      <h2>Welcome to my React project!</h2>

      <Home />

      <Data name="SECE" />

      <Players data={players_data} />
    </div>
  );
}

export default App;
