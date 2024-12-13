
import React from "react";

const Home = () => {
 

  return ( 
    <div>
    
    <main className="w-full md:w-auto mt-16 ml-20 flex flex-col md:flex-row items-center pt-16 justify-between px-4 py-8 bg-white-100">
      {/* Content Section */}
      <div className="md:w-1/2 m-20 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
         Rhema For Indonesia(RFI)
        </h1>
        <h4 className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          eros vel velit volutpat placerat.
        </h4>
        <button className="bg-green-500 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          Let's Explore
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://strategicads.net/wp-content/uploads/2021/10/Website-Designing.png"
          alt="Placeholder"
          className="rounded-none rounded-lg "
        />
      </div>
    </main>

     <h2 class="text-3xl text-center font-bold mt-10">About Us</h2>
    <about className="wmd:w-auto m-20  mt-8 flex flex-col md:flex-row items-center justify-between  py-8 bg-white-100">
        
         {/* Image Section */}
      <div className=" md:w-1/2  mt-8 ml-20 md:mt-0 ">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Abstract-Logo-Graphics-1-136-580x386.jpg"
          alt="Placeholder"
          className="rounded-none rounded-lg "
        />
      </div>
       {/* Content Section */}
       <div className="md:w-1/2 m-10 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
         Rhema For Indonesia(RFI)
        </h1>
        <h4 className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          eros vel velit volutpat Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Saepe consequatur maxime animi unde, cupiditate ad cum rem! Numquam, maxime excepturi
            reiciendis voluptates impedit dolores nesciunt. Delectus eos totam sunt modi enim
             maxime temporibus nam repellat rem vitae iure asperiores illo eum debitis hic,
              magni soluta cupiditate! Et eveniet facilis voluptatem molestiae voluptates.
               Quod laborum harum tempore ad eos! Enim suscipit similique harum rem in earum 
               facere modi asperiores eveniet! Voluptas, nostrum officiis
                ipsa hic vel, repudiandae consequatur excepturi aspernatur mollitia esse corrupti fugiat
                 similique dolor reiciendis!
        </h4>
        <button className="bg-green-500 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          ReadMore..
        </button>
      </div>
    </about>

    <h2 class="text-3xl text-center font-bold ml-20 mt-10">Initatives</h2>
    <intiatives class=" w-auto flex flex-col m-20 md:flex-row items-center mt-10 justify-between" >
        <div class=" shadow-lg shadow-black-500 px-8 py-10 rounded-lg m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300" >
            <h2>Elderly Care</h2>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                 ut optio qui facilis quisquam repudiandae aperiam animi deserunt ullam eaque!</p>
                 <button className="bg-green-500 mt-5 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          ReadMore
        </button>
        </div>
        <div class=" shadow-lg shadow-black-500 px-8 py-10 rounded-lg m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
            <h2>Elderly Care</h2>
            <p class="mt-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                 ut optio qui facilis quisquam repudiandae aperiam animi deserunt ullam eaque!</p>
                 <button className="bg-green-500 mt-5 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          ReadMore
        </button>
        </div>
        <div class="shadow-lg shadow-black-500 px-8 py-10 rounded-lg m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
            <h2>Elderly Care</h2>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                 ut optio qui facilis quisquam repudiandae aperiam animi deserunt ullam eaque!</p>
                 <button className="bg-green-500 mt-5 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          ReadMore
        </button>
        </div>
        <div class="shadow-lg shadow-black-500 px-8 py-10 rounded-lg m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
            <h2>Elderly Care</h2>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                 ut optio qui facilis quisquam repudiandae aperiam animi deserunt ullam eaque!</p>
                 <button className="bg-green-500 mt-5 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          ReadMore
        </button>
        </div>
    </intiatives>

    </div>
  );
};

export default Home;
