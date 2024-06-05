import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background:  ${({theme}) => theme.COLORS.BACKGROUND_900};
        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }
`

export const Form = styled.form`
    width: 340px;
    margin: 30px auto 0;
`

export const Avatar = styled.div`
    position: relative;
    margin: -84px auto 32px;

    width: 168px;
    height: 168px;

    > img {
        width: 168px;
        height: 168px;
        border-radius: 50%;

    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.ORANGE};

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
        
        input {
            display: none;
        }

        svg {
            height: 20px;
            width: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`