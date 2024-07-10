import { useState } from "react";

const Faq = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <div className="p-8">
      <h1>Faq's</h1>

      <button
        onClick={() => setValue(value + 1)}
        className="bg-blue-600 px-4 py-1 rounded-md text-white text-2xl"
      >
        +
      </button>
      <span className="p-4 text-2xl">{value}</span>
      <button
        onClick={() => setValue(value - 1)}
        disabled={ value <= 0  }
        className="bg-blue-600 disabled:bg-blue-300 px-4 py-1 rounded-md text-white text-2xl"
      >
        -
      </button>
    </div>
  );
};

export default Faq;
