import  DBConnection  from "@/app/DB/Dbconn"; 
import Topic from "@/app/DB/models/topics";
import { NextResponse } from "next/server";
DBConnection();

//let's check our api method working or not check through thunder the client :-) sorry for that 😂
//sorry for waiting
export async function PATCH(req, context){ //we get context for a particular id :-)
    try{
        const id = context.params.id; //get reference through another app :-)
        const update = await req.json();
        const data = await Topic.findByIdAndUpdate(id, update); 
        if(!res){
            return NextResponse.json({
                status: 400,
                msg: "Your Data is not updated :-(",
            })
        }

        return NextResponse.json({
            status: 200,
            msg: "Your data is Updated :-) ",
            data
        })
    }
    catch(error){
        return NextResponse.json({
            status: 400,
            msg: "Your Data is not updated :-(",
            error
        })
    }
}


export async function DELETE(req, context){
    try{
        const id = await context.params.id;
        const res = await Topic.findByIdAndDelete(id); 
        return NextResponse.json({status: 200}, {msg: "Your data is deleted"});
    }
    catch(error){
        return NextResponse.json({status: 500}, {msg: "Your data has not deleted"});
    }
}


export async function GET(req, context){
    try{
        const id = await context.params.id;
        const res = await Topic.findById(id);
        if(!res){
            console.log('Data cant find :-(');
        }

        return NextResponse.json({
            status: 200,
            msg : "Data :-) ",
            res
        })
    }
    catch(error){
        return NextResponse.json({
            status: 400, 
            msg: "Your data can't find :-( ",
            error
        })
    }
}