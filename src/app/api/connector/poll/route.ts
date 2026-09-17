import { NextResponse } from "next/server";
type Task = { id:string; title:string; status:string; description?:string };
const root = globalThis as typeof globalThis & { chobits?: {tasks:Task[];events:{icon:string;title:string;body:string}[];files:{name:string;change:string}[];connected:boolean} };
export async function GET(){
  root.chobits ??= {connected:true,tasks:[],events:[],files:[]};
  const nextTask = root.chobits.tasks.find((task) => task.status === "waiting") ?? null;
  return NextResponse.json({ok:true,connected:true,message:"Chobits Connector ready",nextTask});
}
