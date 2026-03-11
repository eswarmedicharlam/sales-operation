import React from 'react'
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api'
import { useState } from 'react'

const ActivityMap = ({ data }) => {
    const [selectedMarker, setSelectedMarker] = useState(null)

    // Location coordinates for Indian cities/regions
    const locationCoordinates = {
        'Whitefield': { lat: 12.9698, lng: 77.7499 },
        'Kanakapura': { lat: 12.9667, lng: 77.2167 },
        'Hunsur': { lat: 12.2333, lng: 76.3 },
        'Pandavapura': { lat: 12.5167, lng: 76.5833 },
        'Kolar Town': { lat: 13.15, lng: 78.1333 }
    }

    // Default center (Bangalore, India)
    const defaultCenter = { lat: 12.9716, lng: 77.5946 }

    // Get unique villages for centering map
    const getMapCenter = () => {
        if (data.length === 0) return defaultCenter
        const firstVillage = data[0].village
        return locationCoordinates[firstVillage] || defaultCenter
    }

    const mapContainerStyle = {
        width: '100%',
        height: '500px',
        borderRadius: '15px',
        overflow: 'hidden'
    }

    const getStatusBadgeColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-500'
            case 'In Progress':
                return 'bg-blue-500'
            case 'Pending':
                return 'bg-yellow-500'
            default:
                return 'bg-gray-500'
        }
    }

    return (
        <div className="bg-white rounded-[15px] overflow-hidden p-6">
            {/* <LoadScript googleMapsApiKey={"AIzaSyA8TwR3saEZAEBGz7R9OTCuLPRzvEIWIVo"}> */}
            <LoadScript googleMapsApiKey={"AIzaSyDSnvnrNEsJaOdNyzcOkLfjomZ8WVLiajw"}> 
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={getMapCenter()}
                    zoom={10}
                    options={{
                        mapTypeId: 'roadmap'
                    }}
                >
                    {data.map((activity) => {
                        const coordinates = locationCoordinates[activity.village] || defaultCenter
                        return (
                            <MarkerF
                                key={activity.id}
                                position={coordinates}
                                onClick={() => setSelectedMarker(activity)}
                                title={activity.village}
                            >
                                {selectedMarker && selectedMarker.id === activity.id && (
                                    <InfoWindowF
                                        position={coordinates}
                                        onCloseClick={() => setSelectedMarker(null)}
                                    >
                                        <div className="p-3 min-w-max">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="font-bold text-gray-800">{activity.village}</h3>
                                                <span className={`text-xs font-semibold text-white px-2 py-1 rounded ${getStatusBadgeColor(activity.status)}`}>
                                                    {activity.status}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-700 space-y-1">
                                                <p><strong>Date:</strong> {activity.date}</p>
                                                <p><strong>Activity:</strong> {activity.activity}</p>
                                                <p><strong>Employee:</strong> {activity.employee}</p>
                                                <p><strong>State:</strong> {activity.state}</p>
                                                <p><strong>Region:</strong> {activity.region}</p>
                                                <p><strong>District:</strong> {activity.district}</p>
                                            </div>
                                        </div>
                                    </InfoWindowF>
                                )}
                            </MarkerF>
                        )
                    })}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default ActivityMap
