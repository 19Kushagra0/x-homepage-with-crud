import { NextResponse } from "next/server";

const store = [];

export async function POST(request) {
  const data = await request.json();

  store.push(data.add);
  console.log(store);
  return NextResponse.json("data recieved");
}

export async function GET() {
  console.log(store);

  return NextResponse.json({ message: "data check", store });
}
