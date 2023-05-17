import Card from "./components/Card/Card";

const cardProps = {
  name: "Sydney",
  phone: "000-000-000",
  email: "test@test.com",
  image: {url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", alt: "beautiful cat"},
  favoured: false
}

function App() {
  return (
    <div>
      <Card {...cardProps}/>
    </div>
  );
}

export default App;
