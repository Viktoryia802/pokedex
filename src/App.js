import React from "react";

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

function Logo() {
  return (
    <header>
      <h1>Welcome to the Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="a bird"
      />
    </header>
  );
  var { appName } = "pokedex";
}

function BestPokemon() {
  return <p>My favourite Pokemon is Squirtle</p>;
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
