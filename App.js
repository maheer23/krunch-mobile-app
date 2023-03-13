import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import Swiper from "react-native-deck-swiper";

// Components
import SingleNews from "./src/components/SingleNews";

const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [news, setNews] = useState([]);
  const [dataIsReturned, setDataIsReturned] = useState(false);
  const [index, setIndex] = useState(0);

  // Swiper Ref
  const swiperRef = React.createRef();
  async function fetchNews() {
    try {
      const { data } = await axios.get(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      );
      // console.log(data);

      setNews(data.articles);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting users", "", [
        { text: "Retry", onPress: () => fetchNews() },
      ]);
    }
  }

  // console.log(news.length);
  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      setDataIsReturned(true);
    } else {
      setDataIsReturned(false);
    }
  }, [news.length]);
  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      {dataIsReturned ? (
        <Swiper
          cards={news}
          cardIndex={index}
          renderCard={(card) => <SingleNews card={card} index={index} />}
          onSwiped={onSwiped}
          infinite
          backgroundColor={"transparent"}
          horizontalSwipe={false}
          disableBottomSwipe
          disableLeftSwipe
          disableRightSwipe
          stackSize={10}
          stackScale={10}
          stackSeparation={14}
          animateCardOpacity
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
