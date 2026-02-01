import { useState } from "react";

function Educational({ education, setEducation }) {
  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const [isEditing,setIsEditing] = useState(true);

  return (
    <div className="bg-white p-4 rounded-md border border-gray-300 mt-6">
      <h2 className="font-bold text-black mb-4">Educational Experience</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-black font-medium">School Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 bg-gray-50 text-black"
              type="text"
              name="school"
              value={education.school}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter school name"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-black font-medium">Course Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 bg-gray-50 text-black"
              type="text"
              name="course"
              value={education.course}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter course name"
            />
          </div>
          <div>
            <label className="block text-black font-medium">Start Year</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 bg-gray-50 text-black"
              type="number"
              name="styear"
              value={education.styear}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Start year"
            />
          </div>
          <div>
            <label className="block text-black font-medium">End Year</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 disabled:opacity-50 text-black"
              type="number"
              name="endyear"
              value={education.endyear}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="End year"
            />
          </div>
        </div>
      </form>
      <div className="grid grid-cols-2 mt-2.5 gap-3 p-2">
      <button
        onClick={()=>{setIsEditing(false)}}
        disabled={!isEditing}
        className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
        Submit  
      </button>
      <button
        onClick={()=>{setIsEditing(true)}}
        disabled={isEditing}
        className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
        Edit
      </button>
      </div>
    </div>
  );
}

export default Educational;
