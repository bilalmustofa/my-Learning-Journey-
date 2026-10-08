import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const [message, setMessage] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setMessage("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setMessage("Color code copied successfully!");

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch {
      setMessage("Failed to copy color code.");

      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <>
      <div
        id="color-picker-container"
        style={{ backgroundColor: color }}
        className="flex min-h-screen items-center justify-center px-4"
      >
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-3 text-3xl font-bold text-gray-800">
            Color Picker
          </h1>

          <p className="mb-6 text-gray-500">Choose your favorite color.</p>

          <input
            id="color-input"
            type="color"
            value={color}
            onChange={handleColorChange}
            className="h-20 w-full cursor-pointer rounded-lg"
          />

          <p className="mt-4 text-2xl font-bold uppercase text-gray-800">
            {color}
          </p>

          <button
            type="button"
            onClick={handleCopy}
            className="mt-5 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Copy HEX Code
          </button>

          {message && (
            <p
              role="status"
              className={`mt-4 text-sm font-medium ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
