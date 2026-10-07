import { useState } from "react";

function Toggle() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <div className="h-auto flex items-center justify-center bg-gray-100 p-5 flex-col">
        <h1 className="text-[30px] text-[#333333] mb-5">Toggler</h1>
        <div className="bg-white rounded-xl shadow-md text-center">
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition p-4"
          >
            {showMessage ? "Hide Message" : "Show Message"}
          </button>

          {showMessage && (
            <p className="font-bold text-gray-800 p-2">Welcome</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Toggle;
