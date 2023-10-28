import HankoAuth from "@/components/HankoAuth";
import { LuAlarmCheck } from "react-icons/lu";

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <LuAlarmCheck className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to MyTime
          </h1>
        </div>
        <HankoAuth />
      </div>
    </div>
  );
}
