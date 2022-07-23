import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}>
    <Container
      fluid
      style={{
        padding: `1.45rem 1.0875rem`
      }}>
      <h6 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}>
          TICKLE BOIZ {/* {siteTitle} */}
        </Link>
      </h6>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
