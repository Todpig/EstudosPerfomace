import { HeaderContainer, HeaderContent, NewTrasationButton } from "./style";
import logoImg from '../../assets/logo.svg';


export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <NewTrasationButton>Nova transação</NewTrasationButton>
            </HeaderContent>
        </HeaderContainer>
    )
}