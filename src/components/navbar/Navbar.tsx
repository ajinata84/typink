import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Plus, User, LogOut, NotebookPen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface NavbarProps {
  sticky?: boolean;
}

export default function Navbar({ sticky = false }: NavbarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/auth");
  };

  return (
    <div
      className={`flex items-center py-2 justify-between  w-[1366px] ${
        sticky ? "fixed z-50 bg-white" : ""
      }`}
    >
      <div className="w-[20%] cursor-pointer" onClick={() => navigate("/")}>
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg
            width="115"
            height="60"
            viewBox="0 0 115 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.29151 11.2624V5.25685H19.0498V11.2624H13.238V50.4597H7.1033V11.2624H1.29151ZM23.8515 50.4597C21.8712 50.4597 20.2784 49.9 19.073 48.7807C17.9106 47.6183 17.3294 46.1762 17.3294 44.4541V24.1775H16.3608L17.0065 18.1719H23.4641V44.4541H27.2095V18.1719H33.3441V53.4947C33.3441 55.1737 32.763 56.5082 31.6006 57.4984C30.4382 58.5316 28.9961 59.0482 27.274 59.0482H23.3995C21.5914 59.0482 20.1277 58.4885 19.0084 57.3692C17.8891 56.293 17.3294 54.8508 17.3294 53.0427V51.7512H23.4641V53.4947H27.2095V47.9412L25.5951 50.4597H23.8515ZM42.4871 59.0482H36.3524V24.1775H34.8026L35.4484 18.1719H42.4871V20.6904L44.1015 18.1719H45.845C47.8253 18.1719 49.3967 18.7316 50.559 19.8509C51.7644 20.9702 52.3671 22.4124 52.3671 24.1775V44.4541C52.3671 46.1762 51.7644 47.6183 50.559 48.7807C49.3967 49.9 47.8253 50.4597 45.845 50.4597H45.5867C44.4244 50.4597 43.3912 50.1798 42.4871 49.6202V59.0482ZM45.9096 24.1775H42.4871V44.4541H45.9096C46.1249 44.4541 46.2325 44.3465 46.2325 44.1313V24.5003C46.2325 24.2851 46.1249 24.1775 45.9096 24.1775Z"
              fill="black"
            />
            <path
              d="M68.5422 50.6014V24.3192H66.9924L67.6382 18.3137H74.6769V20.8322L76.2913 18.3137H78.0348C80.0151 18.3137 81.5865 18.8734 82.7488 19.9927C83.9542 21.112 84.557 22.5542 84.557 24.3192V44.5959H86.1713L85.5256 50.6014H78.4223V24.6421C78.4223 24.4269 78.3147 24.3192 78.0994 24.3192H74.6769V50.6014H68.5422ZM87.9224 50.6014V11.4041H86.3726L87.0184 5.39864H94.0571V28.8395L99.2231 18.3137H105.229L98.3837 32.1974L105.874 50.6014H99.8689L94.0571 36.3303V50.6014H87.9224ZM106.651 44.5959H112.656V50.6014H106.651V44.5959Z"
              fill="black"
            />
            <path
              d="M56.9375 49.0929L58.8356 2.9615C58.8356 2.9615 58.543 1.67266 61.1001 1.30782C63.6572 0.942987 63.4171 2.30784 63.4171 2.30784L61.3059 48.4697C59.6928 50.5558 58.9149 49.4161 57.704 49.1316C57.4681 49.0762 57.2157 49.0532 56.9375 49.0929Z"
              fill="#04D192"
              stroke="black"
              stroke-width="1.07626"
            />
            <path
              d="M56.1945 51.5053L57.4415 55.6739L57.4269 57.0953L61.1949 51.5015L58.1005 54.9589L56.1945 51.5053Z"
              fill="#D9D9D9"
            />
            <path
              d="M57.2695 49.1343L57.2498 49.758L56.1945 51.5053M56.1945 51.5053L57.4415 55.6739L57.4269 57.0953L61.1949 51.5015M56.1945 51.5053L58.1005 54.9589L61.1949 51.5015M61.1949 51.5015L61.0359 48.863"
              stroke="black"
              stroke-width="1.07626"
            />
            <path
              d="M58.3873 51.6359L59.0018 51.3708L59.3017 51.949L58.5807 52.2293L58.3873 51.6359Z"
              fill="#04D192"
            />
            <path
              d="M59.2988 49.6431L59.0018 51.3708M59.0018 51.3708L58.3873 51.6359L58.5807 52.2293M59.0018 51.3708L59.3017 51.949L58.5807 52.2293M58.5807 52.2293L58.1004 54.959"
              stroke="black"
              stroke-width="1.07626"
            />
            <path
              d="M78.8647 46.6428H93.8966"
              stroke="black"
              stroke-width="5.38129"
            />
          </svg>
        </svg>
      </div>
      <div className="flex ">
        <Input
          type="text"
          placeholder="Search"
          className="w-64 sm:w-96 px-2 sm:px-4 py-1.5 rounded-md text-sm border-black"
        />
      </div>
      <div className="pl-3 w-[20%] flex items-center space-x-8">
        <Button onClick={() => navigate("/forum")} variant={"link"}>
          Forum
        </Button>
        <Button
          onClick={() => navigate(isLoggedIn ? "/my-list" : "/auth")}
          style={{ color: isLoggedIn ? "inherit" : "#04D192" }}
          variant={"link"}
        >
          {isLoggedIn ? "My List" : "Sign Up"}
        </Button>
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-8 h-8 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => navigate("/novel/create")}>
                <Plus color="#04D192" className="mr-2" /> Create
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/novel/creations")}>
                <NotebookPen color="#04D192" className="mr-2" /> My Contents
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2" /> Account
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut color="#D10404" className="mr-2" /> Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            className="text-sm bg-[#04D192] hover:underline hover:bg-[#016B4B]"
            onClick={() => navigate("/auth")}
          >
            Log In
          </Button>
        )}
      </div>
    </div>
  );
}
