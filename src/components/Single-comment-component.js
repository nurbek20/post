import React from 'react'

const SingleCommentComponent = () => {
  return (
    <div className='comments-item'>
        <div className='comments-item-delete'>X</div>
        <input type="text" placeholder='text' name="" id="" />
        <input type="submit" hidden />
    </div>
  )
}

export default SingleCommentComponent