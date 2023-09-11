import { getProducts } from "@/services";
import { Product } from "@/types";
import { use, useEffect } from "react";
import Card from "./components/Card";
import styles from "./page.module.css";
export default function Home() {
  const products = use(getProducts());

  useEffect(() => {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("e", e);
      deferredPrompt = e;
    });
  }, []);
  return (
    <main className={styles.main}>
      <h1>Pwa demo</h1>
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
