import React from "react";
import { useState } from 'react'


function General({ general, setGeneral }) {
  const handleChange = (e) => {
    setGeneral({ ...general, [e.target.name]: e.target.value });
  };

  const[isEditing,setIsEditing]=useState(true);

  return (
    <div className="bg-white p-4 rounded-md border border-gray-300">
      <h2 className="font-bold text-black mb-4">General Information</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-black font-medium">Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 bg-gray-50 text-black"
              type="text"
              name="name"
              value={general.name}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-black font-medium">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 bg-gray-50 text-black"
              type="email"
              name="email"
              value={general.email}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your email"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-black font-medium">Phone Number</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50 bg-gray-50 text-black"
              type="number"
              name="phone"
              value={general.phone}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      </form>
      <div class="grid grid-cols-2 gap-3 mt-2.5 p-2">
      <button
        onClick={()=>setIsEditing(false)}
        disabled={!isEditing}
        className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
      >
        Submit
      </button>
      <button
        onClick={()=>setIsEditing(true)}
        disabled={isEditing}
        className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
      >
        Edit
      </button>
      </div>
    </div>
  );
}

export default General;
