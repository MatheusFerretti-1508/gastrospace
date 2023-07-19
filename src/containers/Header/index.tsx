import { HeaderContainer, HeaderContent, Logo, Slogan } from "./styles"

const Header = () => {

    return (
        <>
            <HeaderContainer>   
                <HeaderContent className="container">
                    <Logo to={'/'} />
                    <Slogan>
                    Viva experiências gastronômicas no conforto da sua casa
                    </Slogan>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}

export default Header