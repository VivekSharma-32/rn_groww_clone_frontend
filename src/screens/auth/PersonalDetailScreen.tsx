import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../../styles/GlobalStyles';
import CustomButton from '../../components/global/CustomButton';
import CustomInput from '../../components/inputs/CustomInput';
import BackButton from '../../components/global/BackButton';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {navigate} from '../../utils/NavigationUtil';
import CustomDateInput from '../../components/inputs/CustomDateInput';
import CustomRadioInput from '../../components/inputs/CustomRadioInput';

interface Inputs {
  name: string;
  date_of_birth: string;
  gender: string;
}

const PersonalDetailScreen = () => {
  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    date_of_birth: '',
    gender: '',
  });

  const [errors, setErrors] = useState<{[key: string]: string | undefined}>({});
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleOnChange = (text: string, fieldName: string) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [fieldName]: text,
    }));
    // Clear the error when the user starts typing again
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: undefined,
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string | undefined} = {};

    if (!inputs.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!inputs.date_of_birth.trim()) {
      newErrors.date_of_birth = 'Date is required';
    }
    if (!inputs.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    setIsFormValid(Object.keys(newErrors).length === 0);

    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        navigate('PinScreen');
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <CustomSafeAreaView>
      <BackButton />
      <CustomText variant="h4" fontFamily={FONTS.Bold} style={styles.headText}>
        Personal Details
      </CustomText>

      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          flex: 1,
          flexDirection: 'column',
          gap: 20,
        }}>
        <CustomInput
          label="NAME (AS PER YOUR PAN CARD)"
          returnKeyType="done"
          value={inputs.name}
          error={errors?.name}
          onChangeText={text => {
            handleOnChange(text, 'name');
          }}
        />

        <CustomDateInput
          label="DATE OF BIRTH"
          error={errors?.date_of_birth}
          onDateChange={text => {
            handleOnChange(text, 'date_of_birth');
          }}
        />

        <CustomRadioInput
          label="GENDER"
          error={errors?.gender}
          options={['male', 'female', 'other']}
          onSelect={(text: string) => {
            return handleOnChange(text, 'gender');
          }}
          selected={inputs?.gender}
        />
      </ScrollView>

      <View style={GlobalStyles.bottomBtn}>
        <CustomButton
          text="NEXT"
          loading={loading}
          disabled={false}
          onPress={handleOnSubmit}
        />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  headText: {
    marginVertical: 10,
  },
});
export default PersonalDetailScreen;
