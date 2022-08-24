import React, {FC, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import './Carousel.scss'
import {ICouponProfileImage} from "../../../models/coupon";

interface Props {
  images: ICouponProfileImage[]
}

const Carousel: FC<Props> = (props: Props ) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
      <div className="carousel__gallary">
       <Swiper
           
        spaceBetween={10}
        navigation={true}
        thumbs={{  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
         {
           props.images.map(image =>
             <SwiperSlide key={image.id}>
               <img src={image.image} alt={'slide'}/>
             </SwiperSlide>
           )}

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          props.images.map(image =>
              <SwiperSlide key={image.id}>
                <img src={image.image} alt={'slide'}/>
              </SwiperSlide>
          )}
      </Swiper>
    </div>
  );
};

export default Carousel;
