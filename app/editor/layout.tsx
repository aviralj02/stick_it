import { TodoProvider } from "@/context/TodoContext";

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TodoProvider>{children}</TodoProvider>;
}
