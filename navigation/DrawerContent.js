import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import {
    path,
    isNill,
} from 'ramda';
import Share from "react-native-share";
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

const shareLink = () => {
    const url = "https://danksloth.com/apps/memeswipe";

    Share.open({
        title: "Checkout Animal Sounds",
        message: "Checkout Animal Sounds",
        url: url,
    }).catch((error) => {
        console.warn("Failed to share: " + error);
    });
}
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
                            <Title style={styles.fullName}>Animal Sounds</Title>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="grid"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sounds"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="share"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Share link to app"
                            onPress={() => shareLink()}
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
      backgroundColor: 'white',
    },
    drawerContent: {
      flex: 1,
    },
    profileContainer: {
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: Colors.niebieski1,
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
