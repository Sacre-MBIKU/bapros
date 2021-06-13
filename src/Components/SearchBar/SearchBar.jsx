import SearchBarDecoration from "./SearchBarDecoration";

const SearchBar = ({ secondAppMode }) => {
  return (
    <>
      <SearchBarDecoration secondAppMode={secondAppMode}>
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
