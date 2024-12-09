import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './boilerPlate/App.jsx';
// import './boilerPlate/index.css';
import PackingList from './conditional rendering/components/PackList.jsx';
import DiceCollection from './conditional rendering/components/DiceCollection.jsx';
import Weather from './Exercises/weather/Weather.jsx';
import Menu from './Exercises/recipe/Menu.jsx';
import Counter from './state/Components/counter.jsx';
import DiceGame from './Exercises/diceRoller/DiceGame.jsx';
// import Box from './state updating functions/BoxGrid.jsx';
import BoxGrid from './state updating functions/BoxGrid.jsx';
import Objects from './objects and state/components/Objects.jsx';
import Accordian from './components/accordian/index.jsx';
import RandomColor from './components/random-color/index.jsx';
import StarRating from './components/star-rating/index.jsx';
import ImageSlider from './components/image-slider/index.jsx';
import LoadMoreData from './components/load-more-data/index.jsx';
import menus from "./components/tree-view/data.js";
import TreeView from './components/tree-view/index.jsx';
import QRCodeGenerator from './components/qr-code-generator/index.jsx';
import LightDarkMode from './components/light-dark-mode/index.jsx';
import ScrollIndicator from './components/custom-scroll-indicator/index.jsx';
import PlaceTabs from './components/custom-tabs/index.jsx';
import Modal from './components/custom-modal-popup/index.jsx';
import GithubProfileFinder from './components/github-profile-finder/index.jsx';
import SearchAutocomplete from './components/search-autocomplete-with-api/index.jsx';
import TicTacToe from './components/tic-tac-toe/index.jsx';
import FeatureFlagGlobalState from './components/feature-flag/context/index.jsx';
import FeatureFlags from './components/feature-flag/index.jsx';
import UseFetchHookTest from './components/use-fetch/test.jsx';
import UseOnClickOutsideTest from './components/use-outside-click/test.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
     */}
    {/* <PackingList /> */}
    {/* <DiceCollection /> */}
    {/* <Weather/> */}
    {/* <Menu  /> */}
    {/* <Counter/> */}
    {/* <DiceGame /> */}
    {/* <Box /> */}
    {/* <BoxGrid numberOfBoxes={5} /> */}
    {/* <Objects /> */}
    {/* <Accordian /> */}
    {/* <RandomColor /> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={'https://dummyjson.com/products/category/smartphones'} 
    limit={'10'}/> */}
    {/* <LoadMoreData /> */}
    {/* <TreeView menus={menus} /> */}
    {/* <QRCodeGenerator/> */}
    {/* < LightDarkMode/> */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
    {/* <PlaceTabs /> */}
    {/* <Modal /> */}
    {/* <GithubProfileFinder /> */}
    {/* <SearchAutocomplete /> */}
    {/* <TicTacToe /> */}
    {/* <FeatureFlagGlobalState>
      <FeatureFlags />
    </FeatureFlagGlobalState> */}
    {/* use fetch custom hook */}
    {/* <UseFetchHookTest /> */}
    {/* use OnClick outside hook test */}
    {/* <UseOnClickOutsideTest /> */}
    {/* use responsive hook test */}

  </React.StrictMode>
);
