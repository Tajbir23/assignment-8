import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="sm:mx-10 mx-2">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
