import HeroSectionDecoration from "./HeroSectionDecoration";

const HeroSection = ({children,  banner, modalBox}) => {
    return(
        <HeroSectionDecoration banner= {banner} modalBox = {modalBox}>
            {children}
        </HeroSectionDecoration>
    )
}

export default HeroSection;