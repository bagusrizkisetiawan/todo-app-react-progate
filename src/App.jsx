import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <button
          className="btn btn-primary px-4 btn-sm p-2 bg-primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Hitung {count}
        </button>
      </div>
    </>
  );
}

export default App;
