export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        flexDirection: "column",
        gap: "1rem"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Hello Air Ride
      </h1>
      <p>ここからエアライドのレート戦＆タイムアタックサイトを作っていきます。</p>
    </main>
  );
}
