import React, { useState, useEffect } from "react";
import Loading from "../../layout/Loading";
import "./ListedSpace.css";
import Sidebar from "../../layout/Sidebar";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
const Profile = () => {
  //   const firestore = useFirestore();
  const firebase = useFirebase();

  const { uid } = useSelector((state) => state.firebase.auth);
  const user = useSelector((state) => state.firestore.data.user);

  useFirestoreConnect({
    collection: `users/LandOwner/${uid}`,
    doc: "details",
    storeAs: "user",
  });

  const name = firebase.auth().currentUser.displayName
    ? firebase.auth().currentUser.displayName
    : user.displayName;

  //   if (!user) {
  //     return <Loading />;
  //   }

  return (
    <div>
      <div className="">
        <div className="flex flex-wrap overflow-hidden max-h-full ">
          <Sidebar />
          <div className="container mx-auto py-10 h-full md:w-4/5 w-11/12 px-6  ">
            <div className="my-20">
              <h1 className="text-2xl">{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
