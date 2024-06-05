import { Container, Links, Content } from './style.js'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir a nota"/>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Assumenda molestiae voluptas quae quo deleniti natus. 
            Blanditiis excepturi exercitationem et, accusamus dolorem velit, 
            ipsa voluptatibus quis ab eveniet dicta dolor voluptates.
          </p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}