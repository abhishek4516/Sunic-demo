import { STATS } from "../../data/stats";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <section className="stats-section">

      <div className="stats-inner">

        {STATS.map((stat) => (
        <StatCard
  key={stat.label}
  {...stat}
/>
        ))}

      </div>

    </section>
  );
}