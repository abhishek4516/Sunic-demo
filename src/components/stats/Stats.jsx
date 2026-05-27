import { STATS } from "../../data/stats";
import "./Stats.css";
import StatCard from "./StatCard";

export default function Stats() {

  return (

    <section className="stats-section">

      {/* BG LINES */}

      <svg
        className="stats-bg-lines"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
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

      <div className="stats-glow"></div>

      <div className="layout-container">

        <div className="stats-top">

          <div className="section-label">
            Enterprise Scale
          </div>

          <h2 className="stats-title">

            Infrastructure Built
            <br />

            <em>For Performance.</em>

          </h2>

        </div>

        <div className="stats-inner">

          {STATS.map((stat) => (

            <StatCard
              key={stat.label}
              {...stat}
            />

          ))}

        </div>

      </div>

    </section>
  );
}