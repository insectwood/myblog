import React from "react"
import {Row, Col} from "reactstrap";

const Header = () => {
    return (
        <div id="header1" className="mb-3">
           <Row>
               <Col md="6" sm="auto" className="text-center m-auto">
                   <h1>header text 1</h1>
                   <p>header text 2</p>
               </Col>
           </Row>
        </div>
    );
};

export default Header;