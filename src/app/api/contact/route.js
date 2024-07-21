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
  // Handle preflight request for CORS
  if (req.method === 'OPTIONS') {
    return NextResponse.json(null, {
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*', // Change '*' to the specific origin if needed
        'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, X-HTTP-Method-Override, Content-Type, Authorization, Accept',
      },
      status: 200,
    });
  }

  // Handle the POST request
  const payload = await req.json();

  if (!payload.username || !payload.email || !payload.phone) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    await mongoose.connect(connection);
    const contact = new Contact(payload);
    const result = await contact.save();

    return NextResponse.json({ result, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}