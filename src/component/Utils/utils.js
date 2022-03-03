const brandReplace = (str) => {
  if (typeof str == "string") {
    return str.replace(
      /RADIAN TITLE INSURANCE INC./g,
      "<b>RADIAN TITLE INSURANCE INC.</b>"
    );
  } else {
    return str;
  }
};

function Contains(arr, elem) {
  try {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return true;
      }
    }
  } catch {
    throw Error("utils");
  }
}

function detectBrowser() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) !== -1
  ) {
    return "Opera";
  } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
    return "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") !== -1) {
    return "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    return "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    !!document.documentMode === true
  ) {
    return "IE";
  } else {
    return "Unknown";
  }
}

const ScrollToCurrent = (scrollHeight) => {
  const browserType = detectBrowser();
  if (browserType === "Chrome" || browserType === "Firefox") {
    window.scrollTo({
      top: scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo(0, scrollHeight);
  }
};

module.exports = {
  brandReplace,
  Contains,
  ScrollToCurrent,
};
