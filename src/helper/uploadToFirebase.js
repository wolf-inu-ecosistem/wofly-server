
import { App } from "firebase-admin/app";

const storageRef = storage('gs://wolfy-global.appspot.com')
// Add Image to Storage and return the file path
const addImage = async ( buffer, filename ) => {
    try {

         // Step 1. Create reference for file name in cloud storage 
        const imageRef = storage.child(`images/${filename}`);
        // Step 2. Upload the file in the bucket storage
        const snapshot = await imageRef.put(buffer);
        // Step 3. Grab the public url
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        console.log(downloadURL);

        return downloadURL;

     }  catch (error) {
        console.log (error)
    }
}

export default addImage;
