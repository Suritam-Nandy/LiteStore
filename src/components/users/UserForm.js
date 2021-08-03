import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../layout/Input";
import storageRef from "../../store";

import { useFirestore, useFirebase } from "react-redux-firebase";
import { BiImageAdd } from "react-icons/bi";

const UserForm = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const uid = firebase.auth().currentUser.uid;
  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("users").doc(id) : null;

  const [user, setUser] = useState({
    name: "",

    address1: "",
    address2: "",
    availability: true,
  });

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

  const submitForm = async (e) => {
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
      // add new user
      firestore
        .collection("users")
        .doc(uid)
        .collection("places")

        .add({ ...user, createdAt: firestore.FieldValue.serverTimestamp() });
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
                      name="name"
                      value={user.name}
                      onChange={onInputChange}
                    />
                  </div>
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
                  {id ? "Update User" : "Add User"}
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
