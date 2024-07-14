import  DBConnection  from "@/app/DB/Dbconn";  //wtf Bug is very simple we import connection into the bracket tf 😁💀
import Topic from "@/app/DB/models/topics";
import { NextResponse } from "next/server";
DBConnection();

//lets get reference through another code :-)
export async function POST(request) {
    try {
        const { title, description } = await request.json();
        const res = await Topic.create({ title, description }); //Now let's re-check our code it
        console.log(res);
        return NextResponse.json({ status: 200, msg: "Your Data :-) ", res });
    } catch (error) {
        return NextResponse.json({ status: 400, msg: "Error", error });
    } //check through thunder client code is working or not
}

export async function DELETE(req) {
    try {
        const res = await req.json();
        const response = await Topic.deleteMany({ res });
        if (response) {
            return NextResponse.json({ status: 200, msg: "Your data has been Deleted 😐" });
        }
    }
    catch (error) {
        return NextResponse.json({ status: 400, msg: "Error", error });
    }
}

export async function GET(request) {
    try {
        const res = await Topic.find();
        if (!res) {
            return NextResponse.json({ status: 400, msg: "Your data can't find :-( " });
        }

        return NextResponse.json({ status: 200, msg: "Your data :-) ", res });
    }
    catch (error) {
        return NextResponse.json({ status: 400, msg: "Your data can't find :-( ", error });
    }
}