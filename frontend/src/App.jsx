import Home from "./pages/Home";

function App() {

  return (

    <div className="relative overflow-hidden">

      {/* Gradient Blob 1 */}
      <div
        className="
        fixed
        top-[-120px]
        left-[-120px]
        w-[500px]
        h-[500px]
        bg-purple-300
        rounded-full
        blur-[150px]
        opacity-20
        pointer-events-none
        z-0
      "
      />

      {/* Gradient Blob 2 */}
      <div
        className="
        fixed
        bottom-[-100px]
        right-[-100px]
        w-[500px]
        h-[500px]
        bg-blue-300
        rounded-full
        blur-[150px]
        opacity-20
        pointer-events-none
        z-0
      "
      />

      {/* Main App */}
      <div className="relative z-10">
        <Home />
      </div>

    </div>
  );
}

export default App;