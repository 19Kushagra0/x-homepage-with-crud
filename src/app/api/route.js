import { NextResponse } from "next/server";

let store = [];

export async function POST(request) {
  const data = await request.json();

  console.log(data);

  if (data.oldValue !== undefined) {
    console.log(data.oldValue);
    store = store.map((el, index, arr) => {
      if (index === data.oldValue) {
        return data.editValue;
      } else {
        return el;
      }
    });
    return NextResponse.json("edited value");
  }

  if (data.delete !== undefined) {
    console.log(data.delete);
    store = store.filter((el, index, arr) => {
      if (data.delete !== index) {
        return true;
      } else {
        false;
      }
    });

    return NextResponse.json("data deleted");
  }

  if (data.add) {
    store.unshift(data.add);
    console.log(store);
    return NextResponse.json("data recieved");
  }
}

export async function GET() {
  console.log(store);

  return NextResponse.json({ message: "data check", store });
}
