"use client";

import { Button } from "~/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export const SignInOut = () => {
  const { data: session } = useSession();

  return (
    <>
      {session && <Button onClick={() => signOut()}>Log out</Button>}
      {!session && <Button onClick={() => signIn()}>Log in</Button>}
    </>
  );
};
