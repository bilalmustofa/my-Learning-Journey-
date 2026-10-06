import { useState } from "react";

function Toggle() {

  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <div className="h-20 flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-xl shadow-md text-center">
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {showMessage ? "Hide Message" : "Show Message"}
          </button>

          {showMessage && (
            <p className="mt-5 font-bold text-gray-800">Welcome</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Toggle;
