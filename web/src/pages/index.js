/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";

import ReactPlayer from "react-player/lazy";

import { TwitterShareButton } from "react-twitter-embed";

import ReactFBLike from "react-fb-like";
// import ShareLink from "react-google-plus-share-link";
import Slider from "react-slick";

import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import Arrow from "../icons/arrow.svg";
import Sectionss from "../icons/section.svg";
import ArrowRounded from "../icons/arrowRound.svg";
import ArrowSmall from "../icons/arrowSmall.svg";
import ShareG from "../icons/shareG.svg";
import Play from "../icons/play.svg";

import * as styles from "../styles/pages/index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import styled from "styled-component";

const SliderWrapper = styled("div")`
  .slick-list {
    overflow: ${props => (props.overflow ? "visible" : "hidden")};
  }
  /* Slider */
  .slick-slider {
    margin-bottom: 8px;

    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    /* overflow: hidden; */

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  /* Arrows */
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }

  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: "→";
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -10px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 10px;
    height: 10px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 10px;
    height: 10px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }


  }
`;



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      // dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };

    return (
      <Layout>
        <Arrow className={styles.arrow} />
        <Arrow className={styles.arrow2} />
        <SEO />
        <Container>
          <div className={styles.root}>
            <h1>One Team. One Dream </h1>
            <p className={styles.p}>
              This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor
              aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
              sem nibh id elit. Duis sed odio nibh vulputate cursus a sit amet mauris.
            </p>
            <button className={styles.readMore}>
              READ MORE <ArrowRounded />{" "}
            </button>
          </div>
          <Sectionss className={styles.section} />
        </Container>
        <div className={styles.div2}>
          <h4>About FC</h4>
          <p>
            This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aeneanlorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
            elit. Duis sed odionibh vulputate cursus a sit amet mauris.
          </p>
          <div className={styles.details}>
            <button>matches</button>
            <button>statistics</button>
            <button>trainings</button>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.clubs}>
            <ArrowSmall className={styles.arrowSmallLeft} />
            <div>
              {" "}
              <span>33 x 33</span> AFC Consequat
            </div>
            <div>
              <span>33 x 33</span> Magenta FC
            </div>
            <div>
              {" "}
              <span>33 x 33</span> Andrea FC
            </div>
            <div>
              <span>33 x 33</span> Magenta United
            </div>
            <div>
              <span>33 x 33</span> Xavier United
            </div>
            <div>
              <span>33 x 33</span> Altair FC
            </div>
            <div>
              <span>33 x 33</span> Azkalz FC
            </div>
            <div>
              <span>33 x 33</span> Juggernaut
            </div>
            <div>
              <span>33 x 33</span> Volcanoes
            </div>
            <ArrowSmall className={styles.arrowSmallRight} />
          </div>
          <div className={styles.matchesResult}>
            <div className={styles.result}>
              <h4>latest result</h4>
              <div className={styles.hr}></div>
              <div className={styles.vs}>
                <div className={styles.club1}>
                  {" "}
                  <span>94 x 92</span>
                  <p>FC Lorem</p>
                </div>
                <div className={styles.middle}>
                  <span className={styles.top}>Match 4</span>
                  <h3>
                    <span>3 </span> : 1
                  </h3>
                  <span className={styles.date}>
                    <p>Sao Paolo</p> <p>30 May 23:00</p>
                  </span>
                </div>
                <div className={styles.club1}>
                  {" "}
                  <span>94 x 92</span>
                  <p>AFC Ipsum</p>
                </div>
              </div>
            </div>
            <div className={styles.upcomingMatches}>
              <h4>upcoming matches</h4>
              <div className={styles.hr}></div>
              <div className={styles.clubsContainer}>
                <div className={styles.clubs1}>
                  <ul>
                    <li>
                      <span>33 x 33</span>
                      <p>AFC Consequat</p>
                    </li>
                    <li>
                      <span>33 x 33</span>
                      <p>Andrea FC</p>
                    </li>
                    <li>
                      <span>33 x 33</span>
                      <p>Xavier United</p>
                    </li>
                    <li>
                      <span>33 x 33</span>
                      <p>Azkals FC</p>
                    </li>
                  </ul>
                  <button>Previous</button>
                </div>
                <div className={styles.date}>
                  <ul>
                    <li>
                      <p>Sao Paolo</p> <p>25 May 23:00</p>
                    </li>
                    <li>
                      <p>Sao Paolo</p> <p>25 May 23:00</p>
                    </li>
                    <li>
                      <p>Sao Paolo</p> <p>25 May 23:00</p>
                    </li>
                    <li>
                      <p>Sao Paolo</p> <p>25 May 23:00</p>
                    </li>
                  </ul>
                  <button>Week 7</button>
                </div>
                <div className={styles.clubs1}>
                  <ul className={styles.clubs2}>
                    <li>
                      <p>Magenta FC</p>
                      <span>33 x 33</span>
                    </li>
                    <li>
                      <p>Magenta United</p>
                      <span>33 x 33</span>
                    </li>
                    <li>
                      <p>Altair FC</p>
                      <span>33 x 33</span>
                    </li>
                    <li>
                      <p>Juggernaut</p>
                      <span>33 x 33</span>
                    </li>
                  </ul>
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div4}>
          <h4>Video</h4>
          <div className={styles.hr}></div>

          <div className={styles.video}>
            <div className={styles.sliderContainer}>
              <button onClick={this.previous} className={styles.previous}>
                <ArrowSmall />
              </button>

              <Slider {...settings} ref={c => (this.slider = c)} className={styles.slider}>
                <div>
                  <button>
                    <Play />
                  </button>
                  <p>October 21, 2014</p>
                  <h4>#AFCvHCFC: live audio on Arsenal Player</h4>
                </div>
                <div>
                  <button>
                    <Play />
                  </button>
                  <p>October 21, 2014</p>
                  <h4>Roberto Di Matteo: My team was well organised</h4>
                </div>
                <div>
                  <button>
                    <Play />
                  </button>
                  <p>October 21, 2014</p>
                  <h4>Blanc: 'The Stade de France is always special'</h4>
                </div>
                <div>
                  <button>
                    <Play />
                  </button>
                  <p>October 21, 2014</p>
                  <h4>The internationals start back at training</h4>
                </div>
                <div>
                  <button>
                    <Play />
                  </button>
                  <p>October 21, 2014</p>
                  <h4>The internationals start back at training</h4>
                </div>
                <div>
                  <button>
                    <Play />
                  </button>
                  <p>October 21, 2014</p>
                  <h4>The internationals start back at training</h4>
                </div>
              </Slider>
              <button onClick={this.next} className={styles.next}>
                <ArrowSmall />
              </button>
            </div>
            <div className={styles.videosContainer}>
              <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
              <div className={styles.share}>
                <ReactFBLike />
                <div className={styles.google}>
                  <ShareG />
                  <p>+4778126 Recommend this on Google</p>
                </div>
                <TwitterShareButton
                  url={"https://facebook.com/saurabhnemade"}
                  options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
