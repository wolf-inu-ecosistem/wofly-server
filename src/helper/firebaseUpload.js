import { storageRef } from "../firebase/firebaseInit";

export default async function uploadFileToFirebase( file, filename ) {
    try {
  
      const destFileName = `uploads/${filename}`;
      const fileCloud = storageRef.file(destFileName);
      const fileUploaded = await fileCloud.save(
        file.buffer,
        {
          contentType: file.mimetype,
        },
        (err) => {
          if(err) console.log("unexpected error ");
        }
      );
  
        console.log(fileUploaded)
    } catch (error) {
      console.log(error);
    }
}