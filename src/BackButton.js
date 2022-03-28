import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";

function BackButton() {
    const navigate = useNavigate();

    return (
        <div>
            <a href="#" onClick={() => navigate(-1)} class="back">›</a>
            <a href="#" onClick={() => navigate(1)} class="forward">‹</a>
        </div>
    );
}

export default BackButton;