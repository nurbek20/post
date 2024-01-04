import React from "react";
import "./App.css";
import LikeComponent from "./components/Like-component";
import CommentsComponent from "./components/Comments-component";

const App = () => {
  
  return (
    <div className="app">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://ru-ru.learn.canva.com/wp-content/uploads/sites/19/2020/07/paul-skorupskas-7KLa-xLbSXA-unsplash-2.jpg" alt="" />
            <LikeComponent/>
          </div>
          <CommentsComponent/>
        </div>
      </div>
    </div>
  );
};

export default App;
