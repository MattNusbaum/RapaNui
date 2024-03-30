import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import App from './App.js';
import map from './map.js'
import HomePage from './Home.js'
import About from './about.js';

const Main = () => {
    const [token, setToken] = useState(null);
    const [selectedTrackID, setSelectedTrackID] = useState(null);
    return (
        <div>
            {/* Routes */}
            <Routes>
                {/* Homepage */}
                <Route path='/' element={<HomePage />}/>
                {/*  Page */}
                <Route path='/map' element={<App 
                    token={token} 
                    setToken={setToken} 
                    setSelectedTrackID={setSelectedTrackID} />} />
                {/* Audio Features Page */}
                <Route path='/audiofeatures' element={<AudioFeatures 
                    token={token} 
                    trackID={selectedTrackID}/>} />
                {/* History Page */}
                <Route path='/recent' element={<RecentSearch 
                    token={token} 
                    setSelectedTrackID={setSelectedTrackID}/>} />
                {/* View Similar Tracks / Filters Page */}
                <Route path='/filter' element={<FilterTracks 
                    token={token} 
                    trackID={selectedTrackID}
                    setSelectedTrackID={setSelectedTrackID}/>} />
            </Routes>
        </div>
    );
}

export default Main;