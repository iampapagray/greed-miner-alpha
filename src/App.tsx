import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#1D1001] via-[#936C06] to-[#936C06] bg-[length:100%_400%] bg-[position:0%_0%] overflow-hidden">
      <div className="flex flex-col px-[14px] flex-1 w-full  shadow-xl">
        <Outlet />
      </div>
      <NavigationBar />
    </div>
  );
}

export default App;
