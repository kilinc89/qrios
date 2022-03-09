import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [overlayItem, setOverlayItem] = useState(null);
  const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);

  useEffect(() => {


    setList(creteRandomImageArray())

  }, []);

  const creteRandomImageArray = () => {
    const urlList = [];

    //ramdom image between 100 and 500
    const maxValue = Math.floor(Math.random() * 400) + 100;

    // create a list of random images potrait or overlay
    for (let i = 0; i < maxValue; i++) {
      const isPortrait = Math.floor(Math.random() * 2) === 0 ? "150X200" : "200X150";
      const url = "https://via.placeholder.com/" + isPortrait
      urlList.push({ url, title: Math.floor(Math.random() * 2) === 0 ? "Portrait" : "Landscape" });

    }
    return urlList;
  }

  const openOverlay = (item) => {
    setOverlayItem(item)
    setIsVisibleOverlay(true);
  }

  const closeOverlay = () => {
    if (isVisibleOverlay) {
      setOverlayItem(null)
      setIsVisibleOverlay(false);
    }
  }

  return (
    <div>

      <div className="grid-container" style={isVisibleOverlay ? { opacity: 0.3 } : {}} onClick={() => closeOverlay()} >
        {
          list.map((item, index) => {
            return (
              <div key={index} className="img-container" onClick={() => openOverlay(item)}>
                <img src={item.url} alt="test" className="img-item"></img>
                <div className="title">{item.title}</div>
              </div>)
          })
        }
      </div>

      {
        isVisibleOverlay &&
        <div className="img-container-overlay" onClick={() => closeOverlay()} >
          <img src={overlayItem.url} alt="test" className="img-item-overlay"></img>
        </div>
      }





    </div>
  );
}

export default App;
