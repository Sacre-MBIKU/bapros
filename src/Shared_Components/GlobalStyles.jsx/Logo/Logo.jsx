import LogoDecoration from "./LogoDecoration";

const Logo = ({secondAppMode}) => {
  return (
    <LogoDecoration secondAppMode = {secondAppMode}>
      <span className="logo-first-part">b^a</span>
      <span className="logo-second-part">.PROS</span>
    </LogoDecoration>
  );
};

export default Logo;
