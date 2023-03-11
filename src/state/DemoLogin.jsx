import React, { Component } from "react";
import style from "./DemoLogin.module.css";

export default class DemoLogin extends Component {
  // this.state là thuộc tính có sẵn của react class component, chứa các giá trị thay đổi trên giao diện
  state = {
    login: false, //false = chưa đăng nhập
  };

  userName = "Kim-Ngan";

  renderLogin = () => {
    if (this.state.login) {
      return (
        <>
          <span className="nav-link text-white">Hello ! {this.userName}</span>
          <a
            className="nav-link active text-white"
            href="#"
            aria-current="page"
            onClick={() => {
              this.handleLogout();
            }}
          >
            Logout
          </a>
        </>
      );
    }
    return (
      <>
        <a
          className="nav-link active text-white"
          href="#"
          aria-current="page"
          onClick={() => {
            // Call function
            this.handleLogin();
          }}
        >
          Login
        </a>
      </>
    );
  };

  handleLogin = async () => {
    /**
     * this.setState() - phương thức có sẵn của react class component
     *  - thay đổi giá trị this.state
     *  - xử lý render lại giao diện với giá trị state mới
     *  - Hàm setState() là một hàm bất đồng bộ
     */
    // await this.setState({
    //     login: true
    // })

    this.setState(
      {
        login: true,
      },
      () => {
        // Tham số callback function của hàm setState sẽ tự động kích hoạt sau khi state thay đổi và giao diện render lại
        console.log(this.state);
      }
    );

    // console.log(this.state);
  };

  handleLogout = async () => {
    await this.setState({
      login: false,
    });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <nav className="nav justify-content-end bg-dark text-white">
          {this.renderLogin()}
          {/* {this.login ? <span className='nav-link'>Hello ! {this.userName}</span> : <a className="nav-link active" href="#" aria-current="page">Login</a>} */}
        </nav>

        <p className={`${style["bg-orange"]} p-5 text-dark`}>Hello abc</p>
        <span style={{
            marginTop: "15px",
            backgroundColor: "black",
            fontSize: 15,
            color: "white",
            padding: 15
        }}>
            Amet clita magna sed gubergren stet sed, magna ea sit stet stet rebum accusam aliquyam eirmod, rebum sea stet eirmod.
        </span>
      </>
    );
  }
}


