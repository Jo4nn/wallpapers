import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import {
    path,
    isNill,
} from 'ramda';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileImage from '../components/ProfileImage';
import Colors from '../constants/Colors';

// https://github.com/itzpradip/react-navigation-v5-mix/blob/master/App.js
// https://stackoverflow.com/questions/62275750/how-to-pass-custom-props-to-drawer-screens-in-react-navigation-5
// https://callstack.github.io/react-native-paper/2.0/drawer-section.html
const DrawerContent = props => {
    const paperTheme = useTheme();
    const dispatch = useDispatch();
    return(
        <View style={styles.root}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.profileContainer}>
                        <ProfileImage {...props} />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.fullName}>QHD Wallpaper</Title>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={paperTheme.dark}/>
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: Colors.grey5,
    },
    drawerContent: {
      flex: 1,
    },
    profileContainer: {
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: Colors.grey3,
      padding: 10,
    },
    fullName: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: 'white',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      paddingLeft: 20,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        borderTopColor: '#f4f4f4',
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default DrawerContent;
