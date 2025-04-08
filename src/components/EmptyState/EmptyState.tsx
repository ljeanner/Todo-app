import { Card, CardContent } from "../ui/card";

export const EmptyState = (): JSX.Element => {
  return (
    <Card className="w-full border-t border-[#333333] bg-transparent rounded-lg">
      <CardContent className="flex flex-col items-center justify-center gap-4 px-6 py-16">
        <img className="w-14 h-14" alt="Clipboard" src="/clipboard.png" />
        <p className="text-center text-base leading-[22.4px]">
          <span className="font-bold text-[#7f7f7f]">
            You don&apos;t have any tasks registered yet
            <br />
          </span>
          <span className="text-[#7f7f7f]">
            Create tasks and organize your to-do items
          </span>
        </p>
      </CardContent>
    </Card>
  );
};