import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../components/layout/Input";
import { storage } from "../../store";
import Sidebar from "../../components/layout/Sidebar";

import ImageField from "../../components/layout/ImageField";
import PreviewPicture from "../../components/layout/PreviewPicture";
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

import { useFirestore, useFirebase } from "react-redux-firebase";
import { BiImageAdd, BiHandicap, BiCctv } from "react-icons/bi";

const AddSpace = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const uid = firebase.auth().currentUser.uid;
  let history = useHistory();
  const { id } = useParams();
  console.log(id);

  const docRef = id
    ? firestore.collection("users").doc(uid).collection("places").doc(id)
    : null;
  const [picture, setPicture] = useState({
    picture: "",
    pictureUrl: "",
  });
  const [imagesUrl, setImagesUrl] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState({
    area: "",
    pricing: "₹",
    priceDay: "₹",
    priceWeek: "₹",
    priceMonth: "₹",

    address: "",
    description: "",
    availability: true,
    imgUrl: [""],
    streetLevel: false,
    kitchen: false,
    windowDisplay: false,
    handicapAccessible: false,
    electricity: false,
    airConditioning: false,
    heating: false,
    toilets: false,
    lighting: false,
    securitySystem: false,
    furniture: false,
    garmetRack: false,
    internet: false,
    soundVideo: false,
    minimal: false,
  });
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (id) {
      loadPlace();
    }
  }, [id]);

  const handleClickAmenities = (e) => {
    setUser({ ...user, [e.target.name]: e.target.checked });
    // console.log([e.target.name]);
    // console.log([e.target.checked]);

    // console.log(user.streetLevel);
  };
  // console.log(user.streetLevel);
  const loadPlace = async () => {
    try {
      const result = await docRef.get();
      if (result.exists) {
        setUser(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getPicture = (event) => {
    // console.log("call");
    // let reader = new FileReader();
    // let file = event.target.files[0];
    // reader.onloadend = () => {
    //   console.log(file);
    //   setImage(file);
    //   setPicture({ picture: file, pictureUrl: reader.result });
    // };
    // reader.readAsDataURL(file);

    for (let i = 0; i < event.target.files.length; i++) {
      const newFile = event.target.files[i];
      newFile["id"] = Math.random();
      setFiles((prevState) => [...prevState, newFile]);
    }
  };
  const getImagesUrl = async () => {
    console.log("upload image");

    // storage.ref(`images/${image.name}`).put(image);
    // const url = await storage.ref("images").child(image.name).getDownloadURL();
    // console.log(url);
    // setImagesUrl(url);
    // console.log(imagesUrl);

    const promises = [];
    const urlarray = [];
    files.forEach((file) => {
      const uploadTask = storage
        .ref()
        .child(`images/${uid}/${file.name}`)
        .put(file);
      promises.push(uploadTask);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, async () => {
        const downloadURL = await storage
          .ref("images")
          .child(`${uid}/${file.name}`)
          .getDownloadURL();
        // do something with the url
        urlarray.push(downloadURL);
        console.log(downloadURL);
        setImagesUrl(urlarray);
      });
    });
    Promise.all(promises)
      .then(() => alert("All files uploaded"))
      .catch((err) => console.log(err.code));
  };
  console.log(imagesUrl);
  console.log(files);
  const submitForm = async (e) => {
    console.log("submitform");
    e.preventDefault();
    if (id) {
      // update user
      try {
        await docRef.update({
          ...user,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        });
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      console.log(image);
      // const uploadData = async () => {
      //   console.log("upload image");

      //   storage.ref(`images/${image.name}`).put(image);
      //   const url = await storage
      //     .ref("images")
      //     .child(image.name)
      //     .getDownloadURL();
      //   return url;
      // };
      getImagesUrl().then(() => {
        console.log("url");

        firestore
          .collection("users")
          .doc(uid)
          .collection("places")

          .add({
            ...user,
            createdAt: firestore.FieldValue.serverTimestamp(),
            imgUrl: imagesUrl,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            firestore
              .collection("allplaces")
              .doc(docRef.id)
              .set({
                ...user,
                createdAt: firestore.FieldValue.serverTimestamp(),
                imgUrl: imagesUrl,
              });
          });

        console.log("places completed");
        history.push("/dashboard");
      });
    }
  };
  return (
    <>
      <div className="flex flex-no-wrap">
        <Sidebar />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6  mt-16">
          <div className="my-2">
            <h1 className="text-2xl">Add Space</h1>
          </div>
          <form onSubmit={submitForm}>
            <div className="flex flex-col mx-auto bg-blue-50 md:w-full shadow p-2">
              <div className="flex flex-col md:flex-row justify-evenly my-2">
                <div className="flex flex-col m-1 w-full">
                  <h1>Place</h1>
                  <Input
                    placeholder="Enter PLace Name"
                    name="area"
                    value={user.area}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex flex-col m-1 w-full">
                  <h1>Pricing</h1>
                  <div className="flex flex-row my-2">
                    <input
                      className=" w-40 md:w-56 xl:w-56 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Pricing"
                      name="priceDay"
                      value={user.priceDay}
                      onChange={onInputChange}
                    />
                    <span className="bg-gray-400 text-gray-900 w-28 mx-auto text-center ml-2 py-2 px-4 rounded focus:outline-none ">
                      per day
                    </span>
                  </div>
                  <div className="flex flex-row my-2">
                    <input
                      className=" w-40 md:w-56 xl:w-56 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Pricing"
                      name="priceWeek"
                      value={user.priceWeek}
                      onChange={onInputChange}
                    />
                    <span className="bg-gray-400 text-gray-900 w-28 mx-auto text-center ml-2 py-2 px-4 rounded focus:outline-none ">
                      per week
                    </span>
                  </div>
                  <div className="flex flex-row my-2">
                    <input
                      className=" w-40 md:w-56 xl:w-56 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Pricing"
                      name="priceMonth"
                      value={user.priceMonth}
                      onChange={onInputChange}
                    />
                    <span className="bg-gray-400 text-gray-900 w-28 mx-auto text-center ml-2 py-2 px-4 rounded focus:outline-none ">
                      per month
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between my-2">
                <div className="flex flex-col  m-1">
                  <h1>Add Image</h1>

                  <input
                    type="file"
                    multiple
                    className="form-control"
                    onChange={(event) => {
                      getPicture(event);
                    }}
                  />
                  {files[0] && (
                    <>
                      <div className=" inline-flex space-x-4 ">
                        {files.map((file) => {
                          return (
                            <>
                              {/* <PreviewPicture
                              picture={file}
                              pictureUrl={picture.pictureUrl}
                            /> */}
                              <div className="flex-1 w-100">
                                <img
                                  className="w-40"
                                  src={URL.createObjectURL(file)}
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>

                      <div className="mt-6 py-2">
                        <button
                          className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                          onClick={() => {
                            getImagesUrl();
                          }}
                        >
                          Upload Photos
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-evenly my-2">
                <div className="flex flex-col m-1 w-full">
                  <h1>Address</h1>

                  <textarea
                    placeholder="Enter Address "
                    name="address"
                    value={user.address}
                    onChange={onInputChange}
                    rows="3"
                    className="w-56 md:w-64 xl:w-96 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex flex-col m-1 w-full">
                  <h1>Description</h1>

                  <textarea
                    placeholder="Provide details"
                    name="description"
                    value={user.description}
                    onChange={onInputChange}
                    rows="3"
                    className=" w-56 md:w-64 xl:w-96 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col my-2">
                <div className="m-1">
                  <h1>Amenities</h1>
                </div>

                <div className="flex flex-col md:grid mx-10  md:grid-cols-2  m-1 w-full">
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="streetLevel"
                    />
                    <GiDoubleStreetLights className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Street Level</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="kitchen"
                    />
                    <MdKitchen className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Kitchen</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="windowDisplay"
                    />
                    <GiWindow className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Window Display</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="handicapAccessible"
                    />
                    <BiHandicap className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Handicap Accessible</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="electricity"
                    />
                    <GiElectric className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Electricity</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="airConditioning"
                    />
                    <IoSnow className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Air Conditioning</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="heating"
                    />
                    <GiHeatHaze className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Heating</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="toilets"
                    />
                    <FaToilet className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Toilets</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="securitySystem"
                    />
                    <BiCctv className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Security System</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="lighting"
                      hidden
                    />
                    <GiWallLight className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Lighting</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 checked:text-gray-800 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="furniture"
                    />
                    <GiSofa className="w-12 h-8 checked:text-gray-800" />
                    <span className="text-lg mt-0.5">Furniture</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="garmetRack"
                    />
                    <FaStackOverflow className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Garment Rack</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="internet"
                    />
                    <ImConnection className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Internet</span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="soundVideo"
                    />
                    <GiMusicSpell className="w-12 h-8" />
                    <span className="text-lg mt-0.5">
                      Sound & Video Equipment
                    </span>
                  </div>
                  <div className="flex flex-row my-0.5 p-1 text-gray-600 hover:text-gray-800">
                    <input
                      type="checkbox"
                      className="text-gray-800 mt-2 h-5 w-5"
                      onClick={handleClickAmenities}
                      name="minimal"
                    />
                    <FiMinimize className="w-12 h-8" />
                    <span className="text-lg mt-0.5">Whitebox / Minimal</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 py-2">
                <button
                  type="submit"
                  className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {id ? "Update Place" : "Add Place"}
                </button>
              </div>
            </div>
          </form>

          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        </div>
      </div>
    </>
  );
};

export default AddSpace;
