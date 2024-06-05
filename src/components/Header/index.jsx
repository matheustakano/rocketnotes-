import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/matheustakano.png" alt="Foto do Usuário" />

                <div>
                    <span>Seja Bem-vindo,</span>
                    <strong>Matheus Willian Takano</strong>
                </div>
            </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>

        </Container>
    )
}