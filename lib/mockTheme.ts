// Gedeelde licht/donker-tokens voor de mock-UI-componenten, zodat alle
// mocks dezelfde theme-prop op dezelfde manier vertalen.
export type MockTheme = "light" | "dark";

export function mockTokens(theme: MockTheme) {
  const light = theme === "light";
  return {
    light,
    surface: light ? "bg-white" : "bg-dark",
    tile: light ? "bg-canvas border-line" : "bg-white/5 border-white/10",
    line: light ? "#E6E6EF" : "rgba(255,255,255,0.12)",
    text: light ? "text-ink" : "text-white",
    muted: light ? "text-muted" : "text-white/50",
    idle: light ? "bg-canvas border-line text-muted" : "bg-white/5 border-white/10 text-white/50",
  };
}
