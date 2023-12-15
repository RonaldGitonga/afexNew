
import express, { json } from "express";
import { connect} from "mongoose";
import cors from "cors";

export async function POST(){
    const app = express();
    //app.use(json());
    app.use(cors());
    app.get("/test", async (req, res) => {
        res.send("Success!!!!!!");
      });
}