import Navbar from "../navbar/Navbar";
import LeftBar from "../sidebars/LeftBar";
import RightBar from "../sidebars/RightBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[1366px] m-auto min-h-full flex-col">
      <Navbar />
      <div className="flex h-screen w-full">
        <div className="w-[30%] ">
          <LeftBar />
        </div>
        <div className="w-[70%]  ">
          {children}
        </div>
        <div className="w-[30%] ">
          <RightBar />
        </div>
      </div>
    </div>
  );
}
