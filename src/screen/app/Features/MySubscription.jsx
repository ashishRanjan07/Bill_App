import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../utils/AppColor';
import InternalHeader from '../../../components/InternalHeader';
import CustomSearch from '../../../components/CustomSearch';
import {
  moderateScale,
} from '../../../utils/ResponsiveSize';
import Data from '../../../assets/json/MySubscription.json';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SubscriptionCard from '../../../components/SubscriptionCard';

const MySubscription = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('My Subscription Details',{item:item})}>
        <SubscriptionCard item={item} option={"shipping"}/>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: Colors.background}} />
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={'dark-content'}
      />
      <InternalHeader title={'My Subscriptions'} />
      <View style={styles.searchHolder}>
        <CustomSearch
          value={searchText}
          onChange={text => setSearchText(text)}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MySubscription;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchHolder: {
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    // marginBottom: moderateScale(10),
  }
});
