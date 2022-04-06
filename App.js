import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import { Provider } from "react-redux";

import store from "./redux/index";
import Navigator from "./Navigator";
import AppLoading from "./components/AppLoading";

let customFonts = {
  "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
  "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-MediumItalic": require("./assets/fonts/Montserrat-MediumItalic.ttf"),
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  "Montserrat-SemiBoldItalic": require("./assets/fonts/Montserrat-SemiBoldItalic.ttf"),
};

export default function App() {
  const [state, setState] = useState({
    fontsLoaded: false,
  });

  const loadFontsAsync = async function () {
    await loadAsync(customFonts);
    setState({ ...state, fontsLoaded: true });
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!state.fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
