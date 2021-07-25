import "./App.css";
import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import CreatePosts from "./components/CreatePost/CreatePost";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Posts />
      <CreatePosts />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
