import HeroSectionDecoration from "./HeroSectionDecoration";

const HeroSection = ({children}) => {
    return(
        <HeroSectionDecoration>
            {children}
        </HeroSectionDecoration>
    )
}

export default HeroSection;