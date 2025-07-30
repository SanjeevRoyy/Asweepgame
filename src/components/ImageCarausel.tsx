import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide every 3 seconds
    pauseOnHover: false,
  };

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden", background: "#101010" }}>
      <Slider {...settings}>
        <div>
          <img
            src="png/sliderimage1.png"
            alt="sliderimage1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
              maxHeight: "100vh",
            }}
          />
        </div>
        <div>
          <img
            src="png/sliderimage2.png"
            alt="sliderimage2"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
              maxHeight: "100vh",
            }}
          />
        </div>
      </Slider>
    </div>
  );
}
