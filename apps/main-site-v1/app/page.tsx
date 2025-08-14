import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Portfolio/>
    </main>
  );
}
