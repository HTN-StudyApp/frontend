import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";
import pfp from "../public/user.png";
import useUser from "../lib/useUser";

export default function Header({ isMobile, userid }) {
  const { user, loading, signInWithGoogle, logout } = useUser();
  return (
    <nav
      style={{
        height: isMobile ? "fit-content" : "60px",
      }}
      className="z-10 bg-indigo-900 w-full absolute top-0 text-white flex items-center justify-between"
    >
      {/* logo */}
      <div className="flex items-center px-2">
        <Image
          src={logo}
          alt="StudyApp Logo"
          width={45}
          height={45}
          className="rounded-full"
        />
        <Link href="/">
          <a className="mx-2">StudyApp</a>
        </Link>
      </div>

      {/* user profile picture */}
      {!loading &&
        (user ? (
          <div className="px-2 flex items-center">
            <Image
              src={user.photoURL}
              alt="Profile Picture"
              width={45}
              height={45}
              className="rounded-full"
            />
            <button className={"px-2"} onClick={() => logout()}>
              Sign Out
            </button>
          </div>
        ) : (
          <button className={"px-2"} onClick={() => signInWithGoogle()}>
            Sign In
          </button>
        ))}
    </nav>
  );
}
