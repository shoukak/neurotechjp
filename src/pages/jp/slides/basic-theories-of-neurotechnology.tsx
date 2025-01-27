import Footer from "~components/Footer";
import Header from "~components/Header";
import { Meta } from "~components/Meta";
import React from "react";

const BasicTheoriesOfNeurotechnology: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "Neurotech(ニューロテック)の基礎 | NeurotechJP",
          desc:
            "Neurotechnologyの基礎知識をまとめたスライド資料です。" +
            "1. このエリアの全体像(市場規模など)" +
            "2.基礎知識(Neurotechnologyの種類、脳科学基礎、ソフトウェアエンジニアリング)" +
            "3. ニューロテクノロジーを用いたユースケース",
          link: "https://neurotechjp.com/jp/slides/basic-theories-of-neurotechnology/",
          image:
            "https://neurotechjp.com/img/slides/slide-basic-theory-neurotech-jp.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <iframe
            allowFullScreen
            src="https://www.slideshare.net/slideshow/embed_code/key/CVlcUA8ZfaC1G5"
          />
        </div>
        <div className="slides-item--title">
          Neurotech(ニューロテック)の基礎
        </div>
        <div className="slides-item--subtitle">
          Neurotechnologyの基礎知識をまとめたスライド資料です。 <br />
          1. このエリアの全体像(市場規模など) <br />
          2.
          基礎知識(Neurotechnologyの種類、脳科学基礎、ソフトウェアエンジニアリング)
          <br />
          3. ニューロテクノロジーを用いたユースケース
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BasicTheoriesOfNeurotechnology;
