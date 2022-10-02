import logo from './logo.svg';
import './App.css';
import LikeButton from './LikeButton';
import Lifecycle from './Lifecycle';

function App() {
  return (
    <div className="App">
      {/* <LikeButton wordings={{likedText: "f:已经点了", unlikeText: "f:点赞"}}/> */}
      <Lifecycle />
    </div>
  );
}

export default App;
