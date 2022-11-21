import Search from "./search";
import SearchOptions from "./searchOptions";

export default function Looking() {
  const lookingStyle = {
    position: "absolute",
    margin: "0 auto",
    bottom: "300px",
    textAlign: "center",
    left: "0",
    right: "0",
    zIndex: "99",
    width: "615px",
    height: "auto",
    background: "rgba(0,0,0,0.7)",
    color: "white",
  };

  const title = {
    color: "#fff",
    textShadow: "0 1px 3px #333",
    padding: "20px 0 10px",
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "1.5rem"
  };

  const getOption = (v) => {
    console.log(v)
  }

  return (
    <div class="card" style={lookingStyle}>
      <h1 style={title}>Looking for a Guide?</h1>
      <SearchOptions selectOption={getOption}></SearchOptions>
      <Search></Search>
    </div>
  );
}
