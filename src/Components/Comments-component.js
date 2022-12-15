import React, { useState, useEffect, useCallback } from 'react'
import uniqid from 'uniqid';
import { addComments } from '../Redux/Action';
import { useSelector, useDispatch } from 'react-redux';
import SingleCommentComponent from './Single-comment-component';

const CommentsComponent = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const {comments}=useSelector(state=>state.CommentsReducer)
  console.log("comments>>", comments)

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid()
    dispatch(addComments(input, id))
    setInput('')
  }
  return (
    <div className='card-coments'>
      <form onSubmit={handleSubmit}
        className='comments-item'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text" placeholder='comment' />
        <input type="submit" hidden />
      </form>
      {
        comments.map((elem, index)=>{
          return <SingleCommentComponent key={elem.id} {...elem} />
        })
      }
    </div>
  )
}

export default CommentsComponent
