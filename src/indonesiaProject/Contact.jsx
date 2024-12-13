import React from "react";


const Contact = () => {
    
return (

  
  <contact className="  m-20 md:w-auto pt-16 mt-8 flex flex-col md:flex-row items-center justify-between  py-8 bg-white-100">

          <div>
      <form className="md:w-full w-full max-w-md bg-white shadow-md m-20 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2"> Name</label>
          <input
            type="text" id="name" placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label  className="block text-gray-700 font-medium mb-2"> Email</label>
          <input type="email" placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
           </div>

<div className="mb-4">
  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
    Message
  </label>
  <textarea
    placeholder="Enter your message"
    rows="4"
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
  ></textarea>
</div>

<button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
  Submit
</button>
</form>
</div>
         {/* Image Section */}
         <div className="md:w-1/2  mt-8 md:mt-0">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/118/228/small_2x/woman-working-as-an-it-support-free-vector.jpg"
          alt="Placeholder"
          className="rounded-none rounded-lg "
        />
      </div>
  </contact>




)

}
export default Contact;
