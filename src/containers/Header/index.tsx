import { HeaderContainer, HeaderContent, Logo, Slogan } from "./styles"
import LogoImg from '../../assets/images/logo.png'

const Header = () => {

    return (
        <>
            <HeaderContainer>   
                <HeaderContent className="container">
                    <Logo src={LogoImg} />
                    <Slogan>
                    Viva experiências gastronômicas no conforto da sua casa
                    </Slogan>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}

export default Header