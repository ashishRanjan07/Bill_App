import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomModal from '../components/BottomModal';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedInRedux = useSelector(state => state.isLoggedIn);
  const isSaveData = useSelector(state => state.saveData);
  // console.log(isLoggedInRedux, 'Line 12');
  useEffect(() => {
   
    const fetchLoggedInData = async () => {
      setLoading(true);
      const response = await AsyncStorage.getItem('isLoggedIn');
      if(response !=null){
        setIsLoggedIn(response);
        console.log(response,"line 19")
        setLoading(false);
      }
      if(response==null){
        setLoading(false);
        setIsLoggedIn(response);
      }
    };
    fetchLoggedInData();
  }, [isSaveData, isLoggedIn, isLoggedInRedux]);
  return (
    <>
      {isLoggedIn === null && !loading ? <AuthNavigation /> : <AppNavigation />}
    </>
  );
};

export default Routes;
