import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { connect, useDispatch } from "react-redux";

import LabelInput from "../../../assets/commonElements/labelInput";
import CustomText from "../../../assets/commonElements/text";
import DateTimePicker from "../../../assets/dateUtils/dateTimePicker";
import {
  addCompany,
  updateCompany,
} from "../redux/reducers/companyDataReducer";

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
    if (!formData.pinCode) newErrors.city = "PIN Code is required";
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.formStyle}
          keyboardShouldPersistTaps="handled"
        >
          {[
            {
              label: "Company Name",
              fieldname: "companyName",
              placeholder: "Enter Company Name",
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
              required: true,
              placeholder: "Enter Assigned To",
            },
            {
              label: "Website",
              fieldname: "website",
              placeholder: "Enter Website",
            },
            {
              label: "Address",
              fieldname: "address",
              placeholder: "Enter Address",
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
          ].map(
            ({ label, fieldname, isSelect, options, placeholder, isDate }) => (
              <LabelInput
                label={label}
                fieldname={fieldname}
                isSelect={isSelect}
                options={options}
                placeholder={placeholder}
                formData={formData}
                handleChange={handleChange}
                errors={errors}
                key={fieldname}
                isDate={isDate}
                setDatePickerVisible={setDatePickerVisible}
              />
            )
          )}
        </ScrollView>

        <View style={styles.btnContainerStyle}>
          <TouchableOpacity onPress={onSubmit} style={styles.btnStyle}>
            <CustomText text={`${edit ? "Edit" : "Add"} Company`} />
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isDatePickerVisible={isDatePickerVisible}
          handleConfirm={setLastContactedDate}
          handleCancel={() => setDatePickerVisible(false)}
          maximumDate={null}
          minimumDate={new Date()}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    marginVertical: verticalScale(10),
    paddingHorizontal: scale(18),
    backgroundColor: "#fff",
    flexGrow: 1,
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
