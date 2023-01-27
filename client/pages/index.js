import { contractAddress } from "../config.js";
import abi from "./contracts/BuyMeCoffee.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Connect from "./Connect.js";
import Buy from "./Buy.js";
import Donates from "./Donates.js";
import Footer from "./footer.js";

export default function Home() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contrcatABI = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contrcatABI,
            signer
          );

          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="my-10 mx-10 sm:mt-10 md:drop-shadow-lg tracking-wider flex items-center justify-center ">
        <div className="px-4 sm:py-4 md:px-8 my-20 mx-24 text-center rounded-full bg-yellow-200  w-2/3 ">
          <span className="font-circular text-l font-semibold text-gray-600 leading-normal">
            connected account :- {account}
          </span>
        </div>
      </section>
      {/* <Connect state={state}></Connect> */}
      <Buy state={state}></Buy>
      <Donates state={state}></Donates>
      <Footer></Footer>
    </>
  );
}
