import { Router } from "express";
import multer from "multer";


import uploadController from "../controller/uploadController";


const route = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

route.post("/", upload.single("file"), uploadController );

export default route;
