export default function Layout() {
  return (
    <div className="w-[1200px] m-auto min-h-full flex-col">
      <div className="h-[100px] bg-red-900"></div>
      <div className="flex h-screen w-full">
        <div className="w-1/4 bg-green-800 "></div>
        <div className="w-full bg-black "></div>
        <div className="w-1/4 bg-yellow-600 "></div>
      </div>
    </div>
  );
}
