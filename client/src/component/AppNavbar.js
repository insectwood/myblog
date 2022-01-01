import React, {Fragment} from "react";
import {Nav, Navbar} from "reactstrap";

// Link error why??
import {Link} from "react-router-dom";

const AppNavbar = () => {
    return (
        <Fragment>
            <Navbar color="dark" dark expand="lg" className="sticky-top">
                <a href="/" className="text-white text-decoration-none">
                    project my blog(kwon's blog)
                </a>
                <Nav>
                    {
                        false ?
                        (<h1 className="text-white">auth link</h1>)
                        :
                        (<h1 className="text-white">guest link</h1>)
                    }
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default AppNavbar;

