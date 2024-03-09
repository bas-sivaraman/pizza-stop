import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li
      className={`gray flex gap-4 py-2 ${soldOut ? "opacity-70 grayscale" : ""}`}
    >
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex grow flex-col">
        <p className="text-xl font-semibold">{name}</p>
        <p className="capitalize italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto">
          {!soldOut ? (
            <div className="flex items-end justify-between">
              <p>{formatCurrency(unitPrice)}</p>
              {isInCart ? (
                <DeleteItem pizzaId={id} />
              ) : (
                <Button onClick={handleAddToCart} type="menuButton">
                  Add to cart
                </Button>
              )}
            </div>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
