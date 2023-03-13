import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ card, index, darkTheme }) => {
  //   console.log("card", card);
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}
    >
      {index % 3 == 0 ? (
        <Image
          source={{
            uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dpreview.com%2Fchallenges%2FChallenge.aspx%3FID%3D9560&psig=AOvVaw0RLufLddf5W7xVLOYgWsiY&ust=1678505200043000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNisw6O10P0CFQAAAAAdAAAAABAE",
          }}
          style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
        />
      ) : (
        <>
          <Image
            source={{ uri: card.urlToImage }}
            style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
          />
          <View
            style={{
              ...styles.description,
              backgroundColor: darkTheme ? "#282C35" : "white",
            }}
          >
            <Text
              style={{ ...styles.title, color: darkTheme ? "white" : "black" }}
            >
              {card.title}
            </Text>
            <Text
              style={{
                ...styles.content,
                color: darkTheme ? "white" : "black",
              }}
            >
              {card.description}
            </Text>
            <Text style={{ color: darkTheme ? "white" : "black" }}>
              Article by
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                {card.author ?? "unknown"}
              </Text>
            </Text>
          </View>
          <ImageBackground
            blurRadius={30}
            style={styles.footer}
            source={{ uri: card.urlToImage }}
          >
            <TouchableOpacity
              onPress={() => {
                // try {
                //   Linking.openURL(card.url);
                //   console.log("Site opeined");
                // } catch (error) {
                //   console.log("error", error);
                // }
                console.log("pressed");
              }}
            >
              <Text style={{ fontSize: 15, color: "white" }}>
                '{card?.content?.slice(0, 45)}...'
              </Text>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}
              >
                Read More
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </>
      )}
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0, // Should change after bottom Nav bar
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
