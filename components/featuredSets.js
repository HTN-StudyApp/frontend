import Link from "next/link";
import List from "./list";

export default function FeaturedSets({}) {
  return (
    <div>
      <div style={{ display: "flex", height: "50px" }}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
}
