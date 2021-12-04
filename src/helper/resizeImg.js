import sharp from "sharp";

import uploadFileToFirebase from "./firebaseUpload";


//Funcion que minimiza el tamaño , recibe el buffer de bytes, el nombre y el tamaño.
async function resize(path, filename, size) {
  const process = sharp(path);

  let resize = await process.resize( size, size, {
    fit: "cover",
    background: "transparent",
  });

  resize.toFile(`./src/resize/${filename}`)
  // .toBuffer()
  // .then(function(outputBuffer) {
  //   uploadFileToFirebase( outputBuffer, filename )
  // });

}

export default resize;
