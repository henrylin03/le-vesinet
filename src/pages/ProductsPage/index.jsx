import Header from "../../components/Header";
import ProductPreview from "../../components/ProductPreview";
import Footer from "../../components/Footer";
import productsData from "../../data/index.json";
import styles from "./productsPage.module.css";

const ProductsPage = () => (
  <>
    <Header />

    <main>
      <section className={styles.top}>
        <h1 className={styles.heading}>Product range</h1>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Skincare for the modern human touch
          </h2>
          <p className={styles.paragraphText}>
            Moisturising is a crucial part of any skincare regimen, aiding in
            replenishing the skin's protective hydrolipidic barrier and avoiding
            moisture loss. Our moisturisers boast a composition of key potent
            ingredients to sustain hydration, catering to all general skin
            types.
          </p>
        </div>
      </section>
      <section className={styles.products}>
        {productsData.products.map((product) => (
          <ProductPreview productObject={product} key={product.id} />
        ))}
      </section>
    </main>

    <Footer />
  </>
);

export default ProductsPage;
