export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    grayBG: "#e5e5e5",
    // neutral
    neutral: (opacity: any) => `rgba(10, 10, 10, ${opacity})`,
  },
  fontWeights: {
    light: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    verybold: 800,
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xl2: 20,
    xl3: 22,
  },
  purples: {
    default: "#5865f2",
  },
  light: {
    bgLight: "#f3f3f4",
    bgNormal: "#fff",
    bgLesserDark: "#f4f4f6",
    bgLessDark: "#fefeff",
    bgDark: "#eaecef",
    grayLight: "#9ea1a7",
    grayMedium: "#4e5058",
  },
  dark: {
    bgLight: "#2c2c34",
    bgNormal: "#1e2124",
    bgLesserDark: "#24272f",
    bgLessDark: "#1d1d22",
    bgDark: "#121218",
    grayLight: "#7b7a82",
    grayMedium: "#9596a2",
  },
};
