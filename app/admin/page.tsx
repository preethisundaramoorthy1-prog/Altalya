"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    import("tinacms").then(() => {
      console.log("TinaCMS Loaded");
    });
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="/admin/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}