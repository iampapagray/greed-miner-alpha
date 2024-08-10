import "./App.css";
import styled from "styled-components";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";

function App() {
  const { network } = useTonConnect();

  return (
    <div className="flex flex-col h-screen pb-4 bg-slate-800 overflow-hidden">
      <div className="flex flex-col p-2 flex-1 w-full border-green-500 border shadow-xl">
        <div className="border-2 border-red-500 h-full flex justify-center items-center">
          <h1 className="text-white  text-4xl">Testing Layout again</h1>
        </div>
      </div>
      <div className="flex w-full h-[63px] bg-blue-800">
        <p className="text-white">Menu Layout</p>
      </div>
    </div>
  );
}

export default App;
