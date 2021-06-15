import crossIcon from "../../assets/icons/cross-icon.svg";
import CrossIconDecoration from "./CrossIconDecoration";
const CrossIcon = ({onClick, genreListMenuState, modalCross}) => {
  return (
    <CrossIconDecoration modalCross = {modalCross} genreListMenuState = {genreListMenuState} onClick = {onClick}>
      <img src={crossIcon} alt="cross icon" />
    </CrossIconDecoration>
  );
};

export default CrossIcon;
