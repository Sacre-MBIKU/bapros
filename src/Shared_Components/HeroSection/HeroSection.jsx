import HeroSectionDecoration from "./HeroSectionDecoration";

const HeroSection = ({children,  banner}) => {
    return(
        <HeroSectionDecoration banner= {banner}>
            {children}
        </HeroSectionDecoration>
    )
}

export default HeroSection;