import React from 'react';

const Hero = ({ title, herogalleryoverlay, herobadgesoverlay, herocontactoverlay, herolocalinfoOverlay, herogeneralinfoOverlay, herologinoverlay, heroregisteroverlay, herocubscoutoverlay, heroparentoverlay, herohelperoverlay, heroscoutleaderoverlay, herogamesoverlay, herouploadimageoverlay, heroyourbadgesoverlay, heroregisterhelperoverlay, heroviewhelperoverlay }) => {
  return (
    <div className="hero-bgimg">
      <div className={`hero-overlay ${herogalleryoverlay} ${herobadgesoverlay} ${herocontactoverlay} ${herolocalinfoOverlay} ${herogeneralinfoOverlay} ${herologinoverlay} ${heroregisteroverlay} ${herocubscoutoverlay} ${heroparentoverlay} ${herohelperoverlay} ${heroscoutleaderoverlay} ${herogamesoverlay} ${herouploadimageoverlay} ${heroyourbadgesoverlay} ${heroregisterhelperoverlay} ${heroviewhelperoverlay}`}>
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
