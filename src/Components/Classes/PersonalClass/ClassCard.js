import React from 'react'
import {BsCheckLg} from 'react-icons/bs';
function ClassCard({slot}) {
    const {plan,price,details} = slot
  return (
    <div>
        <p className='card_text'>{plan}</p>
        <strong className='package mb-4'>Package: ₹{price}</strong>
        <ul className='mt-5'>
            {details.map(detail => <li  > <BsCheckLg className='me-3 package_icon'/>{detail}</li>)}
        </ul>
    </div>
  )
}

export default ClassCard