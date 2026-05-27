import "./Ecosystem.css";

export default function Ecosystem() {

  const nodes = [

    {
      title: "OCR Intelligence",
      x: "14%",
      y: "18%",
    },

    {
      title: "Warehouse Systems",
      x: "72%",
      y: "20%",
    },

    {
      title: "Tracking Network",
      x: "82%",
      y: "58%",
    },

    {
      title: "Automation",
      x: "22%",
      y: "68%",
    },

    {
      title: "Analytics",
      x: "52%",
      y: "82%",
    },
  ];

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

            {/* CONNECTION SVG */}

            <svg
              className="eco-connections"
              viewBox="0 0 1000 1000"
            >

              <line x1="500" y1="500" x2="180" y2="180" />
              <line x1="500" y1="500" x2="760" y2="200" />
              <line x1="500" y1="500" x2="820" y2="600" />
              <line x1="500" y1="500" x2="240" y2="700" />
              <line x1="500" y1="500" x2="520" y2="820" />

            </svg>

            {/* CENTER HUB */}

            <div className="eco-core">

              <span>SUNIC</span>

            </div>

            {/* NODES */}

            {nodes.map((node) => (

              <div
                key={node.title}
                className="eco-node"
                style={{
                  left: node.x,
                  top: node.y,
                }}
              >

                <div className="eco-node-dot"></div>

                <span>
                  {node.title}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}