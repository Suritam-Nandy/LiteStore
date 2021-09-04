import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Avatar from "../layout/Avatar";
import { useFirestore } from "react-redux-firebase";
import Loading from "../layout/Loading";
import { ImConnection } from "react-icons/im";
import { FiMinimize } from "react-icons/fi";
import {
  GiMusicSpell,
  GiDoubleStreetLights,
  GiWindow,
  GiElectric,
  GiHeatHaze,
  GiWallLight,
  GiSofa,
} from "react-icons/gi";
import { FaToilet, FaStackOverflow } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { IoSnow } from "react-icons/io5";

import { BiImageAdd, BiHandicap, BiCctv } from "react-icons/bi";
const Space = () => {
  const firestore = useFirestore();
  const { id } = useParams();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    loadSpace();
  }, []);
  const loadSpace = async () => {
    try {
      const docRef = firestore.collection("allplaces").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setSpace(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  const Amenities = [
    {
      name: "streetLevel",
      availability: space.streetLevel,
      icon: <GiDoubleStreetLights />,
    },
    {
      name: "kitchen",
      availability: space.kitchen,
      icon: <MdKitchen />,
    },
    {
      name: "windowDisplay",
      availability: space.windowDisplay,
      icon: <GiWindow />,
    },
    {
      name: "handicapAccessible",
      availability: space.handicapAccessible,
      icon: <BiHandicap className="w-12 h-8" />,
    },
    {
      name: "electricity",
      availability: space.electricity,
      icon: <GiElectric />,
    },
    {
      name: "airConditioning",
      availability: space.airConditioning,
      icon: <IoSnow />,
    },
    {
      name: "heating",
      availability: space.heating,
      icon: <GiHeatHaze />,
    },
    {
      name: "toilets",
      availability: space.toilets,
      icon: <FaToilet />,
    },
    {
      name: "securitySystem",
      availability: space.securitySystem,
      icon: <BiCctv />,
    },
    {
      name: "lighting",
      availability: space.securitySystem,
      icon: <GiWallLight />,
    },
    {
      name: "furniture",
      availability: space.furniture,
      icon: <GiSofa />,
    },
    {
      name: "garmetRack",
      availability: space.garmetRack,
      icon: <FaStackOverflow />,
    },
    {
      name: "internet",
      availability: space.internet,
      icon: <ImConnection />,
    },
    {
      name: "soundVideo",
      availability: space.soundVideo,
      icon: <GiMusicSpell />,
    },
    {
      name: "minimal",
      availability: space.minimal,
      icon: <FiMinimize />,
    },
  ];
  if (space == null) {
    return <Loading />;
  }
  console.log(space.area);
  return (
    <>
      <div className="w-full mx-auto mt-10">
        <div className="flex flex-wrap mt-2 md:mx-8 justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
            {/* {PROJECTS.map((project) => { */}
            {/* return ( */}
            <div className="bg-gray-50 py-4 my-2 rounded-xl p-2 md:px-4 flex flex-col text-left justify-start items-start mx-4">
              <div className="">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 my-1">
                  {space.area}
                </h1>
              </div>
              <div className="md:max-w-screen-lg mx-auto p-2">
                <div className="md:grid grid-cols-2 md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 ">
                    <div className=" ">
                      <div className="w-full pr-0 text-justify">
                        <div className="w-full border-black border ">
                          <img
                            className="w-full h-80 border-black border"
                            src={`${space.imgUrl}`}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* <AllContractorSlider className="w-full border-black border " /> */}
                    </div>
                  </div>
                  <div className="md:col-span-1 col-span-2 flex">
                    <div className="md:mt-0 mt-2 grid grid-flow-col md:grid-flow-row  gap-0.5 ">
                      <div className="relative md:row-span-1 col-span-1">
                        <img
                          className="w-full h-40 border-black border"
                          src={`${space.imgUrl}`}
                          alt=""
                        />
                      </div>
                      <div className="relative md:row-span-1 col-span-1">
                        <img
                          className="w-full h-40 border-black border"
                          src={`${space.imgUrl}`}
                          alt=""
                        />
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg my-1">{space.description}</p>
              <div className="flex flex-col my-2">
                <div className="m-1">
                  <h1>Amenities</h1>
                </div>
                <div className="flex flex-col md:grid mx-10  md:grid-cols-2  m-1 w-full">
                  {Amenities.map((amenity) => {
                    return (
                      <>
                        {amenity.availability && (
                          <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                            {amenity.icon}
                            <span className="text-lg mt-0.5">
                              {amenity.name}
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* ); */}
            {/* })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Space;
