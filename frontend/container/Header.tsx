import TinkerHub from "@/components/Logo/TinkerHub";
import SectionWrap from "@/wrapper/SectionWrap";

function Header() {
  return (
    <div className="h-full w-full items-center  flex flex-row">
      <div className="ml-28 text-3xl justify-start flex-1">
        <h1 className="text-5xl  font-Montserrat">TinkerHub CEV</h1>
      </div>
      <div className="justify-end flex-1">
        <TinkerHub />
      </div>
    </div>
  );
}

export default SectionWrap(
  Header,
  "header",
  "bg-green-100"
);
