import React from 'react'
import Broucher from './Broucher';
import Cta from './Cta';
import Message from './Message';
import RecruitmentProcess from './RecruitmentProcess';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import Coordinators from './Coordinators';
import AdminStaff from './AdminStaff';


const Home = () => {

  
    return (
        <div
            className="relative h-[550px] bg-cover w-full"
            style={{ backgroundImage: "url('https://iiitk.ac.in/images/banners/1701280271.png')" }}
        >
            {/* Overlay for the background image */}


            {/* Navbar */}
            <nav className="bg-blue-600 p-4 flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/5/5f/Indian_Institute_of_Information_Technology_Design_and_Manufacturing%2C_Kurnool_logo.png"
                        alt="IIITDM kurnool"
                        className="h-10 w-10 inline-block mr-2"
                    />
                    Placement Cell, IIITDM Kurnool
                </div>
                <div className="text-white space-x-6 font-bold mr-10">
                    
                    <a href="#overview" className="hover:text-gray-200">Overview</a>
                    <Link to='/Broucher' className="hover:text-gray-200">Why Recruit </Link>
                    <a href="#directors-message" className="hover:text-gray-200">Director's Message</a>
                    <a href="#process" className="hover:text-gray-200">Recruitment Process</a>
                    <a href="#contact" className="hover:text-gray-200">Contact Us</a>
                </div>
            </nav>

            

            {/* Main content container using Flexbox */}
            <div className="relative z-10 flex items-center   mx-auto max-w-7xl px-4 py-16">

                {/* Header Section (75% width) */}
                <div className="flex-1 bg-black bg-opacity-40 text-white p-8 mr-[150px] ml-[-95px] rounded-2xl h-[350px]">
                    <h1 className="text-4xl font-bold text-left">A one stop portal for Placements & <br /> Internships</h1>
                    <p className="mt-4 text-xl text-left">
                        Welcome to the recruitment website for IIITDM Kurnool. <br /> IIT is India's foremost industrial leadership development institution.
                        Our graduates are a combination of rigorous thinking, hard work, and fundamental stronghold.
                        They are nurtured by the institute to strive for excellence and deliver impact in their field of work. Let us begin...
                    </p>
                </div>

                {/* Buttons Section (25% width) */}
                <div className="w-[200px] flex flex-col space-y-4 text-xl font-semibold">
                    <Link to='/login'>
                    <button className="bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-500  h-14 border-white border-[3px] flex w-[200px]">
                        <img src="/projectV1.png" alt="" className='w-[24px] h-[24px] mr-5 mt-1 ml-2' /> Student
                    </button>
                    </Link>
                    
                    <button className="bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-500  h-14 border-white border-[3px] flex">
                        <img src="/rec.png" alt="" className='w-[24px] h-[24px] mr-5 mt-1 ml-2' /> Recruiter
                    </button>
                    <button className="bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-500  h-14 border-white border-[3px] flex">
                        <img src="/ad.png" alt="" className='w-[24px] h-[24px] mr-5 mt-1 ml-2' /> Admin
                    </button>

                </div>
            </div>
            
            {/* Broucher Section */}
            <Broucher/>

            {/* Why IIITDM */}
            <Cta/>

            {/* Director Message */}
            <Message/>

            {/* Recruitment Process */}
            <RecruitmentProcess/>

            {/* ContactUs */}
            <ContactUs/>

            {/* Coordinators */}
            <Coordinators/>

            {/* Staff */}
            <AdminStaff/>


        </div>
    );
}

export default Home
