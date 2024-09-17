import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { connect, useDispatch } from "react-redux";

import CustomField from "../../../assets/commonElements/customField";
import CustomText from "../../../assets/commonElements/text";
import DateTimePicker from "../../../assets/dateUtils/dateTimePicker";
import AddBtn from "../components/addBtn";
import CustomHeader from "../components/customHeader";
import {
  addCompany,
  updateCompany,
} from "../redux/reducers/companyDataReducer";

const CompanyDetailsForm = ({ route, location, navigation }) => {
  const dispatch = useDispatch();

  const { edit, company } = route.params;

  const data = [
    {
      label: "Company Name",
      fieldname: "companyName",
      placeholder: "Enter Company Name",
      required: true,
    },
    {
      label: "Email",
      fieldname: "email",
      placeholder: "Enter Email",
    },
    {
      label: "Industry Type",
      fieldname: "industryType",
      placeholder: "Enter Industry Type",
    },
    {
      label: "Assigned To",
      fieldname: "assignedTo",
      placeholder: "Enter Assigned To",
    },
    {
      label: "Website",
      fieldname: "website",
      placeholder: "Enter Website",
    },
    {
      label: "Address Line",
      fieldname: "address",
      placeholder: "Enter Address",
      location: true,
    },
    {
      label: "Country",
      fieldname: "country",
      isSelect: true,
      options: countries,
      placeholder: "Select Country",
    },
    {
      label: "State",
      fieldname: "state",
      isSelect: true,
      options: states,
      placeholder: "Select State",
    },
    {
      label: "City",
      fieldname: "city",
      isSelect: true,
      options: cities,
      placeholder: "Select City",
    },
    {
      label: "PIN Code",
      fieldname: "pinCode",
      placeholder: "Enter PIN Code",
    },
    {
      label: "Company Type",
      fieldname: "companyType",
      placeholder: "Enter Company Type",
    },
    {
      label: "Last Contacted On",
      fieldname: "lastContacted",
      placeholder: "Select Last Contacted Date",
      isDate: true,
    },
  ];
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
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [formData.country]);

  useEffect(() => {
    const selectedCountry = location.find(
      (loc) => loc.country === formData.country
    );
    if (selectedCountry) {
      const selectedState = selectedCountry.states.find(
        (state) => state.state === formData.state
      );
      setCities(selectedState ? selectedState.cities : []);
    }
  }, [formData.state, formData.country]);

  const handleChange = (name, value) => {
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
        <CustomText text="Save" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
            />
          )}
          keyExtractor={(item) => item.fieldname}
          keyboardShouldPersistTaps="handled"
          style={styles.formStyle}
        />

        <View>
          <AddBtn
            onIconPress={handleIconPress}
            renderIcon={() => (
              <Ionicons name="attach" size={scale(27)} color="#fff" />
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
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  location: state.addressData.locationData,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formStyle: {
    paddingHorizontal: scale(18),
    backgroundColor: "#fff",
  },
  btnContainerStyle: {
    backgroundColor: "#fff",
    elevation: moderateScale(9),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(15),
    justifyContent: "flex-end",
  },
  btnStyle: {
    backgroundColor: "#348ceb",
    padding: scale(12),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(8),
  },
});

export default connect(mapStateToProps)(CompanyDetailsForm);
