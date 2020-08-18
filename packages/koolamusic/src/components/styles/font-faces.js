import React from "react";
import { Global, css, connect } from "frontity";

/* ---------- Import custom fonts here --------------- */
import SoraMedium from '../../fonts/custom/Sora-Medium.ttf'
import SoraRegular from '../../fonts/custom/Sora-Regular.ttf'

// Paragraph
import FreightBook from '../../fonts/custom/FreightTextW01-Book.ttf'
import CrimsonProRegular from "../../fonts/custom/CrimsonPro-Regular.ttf"

// Subtitle
import BarlowRegular from '../../fonts/custom/Barlow-Regular.ttf'
import PTSansRegular from '../../fonts/custom/PTSans-Regular.ttf'

const fonts = {
  title: [SoraRegular, SoraMedium],
  paragraph: [FreightBook, CrimsonProRegular],
  subtitle: [BarlowRegular, PTSansRegular],
};


// Sora wins the Title Face Battle
const FontFace = ({ state }) => {
  const font = fonts["title"]
  const subtitle = fonts["subtitle"]
  const paragraph = fonts["paragraph"]

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Barlow";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${subtitle[0]}) format("woff2");
        }

        @font-face {
          font-family: "FreightText W01 Book";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${paragraph[0]}) format("woff2");
        }

        @font-face {
          font-family: "CrimsonPro";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${paragraph[1]}) format("woff2");
        }

        @font-face {
          font-family: "Sora";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "Sora";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }

        @font-face {
          font-family: "Sora";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);
