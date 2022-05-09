function loadNetworkN() {
  const networkN = document.createElement("script");
  networkN.setAttribute("async", true);
  networkN.setAttribute("src", "https://kumo.network-n.com/dist/app.js");
  networkN.setAttribute("site", "tech-raptor");
  document.head.appendChild(networkN);
  console.log("4. loadNetworkN");
  debugger;
}
