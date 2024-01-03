import { Analytics } from "../../lib/models";
import { connectToDB } from "../../lib/utils/connectToDb";

export async function POST(req){
    const body=req.body;
    console.log(body)

    
  try {
    connectToDB();

    const newAnalytics = new Analytics({
      SAT,
      GMAT,
      IELTS,
      pageVisits,
      date,
    });

    await newAnalytics.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create add analytics!");
  }


}