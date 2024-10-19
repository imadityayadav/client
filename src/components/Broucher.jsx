import React from 'react'

const Broucher = () => {
    //   return (
    //     <div className="flex justify-center items-start p-10 bg-gray-100 min-h-screen">
    //       {/* Left Column - Cards */}
    //       <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {/* Card 1 */}
    //         <div className="bg-white shadow-md p-6 rounded-lg">
    //           <h3 className="text-xl font-semibold mb-4">Academic Facilities</h3>
    //           <p>
    //             Academics at IIT Bombay has the flexibility to evolve with ever-changing
    //             requirements. Various activities are carried out to promote research, enhance
    //             creativity, learn new skills, implement innovative solutions, and ...
    //           </p>
    //           <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">
    //             See more
    //           </a>
    //         </div>

    //         {/* Card 2 */}
    //         <div className="bg-white shadow-md p-6 rounded-lg">
    //           <h3 className="text-xl font-semibold mb-4">Industrial Design Centre</h3>
    //           <p>
    //             IDC School of Design is a unique mix of pedagogic experimentation with pragmatic
    //             design approaches. IDC has academic programs in the areas of Industrial Design,
    //             Visual Communication, Interaction Design, Animation, and Mobility & Vehicle
    //             Design.
    //           </p>
    //           <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">
    //             Explore IDC
    //           </a>
    //         </div>

    //         {/* Card 3 */}
    //         <div className="bg-white shadow-md p-6 rounded-lg col-span-2">
    //           <h3 className="text-xl font-semibold mb-4">Departments & Programs at IIT Bombay</h3>
    //           <p>
    //             IIT Bombay is known as a premier engineering, science, and technology institute in
    //             India. Currently, it offers an opportunity to learn in 20 varied departments and
    //             pursue 10 programs.
    //           </p>
    //           <p className="mt-2">
    //             This university has strived and evolved over years to offer the students the finest
    //             of its facilities for multi-dimensional growth. It is a home for design, management
    //             school, and several emerging centers in technical, non-technical, and
    //             entrepreneurial sectors.
    //           </p>
    //           <a href="#" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
    //             Know more
    //           </a>
    //         </div>
    //       </div>

    //       {/* Right Column - Links */}
    //       <div className="w-1/4 ml-8">
    //         <ul className="space-y-4">
    //           <li className="bg-white p-4 rounded-lg shadow-md">
    //             <a href="#" className="flex items-center text-blue-600">
    //               <span className="mr-2">📘</span> Placement Brochure 2023-24
    //             </a>
    //           </li>
    //           <li className="bg-white p-4 rounded-lg shadow-md">
    //             <a href="#" className="flex items-center text-blue-600">
    //               <span className="mr-2">📄</span> Placement Report 2023-24
    //             </a>
    //           </li>
    //           <li className="bg-white p-4 rounded-lg shadow-md">
    //             <a href="#" className="flex items-center text-blue-600">
    //               <span className="mr-2">📄</span> Placement Report 2022-23
    //             </a>
    //           </li>
    //           <li className="bg-white p-4 rounded-lg shadow-md">
    //             <a href="#" className="flex items-center text-blue-600">
    //               <span className="mr-2">📄</span> Placement Report 2021-22
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   )
    return (
        <div className="flex justify-center items-start p-10  min-h-screen mt-10">
            {/* Left Column - Cards */}
            <div className="flex gap-6">
                {/* Card 1 */}
                <div className='flex flex-col'>
                    <div className="bg-white shadow-md p-6 rounded-lg flex-1 w-[500px] h-[200px] mb-10 text-left">
                        <h3 className="text-xl font-semibold mb-4">Academic Facilities</h3>
                        <p>
                            Academics at IIITDM Kurnool has the flexibility to evolve with ever-changing
                            requirements. Various activities are carried out to promote research, enhance
                            creativity, learn new skills, implement innovative solutions, and ...
                        </p>
                        <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">
                            See more
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex-1 w-[500px] h-[200px] text-left">
                        <h3 className="text-xl font-semibold mb-4">Industrial Design Centre</h3>
                        <p>
                            IDC School of Design is a unique mix of pedagogic experimentation with pragmatic
                            design approaches. IDC has academic programs in the areas of Industrial Design,
                            Visual Communication, Interaction Design, Animation, and Mobility & Vehicle
                            Design.
                        </p>
                        <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">
                            Explore IDC
                        </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md p-6 rounded-lg w-[500px] h-[370px] text-left">
                    <h3 className="text-xl font-semibold mb-4">Departments & Programs at IIITDM Kurnool</h3>
                    <p>
                    IIITDM Kurnool is known as a premier engineering, science, and technology institute in
                        India. Currently, it offers an opportunity to learn in 20 varied departments and
                        pursue 10 programs.
                    </p>
                    <p className="mt-2">
                        This university has strived and evolved over years to offer the students the finest
                        of its facilities for multi-dimensional growth. It is a home for design, management
                        school, and several emerging centers in technical, non-technical, and
                        entrepreneurial sectors.
                    </p>
                    <a href="#" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
                        Know more
                    </a>
                </div>
            </div>

            {/* Right Column - Links */}
            <div className="w-1/4 ml-8">
                <ul className="font-semibold items-left   text-2xl text-[#607d8b] mt-6 leading-8 ml-5 space-y-4 ">
                    <li className=" p-4 rounded-lg h-[100px] hover:bg-gray-100 border-b">
                        <a href="#" className="flex text-left text-[#607d8b] ">
                            <span className="mr-2">📘</span> Placement Brochure 2023-24
                            
                        </a>
                    </li>
                    <li className=" p-4 rounded-lg h-[100px] hover:bg-gray-100 border-b">
                        <a href="#" className="flex text-left text-[#607d8b] ">
                            <span className="mr-2">📄</span> Placement Brochure 2022-23
                            
                        </a>
                    </li>
                    <li className=" p-4 rounded-lg h-[100px] hover:bg-gray-100 border-b">
                        <a href="#" className="flex text-left text-[#607d8b] ">
                            <span className="mr-2">📄</span> Placement Brochure 2021-22
                            
                        </a>
                    </li>
                    <li className=" p-4 rounded-lg h-[100px] hover:bg-gray-100 border-b">
                        <a href="#" className="flex text-left text-[#607d8b] ">
                            <span className="mr-2">📄</span> Placement Brochure 2020-21
                            
                        </a>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    );
}

export default Broucher