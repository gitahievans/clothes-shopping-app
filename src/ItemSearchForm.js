import React from "react";

function ItemSearchForm() {
  return (
    <div className="search-container">
      <form className="form-search">
        <input type="text" placeholder="Search Item" className="search-form" />
        <button>
          <img
            className="search-image"
            src="https://cdn-icons-png.flaticon.com/512/875/875623.png"
            alt="Search"
          ></img>
        </button>
      </form>
    </div>
  );
}

export default ItemSearchForm;
