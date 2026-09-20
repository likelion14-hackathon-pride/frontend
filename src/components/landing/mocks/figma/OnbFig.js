// Ported verbatim from sai-landing-slim/components/components-onb.js (Figma-materialized
// onboarding bundle: Onb.Step1~4, nodes 18:3 / 18:280 / 18:109 / 18:560).
// Only changes from the original: (1) the trailing `window.*` assignments were replaced with
// ES exports, (2) the 3 `assets/onb-inline-*.png` string literals were swapped for real
// imported module paths (the files themselves are untouched, byte-identical copies from
// sai-landing-slim/assets/). Everything else — layout, styles, text — is untouched.
import React from 'react';
import '../figAssets.css';
import onbInlineC9 from '../../../../assets/landing/figmocks/onb-inline-c9ecaaaf.png';
import onbInlineAf from '../../../../assets/landing/figmocks/onb-inline-afcd323a.png';
import onbInline6e from '../../../../assets/landing/figmocks/onb-inline-6e8e83f4.png';
// Components bundle — 4 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 18:3 모은다
function Screen(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      maxWidth: 1400,
      maxHeight: null,
      borderRadius: 20,
      background: "radial-gradient(851.948px 583.505px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(662.626px 538.620px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(255,255,255,0.42)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 369.66,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", { src: onbInlineC9, alt: "", style: { position: "relative", width: 56, height: 56, objectFit: "contain", flexShrink: 0 } }), /*#__PURE__*/React.createElement("img", { src: onbInlineAf, alt: "", style: { position: "relative", width: 67, height: 28.862, objectFit: "contain", flexShrink: 0 } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 400,
      backgroundColor: "rgb(17,24,39)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "\uAE40")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 36,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "4px 20px 8px 4px",
      alignItems: "center",
      flexWrap: "wrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 74.69,
      minWidth: 440,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 1048.39,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 0.690px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "43.700px",
      letterSpacing: "-1.300px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uD300\uC5D0\uC11C \uC4F0\uB294 \uB3C4\uAD6C\uB97C \uC5F0\uACB0\uD574\uC8FC\uC138\uC694"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 124,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-82e07f64d0e31f96-8bb8482c",
    style: {
      position: "absolute",
      left: -1,
      top: -5,
      width: 125,
      height: 129
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 383,
      borderRadius: 22,
      background: "radial-gradient(213.440px 168.115px at 86.00% -14.00%, rgba(23,23,27,0.16) 0.00%, rgba(23,23,27,0.04) 46.00%, rgba(23,23,27,0) 74.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238), 0px 3px 8px -4px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b02ec39023a28b66",
    style: {
      position: "absolute",
      left: 0,
      top: 0.14,
      width: 38,
      height: 38
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34.42,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 291.66,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "20.250px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "GitHub")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 20.25,
      width: 291.66,
      height: 14.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 122.156,
      height: 15,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "14.180px",
      color: "rgb(160,160,168)"
    }
  }, "CI \uC124\uC815 \xB7 README \xB7 PR \uC774\uB825")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "20.400px",
      color: "rgb(107,107,115)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "배포 절차, 리뷰 규칙, 브랜치 전략처럼 코드 옆에 이미 적혀 있는 규칙을\n읽습니다.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(240,240,242)",
      display: "flex",
      flexDirection: "column",
      padding: "14px 0px 13px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uC5F0\uACB0\uD558\uAE30")))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-72b90c52d2235a10",
    style: {
      position: "relative",
      width: 383,
      height: 191,
      borderRadius: 22,
      borderTop: "0.667px solid rgb(239,239,241)",
      borderRight: "0.667px solid rgb(239,239,241)",
      borderBottom: "0.667px solid rgb(239,239,241)",
      borderLeft: "0.667px solid rgb(239,239,241)",
      boxShadow: "0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 18.667,
      width: 395.552,
      height: 38
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
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
      left: 0,
      top: 0,
      width: 38,
      height: 38
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.225,
      top: -0.323,
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238), 0px 3px 8px -4px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-beec4bcbb56ff354",
    style: {
      position: "absolute",
      left: 4.666,
      top: 6.14,
      width: 30,
      height: 27
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49,
      top: 1.792,
      width: 346.552,
      height: 34.417
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 1.333,
      width: 45.802,
      height: 21,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      lineHeight: "20.250px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "Slack"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 20.917,
      width: 93,
      height: 15,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "14.175px",
      color: "rgb(160,160,168)"
    }
  }, "\uCC44\uB110 \uD788\uC2A4\uD1A0\uB9AC \xB7 \uC2E4\uC2DC\uAC04"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 70.667,
      width: 403.552,
      height: 21,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "20.400px",
      color: "rgb(107,107,115)"
    }
  }, "\uB300\uD654 \uC18D\uC5D0\uC11C \uBC18\uBCF5\uB418\uB294 \uACB0\uC815\uACFC \uADDC\uCE59\uC758 \uD328\uD134\uC744 \uCC3E\uC544\uB0C5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.5,
      top: 128,
      width: 365.5,
      borderRadius: 999,
      backgroundColor: "rgb(240,240,242)",
      display: "flex",
      flexDirection: "column",
      padding: "14px 0px 13px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uC5F0\uACB0\uD558\uAE30")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 383,
      borderRadius: 22,
      background: "radial-gradient(213.440px 168.115px at 86.00% -14.00%, rgba(90,169,230,0.28) 0.00%, rgba(31,90,140,0.08) 48.00%, rgba(31,90,140,0) 76.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 3px 8px -2px rgba(23,44,90,0.08), 0px 14px 34px -14px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238), 0px 3px 8px -4px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", { src: onbInline6e, alt: "", style: { position: "relative", width: 24, height: 24, objectFit: "contain", flexShrink: 0 } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34.42,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 291.66,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "20.250px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uB85C\uCEEC \uD30C\uC77C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 20.25,
      width: 291.66,
      height: 14.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 71.113,
      height: 15,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "14.180px",
      color: "rgb(160,160,168)"
    }
  }, "md \xB7 txt \xB7 pdf \uB4F1")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "20.400px",
      color: "rgb(107,107,115)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "어느 도구에도 올라가 있지 않은 문서를 그대로 올려 주세요. 파일명이 출\n처로 남습니다.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(240,240,242)",
      display: "flex",
      flexDirection: "column",
      padding: "14px 0px 13px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uC5C5\uB85C\uB4DC\uD558\uAE30"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 22,
      background: "linear-gradient(125.423deg, rgb(16,24,40) -5.44%, rgb(27,42,74) 63.31%, rgb(34,55,106) 105.44%)",
      boxShadow: "inset 0 0 0 1px rgb(34,55,106)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "24px 32px 24px 32px",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "-0.300px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC544\uC9C1 \uC5F0\uACB0\uB41C \uC18C\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "20.400px",
      color: "rgba(255,255,255,0.62)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uAE30\uBCF8 \uADDC\uCE59 \uC9C8\uBB38\uC5D0 \uB2F5\uD558\uBA74 \uD578\uB4DC\uBD81\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4. \uC18C\uC2A4\uB294 \uADF8 \uC704\uC5D0 \uC5B9\uD788\uB294 \uC790\uB8CC\uC785\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.14)",
      display: "flex",
      flexDirection: "row",
      gap: 9,
      padding: "13px 22px 13px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minWidth: 109.23,
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgba(255,255,255,0.42)",
      flexShrink: 0
    }
  }, "\uAE30\uBCF8 \uADDC\uCE59 \uC815\uD558\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15,
      height: 15,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 1.900,
    viewBox: "0 -0.950 9 1.900",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 7.5,
      width: 9,
      height: 1.899999976158142
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.95 C -0.525 -0.95 -0.95 -0.525 -0.95 0 C -0.95 0.525 -0.525 0.95 0 0.95 L 0 0 L 0 -0.95 Z M 9 0.95 C 9.525 0.95 9.95 0.525 9.95 0 C 9.95 -0.525 9.525 -0.95 9 -0.95 L 9 0 L 9 0.95 Z M 0 0 L 0 0.95 L 9 0.95 L 9 0 L 9 -0.95 L 0 -0.95 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 4,
      width: 3.5,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.672 -0.672 C 0.301 -1.043 -0.301 -1.043 -0.672 -0.672 C -1.043 -0.301 -1.043 0.301 -0.672 0.672 L 0 0 L 0.672 -0.672 Z M 3.5 3.5 L 4.172 4.172 C 4.543 3.801 4.543 3.199 4.172 2.828 L 3.5 3.5 Z M -0.672 6.328 C -1.043 6.699 -1.043 7.301 -0.672 7.672 C -0.301 8.043 0.301 8.043 0.672 7.672 L 0 7 L -0.672 6.328 Z M 0 0 L -0.672 0.672 L 2.828 4.172 L 3.5 3.5 L 4.172 2.828 L 0.672 -0.672 L 0 0 Z M 3.5 3.5 L 2.828 2.828 L -0.672 6.328 L 0 7 L 0.672 7.672 L 4.172 4.172 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
}

// figma node: 18:280 div
function Div(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      height: 660,
      borderRadius: 20,
      background: "radial-gradient(851.948px 529.630px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(662.626px 488.889px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      borderTop: "0.667px solid rgba(255,255,255,0.9)",
      borderRight: "0.667px solid rgba(255,255,255,0.9)",
      borderBottom: "0.667px solid rgba(255,255,255,0.9)",
      borderLeft: "0.667px solid rgba(255,255,255,0.9)",
      boxShadow: "0px 2px 6px 0px rgba(23,44,90,0.06), 0px 30px 80px -34px rgba(23,44,90,0.3)",
      position: "relative",
      color: "rgb(23,23,27)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31,
      top: 112,
      width: 1224,
      height: 548
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 130
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 25.646,
      width: 1123,
      height: 74.698
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: -2.667,
      width: 508.623,
      height: 44,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "43.700px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)"
    }
  }, "\uD68C\uC0AC\uC758 \uAE30\uBCF8 \uADDC\uCE59\uBD80\uD130 \uC815\uD560\uAC8C\uC694"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0.333,
      top: 54.688,
      width: 616,
      height: 21,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "21px",
      color: "rgb(107,107,115)"
    }
  }, "\uD578\uB4DC\uBD81\uC73C\uB85C \uB0A8\uC544 \uD300\uC6D0\uB4E4\uACFC \uACF5\uC720\uB429\uB2C8\uB2E4. \uC815\uD574\uC9C4 \uAC8C \uC5C6\uC73C\uBA74 \uADF8\uB0E5 \uB118\uAE30\uC138\uC694. \uCD94\uD6C4\uC5D0 \uC218\uC815\xB7\uCD94\uAC00\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-82e07f64d0e31f96-4c9b9fa6",
    style: {
      position: "absolute",
      left: 1068.333,
      top: 1.333,
      width: 148,
      height: 111
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 211,
      width: 1225,
      height: 337
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: 0,
      width: 1217,
      height: 248
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -5.167,
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1.333px solid rgb(224,224,230)",
      borderLeft: "1.333px solid rgb(224,224,230)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 0 0 M 16 17.333 L 7 17.333 C 2.398 17.333 -1.333 13.602 -1.333 9 L 1.333 9 C 1.333 12.13 3.87 14.667 7 14.667 L 16 14.667 L 16 17.333 Z M 7 17.333 C 2.398 17.333 -1.333 13.602 -1.333 9 L -1.333 0 L 1.333 0 L 1.333 9 C 1.333 12.13 3.87 14.667 7 14.667 L 7 17.333 Z M 7 14.667 M 16 0 L 16 16 L 16 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 3.333,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 2,
      color: "rgb(23,23,27)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 0.895 0.895 0 2 0 L 6 0 C 7.105 0 8 0.895 8 2 L 8 6 C 8 7.105 7.105 8 6 8 L 2 8 C 0.895 8 0 7.105 0 6 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 44,
      top: 0,
      width: 133,
      height: 15,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.3300000429153442,
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "DIRECTION \xB7 CULTURE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 187,
      top: 0.333,
      width: 169,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(180,180,188)"
    }
  }, "\uBC29\uD5A5\uACFC \uBB38\uD654 \xB7 \uBE44\uC804 \xB7 \uC6B0\uC120\uC21C\uC704 \xB7 \uC7A5\uC560 \uB300\uC751"), /*#__PURE__*/React.createElement("svg", {
    width: 807,
    height: 1,
    viewBox: "0 0 807 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 378,
      top: 7,
      width: 807,
      height: 1,
      overflow: "hidden",
      color: "rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 807 0 L 807 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1192.833,
      top: 0.667,
      width: 32,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "4 / 4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 24,
      width: 1224.33,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 6px 16px -12px rgba(23,44,90,0.18), inset 0px 0px 0px 0.500px rgba(31,122,69,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 50,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 21,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(31,122,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 15.208,
      width: 853,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: "19.575px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uC6B0\uB9AC \uD68C\uC0AC\uAC00 \uAD81\uADF9\uC801\uC73C\uB85C \uD574\uACB0\uD558\uB824\uB294 \uACE0\uAC1D\uC758 \uD575\uC2EC \uBB38\uC81C\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 855,
      top: 17.333,
      width: 281,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(107,107,115)"
    }
  }, "\uC6D0\uACA9 \uAC1C\uBC1C\uC790\uAC00 \uC0AC\uC218 \uC5C6\uC774\uB3C4 \uAC19\uC740 \uAE30\uC900\uC73C\uB85C \uD310\uB2E8\uD558\uAC8C \uB9CC\uB4DC\uB294 \uAC83"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1146,
      top: 14,
      width: 41,
      height: 22,
      borderRadius: 8,
      backgroundColor: "rgba(31,122,69,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 4.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(31,122,69)"
    }
  }, "\uD655\uC778")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1199,
      top: 17,
      width: 15,
      height: 17,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "13px",
      color: "rgb(180,180,188)"
    }
  }, "\u2304"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 6px 16px -12px rgba(23,44,90,0.18), inset 0px 0px 0px 0.500px rgba(31,122,69,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 50,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 21,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(31,122,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 15.208,
      width: 923.573,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: "19.575px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uD604\uC7AC \uC6B0\uB9AC \uD68C\uC0AC\uAC00 \uB2F9\uBA74\uD55C \uAC00\uC7A5 \uC911\uC694\uD55C \uBE44\uC988\uB2C8\uC2A4 \uBAA9\uD45C\uB294?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 925.573,
      top: 17.333,
      width: 213,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(107,107,115)"
    }
  }, "\uCD08\uAE30 \uC9C0\uD45C \uB2EC\uC131 (\uC2E0\uC18D\uD55C \uAE30\uB2A5 \uBC30\uD3EC \uBC0F \uB9E4\uCD9C \uD655\uBCF4)"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1146,
      top: 14,
      width: 41,
      height: 22,
      borderRadius: 8,
      backgroundColor: "rgba(31,122,69,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 4.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(31,122,69)"
    }
  }, "\uD655\uC778")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1199,
      top: 19,
      width: 15.333,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "13px",
      color: "rgb(180,180,188)"
    }
  }, "\u2304"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 6px 16px -12px rgba(23,44,90,0.18), inset 0px 0px 0px 0.500px rgba(31,122,69,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 50,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 21,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(31,122,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 15.208,
      width: 909.313,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: "19.575px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uC77C\uC815(\uB9C8\uAC10)\uACFC \uCF54\uB4DC \uD004\uB9AC\uD2F0\uAC00 \uCDA9\uB3CC\uD560 \uB54C \uBB34\uC5C7\uC744 \uC6B0\uC120\uD558\uB098\uC694?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 911.313,
      top: 17.333,
      width: 226,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(107,107,115)"
    }
  }, "\uAE30\uD55C\uC774 \uC9C0\uC5F0\uB418\uB354\uB77C\uB3C4 \uCF54\uB4DC \uD488\uC9C8 \uBC0F \uC6D0\uCE59 \uC900\uC218 \uC6B0\uC120"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1146,
      top: 14,
      width: 41,
      height: 22,
      borderRadius: 8,
      backgroundColor: "rgba(31,122,69,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 4.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(31,122,69)"
    }
  }, "\uD655\uC778")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1199,
      top: 18.5,
      width: 15.333,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "13px",
      color: "rgb(180,180,188)"
    }
  }, "\u2304"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 6px 16px -12px rgba(23,44,90,0.18), inset 0px 0px 0px 0.500px rgba(31,122,69,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 50,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 21,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(31,122,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 15.208,
      width: 920.813,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: "19.575px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uC2E4\uC218\uB85C \uC11C\uBC84\uB97C \uB2E4\uC6B4\uC2DC\uD0A4\uAC70\uB098 DB\uB97C \uB0A0\uB838\uC744 \uB54C \uB300\uCC98 \uBC29\uC2DD\uC740?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 922.813,
      top: 17.333,
      width: 215,
      height: 15,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2799999713897705,
      color: "rgb(107,107,115)"
    }
  }, "\uC989\uC2DC \uACF5\uAC1C \uC18C\uD1B5 \uCC44\uB110\uC5D0 \uC11C\uBA74\uC73C\uB85C \uC804\uCCB4 \uC0C1\uD669 \uACF5\uC720"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1146,
      top: 14,
      width: 41,
      height: 22,
      borderRadius: 8,
      backgroundColor: "rgba(31,122,69,0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 4.667,
      width: 20,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(31,122,69)"
    }
  }, "\uD655\uC778")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1199,
      top: 18.5,
      width: 15.333,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "13px",
      color: "rgb(180,180,188)"
    }
  }, "\u2304"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: 270,
      width: 1224,
      height: 67
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -5.167,
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1.333px solid rgb(224,224,230)",
      borderLeft: "1.333px solid rgb(224,224,230)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 0 0 M 16 17.333 L 7 17.333 C 2.398 17.333 -1.333 13.602 -1.333 9 L 1.333 9 C 1.333 12.13 3.87 14.667 7 14.667 L 16 14.667 L 16 17.333 Z M 7 17.333 C 2.398 17.333 -1.333 13.602 -1.333 9 L -1.333 0 L 1.333 0 L 1.333 9 C 1.333 12.13 3.87 14.667 7 14.667 L 7 17.333 Z M 7 14.667 M 16 0 L 16 16 L 16 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 26,
      top: 3.333,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 2,
      color: "rgb(37,99,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2 C 0 0.895 0.895 0 2 0 L 6 0 C 7.105 0 8 0.895 8 2 L 8 6 C 8 7.105 7.105 8 6 8 L 2 8 C 0.895 8 0 7.105 0 6 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 44,
      top: 0,
      width: 91,
      height: 15,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.3300000429153442,
      letterSpacing: "0.400px",
      color: "rgb(60,60,68)",
      textTransform: "uppercase"
    }
  }, "COMMUNICATION"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 145,
      top: 0.333,
      width: 169,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(180,180,188)"
    }
  }, "\uC18C\uD1B5 \uB9E4\uCCB4\uC640 \uB9AC\uB4EC \xB7 \uC2A4\uD0E0\uB4DC\uC5C5 \xB7 \uC751\uB2F5 \xB7 \uBD80\uC7AC"), /*#__PURE__*/React.createElement("svg", {
    width: 844,
    height: 1,
    viewBox: "0 0 844 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 336,
      top: 7.333,
      width: 844,
      height: 1,
      overflow: "hidden",
      color: "rgb(230,230,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 844 0 L 844 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1192.833,
      top: 0.667,
      width: 32,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(160,160,168)"
    }
  }, "0 / 5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 24,
      width: 1224,
      height: 43
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224,
      height: 43,
      opacity: 0.55,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 6px 16px -12px rgba(23,44,90,0.18), inset 0px 0px 0px 0.500px rgba(23,23,27,0.07)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1224.33,
      height: 50,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 21,
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 50,
      color: "rgb(216,216,222)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 38,
      top: 15.208,
      width: 1142.5,
      height: 20,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: "19.575px",
      letterSpacing: "-0.300px",
      color: "rgb(23,23,27)"
    }
  }, "\uD300\uC758 \uB370\uC77C\uB9AC \uC9C4\uD589 \uC0C1\uD669 \uACF5\uC720 \uBC29\uC2DD\uC740?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1184.5,
      top: 25,
      width: 0.01,
      height: 0.01,
      overflow: "hidden"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1135.5,
      top: 14,
      width: 51.5,
      height: 22,
      borderRadius: 8,
      backgroundColor: "rgb(240,240,242)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 4.667,
      width: 29,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2100000381469727,
      color: "rgb(107,107,115)"
    }
  }, "\uB118\uC5B4\uAC10")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1199,
      top: 18.5,
      width: 15.333,
      height: 13,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "13px",
      color: "rgb(180,180,188)"
    }
  }, "\u2304")))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-76236997e5208589-02d762ad",
    style: {
      position: "absolute",
      left: 0,
      top: 148,
      width: 1250.333,
      height: 45.333,
      overflow: "hidden",
      borderRadius: 16,
      borderTop: "0.667px solid rgb(34,55,106)",
      borderRight: "0.667px solid rgb(34,55,106)",
      borderBottom: "0.667px solid rgb(34,55,106)",
      borderLeft: "0.667px solid rgb(34,55,106)",
      boxShadow: "inset 0px 1px 0px 0px rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.667,
      top: 16.167,
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
      height: 7.962
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.25 0 L 3.713 -0.397 C 3.597 -0.532 3.428 -0.609 3.25 -0.609 L 3.25 0 Z M 4.225 1.138 L 3.762 1.534 C 3.878 1.669 4.047 1.747 4.225 1.747 L 4.225 1.138 Z M 0 0.813 L 0.609 0.813 C 0.609 0.748 0.633 0.703 0.67 0.669 C 0.712 0.629 0.768 0.609 0.813 0.609 L 0.813 0 L 0.813 -0.609 C 0.11 -0.609 -0.609 -0.05 -0.609 0.813 L 0 0.813 Z M 0.813 0 L 0.813 0.609 L 3.25 0.609 L 3.25 0 L 3.25 -0.609 L 0.813 -0.609 L 0.813 0 Z M 3.25 0 L 2.787 0.397 L 3.762 1.534 L 4.225 1.138 L 4.688 0.741 L 3.713 -0.397 L 3.25 0 Z M 4.225 1.138 L 4.225 1.747 L 8.938 1.747 L 8.938 1.138 L 8.938 0.528 L 4.225 0.528 L 4.225 1.138 Z M 8.938 1.138 L 8.938 1.747 C 9.002 1.747 9.047 1.771 9.081 1.807 C 9.121 1.85 9.141 1.906 9.141 1.95 L 9.75 1.95 L 10.359 1.95 C 10.359 1.247 9.8 0.528 8.938 0.528 L 8.938 1.138 Z M 9.75 1.95 L 9.141 1.95 L 9.141 7.15 L 9.75 7.15 L 10.359 7.15 L 10.359 1.95 L 9.75 1.95 Z M 9.75 7.15 L 9.141 7.15 C 9.141 7.255 9.108 7.296 9.096 7.308 C 9.083 7.321 9.043 7.353 8.938 7.353 L 8.938 7.962 L 8.938 8.572 C 9.32 8.572 9.686 8.442 9.957 8.17 C 10.229 7.898 10.359 7.532 10.359 7.15 L 9.75 7.15 Z M 8.938 7.962 L 8.938 7.353 L 0.813 7.353 L 0.813 7.962 L 0.813 8.572 L 8.938 8.572 L 8.938 7.962 Z M 0.813 7.962 L 0.813 7.353 C 0.768 7.353 0.712 7.333 0.67 7.294 C 0.633 7.259 0.609 7.214 0.609 7.15 L 0 7.15 L -0.609 7.15 C -0.609 8.013 0.11 8.572 0.813 8.572 L 0.813 7.962 Z M 0 7.15 L 0.609 7.15 L 0.609 0.813 L 0 0.813 L -0.609 0.813 L -0.609 7.15 L 0 7.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 43.667,
      top: 13.667,
      width: 51,
      height: 17,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2300000190734863,
      letterSpacing: "-0.300px",
      color: "rgb(255,255,255)"
    }
  }, "\uD68C\uC0AC \uADDC\uCE59"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 110.604,
      top: 14.792,
      width: 1125.156,
      height: 16,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "15.750px",
      color: "rgb(255,255,255)"
    }
  }, "\uD504\uB85C\uC81D\uD2B8\uAC00 \uBC14\uB00C\uC5B4\uB3C4 \uADF8\uB300\uB85C \uC801\uC6A9\uB418\uB294 \uC0C1\uC704 \uACC4\uCE35"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1178.76,
      top: 16,
      width: 48,
      height: 13,
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: 1.2699999809265137,
      color: "rgb(255,255,255)"
    }
  }, "19\uAC1C \uD56D\uBAA9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1293,
      top: 347,
      width: 6,
      height: 295,
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      width: 1248,
      display: "flex",
      flexDirection: "row",
      gap: 18,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 369.66,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", { src: onbInlineC9, alt: "", style: { position: "relative", width: 56, height: 56, objectFit: "contain", flexShrink: 0 } }), /*#__PURE__*/React.createElement("img", { src: onbInlineAf, alt: "", style: { position: "relative", width: 67, height: 28.862, objectFit: "contain", flexShrink: 0 } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 400,
      backgroundColor: "rgb(17,24,39)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "\uAE40")))));
}

// figma node: 18:109 Background+Border
function BackgroundBorder(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      height: 660,
      maxWidth: 1400,
      maxHeight: null,
      borderRadius: 20,
      background: "radial-gradient(851.948px 361.115px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(662.626px 333.337px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(23,23,27)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 369.66,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", { src: onbInlineC9, alt: "", style: { position: "relative", width: 56, height: 56, objectFit: "contain", flexShrink: 0 } }), /*#__PURE__*/React.createElement("img", { src: onbInlineAf, alt: "", style: { position: "relative", width: 67, height: 28.862, objectFit: "contain", flexShrink: 0 } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 400,
      backgroundColor: "rgb(17,24,39)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "\uAE40")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "4px 4px 8px 4px",
      alignItems: "center",
      flexWrap: "wrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 74.69,
      minWidth: 440,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 1029.02,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 0.690px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "43.700px",
      letterSpacing: "-1.200px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uC704\uD5D8 \uC791\uC5C5\uC744 \uBBF8\uB9AC \uC54C\uB824 \uC8FC\uC138\uC694")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 53.69,
      width: 1029.02,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "pre-wrap",
      lineHeight: "21px",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "팀원이 이 단어가 들어간 질문을 하면, SAI는 답하지 않고 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(23,23,27)"
    }
  }, "“대표님께 먼저 확인하세요”"), "라고 안내합니다."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 169,
      height: 131,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-82e07f64d0e31f96-afbfe546",
    style: {
      position: "absolute",
      left: -0.02,
      top: -0.5,
      width: 157,
      height: 118
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 363,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 363,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 59,
      overflow: "hidden",
      borderRadius: 22,
      background: "linear-gradient(93.525deg, rgb(254,242,242) 0.00%)",
      borderTop: "0.667px solid rgb(251,217,217)",
      borderRight: "0.667px solid rgb(251,217,217)",
      borderBottom: "0.667px solid rgb(251,217,217)",
      borderLeft: "0.667px solid rgb(251,217,217)",
      boxShadow: "0px 14px 10px -14px rgba(220,38,38,0.24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 19,
      top: 21,
      width: 114,
      height: 19,
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      lineHeight: "18.667px",
      letterSpacing: "0.400px",
      color: "rgb(194,112,90)",
      textTransform: "uppercase"
    }
  }, "\uB4F1\uB85D\uB41C \uD0A4\uC6CC\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 26px 0px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 7,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -9,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(248,218,218)",
      borderLeft: "1px solid rgb(248,218,218)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(220,38,38)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(220,38,38)",
      flexShrink: 0
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(248,218,218)",
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.600px",
      color: "rgb(220,38,38)",
      flexShrink: 0
    }
  }, "2\uAC74"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 6px 16px -10px rgba(23,44,90,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 15px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(220,38,38)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 22,
      borderRadius: 7,
      backgroundColor: "rgb(220,38,38)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.425,
    height: 3.450,
    viewBox: "-0.712 0 1.425 3.450",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 1.4249999523162842,
      height: 3.45
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.712 0 C 0.712 -0.394 0.394 -0.712 0 -0.712 C -0.394 -0.712 -0.712 -0.394 -0.712 0 L 0 0 L 0.712 0 Z M -0.712 3.45 C -0.712 3.844 -0.394 4.163 0 4.163 C 0.394 4.163 0.712 3.844 0.712 3.45 L 0 3.45 L -0.712 3.45 Z M 0 0 L -0.712 0 L -0.712 3.45 L 0 3.45 L 0.712 3.45 L 0.712 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.425,
    height: 0.150,
    viewBox: "-0.712 0 1.425 0.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 8.7,
      width: 1.4249999523162842,
      height: 0.15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.712 0 C 0.712 -0.394 0.394 -0.712 0 -0.712 C -0.394 -0.712 -0.712 -0.394 -0.712 0 L 0 0 L 0.712 0 Z M -0.712 0.15 C -0.712 0.544 -0.394 0.862 0 0.862 C 0.394 0.862 0.712 0.544 0.712 0.15 L 0 0.15 L -0.712 0.15 Z M 0 0 L -0.712 0 L -0.712 0.15 L 0 0.15 L 0.712 0.15 L 0.712 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 377,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uD504\uB85C\uB355\uC158 DB")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(254,242,242)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 10px 5px 10px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(220,38,38)",
      flexShrink: 0
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      borderRadius: 5,
      boxShadow: "inset 0 0 0 1px var(--color-grey-94)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Quicksand, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgba(0,0,0,0.3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "X")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 6px 16px -10px rgba(23,44,90,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 15px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(220,38,38)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 22,
      borderRadius: 7,
      backgroundColor: "rgb(220,38,38)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.425,
    height: 3.450,
    viewBox: "-0.712 0 1.425 3.450",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 1.4249999523162842,
      height: 3.45
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.712 0 C 0.712 -0.394 0.394 -0.712 0 -0.712 C -0.394 -0.712 -0.712 -0.394 -0.712 0 L 0 0 L 0.712 0 Z M -0.712 3.45 C -0.712 3.844 -0.394 4.163 0 4.163 C 0.394 4.163 0.712 3.844 0.712 3.45 L 0 3.45 L -0.712 3.45 Z M 0 0 L -0.712 0 L -0.712 3.45 L 0 3.45 L 0.712 3.45 L 0.712 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.425,
    height: 0.150,
    viewBox: "-0.712 0 1.425 0.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 8.7,
      width: 1.4249999523162842,
      height: 0.15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.712 0 C 0.712 -0.394 0.394 -0.712 0 -0.712 C -0.394 -0.712 -0.712 -0.394 -0.712 0 L 0 0 L 0.712 0 Z M -0.712 0.15 C -0.712 0.544 -0.394 0.862 0 0.862 C 0.394 0.862 0.712 0.544 0.712 0.15 L 0 0.15 L -0.712 0.15 Z M 0 0 L -0.712 0 L -0.712 0.15 L 0 0.15 L 0.712 0.15 L 0.712 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 377,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uBC30\uD3EC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(254,242,242)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 10px 5px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(220,38,38)",
      flexShrink: 0
    }
  }, "\uC704\uD5D8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      borderRadius: 5,
      boxShadow: "inset 0 0 0 1px var(--color-grey-94)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Quicksand, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgba(0,0,0,0.3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "X"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 26px 0px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 7,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -9,
      width: 16,
      height: 16,
      borderRadius: "0px 0px 0px 7px",
      borderBottom: "1px solid rgb(245,227,200)",
      borderLeft: "1px solid rgb(245,227,200)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 9,
      height: 9,
      borderRadius: 3,
      backgroundColor: "rgb(234,106,10)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(234,106,10)",
      flexShrink: 0
    }
  }, "\uC8FC\uC758")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(245,227,200)",
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.600px",
      color: "rgb(234,106,10)",
      flexShrink: 0
    }
  }, "1\uAC74"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241), 0px 6px 16px -10px rgba(23,44,90,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 15px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "0px 6px 16px 0px rgba(23,44,90,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 4,
      backgroundColor: "rgb(234,106,10)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 22,
      borderRadius: 7,
      backgroundColor: "rgb(234,106,10)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 8.100,
    viewBox: "0 0 9 8.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 1.95,
      width: 9,
      height: 8.1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 0 L 5.024 -0.291 C 4.919 -0.482 4.718 -0.6 4.5 -0.6 C 4.282 -0.6 4.081 -0.482 3.976 -0.291 L 4.5 0 Z M 9 8.1 L 9 8.7 C 9.213 8.7 9.409 8.588 9.517 8.404 C 9.625 8.221 9.628 7.994 9.524 7.809 L 9 8.1 Z M 0 8.1 L -0.524 7.809 C -0.628 7.994 -0.625 8.221 -0.517 8.404 C -0.409 8.588 -0.213 8.7 0 8.7 L 0 8.1 Z M 4.5 0 L 3.976 0.291 L 8.476 8.391 L 9 8.1 L 9.524 7.809 L 5.024 -0.291 L 4.5 0 Z M 9 8.1 L 9 7.5 L 0 7.5 L 0 8.1 L 0 8.7 L 9 8.7 L 9 8.1 Z M 0 8.1 L 0.524 8.391 L 5.024 0.291 L 4.5 0 L 3.976 -0.291 L -0.524 7.809 L 0 8.1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.200,
    height: 2.100,
    viewBox: "-0.600 0 1.200 2.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4.95,
      width: 1.2000000476837158,
      height: 2.1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0 0 L 0.6 0 Z M -0.6 2.1 C -0.6 2.431 -0.331 2.7 0 2.7 C 0.331 2.7 0.6 2.431 0.6 2.1 L 0 2.1 L -0.6 2.1 Z M 0 0 L -0.6 0 L -0.6 2.1 L 0 2.1 L 0.6 2.1 L 0.6 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.200,
    height: 0.150,
    viewBox: "-0.600 0 1.200 0.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 8.55,
      width: 1.2000000476837158,
      height: 0.15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.6 0 C 0.6 -0.331 0.331 -0.6 0 -0.6 C -0.331 -0.6 -0.6 -0.331 -0.6 0 L 0 0 L 0.6 0 Z M -0.6 0.15 C -0.6 0.481 -0.331 0.75 0 0.75 C 0.331 0.75 0.6 0.481 0.6 0.15 L 0 0.15 L -0.6 0.15 Z M 0 0 L -0.6 0 L -0.6 0.15 L 0 0.15 L 0.6 0.15 L 0.6 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 377,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uC0AD\uC81C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,247,237)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 10px 5px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(234,106,10)",
      flexShrink: 0
    }
  }, "\uC8FC\uC758")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      borderRadius: 5,
      boxShadow: "inset 0 0 0 1px var(--color-grey-94)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Quicksand, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgba(0,0,0,0.3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "X"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "0 0 640px",
      minWidth: 0,
      borderRadius: 22,
      backgroundColor: "rgb(250,251,253)",
      boxShadow: "inset 0 0 0 1.5px rgb(223,227,235)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 9,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minWidth: 92.78,
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 17,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uCD94\uAC00\uD558\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "column",
      padding: "2px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 544,
      overflow: "hidden",
      borderRadius: 11,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235)",
      display: "flex",
      flexDirection: "column",
      padding: "15px 16px 16.390px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(180,180,188)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC608: \uB9C8\uC774\uADF8\uB808\uC774\uC158"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 11,
      backgroundColor: "rgb(230,230,235)",
      display: "flex",
      flexDirection: "row",
      padding: "20.690px 20px 19.700px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(180,180,188)",
      flexShrink: 0
    }
  }, "+ \uCD94\uAC00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 9,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(160,160,168)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "\uB4F1\uAE09")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(230,230,235), 0px 8px 20px -10px rgba(23,44,90,0.28)",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      padding: "8px 14px 8px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(216,216,222)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uC704\uD5D8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,247,237)",
      boxShadow: "inset 0 0 0 1px rgb(234,106,10)",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      padding: "8px 14px 8px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,106,10)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(234,106,10)",
      flexShrink: 0
    }
  }, "\uC8FC\uC758")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(240,240,242)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 9,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgb(160,160,168)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "\uCD94\uCC9C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "2px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10.5,
      lineHeight: "100%",
      color: "rgb(180,180,188)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uB2E4\uB978 \uD300\uC774 \uC790\uC8FC \uB4F1\uB85D\uD558\uB294 \uB2E8\uC5B4\uC785\uB2C8\uB2E4 \xB7 \uB204\uB974\uBA74 \uBC14\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(220,220,226)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: -1.2434497875801753e-14,
      padding: "11px 14px 9px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "+\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uB9C8\uC774\uADF8\uB808\uC774\uC158"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(220,220,226)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: -4.085620730620576e-14,
      padding: "11px 14px 9px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "+\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uB864\uBC31"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(220,220,226)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 0.009999999776482582,
      padding: "11px 14px 9px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "+\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uC2A4\uD0A4\uB9C8 \uBCC0\uACBD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(220,220,226)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: -4.085620730620576e-14,
      padding: "11px 14px 9px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "+\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uAD8C\uD55C \uBCC0\uACBD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(220,220,226)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 0.009999999776482582,
      padding: "11px 14px 9px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "+\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uD06C\uB860 \uC218\uC815"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(220,220,226)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: -4.085620730620576e-14,
      padding: "11px 14px 9px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "+\xA0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uD658\uACBD\uBCC0\uC218"))))))))));
}

// figma node: 18:560 Background+Border
function BackgroundBorder2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1312,
      minHeight: 660,
      maxWidth: 1400,
      maxHeight: null,
      borderRadius: 20,
      background: "radial-gradient(851.948px 529.630px at 78.00% -8.00%, rgba(37,99,235,0.14) 0.00%, rgba(91,141,239,0.06) 42.00%, rgba(91,141,239,0) 72.00%), radial-gradient(662.626px 488.889px at 6.00% 108.00%, rgba(91,141,239,0.1) 0.00%, rgba(91,141,239,0) 68.00%), linear-gradient(rgb(255,255,255),rgb(255,255,255))",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 369.66,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", { src: onbInlineC9, alt: "", style: { position: "relative", width: 56, height: 56, objectFit: "contain", flexShrink: 0 } }), /*#__PURE__*/React.createElement("img", { src: onbInlineAf, alt: "SAi", style: { position: "relative", width: 67, height: 28.86, objectFit: "contain", flexShrink: 0 } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 400,
      backgroundColor: "rgb(17,24,39)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "\uAE40")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "4px 4px 4px 4px",
      minHeight: 175,
      alignItems: "center",
      flexWrap: "wrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 74.69,
      minWidth: 440,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      width: 1038,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 0.690px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 38,
      whiteSpace: "nowrap",
      lineHeight: "43.700px",
      letterSpacing: "-1.300px",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "Day 0 \uC124\uC815\uC774 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 68.69,
      width: 1038,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uC774\uC81C \uD578\uB4DC\uBD81\uC774 \uC900\uBE44\uB418\uC5C8\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-82e07f64d0e31f96-d6402eee",
    style: {
      position: "absolute",
      left: 1074,
      top: -34,
      width: 175,
      height: 179.688
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      borderRadius: 22,
      background: "linear-gradient(144.283deg, rgb(242,242,245) 104.98%)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 30,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC5F0\uACB0\uB41C \uC18C\uC2A4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238), 0px 3px 8px -4px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b02ec39023a28b66",
    style: {
      position: "absolute",
      left: 0,
      top: 0.14,
      width: 38,
      height: 38
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238), 0px 3px 8px -4px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-beec4bcbb56ff354",
    style: {
      position: "absolute",
      left: 4.666,
      top: 6.14,
      width: 30,
      height: 27
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,234,238), 0px 3px 8px -4px rgba(23,44,90,0.22)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", { src: onbInline6e, alt: "", style: { position: "relative", width: 24, height: 24, objectFit: "contain", flexShrink: 0 } }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.436,
      height: 38,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "38px",
      letterSpacing: "-1.600px",
      color: "rgb(23,23,27)"
    }
  }, "4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.53,
      top: 17,
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)",
      flexShrink: 0
    }
  }, "\uAC1C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "rgb(160,160,168)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "GitHub \xB7 Slack \xB7 \uB85C\uCEEC \uD30C\uC77C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      borderRadius: 22,
      background: "linear-gradient(144.284deg, rgb(234,241,254) 55.50%)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 30,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD578\uB4DC\uBD81 \uD56D\uBAA9")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "0.844px solid rgb(201,218,251)",
      borderRight: "0.844px solid rgb(201,218,251)",
      borderBottom: "0.844px solid rgb(201,218,251)",
      borderLeft: "0.844px solid rgb(201,218,251)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.133,
      top: 10.133,
      width: 17.733,
      height: 17.733,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.300,
    height: 10.862,
    viewBox: "0 0 13.300 10.862",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.217,
      top: 3.768,
      width: 13.3,
      height: 10.862,
      color: "rgb(29,78,216)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.433 0 L 5.064 -0.541 C 4.907 -0.725 4.676 -0.831 4.433 -0.831 L 4.433 0 Z M 5.763 1.552 L 5.132 2.093 C 5.29 2.277 5.521 2.383 5.763 2.383 L 5.763 1.552 Z M 0 1.108 L 0.831 1.108 C 0.831 1.02 0.864 0.959 0.914 0.912 C 0.972 0.858 1.048 0.831 1.108 0.831 L 1.108 0 L 1.108 -0.831 C 0.15 -0.831 -0.831 -0.069 -0.831 1.108 L 0 1.108 Z M 1.108 0 L 1.108 0.831 L 4.433 0.831 L 4.433 0 L 4.433 -0.831 L 1.108 -0.831 L 1.108 0 Z M 4.433 0 L 3.802 0.541 L 5.132 2.093 L 5.763 1.552 L 6.394 1.011 L 5.064 -0.541 L 4.433 0 Z M 5.763 1.552 L 5.763 2.383 L 12.192 2.383 L 12.192 1.552 L 12.192 0.72 L 5.763 0.72 L 5.763 1.552 Z M 12.192 1.552 L 12.192 2.383 C 12.28 2.383 12.341 2.415 12.388 2.465 C 12.442 2.524 12.469 2.599 12.469 2.66 L 13.3 2.66 L 14.131 2.66 C 14.131 1.702 13.369 0.72 12.192 0.72 L 12.192 1.552 Z M 13.3 2.66 L 12.469 2.66 L 12.469 9.753 L 13.3 9.753 L 14.131 9.753 L 14.131 2.66 L 13.3 2.66 Z M 13.3 9.753 L 12.469 9.753 C 12.469 9.897 12.425 9.952 12.407 9.969 C 12.39 9.986 12.335 10.03 12.192 10.03 L 12.192 10.862 L 12.192 11.693 C 12.713 11.693 13.212 11.515 13.583 11.145 C 13.954 10.774 14.131 10.275 14.131 9.753 L 13.3 9.753 Z M 12.192 10.862 L 12.192 10.03 L 1.108 10.03 L 1.108 10.862 L 1.108 11.693 L 12.192 11.693 L 12.192 10.862 Z M 1.108 10.862 L 1.108 10.03 C 1.048 10.03 0.972 10.004 0.914 9.949 C 0.864 9.903 0.831 9.841 0.831 9.753 L 0 9.753 L -0.831 9.753 C -0.831 10.931 0.15 11.693 1.108 11.693 L 1.108 10.862 Z M 0 9.753 L 0.831 9.753 L 0.831 1.108 L 0 1.108 L -0.831 1.108 L -0.831 9.753 L 0 9.753 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      borderRadius: 12,
      backgroundColor: "rgb(37,99,235)",
      borderTop: "0.844px solid rgb(29,78,216)",
      borderRight: "0.844px solid rgb(29,78,216)",
      borderBottom: "0.844px solid rgb(29,78,216)",
      borderLeft: "0.844px solid rgb(29,78,216)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.133,
      top: 10.133,
      width: 17.733,
      height: 17.733,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.212,
    height: 4.212,
    viewBox: "0 0 4.212 4.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.549,
      top: 1.884,
      width: 4.212,
      height: 4.212,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.212 2.106 L 3.38 2.106 C 3.38 2.81 2.81 3.38 2.106 3.38 L 2.106 4.212 L 2.106 5.043 C 3.728 5.043 5.043 3.728 5.043 2.106 L 4.212 2.106 Z M 2.106 4.212 L 2.106 3.38 C 1.402 3.38 0.831 2.81 0.831 2.106 L 0 2.106 L -0.831 2.106 C -0.831 3.728 0.484 5.043 2.106 5.043 L 2.106 4.212 Z M 0 2.106 L 0.831 2.106 C 0.831 1.402 1.402 0.831 2.106 0.831 L 2.106 0 L 2.106 -0.831 C 0.484 -0.831 -0.831 0.484 -0.831 2.106 L 0 2.106 Z M 2.106 0 L 2.106 0.831 C 2.81 0.831 3.38 1.402 3.38 2.106 L 4.212 2.106 L 5.043 2.106 C 5.043 0.484 3.728 -0.831 2.106 -0.831 L 2.106 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.212,
    height: 4.212,
    viewBox: "0 0 4.212 4.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.549,
      top: 11.637,
      width: 4.212,
      height: 4.212,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.212 2.106 L 3.38 2.106 C 3.38 2.81 2.81 3.38 2.106 3.38 L 2.106 4.212 L 2.106 5.043 C 3.728 5.043 5.043 3.728 5.043 2.106 L 4.212 2.106 Z M 2.106 4.212 L 2.106 3.38 C 1.402 3.38 0.831 2.81 0.831 2.106 L 0 2.106 L -0.831 2.106 C -0.831 3.728 0.484 5.043 2.106 5.043 L 2.106 4.212 Z M 0 2.106 L 0.831 2.106 C 0.831 1.402 1.402 0.831 2.106 0.831 L 2.106 0 L 2.106 -0.831 C 0.484 -0.831 -0.831 0.484 -0.831 2.106 L 0 2.106 Z M 2.106 0 L 2.106 0.831 C 2.81 0.831 3.38 1.402 3.38 2.106 L 4.212 2.106 L 5.043 2.106 C 5.043 0.484 3.728 -0.831 2.106 -0.831 L 2.106 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.212,
    height: 4.212,
    viewBox: "0 0 4.212 4.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.972,
      top: 1.884,
      width: 4.212,
      height: 4.212,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.212 2.106 L 3.38 2.106 C 3.38 2.81 2.81 3.38 2.106 3.38 L 2.106 4.212 L 2.106 5.043 C 3.728 5.043 5.043 3.728 5.043 2.106 L 4.212 2.106 Z M 2.106 4.212 L 2.106 3.38 C 1.402 3.38 0.831 2.81 0.831 2.106 L 0 2.106 L -0.831 2.106 C -0.831 3.728 0.484 5.043 2.106 5.043 L 2.106 4.212 Z M 0 2.106 L 0.831 2.106 C 0.831 1.402 1.402 0.831 2.106 0.831 L 2.106 0 L 2.106 -0.831 C 0.484 -0.831 -0.831 0.484 -0.831 2.106 L 0 2.106 Z M 2.106 0 L 2.106 0.831 C 2.81 0.831 3.38 1.402 3.38 2.106 L 4.212 2.106 L 5.043 2.106 C 5.043 0.484 3.728 -0.831 2.106 -0.831 L 2.106 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.663,
    height: 5.542,
    viewBox: "-0.831 0 1.663 5.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.655,
      top: 6.096,
      width: 1.662500023841858,
      height: 5.542,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.831 0 C 0.831 -0.459 0.459 -0.831 0 -0.831 C -0.459 -0.831 -0.831 -0.459 -0.831 0 L 0 0 L 0.831 0 Z M -0.831 5.542 C -0.831 6.001 -0.459 6.373 0 6.373 C 0.459 6.373 0.831 6.001 0.831 5.542 L 0 5.542 L -0.831 5.542 Z M 0 0 L -0.831 0 L -0.831 5.542 L 0 5.542 L 0.831 5.542 L 0.831 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.423,
    height: 4.877,
    viewBox: "0 0 8.423 4.877",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.655,
      top: 6.096,
      width: 8.423,
      height: 4.877,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.255 0 C 9.255 -0.459 8.882 -0.831 8.423 -0.831 C 7.964 -0.831 7.592 -0.459 7.592 0 L 8.423 0 L 9.255 0 Z M -0.072 4.049 C -0.529 4.088 -0.868 4.491 -0.828 4.949 C -0.788 5.406 -0.385 5.745 0.072 5.705 L 0 4.877 L -0.072 4.049 Z M 8.423 0 L 7.592 0 C 7.592 0.718 7.421 1.258 7.134 1.686 C 6.843 2.12 6.394 2.496 5.752 2.817 C 4.437 3.474 2.472 3.827 -0.072 4.049 L 0 4.877 L 0.072 5.705 C 2.626 5.483 4.873 5.115 6.495 4.304 C 7.322 3.891 8.023 3.345 8.515 2.612 C 9.01 1.873 9.255 1 9.255 0 L 8.423 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 38,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "38px",
      letterSpacing: "-1.600px",
      whiteSpace: "nowrap",
      color: "rgb(23,23,27)"
    }
  }, "20"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 50,
      top: 17,
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)",
      flexShrink: 0
    }
  }, "\uAC1C \uD655\uC778\uB428"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "rgb(160,160,168)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC804\uCCB4 15\uAC1C \uC911"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      borderRadius: 22,
      background: "linear-gradient(144.283deg, rgb(254,242,242) 55.50%)",
      boxShadow: "inset 0 0 0 1px rgb(239,239,241)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 30,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.200px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uC704\uD5D8 \uC791\uC5C5 \uD0A4\uC6CC\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      borderRadius: 12,
      backgroundColor: "rgb(220,38,38)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.133,
      top: 10.133,
      width: 17.733,
      height: 17.733,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.106,
    height: 5.098,
    viewBox: "-1.053 0 2.106 5.098",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.867,
      top: 4.433,
      width: 2.1058332920074463,
      height: 5.098,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 0 C 1.053 -0.582 0.582 -1.053 0 -1.053 C -0.582 -1.053 -1.053 -0.582 -1.053 0 L 0 0 L 1.053 0 Z M -1.053 5.098 C -1.053 5.68 -0.582 6.151 0 6.151 C 0.582 6.151 1.053 5.68 1.053 5.098 L 0 5.098 L -1.053 5.098 Z M 0 0 L -1.053 0 L -1.053 5.098 L 0 5.098 L 1.053 5.098 L 1.053 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.106,
    height: 0.222,
    viewBox: "-1.053 0 2.106 0.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.867,
      top: 12.857,
      width: 2.1058332920074463,
      height: 0.222,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 0 C 1.053 -0.582 0.582 -1.053 0 -1.053 C -0.582 -1.053 -1.053 -0.582 -1.053 0 L 0 0 L 1.053 0 Z M -1.053 0.222 C -1.053 0.803 -0.582 1.275 0 1.275 C 0.582 1.275 1.053 0.803 1.053 0.222 L 0 0.222 L -1.053 0.222 Z M 0 0 L -1.053 0 L -1.053 0.222 L 0 0.222 L 1.053 0.222 L 1.053 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 38,
      borderRadius: 12,
      backgroundColor: "rgb(234,106,10)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.133,
      top: 10.133,
      width: 17.733,
      height: 17.733,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.733,
    height: 17.733,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.733,
      height: 17.733,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4.2 21.4 20.4H2.6L12 4.2Z",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.2v4.1",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 17.2,
    r: 1.05,
    fill: "currentColor"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.436,
      height: 38,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: "38px",
      letterSpacing: "-1.600px",
      color: "rgb(23,23,27)"
    }
  }, "3"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.53,
      top: 17,
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(160,160,168)",
      flexShrink: 0
    }
  }, "\uAC1C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "rgb(160,160,168)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD300\uC6D0 \uD654\uBA74\uC5D0 \uC548\uB0B4\uB85C \uD45C\uC2DC")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 22,
      backgroundColor: "rgb(37,99,235)",
      boxShadow: "inset 0 0 0 1px rgb(29,78,216)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "20px 24px 20px 24px",
      alignItems: "center",
      flexWrap: "wrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "3px 0px 2px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 20,
      lineHeight: "100%",
      letterSpacing: "-0.300px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD68C\uC0AC \uD578\uB4DC\uBD81\uC774 \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uD300\uC6D0\uC774 \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "21px",
      color: "rgba(255,255,255,0.62)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "SAI\uB85C \uC6D0\uACA9 \uD300\uC6D0\uACFC\uC758 \uD611\uC5C5\uC744 \uB354 \uC27D\uAC8C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694. \uD300\uC758 \uADDC\uCE59\uC5D0 \uB9DE\uCDB0 \uC815\uD655\uD55C \uC9C0\uC2DC\uB85C \uC548\uB0B4\uD574\uB4DC\uB9BD\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgba(255,255,255,0.27)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.16)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 700,
      fontSize: 10.5,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.400px",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "\uD68C\uC0AC \uCF54\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "1.200px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "LIMA-9976"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 43,
      borderRadius: 15,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "14px 20px 13px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12.5,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,23,27)",
      flexShrink: 0
    }
  }, "\uBCF5\uC0AC"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minWidth: 125.23,
      borderRadius: 999,
      backgroundColor: "rgb(240,240,242)",
      display: "flex",
      flexDirection: "column",
      padding: "17px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,107,115)",
      flexShrink: 0
    }
  }, "\uC124\uC815 \uB2E4\uC2DC \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: 999,
      backgroundColor: "rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 9,
      padding: "15px 22px 15px 22px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD578\uB4DC\uBD81 \uC5F4\uC5B4\uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15,
      height: 15,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 1.900,
    viewBox: "0 -0.950 9 1.900",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 7.5,
      width: 9,
      height: 1.899999976158142,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.95 C -0.525 -0.95 -0.95 -0.525 -0.95 0 C -0.95 0.525 -0.525 0.95 0 0.95 L 0 0 L 0 -0.95 Z M 9 0.95 C 9.525 0.95 9.95 0.525 9.95 0 C 9.95 -0.525 9.525 -0.95 9 -0.95 L 9 0 L 9 0.95 Z M 0 0 L 0 0.95 L 9 0.95 L 9 0 L 9 -0.95 L 0 -0.95 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.500,
    height: 7,
    viewBox: "0 0 3.500 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 4,
      width: 3.5,
      height: 7,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.672 -0.672 C 0.301 -1.043 -0.301 -1.043 -0.672 -0.672 C -1.043 -0.301 -1.043 0.301 -0.672 0.672 L 0 0 L 0.672 -0.672 Z M 3.5 3.5 L 4.172 4.172 C 4.543 3.801 4.543 3.199 4.172 2.828 L 3.5 3.5 Z M -0.672 6.328 C -1.043 6.699 -1.043 7.301 -0.672 7.672 C -0.301 8.043 0.301 8.043 0.672 7.672 L 0 7 L -0.672 6.328 Z M 0 0 L -0.672 0.672 L 2.828 4.172 L 3.5 3.5 L 4.172 2.828 L 0.672 -0.672 L 0 0 Z M 3.5 3.5 L 2.828 2.828 L -0.672 6.328 L 0 7 L 0.672 7.672 L 4.172 4.172 L 3.5 3.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
}

const Onb = { Step1: Screen, Step2: Div, Step3: BackgroundBorder, Step4: BackgroundBorder2 };

export { Screen, Div, BackgroundBorder, BackgroundBorder2, Onb };
