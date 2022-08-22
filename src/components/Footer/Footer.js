import { Row, Container, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="black-footer">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h6>About the shop</h6>
            <p className="justified-text">
              Welcome to our NodeShop. We have everything, from household items
              and musical instruments to vehicles and school materials. Log into
              our shop and make your own cart, or, if you wish, stay as a guest
              and take a gander at our product line. Our shop accepts all credit
              cards, and payments are handled with Stripe&#8482;.
            </p>
          </Col>
          <Col xs={'xs-6'} md={3}>
            <h6>Technologies</h6>
            <ul className="footer-links">
              <li>
                <a href="https://www.w3schools.com/html/">HTML</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/css/">CSS</a>
              </li>
              <li>
                <a href="https://getbootstrap.com/">Bootstrap</a>
              </li>
              <li>
                <a href="https://www.javascript.com/">JavaScript</a>
              </li>
              <li>
                <a href="https://nodejs.org/en/">Node</a>
              </li>
              <li>
                <a href="https://www.mongodb.com/docs/">MongoDB</a>
              </li>
              <li>
                <a href="https://ejs.co/">EJS</a>
              </li>
            </ul>
          </Col>
          <Col xs={'xs-6'} md={3}>
            <h6>Contact Us</h6>
            <ul className="footer-links">
              <li>
                <a href="#dummy">About the Company</a>
              </li>
              <li>
                <a href="#dummy">Privacy Policy</a>
              </li>
              <li>
                <a href="#dummy">Rate our Services</a>
              </li>
              <li>
                <a href="#dummy">Our Partners</a>
              </li>
              <li>
                <a href="#dummy">Work for Us</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      <Container>
        <Row>
          <Col md={8} sm={6} xs={12}>
            <p className="copyright-text baseline">
              &copy; Site developed in 2021 by <a href="#dummy">Arthur Panazolo</a>
            </p>
          </Col>

          <Col md={4} sm={6} xs={12}>
            <ul className="social-icons">
              <li>
                <a className="twitter" href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="facebook" href="https://www.facebook.com/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://linkedin.com/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="pinterest" href="https://www.pinterest.com/">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
