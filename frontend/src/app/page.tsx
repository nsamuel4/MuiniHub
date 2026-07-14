export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        color: "#333333",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#1F4E79",
          fontSize: "3rem",
          marginBottom: "10px",
        }}
      >
        MuiniHub
      </h1>

      <h2
        style={{
          color: "#6B4F2A",
          fontWeight: 400,
          marginBottom: "30px",
        }}
      >
        Sistema Integrado de Gestão das Organizações Muini
      </h2>

      <p
        style={{
          maxWidth: "700px",
          lineHeight: 1.8,
          fontSize: "18px",
        }}
      >
        Bem-vindo ao MuiniHub.
        <br />
        Esta plataforma irá integrar os módulos Académico, Financeiro,
        Recursos Humanos, Documentos, Património e Administração das
        Organizações Muini.
      </p>

      <p
        style={{
          marginTop: "40px",
          color: "#888",
        }}
      >
        Versão 0.1.0 — Em desenvolvimento
      </p>
    </main>
  );
}