import Link from "next/link";
import Image from "next/image";
import List from "./list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function MySets({}) {
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
        <button style={{ paddingTop: "6px" }}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className={
              "ml-4 w-20 h-20 text-gray-200 hover:text-purple-800 duration-300"
            }
          />
        </button>
      </div>
    </div>
  );
}
