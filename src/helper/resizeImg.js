import sharp from "sharp";
import fs from "fs";

import uploadToFirebase from "./uploadToFirebase";

async function resize(buffer, filename, size) {
  const process = sharp(buffer);

  let resize = await process.resize( size, size, {
    fit: "cover",
    background: "transparent",
  });

  const resizeImgBuffer = await resize.toBuffer();

  console.log("resizeImgBuffer", resizeImgBuffer);

  const bufferToImg = fs.writeFileSync(`src/resize/${filename}`, resizeImgBuffer);

   return uploadToFirebase( resizeImgBuffer, filename );
}

export default resize;
