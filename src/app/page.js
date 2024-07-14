import Menubar from "./components/navbar";
import Topicmain from "./components/topicList";

export default function Home() {
  return (
    <main className="main">
      <Menubar />
      <Topicmain/>
    </main>
  );
}
