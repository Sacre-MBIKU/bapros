import SearchBarDecoration from "./SearchBarDecoration";

const SearchBar = () => {
  return (
    <>
      <SearchBarDecoration>
        <input
          type="search"
          name="input-search"
          id="input-search"
          className="input-search"
          placeholder="trouver votre cinema"
        />
        <button type="submit" className="submit-button"></button>
      </SearchBarDecoration>
    </>
  );
};

export default SearchBar;
