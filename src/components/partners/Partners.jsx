// Partners.jsx

import './partners.css';

function Partners() {
  const logos = [
    {
      src: './assests/HP.png', 
      alt: 'Logo 1'
    },
    {
      src: './assests/ORACLE.png', 
      alt: 'Logo 2'
    },
    {
      src: '', 
      alt: 'Logo 3'
    },
    {
      src: '', 
      alt: 'Logo 4'
    },
    {
      src: '', 
      alt: 'Logo 5'
    },
    {
      src: '', 
      alt: 'Logo 6'
    }
  ];

  return (
    <div className="logoLoop">
      <div className="logoTrack">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logoItem" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;