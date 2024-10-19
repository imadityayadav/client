import React from 'react'

const Message = () => {
    return (
        <div className="flex flex-col md:flex-row gap-20  bg-gray-50 py-12">
          {/* Left side: Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8 flex justify-center">
            <img
              src="https://www.iith.ac.in/assets/images/profiles/murty-bs.jpg" // Replace with the actual image URL
              alt="Proff. Budaraju Srinivasa Murty"
              className="rounded-xl shadow-lg object-cover w-[400px] "
            />
          </div>
    
          {/* Right side: Text content */}
          <div className=" text-left ml-[200px] ">
            <p className="text-blue-600 uppercase text-lg font-semibold mb-2">Director's Message</p>
            <h2 className="text-3xl font-semibold text-[#607d8b] mb-4">
              Among the first three institutes to gain <br /> recognition under the Institute of Eminence <br /> (IoE) scheme,  IIITDM Kurnool continues its <br /> upward journey of excellence in world university rankings...
            </h2>
            <a href="/" className="text-blue-600 hover:underline font-semibold">
              Read more &nbsp;&raquo;
            </a>
    
            <div className="mt-6">
              <p className="font-bold text-gray-700 text-lg">Proff. Budaraju Srinivasa Murty</p>
              <p className="text-sm text-gray-500">Materials Science And Metallurgical Engineering</p>
            </div>
          </div>
        </div>
      );
}

export default Message