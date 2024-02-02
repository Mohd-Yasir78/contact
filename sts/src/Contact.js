import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='image_box'>
      <home>Home<i class="fa-solid fa-chevron-right"></i></home>
      <contact>Contact us <i class="fa-solid fa-chevron-right"></i></contact>
      <h1>Contact us</h1>
      </div>

    <div className='info'>
        <div className='box1'>
        <div className='let'>Let's get in touch</div>
        <div className='we'>We're open for any suggestion or<br/> just to have a chat</div>
        <div className='email'>
            <div className='circle'><i class="fa-solid fa-paper-plane"></i></div>
            <div className='email1'>Email : <br/>contact@stseducationindia.com</div>
        </div>

        <div className='email'>
            <div className='circle'><i class="fa-solid fa-paper-plane"></i></div>
            <div className='email1'>Email : <br/>info@stseducationindia.com</div>
        </div>

        <div className='email'>
            <div className='circle'><i class="fa-solid fa-phone"></i></div>
            <div className='email1'>Contact No:<br/> +91 6202 25 44 50</div>
        </div>

        <div className='email'>
            <div className='circle'><i class="fa-solid fa-earth"></i></div>
            <div className='email1'>Website <br/>stseducationindia.com</div>
         </div>
         </div>


        <div className='box2'>
            <div className='heading'>Get in touch</div>
            <div className='name_box'>
                <div className='name'>
                    <label>NAME</label><br/>
                    <input type='text' placeholder='Name' required></input>
                </div>
                <div className='name'>
                    <label>EMAIL ADDRESS</label><br/>
                    <input type='text' placeholder='Email' required></input>
                </div>
            </div>
            <div className='subject'>
                <label>SUBJECT</label><br/>
                <input type='text' placeholder='Subject' required></input>
            </div>
            <div className='message'>
                <label>MESSAGE</label><br/>
                <textarea cols='73' rows='4' placeholder='Message'></textarea>
            </div>
            <button>Send Message</button>
        </div>
    </div>
    </>
  )
}

export default Contact
