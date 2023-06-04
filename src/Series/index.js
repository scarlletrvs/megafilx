import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import api from "/src/services/api";

//https://api.themoviedb.org/3/tv/on_the_air?api_key=cd52cba3f291205958b017d9abda2519&language=pt-BR

//<script src="http://localhost:8097"></script>

const Series = () => {
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    async function loadSeries() {
      const response = await api.get("tv/on_the_air", {
        params: {
          api_key: "cd52cba3f291205958b017d9abda2519",
          language: "pt-BR",
          page: 1,
        },
      });

      setSerie(response.data.results.slice(0, 20));
    }
    loadSeries();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#696969",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        {serie &&
          serie.map((series) => {
            return (
              <View
                key={series.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "sans-serif",
                    fontSize: "19px",
                    marginBottom: "10px",
                    fontWeight:'bold'
                  }}
                >
                  {series.name}
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
                    uri: `https://image.tmdb.org/t/p/original/${series.poster_path}`,
                  }}
                />

                <Text
                  style={{
                    marginTop:14,
                    color: "#fff",
                    fontFamily: "sans-serif",
                    fontSize: "13x",
                    textAlign: "justify",
                    lineHeight: "20px",
                    maxWidth: "87%",
                    alignItems: "center",
                    fontWeight:'bold'
                  }}
                >
                  {series.overview}
                </Text>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};
export default Series;
