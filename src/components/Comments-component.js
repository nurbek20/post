import React, { useState } from "react";
import SingleCommentComponent from "./Single-comment-component";
import uniqid from "uniqid";
import { addComments } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const CommentsComponent = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.CommentsReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    console.log(input, id);
    dispatch(addComments(input, id));
    setInput("");
  };
  console.log("comments>>>", comments);

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
      </form>

      {comments.map((elem, i) => {
        return <SingleCommentComponent key={i} {...elem} />;
      })}
    </div>
  );
};

export default CommentsComponent;
