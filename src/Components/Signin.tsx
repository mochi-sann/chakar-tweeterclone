import { Button, Avatar } from "@chakra-ui/react";
import {} from "@chakra-ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export type SigninProps = {};

const Signin: React.VFC<SigninProps> = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Avatar
          name={session.user?.name || ""}
          src={session.user?.image || ""}
        />
        <Button onClick={() => signOut()} className="btn btn-blue">
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button className="btn btn-blue" onClick={() => signIn("github")}>
        Sign in
      </Button>
    </>
  );
};

export default Signin;
