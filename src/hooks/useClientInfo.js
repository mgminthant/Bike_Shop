import { useState, useEffect } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

const useClientInfo = () => {
  const [clientInfo, setClientInfo] = useState({
    os: "Unknown",
    browser: "Unknown",
    language: "Unknown",
    location: {
      country: "Unknown",
    },
    loading: true,
    error: null,
  });

  countries.registerLocale(enLocale);

  function getBrowserName(userAgent) {
    if (
      userAgent.includes("Chrome") &&
      !userAgent.includes("Edg") &&
      !userAgent.includes("OPR")
    ) {
      return "Chrome";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      return "Safari";
    } else if (userAgent.includes("Firefox")) {
      return "Firefox";
    } else if (userAgent.includes("Edg")) {
      return "Edge";
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
      return "Opera";
    } else {
      return "Unknown";
    }
  }

  function getOsName(userAgent) {
    let os = "Unknown";
    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (userAgent.indexOf("Android") !== -1) os = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";
    return os;
  }

  useEffect(() => {
    const getClientInfo = async () => {
      try {
        const userAgent = navigator.userAgent;

        const os = getOsName(userAgent);
        const browser = getBrowserName(userAgent);
        const language = navigator.language;

        const locationRes = await fetch(
          "https://ipinfo.io/json?token=4e22aaa818ad26"
        );

        const locationData = await locationRes.json();

        setClientInfo({
          os,
          browser,
          language,
          location: {
            country: countries.getName(locationData.country, "en") || "Unknown",
          },
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error("Error fetching client info:", err);
        setClientInfo((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to fetch client information",
        }));
      }
    };

    getClientInfo();
  }, []);

  return clientInfo;
};

export default useClientInfo;
