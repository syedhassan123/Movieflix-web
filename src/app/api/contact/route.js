const { NextResponse } = require("next/server");
// import { connection } from "@/utils/dbConnect";
import { Contact } from "@/utils/model/schema";
import mongoose from "mongoose";
const connection=process.env.DB_KEY
// Function to get the data from database
export async function GET(req){
    await mongoose.connect(connection)
    const data=await Contact.find()
    console.log(data);
    return NextResponse.json({result:data})
}

// export async function POST(req, res) {
//   const payload = await req.json();
//   await mongoose.connect(connection);
//   let contact = new Contact(payload);
//   const result = contact.save();
//   if (!payload.username || !payload.email || !payload.phone) {
//     return NextResponse.json({ success: false }, { status: 400 });
//   }
//   return NextResponse.json({ result, success: true }, { status: 200 });
// }








export async function POST(req) {
  try {
    const payload = await req.json();

    if (!payload.username || !payload.email || !payload.phone) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    await mongoose.connect(connection);

    let contact = new Contact(payload);
    const result = await contact.save();  // Ensure to await this operation

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
