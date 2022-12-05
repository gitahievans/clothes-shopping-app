// import React, { useEffect, useState } from "react";

// function ItemSearchForm({ clothes, setSearchResults }) {
//   // const [searchItems, setSearchItems] = useState("");
//   // const [count, setCount] = useState(0);
//   // const [results, setResults] = useState([]);

//   // const handleSearch = (e) => {
//   //   setSearchItems(e.target.value);
//   // };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setCount(count + 1);
//   // };

//   // const searchUrl = "https://shopping-app-evans.herokuapp.com/clothes";

//   // useEffect(() => {
//   //   const searcher = searchUrl + searchItems;
//   //   fetch(searcher)
//   //     .then((r) => r.json())
//   //     .then((data) => setResults(data));
//   // }, [count]);

//   const handleSubmit = (e) => e.preventDefault();

//   const handleSearchChange = (e) => {
//     if (!e.target.value) return setSearchResults(clothes);

//     const gottenResults = clothes.filter((cloth) =>
//       cloth.name.includes(e.target.value)
//     );
//     setSearchResults(gottenResults);
//     console.log(gottenResults);
//   };

//   return (
//     <div className="search-container">
//       <form className="form-search" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search Item"
//           className="search-form"
//           id="search"
//           onChange={handleSearchChange}
//         />
//         <button>
//           <img
//             className="search-image"
//             src="https://cdn-icons-png.flaticon.com/512/875/875623.png"
//             alt="Search"
//           ></img>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ItemSearchForm;
