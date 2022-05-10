var counter = 0;

function generateContentRecirculationAd(slotId) {
  const vfAdContainer = document.getElementById(slotId);
  const networkNAd = document.createElement("div");
  networkNAd.setAttribute("id", "nn_viafoura_mpu1");
  vfAdContainer.appendChild(networkNAd);
  console.log("3. generateContentRecirculationAd");
  loadNetworkN();
};

function generateStandaloneAd(slotId) {
  counter++;
  if (counter === 1) {
    const vfAdContainer = document.getElementById(slotId);
    console.log(slotId);
    const networkNAd = document.createElement("div");
    networkNAd.setAttribute("id", "nn_viafoura_mpu2");
    vfAdContainer.appendChild(networkNAd);
    console.log("2. generateStandaloneAd");
  }
  if (counter === 2) {
    const vfAdContainer = document.getElementById(slotId);
    console.log(slotId);
    const networkNAd = document.createElement("div");
    networkNAd.setAttribute("id", "nn_lb1");
    vfAdContainer.appendChild(networkNAd);
    console.log("2.1 generateStandaloneAd");
  }
};

// Subscribe to the viafoura event when the viafoura object is ready
window.vfQ = window.vfQ || [];
window.vfQ.push(function () {
  window.vf.$subscribe("vf-ads", "requestContentRecirculationAd", generateContentRecirculationAd);
  window.vf.$subscribe("vf-ads", "requestStandaloneAd", generateStandaloneAd);
  console.log("1. Events subscribed");
});
