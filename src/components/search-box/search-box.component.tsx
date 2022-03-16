import {ChangeEventHandler, Component} from "react";
import './search-box.styles.css';

interface SearchBoxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>,
  className?: string,
  placeholder?: string
}

class SearchBox extends Component<SearchBoxProps, any> {
  render() {
    const {className, placeholder, onChangeHandler} = this.props;
    return (
      <div>
        <input
          type={"search"}
          className={`search-box ${className}`}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>)
  }
}

export default SearchBox;
