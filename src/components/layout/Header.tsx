import * as React from "react";
import { Container } from "react-bootstrap";
import NflLogo from "./NflLogo";

const Header = ({ siteTitle = "TICKLE BOIZ" }) => (
  <header
    style={{
      background: `#013369`,
      marginBottom: `1.45rem`
    }}>
    <Container
      fluid
      style={{
        padding: `1.45rem 1.0875rem`
      }}>
      <h6 style={{ margin: 0 }}>
        <NflLogo />
        <span
          style={{
            color: `white`,
            textDecoration: `none`,
            marginLeft: `1rem`
          }}>
          {siteTitle}
        </span>
      </h6>
    </Container>
  </header>
);

export default Header;
