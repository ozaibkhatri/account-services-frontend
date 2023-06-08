import React from 'react'

const ForgetPassword = () => {

    function sendEmail(){
        window.Email.send({
            Host : "smtp.gmail.com",
            Username : "xlooptest98@gmail.com",
            Password : "Xloop@123",
            To : 'afnanyousuf@gmail.com',
            From : "xlooptest98@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }

  return (
    <>
    <div>ForgetPassword</div>
    <input type="button" onClick={sendEmail} />
    </>
  )
}

export default ForgetPassword