import React from "react";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const TaskInput = (): JSX.Element => {
  return (
    <div className="flex w-[736px] items-center gap-2 absolute top-[173px] left-1/2 -translate-x-1/2">
      <Input
        className="flex-1 p-4 bg-gray-500 text-gray-300 border-[#0c0c0c] placeholder:text-gray-300"
        placeholder="Add a new Task"
      />
    </div>
  );
};