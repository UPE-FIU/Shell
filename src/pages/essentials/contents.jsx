/**
 * Essentials page contaents
 */

import React from "react";
import { ZoomableImg } from "../../components";
import data from "../../config/data/essentials";
import "./styles.css";
import tracks from "../../config/data/tracks.json";

let {
  direction,
  Northbound,
  Southbound,
  parking,
  transportation,
  shouldBring,
  tracksDesc
} = data;

export const ParkingCardContent = (
  <div className="essentials-parking-card-content">
    <div className="arena-info-container">
      <div className="arena-maps-image-container">
        <ZoomableImg
          zoomContainer={{ zIndex: 1000 }}
          imageLink={require("../../assets/site/ShellMap.png")}
        />
      </div>
      <div className="parking-content">
        <p className="essential-item-header">{direction.title} </p>
        <br />
        <p>{direction.venue}</p>
        <br />
        <p>{direction.school}</p>
        <br />
        <p>{direction.campus}</p>
        <br />
        {direction.directions.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>

    <div>
      <br />
      <br />
      <p className="essential-item-header">{parking.title}</p>
      <br />
      <p>{parking.description}</p>
      <br />
      <br />
    </div>
    <div>
      <p className="essential-item-header">{transportation.title}</p>
      <br />
      <p>{transportation.description}</p>
    </div>
  </div>
);

const { description, essential, optional } = shouldBring;
export const ImportantItemsCardContent = (
  <div className="essentials-items-card-content">
    {/* description */}
    <p style={{ margin: "25px 0 50px" }}>{description}</p>
    <div className="essential-lists-container">
      {/* optional items */}
      <div className="essential-card">
        <p className="essential-item-header">{optional.title}</p>
        <ul>
          {optional.items.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* essential items */}
      <div className="essential-card">
        <p className="essential-item-header">{essential.title}</p>
        <ul>
          {essential.items.map((item, i) => (
            <li key={i}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const LearningTracksCardContent = (
  <div className="learning-tracks-container">
    <div style={{ margin: "25px 0 50px" }}>
      <p>{tracksDesc}</p>
    </div>
    {tracks.map((data, i) => (
      <div key={i}>
        <p
          className="essential-item-header"
          style={{ textAlign: "center", width: "40%" }}
        >
          {data.title}
        </p>
        <div className="track-overview">
          <img
            className="essentials-holder-circle"
            alt="cirlcePlaceholder"
            src={require(`../../assets/tracks/${data.icon}`)}
          />
          <div className="track-details">
            <p>{data.description}</p>
            <ul>
              {data.techs.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className='track-software'>
          <p style={{ width: '100%', margin: '0 0 25px' }}>
            {'Required Software & How to Get Them?'}
          </p>

          {data.softwareNames.map((softwareLinks, i) => (
            <button
              key={i}
              className='software-button'
              onClick={() => window.open('https://Shellhacks.net')}
            >
              {softwareLinks}
            </button>
          ))}
        </div> */}
      </div>
    ))}
  </div>
);
