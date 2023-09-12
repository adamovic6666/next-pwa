"use client";
import { useEffect, useState } from "react";

const PwaPromptBtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
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
    <button
      id="installButton"
      onClick={handleInstallClick}
      style={{
        display: deferredPrompt ? "block" : "none",
        position: "absolute",
        top: "48px",
        right: "48px",
        cursor: "pointer",
        padding: "8px 16px",
        border: "1px solid white",
        background: "transparent",
        color: "black",
        fontWeight: "bold",
      }}
    >
      Install
    </button>
  );
};

export default PwaPromptBtn;
