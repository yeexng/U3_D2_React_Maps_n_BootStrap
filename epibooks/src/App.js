import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
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
