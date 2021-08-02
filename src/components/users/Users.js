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
    <div className="container">
      <div className="py-4">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={user.id}>
              <div className="card shadow text-center py-4">
                <Avatar url={`https://i.pravatar.cc/150?img=${index}`} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{user.name}</h5>
                  <h5 className="card-title mb-0">{user.id}</h5>

                  <p className="text-muted small">{user.email}</p>
                  <Link
                    to={`/user/${user.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <button
                    className="btn btn-edit"
                    onClick={() => deleteUser(user.id)}
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
