import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

function Profile() {
  const { user } = useContext(AppContext);

  return (
    <div className="text-white">
      <h1>Perfil</h1>
      {user && (
        <>
          <h2>{user.id}</h2>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </>
      )}
    </div>
  );
}

export default Profile;
