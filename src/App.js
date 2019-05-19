import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import "./App.css";
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
