import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { icrement,decrement } from "../Redux/Action"

const LikeComponent = () => {
  const dispatch = useDispatch();
  const {likes} = useSelector(state => state.LikeReducer)
  console.log("likes",likes)
  return (
    <div className='button-controls'>
      <button onClick={() => dispatch(icrement())}>♥ {likes}</button>
      <button onClick={()=>dispatch(decrement())}>👎</button>
    </div>
  )
}

export default LikeComponent;
