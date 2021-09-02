import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Avatar from "../layout/Avatar";
import { useFirestore } from "react-redux-firebase";
import Loading from "../layout/Loading";
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
  if (space == null) {
    return <Loading />;
  }
  console.log(space.area);
  return <div className="mt-20">{space.area}</div>;
};

export default Space;
