const categories = [
  {
    id: "plants",
    name: "Plantas",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "seeds",
    name: "Semillas",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "flowers",
    name: "Flores",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "sprayers",
    name: "Pulverizadores",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "pots",
    name: "Mazetas",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "fertilizers",
    name: "Fertilizantes",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 mejores plantas que prosperan en tu dormitorio",
    description:
      "Las habitaciones merecen estar decoradas con una exuberante vegetación, como cualquier otra habitación de la casa, pero puede ser complicado encontrar una planta que prospere aquí. La poca luz, la alta humedad y las temperaturas cálidas significan que solo ciertas plantas de interior florecerán.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // Solo enseñando 3 imagenes 6+ para el resto
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // Imagenes
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "Usuairo",
  location: "Europa",
  email: "email@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
