import "./LogoLoop.css";

const logos = [
  { 
    name: "Cisco Systems", 
    cdnUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cisco.svg",
    fallback: "CISCO"
  },
  { 
    name: "Sun Microsystems", 
    cdnUrl: "https://logobook.com/wp-content/uploads/2018/01/Sun_Microsystems_logo.svg",
    fallback: "Sun"
  },
  { 
    name: "Microsoft", 
    cdnUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/microsoft.svg",
    fallback: "Microsoft"
  },
  { 
    name: "3COM", 
    cdnUrl: "https://cdnlogo.com/logo/3com_1498.svg",
    fallback: "3COM"
  },
  { 
    name: "EMC", 
    cdnUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/EMC_Corporation_logo.svg",
    fallback: "EMC"
  },
  { 
    name: "ORACLE", 
    cdnUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/oracle.svg",
    fallback: "ORACLE"
  },
  { 
    name: "Legato", 
    cdnUrl: "",
    fallback: "legato"
  },
  { 
    name: "VERITAS", 
    cdnUrl: "https://cdnlogo.com/logo/veritas_33454.svg",
    fallback: "VERITAS"
  },
  { 
    name: "NORTEL", 
    cdnUrl: "https://cdnlogo.com/logo/nortel_65161.svg",
    fallback: "NORTEL"
  },
  { 
    name: "Tyco", 
    cdnUrl: "https://cdnlogo.com/logo/tyco_52915.svg",
    fallback: "tyco"
  },
  { 
    name: "vmware", 
    cdnUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vmware.svg",
    fallback: "vmware"
  },
  { 
    name: "Symantec", 
    cdnUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/symantec.svg",
    fallback: "Symantec"
  },
  { 
    name: "D-Link", 
    cdnUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/dlink.svg",
    fallback: "D-Link"
  },
];

export default function LogoLoop() {
  return (
    <section className="logoloop-section">
      <div className="layout-container">
      
        <div className="logoloop-header">
          <span className="logoloop-eyebrow">
            <span className="logoloop-eyebrow-line"></span>
           Built on Strong Partnerships
          </span>
          <h2 className="logoloop-title">
            Our <em>Clients & Partners</em>
          </h2>
          <p className="logoloop-desc">
           Empowering innovation through strong partnerships and successful client relationships.
          </p>
        </div>

        
        <div className="logoloop-container">
          <div className="logoloop-track">
            
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="logoloop-item">
                {logo.cdnUrl ? (
                  <img 
                    src={logo.cdnUrl} 
                    alt={`${logo.name} logo`}
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div className="logo-fallback" style={{ display: logo.cdnUrl ? 'none' : 'flex' }}>
                  <span className="logo-name">{logo.fallback}</span>
                </div>
              </div>
            ))}
           
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="logoloop-item">
                {logo.cdnUrl ? (
                  <img 
                    src={logo.cdnUrl} 
                    alt={`${logo.name} logo`}
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div className="logo-fallback" style={{ display: logo.cdnUrl ? 'none' : 'flex' }}>
                  <span className="logo-name">{logo.fallback}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}