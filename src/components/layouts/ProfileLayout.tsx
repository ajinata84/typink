// src/components/layouts/ProfileLayout.tsx
import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import LeftBar from "../sidebars/LeftBar";
import RightBar from "../sidebars/RightBar";
interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="w-[1366px] m-auto min-h-full flex-col">
      <Navbar />
      <div className="flex h-screen w-full">
        <div className="w-[20%] min-w-[20%] max-w-[20%] "></div>
        <div className="w-full  ">{children}</div>
        <div className="w-[20%] max-w-[20%] min-w-[20%] p-4"></div>
      </div>
    </div>
  );
};

export default ProfileLayout;
