//import function to resize a img
import resize from "../helper/resizeImg";

const uploadController = (req, res) => {
    const { originalname, path } = req.file;
    const { position } = req.body;
  
    const sizeX = 400;
    const sizeY = 150;
  
    if (!req.file) {
      return res.send({
        success: false,
        msg: "No file uploaded",
      });
    } else { 
      //Si la posicion es horizontal el ancho es 400
      //Si la posicion es vertical el alto es 400
      //Si las dimenciones son iguales el tamaño es 400*400

      let urlFirebase;
      if (position === "horizontal") {
        urlFirebase = resize(path, `card-${originalname}`, sizeX);
        urlFirebase = resize(path, `recently-${originalname}`, sizeY);
      } else if (position === "vertical") {
        urlFirebase = resize(path, `card-${originalname}`, sizeX);
        urlFirebase = resize(path, `recently-${originalname}`, sizeY);
  
      } else if (position === "equal") {
        urlFirebase = resize(path, `card-${originalname}`, sizeX);
        urlFirebase = resize(path, `recently-${originalname}`, sizeY);
      }

      res.send({
        success: true,
        msg: "File uploaded",
      });

    }
}

export default uploadController;
