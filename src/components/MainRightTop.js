import React from 'react';

function MainRightTop() {
  return (
    <div className="topCard">
        <div className="topCard_name"></div>
        <h2>Statistics</h2>
        <a href="#">View</a>
        <div className="earning">
            <p>
                Artwork Solid <span>187</span>
            </p>
            <p>
                Artwork Cancelled<span>5</span>
            </p>
            <p>
                Artwork Penddind<span>25</span>
            </p>
            <p>
                Arts Delivered<span>200</span>
            </p>
            <p>
                Total Earning<span>262 EtH</span>
            </p>

        </div>
    </div>
  );
}

export default MainRightTop;