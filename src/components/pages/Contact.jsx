import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29aace56-20a6-464d-9617-776de1eef7ac"); // Ensure to replace with your actual access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form onSubmit={onSubmit}>
                <div className='flex'>
                  <input type='text' name='name' placeholder='Name' data-aos='flip-left' required />
                  <input type='tel' name='contactNumber' placeholder='Contact Number' data-aos='flip-right' required />
                </div>
                <input type='email' name='email' placeholder='Email' data-aos='flip-up' required />
                <textarea name='message' cols='30' rows='10' placeholder='Message' data-aos='flip-down' required></textarea>
                <button type='submit' data-aos='zoom-in-up'>Submit</button>
              </form>
              <span>{result}</span>
            </div>
            <div className='left'>
              {contact.map((item, index) => (
                <div className='box' data-aos='zoom-in' key={index}>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



 