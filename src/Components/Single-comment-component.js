import React, {useEffect, useState} from 'react'

const SingleCommentComponent = (props) => {
    const [comment, setComment]=useState('')
    const {title, id}=props

    useEffect(()=>{
        if(title){
            setComment(title)
        }
    }, [title])

  return (
    <div className='comments-item'>
      <div className='comments-item-delete'>X</div>
      <input 
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      type="text" />
      <input type="submit" hidden />
    </div>
  )
}

export default SingleCommentComponent

