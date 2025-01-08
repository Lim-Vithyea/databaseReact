import React, { useState } from "react";
import axios from "axios";
import "../components/compo.css";

function UserForm() {
  const [formData, setFormData] = useState({
    //formdata is the current status of the data in the inputfield
    //setformdata is the updated data from inputfield
    firstname: "",
    lastname: "",
    gender: "male",
    dob: "",
    address: "Phnom Penh",
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
    <div >
      <h1 className="text-center font-bold text-2xl p-[30px] text-blue-500">Insert Student Data</h1>
      <div className="flex justify-center flex-wrap">
     <form method="post" onSubmit={handleSubmit} >
     <div className="flex gap-10">
      <div className="flex justify-start flex-col">
        <label for="firstname">Firstname</label>
        <input name="firstname" type="text" placeholder="Enter the Firstname" required onChange={handleChange} value={formData.firstname}/>
      </div>
      <div className="flex justify-start flex-col">
            <label for="lastname">Lastname</label>
            <input name="lastname" type="text" placeholder="Enter the Lastname"  required onChange={handleChange} value={formData.lastname}/>
      </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="gender" className="text-gray-700 font-medium">Select Gender</label>
        <select id="gender" name="gender"
        onChange={handleChange} value={formData.gender}
        className="w-[100%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex flex-col ">
      <label for="dob">Date of Birth</label>
      <input type="date" name="dob" onChange={handleChange} value={formData.dob} className="w-[100%]"/>
      <label>Provices/City</label>
      <select id="address" name="address"
      onChange={handleChange} value={formData.address}
      className="w-[100%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Banteay Meanchey">Banteay Meanchey</option>
          <option value="Battambang">Battambang</option>
          <option value="Kampong Cham">Kampong Cham</option>
          <option value="Kampong Chhnang">Kampong Chhnang</option>
          <option value="Kampong Speu">Kampong Speu</option>
          <option value="Kampong Thom">Kampong Thom</option>
          <option value="Kampot">Kampot</option>
          <option value="Kandal">Kandal</option>
          <option value="Kep">Kep</option>
          <option value="Koh Kong">Koh Kong</option>
          <option value="Kratié">Kratié</option>
          <option value="Mondulkiri">Mondulkiri</option>
          <option value="Oddar Meanchey">Oddar Meanchey</option>
          <option value="Pailin">Pailin</option>
          <option value="Phnom Penh">Phnom Penh</option>
          <option value="Preah Sihanouk">Preah Sihanouk</option>
          <option value="Preah Vihear">Preah Vihear</option>
          <option value="Prey Veng">Prey Veng</option>
          <option value="Pursat">Pursat</option>
          <option value="Ratanakiri">Ratanakiri</option>
          <option value="Siem Reap">Siem Reap</option>
          <option value="Stung Treng">Stung Treng</option>
          <option value="Svay Rieng">Svay Rieng</option>
          <option value="Takéo">Takéo</option>
          <option value="Tboung Khmum">Tboung Khmum</option>
      </select>
      </div>
      <div className="p-[30px] text-center pt-20">
        <button type="submit" className="bg-blue-600 rounded-[5px] w-[300px] h-[50px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none">
            <span className="font-bold text-white">Submit</span>
        </button>
      </div>
     </form>
     </div>
     {message && (<div className="text-center mt-4 text-green-600">{message}</div>)}
    </div>
  );
}

export default UserForm;
