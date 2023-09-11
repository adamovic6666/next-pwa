"use client";
import { getProducts } from "@/services";
import { Product } from "@/types";
import { use, useEffect } from "react";
import Card from "./components/Card";
import styles from "./page.module.css";

export default function Home() {
  const products = use(getProducts());

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("../service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <main className={styles.main}>
      <h1>PRODUCTS</h1>
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
