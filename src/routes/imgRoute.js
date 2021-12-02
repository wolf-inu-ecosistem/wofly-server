import { Router } from "express";
import multer from "multer";
import fs from "fs";

import resize from "../helper/resizeImg";

const route = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

route.post("/", upload.single("image"), (req, res) => {
  const { originalname, buffer } = req.file;
  const { position } = req.body;

  if (!req.file) {
    return res.send({
      success: false,
      msg: "No file uploaded",
    });
  } else {

    //Si la posicion es horizontal el ancho es 400
    //Si la posicion es vertical el alto es 400
    //Si las dimenciones son iguales el tamaño es 400*400
    let originalImage;
    let urlFirebase; 
    if (position == "horizontal") {
      urlFirebase = resize(buffer, `card-${originalname}`, 400);
      urlFirebase = resize(buffer, `recently-${originalname}`, 150);

      
     originalImage = fs.writeFileSync(
      `./src/uploads/${originalname}`,
      buffer
    );
    } else if (position == "vertical") {
      urlFirebase = resize(buffer, `card-${originalname}`, 400);
      urlFirebase = resize(buffer, `recently-${originalname}`, 150);

      
     originalImage = fs.writeFileSync(
      `./src/uploads/${originalname}`,
      buffer
    );
    } else if (position == "equal") {
      urlFirebase = resize(buffer, `card-${originalname}`, 400);
      urlFirebase = resize(buffer, `recently-${originalname}`, 150);

      
     originalImage = fs.writeFileSync(
      `./src/uploads/${originalname}`,
      buffer
    );
    }


    res.send({
      success: true,
      url: urlFirebase,
    });
  }
});

export default route;
