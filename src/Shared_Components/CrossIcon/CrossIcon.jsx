import crossIcon from "../../assets/icons/cross-icon.svg";
import CrossIconDecoration from "./CrossIconDecoration";
const CrossIcon = ({onClick, genreListMenuState}) => {
  return (
    <CrossIconDecoration genreListMenuState = {genreListMenuState} onClick = {onClick}>
      <img src={crossIcon} alt="cross icon" />
    </CrossIconDecoration>
  );
};

export default CrossIcon;
