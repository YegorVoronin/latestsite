import React, { useState } from 'react'
import './css/contact.css'
import Banner from './images/banner.jpg'
import emailjs from "emailjs-com"

function Contact() {
    const [errorMsg, setErrorMsg] = useState('none')
    const [nameError, setnameError] = useState('2px solid #c5c5c5')
    const [emailError, setEmailError] = useState('2px solid #c5c5c5')
    const [messageError, setMessageError] = useState('2px solid #c5c5c5')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [confirm, setConfirm] = useState('none')
    const [form, setForm] = useState('flex')
    const [statement, setStatement] = useState('flex')
    function sendEmail(e) {
        e.preventDefault();
        if (name.length < 6) {
            setnameError('2px solid crimson')
        } else{
            setnameError('2px solid #c5c5c5')
        }
        if (email.length < 5) {
            setEmailError('2px solid crimson')
        } else {
            setEmailError('2px solid #c5c5c5')
        }
        if (message.length < 6) {
            setMessageError('2px solid crimson')
        } else{
            setMessageError('2px solid #c5c5c5')
        }

        if (name.length > 5 && email.length > 4 && message.length > 20 ) {
            emailjs.sendForm('service_c911j3k', 'template_0zcqggk', e.target, 'user_3D4QNLWSx3wX6NNhYSVoP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setConfirm('flex')
            setForm('none')
            setStatement('none')
        } else {
            setErrorMsg('flex')
        }
        
        
      }
    function getName(val) {
        setName(val.target.value)
    }
    function getEmail(val) {
        setEmail(val.target.value)
    }
    function getMessage(val) {
        setMessage(val.target.value)
    }
    return (
        <div className='contact'>
            <img src={Banner}/>
            <div className="statement" style={{display: statement}}>
                <div>You contact me through the form below or the following email: </div>
                <div className='myEmail'>yegorvoronin9@gmail.com</div>
            </div>

            <div className="error"
                style={
                    {
                        display: errorMsg,
                    }
                }
            >
                Sorry, one of the following inputs wasn't filled properly.
            </div>
            
            <form action="" onSubmit={sendEmail} style={{display: form}}>
                <label htmlFor="">Name</label>
                <input type="text" 
                    onChange={getName} 
                    name='name'
                    placeholder='Required'
                    style={{
                        border: nameError
                    }}
                    />

                <label htmlFor="">Company</label>
                <input type="text" name='company' placeholder='Optional'/>
                
                <label htmlFor="">Email</label>
                <input type="text"
                    onChange={getEmail} 
                    name="email"
                    placeholder='Required'
                    style={{
                        border: emailError
                    }}
                    />

                <label htmlFor="">Message</label>
                    <textarea cols="80" rows="10" name='message' 
                        placeholder='Required' 
                        onChange={getMessage}
                        style={{
                            border: messageError
                        }}
                        ></textarea>

                <button className='sendBTN'>Send</button>
            </form>
            <div className="confirm" style={{display:confirm}}> 
                Thanks, the message 
                was sent! We'll reply as soon as possible.
            </div>
        </div>
    )
}

export default Contact
