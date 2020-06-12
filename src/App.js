import React from "react";

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

function Logo() {
  var appName = "Pokedex";
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="a bird"
      />
    </header>
  );
}

function BestPokemon() {
  return <p>My favourite Pokemon is Squirtle</p>;
}

function CaughtPokemon() {
  var date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
}

const Weather = () => {
  const weatherData = {
    temperature: 5,
    location: "London"
  };

  return (
    <p>
      The temperature in {weatherData.location} is {weatherData.temperature}
    </p>
  );
};

export default App;
