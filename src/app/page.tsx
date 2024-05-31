import dynamic from "next/dynamic";
const MainPage = dynamic(() => import("@/pages/Main"), { ssr: false });

export default function Home() {
  return <MainPage />;
}
