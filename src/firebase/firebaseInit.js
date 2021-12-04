import firebaseAdmin from "firebase-admin";
import serviceAccount from "./key.json";

const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

export const storageRef = admin.storage().bucket(`gs://wolfy-global.appspot.com`);


