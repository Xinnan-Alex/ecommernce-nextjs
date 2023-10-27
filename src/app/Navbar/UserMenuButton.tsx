"use client";

import { Session } from "next-auth";
import Image from "next/image";
import profilePicPlaceHolder from "@/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        {user ? (
          <Image
            src={user?.image || profilePicPlaceHolder}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <FontAwesomeIcon icon={faEllipsis} />
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box menu-sm z-30 mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </li>
      </ul>
    </div>
  );
}
