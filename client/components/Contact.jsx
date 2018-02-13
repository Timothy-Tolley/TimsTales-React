import React from 'react'

const Contact = (props) => {
  return (
    <div>
      <div className='contact'>
        <p>
          <strong> CONTACT: </strong> Timothytolley@outlook.com
        </p>
        <a href="mailto:timothytolley@outlook.com">
          <img
            src = '../../images/mail.png'
            alt = 'mail'
            className = 'mailIcon'/>
        </a>
      </div>
    </div>
  )
}

export default Contact
