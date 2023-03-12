import { useState } from 'react';
import ContactService from '../services/ContactService';

function SearchResult({ result }) {
    console.log(result);
  return (
    <div className="mt-3">
      <h3>Search Result:</h3>
      {result ? (
        <div>
          <p>Name: {result.data.username}</p>
          <p>address: {result.data.address}</p>
          <p>picture: <img src={result.data.imageUrl} alt="no img" width="50" height="50" /></p>
        </div>
        
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
}

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(searchTerm);
    ContactService.getContactByName(searchTerm)
      .then((result) => {
        console.log(result);
        setSearchResult(result);
      })
      .catch((err) => {
        // console.log(err);
        setSearchResult(null);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchResult(null); // clear search result when search term changes
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
        />
        <button type="submit" className="btn btn-outline-success">
          Search
        </button>
      </form>
      {searchResult !== null && <SearchResult result={searchResult} />}
    </>
  );
}

export default SearchBar;