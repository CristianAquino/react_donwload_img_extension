"use client";
import JSZip from "jszip";
import { DwButton } from "./styled-components";

export type DonwloadButtonProps = {
  // types...
  images: string[];
};

const DonwloadButton = ({ images }: DonwloadButtonProps) => {
  async function descargarImagen(url: string, zip: any) {
    try {
      // Descarga la imagen utilizando fetch
      const response = await fetch(url);
      const imageData = await response.blob();
      const fileName =
        url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")) +
        "." +
        imageData.type.split("/")[1];
      // Agrega la imagen al archivo RAR utilizando JSZip
      zip.file(fileName, imageData);
    } catch (error) {
      console.error(`Error al descargar la imagen ${url}: ${error}`);
    }
  }

  const handleDownload = async () => {
    const zip = new JSZip();
    for (const img of images) {
      await descargarImagen(img, zip);
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
