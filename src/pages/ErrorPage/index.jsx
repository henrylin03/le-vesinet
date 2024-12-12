import { Link, useRouteError } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./errorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error.statusText || error.message);

  return (
    <>
      <Header cartProductIdsCount={0} />
      <main className={styles.errorPage}>
        <div className={styles.inner}>
          <img src={"images/error-image.jpg"} className={styles.image} />
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Sorry, we couldn't find that page
            </h1>
            <p className={styles.paragraphText}>
              Please check the page address again or{"  "}
              <Link
                to="/"
                aria-label="Go back to home page"
                className={styles.link}
              >
                return home
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
