import React from 'react';
import {
    View,
    StyleSheet,
    Linking,
} from 'react-native';
import { useSelector } from 'react-redux';
import {
    path,
    isNill,
} from 'ramda';
import Share from "react-native-share";
import {
    useTheme,
    Title,
    Drawer,
    Text,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileImage from '../components/ProfileImage';
import Colors from '../constants/Colors';

const openEula = () => {
    const url = "https://www.privacypolicies.com/live/9c9d40a0-e806-46a4-a8f4-f9ec422dd07f";
    Linking.openURL(url);
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
                                    color='white'
                                    size={size}
                                    style={styles.iconWrapper}
                                />
                            )}
                            label="Sounds"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="file"
                                    color='white'
                                    size={size}
                                    style={styles.iconWrapper}
                                />
                            )}
                            label="View EULA"
                            onPress={() => openEula()}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
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
      backgroundColor: Colors.niebieski3,
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
    iconWrapper: {
        backgroundColor: Colors.niebieski3,
        padding: 5,
        borderRadius: 5,
    }
  });

export default DrawerContent;
