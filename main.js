let moveDistance = 70;

function handleNo() {
  const noButton = document.getElementById("noBtn");
  let currentMarginTop = parseInt(noButton.style.marginTop) || 0;

  currentMarginTop += moveDistance;
  noButton.style.marginTop = `${currentMarginTop}px`;

  document.getElementById(
    "valentineVideo"
  ).src = `https://cdnl.iconscout.com/lottie/premium/preview-watermark/bunny-crying-4193977-3469066.mp4`;
}
function handleYes() {
  document.getElementById(
    "valentineVideo"
  ).src = `https://cdnl.iconscout.com/lottie/premium/thumb/bunny-in-love-4193980-3469069.mp4`;
  document.getElementById("yesBtn").style.marginLeft = "0";
  document.getElementById("yesBtn").innerHTML = "Te Quero &#10084";
  document.getElementById("yesBtn").id = "yesBtnAfter";
  // alert("Gad3a, Te Quero");
}
