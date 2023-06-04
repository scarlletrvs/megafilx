import {View,Text,StyleSheet} from 'react-native';


export default function HeadApp(){
    return(
<View style={styles.container}>
    <Text style={{
        fontFamily:'sasns-serif',
        fontSize:'20px',
        color:'#FFFFFF'}}
        >Prime Flix</Text>
        
</View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:'1',
        padding:'0',
        margin:'0',
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width: '100%',
        height:'10%',
        backgroundColor:'#000000',
        alignItems:'center'
        
    
    
    },

})