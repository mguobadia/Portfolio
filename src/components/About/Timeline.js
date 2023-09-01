import React from "react";
import "./style.css";
import { Chrono } from "react-chrono";
import data from "./TimelineData";

export default function Timeline() {
  return (
    <div className="Timeline">
      <div style={{ width: "95%" }}>
        <Chrono
          items={data}
          mode="HORIZONTAL"
          showAllCardsHorizontal
          cardWidth={450}
          cardHeight={300}
          contentDetailsHeight={100}
          fontSizes={{
            title: "1rem"
          }}
          theme={{
            primary: '#8a4ca8',
            secondary: '#8a4ca8',
            cardBgColor: 'white',
            titleColor: 'white',
            titleColorActive: 'white',
            cardTitleColor: '#8a4ca8',
            cardSubtitleColor: '#8a4ca8',
            cardDetailedTextColor: 'white',
          }}
          slideShow
        />
      </div>
    </div>
  );
}
