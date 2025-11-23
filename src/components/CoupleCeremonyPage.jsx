import React from 'react';
import './CoupleCeremonyPage.css';

export default function CoupleCeremonyPage() {
    return (
        <div className="ceremony-bg">
            <div className="circle collage">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80" alt="Bouquet" />
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80" alt="Couple Ring" />
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" alt="Flowers" />
                <div className="deco-circle deco1"></div>
                <div className="deco-circle deco2"></div>
            </div>
            <div className="ceremony-content">
                <h1 className="ceremony-title">Wedding Ceremony</h1>
                <p className="ceremony-desc">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                </p>
                <small>
                    Images from <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">Freepik</a>
                </small>
                <br />
                <button className="ceremony-btn">READ MORE</button>
            </div>
        </div>
    );
}