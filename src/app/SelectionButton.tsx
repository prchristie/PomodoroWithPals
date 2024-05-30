"use client";
import { Button, ButtonProps } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const SelectionButton = (
  props: ButtonProps & React.RefAttributes<HTMLButtonElement>,
) => {
  return (
    <Button
      className={cn(props.className, "min-w-44 py-4")}
      {...props}
    ></Button>
  );
};
