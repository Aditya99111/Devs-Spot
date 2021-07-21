import './App.css';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import Posts from './components/Posts';
import CreatePosts from "./components/CratePost"


function App() {
  return (
    <div>
    <Header/>
    <Posts/>
    <Profile/>
    <CreatePosts/>
    <Chat/>
    <Footer/>
    </div>
  );
}

export default App;
