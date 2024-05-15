import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BadgesComponent = () => {
    const [activeButton, setActiveButton] = useState('all-badges');

    const handleBadgeButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <>
            <div className="search-change-badges">
                <form action="" className="search">
                    <div className="input-container">
                        <input type="text" className="search-input" placeholder="Search for badges" />
                        <button className="search-button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>
                <div className="change-badges">
                    <a href="#" className={`badges-btn all-badges ${activeButton === 'all-badges' ? 'badges-active' : ''}`} onClick={() => handleBadgeButtonClick('all-badges')}>All badges</a>
                    <a href="#" className={`badges-btn cub-badges ${activeButton === 'cub-badges' ? 'badges-active' : ''}`} onClick={() => handleBadgeButtonClick('cub-badges')}>Cub badges</a>
                    <a href="#" className={`badges-btn scout-badges ${activeButton === 'scout-badges' ? 'badges-active' : ''}`} onClick={() => handleBadgeButtonClick('scout-badges')}>Scout badges</a>
                </div>
            </div>
            <div className="badges">
                <h2 className="cub-badgestitle">Cub badges</h2>
                {(activeButton === 'all-badges' || activeButton === 'cub-badges') && (
                    <div className="cub-badges">
                        <div className="card-1">
                            <img className="badges-cardimg" src="assets/img/obancubscouts-cub-activitycommunicator.svg" alt="" />
                            <h3 className="card-title">Communicator</h3>
                        </div>
                        <div className="card-2">
                            <img src="assets/img/obancubscouts-emergency-aid.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Emergency aid</h3>
                        </div>
                        <div className="card-3">
                            <img src="assets/img/obancubscouts-cub-activityequestrian.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Equestrian</h3>
                        </div>
                        <div className="card-4">
                            <img src="assets/img/obancubscouts-cub-activityfire-safety.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Fire safety</h3>
                        </div>
                        <div className="card-5">
                            <img src="assets/img/obancubscouts-cub-activitylocal-knowledge.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Local Knowledge</h3>
                        </div>
                        <div className="card-6">
                            <img src="assets/img/obancubscouts-cub-activitynaturalist.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Naturalist</h3>
                        </div>
                        <div className="card-7">
                            <img src="assets/img/obancubscouts-nautical.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Nautical skills</h3>
                        </div>
                        <div className="card-8">
                            <img src="assets/img/obancubscouts-navigator.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Navigator</h3>
                        </div>
                        <div className="card-9">
                            <img src="assets/img/obancubscouts-cub-activityroad-safety.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Road safety</h3>
                        </div>
                        <div className="card-10">
                            <img src="assets/img/obancubscouts-cub-activitywater-activities.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Water activities</h3>
                        </div>
                    </div>
                )}
                {(activeButton === 'all-badges' || activeButton === 'scout-badges') && (
                    <div className="scout-badges">
                        <h2 className="scout-badgestitle">Scout badges</h2>
                        <div className="card-1">
                            <img className="badges-cardimg" src="assets/img/obancubscouts-scout-activitycamper.svg" alt="" />
                            <h3 className="card-title">Camper</h3>
                        </div>
                        <div className="card-2">
                            <img src="assets/img/obancubscouts-scout-activitycommunicator.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Communicator</h3>
                        </div>
                        <div className="card-3">
                            <img src="assets/img/obancubscouts-emergency-aid.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Emergency aid</h3>
                        </div>
                        <div className="card-4">
                            <img src="assets/img/obancubscouts-scout-activityequestrian.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Equestrian</h3>
                        </div>
                        <div className="card-5">
                            <img src="assets/img/obancubscouts-scout-activityfire-safety.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Fire safety</h3>
                        </div>
                        <div className="card-6">
                            <img src="assets/img/obancubscouts-scout-activitylocal-knowledge.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Local knowledge</h3>
                        </div>
                        <div className="card-7">
                            <img src="assets/img/obancubscouts-scout-activitynaturalist.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Naturalist</h3>
                        </div>
                        <div className="card-8">
                            <img src="assets/img/obancubscouts-nautical.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Nautical skills</h3>
                        </div>
                        <div className="card-9">
                            <img src="assets/img/obancubscouts-navigator.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Navigator</h3>
                        </div>
                        <div className="card-10">
                            <img src="assets/img/obancubscouts-scout-activitywateractivities.svg" alt="" className="badges-cardimg" />
                            <h3 className="card-title">Water activities</h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default BadgesComponent;
