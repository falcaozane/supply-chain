import React, { useEffect, useState, useContext } from "react";
import {
  TrackingContext
} from "@/Context/Tracking";
import {
  Bars3Icon,
  WalletIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/solid";

export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet, disconnectWallet } = useContext(
    TrackingContext
  );

  const navigation = [
    { title: "Home", path: "#" },
    { title: "Services", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Erc20", path: "#" }
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;

      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const handleWalletClick = () => {
    if (currentUser) {
      // If a user is connected, disconnect the wallet
      disconnectWallet();
    } else {
      // If no user is connected, connect the wallet
      connectWallet();
    }
  };

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between  md:block">
          <a href="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              className="w-14 h-14"
              alt="BroCode Logo"
            />
          </a>

          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              <Bars3Icon className="h-5 text-black"></Bars3Icon>
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-gray-900">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <button
              onClick={handleWalletClick}
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              {currentUser ? (
                <>
                  <span>{currentUser.slice(0, 25)}..</span>
                  <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Connect Wallet</span>
                  <WalletIcon className="h-6" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
