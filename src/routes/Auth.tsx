import GoogleLogo from "@/assets/GoogleLogo";
import TypinkLogo from "@/assets/TypinkLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Auth() {
  return (
    <div className="h-screen m-auto w-[300px] flex flex-col items-center justify-around">
      <TypinkLogo />

      <div className="flex flex-col items-center w-full gap-5">
        <h1 className="font-bold text-5xl">Sign In</h1>
        <Input className="h-[60px]" placeholder="Email"/>
        <Input className="h-[60px]" placeholder="Password" />
        <Button className="w-full h-[60px] bg-[#04A775] hover:bg-[#016B4B]">
          Continue
        </Button>
        <div className="flex-row flex items-center">
          <p className="font-semibold">Don't have an account?</p>
          <Button variant={"link"} className="text-[#004DBB]">
            Sign Up
          </Button>
        </div>
        <hr className="border-t w-full" />
        <Button className="w-full h-[60px] bg-[#F1F5F9] hover:bg-[#CFCFCF] text-black outline-1 outline-[#A5A5A5] outline gap-2">
          <GoogleLogo />
          Continue With Google
        </Button>
      </div>

      <div>
        <Button variant={"link"} className="text-black font-bold">
          Privacy
        </Button>
        <Button variant={"link"} className="text-black font-bold">
          Terms
        </Button>
        <Button variant={"link"} className="text-black font-bold">
          Credit
        </Button>
      </div>
    </div>
  );
}
