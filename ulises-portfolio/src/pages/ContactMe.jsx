import React, { useState } from "react";
import "../styles/contact.css"
import "../sass/buttons.css"

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/a5993420-48a8-11ed-8970-6943e4ac8982'

export const ContactMe = () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {

    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  
  if (submitted) {

    return (
    <>
    <section class="login-main-wrapper">
      <div class="main-container">
          <div class="login-process">
              <div class="login-main-container">
                  <div class="thankyou-wrapper">
                      <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                        <p>for contacting me, I will get in touch with you soon... </p>
                        <a href="/">Back to home</a>
                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>
                </div>
            </div>
            <div class="clr"></div>
        </div>
    </section>
    </>

    );

  }

    return (
    <div className="container p-5 column" >
        <br /> <br /> <br />
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="container p-5 column  new" 
      >
        <div className="mb-3" >
        <label htmlFor="exampleFormControlInput1" className="form-label"> What is your name?  </label>
          <input type="text"  name="name" required className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
        </div>
        <div className="mb-3" >
        <label htmlFor="exampleFormControlInput1" className="form-label"> Enter your Email</label>
          <input type="email"  name="email" required className="form-control" id="exampleFormControlInput1" placeholder="jondoe@gmail.com"/>

        </div>
        <div  className="form-label">
          <textarea className="form-control" placeholder="Your message goes here..." name="message" required />
        </div>
        <div className="d-flex flex-row-reverse">
          <button className='button' type="submit"> Enviar</button>
        </div>
      </form>
    </div>
  );

};