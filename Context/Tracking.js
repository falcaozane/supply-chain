import React, {useState, useEffect} from "react";
import { Web3Modal } from "@web3modal/react";
import { ethers } from "ethers";

import tracking from "../Context/Tracking.json";
const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ContractABI = tracking.abi;

const fetchContract = (signerOrProvider) => 
new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);

export const TrackingContext = React.createContext();

export const TrackingProvider = ({children}) => {
    const DappName = "Product tracking dapp";
    const [currentUser, setCurrentUser] = useState("");

    const createShipment = async (items) => {
        console.log(items);
        const {reciver, pickupTime, distance, price} = items;

        try {
            const web3modal = new web3modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.web3Provider(connection);
            const signer = provider.getsigner();
            const contract = fetchContract(signer);
            const createItem = await contract.createShipment(
                receiver,
                new Date(pickupTime).getTime(),
                distance,
                ethers.utlis.parseUnits(price,18),
                {
                    value: ethers.utlis.parseUnits(price,18),
                }
            );
            await createItem.wait();
            console.log(createItem);
        }
        catch(error){
               console.log("Something went grong", error);
        }

    };

    const getAllShipment = async () =>
     {
        try {
            const provider = new ethers.provider.JsonRpcProvider();
            const contract = fetchContract(provider);

            const shipments = await contract.getAllTransactions();
            const allShipments = shipments.map((shipment) => ({
                sender: shipment.sender,
                receiver: shipment.receiver,
                price: ethers.utlis.formatEther(shipmsnt.price.toString()),
                pickupTime: shipment.pickupTime.toNumber(),
                deliveryTime: shipment.deliveryTime.toNumber(),
                distance: shipment.distance.toNumber(),
                ispaid: shipment.ispaid,
                status: shipment.ststus,
            }));
            return allShipments;
        }
        catch (error) {
            console.log("Something went grong", error);
        }
    };

    const getShipmentsCount = async () => {
        try {
            if(!window.ethereum) return "Install metamask"

            const accounts = await window.ethereum.providers.JsonRpcProvider();
            const contract = fetchContract(provider);
            const shipmentsCount = await contract.getShipmentsCount(accounts[0]);
            return shipmentsCount.toNumber();
        } catch (error) {
            console.log("error");
        }
    };

    const completeShipments = async (completeShip) => {
        console.log(completeShip);

        const {receiver, index } = completeShip;

        try {
            if(!window.etherum) return "install metamask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getsigner(signer);

            const transaction = await contract.completeShipment(
                accounts[0],
                receiver,
                index,
                {
                    gasLimit: 300000,

                }
            );
            transaction.wait();
            console.log(transaction);
        } 
        catch (error) {
              console.log("wrong completeShipment", error);
        }
    };

    const getShipment = async (index) => {
        console.log(index*1);

        try {
            if(!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
           const provider = new ethers.providers.JsonRpcProvider();
           const Contract = fetchContract(provider);
           const shipment = await contract.getShipment(accounts[0], index*1); 

           const SingleShipment = {
            sender: shipment[0],
            receiver: shipment[1],
            pickupTime: shipment[2].toNumber(),
            deliveryTime: shipment[3].toNumber(),
            distance: shipment[4].toNumber(),
            price: ethers.utlis.formatEther(shipment[5].toString()),
            status: shipment[6],
            ispaid: shipment[7],
           };

           return SingleShipment;
        } catch (error) {
            console.log("sorry no shipment");
        }
    };

    const startShipment = async (getProduct) => {
        const {receiver, index} = getProduct;

        try {
            if(!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getsigner();
            const contract = fetchContract(signer);
            const shipment = await contract.startShipment(
                accounts[0],
                receiver,
                index*1,
            );

            shipment.wait();
            console.log(shipment);
        }
        catch(error){
           console.log("sorry no chipment", error);
        }

    };

    const checkIfWalletConnected = async () => {
        try {
            if(!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if(accounts.lenght) {
                setCurrentUser(accounts[0]);
            }else{
                return "No account";
            }
        }
        catch(error)
        {
            return "Not Connected";
        }
    };

    const connectWallet = async () => {
        try {
            if(!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentUser(accounts[0]);
        }
        catch(error)
        {
            return("Something went wrong");
        }
    };

    useEffect(()=> {
        checkIfWalletConnected();
    },[]);

    return (
        < TrackingContext.Provider
          value={{connectWallet,
          createShipment,
          getAllShipment,
          completeShipments,
          getShipment,
          startShipment,
          getShipmentsCount,
          DappName,
          currentUser,}}
        >
        {children}
        </TrackingContext.Provider>
    );

}