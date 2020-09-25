import { createAppContainer, createSwitchNavigator } from "react-navigation";

// importar las pantallas
import Welcome from "../screens/Welcome";
import VPN from "../screens/VPN";

const Screens = createSwitchNavigator({
  Welcome,
  VPN
});

export default createAppContainer(Screens);
