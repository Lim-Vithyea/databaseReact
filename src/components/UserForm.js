import React, { useState } from "react";
import axios from "axios";
import "../components/compo.css";

function UserForm() {
  const [formData, setFormData] = useState({
    //formdata is the current status of the data in the inputfield
    //setformdata is the updated data from inputfield
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });//grab data when the data changed in the inputfield
  };
  //Connect to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/tblstudent", formData);
      setMessage(response.data.message);
      setFormData({firstname: "",lastname: "",gender: "",dob: "",address: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(`Failed to add user: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="block">
      <h1 className="text-black p-[30px] font-bold text-[20px] text-center">Insert Data</h1>
      <div className="flex justify-center">
        <div className="flex justify-center bg-white w-[500px] rounded-[20px] p-[20px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <form className="flex flex-col pb-[20px]" onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="pb-[10px]">Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter the firstname"
              onChange={handleChange}
              value={formData.firstname}
            />
            <label htmlFor="lastname" className="pb-[10px]">Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter the lastname"
              onChange={handleChange}
              value={formData.lastname}
            />
            <div className="flex flex-row pb-[10px]">
              <label className="pr-[10px]">Gender</label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  onChange={handleChange}
                  checked={formData.gender === "male"}
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                  onChange={handleChange}
                  checked={formData.gender === "female"}
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
            <label htmlFor="dob" className="pb-[10px]">Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              value={formData.dob}
            />
            <label htmlFor="address" className="pb-[10px]">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter the address"
              onChange={handleChange}
              value={formData.address}
            />
            <div className="p-[30px] text-center">
              <button
                type="submit"
                className="bg-blue-600 rounded-[10px] w-[100px] h-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none"
              >
                <span className="font-bold text-white">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {message && <div className="text-center mt-4 text-green-600">{message}</div>}
    </div>
  );
}

export default UserForm;
