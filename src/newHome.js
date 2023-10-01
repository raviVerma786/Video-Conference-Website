import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../src/assets/conf2.jpg";
import Navbar from "./NavBar";
import "./format.css";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="relative h-screen">
        {/* Image */}
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={conf} className="object-cover  w-full h-full" alt="404 not found"/>
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-3">
            <h1 className="text-[4rem] md:text-[5rem] text-white font-bold pt-12 myShadow bigHead">
              Video Chat App
            </h1>
            <p className="text-[26px] text-white  -mt-2 myShadow">With ZegoCloud</p>
          </div>

          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6 myShadow">
                Enter Room Code
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                minlength="5"
                maxLength="20"
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0 text-center"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 border-2 border-black-800 myBoxShadow"
            >
              <p style={{textShadow:'1px 1px black'}}>Go</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;