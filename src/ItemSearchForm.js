import React from "react";

const ItemSearchForm = ({ products, setSearchResults }) => {
  // console.log(products);
  const handleSubmit = (e) => {
    return e.preventDefault();
  };
  const handleChange = (e) => {
    if (!e.target.value) return setSearchResults(products);
    const searchResultsArray = products.filter((prod) =>
      prod.name.toLowerCase().includes(e.target.value)
    );
    setSearchResults(searchResultsArray);
    // console.log(searchResultsArray);
  };

  return (
    <div>
      <form className="searcher" onSubmit={handleSubmit}>
        <input type="text" className="search_inp" onChange={handleChange} />
      </form>
    </div>
  );
};

export default ItemSearchForm;
