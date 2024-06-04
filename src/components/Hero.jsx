import React from 'react';

// Define a functional component called Hero
const Hero = ({ title, subtitle, herogalleryoverlay, herobadgesoverlay, herocontactoverlay, herolocalinfoOverlay, herogeneralinfoOverlay, herologinoverlay, heroregisteroverlay, herocubscoutoverlay, heroparentoverlay, herohelperoverlay, heroscoutleaderoverlay, herogamesoverlay, herouploadimageoverlay, heroyourbadgesoverlay, heroregisterhelperoverlay, heroviewhelperoverlay, heroapplytrainingoverlay, heroeventsoverlay, heromanagecubscoutsoverlay, heromanagegalleryoverlay, heromanageeventsoverlay, herohelpersoverlay, heromatchinggameoverlay, herocubscoutquizoverlay, herocommunicatorbadgeoverlay, heroequestrianbadgeoverlay, herofiresafetybadgeoverlay, herolocalknowlegebadgeoverlay, heronaturalistbadgeoverlay, heroroadsafetybadgeoverlay, herowateractivitesbadgeoverlay, herocamperbadgeoverlay, heroemergencyaidbadgeoverlay, heronauticalskillsbadgeoverlay, heronavigatorbadgeoverlay }) => {
  return (
    <div className="hero-bgimg">
      {/* Render the hero overlay with dynamic class names */}
      <div className={`hero-overlay ${herogalleryoverlay} ${herobadgesoverlay} ${herocontactoverlay} ${herolocalinfoOverlay} ${herogeneralinfoOverlay} ${herologinoverlay} ${heroregisteroverlay} ${herocubscoutoverlay} ${heroparentoverlay} ${herohelperoverlay} ${heroscoutleaderoverlay} ${herogamesoverlay} ${herouploadimageoverlay} ${heroyourbadgesoverlay} ${heroregisterhelperoverlay} ${heroviewhelperoverlay} ${heroapplytrainingoverlay} ${heroeventsoverlay} ${heromanagecubscoutsoverlay} ${heromanagegalleryoverlay} ${heromanageeventsoverlay} ${herohelpersoverlay} ${heromatchinggameoverlay} ${herocubscoutquizoverlay} ${herocommunicatorbadgeoverlay} ${heroequestrianbadgeoverlay} ${herofiresafetybadgeoverlay} ${herolocalknowlegebadgeoverlay} ${heronaturalistbadgeoverlay} ${heroroadsafetybadgeoverlay} ${herowateractivitesbadgeoverlay} ${herocamperbadgeoverlay} ${herocommunicatorbadgeoverlay} ${heroemergencyaidbadgeoverlay} ${heronauticalskillsbadgeoverlay} ${heronavigatorbadgeoverlay}`}>
        {/* Render the title and subtitle */}
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

// Export the Hero component as the default export
export default Hero;
