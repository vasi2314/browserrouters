import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function Abstract() {
  let content = [
    {
      url: "http://e.png",
      head: "",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="main-conte">
        {content.map((val) => (
          <Content item={val} />
        ))}
      </div>
    </>
  );
}
