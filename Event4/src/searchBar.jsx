function SearchBar({ search, setSearch }) {

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;