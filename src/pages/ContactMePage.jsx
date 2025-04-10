import React from "react";

const ContactMePage = () => {
  return (
    <section className="mt-32 py-6 px-4">
      <div className="container border w-2/3 py-8 px-6 m-auto md:w-2/4 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl mb-12">
          Contact <span style={{ color: "orangered" }}>Me</span>
        </h1>
        <div className=" w-full">
        <form action="" className="flex flex-col m-auto space-y-5 py-4 px-5">
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="fullname">Full Name</label>
            <input 
                type="text"
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="fullName"
             /> 
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="email">Email</label>
            <input 
                type="email"
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="email"
             />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="phonenumber">Phone Number</label>
            <input 
                type="number"
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="phoneNumber"
             />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="fullName">Subject</label>
            <input 
                type="text" 
                className="border text-gray-600 rounded-lg py-2 px-3 w-full focus:outline-none"
                name="subject"
            />
          </div>
          <div>
            <label 
                className="block mb-2 text-gray-600 font-bold"
                htmlFor="fullName">Your Message</label>
            <textarea
                className="border text-gray-600 w-full rounded-lg focus:outline-none py-2 px-3"
                name="message" 
                placeholder="Type your message...."
                id=""
                rows={4}
            >
            </textarea>
          </div>
          <input 
            type="submit" 
            className="border px-3 py-2 rounded-lg cursor-pointer bg-orange-600 text-gray-600 font-bold"
        />
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMePage;
