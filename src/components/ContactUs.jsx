import React from 'react'

const ContactUs = () => {
    return (
        <div className="bg-gray-50 p-8">
            <h2 className="text-center text-2xl font-bold mb-6">Contact Us</h2>

            {/* Flexbox Container */}
            <div className="flex flex-col md:flex-row justify-center gap-8">

                {/* Professor In Charge Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 h-[240px]">
                    <h3 className="text-xl font-semibold  mb-4 text-left">Professor In Charge</h3>
                    <div className='flex'>
                        <div>
                            <img
                                src="/css.png"
                                alt="Professor In Charge"
                                className="rounded w-28 h-32 mb-4"
                            />
                        </div>

                        <div className='text-justify'>
                            <div className="text-justify">
                                <p className="font-bold ml-10">Dr. C. Chandrasekhara Sastry</p>
                                <p className="text-gray-500 ml-10">Department of Mechanical Engineering</p>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-4 flex flex-col items-center">
                                <div className="flex items-center mb-2">
                                    <img src="/ph.png" alt="phone" className="w-5 h-5 ml-[-80px] text-gray-500" />
                                    <a href="tel:+912225767096" className="text-gray-500 ml-2">
                                    +91-9840936835
                                    </a>
                                </div>


                                <div className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 ml-[-20px] text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 12V4m-8 8V4m0 8v8m8-8v8m-2 4h4a2 2 0 002-2v-5m0-6a2 2 0 00-2-2h-4m0 0V4m0 16H6a2 2 0 01-2-2V5a2 2 0 012-2h4"
                                        />
                                    </svg>
                                    <a href="mailto:chandrasekhara@iiitk.ac.in" className="text-gray-500 ">
                                        chandrasekhara@iiitk.ac.in
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Image */}

                    {/* Professor Details */}

                </div>

                {/* Placement Office Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col w-full md:w-1/2 text-left">
                    <h3 className="text-lg font-semibold mb-4">Placement Office</h3>

                    {/* Contact Details */}
                    <div className="text-left">
                        <p className="text-gray-500 mb-4">3rd floor, Academic Building, IIITDM Kurnool, Kurnool - 518008, India</p>

                        {/* Phone */}
                        <div className="flex items-left mb-4">
                        <img src="/ph.png" alt="phone" className="w-5 h-5 text-gray-500" />
                                    <a href="tel:+912225767096" className="text-gray-500 ml-2">
                                    +91-9840936835
                                    </a>
                        </div>

                        {/* Fax */}
                        <div className="flex items-left mb-4">
                            <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 15h16M4 11h16m0 0H4m12 4h.01M9 5H5v5h4V5zM9 15h6v2H9v-2zM7 11v2H5v-2h2zm0 4v2H5v-2h2zm0 0v4h6v-4H7z" />
                            </svg>
                            <p className='text-gray-500'>+91-9553151357</p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-left text-gray-500 ">
                            <div className="flex items-center mb-4">
                                <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V4m-8 8V4m0 8v8m8-8v8m-2 4h4a2 2 0 002-2v-5m0-6a2 2 0 00-2-2h-4m0 0V4m0 16H6a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                                </svg>
                                <p>placementcell@iiitk.ac.in</p>
                            </div>
                            {/* <div className="flex items-left mb-4 ">
                                <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V4m-8 8V4m0 8v8m8-8v8m-2 4h4a2 2 0 002-2v-5m0-6a2 2 0 00-2-2h-4m0 0V4m0 16H6a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                                </svg>
                                <p>placementcell_phd@iitb.ac.in (For PhD Placements)</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V4m-8 8V4m0 8v8m8-8v8m-2 4h4a2 2 0 002-2v-5m0-6a2 2 0 00-2-2h-4m0 0V4m0 16H6a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                                </svg>
                                <p>training@iitb.ac.in (For Internships)</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs