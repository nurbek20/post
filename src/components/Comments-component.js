import React from 'react'
import SingleCommentComponent from './Single-comment-component'

const CommentsComponent = () => {
  return (
    <div className='card-comments'>
        <form className='coments-content'>
            <input type="text" placeholder='comment' name="" id="" />
            <input type="submit" hidden />
            <SingleCommentComponent/>
        </form>
    </div>
  )
}

export default CommentsComponent
