import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/Login/login.jsx'; // Login 컴포넌트를 import 해야 합니다.
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostStep1 from "./components/PostStep1/step1";
import Socialsign from "./components/SocialSign/Socialsign.jsx";
import Sign from "./components/Sign/Sign.jsx";
import Main from "./components/Main/Main";
import FriendStory from "./components/FriendStory/FriendStory.jsx";
import MyStory from './components/MyStory/MyStory.jsx';
import FriendStory from "./components/FriendStory/FriendStory";
import ViewPost from './pages/ViewPost/ViewPost.jsx';
import PostStep2 from "./pages/PostStep2/PostStep2.jsx"
import PostStep3 from "./pages/PostStep3/PostStep3.jsx"
import MainSeoul from './components/Main/MainSeoul/MainSeoul.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Login /> */}
        {/* <Socialsign /> */}
        {/* <Sign /> */}
        {/*<PostStep1 />*/}
        {/*<App />*/}
        {/* {<Main />} */}
        {/* <FriendStory/> */}
        {/* <MyStory /> */}
        {/* <Main /> */}
        {/*<FriendStory/>*/}
        {<ViewPost/>}
        {/* {<PostStep2/>} */}
        {/* {<PostStep3/>} */}
        {/* <Main /> */}
        {/* <FriendStory/> */}
        {/* <MyStory /> */}
        {/*<MainSeoul />*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
