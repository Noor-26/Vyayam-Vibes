import React from 'react'
import './Review.css'
import ReviewCard from './ReviewCard'

function Review() {
    const reviews = [
        {
            id:1,
            review:"My yoga trainer was really good. He came on time and very flexible. I had sinus issue I could not sleep in ac but after doing yoga for 3 months, it was possible to sleep. Now I feel very flexible and I can do all yoga exercises. I am really thankful for my yoga teacher.",
            img: "https://vyayamvibes.in/vyayamvibes_media/2021/08/PngItem_110965.png",
            name:"Priyanka Joseph"

        },
        {
            id:2,
            review:"Very proficient yoga trainer who emphasize on your physical and mental health issues. Got much relief in body ache and stiffness. About to complete a month with Dheeraj ji. I am feeling relaxed and motivated to continue yoga for better health and lifestyle.",
            img: "https://vyayamvibes.in/vyayamvibes_media/2021/08/PngItem_223916.png",
            name:"Ishan"

        },
        {
            id:3,
            review:"I was becoming lethargic due to lockdown and work from home culture. But after joining vyayam vibes yoga classes, I was able to overcome lethargy and work towards my Fitness. I opted for 'at home offline class' and it was a nice experience as my trainer.",
            img: "https://vyayamvibes.in/vyayamvibes_media/2021/08/PngItem_110965.png",
            name:"Richa Singhal"

        },
    ]
  return ( 
    <div>
        <div className=' mx-auto head_container'>
        <p class="review_header mx-auto   ">WHAT MY CLIENTS​​ SAY ABOUT ME</p>
        </div>
        <div className=' review-container  mx-auto'>
            {
                reviews.map(review => <ReviewCard key={review.id} review={review}/>)
            }
        </div>
    </div>
  )
}

export default Review