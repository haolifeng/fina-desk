import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="menu">
        <ul>
          <li>菜单项 1</li>
          <li>菜单项 2</li>
          <li>菜单项 3</li>
        </ul>
      </div>
      <div className="content">
        <h1>内容区域</h1>
        <p>这里是页面的主要内容。</p>
      </div>
    </div>
  );
}

export default App;