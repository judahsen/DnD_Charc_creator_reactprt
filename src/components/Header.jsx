import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
    return (
        <Navbar clasName="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">D&D Character Creator</Navbar.Brand>
            </Container>
        </Navbar>
    )
}