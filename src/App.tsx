import "./App.css";
import styled from "styled-components";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { network } = useTonConnect();

  return (
    <div className="flex flex-col h-screen bg-slate-800 overflow-hidden">
      <div className="flex flex-col px-[14px] flex-1 w-full  shadow-xl">
        <div className="border border-red-500 h-full flex justify-center items-center">
          <h1 className="text-white  text-4xl">Let's Mine ⛏️</h1>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}

export default App;
