import React, { useState, useEffect } from "react";
import "./App.css";
import ListOwners from "./components/listOwners/listOwners";
import DisplayOwner from "./components/displayOwner/displayOwner";
import AddOwner from "./components/addOwner/addOwner";
import UpdateOwner from "./components/updateOwner/updateOwner";

function getOwners(update) {
  fetch("https://localhost:44365/api/owners")
    .then((response) => response.json())
    .then((json) => update(json));
}

function App() {
  const [ownerId, updateSelectedOwnerId] = useState(null);
  const [owners, updateOwners] = useState([]);
  useEffect(() => {
    getOwners(updateOwners);
  }, []);
  return (
    <>
      <ListOwners
        onSelectOwner={(id) => updateSelectedOwnerId(id)}
        owners={owners}
      />
      <DisplayOwner id={ownerId} />
      <UpdateOwner id={ownerId} onUsersUpdate={() => getOwners(updateOwners)} />
      <AddOwner />
    </>
  );
}

export default App;
