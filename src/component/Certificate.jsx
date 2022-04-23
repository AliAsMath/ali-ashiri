import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Certificates() {
  return (
    <section
      id="certificates"
      className="h-screen flex flex-col gap-5 justify-center items-center"
    >
      <h5 className="text-green-4">Overview Of</h5>
      <h2 className="text-green-5 text-3xl mb-7">Certificates</h2>
      <Swiper
        className="mySwiper pb-12 w-[600px] sm:w-11/12"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass bg-green-5`,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="p-3 border  border-green-5 bg-green-1 rounded-xl">
          <h3 className=" mb-5 text-xl text-green-5">
            Coursera: Andrew Ng Deep Learning Specialization
          </h3>
          <ul className="flex flex-col justify-between gap-3 pl-5 text-green-6 list-disc list-outside">
            <li>Neural Networks and Deep Learning</li>
            <li>
              Improving Deep Neural Networks: Hyperparameter Tuning,
              Regularization and Optimization
            </li>
            <li>Structuring Machine Learning Projects</li>
            <li>Convolutional Neural Networks</li>
            <li>Sequence Models</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="p-3 border border-green-5 bg-green-1 rounded-xl">
          <h3 className=" mb-5 text-xl text-green-5">
            Festo Automation company
          </h3>
          <ul className="flex flex-col justify-between gap-3 pl-5 text-green-6 list-disc list-outside">
            <li>Basic Programming of PLC</li>
            <li>Advance Programming of PLC</li>
            <li>Mechatronic</li>
            <li>Principles of industrial measurement and instrumentation</li>
            <li>
              Advance training on principles of industrial network (Profibus/DP)
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Certificates;
