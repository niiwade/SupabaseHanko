import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuAlarmCheck } from "react-icons/lu";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-6">
     <Link href={"/"}>
     <div className="flex items-center">
        <LuAlarmCheck className="text-lg" />
        <h3>My Time</h3>
      </div>
     </Link>

     <Link href="/login">
     
     <Button>Login</Button>
     </Link>


    </div>
  );
}
