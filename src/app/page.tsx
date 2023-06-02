import { Sidebar } from "@/components/Sidebar";
import { MainBody } from "@/components/MainBody";

export default function Home() {
  return (
      <div className="wrapper">
        <Sidebar />
        <MainBody />
      </div>
  )
}
