import logo from './logo.svg';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import MemeLanding  from './pages/MemeLanding';
import LaunchPad  from './pages/LaunchPad';
import MainPage  from './pages/MainPage';
import CoinLists from './pages/CoinLists';
import {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinOverview from './pages/CoinOverview';

//connect Wallet Imports
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'MemeMatchApp'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route path="/coinlists" element={<CoinLists/>}></Route>
            <Route path="/coinoverview/:id" element={<CoinOverview/>}></Route>
          </Routes>
        </Router>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  )
}

export default App;
