import { Badge } from "../ui/badge";

export const TaskCounter = (): JSX.Element => {
  return (
    <div className="flex items-end justify-between relative self-stretch w-full">
      <div className="inline-flex items-center gap-2">
        <span className="font-bold text-blue text-sm">Task created</span>
        <Badge className="bg-gray-400 text-gray-200 rounded-full px-2 py-0.5">
          <span className="font-bold text-xs">0</span>
        </Badge>
      </div>

      <div className="inline-flex items-center gap-2">
        <span className="font-bold text-purple text-sm">Completed</span>
        <Badge className="bg-gray-400 text-gray-200 rounded-full px-2 py-0.5">
          <span className="font-bold text-xs">0</span>
        </Badge>
      </div>
    </div>
  );
};