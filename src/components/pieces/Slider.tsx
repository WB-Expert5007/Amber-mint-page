import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-image-lightbox/style.css"
import NFTCard from "./NFTCard"

interface Props {
  images: []
}

const SimpleSlider = (props: Props) => {
  const [initialState, setInitialState] = useState({
    photoIndex: 0,
    isOpen: false,
    images: [],
  })
  useEffect(() => {
    setInitialState({ ...initialState, images: [1, 2, 3, 4, 5] })
  }, [])

  var settings = {
    infinite: initialState.images.length > 4,
    slidesToShow: 4,
    autoplay: true,
    swipeToSlide: true,
    centerMode: false,
    speed: 2000,
    autoplaySpeed: 1000,
    centerPadding: 30,
    className: "center rounded-md overflow-x-hidden",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          infinite: initialState.images.length > 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
          initialSlide: 2.5,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
        },
      },
    ],
  }

  return (
    <>
      {initialState.images.length !== 0 && (
        <div className="mt-10" data-aos="fade-up">
          <div className="mt-5 relative">
            <Slider {...settings}>
              {initialState.images.map((element, i) => (
                <NFTCard key={"slider" + i} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  )
}

export default SimpleSlider
