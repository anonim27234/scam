import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

function SwiperComponent() {
    return (
        <Swiper
            className="swiper"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1} 
            navigation
            pagination
        >
            <SwiperSlide>
                <Link to={'/projects'}>
                    <img src="droni_sbor2.png" alt="" />
                    <div className="swiper__text">Сбор 1 миллион и 500 тысяч рублей на закупку FPV-дронов 7inch</div>
                    <div className="swiper__under-text">Сбор 1 миллион и 500 тысяч рублей на закупку FPV-дронов 7inch</div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to={'/otchet/pomojem-nashim-peredali-productovie-nabori'}>
                    <img src="producti_otchet2.jpg" alt="" />
                    <div className="swiper__text">Войска рф получили продуктовые наборы от «Поможем нашим»</div>
                    <div className="swiper__under-text">Войска рф получили продуктовые наборы от «Поможем нашим»</div>
                </Link>
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperComponent;