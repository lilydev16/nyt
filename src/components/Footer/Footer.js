import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <h3>&copy; 2022 The New York Times Company</h3>

        <div className="personal-container">
          <h3 className="personal-info">
            Web Development by Lauralyn Watson
            <div className="personal-links">
              <a
                href="https://github.com/lilydev16/nyt"
                className="social-link"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lauralyn-watson/"
                className="social-link"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
