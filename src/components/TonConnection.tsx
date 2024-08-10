import { TonConnectButton } from "@tonconnect/ui-react";
import { Button } from "./styled/styled";
import { useTonConnect } from "../hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";

function TonConnection() {
  const { network } = useTonConnect();

  return (
    <>
      <TonConnectButton />
      <Button>
        {network ? (network === CHAIN.MAINNET ? "mainnet" : "testnet") : "N/A"}
      </Button>
    </>
  );
}

export default TonConnection;
