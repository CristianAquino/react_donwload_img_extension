"use client";
import JSZip from "jszip";
import { DwButton } from "./styled-components";

export type DonwloadButtonProps = {
  // types...
  images: string[];
};

const DonwloadButton = ({ images }: DonwloadButtonProps) => {
  async function descargarImagen({
    url,
    zip,
    c,
  }: {
    url: string;
    zip: any;
    c: number;
  }) {
    try {
      // Descarga la imagen utilizando fetch
      const response = await fetch(url);
      const imageData = await response.blob();
      const fileName = c + "." + imageData.type.split("/")[1];
      // const fileName =
      //   url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")) +
      //   "." +
      //   imageData.type.split("/")[1];
      // Agrega la imagen al archivo RAR utilizando JSZip
      zip.file(fileName, imageData);
    } catch (error) {
      console.error(`Error al descargar la imagen ${url}: ${error}`);
    }
  }

  const handleDownload = async () => {
    const zip = new JSZip();
    let c = 0;
    for (const img of images) {
      c++;
      await descargarImagen({ url: img, zip, c });
    }

    zip
      .generateAsync({ type: "blob" })
      .then((content) => {
        // Descarga el archivo RAR
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "imagenes.rar";
        link.click();
      })
      .catch((error) => {
        console.error("Error al generar el archivo RAR:", error);
      });
  };

  return (
    <DwButton
      disabled={images.length == 0 ? true : false}
      onClick={handleDownload}
    >
      donwload all selected
    </DwButton>
  );
};

export default DonwloadButton;
