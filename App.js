import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeIcon from './assets/home.png';
import searchIcon from './assets/search.png';
import postingIcon from './assets/posting.png';
import reelsIcon from './assets/reels.png';
import profileIcon from './assets/profile.png';

import {
  HomeScreen,
  SearchScreen,
  PostingScreen,
  ReelsScreen,
  ProfileScreen,
} from './pages';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = homeIcon;
            } else if (route.name === 'Search') {
              iconName = searchIcon;
            } else if (route.name === 'Posting') {
              iconName = postingIcon;
            } else if (route.name === 'Reels') {
              iconName = reelsIcon;
            } else if (route.name === 'Profile') {
              iconName = profileIcon;
            }

            return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          labelStyle: {
            display: 'none', // Menyembunyikan label teks
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            title: 'Instagram Master', // Judul halaman menjadi teks nama aplikasi
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: '',
            title: 'Instagram Master', // Judul halaman menjadi teks nama aplikasi
          }}
        />
        <Tab.Screen
          name="Posting"
          component={PostingScreen}
          options={{
            tabBarLabel: '',
            title: 'Instagram Master', // Judul halaman menjadi teks nama aplikasi
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            tabBarLabel: '',
            title: 'Instagram Master', // Judul halaman menjadi teks nama aplikasi
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
            title: 'Instagram Master', // Judul halaman menjadi teks nama aplikasi
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
