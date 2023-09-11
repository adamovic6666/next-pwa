"use client";
import { getProducts } from "@/services";
import { Product } from "@/types";
import { use, useEffect } from "react";
import Card from "./components/Card";
import styles from "./page.module.css";
export default function Home() {
  const products = use(getProducts());

  useEffect(() => {
    let deferredPrompt: any;

    function showInstallButton() {
      console.log("ulazi vode");
      const installButton = document.getElementById("install-button")!;
      installButton.style.display = "block";

      installButton.addEventListener("click", () => {
        // Show the installation prompt
        deferredPrompt.prompt();

        // Wait for the user to make a choice
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the installation prompt");
          } else {
            console.log("User dismissed the installation prompt");
          }

          // Reset the deferredPrompt variable
          deferredPrompt = null;

          // Hide the install button
          installButton.style.display = "none";
        });
      });
    }

    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the browser's default prompt from showing up
      event.preventDefault();

      // Store the event for later use
      deferredPrompt = event;

      // Show your custom "Install" button or other UI element
      showInstallButton();
    });
  }, []);

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
      <button id="install-button" style={{ display: "none" }}>
        Install App
      </button>
    </main>
  );
}
