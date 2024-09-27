import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";

import {
  AddButton,
  CustomField,
  CustomHeader,
  DateTimePicker,
} from "../../components/index.js";
import { DataContext } from "../../context/DataContextProvider.js";
import { Colors, CustomText, globalStyles } from "../../helpers/index.js";

const CompanyDetailsForm = ({ route, navigation }) => {
  const { data, setData } = useContext(DataContext);

  const { edit, company } = route?.params;

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    industryType: "",
    assignedTo: "",
    website: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    companyType: "",
    lastContacted: "",
  });

  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  useEffect(() => {
    const countryList = data.LocationData.map((loc) => loc.country);
    setCountries(countryList);
    if (edit && company) {
      setFormData({ ...company });
    }
  }, [data.LocationData, edit, company]);

  useEffect(() => {
    const selectedCountry = data.LocationData.find(
      (loc) => loc.country === formData.country
    );

    if (selectedCountry) {
      setStates(selectedCountry.states.map((state) => state.state));

      const selectedState = selectedCountry.states.find(
        (state) => state.state === formData.state
      );

      setCities(selectedState ? selectedState.cities : []);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [formData.country, formData.state, data.LocationData]);

  const handleChange = (name, value) => {
    if (name === "state") {
      setFormData((prev) => ({ ...prev, city: "" }));
    } else if (name === "country") {
      setFormData((prev) => ({ ...prev, city: "", state: "" }));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setLastContactedDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      ["lastContacted"]: moment(date).format("DD-MM-YYYY").toString(),
    }));
    setDatePickerVisible(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.email || !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (!validateForm()) return;

    if (edit) {
      setData(
        data.InitialCompanyData.map((company) =>
          company.id === formData.id ? { ...company, ...formData } : company
        )
      );
      navigation.navigate("CompanyList", {});
    } else {
      setData((prev) => ({
        ...prev,
        InitialCompanyData: [
          ...prev.InitialCompanyData,
          { id: Date.now(), ...formData },
        ],
      }));
      navigation.goBack();
    }
  };

  const handleIconPress = () => {
    return <View></View>;
  };

  const renderSaveBtn = () => {
    return (
      <TouchableOpacity onPress={onSubmit}>
        <CustomText
          text="Save"
          externalStyle={globalStyles.textStyle({
            txtColor: Colors.White,
            size: 14,
          })}
        />
      </TouchableOpacity>
    );
  };

  const getOptions = (item) => {
    if (item.fieldname == "country") {
      return countries;
    } else if (item.fieldname == "state") {
      return states;
    } else if (item.fieldname == "city") {
      return cities;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "default"}
      style={styles.container}
    >
      <CustomHeader
        navigation={navigation}
        customRightContent={renderSaveBtn}
        customLeftOnPress={() => navigation.goBack()}
      />

      <FlatList
        data={data.FieldData}
        renderItem={({ item }) => (
          <CustomField
            item={item}
            formData={formData}
            setDatePickerVisible={setDatePickerVisible}
            handleChange={handleChange}
            errors={errors}
            options={getOptions(item)}
          />
        )}
        keyExtractor={(item) => item.fieldname}
        style={styles.formStyle}
        contentContainerStyle={styles.listContainer}
      />

      <View>
        <AddButton
          onIconPress={handleIconPress}
          renderIcon={() => (
            <Ionicons name="attach" size={scale(25)} color={Colors.White} />
          )}
        />
      </View>

      <DateTimePicker
        isDatePickerVisible={isDatePickerVisible}
        handleConfirm={setLastContactedDate}
        handleCancel={() => setDatePickerVisible(false)}
        maximumDate={null}
        minimumDate={new Date()}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  formStyle: {
    paddingHorizontal: scale(18),
    backgroundColor: Colors.White,
  },
  listContainer: {
    paddingVertical: scale(10),
    backgroundColor: Colors.White,
  },
});

export default CompanyDetailsForm;
