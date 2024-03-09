import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="m-1 w-56 rounded-full bg-amber-100 p-1 px-4 py-2  focus:outline-none focus:ring focus:ring-amber-500 focus:ring-offset-1 md:w-72"
      />
    </form>
  );
}

export default SearchOrder;
