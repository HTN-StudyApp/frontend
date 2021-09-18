import Head from "next/head";
import Image from "next/image";

import Header from "../components/header";
import Footer from "../components/footer";

import { useState, useEffect } from "react";
import EditableQuestion from "../components/editableQuestion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Create() {
  let [setName, setSetName] = useState("Untitled Set");
  let [questions, setQuestions] = useState(1);

  return (
    <div className={"bg-gray-100"}>
      <Head>
        <title>Study App</title>
        <meta name="description" content="HTN Study App" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main
        style={{ marginTop: "60px", minHeight: "100vh" }}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          value={setName}
          onChange={(e) => setSetName(e.currentTarget.value)}
          className="bg-transparent outline-none border-0 focus:ring-0 focus:outline-none text-5xl w-3/4"
        ></input>

        {new Array(questions).fill(0).map((x, i) => (
          <EditableQuestion key={`${i} ${questions}`} index={i} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
