
import React from "react";


const About = () => {
  
  return (
    <div>
    <h2 class="text-3xl font-bold pt-16 text-center mt-10">About Us</h2>
    <about className="m-20 md:w-auto mt-8 flex flex-col md:flex-row items-center justify-between  py-8 bg-white-100">
        
         {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://media.istockphoto.com/id/1382098454/vector/small-team-of-people-working-and-discussing-business.jpg?s=612x612&w=0&k=20&c=j71n099fqXAzUFroctPs3Vkq1RP_EzxKE1FTnupI8Tg="
          alt="Placeholder"
          className="rounded-none rounded-lg "
        />
      </div>
       {/* Content Section */}
       <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
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
               corporis velit, dignissimos dolor veritatis ipsam provident sequi explicabo nemo 
               inventore nam dicta obcaecati facere modi asperiores eveniet! Voluptas, nostrum officiis
                ipsa hic vel, repudiandae consequatur excepturi aspernatur mollitia esse corrupti fugiat
                 similique dolor reiciendis!
        </h4>
        <button className="bg-green-500 text-white px-7 py-4 rounded-lg hover:bg-blue-600">
          ReadMore..
        </button>
      </div>
    </about>

    <h2 class="text-3xl font-bold text-center mt-10">Vision</h2>
    <vision className="m-20 md:w-auto  flex flex-col md:flex-row items-center justify-between  py-8 bg-white-100" >
    <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
        Towards an Inclusive and Equitable Society
        </h1>
        <h4 className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          eros vel velit volutpat Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Saepe consequatur maxime animi unde, cupiditate ad cum rem! Numquam, maxime excepturi
            reiciendis voluptates impedit dolores nesciunt. Delectus eos totam sunt modi enim
             maxime temporibus nam repellat rem vitae iure asperiores illo eum debitis hic,
              magni soluta officiisipsa hic vel, repudiandae consequatur excepturi aspernatur
               mollitia esse corrupti fugiatsimilique dolor reiciendis!
        </h4>
      </div>

         {/* Image Section */}
         <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://storage.googleapis.com/msgsndr/zjHhY1RN05RPHTNERjkG/media/6723aff4849c7e12fb0b36d6.svg"
          alt="Placeholder"
          className="rounded-none rounded-lg "
        />
      </div>
    </vision>

    <h2 class="text-3xl font-bold text-center mt-10">Mission</h2>
    <mission className="m-20 md:w-auto mt-8 flex flex-col md:flex-row items-center justify-between  py-8 bg-white-100">

       
         {/* Image Section */}
         <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=173,h=175,fit=crop/dWx0aG29O6s5kZ1K/1-AzGDkMjOpyfXj1Wn.png"
          alt="Placeholder"
          className="rounded-none rounded-lg w-96 "
        />
      </div>
       {/* Content Section */}
       <div className="md:w-1/2 m-20 text-center md:text-left">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
        Empowering Marginalized Communities
        </h1>
        <h4 className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          eros vel velit volutpat Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Saepe consequatur maxime animi unde, cupiditate ad cum rem! Numquam, maxime excepturi
            reiciendis voluptates impedit dolores nesciunt. Delectus eos totam sunt modi enim
             maxime temporibus nam repellat rem vitae iure asperiores illo eum debitis hic,
              magni soluta  sequi explicabo nemo 
               inventore nam dicta obcaecati facere modi asperiores eveniet! Voluptas, nostrum officiis
                ipsa hic vel, repudiandae consequatur excepturi aspernatur mollitia esse corrupti fugiat
                 similique dolor reiciendis!
        </h4>
        </div>
    </mission>
    </div>
  );
};

export default About;
