/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Platform, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import { useSelector } from 'react-redux';

const Profile = props => {

  const activeUserId = 1;
  const users = useSelector(state => state.auth.users);
  const user = users[activeUserId - 1];

  useEffect(() => {
    props.navigation.setParams({
      user
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <Text dark>{user.username}</Text>
          <Icon
            name='ios-arrow-down'
            style={styles.headerProfileIcon}
            size={25} />
        </View>
        <Icon
          name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          size={25}
          onPress={() => {
            props.navigation.toggleDrawer({
              side: 'right',
              animated: true,
              to: 'closed',
            });
          }} />
      </View>

      <View style={styles.body}>
        <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View style={styles.infoProfile}>
            <View style={styles.infoProfileIconContainer}>
              <Image style={styles.infoProfilePhoto} source={user.profilePhoto ? user.profilePhoto : require('../../../assets/images/server/defaultProfile.png')} />
            </View>
            <Text dark style={styles.infoProfileText}>{user.username}</Text>
          </View>
          <View style={styles.infoCounts}>
            <View style={styles.infoPostsContainer}>
              <Text center dark>{user.posts.length}</Text>
              <Text center>Posts</Text>
            </View>
            <View style={styles.infoFollowersContainer}>
              <Text center dark>{user.followers.length}</Text>
              <Text center>Followers</Text>
            </View>
            <View style={styles.infoFollowingContainer}>
              <Text center dark>{user.following.length}</Text>
              <Text center>Following</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.editProfileContainer}>
          <Text dark>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.posts}>
            <Icon
              style={{...styles.menuItem, ...styles.menuItemActive}}
              name={Platform.OS === 'android' ? 'md-grid' : 'ios-grid'}
              size={30} />
            <Icon
              style={{...styles.menuItem, ...styles.menuItemActive}}
              name={Platform.OS === 'android' ? 'md-bookmarks' : 'ios-bookmarks'}
              size={30} />
        </View>
        </View>
        {
          user.posts.length > 0
          ?
          <FlatList
            data={user.posts}
            keyExtractor={item => item}
            numColumns={3}
            columnWrapperStyle={{justifyContent:'space-between'}}
            renderItem={(itemData) => (
              <View style={styles.yourPostsContainer}>
                <View>
                  <Image style={styles.yourPostsPost} source={itemData.item} />
                </View>
              </View>
            )} />
          :
          <View style={styles.yourEmptyPostsContainer}>
            <Text center size={30}>Profile</Text>
            <Text center light>When you share photos and videos, they'll appear on your profile.</Text>
            <Text center color="royalblue">Share your first photo or video</Text>
          </View>
        }
      </View>
    </View>
  )
}

Profile.navigationOptions = navData => {

  const user = navData.navigation.getParam('user');

  return {
    drawerLabel: () => (
      <View style={styles.drawer}>
        <View style={styles.drawerTop}>
          <Text dark style={styles.drawerUsername}>mucahidyazar</Text>
          <View style={styles.drawerIconContainer}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-archive" : "ios-archive"} />
            <Text>Archive</Text>
          </View>
          <View style={styles.drawerIconContainer}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-save" : "ios-save"} />
            <Text>Saved</Text>
          </View>
          <View style={styles.drawerIconContainer}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-people" : "ios-people"} />
            <Text>Close Friends</Text>
          </View>
          <View style={styles.drawerIconContainer}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-paw" : "ios-paw"} />
            <Text>Discover People</Text>
          </View>
        </View>
        <View style={styles.drawerBottom}>
          <View style={styles.drawerIconContainer}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-settings" : "ios-settings"} />
            <Text>Settings</Text>
          </View>
        </View>
      </View>
    ),
  }
}

const styles = StyleSheet.create({
  //HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    height: '8%',
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerProfileIcon: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },


  body: {
    height: '92%',
  },
  infoContainer: {
    height: '40%',
    justifyContent: 'space-between',
  },
  //INFO
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  infoProfile: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoProfileIconContainer: {
    width: Dimensions.get('window').width / 100 * 20,
    height: Dimensions.get('window').width / 100 * 20,
    borderRadius: Dimensions.get('window').width / 100 * 10,
    overflow: 'hidden',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoProfilePhoto: {
    width: '100%',
    height: '100%',
  },
  infoProfileText: {
    paddingVertical: '5%',
  },
  infoCounts: {
    width: '70%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },


  //EDIT PROFILE BUTTON
  editProfileContainer: {
    alignItems: 'center',
    paddingVertical: '4%',
  },



  //POSTS HEADER
  posts: {
    flexDirection: 'row',
  },
  menuItem: {
    width: '50%',
    alignItems: 'center',
    padding: '3%',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.3)',
  },
  menuItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    color: 'rgba(0,0,0,1)',
  },
  yourPostsIcon: {

  },
  yourEmptyPostsContainer: {
    height: '25%',
    justifyContent: 'space-evenly',

  },
  yourPostsContainer: {
  },
  yourPostsPost: {
    width: Dimensions.get('window').width / 3.02,
    height: Dimensions.get('window').width / 3.02,
    marginBottom: Dimensions.get('window').width / 100 * 0.4,
  },

  drawer: {
    padding: '5%',
    height: Dimensions.get('window').height - Dimensions.get('window').width / 100 * 8,
    justifyContent: 'space-between',
  },
  drawerUsername: {
    paddingVertical: '5%',
  },
  drawerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
  },
  drawerIcon: {
    fontSize: 30,
    marginRight: '5%',
  }
});

export default Profile;