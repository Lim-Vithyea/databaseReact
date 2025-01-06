import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/compo.css";

function UserForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    address: "", // this will hold the selected province
  });

  const [provinces, setProvinces] = useState([]); // to hold the list of provinces
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch provinces when the component mounts
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/provinces");
        setProvinces(response.data); // assuming the API returns an array of provinces
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.gender ||
      !formData.dob ||
      !formData.address
    ) {
      return "All fields are required!";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationMessage = validateForm();
    if (validationMessage) {
      setMessage(validationMessage);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/tblstudent",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        firstname: "",
        lastname: "",
        gender: "",
        dob: "",
        address: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(
        `Failed to add user: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="block">
      <h1 className="text-black p-[30px] font-bold text-[20px] text-center">
        Insert Data
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-center bg-white w-[500px] rounded-[20px] p-[20px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <form className="flex flex-col pb-[20px]" onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="pb-[10px]">
              Firstname
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter the firstname"
              onChange={handleChange}
              value={formData.firstname}
            />
            <label htmlFor="lastname" className="pb-[10px]">
              Lastname
            </label>
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
            <label htmlFor="dob" className="pb-[10px]">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              value={formData.dob}
            />
            <label htmlFor="address" className="pb-[10px]">
              Address (Province)
            </label>
            <select
              name="address"
              onChange={handleChange}
              value={formData.address}
              className="border-gray-300 p-2 rounded-md">
              <option value="">Select Province...</option>
              {provinces.map((province) => (
                <option key={province.ID} value={province.Name}>
                  {province.Name}
                </option>
              ))}
            </select>
            <div className="p-[30px] text-center">
              <button
                type="submit"
                className="bg-blue-600 rounded-[10px] w-[100px] h-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none"
                disabled={isLoading}>
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <span className="font-bold text-white">Submit</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {message && (
        <div className="text-center mt-4 text-green-600">{message}</div>
      )}
    </div>
  );
}

export default UserForm;
