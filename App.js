import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './src/components/BottomTabNavigator';

import HomeScreen from './src/screens/HomeScreen';
import YesterdayResultsScreen from './src/screens/YesterdayResultsScreen';
import TodayMatchesScreen from './src/screens/TodayMatchesScreen';
import TomorrowPredictionsScreen from './src/screens/TomorrowPredictionsScreen';
import ResultHistoryScreen from './src/screens/ResultHistoryScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import { StatusBar } from 'expo-status-bar';
import { StatisticsProvider } from './src/context/statistics.context';

const Stack = createStackNavigator()

const headerProps = {
  title:'Home',           
  headerStyle: {
    backgroundColor: 'rgb(95, 67, 14)',
  },
  headerTintColor: 'wheat',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const App = () => {
  return (
    <NavigationContainer>
        <StatusBar
          backgroundColor="rgb(95, 67, 14)"
          />
        <Stack.Navigator>
          <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Yesterday Results" component={YesterdayResultsScreen} options={headerProps}/>
          <Stack.Screen name="Today Matches" component={TodayMatchesScreen} options={headerProps}/>
          <Stack.Screen name="Tomorrow Predictions" component={TomorrowPredictionsScreen} options={headerProps}/>
          <Stack.Screen name="Result History" component={ResultHistoryScreen} options={headerProps}/>
          <Stack.Screen name="Statistics" component={StatisticsScreen} options={headerProps}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default () => {
  return(
    <StatisticsProvider>
        <App/>
    </StatisticsProvider>
  )
}
  

const styles = StyleSheet.create({});
