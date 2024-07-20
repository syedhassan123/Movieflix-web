const { NextResponse } = require("next/server");
import { connection } from "@/utils/dbConnect";
import { Contact } from "@/utils/model/schema";
import mongoose from "mongoose";

// Function to get the data from database
// export async function GET(req){
//     await mongoose.connect(connection)
//     const data=await Contact.find()
//     console.log(data);
//     return NextResponse.json({result:data})
// }

export async function POST(req, res) {
  const payload = await req.json();
  // console.log(payload);
  await mongoose.connect(connection);
  let contact = new Contact(payload);
  const result = contact.save();
  if (!payload.username || !payload.email || !payload.phone) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  return NextResponse.json({ result, success: true }, { status: 200 });
}
