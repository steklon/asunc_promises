import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load()
  .then((saving) => {
    // saving объект класса GameSaving
    console.log(saving);
  }, (error) => new Error(error));
