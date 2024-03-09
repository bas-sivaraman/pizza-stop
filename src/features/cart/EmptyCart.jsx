import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex h-full flex-col">
      <Link
        to="/menu"
        className="text-sm text-amber-600 hover:text-amber-500 md:text-base"
      >
        &larr; Back to menu
      </Link>

      <div className="flex grow items-center justify-center">
        <p className="text-center text-2xl opacity-60">
          Your cart is still empty.
          <br />
          Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
