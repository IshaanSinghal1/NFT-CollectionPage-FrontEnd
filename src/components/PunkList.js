import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="PunkContainer">
      <h1>My Collection</h1>
      <div className="punkList">
        {punkListData.map((punk) => (
          <div
            key={punk.token_id}
            onClick={() =>
              setSelectedPunk(punkListData.length - punk.token_id - 1)
            }
          >
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PunkList;
