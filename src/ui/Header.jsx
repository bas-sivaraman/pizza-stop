import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/userName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-amber-500 px-4 py-3 uppercase ">
      <Link
        to="/"
        className="text-base font-semibold tracking-widest md:text-xl"
      >
        Pizza Stop
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;