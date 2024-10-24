import AsyncStorage from "@react-native-async-storage/async-storage";

export const validateEmail = email => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    return false;
  }
  // Additional check to avoid consecutive dots in domain part
  const domainPart = email.split('@')[1];
  if (domainPart.includes('..')) {
    return false;
  }
  return true;
};

export const fetchUserData = async(data)=>{
  const response = await AsyncStorage.getItem(data);
  const result = JSON.parse(response);
  return result;
}