export default function Privacy() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, lineHeight: 1.6 }}>
      <h1>Privacy Policy</h1>
      <p>
        Triple7 Studios respects your privacy. Our apps and games may collect and process data as required to
        provide functionality, improve stability, and comply with legal obligations.
      </p>
      <p>
        For privacy questions, contact{" "}
        <a href="mailto:contact@triple7.se">contact@triple7.se</a>.
      </p>
      <p style={{ opacity: 0.8, fontSize: 14 }}>
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>
    </main>
  );
}