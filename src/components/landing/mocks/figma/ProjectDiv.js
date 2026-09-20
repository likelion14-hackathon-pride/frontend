// Ported verbatim from sai-landing-slim/components/components-div.js (Figma-materialized
// 'Div' component, node 1:2 — the Project/team knowledge mock, 1372x956).
// Only change from the original: the trailing `window.Div = Div;` assignment below was
// replaced with an ES export, and a React import was added. Component internals are untouched.
import React from 'react';
import '../figAssets.css';
// Components bundle — 1 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 1:2 div
function Div(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1d56af742747464c " + (props.className || ''),
    style: {
      width: 1372,
      height: 956,
      overflow: "hidden",
      borderRadius: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1372,
      height: 956,
      borderRadius: 24,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6565e336d3d40fab-870b0ffc",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 260,
      height: 956,
      borderRight: "0.667px solid rgb(239,239,241)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 22,
      width: 232,
      height: 141
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-95addb661582b9d9-93d2cea7",
    style: {
      position: "absolute",
      left: 8,
      top: 45,
      width: 51,
      height: 51
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-446c2181b9ae438d-d9061b87",
    style: {
      position: "absolute",
      left: 69,
      top: 57.5,
      width: 60.06,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 681.87,
      width: 227.333,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-85c94a1c43f8652c-de8adcd4",
    style: {
      position: "relative",
      height: 124,
      borderRadius: 14,
      borderTop: "0.667px solid rgba(255,96,0,0.14)",
      borderRight: "0.667px solid rgba(255,96,0,0.14)",
      borderBottom: "0.667px solid rgba(255,96,0,0.14)",
      borderLeft: "0.667px solid rgba(255,96,0,0.14)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15.667,
      top: 14.667,
      width: 204,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      letterSpacing: "1.035px",
      color: "rgb(227,91,0)"
    }
  }, "SAI READ FOR YOU TODAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.667,
      top: 39.333,
      width: 196,
      height: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 196,
      height: 18.667
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 178.948,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.2899999618530273,
      color: "rgb(107,107,115)"
    }
  }, "Slack messages"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 178.948,
      top: 0,
      width: 25.052,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14.5,
      lineHeight: 1.2899999618530273,
      color: "rgb(23,23,27)"
    }
  }, "37")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 25.667,
      width: 196,
      height: 18.667
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 186.396,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.2899999618530273,
      color: "rgb(107,107,115)"
    }
  }, "Turned into tasks"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 186.396,
      top: 0,
      width: 17.604,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14.5,
      lineHeight: 1.2899999618530273,
      color: "rgb(23,23,27)"
    }
  }, "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 51.333,
      width: 196,
      height: 18.667
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.667,
      width: 190.01,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.2899999618530273,
      color: "rgb(107,107,115)"
    }
  }, "Waiting the answered"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 190.01,
      top: 0,
      width: 13.99,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14.5,
      lineHeight: 1.2899999618530273,
      color: "rgb(255,96,0)"
    }
  }, "1")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53.146,
      borderRadius: 12,
      backgroundColor: "rgb(247,247,248)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 12.573,
      width: 28,
      height: 28,
      borderRadius: 50,
      backgroundColor: "rgb(228,228,232)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 8.417,
      top: 6.333,
      width: 12,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(107,107,115)"
    }
  }, "M")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 47,
      top: 10,
      width: 132.5,
      height: 33.146
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 140.5,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "18.200px",
      color: "rgb(23,23,27)"
    }
  }, "Minh"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 18.198,
      width: 140.5,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      lineHeight: "14.950px",
      color: "rgb(160,160,168)"
    }
  }, "Backend \xB7 Hanoi (UTC+7)")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28,
      top: 912,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 18 C 1.45 18 0.979 17.804 0.588 17.413 C 0.197 17.022 0.001 16.551 0 16 L 0 2 C 0 1.45 0.196 0.979 0.588 0.588 C 0.98 0.197 1.451 0.001 2 0 L 9 0 L 9 2 L 2 2 L 2 16 L 9 16 L 9 18 L 2 18 Z M 13 14 L 11.625 12.55 L 14.175 10 L 6 10 L 6 8 L 14.175 8 L 11.625 5.45 L 13 4 L 18 9 L 13 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 58,
      top: 914,
      width: 140.5,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "18.200px",
      color: "rgb(23,23,27)"
    }
  }, "Logout"), /*#__PURE__*/React.createElement("svg", {
    width: 227,
    height: 1,
    viewBox: "0 -0.500 227 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 892,
      width: 227,
      height: 1,
      color: "rgb(160,160,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 227 0 L 227 -0.5 L 227 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 189,
      width: 227.333,
      height: 350
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 227.333,
      height: 44,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 14.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.688,
    height: 4.688,
    viewBox: "0 0 4.688 4.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.875,
      top: 1.875,
      width: 4.688,
      height: 4.688,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.375 0 L 1.313 0 C 0.588 0 0 0.588 0 1.313 L 0 3.375 C 0 4.1 0.588 4.688 1.313 4.688 L 3.375 4.688 C 4.1 4.688 4.688 4.1 4.688 3.375 L 4.688 1.313 C 4.688 0.588 4.1 0 3.375 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.688,
    height: 4.688,
    viewBox: "0 0 4.688 4.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.438,
      top: 1.875,
      width: 4.688,
      height: 4.688,
      opacity: 0.45,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.375 0 L 1.312 0 C 0.588 0 0 0.588 0 1.313 L 0 3.375 C 0 4.1 0.588 4.688 1.312 4.688 L 3.375 4.688 C 4.1 4.688 4.688 4.1 4.688 3.375 L 4.688 1.313 C 4.688 0.588 4.1 0 3.375 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.688,
    height: 4.688,
    viewBox: "0 0 4.688 4.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.875,
      top: 8.438,
      width: 4.688,
      height: 4.688,
      opacity: 0.45,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.375 0 L 1.313 0 C 0.588 0 0 0.588 0 1.312 L 0 3.375 C 0 4.1 0.588 4.688 1.313 4.688 L 3.375 4.688 C 4.1 4.688 4.688 4.1 4.688 3.375 L 4.688 1.312 C 4.688 0.588 4.1 0 3.375 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.688,
    height: 4.688,
    viewBox: "0 0 4.688 4.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.438,
      top: 8.438,
      width: 4.688,
      height: 4.688,
      opacity: 0.45,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.375 0 L 1.312 0 C 0.588 0 0 0.588 0 1.312 L 0 3.375 C 0 4.1 0.588 4.688 1.312 4.688 L 3.375 4.688 C 4.1 4.688 4.688 4.1 4.688 3.375 L 4.688 1.312 C 4.688 0.588 4.1 0 3.375 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 12,
      width: 54.708,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.25,
      color: "rgb(107,107,115)"
    }
  }, "Home")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 47,
      width: 227.333,
      height: 44,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 14.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.875,
    height: 10.875,
    viewBox: "0 0 10.875 10.875",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.875,
      top: 2.063,
      width: 10.875,
      height: 10.875,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.588 0.09 C 4.637 -0.269 4.386 -0.601 4.027 -0.65 C 3.668 -0.7 3.337 -0.449 3.287 -0.09 L 3.937 0 L 4.588 0.09 Z M 1.787 10.785 C 1.738 11.144 1.989 11.476 2.348 11.525 C 2.707 11.575 3.038 11.324 3.088 10.965 L 2.437 10.875 L 1.787 10.785 Z M 9.463 0.09 C 9.512 -0.269 9.261 -0.601 8.902 -0.65 C 8.543 -0.7 8.212 -0.449 8.162 -0.09 L 8.812 0 L 9.463 0.09 Z M 6.662 10.785 C 6.613 11.144 6.864 11.476 7.223 11.525 C 7.582 11.575 7.913 11.324 7.963 10.965 L 7.312 10.875 L 6.662 10.785 Z M 0.375 2.531 C 0.013 2.531 -0.281 2.825 -0.281 3.187 C -0.281 3.55 0.013 3.844 0.375 3.844 L 0.375 3.187 L 0.375 2.531 Z M 10.875 3.844 C 11.237 3.844 11.531 3.55 11.531 3.187 C 11.531 2.825 11.237 2.531 10.875 2.531 L 10.875 3.187 L 10.875 3.844 Z M 0 7.031 C -0.362 7.031 -0.656 7.325 -0.656 7.687 C -0.656 8.05 -0.362 8.344 0 8.344 L 0 7.687 L 0 7.031 Z M 10.5 8.344 C 10.862 8.344 11.156 8.05 11.156 7.687 C 11.156 7.325 10.862 7.031 10.5 7.031 L 10.5 7.687 L 10.5 8.344 Z M 3.937 0 L 3.287 -0.09 L 1.787 10.785 L 2.437 10.875 L 3.088 10.965 L 4.588 0.09 L 3.937 0 Z M 8.812 0 L 8.162 -0.09 L 6.662 10.785 L 7.312 10.875 L 7.963 10.965 L 9.463 0.09 L 8.812 0 Z M 0.375 3.187 L 0.375 3.844 L 10.875 3.844 L 10.875 3.187 L 10.875 2.531 L 0.375 2.531 L 0.375 3.187 Z M 0 7.687 L 0 8.344 L 10.5 8.344 L 10.5 7.687 L 10.5 7.031 L 0 7.031 L 0 7.687 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 12,
      width: 50.26,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.25,
      color: "rgb(107,107,115)"
    }
  }, "Tasks"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-de727597385139be-765d36ef",
    style: {
      position: "absolute",
      left: 195.302,
      top: 13.667,
      width: 19.031,
      height: 16.667,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.031,
      height: 16.667,
      borderRadius: 20,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6,
      top: 1,
      width: 8,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(255,255,255)"
    }
  }, "3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 94,
      width: 227.333,
      height: 44,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 14.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.719,
    height: 10.219,
    viewBox: "0 0 11.719 10.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.938,
      top: 2.531,
      width: 11.719,
      height: 10.219,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.719 6.375 L 11.063 6.375 L 11.719 6.375 Z M 10.677 7.934 L 10.928 8.54 L 10.677 7.934 Z M 10.031 8.063 L 10.031 8.719 L 10.031 8.063 Z M 5.063 8.063 L 5.063 7.406 C 4.931 7.406 4.803 7.445 4.695 7.519 L 5.063 8.063 Z M 1.875 10.219 L 1.219 10.219 C 1.219 10.462 1.353 10.685 1.567 10.798 C 1.782 10.912 2.042 10.898 2.243 10.762 L 1.875 10.219 Z M 1.875 8.063 L 2.531 8.063 C 2.531 7.7 2.237 7.406 1.875 7.406 L 1.875 8.063 Z M 1.042 7.934 L 0.791 8.54 L 1.042 7.934 Z M 0 1.688 L -0.656 1.688 L 0 1.688 Z M 1.688 0 L 1.688 -0.656 L 1.688 0 Z M 11.719 1.688 L 11.063 1.688 L 11.719 1.688 Z M 11.719 6.375 L 11.063 6.375 C 11.063 6.51 11.036 6.645 10.984 6.77 L 11.59 7.021 L 12.197 7.272 C 12.314 6.988 12.375 6.683 12.375 6.375 L 11.719 6.375 Z M 11.59 7.021 L 10.984 6.77 C 10.932 6.895 10.856 7.008 10.76 7.104 L 11.224 7.568 L 11.689 8.032 C 11.906 7.815 12.079 7.556 12.197 7.272 L 11.59 7.021 Z M 11.224 7.568 L 10.76 7.104 C 10.665 7.2 10.551 7.276 10.426 7.328 L 10.677 7.934 L 10.928 8.54 C 11.213 8.423 11.471 8.25 11.689 8.032 L 11.224 7.568 Z M 10.677 7.934 L 10.426 7.328 C 10.301 7.38 10.167 7.406 10.031 7.406 L 10.031 8.063 L 10.031 8.719 C 10.339 8.719 10.644 8.658 10.928 8.54 L 10.677 7.934 Z M 10.031 8.063 L 10.031 7.406 L 5.063 7.406 L 5.063 8.063 L 5.063 8.719 L 10.031 8.719 L 10.031 8.063 Z M 5.063 8.063 L 4.695 7.519 L 1.507 9.675 L 1.875 10.219 L 2.243 10.762 L 5.43 8.606 L 5.063 8.063 Z M 1.875 10.219 L 2.531 10.219 L 2.531 8.063 L 1.875 8.063 L 1.219 8.063 L 1.219 10.219 L 1.875 10.219 Z M 1.875 8.063 L 1.875 7.406 L 1.688 7.406 L 1.688 8.063 L 1.688 8.719 L 1.875 8.719 L 1.875 8.063 Z M 1.688 8.063 L 1.688 7.406 C 1.552 7.406 1.418 7.38 1.293 7.328 L 1.042 7.934 L 0.791 8.54 C 1.075 8.658 1.38 8.719 1.688 8.719 L 1.688 8.063 Z M 1.042 7.934 L 1.293 7.328 C 1.168 7.276 1.054 7.2 0.958 7.104 L 0.494 7.568 L 0.03 8.032 C 0.248 8.25 0.506 8.423 0.791 8.54 L 1.042 7.934 Z M 0.494 7.568 L 0.958 7.104 C 0.863 7.008 0.787 6.895 0.735 6.77 L 0.128 7.021 L -0.478 7.272 C -0.36 7.556 -0.187 7.815 0.03 8.032 L 0.494 7.568 Z M 0.128 7.021 L 0.735 6.77 C 0.683 6.645 0.656 6.51 0.656 6.375 L 0 6.375 L -0.656 6.375 C -0.656 6.683 -0.596 6.988 -0.478 7.272 L 0.128 7.021 Z M 0 6.375 L 0.656 6.375 L 0.656 1.688 L 0 1.688 L -0.656 1.688 L -0.656 6.375 L 0 6.375 Z M 0 1.688 L 0.656 1.688 C 0.656 1.414 0.765 1.152 0.958 0.958 L 0.494 0.494 L 0.03 0.03 C -0.409 0.47 -0.656 1.066 -0.656 1.688 L 0 1.688 Z M 0.494 0.494 L 0.958 0.958 C 1.152 0.765 1.414 0.656 1.688 0.656 L 1.688 0 L 1.688 -0.656 C 1.066 -0.656 0.47 -0.409 0.03 0.03 L 0.494 0.494 Z M 1.688 0 L 1.688 0.656 L 10.031 0.656 L 10.031 0 L 10.031 -0.656 L 1.688 -0.656 L 1.688 0 Z M 10.031 0 L 10.031 0.656 C 10.305 0.656 10.567 0.765 10.76 0.958 L 11.224 0.494 L 11.689 0.03 C 11.249 -0.409 10.653 -0.656 10.031 -0.656 L 10.031 0 Z M 11.224 0.494 L 10.76 0.958 C 10.954 1.152 11.063 1.414 11.063 1.688 L 11.719 1.688 L 12.375 1.688 C 12.375 1.066 12.128 0.47 11.689 0.03 L 11.224 0.494 Z M 11.719 1.688 L 11.063 1.688 L 11.063 6.375 L 11.719 6.375 L 12.375 6.375 L 12.375 1.688 L 11.719 1.688 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38,
      top: 12,
      width: 56.833,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.25,
      color: "rgb(107,107,115)"
    }
  }, "Ask SAI"))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bcfe24dfb2c11817-134d1309",
    style: {
      position: "absolute",
      left: 0,
      top: 141,
      width: 227.333,
      height: 44,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 227.333,
      height: 44,
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 14.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.156,
    height: 9.633,
    viewBox: "0 0 5.156 9.633",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.344,
      top: 2.367,
      width: 5.156,
      height: 9.633,
      opacity: 0.45,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.633 C 1.781 -0.211 3.469 -0.211 5.156 0.633 L 5.156 9.633 C 3.469 8.789 1.781 8.789 0 9.633 L 0 0.633 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.156,
    height: 9.633,
    viewBox: "0 0 5.156 9.633",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 2.367,
      width: 5.156,
      height: 9.633,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.156 0.633 C 3.375 -0.211 1.688 -0.211 0 0.633 L 0 9.633 C 1.688 8.789 3.375 8.789 5.156 9.633 L 5.156 0.633 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 12,
      width: 90.104,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.25,
      color: "rgb(255,255,255)"
    }
  }, "Handbook"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 205,
      top: 15,
      width: 17.333,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      lineHeight: 1.2100000381469727,
      color: "rgb(192,192,200)"
    }
  }, "\u25BE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 192,
      width: 207.333,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 207.333,
      height: 38,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 12.5,
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.750,
    height: 7.962,
    viewBox: "0 0 9.750 7.962",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.625,
      top: 2.763,
      width: 9.75,
      height: 7.962,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.25 0 L 3.713 -0.397 C 3.597 -0.532 3.428 -0.609 3.25 -0.609 L 3.25 0 Z M 4.225 1.138 L 3.762 1.534 C 3.878 1.669 4.047 1.747 4.225 1.747 L 4.225 1.138 Z M 0 0.813 L 0.609 0.813 C 0.609 0.748 0.633 0.703 0.67 0.669 C 0.712 0.629 0.768 0.609 0.813 0.609 L 0.813 0 L 0.813 -0.609 C 0.11 -0.609 -0.609 -0.05 -0.609 0.813 L 0 0.813 Z M 0.813 0 L 0.813 0.609 L 3.25 0.609 L 3.25 0 L 3.25 -0.609 L 0.813 -0.609 L 0.813 0 Z M 3.25 0 L 2.787 0.397 L 3.762 1.534 L 4.225 1.138 L 4.688 0.741 L 3.713 -0.397 L 3.25 0 Z M 4.225 1.138 L 4.225 1.747 L 8.938 1.747 L 8.938 1.138 L 8.938 0.528 L 4.225 0.528 L 4.225 1.138 Z M 8.938 1.138 L 8.938 1.747 C 9.002 1.747 9.047 1.771 9.081 1.807 C 9.121 1.85 9.141 1.906 9.141 1.95 L 9.75 1.95 L 10.359 1.95 C 10.359 1.247 9.8 0.528 8.938 0.528 L 8.938 1.138 Z M 9.75 1.95 L 9.141 1.95 L 9.141 7.15 L 9.75 7.15 L 10.359 7.15 L 10.359 1.95 L 9.75 1.95 Z M 9.75 7.15 L 9.141 7.15 C 9.141 7.255 9.108 7.296 9.096 7.308 C 9.083 7.321 9.043 7.353 8.938 7.353 L 8.938 7.962 L 8.938 8.572 C 9.32 8.572 9.686 8.442 9.957 8.17 C 10.229 7.898 10.359 7.532 10.359 7.15 L 9.75 7.15 Z M 8.938 7.962 L 8.938 7.353 L 0.813 7.353 L 0.813 7.962 L 0.813 8.572 L 8.938 8.572 L 8.938 7.962 Z M 0.813 7.962 L 0.813 7.353 C 0.768 7.353 0.712 7.333 0.67 7.294 C 0.633 7.259 0.609 7.214 0.609 7.15 L 0 7.15 L -0.609 7.15 C -0.609 8.013 0.11 8.572 0.813 8.572 L 0.813 7.962 Z M 0 7.15 L 0.609 7.15 L 0.609 0.813 L 0 0.813 L -0.609 0.813 L -0.609 7.15 L 0 7.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 33,
      top: 10,
      width: 150.833,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.2899999618530273,
      color: "rgb(107,107,115)"
    }
  }, "Company system"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 184.833,
      top: 11.667,
      width: 19.5,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      color: "rgb(107,107,115)"
    }
  }, "12")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 44,
      width: 207.333,
      height: 38,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 12.5,
      width: 13,
      height: 13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.219,
    height: 7.150,
    viewBox: "-0.609 0 1.219 7.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.737,
      top: 2.925,
      width: 1.21875,
      height: 7.15,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.609 0 C 0.609 -0.337 0.337 -0.609 0 -0.609 C -0.337 -0.609 -0.609 -0.337 -0.609 0 L 0 0 L 0.609 0 Z M -0.609 7.15 C -0.609 7.487 -0.337 7.759 0 7.759 C 0.337 7.759 0.609 7.487 0.609 7.15 L 0 7.15 L -0.609 7.15 Z M 0 0 L -0.609 0 L -0.609 7.15 L 0 7.15 L 0.609 7.15 L 0.609 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.275,
    height: 2.275,
    viewBox: "0 0 2.275 2.275",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.6,
      top: 0.65,
      width: 2.275,
      height: 2.275,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.275 1.138 L 1.666 1.138 C 1.666 1.429 1.429 1.666 1.137 1.666 L 1.137 2.275 L 1.137 2.884 C 2.102 2.884 2.884 2.102 2.884 1.138 L 2.275 1.138 Z M 1.137 2.275 L 1.137 1.666 C 0.846 1.666 0.609 1.429 0.609 1.138 L 0 1.138 L -0.609 1.138 C -0.609 2.102 0.173 2.884 1.137 2.884 L 1.137 2.275 Z M 0 1.138 L 0.609 1.138 C 0.609 0.846 0.846 0.609 1.137 0.609 L 1.137 0 L 1.137 -0.609 C 0.173 -0.609 -0.609 0.173 -0.609 1.138 L 0 1.138 Z M 1.137 0 L 1.137 0.609 C 1.429 0.609 1.666 0.846 1.666 1.138 L 2.275 1.138 L 2.884 1.138 C 2.884 0.173 2.102 -0.609 1.137 -0.609 L 1.137 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.275,
    height: 2.275,
    viewBox: "0 0 2.275 2.275",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.6,
      top: 10.075,
      width: 2.275,
      height: 2.275,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.275 1.138 L 1.666 1.138 C 1.666 1.429 1.429 1.666 1.137 1.666 L 1.137 2.275 L 1.137 2.884 C 2.102 2.884 2.884 2.102 2.884 1.138 L 2.275 1.138 Z M 1.137 2.275 L 1.137 1.666 C 0.846 1.666 0.609 1.429 0.609 1.138 L 0 1.138 L -0.609 1.138 C -0.609 2.102 0.173 2.884 1.137 2.884 L 1.137 2.275 Z M 0 1.138 L 0.609 1.138 C 0.609 0.846 0.846 0.609 1.137 0.609 L 1.137 0 L 1.137 -0.609 C 0.173 -0.609 -0.609 0.173 -0.609 1.138 L 0 1.138 Z M 1.137 0 L 1.137 0.609 C 1.429 0.609 1.666 0.846 1.666 1.138 L 2.275 1.138 L 2.884 1.138 C 2.884 0.173 2.102 -0.609 1.137 -0.609 L 1.137 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.275,
    height: 2.275,
    viewBox: "0 0 2.275 2.275",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.125,
      top: 1.625,
      width: 2.275,
      height: 2.275,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.275 1.138 L 1.666 1.138 C 1.666 1.429 1.429 1.666 1.137 1.666 L 1.137 2.275 L 1.137 2.884 C 2.102 2.884 2.884 2.102 2.884 1.138 L 2.275 1.138 Z M 1.137 2.275 L 1.137 1.666 C 0.846 1.666 0.609 1.429 0.609 1.138 L 0 1.138 L -0.609 1.138 C -0.609 2.102 0.173 2.884 1.137 2.884 L 1.137 2.275 Z M 0 1.138 L 0.609 1.138 C 0.609 0.846 0.846 0.609 1.137 0.609 L 1.137 0 L 1.137 -0.609 C 0.173 -0.609 -0.609 0.173 -0.609 1.138 L 0 1.138 Z M 1.137 0 L 1.137 0.609 C 1.429 0.609 1.666 0.846 1.666 1.138 L 2.275 1.138 L 2.884 1.138 C 2.884 0.173 2.102 -0.609 1.137 -0.609 L 1.137 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.525,
    height: 2.762,
    viewBox: "0 0 5.525 2.762",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.737,
      top: 3.9,
      width: 5.525,
      height: 2.762,
      color: "rgb(107,107,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.134 0 C 6.134 -0.337 5.862 -0.609 5.525 -0.609 C 5.188 -0.609 4.916 -0.337 4.916 0 L 5.525 0 L 6.134 0 Z M 0 2.153 C -0.337 2.153 -0.609 2.426 -0.609 2.762 C -0.609 3.099 -0.337 3.372 0 3.372 L 0 2.762 L 0 2.153 Z M 5.525 0 L 4.916 0 C 4.916 0.446 4.826 0.765 4.679 1.004 C 4.534 1.241 4.303 1.449 3.934 1.622 C 3.164 1.986 1.905 2.153 0 2.153 L 0 2.762 L 0 3.372 C 1.914 3.372 3.417 3.214 4.455 2.725 C 4.99 2.472 5.424 2.121 5.718 1.642 C 6.011 1.165 6.134 0.61 6.134 0 L 5.525 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 33,
      top: 10,
      width: 155.26,
      height: 18,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.2899999618530273,
      color: "rgb(107,107,115)"
    }
  }, "By project"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 189.26,
      top: 11.667,
      width: 15.073,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      color: "rgb(107,107,115)"
    }
  }, "5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 82,
      width: 207.333,
      height: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 0,
      width: 177.333,
      height: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a19e6de2b7f67ebd-8fe0c407",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 177.333,
      height: 34,
      borderRadius: 9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 12.5,
      width: 9,
      height: 9,
      overflow: "hidden",
      borderRadius: 3,
      color: "rgb(138,148,163)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 6 0 C 7.657 0 9 1.343 9 3 L 9 6 C 9 7.657 7.657 9 6 9 L 3 9 C 1.343 9 0 7.657 0 6 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 8,
      width: 133.302,
      height: 18,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: 1.3300000429153442,
      color: "rgb(90,102,117)"
    }
  }, "payment-api"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 160.302,
      top: 9.667,
      width: 15.031,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      color: "rgb(90,102,117)"
    }
  }, "3")), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1.500,
    viewBox: "0 0 12 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: -16,
      top: 17,
      width: 12,
      height: 1.5,
      overflow: "hidden",
      color: "rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 1.5 L 0 1.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 34,
      width: 177.333,
      height: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 177.333,
      height: 34,
      borderRadius: 9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 12.5,
      width: 9,
      height: 9,
      overflow: "hidden",
      borderRadius: 3,
      color: "rgb(216,216,222)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 6 0 C 7.657 0 9 1.343 9 3 L 9 6 C 9 7.657 7.657 9 6 9 L 3 9 C 1.343 9 0 7.657 0 6 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 8,
      width: 133.458,
      height: 18,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 13.5,
      lineHeight: 1.3300000429153442,
      color: "rgb(138,138,147)"
    }
  }, "admin-web"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 160.458,
      top: 9.667,
      width: 14.875,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      lineHeight: 1.2799999713897705,
      color: "rgb(138,138,147)"
    }
  }, "2")), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1.500,
    viewBox: "0 0 12 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: -16,
      top: 17,
      width: 12,
      height: 1.5,
      overflow: "hidden",
      color: "rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 0 L 12 1.5 L 0 1.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 1.500,
    height: 49,
    viewBox: "0 0 1.500 49",
    fill: "none",
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      width: 1.5,
      height: 49,
      overflow: "hidden",
      color: "rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1.5 0 L 1.5 49 L 0 49 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-decc1e66cad1ab71-573e013b",
    style: {
      position: "absolute",
      left: 260,
      top: 0,
      width: 1112,
      height: 956
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1112,
      height: 111.667
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 32,
      top: 40.167,
      width: 135.052,
      height: 31,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.25,
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "Handbook"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 174.302,
      top: 49.5,
      width: 158.542,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14.5,
      lineHeight: 1.2899999618530273,
      color: "rgb(138,138,147)"
    }
  }, "Wednesday, August 6"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 693.229,
      top: 26,
      width: 386.771,
      height: 59.667,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.85)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 386.771,
      height: 59.667,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 386.771,
      height: 59.667,
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
      width: 386.771,
      height: 59.667,
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.667,
      top: 9.667,
      width: 216.5,
      height: 40.333
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.667,
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(209,201,201)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 0,
      width: 36,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.4900000095367432,
      color: "rgb(23,23,27)"
    }
  }, "\uAE40\uB300\uD45C"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 74,
      top: 2,
      width: 40,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(138,138,147)"
    }
  }, "offline"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 134,
      top: 1.667,
      width: 83,
      height: 16,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(138,138,147)"
    }
  }, "Seoul 21:40"), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 29.333,
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(59,165,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 24.333,
      width: 24,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(23,23,27)"
    }
  }, "You"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 74,
      top: 24.667,
      width: 37,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      color: "rgb(138,138,147)"
    }
  }, "online"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 134,
      top: 24.333,
      width: 83,
      height: 16,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(138,138,147)"
    }
  }, "Hanoi 19:40")), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 40.333,
    viewBox: "0 0 1 40.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 246.167,
      top: 9.667,
      width: 1,
      height: 40.333,
      overflow: "hidden",
      color: "rgb(228,228,233)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1 0 L 1 40.333 L 0 40.333 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 261.167,
      top: 9.667,
      width: 109.938,
      height: 40.333
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 2.594,
      width: 86,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "14.950px",
      color: "rgb(160,160,168)"
    }
  }, "Reply expected"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 19.542,
      width: 109,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "18.200px",
      color: "rgb(23,23,27)"
    }
  }, "Tomorrow 11:00"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 111.667,
      width: 1112,
      height: 844.333,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 18,
      width: 1048,
      height: 274.833
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1048,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-95addb661582b9d9-93d2cea7",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.990,-0.139,0.139,0.990,6.616,-2.013)",
      transformOrigin: "0 0",
      width: 62,
      height: 62
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 78,
      top: 11,
      width: 968,
      height: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 149.198,
      height: 44,
      fontFamily: "Tahoma, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "44px",
      letterSpacing: "-1.300px",
      color: "rgb(23,23,27)"
    }
  }, "Project"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 147.198,
      top: 19.5,
      width: 161.917,
      height: 24.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.333,
      width: 162,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "19.500px",
      color: "rgb(160,160,168)"
    }
  }, "Applies to this project only")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 80,
      width: 1048,
      height: 194.833
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1048,
      height: 25.333
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 9.167,
      width: 16,
      height: 7,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -9,
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: "0px 0px 0px 5px",
      borderBottom: "0.667px solid rgb(220,220,226)",
      borderLeft: "0.667px solid rgb(220,220,226)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 0 0 M 16 16.667 L 5 16.667 C 1.87 16.667 -0.667 14.13 -0.667 11 L 0.667 11 C 0.667 13.393 2.607 15.333 5 15.333 L 16 15.333 L 16 16.667 Z M 5 16.667 C 1.87 16.667 -0.667 14.13 -0.667 11 L -0.667 0 L 0.667 0 L 0.667 11 C 0.667 13.393 2.607 15.333 5 15.333 L 5 16.667 Z M 5 15.333 M 16 0 L 16 16 L 16 0",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 9,
    viewBox: "0 0 9 9",
    fill: "none",
    style: {
      position: "absolute",
      left: 29,
      top: 8.167,
      width: 9,
      height: 9,
      overflow: "hidden",
      borderRadius: 3,
      color: "rgb(255,96,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 6 0 C 7.657 0 9 1.343 9 3 L 9 6 C 9 7.657 7.657 9 6 9 L 3 9 C 1.343 9 0 7.657 0 6 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 49,
      top: 0,
      width: 129,
      height: 25,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "payment-api"), /*#__PURE__*/React.createElement("svg", {
    width: 796.530,
    height: 1,
    viewBox: "0 0 796.530 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 188.063,
      top: 12.166,
      width: 796.53,
      height: 1,
      overflow: "hidden",
      color: "rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 796.53 0 L 796.53 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 995.594,
      top: 5,
      width: 51,
      height: 15,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(192,192,200)"
    }
  }, "3 items")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 33.333,
      width: 1048,
      height: 161.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1048,
      height: 48.5,
      borderRadius: 18,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1048,
      height: 48.5,
      borderRadius: 18,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 8,
      width: 1000,
      height: 32.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1000,
      height: 32.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 5.917,
      width: 159.771,
      height: 21,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16.5,
      lineHeight: 1.25,
      color: "rgb(23,23,27)"
    }
  }, "Error logs \u2192 Sentry"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 926.573,
      top: 7.917,
      width: 68,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(180,180,188)"
    }
  }, "sentry.yml \u25BE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56.5,
      width: 1048,
      height: 48.5,
      borderRadius: 18,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1048,
      height: 48.5,
      borderRadius: 18,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 8,
      width: 1000,
      height: 32.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1000,
      height: 32.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 5.917,
      width: 100.646,
      height: 21,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16.5,
      lineHeight: 1.25,
      color: "rgb(23,23,27)"
    }
  }, "Local setup"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 914.427,
      top: 7.917,
      width: 80,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(180,180,188)"
    }
  }, "README.md \u25BE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 113,
      width: 1048,
      height: 48.5,
      borderRadius: 18,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1048,
      height: 48.5,
      borderRadius: 18,
      backgroundColor: "rgba(255,255,255,0.002)",
      boxShadow: "0px 14px 34px -14px rgba(23,44,90,0.22), 0px 3px 8px -2px rgba(23,44,90,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 8,
      width: 1000,
      height: 32.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1000,
      height: 32.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 5.917,
      width: 131.594,
      height: 21,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16.5,
      lineHeight: 1.25,
      color: "rgb(23,23,27)"
    }
  }, "Issue before PR"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 873.042,
      top: 7.917,
      width: 122,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(180,180,188)"
    }
  }, "CONTRIBUTING.md \u25BE"))))))))));
}

export { Div };
