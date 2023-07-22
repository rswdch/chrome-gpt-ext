
chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log("background.js")
  console.log(Object.entries(changes));
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
    // const storageContent = await chrome.local.storage.get('id');
    // const el = self.document.createElement('div');
    // el.innerText = newValue;
    // self.document.body.append(el)

  }
});
