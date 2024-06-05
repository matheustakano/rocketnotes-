import { Container } from './style'

export function Tag({title, ...rest}){
    <Container {...rest}>
        {title}
    </Container>
}