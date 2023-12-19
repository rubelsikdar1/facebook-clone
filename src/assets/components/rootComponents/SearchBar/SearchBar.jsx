import Style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({placeholderText}) => {
  return (
    <div>
      <div className={Style.searchBox}>
        <IoSearch color="#D8DADF" size={22} />
        <input
          className={Style.sfx}
          type="search"
          name=""
          id=""
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
};

export default SearchBar;
