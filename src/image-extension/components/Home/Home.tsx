"use client";
import { useState } from "react";
import { run } from "../../../content";
import { Gallery } from "../Gallery";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  const [img, setImg] = useState<string[]>([]);

  async function handleClick() {
    try {
      // injectamos el script de content en la
      // pestaña actual
      const tab = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (!tab) return;
      const tabData = tab[0];
      if (
        tabData.status === "complete" &&
        /^(http|https)/gi.test(tabData.url as string)
      ) {
        await chrome.scripting.executeScript({
          target: { tabId: tabData.id as number },
          // archivo que sera injectado
          func: run,
        });
        console.log("inject to content");
      } else {
        console.error("tab blocked");
      }
    } catch (error) {
      console.error("error in load popup");
    }
    const ja = await chrome.storage.local.get("data");
    setImg(ja.data);
  }

  return (
    <section>
      {img.length == 0 && <button onClick={handleClick}>get image</button>}
      {img.length > 0 && <Gallery images={img} />}
    </section>
  );
};

export default Home;
