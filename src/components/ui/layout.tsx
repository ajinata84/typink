import Navbar from "../navbar/Navbar";
import LeftBar from "../sidebars/LeftBar";
import RightBar from "../sidebars/RightBar";

export default function Layout({
  children,
  leftBar = true,
  rightBar = true,
}: {
  children: React.ReactNode;
  leftBar?: boolean;
  rightBar?: boolean;
}) {
  return (
    <div className="w-[1366px] m-auto min-h-full flex-col relative">
      <Navbar/>
      <div className="flex h-screen w-full pt-[100px] relative">
        <div className="w-[20%] min-w-[20%] max-w-[20%] ">
          {leftBar && <LeftBar />}
        </div>
        <div className="w-[60%]">{children}</div>
        <div className="w-[20%] max-w-[20%] min-w-[20%] p-4 sticky top-0">
          {rightBar && <RightBar />}
        </div>
      </div>
    </div>
  );
}
