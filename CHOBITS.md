# chobits

桌面端团队协作工作台：团队通过网页创建任务、查看本地 Codex 状态、审阅变更和预览结果。

## 运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000。

另开终端启动本地 Connector：

```bash
npm --prefix connector start
```

要尝试调用本机 Codex CLI：

```bash
CODEX_BIN=codex CHOBITS_WORKSPACE=/你的项目路径 npm --prefix connector start
```

第一版范围：仅桌面端、单项目、多网页成员、单台本地执行机。当前状态存于 Web 服务进程内存，重启会清空；后续接入 PostgreSQL。
