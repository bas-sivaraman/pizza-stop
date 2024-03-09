import { Link } from "react-router-dom";

function Button({ children, to, type, onClick, disabled }) {
  const base =
    "inline-block rounded-full bg-amber-500 px-4 py-2 font-semibold uppercase text-stone-700 transition-colors hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-offset-1";

  const styles = {
    primary: base + " tracking-wide",
    secondary:
      "inline-block rounded-full border-2 border-stone-400 tracking-wide px-4 py-1.5 font-semibold uppercase text-stone-700 transition-colors hover:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-1",
    menuButton: base + " text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
