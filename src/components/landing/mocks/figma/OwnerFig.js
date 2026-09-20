// Ported verbatim from sai-landing-slim/components/components-global.js (Figma-materialized
// dashboard bundle: Own2.Dash/Sources/Questions/Handbook/Settings).
// Only changes from the original: (1) the trailing `window.*` assignments were replaced with
// ES exports, (2) the 4 image references the original bundle itself never shipped a file for
// (assets/sai-mark-blue.png, icon-github.png, icon-slack.png, icon-local-file.png — see
// sai-landing-slim/README.md "원본에 없던 이미지") were pointed at real project assets instead:
// the sai-mark-blue 146x56 logo lockup is rebuilt from the actual blue-toned icon/wordmark PNGs
// that sai-landing-slim's own onboarding bundle ships (assets/onb-inline-c9ecaaaf.png /
// onb-inline-afcd323a.png — the real "sai-mark-blue" pair, just extracted under a different
// name), placed as two background-image layers at the original icon/wordmark coordinates. The 3 source
// icons reuse this project's existing github/slack/local-file svgs. Everything else — layout,
// styles, text — is untouched.
import React from 'react';
import symbolIcon from '../../../../assets/landing/figmocks/onb-inline-c9ecaaaf.png';
import wordmarkIcon from '../../../../assets/landing/figmocks/onb-inline-afcd323a.png';
import githubIcon from '../../../../assets/owner/github.svg';
import slackIcon from '../../../../assets/owner/slack.svg';
import localFileIcon from '../../../../assets/owner/local-file.svg';
// Components bundle — 6 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 0:5 Background+Border
function BackgroundBorder(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      height: 791,
      borderRadius: 30,
      background: "radial-gradient(1159.939px 513.675px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(1070.723px 399.534px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 23.16,
      width: 1257.67,
      height: 59
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56 0 L 0 0 L 0 56 L 56 56 L 56 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 15.07,
      width: 67,
      height: 28.86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.162,
      top: 0,
      width: 66.677,
      height: 28.86,
      overflow: "hidden",
      backgroundImage: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.677,
    height: 28.722,
    viewBox: "0 0 66.677 28.722",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.677,
      height: 28.722
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.677 0 L 0 0 L 0 28.722 L 66.677 28.722 L 66.677 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 434.84,
      top: 3.5,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 8px 20px -12px rgba(23,44,90,0.22), inset 0px 1px 0px 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 6.64,
      width: 85.64,
      height: 38.73,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)",
      boxShadow: "0px 5px 10px 0px rgba(37,99,235,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.66,
      width: 47.986,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uB300\uC2DC\uBCF4\uB4DC")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 118.63,
      top: 17.3,
      width: 36.039,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC18C\uC2A4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 199.34,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC9C8\uBB38"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 268.14,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uD578\uB4DC\uBD81"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 336.94,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC124\uC815")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 944.44,
      top: 2.34,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 14.16,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(216,216,222)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 10.16,
      width: 27.04,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "Ming"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 95.87,
      top: 10.66,
      width: 112.574,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Ho Chi Minh 13:45"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 32.66,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 28.66,
      width: 29.627,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 135.47,
      top: 29.16,
      width: 72.912,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Seoul 15:45")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1177.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      color: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.667 15 C 1.208 15 0.816 14.837 0.49 14.511 C 0.164 14.185 0.001 13.792 0 13.333 L 0 1.667 C 0 1.208 0.163 0.816 0.49 0.49 C 0.817 0.164 1.209 0.001 1.667 0 L 7.5 0 L 7.5 1.667 L 1.667 1.667 L 1.667 13.333 L 7.5 13.333 L 7.5 15 L 1.667 15 Z M 10.833 11.667 L 9.687 10.458 L 11.813 8.333 L 5 8.333 L 5 6.667 L 11.813 6.667 L 9.687 4.542 L 10.833 3.333 L 15 7.5 L 10.833 11.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1221.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.8,
      top: 10.5,
      width: 10.697,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(255,255,255)"
    }
  }, "\uAE40"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 102.16,
      width: 319.072,
      height: 44,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      whiteSpace: "nowrap",
      lineHeight: "44px",
      letterSpacing: "-1.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uC548\uB155\uD558\uC138\uC694, \uAE40\uB300\uD45C\uB2D8"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 157.66,
      width: 104.602,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(107,107,115)"
    }
  }, "\uC774\uBC88 \uC8FC \uC9C8\uBB38 1\uAC74 \uC911 "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 152, top: 157.66, width: 202,
      height: 17,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(23,23,27)"
    }
  }, "1\uAC74\uC740 SAi\uAC00 \uB2F5\uD588\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 193.16,
      width: 303.91,
      height: 250.38,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 303.91,
      height: 250.38,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14.84,
      top: 20.84,
      width: 105,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      letterSpacing: "-0.200px",
      color: "rgb(107,107,115)"
    }
  }, "SAi \uD574\uACB0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 76.96,
      top: 49.88,
      width: 150,
      height: 150,
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.213,
      top: -0.207,
      width: 150,
      height: 150,
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.333,
      top: 0.166,
      width: 150,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 150,
      height: 150,
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.156,
      top: 8.803,
      width: 130,
      height: 130,
      borderRadius: "50%",
      backgroundColor: "transparent"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute", left: 10.156, top: 8.803, width: 130, height: 130, borderRadius: "50%", background: "conic-gradient(rgb(37,99,235) 0turn 0.82turn, rgb(239,239,241) 0.82turn 1turn)", WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 0 41px, #000 42px)", maskImage: "radial-gradient(circle at 50% 50%, transparent 0 41px, #000 42px)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 150,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 33.719,
      top: 51.01,
      width: 95.863,
      height: 40,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "39.900px",
      letterSpacing: "-1.600px",
      color: "rgb(23,23,27)"
    }
  }, "82%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 95.58,
      top: 217.54,
      width: 8,
      height: 8,
      borderRadius: 2,
      backgroundColor: "rgb(37,99,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 109.84,
      top: 213.84,
      width: 83,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(107,107,115)"
    }
  }, "SAi 1\uAC74"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 155.86,
      top: 217.54,
      width: 8,
      height: 8,
      borderRadius: 2,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 169.86,
      top: 214.06,
      width: 38.787,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(107,107,115)"
    }
  }, "\uB300\uD45C 0\uAC74")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 345.08,
      top: 193.16,
      width: 303.92,
      height: 255.34,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 303.92,
      height: 255.34,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 20.5,
      width: 80.705,
      height: 15.38,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      letterSpacing: "-0.200px",
      color: "rgb(107,107,115)"
    }
  }, "\uD578\uB4DC\uBD81 \uD65C\uC6A9 \uD69F\uC218"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14.92,
      top: 49.84,
      width: 137,
      height: 38,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "38px",
      letterSpacing: "-1.600px",
      color: "rgb(23,23,27)"
    }
  }, "1.8\uD68C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 105.28,
      top: 72.38,
      width: 47.064,
      height: 14.72,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "14.720px",
      color: "rgb(160,160,168)"
    }
  }, "\uB2F5\uBCC0 1\uAC74\uB2F9"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 103.88,
      width: 250.2,
      height: 13.97,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.5,
      width: 236.638,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(107,107,115)"
    }
  }, "\uBA74\uC811 \uBAA8\uB4DC\uB294 1\uBD84 \uB2F5\uBCC0\uACFC \uD559\uC2B5\uC6A9 \uC0C1\uC138 \uC124\uBA85\uC744 \uBD84\uB9AC\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 273.37,
      top: 103.545,
      width: 40,
      height: 14,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.340px",
      color: "rgb(23,23,27)"
    }
  }, "4\uD68C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 123.54,
      width: 273.59,
      height: 8,
      borderRadius: 999,
      background: "linear-gradient(rgb(37,99,235),rgb(37,99,235)), linear-gradient(rgb(240,240,242),rgb(240,240,242))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 141.54,
      width: 250.2,
      height: 13.97,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.5,
      width: 246.46,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(107,107,115)"
    }
  }, "\uD504\uB86C\uD504\uD2B8 \uBCC0\uACBD\uC740 \uCD5C\uC18C 5\uAC1C\uC758 \uC0D8\uD50C \uC9C8\uBB38\uC73C\uB85C \uD68C\uADC0 \uD655\uC778\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 273.37,
      top: 140.545,
      width: 40,
      height: 14,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.340px",
      color: "rgb(23,23,27)"
    }
  }, "4\uD68C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 161.21,
      width: 273.59,
      height: 8,
      borderRadius: 999,
      background: "linear-gradient(rgb(147,180,251),rgb(147,180,251)), linear-gradient(rgb(240,240,242),rgb(240,240,242))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 179.21,
      width: 250.2,
      height: 13.97,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.5,
      width: 232.256,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(107,107,115)"
    }
  }, "\uC6F9 API \uC124\uC815 \uBCC0\uACBD\uC740 gunicorn \uC7AC\uC2DC\uC791\uC73C\uB85C \uBC18\uC601\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 273.37,
      top: 178.545,
      width: 40,
      height: 14,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.340px",
      color: "rgb(23,23,27)"
    }
  }, "4\uD68C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 198.87,
      width: 273.59,
      height: 8,
      borderRadius: 999,
      background: "linear-gradient(rgb(147,180,251),rgb(147,180,251)), linear-gradient(rgb(240,240,242),rgb(240,240,242))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 220.88,
      width: 59.289,
      height: 13.97,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(160,160,168)"
    }
  }, "\uC0C1\uC704 3\uAC1C \uD56D\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 663,
      top: 193.16,
      width: 303.91,
      height: 255.34,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 303.91,
      height: 255.34,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 20.5,
      width: 118.822,
      height: 15.38,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      letterSpacing: "-0.200px",
      color: "rgb(107,107,115)"
    }
  }, "\uC774\uBC88 \uC8FC \uC808\uC57D\uD55C \uB300\uD45C \uC2DC\uAC04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 49.88,
      width: 56.986,
      height: 38,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "38px",
      letterSpacing: "-1.600px",
      color: "rgb(23,23,27)"
    }
  }, "5m"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 80.42,
      top: 72.38,
      width: 25.632,
      height: 14.72,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "14.720px",
      color: "rgb(31,122,69)"
    }
  }, "+5m"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 146.88,
      width: 273.59,
      height: 58.001,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 273.590,
    height: 54.001,
    viewBox: "0 0 273.590 54.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 273.59,
      height: 54.001,
      color: "rgba(143,211,168,0.16)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 52.001 L 54.718 0 L 109.436 49.637 L 164.154 44.91 L 218.872 52.001 L 273.59 49.637 L 273.59 54.001 L 0 54.001 L 0 52.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 273.590,
    height: 52.001,
    viewBox: "0 0 273.590 52.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 273.59,
      height: 52.001,
      color: "rgb(76,183,122)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.674 51.292 C -1.065 51.664 -1.081 52.283 -0.709 52.675 C -0.337 53.066 0.282 53.082 0.674 52.71 L 0 52.001 L -0.674 51.292 Z M 54.718 0 L 55.375 -0.724 C 54.996 -1.068 54.415 -1.062 54.044 -0.709 L 54.718 0 Z M 109.436 49.637 L 108.779 50.361 C 108.98 50.544 109.249 50.635 109.52 50.612 L 109.436 49.637 Z M 164.154 44.91 L 164.28 43.94 C 164.21 43.931 164.14 43.929 164.07 43.935 L 164.154 44.91 Z M 218.872 52.001 L 218.746 52.971 C 218.802 52.978 218.858 52.98 218.914 52.978 L 218.872 52.001 Z M 273.632 50.614 C 274.172 50.591 274.59 50.135 274.567 49.595 C 274.544 49.055 274.087 48.637 273.548 48.66 L 273.59 49.637 L 273.632 50.614 Z M 0 52.001 L 0.674 52.71 L 55.392 0.709 L 54.718 0 L 54.044 -0.709 L -0.674 51.292 L 0 52.001 Z M 54.718 0 L 54.061 0.724 L 108.779 50.361 L 109.436 49.637 L 110.093 48.913 L 55.375 -0.724 L 54.718 0 Z M 109.436 49.637 L 109.52 50.612 L 164.238 45.884 L 164.154 44.91 L 164.07 43.935 L 109.352 48.663 L 109.436 49.637 Z M 164.154 44.91 L 164.028 45.88 L 218.746 52.971 L 218.872 52.001 L 218.998 51.031 L 164.28 43.94 L 164.154 44.91 Z M 218.872 52.001 L 218.914 52.978 L 273.632 50.614 L 273.59 49.637 L 273.548 48.66 L 218.83 51.024 L 218.872 52.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 284.25,
      top: 196.01,
      width: 9,
      height: 9,
      borderRadius: 50,
      backgroundColor: "rgb(76,183,122)",
      boxShadow: "inset 0 0 0 2px rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9,
      height: 9,
      borderRadius: 50,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 0px 0px 1px rgba(76,183,122,0.45)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.16,
      top: 220.38,
      width: 131.5,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(160,160,168)"
    }
  }, "\uCD5C\uADFC 6\uC8FC \uCD94\uC774 \xB7 \uB2F5\uBCC0 1\uAC74\uB2F9 5\uBD84")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 663,
      top: 464.54,
      width: 621.84,
      height: 290.91,
      borderRadius: 22,
      background: "linear-gradient(160deg, rgb(16,22,58) 0.00%, rgb(23,29,63) 60.00%, rgb(28,34,71) 100.00%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 621.84,
      height: 290.91,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 18px 40px -14px rgba(16,22,58,0.5), inset 0px 1px 0px 1px rgba(255,255,255,0.06)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.66,
      top: 20,
      width: 134.463,
      height: 18.6,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "18.600px",
      letterSpacing: "-0.300px",
      color: "rgb(255,255,255)"
    }
  }, "\uB300\uD45C\uB2D8\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC9C8\uBB38"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.66,
      top: 42.1,
      width: 159.879,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgba(255,255,255,0.6)"
    }
  }, "\uD578\uB4DC\uBD81\uC5D0 \uADFC\uAC70\uAC00 \uC5C6\uB294 \uC9C8\uBB38 \xB7 \uC804\uCCB4 3\uAC74"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 595.17,
      top: 31.28,
      width: 6.325,
      height: 14,
      opacity: 0.9,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "14px",
      color: "rgb(255,255,255)"
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.66,
      top: 70.57,
      width: 580.51,
      height: 43.7,
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 8.84,
      width: 26,
      height: 26,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9,
      width: 8,
      height: 8,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 6,
      width: 526.51,
      height: 16.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 526.65,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uB300\uD45C\uB2D8, \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uBBF8\uD305 \uC804\uC5D0 \uC81C\uAC00 \uC900\uBE44\uD574\uC57C \uD560 \uC790\uB8CC\uB098 \uD655\uC778\uD560 \uC548\uAC74\uC774 \uC788\uC744\uAE4C\uC694? \uC774\uBC88 \uBBF8\uD305\uC5D0\uC11C \uAE30\uB300\uD558\uC2DC\uB294 \uACB0\uACFC\uB098 \uC81C\uAC00 \uB9E1\uAC8C \uB420 \uC5C5\uBB34\uAC00 \uC788\uB2E4\uBA74 \uBBF8\uB9AC \uC54C\uB824\uC8FC\uC2DC\uBA74 \uC900\uBE44\uD558\uACA0\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 24.2,
      width: 526.51,
      height: 13.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 166.929,
      height: 12.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgba(255,255,255,0.5)"
    }
  }, "Ming \xB7 \uACF5\uD1B5 \uADDC\uCE59 \xB7 09.06 15:23"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.66,
      top: 122.26,
      width: 580.51,
      height: 43.7,
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 8.85,
      width: 26,
      height: 26,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9,
      width: 8,
      height: 8,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 6,
      width: 526.51,
      height: 16.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 519.88,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uC548\uB155\uD558\uC138\uC694. API \uD0A4, \uD1A0\uD070, DB \uBE44\uBC00\uBC88\uD638\uC640 secrets.json \uAC12\uC740 \uC5B4\uB514\uC5D0 \uC548\uC804\uD558\uAC8C \uC800\uC7A5\uD558\uACE0 \uD655\uC778\uD574\uC57C \uD558\uB294\uC9C0 \uC54C\uB824\uC8FC\uC2DC\uACA0\uC5B4\uC694?")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 24.21,
      width: 526.51,
      height: 13.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 166.929,
      height: 12.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgba(255,255,255,0.5)"
    }
  }, "Ming \xB7 \uACF5\uD1B5 \uADDC\uCE59 \xB7 08.20 10:09"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.66,
      top: 173.96,
      width: 580.51,
      height: 43.7,
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 8.84,
      width: 26,
      height: 26,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9,
      width: 8,
      height: 8,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 6,
      width: 526.51,
      height: 16.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 525.73,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uB300\uD45C\uB2D8, ai-cs-copilot\uC5D0\uC11C \uAC1C\uC778\uD654 \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uC790\uC758 \uC5F0\uC2B5 \uB2F5\uBCC0\uC744 \uC800\uC7A5\uD574\uB3C4 \uB418\uB294\uC9C0 \uD655\uC778 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4. \uC800\uC7A5 \uAC00\uB2A5 \uC5EC\uBD80\uC640 \uD544\uC694\uD55C \uB3D9\uC758\xB7\uBCF4\uAD00 \uAE30\uC900\uB3C4 \uD568\uAED8 \uC815\uD574 \uC8FC\uC2DC\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 24.2,
      width: 526.51,
      height: 13.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 204.359,
      height: 12.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgba(255,255,255,0.5)"
    }
  }, "Ming \xB7 Ai-cs-copilot \xB7 08.20 04:09")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: 465,
      width: 623,
      height: 291,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "0.667px solid rgb(239,239,241)",
      borderBottom: "0.667px solid rgb(239,239,241)",
      borderLeft: "0.667px solid rgb(239,239,241)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.667,
      top: 18.667,
      width: 611.333,
      height: 19.333
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 126,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.2400000095367432,
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "SAi\uAC00 \uB300\uC2E0 \uB2F5\uD55C \uC21C\uAC04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 545.375,
      top: 2.333,
      width: 44,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(37,99,235)"
    }
  }, "\uC624\uB298 12\uAC74")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21,
      top: 50,
      width: 588,
      height: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.125,
      width: 588,
      height: 56,
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "1px solid rgb(239,239,241)",
      borderBottom: "1px solid rgb(239,239,241)",
      borderLeft: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 21.448,
      width: 32,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "02:14"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      top: 11.667,
      width: 479.458,
      height: 32.896
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 156,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18.200px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC2A4\uD14C\uC774\uC9D5 \uBC30\uD3EC\uB294 \uB204\uAC00 \uD558\uB098\uC694?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 18.198,
      width: 489.458,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "14.700px",
      color: "rgb(160,160,168)"
    }
  }, "\uADFC\uAC70 \xB7 slack #dev-general \xB7 07.22"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56.125,
      width: 588,
      height: 55,
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "1px solid rgb(239,239,241)",
      borderBottom: "1px solid rgb(239,239,241)",
      borderLeft: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 21.448,
      width: 32,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "07:40"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      top: 11.667,
      width: 479.458,
      height: 32.896
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 172,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18.200px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "PR \uB9AC\uBDF0\uC5B4\uB294 \uB204\uAD6C\uB85C \uC9C0\uC815\uD558\uB098\uC694?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 18.198,
      width: 489.458,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "14.700px",
      color: "rgb(160,160,168)"
    }
  }, "\uADFC\uAC70 \xB7 \uD578\uB4DC\uBD81 \xB7 payment-api"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 111.125,
      width: 588,
      height: 56,
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "1px solid rgb(239,239,241)",
      borderBottom: "1px solid rgb(239,239,241)",
      borderLeft: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 21.448,
      width: 32,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "09:05"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      top: 11.667,
      width: 479.458,
      height: 32.896
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 167,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18.200px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC5F0\uCC28\uB294 \uC0AC\uC804 \uC2B9\uC778\uC774 \uD544\uC694\uD55C\uAC00\uC694?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 18.198,
      width: 489.458,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "14.700px",
      color: "rgb(160,160,168)"
    }
  }, "\uADFC\uAC70 \xB7 \uC0AC\uB0B4 \uC704\uD0A4 \xB7 People"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 167.125,
      width: 588,
      height: 55,
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "1px solid rgb(239,239,241)",
      borderBottom: "1px solid rgb(239,239,241)",
      borderLeft: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 21.448,
      width: 32,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "21:40"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      top: 11.667,
      width: 479.458,
      height: 32.896
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 167,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18.200px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uD56B\uD53D\uC2A4\uB294 \uC81C\uAC00 \uBC30\uD3EC\uD574\uB3C4 \uB418\uB098\uC694?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 18.198,
      width: 489.458,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "14.700px",
      color: "rgb(160,160,168)"
    }
  }, "\uADFC\uAC70 \xB7 \uADFC\uAC70 \uC5C6\uC74C \u2192 \uB300\uD45C\uB2D8\uAED8 \uC804\uB2EC"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 984,
      top: 193,
      width: 301,
      height: 255.34,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "0.667px solid rgb(239,239,241)",
      borderBottom: "0.667px solid rgb(239,239,241)",
      borderLeft: "0.667px solid rgb(239,239,241)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 18.667,
      width: 290,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      lineHeight: 1.2300000190734863,
      letterSpacing: "-0.200px",
      color: "rgb(107,107,115)"
    }
  }, "\uC313\uC778 \uD578\uB4DC\uBD81"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 48.667,
      width: 282,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 79.56,
      height: 38,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "38px",
      letterSpacing: "-1.600px",
      color: "rgb(23,23,27)"
    }
  }, "342"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 74.26,
      top: 21.333,
      width: 60.615,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      color: "rgb(31,122,69)"
    }
  }, "\uC774\uBC88 \uC8FC +7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 100.667,
      width: 282,
      height: 103
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 64.167,
      width: 39,
      height: 39
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 41.167,
    height: 20,
    viewBox: "0 0 41.167 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.167,
      height: 20,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(199,217,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 35.167 0 C 38.48 0 41.167 2.686 41.167 6 L 41.167 14 C 41.167 17.314 38.48 20 35.167 20 L 6 20 C 2.686 20 0 17.314 0 14 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.25,
      top: 26,
      width: 24.667,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "3\uC6D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 45,
      top: 54.167,
      width: 40,
      height: 49
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 41.167,
    height: 30,
    viewBox: "0 0 41.167 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.167,
      height: 30,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(199,217,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 35.167 0 C 38.48 0 41.167 2.686 41.167 6 L 41.167 24 C 41.167 27.314 38.48 30 35.167 30 L 6 30 C 2.686 30 0 27.314 0 24 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.25,
      top: 36,
      width: 24.667,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "4\uC6D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 91,
      top: 42.167,
      width: 40,
      height: 61
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 41.167,
    height: 42,
    viewBox: "0 0 41.167 42",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.167,
      height: 42,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(199,217,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 35.167 0 C 38.48 0 41.167 2.686 41.167 6 L 41.167 36 C 41.167 39.314 38.48 42 35.167 42 L 6 42 C 2.686 42 0 39.314 0 36 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.25,
      top: 48,
      width: 24.667,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "5\uC6D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 137,
      top: 30.167,
      width: 39,
      height: 73
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 41.167,
    height: 54,
    viewBox: "0 0 41.167 54",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.167,
      height: 54,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(199,217,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 35.167 0 C 38.48 0 41.167 2.686 41.167 6 L 41.167 48 C 41.167 51.314 38.48 54 35.167 54 L 6 54 C 2.686 54 0 51.314 0 48 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.25,
      top: 60,
      width: 24.667,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "6\uC6D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 21.167,
      width: 39,
      height: 82
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 41.167,
    height: 63,
    viewBox: "0 0 41.167 63",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.167,
      height: 63,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(199,217,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 35.167 0 C 38.48 0 41.167 2.686 41.167 6 L 41.167 57 C 41.167 60.314 38.48 63 35.167 63 L 6 63 C 2.686 63 0 60.314 0 57 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.25,
      top: 69,
      width: 24.667,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "7\uC6D4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 229,
      top: 14.167,
      width: 39,
      height: 89
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 41.167,
    height: 70,
    viewBox: "0 0 41.167 70",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 41.167,
      height: 70,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 35.167 0 C 38.48 0 41.167 2.686 41.167 6 L 41.167 64 C 41.167 67.314 38.48 70 35.167 70 L 6 70 C 2.686 70 0 67.314 0 64 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.25,
      top: 76,
      width: 24.667,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "8\uC6D4"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 215.667,
      width: 290,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "\uBBF8\uD655\uC778 18\uAC74")));
}

// figma node: 0:159 Background+Border+Shadow
function BackgroundBorderShadow(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      height: 804,
      overflow: "hidden",
      borderRadius: 30,
      background: "radial-gradient(1159.939px 522.118px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(1070.723px 406.100px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9), 0px 2px 6px 0px rgba(23,44,90,0.06), 0px 30px 80px -34px rgba(23,44,90,0.3)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 23.16,
      width: 1257.67,
      height: 59
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56 0 L 0 0 L 0 56 L 56 56 L 56 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 15.07,
      width: 67,
      height: 28.86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.162,
      top: 0,
      width: 66.677,
      height: 28.86,
      overflow: "hidden",
      backgroundImage: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.677,
    height: 28.722,
    viewBox: "0 0 66.677 28.722",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.677,
      height: 28.722
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.677 0 L 0 0 L 0 28.722 L 66.677 28.722 L 66.677 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 434.84,
      top: 3.5,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 8px 20px -12px rgba(23,44,90,0.22), inset 0px 1px 0px 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 26,
      top: 17.3,
      width: 47.986,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uB300\uC2DC\uBCF4\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 250.14,
      top: 6.64,
      width: 73.73,
      height: 38.73,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)",
      boxShadow: "0px 5px 10px 0px rgba(37,99,235,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.66,
      width: 36.039,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uD578\uB4DC\uBD81")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 118.63,
      top: 17.3,
      width: 36.039,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC18C\uC2A4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 199.34,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC9C8\uBB38"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 336.94,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC124\uC815")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 944.44,
      top: 2.34,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 14.16,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(216,216,222)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 10.16,
      width: 27.04,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "Ming"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 95.87,
      top: 10.66,
      width: 112.574,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Ho Chi Minh 13:46"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 32.66,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 28.66,
      width: 29.627,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 135.47,
      top: 29.16,
      width: 72.912,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Seoul 15:46")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1177.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      color: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.667 15 C 1.208 15 0.816 14.837 0.49 14.511 C 0.164 14.185 0.001 13.792 0 13.333 L 0 1.667 C 0 1.208 0.163 0.816 0.49 0.49 C 0.817 0.164 1.209 0.001 1.667 0 L 7.5 0 L 7.5 1.667 L 1.667 1.667 L 1.667 13.333 L 7.5 13.333 L 7.5 15 L 1.667 15 Z M 10.833 11.667 L 9.687 10.458 L 11.813 8.333 L 5 8.333 L 5 6.667 L 11.813 6.667 L 9.687 4.542 L 10.833 3.333 L 15 7.5 L 10.833 11.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1221.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.8,
      top: 10.5,
      width: 10.697,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(255,255,255)"
    }
  }, "\uAE40"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 102.16,
      width: 96.248,
      height: 41.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "41.800px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uD578\uB4DC\uBD81"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 151.75,
      width: 356.508,
      height: 15.99,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "15.990px",
      color: "rgb(107,107,115)"
    }
  }, "\uC2B9\uC778\uB41C \uD56D\uBAA9\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC2B9\uC778 \uC804 \uD56D\uBAA9\uC740 \uAC80\uD1A0 \uBCF4\uAD00\uD568\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 747.93,
      top: 117.41,
      width: 255.9,
      height: 51.66,
      borderRadius: 999,
      backgroundColor: "rgb(238,241,246)",
      boxShadow: "inset 0 0 0 1px rgb(223,227,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.16,
      top: 7.17,
      width: 61.09,
      height: 37.33,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 61.09,
      height: 37.33,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 10px 20px -8px rgb(37,99,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.16,
      width: 22.422,
      height: 16.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.990px",
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uC804\uCCB4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 74.26,
      top: 7.17,
      width: 85.29,
      height: 37.33,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(23,44,90,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.16,
      width: 47.622,
      height: 16.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.990px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uD68C\uC0AC \uADDC\uCE59")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 165.55,
      top: 7.17,
      width: 83.19,
      height: 37.33,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 4px 0px rgba(23,44,90,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.16,
      width: 44.525,
      height: 16.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.990px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uD504\uB85C\uC81D\uD2B8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1013.83,
      top: 122.91,
      width: 139.29,
      height: 40.66,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(240,224,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.5,
      top: 13.82,
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.750,
    height: 2.438,
    viewBox: "0 0 9.750 2.438",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.625,
      top: 3.737,
      width: 9.75,
      height: 2.438,
      color: "rgb(154,98,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.65 C -0.359 -0.65 -0.65 -0.359 -0.65 0 L 0 0 Z M 9.75 0 L 10.4 0 C 10.4 -0.359 10.109 -0.65 9.75 -0.65 L 9.75 0 Z M 9.75 2.438 L 9.75 3.088 C 10.109 3.088 10.4 2.796 10.4 2.438 L 9.75 2.438 Z M 0 2.438 L -0.65 2.438 C -0.65 2.796 -0.359 3.088 0 3.088 L 0 2.438 Z M 0 0 L 0 0.65 L 9.75 0.65 L 9.75 0 L 9.75 -0.65 L 0 -0.65 L 0 0 Z M 9.75 0 L 9.1 0 L 9.1 2.438 L 9.75 2.438 L 10.4 2.438 L 10.4 0 L 9.75 0 Z M 9.75 2.438 L 9.75 1.788 L 0 1.788 L 0 2.438 L 0 3.088 L 9.75 3.088 L 9.75 2.438 Z M 0 2.438 L 0.65 2.438 L 0.65 0 L 0 0 L -0.65 0 L -0.65 2.438 L 0 2.438 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.963,
    height: 4.225,
    viewBox: "0 0 7.963 4.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.519,
      top: 6.175,
      width: 7.963,
      height: 4.225,
      color: "rgb(154,98,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.65 C -0.359 -0.65 -0.65 -0.359 -0.65 0 L 0 0 Z M 7.963 0 L 8.613 0 C 8.613 -0.359 8.322 -0.65 7.963 -0.65 L 7.963 0 Z M 7.963 4.225 L 7.963 4.875 C 8.322 4.875 8.613 4.584 8.613 4.225 L 7.963 4.225 Z M 0 4.225 L -0.65 4.225 C -0.65 4.584 -0.359 4.875 0 4.875 L 0 4.225 Z M 0 0 L 0 0.65 L 7.963 0.65 L 7.963 0 L 7.963 -0.65 L 0 -0.65 L 0 0 Z M 7.963 0 L 7.313 0 L 7.313 4.225 L 7.963 4.225 L 8.613 4.225 L 8.613 0 L 7.963 0 Z M 7.963 4.225 L 7.963 3.575 L 0 3.575 L 0 4.225 L 0 4.875 L 7.963 4.875 L 7.963 4.225 Z M 0 4.225 L 0.65 4.225 L 0.65 0 L 0 0 L -0.65 0 L -0.65 4.225 L 0 4.225 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.275,
    height: 1.300,
    viewBox: "0 -0.650 2.275 1.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.362,
      top: 8.125,
      width: 2.275,
      height: 1.2999999523162842,
      color: "rgb(154,98,18)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.65 L 2.275 0.65 L 2.275 0 L 2.275 -0.65 L 0 -0.65 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 35.5,
      top: 12.64,
      width: 56.473,
      height: 15.38,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      letterSpacing: "-0.200px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC80\uD1A0 \uBCF4\uAD00\uD568"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 98.58,
      top: 11.66,
      width: 24.2,
      height: 17.34,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6,
      top: 1.5,
      width: 12.54,
      height: 14,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.340px",
      letterSpacing: "-0.200px",
      color: "rgb(154,98,18)"
    }
  }, "19"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1163.12,
      top: 123.91,
      width: 121.72,
      height: 38.66,
      borderRadius: 999,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 13.32,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 1.5,
      width: 9,
      height: 9,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0 L 3.6 0 L 3.6 9 L 4.5 9 L 5.4 9 L 5.4 0 L 4.5 0 Z M 0 4.5 L 0 5.4 L 9 5.4 L 9 4.5 L 9 3.6 L 0 3.6 L 0 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 36,
      top: 11.64,
      width: 70.109,
      height: 15.38,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uD56D\uBAA9 \uC9C1\uC811 \uCD94\uAC00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 183.07,
      width: 1257.67,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.5,
      width: 50.488,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uC790\uB3D9\uD654 \uBD84\uB958"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 59.54,
      top: 0,
      width: 45.03,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(191,208,248)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      top: 7.5,
      width: 19.343,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(29,78,216)"
    }
  }, "\uC804\uCCB4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 110.57,
      top: 0,
      width: 66.02,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      top: 7.5,
      width: 41.074,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 182.58,
      top: 0,
      width: 66.02,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      top: 7.5,
      width: 41.074,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 254.6,
      top: 0,
      width: 66.02,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      top: 7.5,
      width: 41.074,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 231.07,
      width: 669.73,
      height: 545.77,
      overflow: "hidden",
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.17,
      top: 15.16,
      width: 625.41,
      height: 53.33,
      borderRadius: 16,
      backgroundColor: "rgb(16,24,40)",
      boxShadow: "inset 0 0 0 1px rgb(34,55,106), inset 0px 1px 0px 1px rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.5,
      top: 13.67,
      width: 26,
      height: 26,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.14)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.22)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.344,
    height: 8.448,
    viewBox: "0 0 10.344 8.448",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.724,
      top: 2.931,
      width: 10.344,
      height: 8.448,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.448 0 L 3.939 -0.421 C 3.816 -0.564 3.637 -0.647 3.448 -0.647 L 3.448 0 Z M 4.483 1.207 L 3.992 1.628 C 4.115 1.771 4.294 1.853 4.483 1.853 L 4.483 1.207 Z M 0 0.862 L 0.647 0.862 C 0.647 0.794 0.672 0.746 0.711 0.71 C 0.756 0.667 0.815 0.647 0.862 0.647 L 0.862 0 L 0.862 -0.647 C 0.117 -0.647 -0.647 -0.054 -0.647 0.862 L 0 0.862 Z M 0.862 0 L 0.862 0.647 L 3.448 0.647 L 3.448 0 L 3.448 -0.647 L 0.862 -0.647 L 0.862 0 Z M 3.448 0 L 2.957 0.421 L 3.992 1.628 L 4.483 1.207 L 4.973 0.786 L 3.939 -0.421 L 3.448 0 Z M 4.483 1.207 L 4.483 1.853 L 9.482 1.853 L 9.482 1.207 L 9.482 0.56 L 4.483 0.56 L 4.483 1.207 Z M 9.482 1.207 L 9.482 1.853 C 9.551 1.853 9.598 1.878 9.635 1.917 C 9.677 1.963 9.698 2.022 9.698 2.069 L 10.344 2.069 L 10.991 2.069 C 10.991 1.324 10.398 0.56 9.482 0.56 L 9.482 1.207 Z M 10.344 2.069 L 9.698 2.069 L 9.698 7.586 L 10.344 7.586 L 10.991 7.586 L 10.991 2.069 L 10.344 2.069 Z M 10.344 7.586 L 9.698 7.586 C 9.698 7.698 9.664 7.74 9.65 7.754 C 9.637 7.767 9.594 7.801 9.482 7.801 L 9.482 8.448 L 9.482 9.094 C 9.888 9.094 10.276 8.957 10.565 8.668 C 10.853 8.38 10.991 7.991 10.991 7.586 L 10.344 7.586 Z M 9.482 8.448 L 9.482 7.801 L 0.862 7.801 L 0.862 8.448 L 0.862 9.094 L 9.482 9.094 L 9.482 8.448 Z M 0.862 8.448 L 0.862 7.801 C 0.815 7.801 0.756 7.781 0.711 7.738 C 0.672 7.702 0.647 7.654 0.647 7.586 L 0 7.586 L -0.647 7.586 C -0.647 8.502 0.117 9.094 0.862 9.094 L 0.862 8.448 Z M 0 7.586 L 0.647 7.586 L 0.647 0.862 L 0 0.862 L -0.647 0.862 L -0.647 7.586 L 0 7.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 54.5,
      top: 17.54,
      width: 49.121,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "16.610px",
      letterSpacing: "-0.300px",
      color: "rgb(255,255,255)"
    }
  }, "\uD68C\uC0AC \uADDC\uCE59"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 112.11,
      top: 19.54,
      width: 190.58,
      height: 15.75,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 195.52,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.750px",
      color: "rgba(255,255,255,0.7)"
    }
  }, "\uD504\uB85C\uC81D\uD2B8\uAC00 \uBC14\uB00C\uC5B4\uB3C4 \uADF8\uB300\uB85C \uC801\uC6A9\uB418\uB294 \uC0C1\uC704 \uACC4\uCE35")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 562.75,
      top: 19.5,
      width: 47.902,
      height: 14,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.340px",
      color: "rgb(255,255,255)"
    }
  }, "38\uAC1C \uD56D\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.17,
      top: 76.49,
      width: 583.41,
      height: 28,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(224,224,230)",
      borderLeft: "1px solid rgb(224,224,230)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      top: 9.5,
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 55,
      top: 6.75,
      width: 49.35,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "COMPANY"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 114,
      top: 7.65,
      width: 157.74,
      height: 12.7,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.5,
      width: 165.165,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(180,180,188)"
    }
  }, "\uAC00\uCE58 \xB7 \uBBF8\uC158 \xB7 \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \xB7 \uD578\uB4DC\uBD81 \uC6B4\uC601")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 281.74,
      top: 13.5,
      width: 262.05,
      height: 1,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 553.79,
      top: 7,
      width: 20.275,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)"
    }
  }, "13\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 110.49,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(245,248,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,218,251)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.03,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 270.324,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uC7A5\uC560 \uBC1C\uC0DD \uC2DC \uACF5\uC6A9 Slack \uCC44\uB110\uC5D0 \uC0C1\uD669\uC744 \uACF5\uC720\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)",
      boxShadow: "inset 0 0 0 1px rgb(240,223,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(154,98,18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 172.41,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.03,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 275.057,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "AskSAI\uB294 \uD655\uC815\uB41C \uD578\uB4DC\uBD81 \uADDC\uCE59\uC5D0 \uADFC\uAC70\uD574 \uB2F5\uBCC0\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)",
      boxShadow: "inset 0 0 0 1px rgb(240,223,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(154,98,18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 234.34,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.02,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 451.57,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\u201C\uC2DC\uAC04 \uB420 \uB54C\u201D\uB294 \uAE34\uAE09\uD558\uC9C0 \uC54A\uB2E4\uB294 \uB73B\uC774\uB2E4. \uB2E8, \uACE0\uAC1D\uC0AC \uC774\uB984\uC774\uB098 \uC7A5\uC560, \uACB0\uC81C, \uBCF4\uC548 \uC774\uC288\uAC00 \uD568\uAED8 \uC5B8\uAE09\uB418\uBA74 \uC6B0\uC120\uC21C\uC704\uB97C \uB2E4\uC2DC \uD655\uC778\uD55C\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 296.26,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.02,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 449.55,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C\uAC00 \u201C\uC624\uB298 \uC548\uC73C\uB85C\u201D\uB77C\uACE0 \uB9D0\uD558\uBA74 \uAE30\uBCF8\uC801\uC73C\uB85C \uD55C\uAD6D \uC2DC\uAC04 \uAE30\uC900 \uD1F4\uADFC \uC804\uAE4C\uC9C0 \uC644\uB8CC\uD558\uAC70\uB098 \uC9C4\uD589 \uC0C1\uD669\uC744 \uACF5\uC720\uD574\uC57C \uD55C\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 358.18,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.02,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 452.72,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uACE0\uAC1D\uC5D0\uAC8C \uC9C1\uC811 \uC601\uD5A5\uC744 \uC8FC\uB294 \uC815\uCC45, \uAC00\uACA9, \uD658\uBD88, \uBCF4\uC548, \uC678\uBD80 \uACF5\uC720, \uBC30\uD3EC \uC77C\uC815 \uBCC0\uACBD\uC740 \uAE40\uB300\uD45C \uD655\uC778 \uD6C4 \uC9C4\uD589\uD55C\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 420.1,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.03,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 358.378,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uBC24 10\uC2DC \uC774\uD6C4 \uC6B4\uC601 \uBC30\uD3EC\uB294 \uAE40\uB300\uD45C\uC5D0\uAC8C Slack\uC73C\uB85C \uC2B9\uC778\uC744 \uC694\uCCAD\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 482.02,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.16,
      top: 18.03,
      width: 452.88,
      height: 19.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 297.456,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "19.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uD578\uB4DC\uBD81 \uCD08\uC548\uC758 \uC2B9\uC778, \uAC70\uC808, \uBCF4\uB958\uB294 Owner\uAC00 \uACB0\uC815\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 543.95,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 605.87,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 667.79,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 729.71,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 791.63,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 853.56,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.17,
      top: 915.48,
      width: 583.41,
      height: 28,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(224,224,230)",
      borderLeft: "1px solid rgb(224,224,230)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      top: 9.5,
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 55,
      top: 6.75,
      width: 84.33,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "PEOPLE GROUP"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 285.2,
      top: 13.5,
      width: 265,
      height: 1,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 560.2,
      top: 7,
      width: 13.858,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)"
    }
  }, "1\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 949.48,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.17,
      top: 1011.4,
      width: 583.41,
      height: 28,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(224,224,230)",
      borderLeft: "1px solid rgb(224,224,230)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      top: 9.5,
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 55,
      top: 6.75,
      width: 147.314,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "PRODUCT / ENGINEERING"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 390.61,
      top: 13.5,
      width: 153.29,
      height: 1,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 553.9,
      top: 7,
      width: 20.163,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)"
    }
  }, "19\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1045.4,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)",
      boxShadow: "inset 0 0 0 1px rgb(240,223,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(154,98,18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1107.32,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1169.24,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1231.16,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1293.09,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1355.01,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1416.93,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1478.85,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1540.77,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1602.7,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1664.62,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1726.54,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1788.46,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1850.38,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1912.31,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 1974.23,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2036.15,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2098.07,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2159.99,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.17,
      top: 2221.91,
      width: 583.41,
      height: 28,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(224,224,230)",
      borderLeft: "1px solid rgb(224,224,230)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      top: 9.5,
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 55,
      top: 6.75,
      width: 56.372,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "SECURITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 303.18,
      top: 13.5,
      width: 244.68,
      height: 1,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 557.86,
      top: 7,
      width: 16.285,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)"
    }
  }, "5\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2255.91,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)",
      boxShadow: "inset 0 0 0 1px rgb(240,223,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(154,98,18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2317.84,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2379.76,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2441.68,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2503.6,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.17,
      top: 2587.52,
      width: 625.41,
      height: 53.33,
      borderRadius: 16,
      backgroundColor: "rgb(37,99,235)",
      boxShadow: "inset 0 0 0 1px rgb(29,78,216)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.5,
      top: 13.67,
      width: 26,
      height: 26,
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.16)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.276,
    height: 3.276,
    viewBox: "0 0 3.276 3.276",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.982,
      top: 1.465,
      width: 3.276,
      height: 3.276,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.638 3.276 L 1.638 3.922 C 2.9 3.922 3.922 2.9 3.922 1.638 L 3.276 1.638 L 2.629 1.638 C 2.629 2.185 2.185 2.629 1.638 2.629 L 1.638 3.276 Z M 3.276 1.638 L 3.922 1.638 C 3.922 0.376 2.9 -0.647 1.638 -0.647 L 1.638 0 L 1.638 0.647 C 2.185 0.647 2.629 1.09 2.629 1.638 L 3.276 1.638 Z M 1.638 0 L 1.638 -0.647 C 0.376 -0.647 -0.647 0.376 -0.647 1.638 L 0 1.638 L 0.647 1.638 C 0.647 1.09 1.09 0.647 1.638 0.647 L 1.638 0 Z M 0 1.638 L -0.647 1.638 C -0.647 2.9 0.376 3.922 1.638 3.922 L 1.638 3.276 L 1.638 2.629 C 1.09 2.629 0.647 2.185 0.647 1.638 L 0 1.638 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.276,
    height: 3.276,
    viewBox: "0 0 3.276 3.276",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.982,
      top: 9.051,
      width: 3.276,
      height: 3.276,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.638 3.276 L 1.638 3.922 C 2.9 3.922 3.922 2.899 3.922 1.638 L 3.276 1.638 L 2.629 1.638 C 2.629 2.185 2.185 2.629 1.638 2.629 L 1.638 3.276 Z M 3.276 1.638 L 3.922 1.638 C 3.922 0.376 2.899 -0.647 1.638 -0.647 L 1.638 0 L 1.638 0.647 C 2.185 0.647 2.629 1.09 2.629 1.638 L 3.276 1.638 Z M 1.638 0 L 1.638 -0.647 C 0.376 -0.647 -0.647 0.376 -0.647 1.638 L 0 1.638 L 0.647 1.638 C 0.647 1.09 1.09 0.647 1.638 0.647 L 1.638 0 Z M 0 1.638 L -0.647 1.638 C -0.647 2.899 0.376 3.922 1.638 3.922 L 1.638 3.276 L 1.638 2.629 C 1.09 2.629 0.647 2.185 0.647 1.638 L 0 1.638 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.276,
    height: 3.276,
    viewBox: "0 0 3.276 3.276",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.534,
      top: 1.465,
      width: 3.276,
      height: 3.276,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.638 3.276 L 1.638 3.922 C 2.899 3.922 3.922 2.899 3.922 1.638 L 3.276 1.638 L 2.629 1.638 C 2.629 2.185 2.185 2.629 1.638 2.629 L 1.638 3.276 Z M 3.276 1.638 L 3.922 1.638 C 3.922 0.376 2.899 -0.647 1.638 -0.647 L 1.638 0 L 1.638 0.647 C 2.185 0.647 2.629 1.09 2.629 1.638 L 3.276 1.638 Z M 1.638 0 L 1.638 -0.647 C 0.376 -0.647 -0.647 0.376 -0.647 1.638 L 0 1.638 L 0.647 1.638 C 0.647 1.09 1.09 0.647 1.638 0.647 L 1.638 0 Z M 0 1.638 L -0.647 1.638 C -0.647 2.899 0.376 3.922 1.638 3.922 L 1.638 3.276 L 1.638 2.629 C 1.09 2.629 0.647 2.185 0.647 1.638 L 0 1.638 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.293,
    height: 4.310,
    viewBox: "-0.647 0 1.293 4.310",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.62,
      top: 4.741,
      width: 1.2930556535720825,
      height: 4.31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.647 0 C 0.647 -0.357 0.357 -0.647 0 -0.647 C -0.357 -0.647 -0.647 -0.357 -0.647 0 L 0 0 L 0.647 0 Z M -0.647 4.31 C -0.647 4.667 -0.357 4.957 0 4.957 C 0.357 4.957 0.647 4.667 0.647 4.31 L 0 4.31 L -0.647 4.31 Z M 0 0 L -0.647 0 L -0.647 4.31 L 0 4.31 L 0.647 4.31 L 0.647 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.551,
    height: 3.793,
    viewBox: "0 0 6.551 3.793",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.62,
      top: 4.741,
      width: 6.551,
      height: 3.793,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.198 0 C 7.198 -0.357 6.909 -0.647 6.551 -0.647 C 6.194 -0.647 5.905 -0.357 5.905 0 L 6.551 0 L 7.198 0 Z M -0.056 3.149 C -0.412 3.18 -0.675 3.493 -0.644 3.849 C -0.613 4.205 -0.3 4.468 0.056 4.437 L 0 3.793 L -0.056 3.149 Z M 6.551 0 L 5.905 0 C 5.905 0.558 5.772 0.978 5.548 1.311 C 5.322 1.649 4.973 1.941 4.474 2.191 C 3.451 2.702 1.923 2.977 -0.056 3.149 L 0 3.793 L 0.056 4.437 C 2.042 4.264 3.79 3.979 5.052 3.348 C 5.695 3.026 6.24 2.602 6.622 2.032 C 7.008 1.457 7.198 0.778 7.198 0 L 6.551 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 54.5,
      top: 17.54,
      width: 71.871,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "16.610px",
      letterSpacing: "-0.300px",
      color: "rgb(255,255,255)"
    }
  }, "\uD504\uB85C\uC81D\uD2B8 \uC9C0\uC2DD"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 562.75,
      top: 19.5,
      width: 47.902,
      height: 14,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.340px",
      color: "rgb(255,255,255)"
    }
  }, "31\uAC1C \uD56D\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.17,
      top: 2648.85,
      width: 583.41,
      height: 28,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(224,224,230)",
      borderLeft: "1px solid rgb(224,224,230)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      top: 9.5,
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 55,
      top: 6.75,
      width: 91.341,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "Ai-cs-copilot"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 156,
      top: 13.5,
      width: 387.41,
      height: 1,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 553.41,
      top: 7,
      width: 20.665,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)"
    }
  }, "14\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2682.85,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2744.77,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2806.7,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2868.62,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2930.54,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 2992.46,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3054.38,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3116.31,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3178.23,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3240.15,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3302.07,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3363.99,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3425.91,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3487.84,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.17,
      top: 3549.76,
      width: 583.41,
      height: 28,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(224,224,230)",
      borderLeft: "1px solid rgb(224,224,230)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      top: 9.5,
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 55,
      top: 6.75,
      width: 112.373,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "Ai-meeting-notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 177,
      top: 13.5,
      width: 367.39,
      height: 1,
      backgroundColor: "rgb(230,230,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 554.39,
      top: 7,
      width: 19.66,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)"
    }
  }, "17\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3583.76,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3645.68,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3707.6,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3769.52,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)",
      boxShadow: "inset 0 0 0 1px rgb(240,223,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(154,98,18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3831.45,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3893.37,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)",
      boxShadow: "inset 0 0 0 1px rgb(203,232,214)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(31,122,69)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 3955.29,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4017.21,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4079.13,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4141.06,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4202.98,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4264.9,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4326.82,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4388.74,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4450.66,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4512.59,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.82,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.82,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49.17,
      top: 4574.51,
      width: 583.41,
      height: 53.92,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 482.05,
      top: 15.83,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,225,252)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.93,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(29,78,216)"
    }
  }, "\uC77C\uAD04 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 560.24,
      top: 21.83,
      width: 12,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 2.5,
      width: 3.5,
      height: 7,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.5 3.5 L 3.995 3.995 L 4.49 3.5 L 3.995 3.005 L 3.5 3.5 Z M 0 0 L -0.495 0.495 L 3.005 3.995 L 3.5 3.5 L 3.995 3.005 L 0.495 -0.495 L 0 0 Z M 3.5 3.5 L 3.005 3.005 L -0.495 6.505 L 0 7 L 0.495 7.495 L 3.995 3.995 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 646.57,
      top: 17.16,
      width: 6,
      height: 503.44,
      borderRadius: 999,
      backgroundColor: "rgb(240,241,245)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: 424.2,
      width: 9,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 2px 6px -1px rgba(37,99,235,0.55)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 712.9,
      top: 231.07,
      width: 571.94,
      height: 545.77,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 571.94,
      height: 545.77,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 557.94,
      height: 790.37,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 557.94,
      height: 790.37,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.16,
      top: 24.5,
      width: 57.38,
      height: 21.33,
      borderRadius: 7,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 4.16,
      width: 38.148,
      height: 12.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "10px",
      letterSpacing: "0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uD68C\uC0AC \uADDC\uCE59")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 88.54,
      top: 27.84,
      width: 46.541,
      height: 14.63,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.630px",
      color: "rgb(60,60,68)"
    }
  }, "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 142.74,
      top: 23.16,
      width: 70.2,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)",
      boxShadow: "inset 0 0 0 1px rgb(240,223,192)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "rgb(154,98,18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 4.94,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(154,98,18)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 23.16,
      top: 63.16,
      width: 384.169,
      height: 26,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      letterSpacing: "-0.500px",
      color: "rgb(23,23,27)"
    }
  }, "\uC7A5\uC560 \uBC1C\uC0DD \uC2DC \uACF5\uC6A9 Slack \uCC44\uB110\uC5D0 \uC0C1\uD669\uC744 \uACF5\uC720\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.16,
      top: 105.16,
      width: 511.61,
      height: 98.16,
      borderRadius: 14,
      backgroundColor: "rgb(250,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 17.17,
      width: 89.136,
      height: 12.7,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12.700px",
      letterSpacing: "0.800px",
      color: "rgb(37,99,235)"
    }
  }, "EN \xB7 \uD300\uC6D0 \uD45C\uC2DC \uC5B8\uC5B4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 42.2,
      width: 478.88,
      height: 38.6,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13.5,
      lineHeight: "21.600px",
      color: "rgb(58,58,66)",
      whiteSpace: "pre-wrap"
    }
  }, "If an incident or deployment failure occurs, first share the situation, scope of\nimpact, and next actions in the public Slack channel.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.16,
      top: 219.32,
      width: 511.61,
      height: 98.16,
      borderRadius: 14,
      backgroundColor: "rgb(250,250,251)",
      outline: "1px dashed rgb(230,230,235)",
      outlineOffset: "-1px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 17.16,
      width: 68.407,
      height: 12.7,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "12.700px",
      letterSpacing: "0.800px",
      color: "rgb(160,160,168)"
    }
  }, "KO \xB7 \uCD9C\uCC98 \uC6D0\uBB38"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 42.2,
      width: 493.352,
      height: 38.6,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13.5,
      lineHeight: "21.600px",
      color: "rgb(107,107,115)",
      whiteSpace: "pre-wrap"
    }
  }, "장애나 배포 실패가 발생하면 먼저 공용 Slack 채널에 상황, 영향 범위, 다음 조치를 공유해야 한\n다.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.16,
      top: 333.48,
      width: 511.61,
      height: 381.06,
      borderTop: "1px solid rgb(239,239,241)",
      borderRight: "1px solid rgb(239,239,241)",
      borderBottom: "1px solid rgb(239,239,241)",
      borderLeft: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 15,
      width: 92.542,
      height: 16.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.800px",
      color: "rgb(60,60,68)"
    }
  }, "\uAC1C\uBCC4 \uAC80\uD1A0 \uD310\uB2E8 \uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 43.79,
      width: 511.61,
      height: 131.39
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 165.2,
      height: 53.3,
      borderRadius: 12,
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      width: 28.734,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgb(138,138,147)"
    }
  }, "\uADFC\uAC70 \uC218"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 26.5,
      width: 5.232,
      height: 16.8,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.800px",
      color: "rgb(46,46,54)"
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 173.21,
      top: 0,
      width: 165.2,
      height: 53.3,
      borderRadius: 12,
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      width: 37.323,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgb(138,138,147)"
    }
  }, "\uCDA9\uB3CC \uC5EC\uBD80"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 26.5,
      width: 21.094,
      height: 16.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.800px",
      color: "rgb(46,46,54)"
    }
  }, "\uC5C6\uC74C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 346.41,
      top: 0,
      width: 165.2,
      height: 53.3,
      borderRadius: 12,
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      width: 37.323,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgb(138,138,147)"
    }
  }, "\uC720\uC0AC \uADDC\uCE59"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 26.5,
      width: 21.094,
      height: 16.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.800px",
      color: "rgb(46,46,54)"
    }
  }, "\uC5C6\uC74C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 61.3,
      width: 165.2,
      height: 70.09,
      borderRadius: 12,
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      width: 26.306,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgb(138,138,147)"
    }
  }, "\uC720\uC0AC\uB3C4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 26.5,
      width: 65.601,
      height: 16.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16.800px",
      color: "rgb(46,46,54)"
    }
  }, "\uD655\uC778\uB418\uC9C0 \uC54A\uC74C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 173.21,
      top: 61.3,
      width: 165.2,
      height: 70.09,
      borderRadius: 12,
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      width: 37.323,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "13.500px",
      color: "rgb(138,138,147)"
    }
  }, "\uC815\uCC45 \uBC84\uC804"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 27,
      width: 136.54,
      height: 31.8,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16.800px",
      color: "rgb(46,46,54)",
      whiteSpace: "pre-wrap"
    }
  }, "handbook-promotion-\nv1"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 187.18,
      width: 48.203,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uC704\uD5D8 \uD0A4\uC6CC\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 208.18,
      width: 163.84,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(254,242,243)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 148.165,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(165,29,39)"
    }
  }, "\uBC30\uD3EC \xB7 DEPLOYMENT \xB7 DANGER")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 245.4,
      width: 69.168,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uC790\uB3D9\uD654 \uD310\uB2E8 \uC0AC\uC720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 266.4,
      width: 101.42,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 87.335,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "\uC704\uD5D8 \uD0A4\uC6CC\uB4DC\uAC00 \uAC10\uC9C0\uB428")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 303.62,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uD575\uC2EC \uC2E0\uD638"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 324.62,
      width: 83.26,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 69.117,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "\uC801\uC6A9 \uBC94\uC704 \uD655\uC778\uB428")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 89.26,
      top: 324.62,
      width: 74.17,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 60.157,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "\uCD5C\uADFC \uADFC\uAC70 \uC5C6\uC74C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 169.43,
      top: 324.62,
      width: 99.67,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 86.583,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "Owner \uB2F5\uBCC0 \uBBF8\uD655\uC778")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 275.1,
      top: 324.62,
      width: 103.26,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 90.156,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "\uB2F5\uBCC0 \uCD94\uAC00 \uAC80\uD1A0 \uBD88\uD544\uC694")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 384.36,
      top: 324.62,
      width: 111.51,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 98.516,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "\uC790\uB3D9 \uC2B9\uACA9 \uCD5C\uC18C \uADFC\uAC70 3\uAC74")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 355.84,
      width: 99.02,
      height: 25.22,
      borderRadius: 8,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 5.5,
      width: 84.245,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "15.230px",
      color: "rgb(86,86,96)"
    }
  }, "\uCD5C\uADFC 30\uC77C \uADFC\uAC70 \uAE30\uC900"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.16,
      top: 730.54,
      width: 77.47,
      height: 36.66,
      borderRadius: 11,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 10.14,
      width: 46.643,
      height: 16,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(255,255,255)",
      textDecoration: "underline"
    }
  }, "\uC6D0\uBB38 \uC5F4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.63,
      top: 730.54,
      width: 53.63,
      height: 36.66,
      borderRadius: 11,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 10.14,
      width: 21.959,
      height: 16,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(60,60,68)"
    }
  }, "\uC218\uC815")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 170.26,
      top: 730.54,
      width: 57,
      height: 36.66,
      borderRadius: 11,
      backgroundColor: "rgb(254,242,242)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 17.68,
      top: 10.14,
      width: 21.959,
      height: 16,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(220,38,38)"
    }
  }, "\uC0AD\uC81C")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 235.26,
      top: 741.88,
      width: 101.63,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(160,160,168)"
    }
  }, "\uCD5C\uADFC \uD655\uC778 09.14 22:31"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 563.94,
      top: 2,
      width: 6,
      height: 541.77,
      borderRadius: 999,
      backgroundColor: "rgb(240,241,245)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: 0,
      width: 9,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 2px 6px -1px rgba(37,99,235,0.55)"
    }
  })))));
}

// figma node: 0:849 Background+Border
function BackgroundBorder2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      height: 703,
      borderRadius: 30,
      background: "radial-gradient(1159.939px 456.528px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(1070.723px 355.085px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 23.16,
      width: 1257.67,
      height: 59
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56 0 L 0 0 L 0 56 L 56 56 L 56 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 15.07,
      width: 67,
      height: 28.86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.162,
      top: 0,
      width: 66.677,
      height: 28.86,
      overflow: "hidden",
      backgroundImage: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.677,
    height: 28.722,
    viewBox: "0 0 66.677 28.722",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.677,
      height: 28.722
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.677 0 L 0 0 L 0 28.722 L 66.677 28.722 L 66.677 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 434.84,
      top: 3.5,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 8px 20px -12px rgba(23,44,90,0.22), inset 0px 1px 0px 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 26,
      top: 17.3,
      width: 47.986,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uB300\uC2DC\uBCF4\uB4DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 118.63,
      top: 17.3,
      width: 36.039,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC18C\uC2A4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 181.34,
      top: 6.64,
      width: 61.82,
      height: 38.73,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)",
      boxShadow: "0px 5px 10px 0px rgba(37,99,235,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.66,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uC9C8\uBB38")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 268.14,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uD578\uB4DC\uBD81"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 336.94,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC124\uC815")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 944.44,
      top: 2.34,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 14.16,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(216,216,222)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 10.16,
      width: 27.04,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "Ming"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 95.87,
      top: 10.66,
      width: 112.574,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Ho Chi Minh 13:47"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 32.66,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 28.66,
      width: 29.627,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 135.47,
      top: 29.16,
      width: 72.912,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Seoul 15:47")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1177.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      color: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.667 15 C 1.208 15 0.816 14.837 0.49 14.511 C 0.164 14.185 0.001 13.792 0 13.333 L 0 1.667 C 0 1.208 0.163 0.816 0.49 0.49 C 0.817 0.164 1.209 0.001 1.667 0 L 7.5 0 L 7.5 1.667 L 1.667 1.667 L 1.667 13.333 L 7.5 13.333 L 7.5 15 L 1.667 15 Z M 10.833 11.667 L 9.687 10.458 L 11.813 8.333 L 5 8.333 L 5 6.667 L 11.813 6.667 L 9.687 4.542 L 10.833 3.333 L 15 7.5 L 10.833 11.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1221.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.8,
      top: 10.5,
      width: 10.697,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(255,255,255)"
    }
  }, "\uAE40"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 102.16,
      width: 64.709,
      height: 41.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "41.800px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC9C8\uBB38"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 151.75,
      width: 749.397,
      height: 15.99,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "15.990px",
      color: "rgb(107,107,115)"
    }
  }, "AI\uAC00 \uB2F5\uD558\uC9C0 \uBABB\uD55C \uC9C8\uBB38\uC740 \uB300\uD45C\uB2D8 \uB2F5\uBCC0\uC744 \uAC70\uCCD0 \uD578\uB4DC\uBD81 \uD56D\uBAA9\uC774 \uB429\uB2C8\uB2E4. \uB2F5\uBCC0\uC740 \uC2AC\uB799 \uC2A4\uB808\uB4DC\uC5D0\uC11C \uAC00\uC838\uC635\uB2C8\uB2E4. \uC800\uC7A5 \uB2E8\uC704\uB294 \uC9C8\uBB38-\uB2F5\uBCC0 1\uC30D\uB2F9 \uD56D\uBAA9 1\uAC1C\uC785\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 197.07,
      width: 408.55,
      height: 125.33,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 408.55,
      height: 125.33,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 20.5,
      width: 68.624,
      height: 15.36,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(107,107,115)"
    }
  }, "\uB300\uD45C \uB2F5\uBCC0 \uB300\uAE30"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 43.36,
      width: 50.925,
      height: 43,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 34,
      whiteSpace: "nowrap",
      lineHeight: "42.500px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "3\uAC74"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 94.36,
      width: 109.287,
      height: 13.97,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(160,160,168)"
    }
  }, "\uAC00\uC7A5 \uC624\uB798\uB41C \uC9C8\uBB38 29\uC77C \uC804")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 451.72,
      top: 197.07,
      width: 408.56,
      height: 125.33,
      borderRadius: 20,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 408.56,
      height: 125.33,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 20.5,
      width: 44.763,
      height: 15.36,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(107,107,115)"
    }
  }, "\uC2B9\uC778 \uB300\uAE30"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 43.36,
      width: 52.466,
      height: 43,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 34,
      whiteSpace: "nowrap",
      lineHeight: "42.500px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "4\uAC74"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 94.36,
      width: 122.97,
      height: 13.97,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(160,160,168)"
    }
  }, "\uB2F5\uBCC0\uC5D0\uC11C \uB9CC\uB4E4\uC5B4\uC9C4 \uD56D\uBAA9 \uC81C\uC548")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 876.28,
      top: 197.07,
      width: 408.55,
      height: 125.33,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 408.55,
      height: 125.33,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 20.5,
      width: 58.366,
      height: 15.36,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(107,107,115)"
    }
  }, "\uC774\uBC88 \uC8FC \uC800\uC7A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 43.36,
      width: 54.264,
      height: 43,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 34,
      whiteSpace: "nowrap",
      lineHeight: "42.500px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "0\uAC74"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20.5,
      top: 94.36,
      width: 107.038,
      height: 13.97,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(160,160,168)"
    }
  }, "\uC9C8\uBB38-\uB2F5\uBCC0 1\uC30D\uB2F9 \uD56D\uBAA9 1\uAC1C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 340.4,
      width: 641.83,
      height: 334.79,
      overflow: "hidden",
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 12.5,
      width: 602.83,
      height: 64.3,
      borderRadius: 14,
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.15,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.01,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 14,
      width: 457.76,
      height: 18.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 451.06,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "18.900px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uB300\uD45C\uB2D8, \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uBBF8\uD305 \uC804\uC5D0 \uC81C\uAC00 \uC900\uBE44\uD574\uC57C \uD560 \uC790\uB8CC\uB098 \uD655\uC778\uD560 \uC548\uAC74\uC774 \uC788\uC744\uAE4C\uC694? \uC774\uBC88 \uBBF8\uD305\uC5D0\uC11C \uAE30\uB300\uD558\uC2DC\uB294 \uACB0\uACFC\uB098 \uC81C\uAC00 \uB9E1\uAC8C \uB420 \uC5C5\uBB34\uAC00 \uC788\uB2E4\uBA74 \uBBF8\uB9AC \uC54C\uB824\uC8FC\uC2DC\uBA74 \uC900\uBE44\uD558\uACA0\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 34.9,
      width: 457.76,
      height: 15.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 137.376,
      height: 14.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15.400px",
      color: "rgb(160,160,168)"
    }
  }, "\uACF5\uD1B5 \uADDC\uCE59 \xB7 09.06 15:23")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.15,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.31,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(154,98,18)"
    }
  }, "\uB2F5\uBCC0 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 76.8,
      width: 602.83,
      height: 64.3,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.14,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.02,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 14,
      width: 457.76,
      height: 18.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 376.966,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "18.900px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC774 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uBA3C\uC800 \uC2A4\uD14C\uC774\uC9D5\uC5D0\uC11C \uD14C\uC2A4\uD2B8\uD574\uC57C \uD560\uAE4C\uC694? \uD655\uC778 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 34.89,
      width: 457.76,
      height: 15.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 178.558,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15.400px",
      color: "rgb(160,160,168)"
    }
  }, "Ai-cs-copilot \xB7 09.02 20:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.14,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.32,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(29,78,216)"
    }
  }, "\uC2B9\uC778 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 141.09,
      width: 602.83,
      height: 64.3,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.15,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.02,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 14,
      width: 457.76,
      height: 18.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 449.68,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "18.900px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "Vercel \uBC30\uD3EC \uACC4\uC815\uC740 \uAC1C\uC778 \uACC4\uC815\uC744 \uC0AC\uC6A9\uD558\uBA74 \uB420\uAE4C\uC694, \uC544\uB2C8\uBA74 \uD68C\uC0AC \uC18C\uC720 \uACC4\uC815\uC744 \uC0C8\uB85C \uB9CC\uB4E4\uC5B4\uC57C \uD560\uAE4C\uC694? \uD655\uC778 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 34.9,
      width: 457.76,
      height: 15.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 198.364,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15.400px",
      color: "rgb(160,160,168)"
    }
  }, "Ai-meeting-notes \xB7 08.21 00:42")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.15,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.31,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(29,78,216)"
    }
  }, "\uC2B9\uC778 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 205.39,
      width: 602.83,
      height: 64.3,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.15,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.01,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 14,
      width: 457.76,
      height: 18.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 448.06,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "18.900px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uB300\uD45C\uB2D8, Ai-meeting-notes \uD504\uB85C\uC81D\uD2B8\uC758 AWS \uC811\uC18D \uACC4\uC815 \uC815\uBCF4\uB97C \uC5B4\uB514\uC5D0\uC11C \uC548\uC804\uD558\uAC8C \uBC1B\uC744 \uC218 \uC788\uC744\uAE4C\uC694? \uBE44\uBC00\uBC88\uD638\uB294 \uC2AC\uB799\uC774\uB098 \uD68C\uC758\uB85D\uC5D0 \uB0A8\uAE30\uC9C0 \uC54A\uB294 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 34.9,
      width: 457.76,
      height: 15.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 198.364,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15.400px",
      color: "rgb(160,160,168)"
    }
  }, "Ai-meeting-notes \xB7 08.20 11:59")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.15,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.31,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(29,78,216)"
    }
  }, "\uC2B9\uC778 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 269.69,
      width: 602.83,
      height: 64.3,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.14,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.02,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 14,
      width: 457.76,
      height: 18.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 453.23,
      height: 17,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: "18.900px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC548\uB155\uD558\uC138\uC694. API \uD0A4, \uD1A0\uD070, DB \uBE44\uBC00\uBC88\uD638\uC640 secrets.json \uAC12\uC740 \uC5B4\uB514\uC5D0 \uC548\uC804\uD558\uAC8C \uC800\uC7A5\uD558\uACE0 \uD655\uC778\uD574\uC57C \uD558\uB294\uC9C0 \uC54C\uB824\uC8FC\uC2DC\uACA0\uC5B4\uC694?")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 34.89,
      width: 457.76,
      height: 15.4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 137.376,
      height: 14.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15.400px",
      color: "rgb(160,160,168)"
    }
  }, "\uACF5\uD1B5 \uADDC\uCE59 \xB7 08.20 10:09")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.14,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.32,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(154,98,18)"
    }
  }, "\uB2F5\uBCC0 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 333.98,
      width: 602.83,
      height: 64.3,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.15,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.02,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.15,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.31,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(154,98,18)"
    }
  }, "\uB2F5\uBCC0 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.5,
      top: 398.28,
      width: 602.83,
      height: 64.3,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 15.15,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3.86,
      top: 10.01,
      width: 26.648,
      height: 13.97,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "13.970px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 529.76,
      top: 20.15,
      width: 63.07,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(238,243,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.31,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(29,78,216)"
    }
  }, "\uC2B9\uC778 \uB300\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 621.33,
      top: 14.5,
      width: 6,
      height: 305.79,
      borderRadius: 999,
      backgroundColor: "rgb(240,241,245)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      top: 0,
      width: 9,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 2px 6px -1px rgba(37,99,235,0.55)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 684.99,
      top: 340.4,
      width: 599.84,
      height: 334.79,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 599.84,
      height: 334.79,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.17,
      top: 24.5,
      width: 63.2,
      height: 23.7,
      borderRadius: 999,
      backgroundColor: "rgb(255,246,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 5.16,
      width: 39.214,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(154,98,18)"
    }
  }, "\uB2F5\uBCC0 \uB300\uAE30")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 94.36,
      top: 29.03,
      width: 44.996,
      height: 14.63,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.630px",
      color: "rgb(60,60,68)"
    }
  }, "\uACF5\uD1B5 \uADDC\uCE59"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 548.53,
      top: 29.49,
      width: 31.443,
      height: 13.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(160,160,168)"
    }
  }, "12\uC77C \uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.17,
      top: 64.19,
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: "rgb(221,231,253)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2.04,
      top: 7.65,
      width: 24.243,
      height: 12.7,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.700px",
      color: "rgb(29,78,216)"
    }
  }, "Ming")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 59.17,
      top: 64.19,
      width: 519.52,
      height: 64,
      borderRadius: "4px 14px 14px 14px",
      backgroundColor: "rgb(250,250,251)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 494.612,
      height: 36,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12.5,
      lineHeight: "20px",
      color: "rgb(58,58,66)",
      whiteSpace: "pre-wrap"
    }
  }, "대표님, 갑작스러운 미팅 전에 제가 준비해야 할 자료나 확인할 안건이 있을까요? 이번 미팅에서 기대하\n시는 결과나 제가 맡게 될 업무가 있다면 미리 알려주시면 준비하겠습니다.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.17,
      top: 144.19,
      width: 557.52,
      height: 64,
      borderRadius: 14,
      backgroundColor: "rgb(255,246,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      width: 142.863,
      height: 16,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(154,98,18)"
    }
  }, "\uC2AC\uB799 \uC2A4\uB808\uB4DC\uC5D0 \uB2F5\uC7A5\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 35,
      width: 265.872,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)"
    }
  }, "\uB2F5\uC7A5\uD558\uACE0 \uC774 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uC624\uBA74 SAi\uAC00 \uB2F5\uC744 \uAC00\uC838\uC640 \uC815\uB9AC\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.17,
      top: 269.62,
      width: 557.52,
      height: 40.66,
      borderRadius: 12,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 216.63,
      top: 12.14,
      width: 127.531,
      height: 16,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.380px",
      color: "rgb(255,255,255)"
    }
  }, "\uC2AC\uB799 \uC2A4\uB808\uB4DC\uC5D0\uC11C \uB2F5\uD558\uAE30 \u2197"))));
}

// figma node: 0:974 Background+Border
function BackgroundBorder3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      height: 530,
      borderRadius: 30,
      background: "radial-gradient(1159.939px 344.182px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(1070.723px 267.703px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 23.16,
      width: 1257.67,
      height: 59
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56 0 L 0 0 L 0 56 L 56 56 L 56 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68,
      top: 15.07,
      width: 67,
      height: 28.86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.162,
      top: 0,
      width: 66.677,
      height: 28.86,
      overflow: "hidden",
      backgroundImage: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.677,
    height: 28.722,
    viewBox: "0 0 66.677 28.722",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.677,
      height: 28.722
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.677 0 L 0 0 L 0 28.722 L 66.677 28.722 L 66.677 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 434.84,
      top: 3.5,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 8px 20px -12px rgba(23,44,90,0.22), inset 0px 1px 0px 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 26,
      top: 17.3,
      width: 47.986,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uB300\uC2DC\uBCF4\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 100.63,
      top: 6.64,
      width: 72.039,
      height: 38.73,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)",
      boxShadow: "0px 5px 10px 0px rgba(37,99,235,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.66,
      width: 36.039,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uC18C\uC2A4")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 199.34,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC9C8\uBB38"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 268.14,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uD578\uB4DC\uBD81"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 336.94,
      top: 17.3,
      width: 24.163,
      height: 17.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18.060px",
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC124\uC815")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 944.44,
      top: 2.34,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 225.23,
      height: 54.33,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 14.16,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(216,216,222)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 10.16,
      width: 27.04,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "Ming"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 95.87,
      top: 10.66,
      width: 112.574,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Ho Chi Minh 13:47"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.17,
      top: 32.66,
      width: 7,
      height: 7,
      borderRadius: 50,
      backgroundColor: "rgb(31,122,69)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 31.17,
      top: 28.66,
      width: 29.627,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 135.47,
      top: 29.16,
      width: 72.912,
      height: 14.5,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(60,60,68)"
    }
  }, "Seoul 15:47")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1177.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15,
      height: 15,
      color: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.667 15 C 1.208 15 0.816 14.837 0.49 14.511 C 0.164 14.185 0.001 13.792 0 13.333 L 0 1.667 C 0 1.208 0.163 0.816 0.49 0.49 C 0.817 0.164 1.209 0.001 1.667 0 L 7.5 0 L 7.5 1.667 L 1.667 1.667 L 1.667 13.333 L 7.5 13.333 L 7.5 15 L 1.667 15 Z M 10.833 11.667 L 9.687 10.458 L 11.813 8.333 L 5 8.333 L 5 6.667 L 11.813 6.667 L 9.687 4.542 L 10.833 3.333 L 15 7.5 L 10.833 11.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1221.68,
      top: 11.5,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12.8,
      top: 10.5,
      width: 10.697,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(255,255,255)"
    }
  }, "\uAE40"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 102.16,
      width: 64.709,
      height: 41.8,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "41.800px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC18C\uC2A4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27.16,
      top: 151.75,
      width: 267.96,
      height: 15.99,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "15.990px",
      color: "rgb(107,107,115)"
    }
  }, "\uD300\uC774 \uC774\uBBF8 \uC4F0\uB294 \uB3C4\uAD6C\uC5D0\uC11C \uD578\uB4DC\uBD81\uC774 \uC790\uB3D9\uC73C\uB85C \uBAA8\uC785\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.28,
      top: 187,
      display: "flex",
      flexDirection: "row",
      gap: 28,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 391.55,
      height: 303.29,
      borderRadius: 22,
      background: "radial-gradient(344.642px 169.024px at 86.00% -14.00%, rgba(23,23,27,0.16) 0.00%, rgba(23,23,27,0.04) 46.00%, rgba(23,23,27,0) 74.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 391.55,
      height: 303.29,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 22.5,
      width: 44,
      height: 44,
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 44,
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -4px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.11,
      top: 8.11,
      width: 27.79,
      height: 27.79,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -5.55,
      top: -5.56,
      width: 38.9,
      height: 38.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38.9,
      height: 38.9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38.9,
      height: 38.9,
      background: `url(${githubIcon}) 50% 50% / 100% 100% no-repeat`
    }
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 78.5,
      top: 26.27,
      width: 54.095,
      height: 21.6,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "21.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "GitHub"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 78.5,
      top: 47.88,
      width: 50.558,
      height: 14.85,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.850px",
      color: "rgb(160,160,168)"
    }
  }, "\uCF54\uB4DC \uC800\uC7A5\uC18C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 315.31,
      top: 31.65,
      width: 53.75,
      height: 25.7,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 6.16,
      width: 27.614,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(31,122,69)"
    }
  }, "\uC2E4\uC2DC\uAC04")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 82.5,
      width: 346.55,
      height: 56.63,
      borderBottom: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.682,
      height: 27.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "27.500px",
      letterSpacing: "-0.800px",
      color: "rgb(23,23,27)"
    }
  }, "2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 28.5,
      width: 57.344,
      height: 13.13,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(160,160,168)"
    }
  }, "\uC5F0\uACB0\uB41C \uC800\uC7A5\uC18C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 80.29,
      top: 0,
      width: 17.076,
      height: 27.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "27.500px",
      letterSpacing: "-0.800px",
      color: "rgb(23,23,27)"
    }
  }, "11"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 80.29,
      top: 28.5,
      width: 48.266,
      height: 13.13,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(160,160,168)"
    }
  }, "\uCD94\uCD9C\uB41C \uD56D\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 164.13,
      width: 6,
      height: 6,
      borderRadius: 50,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.5,
      top: 159.45,
      width: 259.24,
      height: 15.36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 166.259,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(23,23,27)"
    }
  }, "Kimdaepyo42/ai-cs-copilot")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 303.75,
      top: 160.09,
      width: 18.768,
      height: 14.08,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.080px",
      color: "rgb(160,160,168)"
    }
  }, "11\uAC74"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 329.89,
      top: 155.13,
      width: 39.17,
      height: 24,
      borderRadius: 8,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(219,228,252)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 5.14,
      width: 18.477,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(37,99,235)"
    }
  }, "\uC218\uC9D1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 197.13,
      width: 6,
      height: 6,
      borderRadius: 50,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.5,
      top: 192.45,
      width: 259.24,
      height: 15.36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 192.689,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(23,23,27)"
    }
  }, "Kimdaepyo42/ai-meeting-notes")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 303.75,
      top: 193.09,
      width: 18.768,
      height: 14.08,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.080px",
      color: "rgb(160,160,168)"
    }
  }, "11\uAC74"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 329.89,
      top: 188.13,
      width: 39.17,
      height: 24,
      borderRadius: 8,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(219,228,252)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 5.14,
      width: 18.477,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(37,99,235)"
    }
  }, "\uC218\uC9D1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 244.79,
      width: 94.03,
      height: 36,
      borderRadius: 11,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: 10.32,
      width: 55.224,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(60,60,68)"
    }
  }, "\uC800\uC7A5\uC18C \uCD94\uAC00")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 124.54,
      top: 255.94,
      width: 70.494,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(160,160,168)"
    }
  }, "10\uC2DC\uAC04 \uC804 \uB3D9\uAE30\uD654")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 391,
      height: 305,
      borderRadius: 22,
      background: "radial-gradient(322.653px 141.642px at 92.00% -16.00%, rgba(236,178,7,0.24) 0.00%, rgba(236,178,7,0) 62.00%), radial-gradient(354.911px 162.900px at 60.00% -14.00%, rgba(224,30,90,0.16) 0.00%, rgba(224,30,90,0) 66.00%), radial-gradient(365.663px 177.052px at 20.00% -10.00%, rgba(54,192,255,0.2) 0.00%, rgba(54,192,255,0) 70.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 390.56,
      height: 304.63,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 22.5,
      width: 43,
      height: 44,
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 44,
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 3px 8px -4px rgba(23,44,90,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.11,
      top: 8.11,
      width: 27.79,
      height: 27.79,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.39,
      width: 27.79,
      height: 25.011,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 27.79,
      height: 25.011,
      background: `url(${slackIcon}) 50% 50% / 100% 101.509% no-repeat`
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 78.17,
      top: 26,
      width: 106,
      height: 22,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "21.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "Slack"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 78.17,
      top: 48,
      width: 65,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.850px",
      color: "rgb(160,160,168)"
    }
  }, "\uD300 \uB300\uD654"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 315.31,
      top: 31.65,
      width: 52.75,
      height: 25.7,
      borderRadius: 999,
      backgroundColor: "rgb(234,246,239)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: 6.16,
      width: 27.614,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(31,122,69)"
    }
  }, "\uC2E4\uC2DC\uAC04")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 82.5,
      width: 345.56,
      height: 56.63,
      borderBottom: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.996,
      height: 27.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "27.500px",
      letterSpacing: "-0.800px",
      color: "rgb(23,23,27)"
    }
  }, "3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 28.5,
      width: 48.266,
      height: 13.13,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(160,160,168)"
    }
  }, "\uC5F0\uACB0\uB41C \uCC44\uB110"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 71.2,
      top: 0,
      width: 25.063,
      height: 27.5,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "27.500px",
      letterSpacing: "-0.800px",
      color: "rgb(23,23,27)"
    }
  }, "37"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 71.2,
      top: 28.5,
      width: 48.266,
      height: 13.13,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.130px",
      color: "rgb(160,160,168)"
    }
  }, "\uCD94\uCD9C\uB41C \uD56D\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 164.13,
      width: 5,
      height: 6,
      borderRadius: 50,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.5,
      top: 159.45,
      width: 253.69,
      height: 15.36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 119.254,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(23,23,27)"
    }
  }, "#proj-ai-cs-copilot")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 298.94,
      top: 160.13,
      width: 40,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.080px",
      color: "rgb(160,160,168)"
    }
  }, "26\uAC74"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 329.89,
      top: 155.13,
      width: 38.17,
      height: 24,
      borderRadius: 8,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(219,228,252)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 9.5,
      top: 5.14,
      width: 18.477,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(37,99,235)"
    }
  }, "\uC218\uC9D1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 197.13,
      width: 5,
      height: 6,
      borderRadius: 50,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.5,
      top: 192.45,
      width: 254.2,
      height: 15.36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 145.583,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(23,23,27)"
    }
  }, "#proj-ai-meeting-notes")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 299.94,
      top: 193.13,
      width: 39,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.080px",
      color: "rgb(160,160,168)"
    }
  }, "27\uAC74"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 329.89,
      top: 188.13,
      width: 38.17,
      height: 24,
      borderRadius: 8,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(219,228,252)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 9.5,
      top: 5.14,
      width: 18.477,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(37,99,235)"
    }
  }, "\uC218\uC9D1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 230.13,
      width: 5,
      height: 6,
      borderRadius: 50,
      backgroundColor: "rgb(29,78,216)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.5,
      top: 225.45,
      width: 253.44,
      height: 15.36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 107.165,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(23,23,27)"
    }
  }, "#team-handbook")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 298.94,
      top: 226.13,
      width: 40,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.080px",
      color: "rgb(160,160,168)"
    }
  }, "33\uAC74"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 329.89,
      top: 221.13,
      width: 38.17,
      height: 24,
      borderRadius: 8,
      backgroundColor: "rgb(238,243,255)",
      boxShadow: "inset 0 0 0 1px rgb(219,228,252)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 9.5,
      top: 5.14,
      width: 18.477,
      height: 13.5,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(37,99,235)"
    }
  }, "\uC218\uC9D1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.5,
      top: 254.13,
      width: 82.66,
      height: 36,
      borderRadius: 11,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 19,
      top: 10.32,
      width: 44.793,
      height: 15,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "15.360px",
      color: "rgb(60,60,68)"
    }
  }, "\uCC44\uB110 \uCD94\uAC00")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 114.17,
      top: 265,
      width: 116,
      height: 14,
      fontFamily: "\"Apple SD Gothic Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "12.710px",
      color: "rgb(160,160,168)"
    }
  }, "10\uC2DC\uAC04 \uC804 \uB3D9\uAE30\uD654")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 391.56,
      height: 305.292,
      borderRadius: 22,
      background: "radial-gradient(218.210px 268.713px at 86.00% -14.00%, rgba(90,169,230,0.28) 0.00%, rgba(31,90,140,0.08) 48.00%, rgba(31,90,140,0) 76.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 392.219,
      height: 305.292,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.667,
      top: 20.667,
      width: 392.885,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 44,
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(234,234,238)",
      borderRight: "0.667px solid rgb(234,234,238)",
      borderBottom: "0.667px solid rgb(234,234,238)",
      borderLeft: "0.667px solid rgb(234,234,238)",
      boxShadow: "0px 3px 8px -4px rgba(23,44,90,0.22)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.105,
      top: 8.105,
      width: 27.789,
      height: 27.789,
      overflow: "hidden",
      background: `url(${localFileIcon}) center / contain no-repeat`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      top: 3.781,
      width: 65.385,
      height: 36.438
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 61,
      height: 22,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "21.600px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uB85C\uCEEC \uD30C\uC77C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 21.594,
      width: 53,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "14.850px",
      color: "rgb(160,160,168)"
    }
  }, "\uC9C1\uC811 \uC5C5\uB85C\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 306.885,
      top: 9,
      width: 45,
      height: 26,
      borderRadius: 999,
      backgroundColor: "rgb(244,244,246)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 6.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(160,160,168)"
    }
  }, "\uC218\uB3D9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21,
      top: 81,
      width: 353,
      height: 70,
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "1px solid rgb(239,239,241)",
      borderBottom: "0.667px solid rgb(239,239,241)",
      borderLeft: "1px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 14.667,
      width: 64.792,
      height: 40.625
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.604,
      height: 28,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "27.500px",
      letterSpacing: "-0.800px",
      color: "rgb(23,23,27)"
    }
  }, "12"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 27.5,
      width: 60,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "13.125px",
      color: "rgb(160,160,168)"
    }
  }, "\uC5C5\uB85C\uB4DC\uB41C \uD30C\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84.792,
      top: 14.667,
      width: 54.292,
      height: 40.625
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33.865,
      height: 28,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "27.500px",
      letterSpacing: "-0.800px",
      color: "rgb(23,23,27)"
    }
  }, "24"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 27.5,
      width: 64.292,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "13.125px",
      color: "rgb(160,160,168)"
    }
  }, "\uCD94\uCD9C\uB41C \uD56D\uBAA9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21,
      top: 167,
      width: 367,
      height: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 328,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 5,
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(157,185,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 94,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(23,23,27)"
    }
  }, "\uC628\uBCF4\uB529 \uAC00\uC774\uB4DC.pdf"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 321.385,
      top: 1.333,
      width: 39.5,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "2.4MB")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 25,
      width: 310,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 5,
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(157,185,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 103,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(23,23,27)"
    }
  }, "\uBC30\uD3EC \uCCB4\uD06C\uB9AC\uC2A4\uD2B8.md"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 327.677,
      top: 1.333,
      width: 33.208,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "18KB")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 50,
      width: 343,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 5,
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(157,185,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 97,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(23,23,27)"
    }
  }, "\uC7A5\uBE44 \uC9C0\uAE09 \uB300\uC7A5.xlsx"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 327.677,
      top: 1.333,
      width: 33.208,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "96KB"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.667,
      top: 248.625,
      width: 392.885,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 94.146,
      height: 36,
      borderRadius: 11,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 10.667,
      width: 58,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(255,255,255)"
    }
  }, "\uD30C\uC77C \uC5C5\uB85C\uB4DC")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 102.146,
      top: 11,
      width: 59,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(160,160,168)"
    }
  }, "3\uC77C \uC804 \uC5C5\uB85C\uB4DC")))));
}

// figma node: 0:3 material-symbols:logout
function MaterialSymbolsLogout(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 19,
      height: 19,
      position: "relative",
      color: "rgb(37,99,235)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.250,
    height: 14.250,
    viewBox: "0 0 14.250 14.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.375,
      top: 0.375,
      width: 14.25,
      height: 14.25
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.583 14.25 C 1.148 14.25 0.775 14.095 0.466 13.785 C 0.156 13.475 0.001 13.103 0 12.667 L 0 1.583 C 0 1.148 0.155 0.775 0.466 0.466 C 0.776 0.156 1.148 0.001 1.583 0 L 7.125 0 L 7.125 1.583 L 1.583 1.583 L 1.583 12.667 L 7.125 12.667 L 7.125 14.25 L 1.583 14.25 Z M 10.292 11.083 L 9.203 9.935 L 11.222 7.917 L 4.75 7.917 L 4.75 6.333 L 11.222 6.333 L 9.203 4.315 L 10.292 3.167 L 14.25 7.125 L 10.292 11.083 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 0:1110 div
function Div(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1388,
      height: 461,
      borderRadius: 30,
      background: "radial-gradient(901.299px 407.569px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(701.010px 376.218px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      borderTop: "0.667px solid rgba(255,255,255,0.9)",
      borderRight: "0.667px solid rgba(255,255,255,0.9)",
      borderBottom: "0.667px solid rgba(255,255,255,0.9)",
      borderLeft: "0.667px solid rgba(255,255,255,0.9)",
      position: "relative",
      color: "rgb(37,99,235)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1388,
      height: 461,
      borderRadius: 30,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 30px 80px -34px rgba(23,44,90,0.3), 0px 2px 6px 0px rgba(23,44,90,0.06)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.667,
      top: 22.667,
      width: 1334.667,
      height: 59
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 159.188,
      height: 59
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.5,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      backgroundImage: `url(${symbolIcon}), url(${wordmarkIcon})`, backgroundSize: "56px 56px, 67px 28.86px", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "0px 0px, 68px 13.57px", width: 146, height: 56, overflow: "visible",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 56 0 L 56 56 L 0 56 L 0 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 67,
    height: 28.860,
    viewBox: "0 0 67 28.860",
    fill: "none",
    style: {
      position: "relative",
      width: 67,
      height: 28.86,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 67 0 L 67 28.86 L 0 28.86 L 0 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 473.334,
      top: 3.5,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 388.76,
      height: 52,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 8px 20px -12px rgba(23,44,90,0.22), inset 0px 1px 0px 1px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.667,
      top: 6.667,
      width: 91.208,
      height: 38.667,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.667,
      width: 51,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2899999618530273,
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uB300\uC2DC\uBCF4\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 101.875,
      top: 6.667,
      width: 77.406,
      height: 38.667,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.667,
      width: 39,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2899999618530273,
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC18C\uC2A4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183.281,
      top: 6.667,
      width: 63.604,
      height: 38.667,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.667,
      width: 26,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2899999618530273,
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uC9C8\uBB38")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 250.885,
      top: 6.667,
      width: 63.604,
      height: 38.667,
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.667,
      width: 26,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2899999618530273,
      letterSpacing: "-0.200px",
      color: "rgb(60,60,68)"
    }
  }, "\uD578\uB4DC\uBD81")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 318.49,
      top: 6.667,
      width: 63.604,
      height: 38.667,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 63.604,
      height: 38.667,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 10px 20px -8px rgb(37,99,235)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18,
      top: 10.667,
      width: 26,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2899999618530273,
      letterSpacing: "-0.200px",
      color: "rgb(255,255,255)"
    }
  }, "\uC124\uC815"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1021.427,
      top: 2.333,
      width: 313.24,
      height: 54.333
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 225.24,
      height: 54.333,
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(234,234,238)",
      borderRight: "0.667px solid rgb(234,234,238)",
      borderBottom: "0.667px solid rgb(234,234,238)",
      borderLeft: "0.667px solid rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 225.24,
      height: 54.333,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.667,
      top: 9.667,
      width: 191.906,
      height: 35
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 47.906,
      height: 15.333
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 4.167,
      width: 7,
      height: 7,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(216,216,222)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      width: 32,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 57.906,
      top: 0.333,
      width: 41,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "\uC624\uD504\uB77C\uC778"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 113.906,
      top: 0.333,
      width: 73,
      height: 15,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.3300000429153442,
      color: "rgb(60,60,68)"
    }
  }, "Seoul 21:40"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 20.333,
      width: 47.906,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 3.833,
      width: 7,
      height: 7,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(31,122,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 L 7 3.5 C 7 5.433 5.433 7 3.5 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 L 0 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      width: 27,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)"
    }
  }, "Minh")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 57.906,
      top: 20.333,
      width: 31,
      height: 14,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "\uC628\uB77C\uC778"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 113.906,
      top: 20.333,
      width: 73,
      height: 15,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.3300000429153442,
      color: "rgb(60,60,68)"
    }
  }, "Hanoi 19:40"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 233.24,
      top: 9.167,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(234,234,238)",
      borderRight: "0.667px solid rgb(234,234,238)",
      borderBottom: "0.667px solid rgb(234,234,238)",
      borderLeft: "0.667px solid rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.5,
      top: 10.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.750,
    height: 7.500,
    viewBox: "0 0 9.750 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.625,
      top: 2.344,
      width: 9.75,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.875 0 L 4.875 -0.656 L 4.875 0 Z M 8.625 3.75 L 9.281 3.75 L 8.625 3.75 Z M 9.75 7.5 L 9.75 8.156 L 11.563 8.156 L 10.17 6.996 L 9.75 7.5 Z M 0 7.5 L -0.42 6.996 L -1.813 8.156 L 0 8.156 L 0 7.5 Z M 1.125 3.75 L 1.781 3.75 C 1.781 2.929 2.107 2.143 2.687 1.562 L 2.223 1.098 L 1.759 0.634 C 0.933 1.461 0.469 2.581 0.469 3.75 L 1.125 3.75 Z M 2.223 1.098 L 2.687 1.562 C 3.268 0.982 4.054 0.656 4.875 0.656 L 4.875 0 L 4.875 -0.656 C 3.706 -0.656 2.586 -0.192 1.759 0.634 L 2.223 1.098 Z M 4.875 0 L 4.875 0.656 C 5.696 0.656 6.482 0.982 7.063 1.562 L 7.527 1.098 L 7.991 0.634 C 7.164 -0.192 6.044 -0.656 4.875 -0.656 L 4.875 0 Z M 7.527 1.098 L 7.063 1.562 C 7.643 2.143 7.969 2.929 7.969 3.75 L 8.625 3.75 L 9.281 3.75 C 9.281 2.581 8.817 1.461 7.991 0.634 L 7.527 1.098 Z M 8.625 3.75 L 7.969 3.75 C 7.969 5.246 8.269 6.282 8.596 6.964 C 8.759 7.303 8.926 7.55 9.062 7.72 C 9.129 7.804 9.189 7.869 9.235 7.916 C 9.258 7.939 9.278 7.958 9.294 7.973 C 9.302 7.98 9.309 7.986 9.315 7.991 C 9.318 7.994 9.321 7.996 9.323 7.999 C 9.324 8 9.326 8.001 9.327 8.002 C 9.327 8.002 9.328 8.002 9.328 8.003 C 9.329 8.003 9.329 8.003 9.329 8.004 C 9.33 8.004 9.33 8.004 9.75 7.5 C 10.17 6.996 10.17 6.996 10.171 6.996 C 10.171 6.997 10.171 6.997 10.172 6.997 C 10.172 6.997 10.172 6.998 10.173 6.998 C 10.174 6.999 10.174 6.999 10.175 7 C 10.177 7.001 10.178 7.002 10.179 7.003 C 10.18 7.005 10.181 7.005 10.181 7.005 C 10.18 7.005 10.176 7.001 10.168 6.993 C 10.153 6.978 10.125 6.947 10.087 6.9 C 10.011 6.805 9.897 6.642 9.779 6.396 C 9.544 5.905 9.281 5.066 9.281 3.75 L 8.625 3.75 Z M 9.75 7.5 L 9.75 6.844 L 0 6.844 L 0 7.5 L 0 8.156 L 9.75 8.156 L 9.75 7.5 Z M 0 7.5 C 0.42 8.004 0.42 8.004 0.421 8.004 C 0.421 8.003 0.421 8.003 0.422 8.003 C 0.422 8.002 0.423 8.002 0.423 8.002 C 0.424 8.001 0.426 8 0.427 7.999 C 0.429 7.996 0.432 7.994 0.435 7.991 C 0.441 7.986 0.448 7.98 0.456 7.973 C 0.472 7.958 0.492 7.939 0.515 7.916 C 0.561 7.869 0.621 7.804 0.688 7.72 C 0.824 7.55 0.991 7.303 1.154 6.964 C 1.481 6.282 1.781 5.246 1.781 3.75 L 1.125 3.75 L 0.469 3.75 C 0.469 5.066 0.206 5.905 -0.029 6.396 C -0.147 6.642 -0.261 6.805 -0.337 6.9 C -0.375 6.947 -0.403 6.978 -0.418 6.993 C -0.426 7.001 -0.43 7.005 -0.431 7.005 C -0.431 7.005 -0.43 7.005 -0.429 7.003 C -0.428 7.002 -0.427 7.001 -0.425 7 C -0.424 6.999 -0.424 6.999 -0.423 6.998 C -0.422 6.998 -0.422 6.997 -0.422 6.997 C -0.421 6.997 -0.421 6.997 -0.421 6.996 C -0.42 6.996 -0.42 6.996 0 7.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.625,
    height: 0.774,
    viewBox: "0 0 2.625 0.774",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.188,
      top: 12.188,
      width: 2.625,
      height: 0.774
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.574 0.318 C -0.388 0.655 -0.114 0.936 0.217 1.131 L 0.551 0.566 L 0.884 0.001 C 0.754 -0.076 0.647 -0.186 0.574 -0.318 L 0 0 Z M 0.551 0.566 L 0.217 1.131 C 0.549 1.327 0.927 1.43 1.313 1.43 L 1.313 0.774 L 1.313 0.118 C 1.162 0.118 1.014 0.077 0.884 0.001 L 0.551 0.566 Z M 1.313 0.774 L 1.313 1.43 C 1.698 1.43 2.076 1.327 2.408 1.131 L 2.074 0.566 L 1.741 0.001 C 1.611 0.077 1.463 0.118 1.313 0.118 L 1.313 0.774 Z M 2.074 0.566 L 2.408 1.131 C 2.739 0.936 3.013 0.655 3.199 0.318 L 2.625 0 L 2.051 -0.318 C 1.978 -0.186 1.871 -0.076 1.741 0.001 L 2.074 0.566 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 277.24,
      top: 9.167,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 10.667,
      width: 12,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(255,255,255)"
    }
  }, "\uAE40")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 233.24,
      top: 9.667,
      width: 36,
      height: 36,
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(234,234,238)",
      borderRight: "0.667px solid rgb(234,234,238)",
      borderBottom: "0.667px solid rgb(234,234,238)",
      borderLeft: "0.667px solid rgb(234,234,238)"
    }
  }, /*#__PURE__*/React.createElement(MaterialSymbolsLogout, {
    style: {
      position: "absolute",
      left: 7.667,
      top: 10.833,
      width: 19,
      height: 19
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.667,
      top: 101.667,
      width: 1334.667,
      height: 333.125
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1334.667,
      height: 67.125
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1347.967,
      height: 42,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "41.800px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uC124\uC815"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 49.792,
      width: 1342.667,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.2300000190734863,
      color: "rgb(107,107,115)"
    }
  }, "\uC704\uD5D8 \uC791\uC5C5 \uD0A4\uC6CC\uB4DC\uC640 \uADFC\uBB34 \uC2DC\uAC04\uC740 \uD300\uC6D0 \uD654\uBA74\uC758 \uC0AC\uC804 \uC548\uB0B4\xB7\uC2DC\uCC28 \uC751\uB2F5\uC5D0 \uADF8\uB300\uB85C \uC4F0\uC785\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 85.125,
      width: 1334.667,
      height: 248
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 659.333,
      height: 248,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "0.667px solid rgb(239,239,241)",
      borderBottom: "0.667px solid rgb(239,239,241)",
      borderLeft: "0.667px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 659.333,
      height: 248,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 22.667,
      width: 614,
      height: 25.333
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 144.25,
      height: 24,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1.2599999904632568,
      letterSpacing: "-0.400px",
      color: "rgb(23,23,27)"
    }
  }, "\uC704\uD5D8 \uC791\uC5C5 \uD0A4\uC6CC\uB4DC"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 147.25,
      top: 5,
      width: 62.823,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      color: "rgb(160,160,168)"
    }
  }, "6\uAC1C \uB4F1\uB85D\uB428")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 68,
      width: 614,
      height: 124.938
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -4.865,
      width: 131.688,
      height: 39.333,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(248,218,218)",
      borderRight: "0.667px solid rgb(248,218,218)",
      borderBottom: "0.667px solid rgb(248,218,218)",
      borderLeft: "0.667px solid rgb(248,218,218)",
      boxShadow: "0px 6px 16px -10px rgba(23,44,90,0.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.667,
      top: 15.667,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(220,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30.667,
      top: 11.333,
      width: 23,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(58,58,66)"
    }
  }, "\uBC30\uD3EC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 63.667,
      top: 9.667,
      width: 37,
      height: 20,
      borderRadius: 7,
      backgroundColor: "rgb(254,242,242)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(220,38,38)"
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 108.667,
      top: 11.667,
      width: 9,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(180,180,188)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 141.688,
      top: -4.865,
      width: 149.313,
      height: 39.333,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(248,218,218)",
      borderRight: "0.667px solid rgb(248,218,218)",
      borderBottom: "0.667px solid rgb(248,218,218)",
      borderLeft: "0.667px solid rgb(248,218,218)",
      boxShadow: "0px 6px 16px -10px rgba(23,44,90,0.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.667,
      top: 15.667,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(220,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30.667,
      top: 12,
      width: 43,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(58,58,66)"
    }
  }, "deploy"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 81.292,
      top: 9.667,
      width: 37,
      height: 20,
      borderRadius: 7,
      backgroundColor: "rgb(254,242,242)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(220,38,38)"
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 126.292,
      top: 11.667,
      width: 9,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(180,180,188)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 301,
      top: -4.865,
      width: 150.833,
      height: 39.333,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(248,218,218)",
      borderRight: "0.667px solid rgb(248,218,218)",
      borderBottom: "0.667px solid rgb(248,218,218)",
      borderLeft: "0.667px solid rgb(248,218,218)",
      boxShadow: "0px 6px 16px -10px rgba(23,44,90,0.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.667,
      top: 15.667,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(220,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30.667,
      top: 12,
      width: 45,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(58,58,66)"
    }
  }, "release"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82.813,
      top: 9.667,
      width: 37,
      height: 20,
      borderRadius: 7,
      backgroundColor: "rgb(254,242,242)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(220,38,38)"
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 127.813,
      top: 11.667,
      width: 9,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(180,180,188)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 44.469,
      width: 176.792,
      height: 39.333,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(248,218,218)",
      borderRight: "0.667px solid rgb(248,218,218)",
      borderBottom: "0.667px solid rgb(248,218,218)",
      borderLeft: "0.667px solid rgb(248,218,218)",
      boxShadow: "0px 6px 16px -10px rgba(23,44,90,0.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.667,
      top: 15.667,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(220,38,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30.667,
      top: 11.333,
      width: 67,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(58,58,66)"
    }
  }, "\uD504\uB85C\uB355\uC158 DB"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.771,
      top: 9.667,
      width: 37,
      height: 20,
      borderRadius: 7,
      backgroundColor: "rgb(254,242,242)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(220,38,38)"
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 153.771,
      top: 11.667,
      width: 9,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(180,180,188)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 186.792,
      top: 44.469,
      width: 181.688,
      height: 39.333,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(245,227,200)",
      borderRight: "0.667px solid rgb(245,227,200)",
      borderBottom: "0.667px solid rgb(245,227,200)",
      borderLeft: "0.667px solid rgb(245,227,200)",
      boxShadow: "0px 6px 16px -10px rgba(23,44,90,0.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.667,
      top: 15.667,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(234,106,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30.667,
      top: 11.333,
      width: 69,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(58,58,66)"
    }
  }, "\uB9C8\uC774\uADF8\uB808\uC774\uC158"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 113.667,
      top: 9.667,
      width: 37,
      height: 20,
      borderRadius: 7,
      backgroundColor: "rgb(255,247,237)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(234,106,10)"
    }
  }, "\uC8FC\uC758")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 158.667,
      top: 11.667,
      width: 9,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(180,180,188)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 378.479,
      top: 44.469,
      width: 158.875,
      height: 39.333,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(245,227,200)",
      borderRight: "0.667px solid rgb(245,227,200)",
      borderBottom: "0.667px solid rgb(245,227,200)",
      borderLeft: "0.667px solid rgb(245,227,200)",
      boxShadow: "0px 6px 16px -10px rgba(23,44,90,0.2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.667,
      top: 15.667,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(234,106,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30.667,
      top: 11.333,
      width: 49,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(58,58,66)"
    }
  }, "\uD658\uBD88 \uCC98\uB9AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 90.854,
      top: 9.667,
      width: 37,
      height: 20,
      borderRadius: 7,
      backgroundColor: "rgb(255,247,237)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8,
      top: 3.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(234,106,10)"
    }
  }, "\uC8FC\uC758")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 135.854,
      top: 11.667,
      width: 9,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(180,180,188)"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 93.802,
      width: 104.24,
      height: 36,
      borderRadius: 999,
      borderTop: "0.667px dashed rgb(216,216,222)",
      borderRight: "0.667px dashed rgb(216,216,222)",
      borderBottom: "0.667px dashed rgb(216,216,222)",
      borderLeft: "0.667px dashed rgb(216,216,222)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14.667,
      top: 10.333,
      width: 70,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(160,160,168)"
    }
  }, "+ \uD0A4\uC6CC\uB4DC \uCD94\uAC00"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 206.938,
      width: 622,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      lineHeight: "18.400px",
      color: "rgb(160,160,168)"
    }
  }, "\uB4F1\uB85D\uB41C \uD0A4\uC6CC\uB4DC\uAC00 \uC9C0\uC2DC\uC5D0 \uD3EC\uD568\uB418\uBA74 \uD300\uC6D0\uC5D0\uAC8C \uC2E4\uD589 \uC804 \uC548\uB0B4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 675.333,
      top: 0,
      width: 659.333,
      height: 246.052,
      borderRadius: 22,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "0.667px solid rgb(239,239,241)",
      borderBottom: "0.667px solid rgb(239,239,241)",
      borderLeft: "0.667px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 659.333,
      height: 246.052,
      borderRadius: 22,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 22.667,
      width: 622,
      height: 24,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1.2599999904632568,
      letterSpacing: "-0.400px",
      color: "rgb(23,23,27)"
    }
  }, "\uADFC\uBB34 \uC2DC\uAC04"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 62,
      width: 614,
      height: 40.385
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4,
      width: 560,
      height: 32.385
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 184.688,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "17.550px",
      color: "rgb(23,23,27)"
    }
  }, "\uADFC\uBB34 \uC2DC\uAC04 09:00\u201318:00 (KST)"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 17.542,
      width: 217.229,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "14.850px",
      color: "rgb(160,160,168)"
    }
  }, "\uC774 \uC2DC\uAC04 \uBC16 \uC9C8\uBB38\uC5D0\uB294 \uB300\uAE30 \uC548\uB0B4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 572,
      top: 8.188,
      width: 42,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 21,
      top: 3,
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 50,
      filter: "drop-shadow(0px 1px 3px rgba(17,17,20,0.22))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9 C 0 4.029 4.029 0 9 0 L 9 0 C 13.971 0 18 4.029 18 9 L 18 9 C 18 13.971 13.971 18 9 18 L 9 18 C 4.029 18 0 13.971 0 9 L 0 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 614,
    height: 1,
    viewBox: "0 0 614 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.667,
      top: 116.385,
      width: 614,
      height: 1,
      overflow: "hidden",
      color: "rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 614 0 L 614 1 L 0 1 L 0 0 Z",
    fill: "none",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 131.385,
      width: 622,
      height: 24,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1.2599999904632568,
      letterSpacing: "-0.400px",
      color: "rgb(23,23,27)"
    }
  }, "\uD68C\uC0AC \uCF54\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.667,
      top: 170.719,
      width: 614,
      height: 52.667
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 516.344,
      height: 52.667,
      borderRadius: 14,
      backgroundColor: "rgb(244,244,246)",
      borderTop: "0.667px solid rgb(230,230,235)",
      borderRight: "0.667px solid rgb(230,230,235)",
      borderBottom: "0.667px solid rgb(230,230,235)",
      borderLeft: "0.667px solid rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 199.833,
      top: 12.667,
      width: 111,
      height: 27,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 19,
      whiteSpace: "nowrap",
      lineHeight: 1.440000057220459,
      letterSpacing: "3px",
      color: "rgb(23,23,27)"
    }
  }, "ECO-4K7Q")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 526.344,
      top: 5,
      width: 87.656,
      height: 42.667,
      borderRadius: 14,
      backgroundColor: "rgb(37,99,235)",
      borderTop: "0.667px solid rgba(0,0,0,0)",
      borderRight: "0.667px solid rgba(0,0,0,0)",
      borderBottom: "0.667px solid rgba(0,0,0,0)",
      borderLeft: "0.667px solid rgba(0,0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16.667,
      top: 13.333,
      width: 62.323,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      lineHeight: 1.2300000190734863,
      color: "rgb(255,255,255)"
    }
  }, "\uCF54\uB4DC \uBCF5\uC0AC")))))));
}

const Own2 = { Dash: BackgroundBorder, Handbook: BackgroundBorderShadow, Questions: BackgroundBorder2, Sources: BackgroundBorder3, Settings: Div };

export { BackgroundBorder, BackgroundBorderShadow, BackgroundBorder2, BackgroundBorder3, Div as OwnerSettingsDiv, MaterialSymbolsLogout, Own2 };
