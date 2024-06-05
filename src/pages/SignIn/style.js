import styled from 'styled-components'
import backgroundImg from '../../assets/Group 15.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
        color: ${({theme}) => theme.COLORS.WHITE}
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100}
    }

    > button {
        margin-bottom: 124px;
    }

    > a {
        color: ${({theme}) => theme.COLORS.ORANGE}
    }
`   

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`