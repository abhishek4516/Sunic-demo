import "./Ecosystem.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
export default function Ecosystem() {


  return (

    <section className="eco-section">

      {/* BACKGROUND LINES */}

      <svg
        className="eco-bg-lines"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >

        <g
          fill="none"
          stroke="#c94a4a"
          strokeLinecap="round"
        >

          <path d="M 0,0 C 400,30 1000,60 1440,90" strokeWidth="0.6" opacity="0.08" />
          <path d="M 0,0 C 350,130 920,235 1440,290" strokeWidth="0.6" opacity="0.06" />
          <path d="M 0,0 C 290,230 820,410 1440,490" strokeWidth="0.6" opacity="0.05" />
          <path d="M 0,0 C 210,330 680,570 1440,690" strokeWidth="0.6" opacity="0.04" />

        </g>

      </svg>

      <div className="eco-glow"></div>

      <div className="layout-container">

        <div className="eco-layout">

          {/* LEFT */}

          <div className="eco-left">

            <div className="section-label">
              Infrastructure Ecosystem
            </div>

            <h2 className="eco-title">

              Connected Systems.
              <br />

              <em>Intelligent Operations.</em>

            </h2>

            <p className="eco-desc">

              Sunic Technologies combines OCR,
              warehouse intelligence, automation,
              tracking and enterprise infrastructure
              into one connected operational ecosystem.

            </p>

            <p
              className="eco-desc"
              style={{ marginTop: "18px" }}
            >

              Every layer communicates seamlessly —
              enabling faster workflows, operational
              visibility and intelligent decision making.

            </p>

          </div>

          {/* RIGHT */}

<div className="eco-right">

  <Swiper
    modules={[Autoplay, Pagination]}
    slidesPerView={1}
    spaceBetween={24}
    loop={true}
    speed={1000}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    className="eco-swiper"
  >

    <SwiperSlide>

      <div className="eco-slide">

        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80"
          alt="Warehouse"
        />

        <div className="eco-slide-overlay">

          <h3>Warehouse Intelligence</h3>

          <p>
            Smart warehouse visibility and operational control.
          </p>

        </div>

      </div>

    </SwiperSlide>

    <SwiperSlide>

      <div className="eco-slide">

        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
          alt="OCR"
        />

        <div className="eco-slide-overlay">

          <h3>OCR Intelligence</h3>

          <p>
            Automated document processing and recognition.
          </p>

        </div>

      </div>

    </SwiperSlide>

    <SwiperSlide>

      <div className="eco-slide">

        <img
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1400&q=80"
          alt="Tracking"
        />

        <div className="eco-slide-overlay">

          <h3>Tracking Systems</h3>

          <p>
            Real-time visibility across logistics operations.
          </p>

        </div>

      </div>

    </SwiperSlide>

    <SwiperSlide>

      <div className="eco-slide">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
          alt="Analytics"
        />

        <div className="eco-slide-overlay">

          <h3>Business Analytics</h3>

          <p>
            Data-driven decision making and reporting.
          </p>

        </div>

      </div>

    </SwiperSlide>

  </Swiper>

</div>

        </div>

      </div>

    </section>
  );
}