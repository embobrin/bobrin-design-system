/**
 * Brand tokens synced from artifacts/portfolio (index.css).
 * Dark-first portfolio, identical light/dark since the web app
 * is also exclusively dark.
 */

const palette = {
  background: '#0a0a0a',
  foreground: '#f0ebe3',
  card: '#111111',
  cardForeground: '#f0ebe3',
  border: '#2a2a2a',
  input: '#2a2a2a',
  primary: '#7eb4d4',
  primaryForeground: '#0a0a0a',
  secondary: '#2a2a2a',
  secondaryForeground: '#f0ebe3',
  muted: '#111111',
  mutedForeground: '#8a8070',
  accent: '#7eb4d4',
  accentForeground: '#0a0a0a',
  destructive: '#ef4444',
  destructiveForeground: '#f0ebe3',
  // Legacy aliases
  text: '#f0ebe3',
  tint: '#7eb4d4',
  radius: 4,
};

const colors = {
  light: palette,
  dark: palette,
  radius: 4,
};

export default colors;
