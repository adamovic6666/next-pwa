"use client";
import { getProducts } from "@/services";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import styles from "./page.module.css";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  useEffect(() => {
    const getProductsHandler = async () => {
      setProducts(await getProducts());
    };

    getProductsHandler();
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt?.prompt();
      deferredPrompt?.userChoice?.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

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
      <button
        id="installButton"
        onClick={handleInstallClick}
        style={{ display: deferredPrompt ? "block" : "none" }}
      >
        Install
      </button>
    </main>
  );
}
