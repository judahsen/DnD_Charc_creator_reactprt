import Container  from 'react-bootstrap/Container'
import Header from './components/Header'
import Body from './components/body'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header/>
      <Body>

      </Body>
    </Container>
  )
}
