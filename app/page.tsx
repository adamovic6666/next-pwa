"use client";
import { getProducts } from "@/services";
import { Product } from "@/types";
import { use, useEffect, useState } from "react";
import Card from "./components/Card";
import styles from "./page.module.css";
export default function Home() {
  const products = use(getProducts());
  const [showButton, setShowButton] = useState(true);
  const [prompt, setPrompt] = useState<any>();
  useEffect(() => {
    const handle_storePrompt = (e: any) => {
      e.preventDefault();
      if (showButton) setPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", (e) =>
      handle_storePrompt(e)
    );

    return () => {
      window.removeEventListener("beforeinstallprompt", (e) =>
        handle_storePrompt(e)
      );
    };
  }, [showButton]);

  const handle_prompt = () => {
    setShowButton(false);
    prompt.prompt();
    setPrompt(null);
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
        style={{ display: showButton ? "block" : "none" }}
        onClick={handle_prompt}
      >
        <small>Click to Install</small>
      </button>
    </main>
  );
}
