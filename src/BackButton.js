import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";

function BackButton() {
    const navigate = useNavigate();
    return (
        <div className="nav">
            <a href="#" onClick={() => navigate(-1)} className="back">›</a>
            <a href="#" onClick={() => navigate(1)} className="forward">‹</a>
        </div>
    );
}

export default BackButton;