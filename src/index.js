import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Demo from "./components/Demo";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./dataBinding/DataBinding";
import HandleEvent from "./handleEvent/HandleEvent";
import HandleEventWithParams from "./handleEvent/HandleEventWithParams";
import DemoLogin from "./state/DemoLogin";
import DemoState from "./state/DemoState";
import TangGiamFontSize from "./state/TangGiamFontSize/TangGiamFontSize";
import DemoProps from "./props/DemoProps/DemoProps";
import BaiTapShoeShop from "./props/BaiTapShoeShop/BaiTapShoeShop";
import BaiTapXemChiTiet from "./props/BaiTapXemChiTiet/BaiTapXemChiTiet";

// Import CSS - Affect to the whole application
import "./index.scss";

// React Router Structure
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import HomeTemplate from "./Templates/HomeTemplate";
import Page404 from "./Pages/Page404/Page404";
import BaiTapGioHang from "./Pages/BaiTapGioHang/BaiTapGioHang";
import ReactForm from "./Pages/Form/ReactForm";
import ReactLifeCycle from "./Pages/ReactLifeCycle/ReactLifeCycle";
import DemoRedux from "./Pages/DemoRedux/DemoRedux";

// Cấu hình Redux Store
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import BaiTapGame from "./Pages/DemoRedux/BaiTapGame/BaiTapGame";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
    {/* <BaiTapXemChiTiet /> */}

    {/* React Router Dom */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>

            <Route path="home" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="baitapgiohang" element={<BaiTapGioHang />}></Route>
            <Route path="form" element={<ReactForm />}></Route>
            <Route path="reactlifecycle" element={<ReactLifeCycle />}></Route>
            <Route path="redux" element={<DemoRedux />}></Route>
            <Route path="gamexucxac" element={<BaiTapGame />}></Route>

            {/* <Route path="*" element={<Page404 />}></Route> */}
            <Route path="*" element={<Navigate to="" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);

