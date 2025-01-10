import React, { useState } from "react";

const Alert = ({handleAlert}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div >
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <p className="text-lg font-medium text-gray-700 mb-4">
              This is a custom alert box!
            </p>
            <button
              onClick={handleCloseAlert}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
