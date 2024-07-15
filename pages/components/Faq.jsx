import { useEffect, useState } from "react";

const Faq = () => {
  const [value, setValue] = useState(0);
  const [changed, setChanged] = useState(false);

  return (
    <div className="p-8">
      <h1>Faq's</h1>

      {/* Use Cases of UseState -------------- */}
      {/* case: 01 */}
      <div className="py-8">
        <button
          onClick={() => setValue(value - 1)}
          disabled={value <= 0}
          className="bg-blue-600 disabled:bg-blue-300 px-4 py-1 rounded-md text-white text-2xl"
        >
          -
        </button>
        <span className="p-4 text-2xl">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          className="bg-blue-600 px-4 py-1 rounded-md text-white text-2xl"
        >
          +
        </button>
      </div>
      {/* case: 02 */}
      <div>
        <button
          onClick={() => setChanged(!changed)}
          className="bg-gray-600 px-4 py-1 rounded-md text-white text-2xl mb-4"
        >
          {" "}
          click to change the color of Div
        </button>

        <div
          className={`border rounded-lg p-4

          ${changed && "bg-red-100 text-red-600"}

        `}
        >
          <h3>
            The Style of this div should changed when i click on the button!
          </h3>
        </div>
      </div>

      {/* useEffect */}
    </div>
  );
};

export default Faq;
