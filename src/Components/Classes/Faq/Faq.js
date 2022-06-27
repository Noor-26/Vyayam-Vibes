import React from 'react'
import './faq.css'
function Faq() {
  return (
    <div className='container faq_container'>
        <h1 className='text-uppercase faq_header text-center pt-5 '>Faq</h1>
        <div className='row row-cols-1 row-cols-2 g-4 mt-5'>
    <article>
        <div>
    <h5 className='article_header position-relative '>Do I have to be flexible to practice yoga?</h5>
    <p className='py-3'>Simple answer is no. If you are nonflexible. Yoga is a great way to become more flexible.</p>
        </div>
        <div>
    <h5 className='article_header position-relative '>What are the various mode of payment accepted here?</h5>
    <p className='py-3'>You can make payment Via Cash.</p>
        </div>

    </article>
    <article>
    <div>
    <h5 className='article_header position-relative '>Which is the nearest landmark?</h5>
    <p className='py-3'>You can easily locate the establishment as it is in close proximity to Near LIC Saket</p>
        </div>

         <div>
    <h5 className='article_header position-relative '>What if I have pain or previous injury?</h5>
    <p className='py-3'>It is always appropriate to talk to the instructor about any existing physical condition. We will provide customize classes accordingly.</p>
        </div> 

        <div>
    <h5 className='article_header position-relative '>What about eating and drinking before class?</h5>
    <p className='py-3'>It is better to come hydrated to a yoga class and drink plenty of water after the class. In most yoga traditions drinking water during class is not recommended. Try not to have a full meal at least 3 hours before class.</p>
        </div>
    </article>

        </div>
    </div>
  )
}

export default Faq