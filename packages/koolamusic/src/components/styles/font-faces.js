import React from "react";
import { Global, css, connect } from "frontity";
import InterMedium from "../../fonts/inter/Inter-Medium.woff2";
import InterBold from "../../fonts/inter/Inter-Bold.woff2";
import InterSemiBold from "../../fonts/inter/Inter-SemiBold.woff2";
import InterMediumUS from "../../fonts/inter/Inter-Medium-US-ASCII.woff2";
import InterBoldUS from "../../fonts/inter/Inter-Bold-US-ASCII.woff2";
import InterSemiBoldUS from "../../fonts/inter/Inter-SemiBold-US-ASCII.woff2";
import InterMediumLatin from "../../fonts/inter/Inter-Medium-LATIN.woff2";
import InterBoldLatin from "../../fonts/inter/Inter-Bold-LATIN.woff2";
import InterSemiBoldLatin from "../../fonts/inter/Inter-SemiBold-LATIN.woff2";

/* ---------- Import custom fonts here --------------- */
import Epilogue from '../../fonts/custom/Epilogue-Medium.ttf'
import GTWalsheim from '../../fonts/custom/GTWalsheim-Medium.ttf'
import Sora from '../../fonts/custom/Sora-SemiBold.ttf'

// Paragraph
import FreightBook from '../../fonts/custom/FreightTextW01-Book.ttf'
import CrimsonProRegular from "../../fonts/custom/CrimsonPro-Regular.ttf"

// Subtitle
import BarlowRegular from '../../fonts/custom/Barlow-Regular.ttf'
import PTSansRegular from '../../fonts/custom/PTSans-Regular.ttf'

const fonts = {
  "us-ascii": [InterMediumUS, InterSemiBoldUS, InterBoldUS],
  latin: [InterMediumLatin, InterSemiBoldLatin, InterBoldLatin],
  all: [InterMedium, InterSemiBold, InterBold],
  title: [Epilogue, GTWalsheim, Sora],
  subtitle: [BarlowRegular, PTSansRegular],
  paragraph: [FreightBook, CrimsonProRegular],
};


// Sora wins the Title Face Battle
const FontFace = ({ state }) => {
  // const font = fonts[state.theme.fontSets] || fonts["all"];
  const font = fonts["title"]
  const subtitle = fonts["subtitle"]
  const paragraph = fonts["paragraph"]

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Epilogue";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "GT Walsheim";
          font-style: normal;
          font-weight: 600;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }

        @font-face {
          font-family: "Sora";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font[2]}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);
