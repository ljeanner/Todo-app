import React from "react";
import { Header } from "../../components/Header";
import { TaskInput } from "../../components/TaskInput";
import { TaskCounter } from "../../components/TaskCounter";
import { EmptyState } from "../../components/EmptyState";

export const TodoPage = (): JSX.Element => {
  return (
    <div className="bg-[#191919] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-gray-600 w-full max-w-[1440px] h-[1024px] relative">
        <Header />
        <TaskInput />
        
        <main className="flex flex-col w-[736px] items-start gap-6 absolute top-[291px] left-1/2 -translate-x-1/2">
          <TaskCounter />
          <EmptyState />
        </main>
      </div>
    </div>
  );
};