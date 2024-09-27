import React from "react";
import { View } from "react-native";

import { CustomText, globalStyles } from "../../../../helpers/index";

const Third = () => {
  return (
    <View style={globalStyles.containerStyle()}>
      <CustomText
        text={
          "firstRoute - return to the first screen defined in the navigator (default) initialRoute - return to initial screen passed in initialRouteName prop, if not passed, defaults to the first screen order - return to screen defined before the focused screen history - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history none - do not handle back button"
        }
      />
    </View>
  );
};

export default Third;
