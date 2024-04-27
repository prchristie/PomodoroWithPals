import { Button, ButtonProps } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const SelectionButton = (
  props: ButtonProps & React.RefAttributes<HTMLButtonElement>
) => {
  return (
    <Button
      className={cn(props.className, "min-w-[200px] h-full py-4")}
      {...props}
    ></Button>
  );
};

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-background-work to-background-break flex flex-col justify-center items-center gap-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="md:text-[3rem] text-[1.5rem]">WELCOME TO</h2>
        <h1 className="md:text-[6rem] text-[2rem] bg-gradient-to-r from-primary-break to-primary-work text-transparent bg-clip-text drop-shadow font-semibold text-center">
          POMODORO WITH PALS
        </h1>
      </div>
      <div className="flex flex-col gap-4 text-[24px] items-center">
        <a href="">
          <SelectionButton>Study alone</SelectionButton>
        </a>
        <div className="flex gap-4 items-center">
          <SelectionButton>Find some pals</SelectionButton>
          <Input placeholder="Code" className="h-full" />
        </div>
        <SelectionButton>Join some friends</SelectionButton>
      </div>
    </main>
  );
}
