import "./App.css";
import styled from "styled-components";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";

function App() {
  const { network } = useTonConnect();

  return <div className="flex h-screen bg-slate-800"></div>;
}

export default App;
