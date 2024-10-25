import React from "react";

const RecruitmentProcess=()=> {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-center text-3xl font-bold mb-4">Recruitment process</h2>
      <p className="text-center text-gray-600 mb-6">
        Our process has evolved over the year to ensure that our recruiters have a seamless hiring experience. 
        Here we have simplified the steps for you.
      </p>
      
      {/* Flex Container */}
      <div className="flex flex-wrap justify-center gap-6 ml-[-100px] mr-[-30px] items-stretch  "  >
        {/* Step 1 */}
        <div className="flex  items-center p-1 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">1</div>
          <p className="text-justify mt-2">
          Interested employers can get in touch with the Placement Office for campus hiring.

          </p>
        </div>

        {/* Step 2 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">2</div>
          <p className="text-justify mt-2">
          Recruiters interested in hiring can log in through [website link] and complete their registration by filling out the necessary details
            <br />
            <a
              href="https://campus.placements.iiitdmk.ac.in/auth/recruiter/login"
              className="text-blue-500 underline"

            >
              https://campus.placements.iiitdmk.ac.in
            </a>
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">3</div>
          <p className="text-justify mt-2">
          The details of the job are verified by the TPO (Training and Placement Officer), including remuneration details and any other ambiguous information.

          </p>
        </div>

        {/* Step 4 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">4</div>
          <p className="text-justify mt-2">
          After successful verification, the job is made available online to students, according to the dates decided by the Placement Office.

          </p>
        </div>

        {/* Step 5 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">5</div>
          <p className="text-justify leading-5 mt-2">
          Interested students can register to participate in the recruitment process of a company by applying for its job postings.

          </p>
        </div>

        {/* Step 6 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">6</div>
          <p className="text-justify mt-2">
          Companies will receive the consolidated details of registered students from Placement Office.

          </p>
        </div>

        {/* Step 7 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">7</div>
          <p className="text-justify mt-2">
          Companies can proceed with their tests/screening process after finalizing the schedule in coordination with the Placement Office.

          </p>
        </div>

        {/* Step 8 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">8</div>
          <p className="text-justify mt-2">
          Companies shortlist the selected students for the final interview process.

          </p>
        </div>

        {/* Step 9 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">9</div>
          <p className="text-justify mt-2">
          Companies, in coordination with the Placement Office, finalize the date of the interview.

          </p>
        </div>

        {/* Step 10 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">10</div>
          <p className="text-justify mt-2">
          Organizations provide a list of students to whom they are extending offers at the end of their interview slot.

          </p>
        </div>

        {/* Step 11 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="text-3xl font-bold text-blue-600 mr-2 ml-2">11</div>
          <p className="text-justify mt-2">
          The Placement Office notifies the organization of the acceptance of selected students.

          </p>
        </div>

        {/* Step 12 */}
        <div className="flex  items-center p-4 bg-white rounded-lg shadow-md w-full md:w-1/4">
          <div className="  text-3xl font-bold text-blue-600 mr-2 ml-2">12</div>
          <p className="text-justify mt-2">
          The organization generates and delivers the offer letters to the selected candidates, consistent with the information provided in the job posting created online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentProcess;

