"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={handleSignOut}> Sign Out </button>
      {session ? (
        <div>Welcome, {session.user.name}</div>
      ) : (
        <div>
          {" "}
          <Link href={"/login"}></Link>
          <Link href={"/register"}></Link>
        </div>
      )}
    </div>
  );
};
export default Header;
