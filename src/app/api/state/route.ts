import { NextResponse } from "next/server";

type Task = { id:string; title:string; status:"waiting"|"running"|"done"|"failed"; author:string; time:string; description?:string; };
const state = globalThis as typeof globalThis & { chobits?: { tasks:Task[]; events:{icon:string;title:string;body:string}[]; files:{name:string;change:string}[]; connected:boolean } };
state.chobits ??= { connected:true, tasks:[{id:"t-1",title:"重做首页 Hero 区域",status:"waiting",author:"你",time:"刚刚",description:"把首页改成更有编辑感的团队协作介绍，并保留现有导航。"},{id:"t-2",title:"修复移动端菜单溢出",status:"done",author:"林墨",time:"昨天"},{id:"t-3",title:"增加项目活动时间线",status:"done",author:"你",time:"周一"}],events:[{icon:"✓",title:"首页改版已完成",body:"Codex 修改了 4 个文件 · 8 分钟前"},{icon:"↗",title:"林墨加入了项目",body:"通过邀请链接加入 · 42 分钟前"},{icon:"+",title:"连接了本地工作区",body:"~/Documents/CodeXWork/chobits · 1 小时前"}],files:[{name:"src/app/page.tsx",change:"+32  −18"},{name:"src/app/globals.css",change:"+46  −12"},{name:"src/components/Hero.tsx",change:"+28  −0"}] };
export async function GET(){return NextResponse.json(state.chobits);}
