import { NavigationBar } from "@/components/navigation-bar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        Start prompting.
      </div>
    </main>
  );
}