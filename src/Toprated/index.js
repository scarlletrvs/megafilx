import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import api from "/src/services/api";

//https://api.themoviedb.org/3/movie/top_rated?api_key=cd52cba3f291205958b017d9abda2519&language=pt-BR
//<script src="http://localhost:8097"></script>

const FilmesMv = () => {
  const [filmemv, setFilmemv] = useState([]);

  useEffect(() => {
    async function loadFilmeMv() {
      const response = await api.get("movie/top_rated", {
        params: {
          api_key: "cd52cba3f291205958b017d9abda2519",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmemv(response.data.results.slice(0, 20));
    }
    loadFilmeMv();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: "1",
          backgroundColor: "#696969",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        {filmemv &&
          filmemv.map((filmetp) => {
            return (
              <View
                key={filmetp.id}
                style={{
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Text
                  style={{
                    flex: "1",
                    fontSize: "19px",
                    marginTop: "5px",
                    color: "#fff",
                    marginBottom: "10px",
                    alignItems: "center",
                    fontWeight:'bold'
                  }}
                >
                  {filmetp.original_title}
                </Text>

                <Image
                  style={{
                    marginTop:10,
                    width: "200px",
                    height: "250px",
                    borderRadius:8,
                    marginBottom:5
                  }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${filmetp.poster_path}`,
                  }}
                />

                <Text
                  style={{
                    marginTop:14,
                    fontSize: "12px",
                    color: "#fff",
                    marginBottom: "10px",
                    alignItems: "center",
                    maxWidth: "87%",
                    textAlign: "justify",
                    lineHeight: "20px",
                    fontWeight:'bold'
                  }}
                >
                  {filmetp.overview}
                </Text>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default FilmesMv;
