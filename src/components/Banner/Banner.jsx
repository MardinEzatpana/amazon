import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgOneMobile,
  bannerImgTwoMobile,
  bannerImgThreeMobile,
} from "../../assets";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const location = useLocation();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "2%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "35px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "35px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      ></div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      height: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      height: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            ></div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <Link to="/offer" state={{ data: location.pathname.split("/")[1] }}>
          <div className="hidden md:inline-block">
            <img
              src={bannerImgOne}
              className="object-cover min-h-60 lg:min-h-80 xl:min-h-96"
              alt=""
            />
          </div>
          <div className="inline-block md:hidden">
            <img
              src={bannerImgOneMobile}
              className="object-cover min-h-60"
              alt=""
            />
          </div>
        </Link>
        <Link to="/offer" state={{ data: location.pathname.split("/")[1] }}>
          <div className="hidden md:inline-block">
            <img
              src={bannerImgTwo}
              className="object-cover min-h-60 lg:min-h-80 xl:min-h-96"
              alt=""
            />
          </div>
          <div className="inline-block md:hidden">
            <img
              src={bannerImgTwoMobile}
              className="object-cover min-h-60"
              alt=""
            />
          </div>
        </Link>
        <Link to="/offer" state={{ data: location.pathname.split("/")[1] }}>
          <div className="hidden md:inline-block">
            <img
              src={bannerImgThree}
              className="object-cover min-h-60 lg:min-h-80 xl:min-h-96"
              alt=""
            />
          </div>
          <div className="inline-block md:hidden">
            <img
              src={bannerImgThreeMobile}
              className="object-cover min-h-60"
              alt=""
            />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
