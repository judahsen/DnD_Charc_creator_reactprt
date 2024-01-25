import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Sidebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
        <Nav.Item>
            <Nav.Link href='/'>Home Page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>Character Sheet</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>Character Guide</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}