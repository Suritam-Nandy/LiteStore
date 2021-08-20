import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../layout/Input";
import { storage } from "../../store";
import ImageField from "../layout/ImageField";
import PreviewPicture from "../layout/PreviewPicture";

import { useFirestore, useFirebase } from "react-redux-firebase";
import { BiImageAdd } from "react-icons/bi";

const UserForm = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const uid = firebase.auth().currentUser.uid;
  let history = useHistory();
  const { id } = useParams();
  const docRef = id
    ? firestore.collection("users").doc(uid).collection("places").doc(id)
    : null;

  const [user, setUser] = useState({
    area: "",
    pricing: "₹",

    address1: "",
    address2: "",
    availability: true,
    imgUrl: [""],
  });
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (id) {
      loadUser();
    }
  }, [id]);

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

  const loadUser = async () => {
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
    <div className="container">
      <div className="py-4">
        <div className="row ">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <form onSubmit={submitForm}>
                <div className="form-row form-group mb-4">
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter PLace Name"
                      name="area"
                      value={user.area}
                      onChange={onInputChange}
                    />
                  </div>
                  <div>
                    <div className="form-group row">
                      {/* <label className="col-sm-3 col-form-label">{`${label} ${
            required ? "*" : ""
          }`}</label> */}
                      <div className="col-sm-9 w-20">
                        <input
                          type="file"
                          className="form-control"
                          onChange={(event) => {
                            getPicture(event);
                          }}
                        />
                      </div>
                    </div>
                    {/* <PreviewPicture
                      picture={this.state.picture}
                      pictureUrl={this.state.pictureUrl}
                    /> */}
                  </div>
                  {/* <PreviewPicture picture={file} /> */}
                  {/* <input
                    hidden
                    id="icon-button-file"
                    onChange={fileUpload}
                    // type="file"
                  />
                  <label
                    htmlFor="icon-button-file"
                    style={{ height: "24px" }}
                    onClick={fileUpload}
                  >
                    <BiImageAdd />
                    button
                  </label> */}
                </div>

                <div className="form-row form-group">
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Pricing"
                      name="pricing"
                      value={user.pricing}
                      onChange={onInputChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Place Address Line 1"
                      name="address1"
                      value={user.address1}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter Place Address Line 2"
                      name="address2"
                      value={user.address2}
                      onChange={onInputChange}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  {id ? "Update User" : "Add place"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
