import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
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
