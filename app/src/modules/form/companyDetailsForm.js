import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";
import { connect, useDispatch } from "react-redux";

import { Colors } from "../../../../assets/colors.js";
import CustomField from "../../../../assets/commonElements/customField";
import CustomText from "../../../../assets/commonElements/text";
import Data from "../../../../assets/constantItems";
import DateTimePicker from "../../../../assets/dateUtils/dateTimePicker";
import { globalStyles } from "../../../../assets/globalStyle/index.js";
import AddBtn from "../../components/addBtn";
import CustomHeader from "../../components/customHeader";
import {
  addCompany,
  updateCompany,
} from "../../redux/reducers/companyDataReducer";

const CompanyDetailsForm = ({ route, location, navigation }) => {
  const dispatch = useDispatch();

  const { edit, company } = route.params;

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

  const data = Data.FieldData;

  useEffect(() => {
    const countryList = location.map((loc) => loc.country);
    setCountries(countryList);
    if (edit && company) {
      setFormData({ ...company });
    }
  }, [location, edit, company]);

  useEffect(() => {
    const selectedCountry = location.find(
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
  }, [formData.country, formData.state, location]);

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
    if (!formData.assignedTo) newErrors.assignedTo = "Assigned To is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.pinCode) newErrors.pinCode = "PIN Code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (!validateForm()) return;

    if (edit) {
      dispatch(updateCompany({ id: company.id, ...formData }));
      navigation.navigate("Company", {});
    } else {
      dispatch(addCompany({ id: Date.now(), ...formData }));
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
          externalStyle={globalStyles.textStyle({ txtColor: Colors.White })}
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
        data={data}
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
        <AddBtn
          onIconPress={handleIconPress}
          renderIcon={() => (
            <Ionicons name="attach" size={scale(27)} color={Colors.White} />
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

const mapStateToProps = (state) => ({
  location: state.addressData.locationData,
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  formStyle: {
    paddingHorizontal: scale(18),
    backgroundColor: Colors.White,
  },
  listContainer: {
    paddingVertical: scale(10),
  },
});

export default connect(mapStateToProps)(CompanyDetailsForm);
