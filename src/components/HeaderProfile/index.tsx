import {HeaderContainer, HeaderContent, HeaderRowContent, HeaderText, Logo} from './styles'

const HeaderProfile = () => {

return (
    <HeaderContainer>
                    <HeaderContent className="container">
                        <HeaderRowContent>
                            <HeaderText>Restaurantes</HeaderText>
                            <Logo to={'/'}/>
                            <HeaderText>0 produto(s) no carrinho</HeaderText>
                        </HeaderRowContent>
                    </HeaderContent>
    </HeaderContainer>
    )
}

export default HeaderProfile