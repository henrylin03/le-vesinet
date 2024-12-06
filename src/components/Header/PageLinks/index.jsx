import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger } from "@mantine/core";
import PageLink from "./PageLink";
import styles from "../header.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <PageLink text="Home" />
    <PageLink text="Products" path="/products" />
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

export default PageLinks;
