import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconArrowRight,
} from "@tabler/icons-react";
import { toTitleCase } from "../../helpers";
import logoImage from "../../assets/images/branding/branding-white-bg.svg";
import styles from "./footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const SOCIALS_DATA = [
    {
      name: "instagram",
      icon: <IconBrandInstagram color="white" size={28} />,
      url: "https://www.instagram.com/levesinet.official/",
    },
    {
      name: "tiktok",
      icon: <IconBrandTiktok color="white" />,
      url: "https://www.tiktok.com/@levesinet_official",
    },
    {
      name: "youTube",
      icon: <IconBrandYoutube color="white" />,
      url: "https://www.youtube.com/channel/UCIhhohwwYudLqwfcOQl95xQ",
    },
  ];

  const socials = SOCIALS_DATA.map((s) => (
    <li key={s.name}>
      <a
        href={s.url}
        target="_blank"
        aria-label={`Go to our ${toTitleCase(s.name)} page`}
      >
        {s.icon}
      </a>
    </li>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.branding}>
          <Link to="/" aria-label="Go to home page">
            <img src={logoImage} />
          </Link>
        </section>

        <section className={styles.pageLinksSection}>
          <h2 className={styles.heading}>Browse</h2>
          <ul className={styles.pageLinksList}>
            <li>
              <Link to="/" aria-label="Go to home page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" aria-label="Go to products page">
                Products
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.subscribe}>
          <div>
            <h2 className={styles.heading}>
              Subscribe to receive special offers
            </h2>
            <p className={styles.paragraphText}>
              ...and you will also be the first to know about upcoming launches,
              new products, events and much more!
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className={styles.emailInput}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" className={styles.button}>
              <IconArrowRight color="white" size={36} stroke={1} />
            </button>
          </form>
          <ul className={styles.socials}>{socials}</ul>
        </section>

        <small className={styles.copyright}>© 2024 LE VESINET.</small>
      </div>
    </footer>
  );
};

export default Footer;
