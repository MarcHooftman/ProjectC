import React from 'react'

// back-up api-key: AIzaSyBC_QJDSJtMPwkOb-H1G9LyxWE5fKg18-w

const AntesMap = () => {
    return (
        <div className="ratio ratio-16x9">
            <iframe className="map shadow-lg"
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDpXbqN-HJdxw5YFgPKMfLhY8ZpRIycAnw
                &q=Antes+|+Polikliniek+Rotterdam+west&zoom=14">
            </iframe>
        </div>

    )
}

export default AntesMap