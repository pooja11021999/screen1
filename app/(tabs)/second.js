import React from "react";
import { Text, View } from "react-native";
import CustomText from "../../assets/commonElements/text";

const Second = () => {
  return (
    <View>
      <CustomText
        text={
          " firstRoute - return to the first screen defined in the navigator default) initialRoute - return to initial screen passed in initialRouteName prop, if not passed, defaults to the first screen order - return to screen defined before the focused screen history - return to last visited screen in the navigator; if the same screen is visited multiple times, the older entries are dropped from the history none - do not handle back button"
        }
        externalStyle={{ color: "black" }}
      />
    </View>
  );
};

export default Second;
