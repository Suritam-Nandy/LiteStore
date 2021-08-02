import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../layout/Input";

import { useFirestore, useFirebase } from "react-redux-firebase";

const UserForm = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();

  const uid = firebase.auth().currentUser.uid;
  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("users").doc(id) : null;

  const [user, setUser] = useState({
    name: "",
    email: "",
    standard: "",
    phone: "",
    address1: "",
    address2: "",
  });

  useEffect(() => {
    if (id) {
      loadUser();
    }
  }, [id]);

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
                      placeholder="Enter User Name"
                      name="name"
                      value={user.name}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter User E-mail"
                      name="email"
                      value={user.email}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="form-row form-group mb-4">
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter User Phone"
                      name="phone"
                      value={user.phone}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter User Class"
                      name="standard"
                      value={user.standard}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter User Address Line 1"
                      name="address1"
                      value={user.address1}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Enter User Line 2"
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
