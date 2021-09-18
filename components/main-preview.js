import Link from "next/link";
import List from "./list";
import FeaturedSets from "./featuredSets";
import MySets from "./mySets";
import Leaderboard from "./leaderboard";

export default function Preview({}) {
  return (
    <div style={{ width: "87.5vw", height: "85vh" }} className="bg-purple-500">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "30px",
          marginTop: "10px",
        }}
      >
        <div>
          <h1
            style={{ position: "relative", color: "white", fontSize: "2.7rem" }}
          >
            Play a Set!
          </h1>
          <form>
            <input
              type="text"
              placeholder="Enter a code..."
              style={{
                padding: "5px",
                marginLeft: "10px",
              }}
              className={"rounded-lg border-2 border-indigo-900"}
            ></input>
          </form>
        </div>

        <div style={{ width: "40vw" }}>
          <div>
            <h1
              style={{
                position: "relative",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Public Sets
            </h1>
            <div
              style={{ display: "flex", overflowX: "scroll", height: "120px" }}
            >
              <List />
              <List />
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "0",
          width: "20vw",
          height: "85vh",
        }}
        className="bg-purple-500"
      >
        <div
          style={{
            position: "relative",
            left: "30px",
            top: "30px",
            width: "16vw",
            padding: "5px",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
          className="bg-purple-700"
        >
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            Global Leaderboard
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxHeight: "65vh",
              overflowY: "scroll",
            }}
          >
            <Leaderboard />
          </div>
        </div>
      </div>

      <div>
        <h1
          style={{
            color: "white",
            fontSize: "1.5rem",
            marginTop: "40px",
            marginLeft: "120px",
          }}
        >
          My Sets
        </h1>
        <div
          style={{
            marginTop: "5px",
            marginLeft: "120px",
            maxWidth: "70vw",
            overflowX: "scroll",
            height: "120px",
          }}
        >
          <MySets />
        </div>
      </div>

      <div>
        <h1
          style={{
            color: "white",
            fontSize: "1.5rem",
            marginTop: "40px",
            marginLeft: "120px",
          }}
        >
          Featured Sets
        </h1>
        <div
          style={{
            marginTop: "5px",
            marginLeft: "120px",
            maxWidth: "70vw",
            overflowX: "scroll",
            height: "120px",
          }}
        >
          <FeaturedSets />
        </div>
      </div>
    </div>
  );
}

// backdrop-filter: blur(16px) saturate(180%);
//     -webkit-backdrop-filter: blur(16px) saturate(180%);
//     background-color: rgba(17, 25, 40, 0.75);
//     border-radius: 12px;
//     border: 1px solid rgba(255, 255, 255, 0.125);
