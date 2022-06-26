import React from 'react'

function ReviewCard(props) {
    const {name,review,img,} = props.review
  return (
    <div className='review-card '>
        <p>{review}</p>
        <div className='d-flex align-items-center'>
    <div>
        <img src={img} className="review-icon" alt="" />
    </div>
    <div className='px-3'>
        {name}
    </div>
        </div>
    </div>
  )
}

export default ReviewCard