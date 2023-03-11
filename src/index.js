import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import Demo from './components/Demo';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './dataBinding/DataBinding';
import HandleEvent from './handleEvent/HandleEvent';
import HandleEventWithParams from './handleEvent/HandleEventWithParams';
import DemoLogin from './state/DemoLogin';
import DemoState from './state/DemoState';
import TangGiamFontSize from './state/TangGiamFontSize/TangGiamFontSize';
import DemoProps from './props/DemoProps/DemoProps';
import BaiTapShoeShop from './props/BaiTapShoeShop/BaiTapShoeShop';
import BaiTapXemChiTiet from './props/BaiTapXemChiTiet/BaiTapXemChiTiet';

// Import CSS - Affect to the whole application
import "./index.scss";




const root = ReactDOM.createRoot(document.getElementById('root'));

// Phương thức đưa dữ liệu lên trên <div id="root"></div>
// JSX 
root.render(
    // <div className='container'>
    //     <Demo />
    //     <div className='w-25'>
    //         <Card />
    //     </div>
    // </div>
    <>
        {/* <HomeLayout /> */}
        {/* <DataBinding /> */}
        {/* <HandleEvent />
        <hr />
        <HandleEventWithParams /> */}
        {/* <DemoLogin /> */}
        {/* <DemoState /> */}
        {/* <TangGiamFontSize /> */}
        {/* <DemoProps /> */}
        {/* <BaiTapShoeShop /> */}
        <BaiTapXemChiTiet />
    </>
); 





