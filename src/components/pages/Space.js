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
  return (
    <div className="container">
      {/* <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <div className="row">
                <div className="col-md-4">
                  <Avatar url={`https://i.pravatar.cc/150?img=${id}`} />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                      <h3 className="m-0">{space.name}</h3>
                      <Link className="btn btn-primary" to={`/spaceForm/${id}`}>
                        edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>email: {space.email}</p>
                      <p>phone: {space.phone}</p>
                      <p>class: {space.standard}</p>
                      <p>address 1: {space.address1}</p>
                      <p>address 2: {space.address2}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {space.area}
    </div>
  );
};

export default Space;
