import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";
import user from "../public/user.png";

export default function Header({ isMobile, userid }) {
  return (
    <div
      style={{ height: isMobile ? "fit-content" : "60px" }}
      className="w-full absolute top-0 text-white flex items-center justify-between bg-purple-800"
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
        <h1 className="mx-2">StudyApp</h1>
      </div>

      {/* user profile picture */}
      <div className="px-2">
        <Image
          src={user}
          alt="Profile Picture"
          width={45}
          height={45}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
