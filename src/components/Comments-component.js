import React, { useState } from "react";
import SingleCommentComponent from "./Single-comment-component";
import uniqid from 'uniqid';
import { addComments } from "../redux/Actions";
import { useDispatch } from "react-redux";

const CommentsComponent = () => {
  const [input, setInput] = useState("");
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=uniqid()
    console.log(input,id)
    dispatch(addComments(input,id))
    setInput("")
  }

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="coments-content">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="comment"
        />
        <input type="submit" hidden />
        <SingleCommentComponent />
      </form>
    </div>
  );
};

export default CommentsComponent;
