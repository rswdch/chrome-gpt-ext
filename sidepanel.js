console.log('sidepanel.js outer scope');
const inSidePanel = 'hello';

window.addEventListener("DOMContentLoaded", () => {

  chrome.storage.onChanged.addListener((changes, namespace) => {
    const divContainer = document.querySelector('#container')
    let el = document.createElement('div');
    el.classList.add('clip-item');
    
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      el.innerText = newValue;
      divContainer.prepend(el);
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
      );
    }
  });
})

