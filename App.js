import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createAppNavigator} from  '@react-navigation/native';
import {createAppcontainer} from '@react-navigation/native'

import Filme from '/src/HOME/index';
import FilmesMv from '/src/Toprated';
import Series from './src/Series';
/*
const Routes = createAppcontainer(
  createAppNavigator({
    Filmes,
    FilmesMv,
    Series
  },{
    initialRouteName:'Filmes',
    contentComponent: CustonDrawer
  }
  )
);
export default Routes;
*/


const Drawer = createDrawerNavigator();

export default function App() {
  return (
  
    <NavigationContainer  >
    <Drawer.Navigator  initialRouteName="MegaFlix"   
    screenOptions={{
          drawerType: "slide",
          drawerPosition:'right',
          headerStyle: {
            backgroundColor: "#000",
            alignItems: "center",
            
          },drawerContentStyle:{
            backgroundColor:'#696969'
          },
          headerTitle:{
           fontSize:20
          },
         
          headerTitleAlign: "center",
          headerTintColor: "#FFf",
          drawerStyle: {
            width: 250
          },
        
          overlayColor: 0.8,
          drawerActiveTintColor: "#fff",
          drawerInactiveBackgroundColor: "#000",
          drawerActiveBackgroundColor: "#000",
          drawerInactiveTintColor: "#fff",
          drawerItemStyle: {
            alignItems: "center",
            letterSpacing: 1,
            fontSize: 16,
            fontFamily: "bold",
            marginTop:20
          },
        }}> 
    <Drawer.Screen style={{justifyContent:'center'}} name="MegaFlix" component={Filme} />
      <Drawer.Screen name="Filmes mais votados" component={FilmesMv} />
      <Drawer.Screen name="Séries no ar" component={Series} />
      
    </Drawer.Navigator >
    
  </NavigationContainer>
  );
}


