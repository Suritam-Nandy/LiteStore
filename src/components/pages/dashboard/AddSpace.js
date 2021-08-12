import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../layout/Input";
import { storage } from "../../../store";
import Sidebar from "../../layout/Sidebar";

import ImageField from "../../layout/ImageField";
import PreviewPicture from "../../layout/PreviewPicture";

import { useFirestore, useFirebase } from "react-redux-firebase";
import { BiImageAdd } from "react-icons/bi";

const AddSpace = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const uid = firebase.auth().currentUser.uid;
  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("users").doc(id) : null;

  const [user, setUser] = useState({
    area: "",
    pricing: "₹",

    address1: "",
    address2: "",
    availability: true,
    imgUrl: [""],
  });
  const [image, setImage] = useState(null);
  // useEffect(() => {
  //   if (id) {
  //     loadUser();
  //   }
  // }, [id]);

  // const fileUpload = (e) => {
  //   const file = e.target.files[0];
  //   console.log("FileName", file);
  //   const uploadTask = storageRef.ref("All_Files/").child(file.name).put(file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //     },
  //     (error) => {
  //       // Handle unsuccessful uploads
  //       console.log("error:-", error);
  //     },
  //     () => {
  //       // const uniId = guidGenerator().toString();
  //       // Handle successful uploads on complete
  //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //         firestore
  //           .collection("All_Files")
  //           .doc(uid)
  //           .set({
  //             file_name: file.name.toString(),
  //             id: uid,
  //             download_url: downloadURL.toString(),
  //           })
  //           .then(() => {
  //             console.log("Document successfully written!");
  //           })
  //           .catch((error) => {
  //             console.error("Error writing document: ", error);
  //           });
  //       });
  //     }
  //   );
  // };

  // const loadUser = async () => {
  //   try {
  //     const result = await docRef.get();
  //     if (result.exists) {
  //       setUser(result.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }
  // };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const onImageChange = (e) => {
  //   setImage({ ...image, [e.target.name]: e.target.value });
  //   console.log(image);
  // };
  const getPicture = (event) => {
    console.log("call");
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      console.log(file);
      setImage(file);
      // console.log(image.picture.name);
      // this.setState({
      //   picture: file,
      //   pictureUrl: reader.result,
      // });
    };
    reader.readAsDataURL(file);
  };
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
      // console.log(picture);
      // add new user
      // file = getPicture
      // storageRef.ref(`images/${file.name}`).put(file);
      console.log(image);
      const uploadData = async () => {
        console.log("upload image");

        storage.ref(`images/${image.name}`).put(image);
        const url = await storage
          .ref("images")
          .child(image.name)
          .getDownloadURL();
        return url;
      };
      uploadData().then((url) => {
        console.log("url");

        firestore
          .collection("users")
          .doc(uid)
          .collection("places")

          .add({
            ...user,
            createdAt: firestore.FieldValue.serverTimestamp(),
            imgUrl: url,
          });
        console.log("userplaces completed");

        firestore.collection("allplaces").add({
          ...user,
          createdAt: firestore.FieldValue.serverTimestamp(),
          imgUrl: url,
        });
        console.log("places completed");
      });
    }
    history.push("/");
  };
  return (
    <>
      <div className="flex flex-no-wrap">
        <Sidebar />
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className="my-2">
            <h1 className="text-2xl">Add Space</h1>
          </div>
          <form onSubmit={submitForm}>
            <div className="flex flex-col w-64 md:w-full shadow p-2">
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

                  <Input
                    placeholder="Enter Pricing"
                    name="pricing"
                    value={user.pricing}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between my-2">
                <div className="flex flex-col m-1">
                  <h1>Add Image</h1>

                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) => {
                      getPicture(event);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-evenly my-2">
                <div className="flex flex-col m-1 w-full">
                  <h1>Address Line 1</h1>

                  <textarea
                    placeholder="Enter Address Line 1"
                    name="address1"
                    value={user.address1}
                    onChange={onInputChange}
                    rows="3"
                    className=" w-56 md:w-64 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex flex-col m-1 w-full">
                  <h1>Address Line 2</h1>

                  <Input
                    placeholder="Enter Place Address Line 2"
                    name="address2"
                    value={user.address2}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {id ? "Update User" : "Add place"}
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
