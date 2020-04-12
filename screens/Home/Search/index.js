/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import { useSelector } from 'react-redux';

const Search = props => {

  const users = useSelector(state => state.auth.users);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={{width: '8%'}} name="search" size={25} />
        <TextInput style={{width: '84%', fontSize: 20}} placeholder="Search" />
        <Icon style={{width: '8%'}} name="user-plus" size={25} />
      </View>
      <View style={styles.posts}>
        {
          users.map((user, index) => (
            user.album.map((eachImage, eachIndex) => (
              <TouchableOpacity
                key={eachIndex}
                activeOpacity={0.7}
                style={{
                  width: Dimensions.get('window').width / 3 - 2,
                  height: Dimensions.get('window').width / 3 - 2,
                  margin: 1,
                }}>
                <Image
                  source={eachImage}
                  style={{
                    width: '100%',
                    height: '100%',
                  }} />
              </TouchableOpacity>
            ))
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default Search;