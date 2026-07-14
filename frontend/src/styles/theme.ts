/**
 * ==========================================================
 * MuiniHub Theme
 * Organizações Muini
 * ==========================================================
 * Todas as cores, tipografia e medidas oficiais do sistema.
 */

export const Theme = {
  colors: {
    primary: "#1F4E79",      // Azul Muini
    secondary: "#6B4F2A",    // Castanho Muini
    accent: "#7A7A7A",       // Cinza institucional

    white: "#FFFFFF",
    black: "#000000",

    background: "#F8F9FA",

    success: "#28A745",
    warning: "#FFC107",
    danger: "#DC3545",
    info: "#17A2B8",
  },

  typography: {
    fontFamily: "'Segoe UI', Arial, sans-serif",

    h1: "36px",
    h2: "30px",
    h3: "24px",

    body: "16px",
    small: "14px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    round: "9999px",
  },

  shadow: {
    card: "0 4px 10px rgba(0,0,0,0.08)",
    modal: "0 8px 24px rgba(0,0,0,0.15)",
  },
};

export default Theme;