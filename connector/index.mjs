const base = process.env.CHOBITS_URL || 'http://localhost:3000';
const interval = Number(process.env.CHOBITS_POLL_MS || 3000);
const codexBin = process.env.CODEX_BIN || '';
let activeTask = null;
console.log(`Chobits Connector connected → ${base}`);
console.log(`Workspace: ${process.env.CHOBITS_WORKSPACE || process.cwd()}`);
async function update(id,status){await fetch(`${base}/api/tasks`,{method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify({id,status})});}
async function poll(){try{const res=await fetch(`${base}/api/connector/poll`);const data=await res.json();if(data.nextTask && !activeTask){activeTask=data.nextTask;console.log('Received task:',activeTask.title);await update(activeTask.id,'running');if(codexBin){const {spawn}=await import('node:child_process');const child=spawn(codexBin,[],{cwd:process.env.CHOBITS_WORKSPACE||process.cwd(),stdio:['pipe','inherit','inherit']});child.stdin.end(activeTask.description||activeTask.title);child.on('close',async(code)=>{await update(activeTask.id,code===0?'done':'failed');activeTask=null});}else{console.log('Dry run: set CODEX_BIN=codex to execute real local Codex.');setTimeout(async()=>{await update(activeTask.id,'done');activeTask=null},1800)}}}catch(error){console.error('Connector offline:',error.message)}}
poll();setInterval(poll,interval);
