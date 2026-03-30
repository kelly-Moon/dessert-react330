import React from "react";
import Header from "./components/Header";

import Slider from "./components/Slider";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Skip from "./components/Skip";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Slider />
        <Image title="프리미어 케이크와 디저트를 만나보세요" />
        <ImageText element="red" />
        <Card />
        <Banner />
        <Text />
      </Main>
      <Footer />
    </>
  );
};

export default App;
