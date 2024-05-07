import Navbar from "../navbar/Navbar";
import LeftBar from "../sidebars/LeftBar";
import RightBar from "../sidebars/RightBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[1366px] m-auto min-h-full flex-col">
      <Navbar />
      <div className="flex h-screen w-full">
        <div className="w-[20%] min-w-[20%] max-w-[20%] ">
          <LeftBar />
        </div>
        <div className="w-full  ">
          {children}
        </div>
        <div className="w-[20%] max-w-[20%] min-w-[20%] p-4">
          <RightBar />
        </div>
      </div>
    </div>
  );
}
