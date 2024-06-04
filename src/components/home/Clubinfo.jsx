import React from 'react'

// Define a functional component called Clubinfo
const Clubinfo = () => {
  return (
    <>
        <div className="clubinfo">
            <div className="clubinfo-card">
                <h2 className="cub-title">Cubs</h2> // Heading for Cubs
                <h4 className="cub-ages">8 - 10 years</h4> // Age range for Cubs
            </div>
            <div className="clubinfo-card">
                <h2 className="scout-title">Scouts</h2> // Heading for Scouts
                <h4 className="scout-ages">10 - 14 years</h4> // Age range for Scouts
            </div>
        </div>
    </>
  )
}

export default Clubinfo // Export the Clubinfo component as the default export
