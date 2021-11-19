import './App.css';
import './style.css';
import myImage from './im1.jpg';
import myImage2 from './im2.jpg';
import MyVideo from './MyVideo.mp4';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red" >Wael Ltifi</h1>
        <br/>
        <img src={myImage} className="image"  alt="imgsrc" />
        <br/>
        <img  src={myImage2} className="imagepub"  alt="imagePub" />
      </div>
      <video  style={{width:'320px' , height:'240px' }} src={MyVideo} controls  />
    </div>
  );
}

export default App;