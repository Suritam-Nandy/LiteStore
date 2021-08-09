import React, { useState, useEffect } from "react";
import Avatar from "../layout/Avatar";
import Sidebar from "../layout/Sidebar";

import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading";
import { LoadSpaces } from "./LoadSpaces";
import { db } from "../../store";

const ListedSpaces = () => {
  const firestore = useFirestore();
  const firebase = useFirebase();
  const { uid } = useSelector((state) => state.firebase.auth);
  const allplaces = useSelector((state) => state.firestore.ordered.allplaces);

  useFirestoreConnect({
    collection: "allplaces",
  });
  if (!allplaces) {
    return <Loading />;
  }

  // useEffect(() => {

  // }, []);

  // useFirestoreConnect([
  //   { collection: "users", orderBy: ["createdAt", "desc"] },
  // ]);

  // const users = firebase.firestore().collection("users");

  // useEffect(() => {
  //   getUsers();
  // }, []);
  // console.log(users);

  // const getUsers = async () => {
  //   try {
  //     const arr = [
  //       "Mb6V4kEnp0aDLoyrdhQ85uzReUv1",
  //       "eXhlysyYruQDBt1NhNFNcVUDa2H2",
  //     ];
  //     // LoadSpaces(arr)
  //     for (let i = 0; i < arr.length; i++) {
  //       await db
  //         .collection("users")
  //         .doc(arr[i])
  //         .collection("places")
  //         .get()
  //         .then((snap) => {
  //           snap.forEach((doc) => {
  //             console.log(doc.data());
  //             users.push(doc.data());

  //             console.log(users);
  //           });
  //         });
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }

  //   return users;
  // };

  // const getUsers = async () => {
  //   try {
  //     const collection = {};
  //     const docRef = firestore.collection("users");
  //     const result = await docRef.get();
  //     if (result.exists) {
  //       result.forEach((doc) => {
  //         collection[doc.id] = doc.data();
  //       });
  //       console.log(collection);

  //       return collection;
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }
  // };
  // const arr = ["eXhlysyYruQDBt1NhNFNcVUDa2H2", "Mb6V4kEnp0aDLoyrdhQ85uzReUv1"];
  // for (let i = 0; i < arr.length; i++) {
  //   <LoadSpaces id={arr[i]} />;
  // }
  // useFirestoreConnect([
  //   {
  //     collection: `users/${arr[i]}/places`,
  //     storeAs: "users",
  //   },
  // ]);

  // const users = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[id]
  // );

  // const users = useSelector(
  //   ({ firestore: { data } }) => data.users && data.users[id]
  // );
  // const users = useSelector((state) => state.firestore.ordered.users);
  // if (!users) {
  //   return <Loading />;
  // }

  const deleteUser = async (id) => {
    try {
      await firestore.collection("users").doc(id).delete();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="flex flex-no-wrap">
      <Sidebar />
      <div className="container mx-auto py-10 h-full md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
          {/* Place your content here */}
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Space</th>
                <th scope="col">Area</th>
                <th scope="col">Pricing</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allplaces.map((place, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img className="w-36" src={`${place.imgUrl}`} />
                  </td>
                  <td>{place.name}</td>
                  <td>{place.pricing}</td>
                  <td>Occupied</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListedSpaces;
