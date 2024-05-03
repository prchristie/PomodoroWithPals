import { Button, ButtonProps } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { SignInOut } from "./components/auth/signInOutButton";

const SelectionButton = (
  props: ButtonProps & React.RefAttributes<HTMLButtonElement>,
) => {
  return (
    <Button
      className={cn(props.className, "min-w-44 py-4")}
      {...props}
    ></Button>
  );
};

const Header = () => {
  return (
    <header className="flex p-2">
      <div className="ml-auto mr-0 w-fit">
        <SignInOut />
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background-work to-background-break p-2">
      <div className="flex h-full flex-col">
        <Header />
        <div className="flex h-full flex-col items-center gap-28 pt-48">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[1.5rem] md:text-[3rem]">WELCOME TO</h2>
            <h1 className="bg-gradient-to-r from-primary-break to-primary-work bg-clip-text text-center text-[2rem] font-semibold text-transparent drop-shadow md:text-[6rem]">
              POMODORO WITH PALS
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4 text-[24px]">
            <a href="">
              <SelectionButton>Study alone</SelectionButton>
            </a>
            <div className="flex items-center gap-4">
              <SelectionButton>Find some pals</SelectionButton>
              <Input placeholder="Code" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
