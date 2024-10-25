import React from 'react';

const administrativeStaff = [
  {
    name: 'P. Chaithanya Deepak',
    role: 'Assist. Placement Officer',
    phone: '+91-9553151357',
    email: 'placementcell@iiitk.ac.in',
     // Replace with actual image path
  },
];

const StaffCard = ({ name, role, phone, email }) => (
  <div className="bg-white shadow-md p-4 rounded-lg flex items-center text-justify space-x-4 w-[470px]">
    <div className="w-24 h-24 bg-gray-200  flex-shrink-0" >
        <img src="/adm.png" alt="" className='w-24 h-24' />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <div className="text-gray-500 mt-2">
        <div className="flex items-center space-x-2">
          <span className="material-icons">phone</span>
          <a href={`tel:${phone}`} className="">{phone}</a>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="material-icons">email</span>
          <a href={`mailto:${email}`} className="">{email}</a>
        </div>
      </div>
    </div>
  </div>
);

const AdminStaff = () => (
  <div className="bg-white shadow-md h-[300px] mb-16 p-8">
    <h1 className="text-3xl font-bold mb-6">Administration</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {administrativeStaff.map((staff, index) => (
        <StaffCard
          key={index}
          name={staff.name}
          role={staff.role}
          phone={staff.phone}
          email={staff.email}
          image={staff.image}
        />
      ))}
    </div>
  </div>
);

export default AdminStaff;
