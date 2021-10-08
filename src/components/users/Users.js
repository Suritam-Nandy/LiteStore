import React from "react";
import Avatar from "../layout/Avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading";

const Users = () => {
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  useFirestoreConnect({
    collection: `users/${uid}/places`,
    storeAs: `places`,
  });

  const deleteUser = async (id) => {
    try {
      await firestore.collection("users").doc(id).delete();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };
  const places = useSelector((state) => state.firestore.ordered.places);
  if (!places) {
    return <Loading />;
  }
  console.log(places);
  places.map((place) => {
    console.log(place.imgUrl);
    return places.imgURl;
  });

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {places.map((place, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={place.id}>
              <div className="card shadow text-center py-4">
                <Avatar url={`${place.imgUrl}`} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{place.name}</h5>
                  <h5 className="card-title mb-0">{place.id}sdfsd</h5>

                  <p className="text-muted small">{place.email}</p>
                  <Link
                    to={`/user/${place.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <button
                    className="btn btn-edit"
                    onClick={() => deleteUser(place.id)}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
