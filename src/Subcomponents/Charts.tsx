// @ts-nocheck
import { useEffect, useRef } from "react";

//AppleWidget
let tvScriptLoadingPromiseOne;
export const AppleWidget = () => {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromiseOne) {
      tvScriptLoadingPromiseOne = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromiseOne.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_40581") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 1090,
          height: 649,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_40581",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_40581" />
    </div>
  );
};

//MicrosoftWidget

let tvScriptLoadingPromiseTwo;

export const MicrosoftWidget = () => {
  const onLoadScriptRef = useRef();
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromiseTwo) {
      tvScriptLoadingPromiseTwo = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromiseTwo.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_09df4") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 1090,
          height: 649,
          symbol: "NASDAQ:MSFT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_09df4",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_09df4" />
    </div>
  );
};

//AmazonWidget

let tvScriptLoadingPromiseThree;

export const AmazonWidget = () => {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromiseThree) {
      tvScriptLoadingPromiseThree = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromiseThree.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_25a30") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 1090,
          height: 649,
          symbol: "NASDAQ:AMZN",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_25a30",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_25a30" />
    </div>
  );
};

//NvidiaWidget

let tvScriptLoadingPromiseFour;

export const NvidiaWidget = () => {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromiseFour) {
      tvScriptLoadingPromiseFour = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromiseFour.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_15fa1") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 1090,
          height: 649,
          symbol: "NASDAQ:NVDA",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_15fa1",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_15fa1" />
    </div>
  );
};

//GoogleWidget

let tvScriptLoadingPromiseFive;

export const GoogleWidget = () => {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromiseFive) {
      tvScriptLoadingPromiseFive = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromiseFive.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_da313") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 1090,
          height: 649,
          symbol: "NASDAQ:GOOGL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_da313",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_da313" />
    </div>
  );
};
