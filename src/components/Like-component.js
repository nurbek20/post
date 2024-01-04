import React from "react";
import { increment, } from "../redux/Actions";
import { useDispatch,useSelector } from "react-redux";

const LikeComponent = () => {
  const dispatch=useDispatch()
  const {likes} = useSelector((state)=>state.LikeReducer)
  return (
    <div className="button-controls">
      <button onClick={()=>dispatch(increment())}> ♥ {likes} </button>
      <button> 👎 </button>
    </div>
  );
};

export default LikeComponent;
