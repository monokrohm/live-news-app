import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButtom from "./DarkModeButtom";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-double decoration-3 decoration-[#F18900]">
              MONO
            </span>{" "}
            Times
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButtom />
          <button className="hidden px-4 py-2 text-[#F18000] bg-slate-900 rounded-full md:inline lg:px-8 lg:py-4 dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
