import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';

export default class App extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
       <AppContainer/>
      </View>
    )
  }
}

const TabNavigator =  createBottomTabNavigator({
  Write:{screens:WriteStory},
  Read:{screens:ReadStory},
},
{
  defaultNavigationOptions : ({navigation}) => {{
    tabBarIcon: () => {
      const RouteName = navigation.state.routeName;
       if(RouteName === 'Read') {
         return(
           <Image
            
           
           />
         )
       }
       else if (RouteName === "Write") {
         return(
           <Image 
           
           
           />
         )
       }
    }
  }},  
});

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});