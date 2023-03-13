import React, { useState } from "react";
import SingleNews from "../components/SingleNews";
import Swiper from "react-native-deck-swiper";

const NewsScreen = ({ news }) => {
  const [index, setIndex] = useState(0);

  const onSwipedTop = () => {
    setIndex(index + 1);
  };
  const onSwipedBottom = () => {
    setIndex(index - 1);
  };
  return (
    <>
      <Swiper
        cards={news}
        cardIndex={index}
        renderCard={(card) => <SingleNews card={card} index={index} />}
        onSwipedTop={onSwipedTop}
        onSwipedBottom={onSwipedBottom}
        infinite
        // backgroundColor={""}
        horizontalSwipe={false}
        // disableBottomSwipe
        disableLeftSwipe
        disableRightSwipe
        stackSize={10}
        stackScale={10}
        stackSeparation={14}
        animateCardOpacity
        showSecondCard={false}
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
      />
    </>
  );
};

export default NewsScreen;
