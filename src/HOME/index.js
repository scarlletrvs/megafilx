import { useEffect, useState } from "react";
import {View, Text, Image, ScrollView} from 'react-native';
import api from '/src/services/api';




//https://api.themoviedb.org/3/movie/now_playing?api_key=cd52cba3f291205958b017d9abda2519&language=pt-BR

//<script src="http://localhost:8097"></script>

const Filme = ()=> {
const[filmes, setFilmes] = useState([]);

useEffect(()=>{

async function loadFilme(){
    const response = await api.get("movie/now_playing", {
        params:{
            api_key:"cd52cba3f291205958b017d9abda2519",
            language: "pt-BR",
            page:1,
        }
    })

    setFilmes(response.data.results.slice(0,20));
}
      loadFilme();
},[])

    return(
    <ScrollView>
         <View style={{flex:1,
        backgroundColor:'#696969',
        alignItems:'center',
        paddingTop:'10px',
        }}>

        <Text style={{fontSize:'20px',
            color:'#fff',
            justifyContent:'center',
            marginTop:'10px',
             fontFamily:'sans-serif',
             alignItems:'center',
             display:'flex'}}>
            Filmes em Cartaz
        </Text>


{filmes && filmes.map((filme) => {
    return(
< View key={filme.id} style={{
    alignItems:'center',
    marginTop:'10px'}} >

        <Text  style={{flex:'1',
        fontSize:'19px',
        marginTop:'5px',
        color:'#fff',
        marginBottom:'10px',
        alignItems:'center',
    fontWeight:'bold'}}
           > {filme.title}</Text>
         
         <Image   style={{
             marginTop:10,
            width:'200px',
            height:'250px',
            borderRadius:8,
            marginBottom:5,
            boder: '4px solid black'
         }}  source={{uri:`https://image.tmdb.org/t/p/original/${filme.poster_path}`}}/>
                  
                

         <Text  style={{
            marginTop:14,
        fontSize:'13px',
        color:'#fff',
        marginBottom:'10px',
        alignItems:'center',
        maxWidth:'87%',
        textAlign:'justify',
    lineHeight:'20px',
    fontWeight:'bold'}}
         >{filme.overview}</Text>

</View>




    );



})}
       
        
    
</View>

    </ScrollView>

   
);
}
export default Filme;


//============================


/* 

   <Text key={filme.id} style={{
            fontFamily:'sans-serif',
            color:'#fff',
            alignItens:'center',
            display:'flex',
            justifyContent:'center'}}
           > {filme.title}</Text>,
*/


/* 

  <Image   style={{
            width:'50%',
            maxHeight:'50%',
            ObjectFit:'contain'
         }}  source={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
          
*/