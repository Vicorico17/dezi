import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <p>
          Înființată în inima orașului, Dezi dezinsection este în fruntea managementului dăunătorilor urbani de peste un deceniu. Filozofia noastră este simplă: oferim soluții eficiente, fără nonsens, cu o etică a muncii punk-rock. Nu suntem exterminatorii tăi obișnuiți; suntem specialiști în de-bugging urban, dedicați menținerii spațiului tău curat și liber.
        </p>
        <p>
          Echipa noastră este formată din profesioniști experimentați care au văzut totul. De la intruși comuni la cele mai încăpățânate infestări, gestionăm fiecare situație cu precizie și expertiză. Credem în metodele noastre și ne susținem rezultatele, motiv pentru care oferim o garanție pentru toate serviciile noastre.
        </p>
        <div className="certifications">
          <p>Suntem mândri să fim certificați la nivel european de către primărie, oferind servicii de înalt profesionalism.</p>
          <p>Deservim întreg Bucureștiul și zonele învecinate.</p>
        </div>
      </div>
      <div className="about-us-images">
        <img src="https://c8.alamy.com/comp/2DB71KH/exterminator-spraying-insecticide-in-kitchen-2DB71KH.jpg" alt="Pest control professional at work" />
        <img src="https://c8.alamy.com/comp/AAN805/1950s-man-in-hat-and-suit-spraying-bugs-in-the-air-with-aerosol-can-of-insecticide-AAN805.jpg" alt="Another pest control professional" />
      </div>
    </div>
  );
};

export default AboutUs; 