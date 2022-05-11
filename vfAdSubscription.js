let counter = 0;

function generateStandaloneAd(slotId) {
  const vfAdContainer = document.getElementById(slotId);
  const networkNAd = document.createElement("div");
  let networkNDivId = "nn_viafoura_mpu2";
  if (counter === 1) networkNDivId = "nn_lb1";
  networkNAd.setAttribute("id", networkNDivId);
  vfAdContainer.appendChild(networkNAd);
  counter++;
  console.log("2. generateStandaloneAd - ", slotId);
};

function generateContentRecirculationAd(slotId) {
  const vfAdContainer = document.getElementById(slotId);
  const networkNAd = document.createElement("div");
  networkNAd.setAttribute("id", "nn_viafoura_mpu1");
  vfAdContainer.appendChild(networkNAd);
  console.log("3. generateContentRecirculationAd");
  loadNetworkN();
};

// Subscribe to the viafoura event when the viafoura object is ready
window.vfQ = window.vfQ || [];
window.vfQ.push(function () {
  window.vf.$subscribe("vf-ads", "requestContentRecirculationAd", generateContentRecirculationAd);
  window.vf.$subscribe("vf-ads", "requestStandaloneAd", generateStandaloneAd);
  console.log("1. Events subscribed");
});
