import { Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import Swap from "./Pages/Swap";
import NotFound from "./Pages/NotFound"; // Import your 404 page component
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AlphaWalletAdapter,
  AvanaWalletAdapter,
  HuobiWalletAdapter,
  ParticleAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// require("@solana/wallet-adapter-react-ui/styles.css");
import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
function App() {
  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  // initialise all the wallets you want to use
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new AlphaWalletAdapter(),
      new AvanaWalletAdapter(),
      new SolflareWalletAdapter({ solNetwork }),
      new TorusWalletAdapter(),
      new HuobiWalletAdapter(),
      new ParticleAdapter(),
    ],
    [solNetwork]
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <Router>
            <div className="w-full h-screen overflow-y-auto radial-gradient bg-[#070908] space-y-[24px] font-inter">
              <TopNavbar />
              <Navbar />
              <div className="flex justify-center h-full">
                <Routes>
                  <Route path="/" element={<Swap />} />
                  <Route path="swap" element={<Swap />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
