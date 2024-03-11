import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

function ConnectWalletButton() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connecting, connected } = useWallet();

  const { setVisible } = useWalletModal();

  const connect = () => {
    setVisible(true);
  };

  const toShortenedFormat = (pubKey) => {
    return pubKey.slice(0, 3) + "..." + pubKey.slice(-3);
  };

  const containerStyles = {
    borderRadius: "4px",
    background: "linear-gradient(90deg, #DB01FF -78.67%, #08F6F1 86.45%)",
    width: "167px",
    height: "40px",
  };
  return (
    <div
      className="w-[167px] h-[40px] flex flex-row justify-center items-center cursor-pointer"
      style={containerStyles}
      onClick={connect}
    >
      <img src="/assets/images/ph_wallet-thin.svg" className="mr-1" />
      <span>
        {connected && toShortenedFormat(publicKey.toString())}
        {connecting && "Connecting ..."}
        {!connected && !connecting && "Connect Wallet"}
      </span>
    </div>
  );
}

export default ConnectWalletButton;
