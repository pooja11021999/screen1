import { NativeBaseProvider } from "native-base";
import React from "react";
import { Provider } from "react-redux";

import StackNavigation from "./app/src/navigation";
import { store } from "./app/src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StackNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
