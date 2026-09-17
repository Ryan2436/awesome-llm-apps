import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Chobits · 本地 Codex 团队工作台", description: "让团队通过网页协作使用本地 Codex" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
