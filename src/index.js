import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import ClipboardJS from "clipboard";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
var clipboard = new ClipboardJS(document.querySelectorAll("a"));

var bootstrap = require("bootstrap");
function attachToast(toastTrigger) {
  const toastLiveExample = document.getElementById("copiedToast");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {
      const toast = new bootstrap.Toast(toastLiveExample);

      toast.show();
    });
  }
}
attachToast(document.getElementById("emailClipboardButton"));
attachToast(document.getElementById("phone"));

// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text);
// }

// document.getElementById("emailClipboardButton").onclick = copyToClipboard("naorleizer@gmail.com");
// document.getElementById("phoneCopy").onclick = copyToClipboard("0526602590");
