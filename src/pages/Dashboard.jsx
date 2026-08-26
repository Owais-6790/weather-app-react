import { FaCloudRain } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import React from "react";
import { FaWind } from "react-icons/fa";
import bg from "../assets/bg.png";
import pfp from "../assets/pfp.jpg";
import { SiAccuweather } from "react-icons/si";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { PiWavesFill } from "react-icons/pi";
import { GiCircleCage } from "react-icons/gi";
import { LuSettings } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { RiCloudWindyFill } from "react-icons/ri";

import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("IsLoggedIn");
    navigate("/login");
  };

  return (
    <div className="bg-[#40596c] h-screen w-screen flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="h-[98%] w-[98%] rounded-3xl bg-cover flex p-5 gap-10"
      >
        <div className="text-gray-400 text-3xl h-full flex flex-col justify-between items-center p-4 rounded-3xl bg-white/20 backdrop-blur-3xl ">
          <div className="text-5xl text-white">
            <SiAccuweather />
          </div>
          <div className="flex flex-col gap-15 mb-60">
            <TbLayoutDashboardFilled className="hover:text-white hover:scale-[1.1] transition-all duration-500 hover:cursor-pointer" />
            <PiWavesFill className="hover:text-white hover:scale-[1.1] transition-all duration-500 hover:cursor-pointer" />
            <GiCircleCage className="hover:text-white hover:scale-[1.1] transition-all duration-500 hover:cursor-pointer" />
            <FaCalendarAlt className="hover:text-white hover:scale-[1.1] transition-all duration-500 hover:cursor-pointer" />
            <LuSettings className="hover:text-white hover:scale-[1.1] transition-all duration-500 hover:cursor-pointer" />
          </div>
          <div>
            <TbLogout2
              onClick={handlelogout}
              className="hover:text-white hover:scale-[1.1] transition-all duration-500 hover:cursor-pointer mb-2"
            />
          </div>
        </div>

        <div className="h-[50%] w-[70%] py-2">
          <div>
            <h2 className="text-gray-400 font-semibold">Welcome</h2>
            <h1 className="text-white font-bold text-xl">Calfin Danang</h1>
          </div>
          <div className="mt-18">
            <span className="text-white p-2 px-6 rounded-full bg-white/20 backdrop-blur-2xl">
              Weather Forecast
            </span>
            <h1 className="text-white font-semibold text-6xl mt-5 leading-22">
              Storm <br /> with Heavy Rain
            </h1>
            <p className="text-gray-400 mt-5 text-xl">
              partly cloudy with occasional snow showers. High around 50'F.
              <br /> Wind from the east 11 to 21 mph. Snow chances is 40% with{" "}
              <br />
              rainfall expected to be less than an inch.
            </p>
          </div>
        </div>
        <div className="h-full w-[25%]">
          <div className="flex justify-end items-center p-2 gap-4">
            <span className="text-white bg-white/20 backdrop-blur-2xl w-15 h-15 flex justify-center items-center rounded-full">
              <IoMdAdd className="text-2xl" />
            </span>
            <span className="text-white bg-white/20 backdrop-blur-2xl w-15 h-15 flex justify-center items-center rounded-full">
              <RiSearch2Line className="text-2xl" />
            </span>
            <span className="text-white bg-white/20 backdrop-blur-2xl w-15 h-15 flex justify-center items-center rounded-full">
              <IoIosNotificationsOutline className="text-3xl" />
            </span>
            <img className="w-15 rounded-full" src={pfp} alt="pfp image" />
          </div>
          <div className="mt-15 flex flex-col bg-white/20 backdrop-blur-2xl rounded-3xl py-4 px-10 justify-center text-xl">
            <h4 className="flex items-center font-semibold  text-white">
              <IoLocationSharp className="mr-3" /> Central Jakarta
            </h4>
            <h1 className="text-white text-8xl my-3 font-semibold">10°C</h1>
            <div className="flex text-gray-300 gap-4 mt-4">
              <p className="flex items-center">
                <FaCloudRain className="mr-2" />
                19 mph
              </p>
              <p className="flex items-center">
                <IoWaterOutline className="mr-2" />
                40%
              </p>
              <p className="flex items-center">
                <FaWind className="mr-2" /> 15 km/h
              </p>
            </div>
          </div>
          <div className="mt-10 flex bg-white/20 backdrop-blur-2xl rounded-3xl py-4 px-5 justify-between items-center text-xl">
            <div>
              <h4 className="text-gray-300 text-lg ">Indonesia</h4>
              <h1 className="text-white text-2xl">North Jakarta</h1>
              <h4 className="text-gray-300 text-lg ">Mostly Sunny</h4>
            </div>
            <h1 className="flex text-white text-4xl">
              12° <RiCloudWindyFill />
            </h1>
          </div>
          <div className="mt-5 flex bg-white/20 backdrop-blur-2xl rounded-3xl py-4 px-5 justify-between items-center text-xl">
            <div>
              <h4 className="text-gray-300 text-lg ">Indonesia</h4>
              <h1 className="text-white text-2xl">bandung</h1>
              <h4 className="text-gray-300 text-lg ">Cloudy</h4>
            </div>
            <h1 className="flex text-white text-4xl">
              10° <RiCloudWindyFill />
            </h1>
          </div>
          <div className="mt-5 flex bg-white/20 backdrop-blur-2xl rounded-3xl py-4 px-5 justify-between items-center text-xl">
            <div>
              <h4 className="text-gray-300 text-lg ">Indonesia</h4>
              <h1 className="text-white text-2xl">South Jakarta</h1>
              <h4 className="text-gray-300 text-lg ">Sunny</h4>
            </div>
            <h1 className="flex text-white text-4xl">
              14° <RiCloudWindyFill />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
