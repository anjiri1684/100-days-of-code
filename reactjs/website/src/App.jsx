import List from "./List/List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 52 },
    { id: 2, name: "banana", calories: 89 },
    { id: 3, name: "orange", calories: 47 },
    { id: 4, name: "grape", calories: 69 },
    { id: 5, name: "mango", calories: 60 },
    { id: 6, name: "pineapple", calories: 50 },
    { id: 7, name: "strawberry", calories: 32 },
    { id: 8, name: "watermelon", calories: 30 },
    { id: 9, name: "peach", calories: 39 },
    { id: 10, name: "kiwi", calories: 61 },
  ];

  const vegetables = [
    { id: 1, name: "carrot", calories: 41 },
    { id: 2, name: "broccoli", calories: 34 },
    { id: 3, name: "spinach", calories: 23 },
    { id: 4, name: "tomato", calories: 18 },
    { id: 5, name: "potato", calories: 77 },
    { id: 6, name: "cabbage", calories: 25 },
    { id: 7, name: "cauliflower", calories: 25 },
    { id: 8, name: "onion", calories: 40 },
    { id: 9, name: "cucumber", calories: 16 },
    { id: 10, name: "pepper", calories: 20 },
  ];

  return (
    <div>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} />}
    </div>
  );
}

export default App;
