import React, { useState, useEffect } from "react";
import Avatar from "../layout/Avatar";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading";

const LoadSpaces = (id) => {
  useFirestoreConnect([
    {
      collection: `users/${id}/places`,
      storeAs: "users",
    },
  ]);

  // const users = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[id]
  // );
  const users = useSelector((state) => state.firestore.ordered.users);

  if (!users) {
    return <Loading />;
  }
};
export default LoadSpaces;
