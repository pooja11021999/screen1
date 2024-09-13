import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

import CustomFormField from "../../../assets/commonElements/customFormField";
import CustomText from "../../../assets/commonElements/text";
import {
  addCompany,
  updateCompany,
} from "../redux/reducers/companyDataReducer";

const CompanyDetailsForm = ({ route, location, navigation }) => {
  const dispatch = useDispatch();
  
  const { edit, company } = route.params;

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const enteredData = watch();

  useEffect(() => {
    const countryList = location.map((loc) => loc.country);
    setCountries(countryList);

    if (edit && company) {
      setValue("companyName", company.companyName);
      setValue("email", company.email);
      setValue("industryType", company.industryType);
      setValue("assignedTo", company.assignedTo);
      setValue("website", company.website);
      setValue("address", company.address);
      setValue("country", company.country);
      setValue("state", company.state);
      setValue("city", company.city);
      setValue("pinCode", company.pinCode);
      setValue("companyType", company.companyType);
      setValue("lastContacted", company.lastContacted);
    }
  }, [location, edit, company, setValue]);

  useEffect(() => {
    const selectedCountry = location.find(
      (loc) => loc.country === enteredData.country
    );

    if (selectedCountry) {
      setStates(selectedCountry.states.map((state) => state.state));
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [enteredData.country]);

  useEffect(() => {
    const selectedCountry = location.find(
      (loc) => loc.country === enteredData.country
    );
    if (selectedCountry) {
      const selectedState = selectedCountry.states.find(
        (state) => state.state === enteredData.state
      );
      setCities(selectedState ? selectedState.cities : []);
    }
  }, [enteredData.state, enteredData.country]);

  const onSubmit = (data) => {
    if (edit) {
      dispatch(updateCompany({ id: company.id, ...data }));
    } else {
      dispatch(addCompany({ id: Date.now(), ...data }));
    }
    if (edit) {
      navigation.navigate("Company", {});
    } else {
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
            { label: "Company Name", fieldname: "companyName", required: true },
            {
              label: "Email",
              fieldname: "email",
              pattern: /^[^@]+@[^@]+\.[^@]+$/,
              patternMsg: "Invalid email address",
              required: true,
            },
            { label: "Industry Type", fieldname: "industryType" },
            { label: "Assigned To", fieldname: "assignedTo", required: true },
            { label: "Website", fieldname: "website" },
            { label: "Address", fieldname: "address", required: true },
            {
              label: "Country",
              fieldname: "country",
              isSelect: true,
              options: countries,
              required: true,
            },
            {
              label: "State",
              fieldname: "state",
              isSelect: true,
              options: states,
              required: true,
            },
            {
              label: "City",
              fieldname: "city",
              isSelect: true,
              options: cities,
              required: true,
            },
            { label: "PIN Code", fieldname: "pinCode" },
            { label: "Company Type", fieldname: "companyType" },
            { label: "Last Contacted On", fieldname: "lastContacted" },
          ].map(
            ({
              label,
              fieldname,
              required,
              pattern,
              patternMsg,
              isSelect,
              options,
            }) => (
              <CustomFormField
                key={fieldname}
                label={label}
                placeholder={`Enter ${label}`}
                fieldname={fieldname}
                control={control}
                errors={errors}
                requiredMsg={required ? `${label} is required` : ""}
                pattern={pattern}
                patternMsg={patternMsg}
                isSelect={isSelect}
                options={options}
                selectedValue={edit ? company[fieldname] : ""}
              />
            )
          )}
        </ScrollView>

        <View style={styles.btnContainerStyle}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.btnStyle}
          >
            <CustomText text={`${edit ? "Edit" : "Add"} Company`} />
          </TouchableOpacity>
        </View>
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
