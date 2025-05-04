import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactMePage = () => {
  const [form, setForm] = useState(
    {
      fullName: "",
      email: "" ,
      phoneNumber: "",
      subject: "",
      message: ""
    }
  )
  // const[submission, setSubmission] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=> {
    const {name, value}= e.target;
      setForm((preVal => {
        return {
          ...preVal,
          [name]: value
        }
      }))
  }
  const handleSubmission = async (e)=> {
    e.preventDefault();
    setIsSubmitting(true);
   try {
      const res = await fetch('http://localhost:3000/db',{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      if(!res.ok){
        throw new Error("HTTP request failed!", res.status)
      }
      const data = res.json();

      setForm({
        fullName: "",
        email: "" ,
        phoneNumber: "",
        subject: "",
        message: ""
      })
      navigate('/');
   } catch (error) {
    console.error(error);
    
   } finally{
    setIsSubmitting(false);
   }
  }

  return (
    <section className="mt-32 py-6 px-4">
      <div className="container border w-2/3 py-8 px-6 m-auto md:w-2/4 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl mb-12">
          Contact <span style={{ color: "orangered" }}>Me</span>
        </h1>
        <div className=" w-full">
        <form onSubmit={handleSubmission} className="flex flex-col m-auto space-y-5 py-4 px-5">
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="fullName">Full Name</label>
          <input 
            type="text"
            className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="email"
                value={form.email}
                onChange={handleChange}
             />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="phoneNumber">Phone Number</label>
            <input 
                type="tel"
                id="phoneNumber"
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
             />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="subject">Subject</label>
            <input 
                type="text" 
                id="subject"
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="subject"
                value={form.subject}
                onChange={handleChange}
            />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="message">Your Message</label>
            <textarea
                className="border text-gray-600 w-full rounded-lg focus:outline-none py-2 px-3"
                name="message" 
                placeholder="Type your message...."
                id="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
            >
            </textarea>
          </div>
         <button 
            className="border px-3 py-2 rounded-lg cursor-pointer bg-orange-600 text-gray-600 font-bold"
            disabled={isSubmitting}
         >
            {isSubmitting ? "Submitting..." : "Submit"}
         </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMePage;
