import React, { useState } from 'react';
function EditUser() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: 'Luis',
    lastName: 'Romero',
  });
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setIsEditing(false);   };

  const handleEditClick = () => {
    setIsEditing(true);
  }; 


  return (
<div className="bg-gray-950 p-4 rounded-md">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-md">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-300">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              className={`bg-gray-100 p-2 rounded-md border-2 border-gray-700 ${
                isEditing ? 'border-blue-500' : ''
              }`}
              disabled={!isEditing}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-300">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              className={`bg-gray-100 p-2 rounded-md border-2 border-gray-700 ${
                isEditing ? 'border-blue-500' : ''
              }`}
              disabled={!isEditing}
            />
          </div>
          {isEditing && (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          )}
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
   );
}

export default EditUser;
