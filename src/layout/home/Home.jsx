import React from "react";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faTiktok,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../home/Home.css";

function Home() {
  return (
    <section>
      <div>
        <div>
          <h2>Sayyid Umar Hasani</h2>
          <p>hello my name is sayyid umar</p>
        </div>
        <div className="hero-icons ">
          <a
            href="https://www.instagram.com/sayyid_umar_24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a
            href="https://www.tiktok.com/@gurukuhaddad?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faTiktok} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sayyid-umar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
          <a
            href="https://github.com/umar-haddad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
