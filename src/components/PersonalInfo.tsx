import React from 'react'
import "../scss/personalInfo.scss"

const PersonalInfo = () => {
  return (
    <main className="info">
      <h1 className='title'>Personal info</h1>
      <p className='desc'>Please provide your name, email address, and phone number.</p>
      <form>
        <div className="name">
          <p>Name</p>
          <input type="text" id="name" placeholder="e.g. Stephen King" />
        </div>
        <div className="email">
          <p>Email Address</p>
          <input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="phone">
          <p>Phone Number</p>
          <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
    </main>
  );
}

export default PersonalInfo