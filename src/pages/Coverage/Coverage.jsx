import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {

    const position = [23.6850, 90.3563];
    const servicesCenters = useLoaderData();
    const mapRef = useRef(null);
    // console.log(servicesCenters);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = servicesCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const cord = [district.latitude, district.longitude];
            console.log(district, cord);

            // Main -
            mapRef.current.flyTo(cord, 14);
        }
    }

    return (
        <div className='border my-8 rounded-2xl bg-white px-14'>
            <h2 className="text-5xl font-bold pt-6 text-secondary">
                We are available in 64 districts
            </h2>

            <div className='mt-8 flex'>
                <form className='flex' onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            type="search"
                            className="grow"
                            placeholder="Search"
                            name="location"
                        />
                    </label>

                    <button type="submit" className="btn btn-primary text-black ml-4">
                        Search
                    </button>
                    
                </form>

            </div>

            <div className='border-b border-dashed pt-16 '>

            </div>

            <div>
                <h1 className='text-3xl font-bold text-secondary py-6'>We deliver almost all over Bangladesh</h1>
            </div>

            <div className=' rounded-2xl w-full my-10'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='h-[650px] '

                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        servicesCenters.map((center, index) =>
                            <Marker
                                key={index}
                                position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>
                                        {center.district}
                                    </strong> <br />

                                    Service Area: {center.covered_area.join(', ')}
                                </Popup>
                            </Marker>)
                    }

                </MapContainer>
            </div>


        </div>
    );
};

export default Coverage;