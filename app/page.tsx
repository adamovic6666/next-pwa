import { getProducts } from "@/services";
import { Product } from "@/types";
import Card from "./components/Card";
import styles from "./page.module.css";
export default async function Home() {
  const products = await getProducts();
  return (
    <main className={styles.main}>
      <h1>PWA demo</h1>
      <ul className={styles.cards}>
        {products?.map((product: Product) => (
          <li key={product.id}>
            <Card {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
