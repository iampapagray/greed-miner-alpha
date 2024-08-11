import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 overflow-hidden">
      <div className="flex flex-col px-[14px] flex-1 w-full  shadow-xl">
        <Outlet />
      </div>
      <NavigationBar />
    </div>
  );
}

export default App;
