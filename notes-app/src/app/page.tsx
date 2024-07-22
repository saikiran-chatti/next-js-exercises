import Image from "next/image";
import Notes from "./components/notes";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-violet-300 w-screen h-screen">
      <Notes />
    </div>
  );
}
