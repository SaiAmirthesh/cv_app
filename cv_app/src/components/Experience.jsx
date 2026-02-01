import { useState } from 'react'

function Experience({ experience, setExperience }) {
  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const[isEditing,setIsEditing] = useState(true);

  return (
    <div className="bg-white p-4 rounded-md border border-gray-300 mt-6">
      <h2 className="font-bold text-black mb-4">Practical Experience</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-black font-medium">Company Name</label>
            <input
              className="w-full p-2 border disabled:opacity-50 border-gray-300 rounded-md bg-gray-50 text-black"
              type="text"
              name="company"
              value={experience.company}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter company name"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-black font-medium">Position</label>
            <input
              className="w-full p-2 border disabled:opacity-50 border-gray-300 rounded-md bg-gray-50 text-black"
              type="text"
              name="position"
              value={experience.position}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter position"
            />
          </div>
          <div>
            <label className="block text-black font-medium">Start Year</label>
            <input
              className="w-full p-2 border disabled:opacity-50 border-gray-300 rounded-md bg-gray-50 text-black"
              type="number"
              name="styear"
              value={experience.styear}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Start year"
            />
          </div>
          <div>
            <label className="block text-black font-medium">End Year</label>
            <input
              className="w-full p-2 border disabled:opacity-50 border-gray-300 rounded-md bg-gray-50 text-black"
              type="number"
              name="endyear"
              value={experience.endyear}
              onChange={handleChange}
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

export default Experience;
