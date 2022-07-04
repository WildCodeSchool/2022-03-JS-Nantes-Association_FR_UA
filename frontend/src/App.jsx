import Header from "./frontuser/components/Header";
import Body from "./frontuser/components/Body";
import Footer from "./frontuser/components/Footer";
import "./assets/styles/App.css";
import Admin from "./frontadmin/components/Admin";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
      <Admin />
    </div>
  );
}
