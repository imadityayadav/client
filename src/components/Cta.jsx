import React from 'react';

const Cta = () =>  {
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      {/* Header Section */}
      <div className="text-center py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Why IIITDM Kurnool</h1>
        <p className="text-sm leading-relaxed">
          Established in 1958, as an institute of national importance, IIITDM Kurnool is recognized worldwide as a leader in the field of research and education in engineering and sciences. Our mission is to create an ambience in which new ideas and creativity flourish. The motto of IIITDM Kurnool is to provide learning blended with excellence, to create leaders of tomorrow. The dynamic and constantly evolving academic program reflects the institute's commitment to stay in tune with the expanding frontiers of knowledge worldwide. Extracurricular activities are also treated with equal importance towards overall development making the students at IIITDM Kurnool fit to take on the challenges faced in the competitive corporate world. Backed by the support of Alumni in different sectors and guidance of esteemed professors, we strive to offer a highly nurturing environment to all its students.
        </p>
      </div>

      {/* Information Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto">
        {/* Alumni Card */}
        <div className="bg-blue-800 p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">🔗</div>
          <h3 className="text-xl font-semibold mb-2">Alumni</h3>
          <p className="text-sm mb-12">
            Our Alumni have emerged successful and excelled in varied professions across the globe. This network is highly enriching for the growth of our community.
          </p>
          <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded">
            Know more
          </button>
        </div>

        {/* Rankings Card */}
        <div className="bg-blue-800 p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold mb-2">Rankings</h3>
          <p className="text-sm mb-16 pb-[-10px]">
            Recognized as India’s No. 1 University, we strive for excellence. Our rankings reflect our steep progress.
          </p>
          <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded mt-1">
            Know more
          </button>
        </div>

        {/* Admission Process Card */}
        <div className="bg-blue-800 p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">Admission Process</h3>
          <p className="text-sm mb-12">
            All the students enrolled at IIITDM Kurnool are selected after a rigorous screening process. It ensures that we nurture India's most brilliant minds.
          </p>
          <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded ">
            Know more
          </button>
        </div>

        {/* All Round Development Card */}
        <div className="bg-blue-800 p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold mb-2">All Round Development</h3>
          <p className="text-sm mb-4">
            One's skills, aptitude, and perception reflect the personality of an individual. We offer numerous opportunities for multi-dimensional growth.
          </p>
          <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
