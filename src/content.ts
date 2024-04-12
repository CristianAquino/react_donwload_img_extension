// {document} - currentSrc

export async function run() {
  const urls: string[] = [];
  const exts = ["jpg", "jpeg", "png", "gif", "avif", "webp"];
  // iteramos el document.images
  for (const iterator of window.document.images) {
    // validamos su extension
    const rgx = /^(http|https)/gi;
    // obtenemos el ultimo string
    let ext = iterator.currentSrc.split(".").pop();
    // verificamos su valor
    if (exts.includes(ext as string) || rgx.test(iterator.currentSrc)) {
      if (!urls.includes(iterator.currentSrc)) {
        urls.push(iterator.currentSrc);
      }
    }
  }

  if (urls.length === 0) {
    return "not found image in current page";
  }
  // realizamos el almacenamiento de datos
  // al session storage y
  // al local storage de chrome
  // sessionStorage.setItem("data", JSON.stringify(msg));
  await chrome.storage.local.set({ data: urls });
}
