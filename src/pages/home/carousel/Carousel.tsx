import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Carousel.scss";
import { infoApi } from "../../../redux/api/infoApi";
import { ICarousel } from "../../../models/info";
import { useId } from "react";
const Carousel = () => {
  const uniqId = useId();
  const { data: carousel } = infoApi.useFetchCarouselQuery();
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {carousel?.map((element: ICarousel, index: number) => (
        <SwiperSlide key={`${uniqId}__carousel__${index}`}>
          <img src={element.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
