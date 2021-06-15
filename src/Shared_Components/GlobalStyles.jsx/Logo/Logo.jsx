import LogoDecoration from "./LogoDecoration";
import {Link} from 'react-router-dom'

const Logo = ({ secondAppMode }) => {
  return (
    <LogoDecoration secondAppMode={secondAppMode}>
      <Link to="/">
        <span className="logo-first-part">b^a</span>
        <span className="logo-second-part">.PROS</span>
      </Link>
    </LogoDecoration>
  );
};

export default Logo;
