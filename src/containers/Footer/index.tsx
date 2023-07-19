import LogoImg from '../../assets/images/logo.png'
import Facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import Instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import Twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import { CoInfos, FooterContainer, FooterContent, Logo, SocialLinks } from './styles'


const Footer = () => {

    return (
        <>
            <footer>
                <FooterContainer>
                    <FooterContent className="container">
                        <Logo src={LogoImg} />
                        <SocialLinks>
                            <img src={Instagram} alt="Instagram" />
                            <img src={Facebook} alt="Facebook" />
                            <img src={Twitter} alt="Twitter" />
                        </SocialLinks>
                        <CoInfos>
                        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. 
                        </CoInfos>
                    </FooterContent>
                </FooterContainer>
            </footer>
        </>
    )
}

export default Footer