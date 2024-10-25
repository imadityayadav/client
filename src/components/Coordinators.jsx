import React from 'react';

const placementManagers = [
    
    
    
    
   
    
    
    
    


  {
    name: 'Deepak Kumar',
    role: 'Electronics & Communication Engineering',
    phone: '+91-6201901436',
    email: '121ec0045@iiitk.ac.in',
  },
  {
    name: 'Devesh Kumar Arya',
    role: 'Computer Science & Engineering',
    phone: '+91-6395565236',
    email: ' 121cs0028@iiitk.ac.in',
  },
  {
    name: 'Madhav Sharma',
    role: ' Artificial Intelligence & Data Science',
    phone: '+91-9910028554',
    email: '121ad0013@iiitk.ac.in',
  },
  {
    name: 'Lavish Singh',
    role: 'Computer Science & Engineering',
    phone: '+91-9340466934',
    email: '121cs0067@iiitk.ac.in',
  },
  {

    name: ' Chirag Bhise',
    role: 'Computer Science & Engineering',
    phone: '+91-9820532410',
    email: '121cs0010@iiitk.ac.in',
  },
  {
    name: 'Vivek Kumar',
    role: 'Artificial Intelligence & Data Science',
    phone: '+91-7667966536',
    email: '121ad0024@iiitk.ac.in',
  },
  {
    name: 'Shubham Gehlot',
    role: 'Electronics & Communication Engineering',
    phone: '+91-9784198405',
    email: '121ec0039@iiitk.ac.in',
  },
  {
    name: 'Vindya Vahini',
    role: 'Electronics & Communication Engineering',
    phone: '+91-9493259826',
    email: '121ec0036@iiitk.ac.in',
  },
  {
    name: 'Priyash Anand',
    role: 'Electronics & Communication Engineering',
    phone: '+91-6204614898',
    email: '121ec0006@iiitk.ac.in',
  },
  {
    name: 'Nitin Kanaujia',
    role: 'Mechanical Engineering',
    phone: '+91-7276242338',
    email: '121me0014@iiitk.ac.in',
  },
];

const PlacementCard = ({ name, role, phone, email }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex items-center text-justify space-x-6">
    <div className="w-16 h-16 bg-gray-200  flex-shrink-0" >
        <img src="/stt.jpg" alt="" />
    </div>
    <div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <div className="flex items-center text-gray-500 mt-2">
        <span className="material-icons text-lg">phone</span>
        <a href={`tel:${phone}`} className="ml-2">{phone}</a>
      </div>
      <div className="flex items-center text-gray-500 mt-2">
        <span className="material-icons text-lg">email</span>
        <a href={`mailto:${email}`} className="ml-2">{email}</a>
      </div>
    </div>
  </div>
);

const Coordinators = () => (
  <div className="bg-gray-100 min-h-screen p-8">
    <h1 className="text-3xl font-bold mb-8">Institute Placement Coordinators</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {placementManagers.map((manager, index) => (
        <PlacementCard
          key={index}
          name={manager.name}
          role={manager.role}
          phone={manager.phone}
          email={manager.email}
        />
      ))}
    </div>
  </div>
);

export default Coordinators;
