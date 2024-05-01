import React from 'react';
import './ContactInfoCard.css'

function ContactInfoCard({ iconUrl, text }) {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>
        <a target="_blank" rel="noopener noreferrer" href={text}> {text}  </a>
        

    </div>
  )
}

export default ContactInfoCard