"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">Next JS 14 image gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/" active={pathname==='/'}>Home</Nav.Link> */}
                        <Nav.Link href="/static" active={pathname === '/static'}>Static</Nav.Link>
                        <Nav.Link href="/dynamic" active={pathname === '/dynamic'}>Dyanmic</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}