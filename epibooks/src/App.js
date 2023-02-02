import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import FantasyBooks from "./data/fantasy.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList listOfTheBooksAsProp={FantasyBooks} />
      <MyFooter />
    </div>
  );
}

export default App;
