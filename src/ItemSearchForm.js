import React from "react";

function ItemSearchForm({ clothes, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(clothes);

    const gottenResults = clothes.filter((cloth) =>
      cloth.name.includes(e.target.value)
    );
    setSearchResults(gottenResults);
  };

  return (
    <div className="search-container">
      <form className="form-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Item"
          className="search-form"
          onChange={handleSearchChange}
        />
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
