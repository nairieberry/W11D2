import React from "react";
import ReactDOM from "react-dom";
import {receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from "./util/api_util";
import configureStore from "./store/store";
import selectAllPokemon from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<h1>pokedex</h1>, root)
});