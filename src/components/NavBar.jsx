import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
    render() {
      return (
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Notes App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullLeft>
            <FormGroup>
                <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">GO!</Button>
            </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
      );
    }
}
export default NavBar;