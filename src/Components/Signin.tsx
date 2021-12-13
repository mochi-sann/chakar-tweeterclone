import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export type SigninProps = {};

const Signin: React.VFC<SigninProps> = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session)} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Signin;
