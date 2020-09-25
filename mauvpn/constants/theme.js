import { Utils } from "expo-ui-kit";

const theme = {
  COLORS: {
    // base de colores
    primary: "#0094FC",

    // variacion de colores
    gray: "#535453",
  },
  SIZES: {
    // tamaños globales
    base: 8,
    font: 16,
    radius: 30,
    padding: 26,

    // fuentes
    h1: 34,
    h2: 24,
    h3: 20,
    title: 16,
    subtitle: 13,
    caption: 12,
    small: 10
  }
};

export default Utils.mergeTheme(Utils.theme, theme);
