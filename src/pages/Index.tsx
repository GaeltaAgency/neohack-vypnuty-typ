import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("/neohack.html");
  }, []);
  return (
    <div style={{ padding: 24, fontFamily: "system-ui", background: "#000", color: "#fff", minHeight: "100vh" }}>
      Načítavam dokument…{" "}
      <a href="/neohack.html" style={{ color: "#3b82f6" }}>kliknite sem</a>.
    </div>
  );
};

export default Index;
