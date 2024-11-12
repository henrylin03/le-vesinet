import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import PageLink from "./PageLink";
import brandingImage from "../../assets/images/branding.svg";
import styles from "./header.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <PageLink text="Home" />
    <PageLink text="Products" path="/products" />
    <PageLink text="About Us" path="/about-us" />
  </nav>
);

const PageLinks = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Burger
        className={styles.burger}
        opened={drawerOpened}
        onClick={toggleDrawer}
        aria-label="Toggle navigation to other pages"
      />

      <div className={styles.desktopNavContainer}>
        <Nav />
      </div>

      <Drawer
        className={styles.drawer}
        opened={drawerOpened}
        onClose={closeDrawer}
        size="68%"
      >
        <Nav />
      </Drawer>
    </>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Go to home page" className={styles.branding}>
        <img
          className={styles.brandingImage}
          src={brandingImage}
          alt="Le Vesinet branding"
        />
      </Link>

      <PageLinks />

      <NavLink to="/cart" className={styles.cartLink}>
        <button type="button" className={styles.cartButton}>
          <ShoppingBag />
        </button>
        <span className="visually-hidden">Go to shopping bag</span>
      </NavLink>
    </header>
  );
};

export default Header;
