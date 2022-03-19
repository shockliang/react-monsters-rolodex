import {ChangeEventHandler} from "react";
import './search-box.styles.css';

interface SearchBoxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>,
  className?: string,
  placeholder?: string
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
  <div>
    <input
      type={"search"}
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
)

export default SearchBox;
