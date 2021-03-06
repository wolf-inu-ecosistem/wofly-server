import { Router } from "express";
import {db} from "../firebase/firebaseInit.js";

const route = Router();

route.get("/", async (req, res) => {
  const aTuringRef = db.collection("usersServer").doc("aturing");

  await aTuringRef.set({
    first: "Alan3",
    middle: "Mathison3",
    last: "Turing",
    born: 1912,
  });

  res.json({ nombre: "angel" });
});

export default route;
