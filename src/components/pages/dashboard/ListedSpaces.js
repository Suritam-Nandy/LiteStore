import React, { useState, useEffect } from "react";
import Sidebar from "../../layout/Sidebar";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../../layout/Loading";

const ListedSpaces = () => {
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  const users = useSelector((state) => state.firestore.ordered.places);

  useFirestoreConnect({
    collection: `users/${uid}/places`,
    storeAs: "places",
  });
  if (!users) {
    return <Loading />;
  }
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
        <div className="my-20">
          <h1 className="text-2xl">Listed Spaces</h1>
        </div>
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full h-full overflow-x-hidden ">
          <div className="flex flex-col">
            <div className="-my-2  sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="h-96 border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 h-96 ">
                    <thead className="bg-gray-50 ">
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
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {users.map((place, index) => (
                        <tr key={place.index}>
                          <td className="px-6 py-4 whitespace-nowrap h-32">
                            <div className="flex items-center">
                              <div className="text-sm text-left font-medium text-gray-900">
                                {index + 1}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 flex items-center">
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
                            <div class="flex justify-center items-center ">
                              <div class="bg-gray-200 rounded-lg">
                                <div class="inline-flex rounded-lg">
                                  <input
                                    type="radio"
                                    name="room_type"
                                    id="roomPrivate"
                                    checked
                                    hidden
                                  />
                                  <label
                                    for="roomPrivate"
                                    class="radio checked:bg-rose-600 text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"
                                  >
                                    Vaccant
                                  </label>
                                </div>
                                <div class="inline-flex rounded-lg">
                                  <input
                                    type="radio"
                                    name="room_type"
                                    id="roomPublic"
                                    hidden
                                  />
                                  <label
                                    for="roomPublic"
                                    class="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"
                                  >
                                    Occupied
                                  </label>
                                </div>
                              </div>
                            </div>
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
