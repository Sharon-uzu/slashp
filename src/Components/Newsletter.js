import React from 'react'

const Newsletter = () => {
  return (
    <section className='wait-list'>
            <div className="wait">
                <div>
                    <h2>Join our Waitlist</h2>
                    <p>Unlock Exclusive Treasures: Join Our Waitlist for Front Row Access to Unbeatatble Discounts</p>
                </div>
                <form className='newsletter'>
                    <input type="email" placeholder='Enter your email here' />
                    <button type="submit">Subscribe</button>

                </form>
            </div>

        </section>
  )
}

export default Newsletter