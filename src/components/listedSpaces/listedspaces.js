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
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Space
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Area
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Pricing
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allplaces.map((place, index) => (
                        <tr key={place.index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm text-left font-medium text-gray-900">
                                {index + 1}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <div className="flex-shrink-0 h-20 w-36 ">
                                <img
                                  className=" "
                                  src={`${place.imgUrl}`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {place.area}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                              {place.name}
                            </div> */}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {place.pricing}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Occupied
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Place your content here */}
        </div>
      </div>
    </div>
  );
};

export default ListedSpaces;
