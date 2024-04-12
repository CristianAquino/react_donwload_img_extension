"use client";

import { useState } from "react";
import { DonwloadButton } from "../DonwloadButton";
import { ContainerImage, Label } from "./styled-components";

export type GalleryProps = {
  // types...
  images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
  const [download, setDownload] = useState<string[]>([]);
  const [all, setAll] = useState<boolean>(false);

  function handleSelectImageDownload(url: string) {
    if (!download.includes(url)) {
      setDownload([...download, url]);
    } else {
      setDownload(download.filter((item) => item !== url));
    }
  }

  function handleAllImageDownload() {
    if (!all) {
      setDownload(images);
      setAll(!all);
    } else {
      setDownload([]);
      setAll(!all);
    }
  }

  return (
    <>
      <h3>{images.length} image founds</h3>
      <Label>
        <input
          type="checkbox"
          checked={all}
          onChange={handleAllImageDownload}
        />
        <p>select all image</p>
      </Label>
      {images.map((image) => (
        <ContainerImage>
          <a href={image} download>
            download
          </a>
          <label>
            <img src={image} />
            <input
              type="checkbox"
              name="slt_image"
              checked={download.includes(image)}
              onChange={() => handleSelectImageDownload(image)}
            />
          </label>
        </ContainerImage>
      ))}
      {download.length > 0 && <DonwloadButton images={download} />}
    </>
  );
};

export default Gallery;
