import "./LogoLoop.css";

const LOGOS = ["L1","L2","L3","L4","L5","L6","L7","L8","L9","L10","L11","L12","L13"];


const TRACK = [...LOGOS, ...LOGOS];

export default function LogoLoop() {
  return (
    <section className="ll-root">

 
      <div className="ll-header">
        <span className="ll-rule" />
        <span className="ll-label">Trusted by industry leaders</span>
        <span className="ll-rule" />
      </div>

    
      <div className="ll-stage">

    
        <div className="ll-fade ll-fade--left"  />
        <div className="ll-fade ll-fade--right" />

        <div className="ll-row ll-row--fwd">
          <div className="ll-track">
            {TRACK.map((name, i) => (
              <div key={i} className="ll-item">
                <div className="ll-logo-box">
                  <span className="ll-logo-name">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="ll-row ll-row--rev">
          <div className="ll-track">
            {TRACK.map((name, i) => (
              <div key={i} className="ll-item">
                <div className="ll-logo-box">
                  <span className="ll-logo-name">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="ll-footer">
        <span className="ll-rule" />
      </div>

    </section>
  );
}