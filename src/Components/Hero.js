import React from 'react'
import hero from '../Assets/customer-hero-img.4cb86085746fb67aa0f7.png'
import google from '../Assets/google.png'
import store from '../Assets/store.png'
import spar from '../Assets/spar.png'
import arise from '../Assets/arise.png'
import download from '../Assets/download.png'
import signup from '../Assets/signup.png'
import enjoy from '../Assets/enjoy.png'
import phone from '../Assets/phone.png'
import phone2 from '../Assets/phone2.png'
import Newsletter from './Newsletter'


const Hero = () => {
  return (
    <div>
        <div className='hero'>
            <section className='hero-content'>
                <div className='h-l'>
                    <h1>Your <span>Gateway</span> to <span>Unbeatable</span> Discounts</h1>
                    <p>Enjoy up to 5% discount on items purchased via <span>SlashPoint</span>.</p>

                    <div>
                        <img src={google} alt="" />
                        <img src={store} alt="" />
                    </div>
                </div>

                <img src={hero} alt="" className='hero-img'/>
            </section>
            
        </div>

        <div className="trust">
            <h1>Trusted by</h1>
            <img src={spar} alt="" />
            <img src={arise} alt="" />
            <img src="" alt="" />
        </div>

        <div className="process">

            <h2>Process</h2>
            <h3>How It Works</h3>


            <section>


                <div>
                    <img src={download} alt="" />
                    <h4>Download the App</h4>
                    <p>Open the Google Play Store or Apple App Store and search for Slashpoint and install it on your mobile device.</p>
                </div>

                <div>
                    <img src={signup} alt="" />
                    <h4>Sign Up</h4>
                    <p>Provide your email and details to effortlessly create your account and access our exciting features.</p>
                </div>

                <div>
                    <img src={enjoy} alt="" />
                    <h4>Enjoy Features</h4>
                    <p>Discover enticing discounts across diverse categories and choose delivery or a personal shopper for your package.</p>
                </div>


            </section>

        </div>

        <section className='hero-content-second'>

            <img src={phone} alt="" className='hero-img'/>

            <div className='h-l'>
                <h1><span>SlashPoint</span> Discount Purchase</h1>
                <p><span>SlashPoint</span> is an online shopping platform that provides a unique opportunity for customers to shop online at a discounted rate of up to 5% after saving with us for a period of 14 days.</p>

                <div>
                    <img src={google} alt="" />
                    <img src={store} alt="" />
                </div>
            </div>

        </section>

        <div className='download '>

            <section className='hero-content-second hero-content-second2'>

                

                <div className='h-l'>
                    <h1>Download the App Now!</h1>
                    <p>We offer our users a smart and rewarding purchasing experience.</p>

                    <div>
                        <img src={google} alt="" />
                        <img src={store} alt="" />
                    </div>
                </div>

                <img src={phone2} alt="" className='hero-img'/>

            </section>

        </div>

        <div className="download2">
            <h1>Download the SlashPoint App Now!</h1>
            <p>We offer our users a smart and rewarding purchasing experience.</p>
            <div>
                <img src={google} alt="" />
                <img src={store} alt="" />
            </div>
        </div>

        

        <Newsletter/>

        
        


    </div>
  )
}

export default Hero