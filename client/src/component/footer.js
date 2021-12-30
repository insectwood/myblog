import React from "react"
import {Row, Col} from "reactstrap"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
      <div id = "footer1" className="text-center m-auto">
          <Row>
              <Col>
                  <p>&copy; footer text <span>{year}</span></p>
              </Col>
          </Row>
      </div>
    );
};

export default Footer;