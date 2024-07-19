import "./CompanySection.css";

import review1 from "./asset/reviews/review_1.png";
import review2 from "./asset/reviews/review_2.png";
import review3 from "./asset/reviews/review_3.png";
import review4 from "./asset/reviews/review_4.png";
import review5 from "./asset/reviews/review_5.png";

import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    quote:
      "Talentpoel was crucial in launching our business. Jeph, who had our best interests at heart, recommended the perfect talent after understanding our needs. I highly recommend Talentpoel to other startup founders.",
    image: review1,
    customerName: "Evin Santana",
    occupation: "Founder & CEO, Envi",
  },
  {
    quote:
      "Precious has been amazing. She was able to lead our Mama mocktail without me having to do much which has allowed me to focus more on sales. She has also been able to effectively lead others. Love having her here. She has been a big help and addition that I can trust.",
    image: review2,
    customerName: "Layo George",
    occupation: "Founder and Executive Director, Wolomi",
  },
  {
    quote:
      "Moyo has been a great asset, and we are learning to work well together. Despite some trial and error, we are finding our rhythm. She now manages our hiring pipeline, keeps it updated, significantly reduced our liability, and holds me accountable.",
    image: review3,
    customerName: "Yamillet Payano",
    occupation: "CEO & Co - Founder, Sign-Speak",
  },
  {
    quote:
      "Startups often need to extend their runway while bringing on new team members. Talentpoel solves this by matching you with exceptional African talents quickly. You can have a new hire ready within 2 weeks, which is game-changing.",
    image: review4,
    customerName: "Brannon Peterkin",
    occupation: "Founder, Finish’d App",
  },
  {
    quote:
      "Talentpoel has been a great help to us in filling a gap in social media. I’d encourage anyone to reach out to Jeph to find out how Talentpoel could help you with a personnel need!",
    image: review5,
    customerName: "Linda Syth",
    occupation: "Co-founder, The Layered Onion",
  },
];

const CompanySection = () => {
  return (
    <div className="company-section layout flex_wrapper">
      <h3 className="company-section_heading">Reviews from our customers</h3>

      <div className="slider_container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={34}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review_container-box">
                <q>{review.quote}</q>
              </div>
              <div className="review_container-info">
                <div className="info_image">
                  <img src={review.image} alt="customer" />
                </div>
                <div className="info_name">
                  <h5>{review.customerName}</h5>
                  <p>{review.occupation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanySection;
