import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BadgesComponent = () => {
    // State variables
    const [activeButton, setActiveButton] = useState('all-badges');
    const [searchQuery, setSearchQuery] = useState('');

    // Event handlers
    const handleBadgeButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    // Filter function to determine if a badge should be displayed
    const filterBadges = (badgeTitle) => {
        return badgeTitle.toLowerCase().includes(searchQuery);
    };

    return (
        <>
            {/* Search and filter section */}
            <div className="search-change-badges">
                <form action="" className="search">
                    <div className="input-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for badges"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button className="search-button" type="button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>
                {/* Badge filter buttons */}
                <div className="change-badges">
                    <a
                        href="#"
                        className={`badges-btn all-badges ${activeButton === 'all-badges' ? 'badges-active' : ''}`}
                        onClick={() => handleBadgeButtonClick('all-badges')}
                    >
                        All badges
                    </a>
                    <a
                        href="#"
                        className={`badges-btn cub-badges ${activeButton === 'cub-badges' ? 'badges-active' : ''}`}
                        onClick={() => handleBadgeButtonClick('cub-badges')}
                    >
                        Cub badges
                    </a>
                    <a
                        href="#"
                        className={`badges-btn scout-badges ${activeButton === 'scout-badges' ? 'badges-active' : ''}`}
                        onClick={() => handleBadgeButtonClick('scout-badges')}
                    >
                        Scout badges
                    </a>
                </div>
            </div>
            {/* Badge display section */}
            <div className="badges">
                {/* Cub badges */}
                <h2 className="cub-badgestitle">Cub badges</h2>
                {(activeButton === 'all-badges' || activeButton === 'cub-badges') && (
                    <div className="cub-badges">
                        {/* Individual badge cards */}
                        <Link to='/communicatorcub' className="card-1" style={{ display: filterBadges("Communicator") ? 'block' : 'none' }}>
                            <img className="badges-cardimg" src="assets/img/obancubscouts-cub-activitycommunicator.svg" alt="" />
                            <h3 className="card-title">Communicator</h3>
                        </Link>
                        {/* ... more badge cards ... */}
                    </div>
                )}
                {/* Scout badges */}
                {(activeButton === 'all-badges' || activeButton === 'scout-badges') && (
                    <div className="scout-badges">
                        <h2 className="scout-badgestitle">Scout badges</h2>
                        {/* ... more badge cards ... */}
                    </div>
                )}
            </div>
        </>
    );
};

export default BadgesComponent;
