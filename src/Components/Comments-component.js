import React from 'react'


const CommentsComponent = () => {
  

  return (
    <div className='card-coments'>
        <form 
        className='comments-item'>
            <input 
            type="text" placeholder='comment' />
            <input type="submit" hidden />
        </form>
        
    </div>
  )
}

export default CommentsComponent
