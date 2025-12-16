import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  // const incrementHandler = () => {
  //   setCount((prev) => prev + 1);
  // };

  return (
    <>
      <div className="bg-gray-950 flex justify-center items-center h-screen text-gray-50 flex-col">
        <h1>Counter</h1>
        <div>Count is {count}</div>

        <div className="flex gap-5 my-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-gray-500 px-2 py-1 rounded"
          >
            Increase
          </button>
          <button
            onClick={() => setCount((count) => Math.max(count - 1, 0))}
            className="bg-gray-500 px-2 py-1 rounded"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
            className="bg-gray-500 px-2 py-1 rounded"
          >
            Reset
          </button>
        </div>

        <div>
          <input
            className="bg-gray-50/60 w-25"
            type="text"
            value={countToSet}
            onChange={(e) => setCountToSet(Number(e.target.value))}
          />
          <button
            onClick={() => {
              setCount(countToSet);
              setCountToSet(0);
            }}
            className="bg-gray-500 px-2 py-1 rounded mx-4"
          >
            Set to {countToSet}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
