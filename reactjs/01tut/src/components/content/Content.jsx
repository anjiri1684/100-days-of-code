import { useState } from "react";
import classes from "./content.module.css";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Milk" },
    { id: 2, checked: false, item: "Eggs" },
    { id: 3, checked: true, item: "Bread" },
    { id: 4, checked: false, item: "Butter" },
    { id: 5, checked: true, item: "Cheese" },
    { id: 6, checked: false, item: "Tomatoes" },
    { id: 7, checked: true, item: "Apples" },
  ]);

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  }

  return (
    <div className={classes.content}>
      <main>
        {items.length ? (
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id} className={classes.item}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                  />
                  <label
                    style={
                      item.checked ? { textDecoration: "line-through" } : null
                    }
                    onDoubleClick={() => handleCheck(item.id)}
                  >
                    {item.item}
                  </label>

                  <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No items Found</p>
        )}
      </main>
    </div>
  );
};

export default Content;
