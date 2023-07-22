let idx = 0;
document.addEventListener("copy", () => {
  console.log("content-script.js");
  const selected = window.getSelection()?.toString();

  let obj = {};
  obj[idx] = selected;

  chrome.storage.local.set(obj).then(() => {
    console.log(idx);
    console.log(`Value is set for ${idx}`);
    idx++;
  });
});
