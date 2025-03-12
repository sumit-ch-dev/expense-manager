import type { MetaFunction } from "@remix-run/node";
import Dashboard from "~/components/Dashboard";
// import Table from "./table";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
