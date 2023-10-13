import { Log } from "@/components/Log";
import Graph from "@/components/Graph";
import TimeLogs from "@/components/TimeLogs";
export default function Dashboard() {
  return (
    <div className="space-y-10 p-5">
      <Log />
      <Graph />
      <TimeLogs/>
    </div>
  );
}
