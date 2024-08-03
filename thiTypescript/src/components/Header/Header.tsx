import React, { useEffect, useState } from "react";
import iconsHome from "../../assets/home.png";
import MainTranslate from "../Translate/MainTranslate";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../community/styles.module.css";
import axios from "axios";


const Header = () => {
  const [stateAccount, setStateAccount] = useState(false);
  const [data, setData] = useState<any>([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  console.log(user._id);
  const [showNoti, setShowNoti] = useState(false);
  useEffect(() => {
    if (user._id) {
      setStateAccount(true);
    } else {
      setStateAccount(false);
    }
  }, [user]);
  const fetchAPI = async () => {
    try {
      const { data } = await axios.post<any[]>(
        "http://localhost:3090/api/get-noti-user/" + user._id
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchAPI();
  }, [user._id]);
  console.log("xx", data);

  return (
    <div className={styles["div-header"]}>
      <div style={{ backgroundColor: "#3367d6" }} className="line-main">
        <div className="box-content-default content-header d-flex justify-content-between">
          <div className="box-left">
            <div className="box-logo">
              <a className="exp-track" href="/">
                <img
                  height="64px"
                  width="116px"
                  src="https://mazii.net/assets/imgs/logo/mazii-logo.png"
                  alt="mazii"
                  title="Mazii"
                  className="mgt-10 logo-img"
                />
              </a>
            </div>
            {/* <div className="item-bar item-search v-align-middle">
              <a className="exp-track item-active" href="/">
                <img src={iconsHome} style={{ width: "20px" }} alt="" />
                <span className="title-search tag-common exp-track">
                  Tra cứu
                </span>
              </a>
            </div> */}
            {/* <div className="item-bar item-translate v-align-middle">
              <a className="exp-track" href="/vi-VN/translate/ja-JP/vi-VN">
                <div className="sprite_1 ic_sentence icon-24 margin-right-4 v-align-bottom exp-track" />
                <span className="title-translate tag-common exp-track">
                  Dịch
                </span>
              </a>
            </div> */}
            {/**/}
            <div className="item-bar item-community v-align-middle">
              <a className="exp-track" href="/vi-VN/qa">
                <div className="sprite_1 ic_community icon-24 margin-right-4 v-align-bottom exp-track" />
                <Link
                  to={"/user-saved"}
                  className="title-community tag-common exp-track"
                >
                  Danh sách đã lưu
                </Link>
              </a>
            </div>

            {/* Cộng đồng ----------------------------------------------------------------------------------- */}
            <div className="item-bar item-community v-align-middle">
              <a className="exp-track" href="/vi-VN/qa">
                <div className="sprite_1 ic_community icon-24 margin-right-4 v-align-bottom exp-track" />
                <Link
                  to={"/Community"}
                  className="title-community tag-common exp-track"
                >
                  Cộng Đồng
                </Link>
              </a>
            </div>

            {/* Cộng đồng ----------------------------------------------------------------------------------- */}

            {/* <div className="item-bar item-jlpt v-align-middle">
              <a href="//job.mazii.net" target="_blank" className="exp-track">
                <img
                  src="https://mazii.net/assets/imgs/icon/ic_job.png"
                  alt="icon"
                  width={24}
                  height={24}
                  title="job"
                  className="mgr-8 mgb-4 icon-18 exp-track"
                />
                <span className="tag-common pdt-2 exp-track">Việc làm</span>
              </a>
            </div>
            <div className="item-bar item-note v-align-middle">
              <a
                href="//mazii.net/vi-VN/blog/"
                target="_blank"
                className="exp-track"
              >
                <img
                  src="https://mazii.net/assets/imgs/icon/ic_explore.png"
                  alt="icon"
                  width={24}
                  height={24}
                  title="job"
                  className="mgr-8 mgb-4 icon-20 exp-track"
                />
                <span className="tag-common pdt-2 exp-track">Khám phá</span>
              </a>
            </div> */}
            {/**/}
            {/**/}
          </div>
          <div className="d-flex">

            <div className={styles["thongbao"]}>
              <img
                onClick={() => setShowNoti(!showNoti)}
                src="https://mazii.net/assets/imgs/icon/ic_notify.png"
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  right: "100px",
                  zIndex: "1000000000000000000000",
                }}
              >
                {showNoti && (
                  <div className={styles["notification"]}>
                    {data.map((items: any) => {
                      return (
                        <div>
                          <p
                            onClick={() =>
                              navigate("/community/" + items.postId)
                            }
                       
                            style={{
                           
                              color: items.watched ?  "black" : "#aaa",
                              padding: "5px",
                            }}
                          >
    
                            <img
    

                              height="20px"
                              width="20px"
                              src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                              alt="mazii"
                              title="Mazii"
                              className="mgt-10 logo-img" />  {items.dataNoti}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              {/**/}
              {/**/}
              <div className="d-flex align-items-center">
                {!stateAccount ? (
                  <>
                    <div className="item-bar item-login v-align-top">
                      <a href="/login"> Đăng nhập </a>
                    </div>
                    <div className="item-bar item-register v-align-top">
                      <a href="/register"> Đăng ký </a>
                    </div>
                  </>
                ) : (
                  <div>
                    <p className="font-bold text-white text-md cursor-pointer">
                      {user.name}
                    </p>
                    <button
                      onClick={() => {
                        localStorage.removeItem("user");
                        navigate("/login");
                      }}
                      className="font-bold text-white text-md cursor-pointer btn btn-dark"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/**/}
            {/**/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
