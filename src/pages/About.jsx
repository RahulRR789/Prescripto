import React from "react";
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-25 text-gray-500'>
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className='flex flex justify-center my-2 flex flex-col md:flex-row gap-15'>
        <img className='w-full md:max-w-[280px]'src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-4/8 text-sm text-gray-600'>
          <p>
            Welcome To Ponczipth. Your Trusted Porter In Managing Your
            Healthcore Needs Conveniently And Efficiently. At Pressriptg. We
            Understand The Challenges individuals Face When It Comes To
            Scheduling Doctor Appointment And Managing Their Health Records.
          </p>
          <p>
            Prescripto Is Committed To Facellence In Healthcare Technology. We
            Continuously Strive To Enhance Our Platform integrating The Latest
            Adrancements To Improve User Experience And Diver Superior Service
            Whether You're Bouiring Your First Appointment Or Managing Ongoing
            Care, Phestos Here To Support You Every Step Off The Way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our Vision Prescricho is To Create A Seamless Healthcare Experience
            For Every User. We Aim To Bridge The Gap Between Patients And
            Healthcare Providers, Making it Easier For You To Access The Care
            You Need,When You Need it.
          </p>
        </div>
      </div>
      <div className='text-center text-2xl my-8'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col gap-12 md:flex-row mx-15 mb-20'>
        <div className='border px-10 md:px-5 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--bg-color)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-5 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--bg-color)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience</b>
        <p>Access to our network of trusted healthcare professionals in your area</p>
        </div>
        <div className='border px-10 md:px-3 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--bg-color)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personlization</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  );
};

export default About;
