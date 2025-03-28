import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import Loading from "../components/layout/Loading";
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
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Space = () => {
  const firestore = useFirestore();
  const role = useSelector((state) => state.firebase.profile.role);
  const { uid } = useSelector((state) => state.firebase.auth);
  let history = useHistory();

  const { id } = useParams();
  const [space, setSpace] = useState(null);
  const [Amenities, setAmenities] = useState([]);
  const [dbDates, setdbDates] = useState([]);
  const [brandBookedDates, setBrandBookDates] = useState([]);

  const [dd, setdd] = useState([]);

  const [calendarState, setCalendarState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    loadSpace();
    if (space) {
      setAmenities([
        {
          name: "streetLevel",
          availability: space.streetLevel,
          icon: <GiDoubleStreetLights className="w-12 h-8" />,
        },
        {
          name: "kitchen",
          availability: space.kitchen,
          icon: <MdKitchen className="w-12 h-8" />,
        },
        {
          name: "windowDisplay",
          availability: space.windowDisplay,
          icon: <GiWindow className="w-12 h-8" />,
        },
        {
          name: "handicapAccessible",
          availability: space.handicapAccessible,
          icon: <BiHandicap className="w-12 h-8" />,
        },
        {
          name: "electricity",
          availability: space.electricity,
          icon: <GiElectric className="w-12 h-8" />,
        },
        {
          name: "airConditioning",
          availability: space.airConditioning,
          icon: <IoSnow className="w-12 h-8" />,
        },
        {
          name: "heating",
          availability: space.heating,
          icon: <GiHeatHaze className="w-12 h-8" />,
        },
        {
          name: "toilets",
          availability: space.toilets,
          icon: <FaToilet className="w-12 h-8" />,
        },
        {
          name: "securitySystem",
          availability: space.securitySystem,
          icon: <BiCctv className="w-12 h-8" />,
        },
        {
          name: "lighting",
          availability: space.securitySystem,
          icon: <GiWallLight className="w-12 h-8" />,
        },
        {
          name: "furniture",
          availability: space.furniture,
          icon: <GiSofa className="w-12 h-8" />,
        },
        {
          name: "garmetRack",
          availability: space.garmetRack,
          icon: <FaStackOverflow className="w-12 h-8" />,
        },
        {
          name: "internet",
          availability: space.internet,
          icon: <ImConnection className="w-12 h-8" />,
        },
        {
          name: "soundVideo",
          availability: space.soundVideo,
          icon: <GiMusicSpell className="w-12 h-8" />,
        },
        {
          name: "minimal",
          availability: space.minimal,
          icon: <FiMinimize className="w-12 h-8" />,
        },
      ]);
    }
  }, [space]);
  const loadSpace = async () => {
    try {
      const docRef = firestore.collection("allplaces").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setSpace(result.data());
        setdd(...[restrictedDates]);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  if (space == null) {
    return <Loading />;
  }
  let restrictedDates = [];
  if (space.bookedDates) {
    restrictedDates = space.bookedDates.map((x) => x.toDate());
  }
  const startdate = calendarState[0].startDate.toISOString();
  const enddate = calendarState[0].endDate.toISOString();

  const formattedStartDate = format(new Date(startdate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(enddate), "dd MMMM yyyy");
  const rangeText = `${formattedStartDate} - ${formattedEndDate}`;

  // const d1 = calendarState[0].startDate,
  //   d2 = calendarState[0].endDate,
  //   diff = (d2 - d1) / 864e5,
  //   dates = Array.from({ length: diff + 1 }, (_, i) => {
  //     const date = new Date();
  //     date.setDate(d1.getDate() + i);
  //     console.log(date);
  //     return date;
  //   });

  var getDateArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  var dates = getDateArray(
    calendarState[0].startDate,
    calendarState[0].endDate
  );

  const selectDates = () => {
    const selectedd = [...dd, ...dates];
    setdbDates(selectedd);
    const brandbookdd = [...dates];
    setBrandBookDates(brandbookdd);
    // console.log(d1);

    console.log(dates);
  };
  // if (dates) setdd(...dates);

  // console.log(space.bookedDates);

  // console.log(restrictedDates);
  // console.log();

  const bookSpace = () => {
    // const docRef = firestore.collection("allplaces").doc(idSpace);
    // docRef.get().then((doc) => {
    //   console.log(doc.data());
    //   const sme = doc.data();
    //   console.log(sme);
    //   setSpace({ ...space, sme });
    //   console.log(space);
    // });

    console.log(dates);
    // const some =  loadSpace(idSpace);
    // console.log(dates);
    firestore
      .collection("users")
      .doc(uid)
      .collection("places")

      .add({
        ...space,
        brandBookedDates: brandBookedDates,
        range: rangeText,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    firestore.collection("allplaces").doc(id).update({
      bookedDates: dbDates,
    });
    history.replace("/myspaces");
    // firestore
    // .collection("users")
    // .doc(uid)
    // .collection("places")

    // .add({
    //   ...space,
    //   createdAt: firestore.FieldValue.serverTimestamp(),
    //   imgUrl: url,
    // })
  };

  // console.log(space);
  // useEffect(() => {
  //   console.log(space);
  // }, [space]);
  console.log(space.imgUrl[0]);
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
                            src={space.imgUrl[0]}
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
                          src={space.imgUrl[1]}
                          alt=""
                        />
                      </div>
                      <div className="relative md:row-span-1 col-span-1">
                        <img
                          className="w-full h-40 border-black border"
                          src={space.imgUrl[2]}
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
                <div className="m-1">
                  <h1>Calendar</h1>
                </div>
                <div className="flex flex-col md:grid mx-10  md:grid-cols-2  m-1 w-full">
                  {/* <DateRangePicker
                    onChange={(item) => setCalendarState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={calendarState}
                    direction="horizontal"
                  /> */}
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setCalendarState([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={calendarState}
                    disabledDates={restrictedDates}
                  />
                </div>
                {formattedStartDate !== null && role === "Brand" && (
                  <div>
                    <div>
                      <p className="text-lg">
                        start date:{" "}
                        <label className="text-sm">{formattedStartDate}</label>
                      </p>
                    </div>
                    <p className="text-lg">
                      end date:{" "}
                      <label className="text-sm">{formattedEndDate}</label>
                    </p>
                    <div>
                      <p className="text-lg">
                        range: <label className="text-sm">{rangeText}</label>
                      </p>
                    </div>
                    <div className="mt-6 py-2">
                      <button
                        className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => {
                          selectDates();
                        }}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {role === "Brand" && (
                <div className="mt-6 py-2">
                  <button
                    className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      bookSpace();
                    }}
                  >
                    Book Space
                  </button>
                </div>
              )}
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
