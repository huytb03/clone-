import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import styles from "../community/styles.module.css";
import ic_top_1 from "../assets/ic_top_1.webp";
import ic_top_2 from "../assets/ic_top_2.webp";
import ic_homepage from "../assets/home.png";
import TextEditor from "./TextEditor";

const DetailsComunity = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserId(userData);
    }
  }, []);

  const handleTymClick = async (postId: string, postUserId: string) => {
    try {
      await axios.post(`items._id, items.user._id${userId}`, {
        name,
      });
    } catch (error) {
      console.error("Error updating tym:", error);
    }
  };

  const [data, setData] = useState<any>();
  const [idComment, setIdCOmment] = useState("");
  const [comment, setcomment] = useState(false);
  const navigate = useNavigate();
  const commentconsst = (id: any) => {
    navigate({
      search: createSearchParams({
        idPost: id,
      }).toString(),
    });
    if (id === idComment) {
      setIdCOmment("");
    } else {
      setIdCOmment(id);
    }
  };
  const fetchAPI = async () => {
    try {
      const { data } = await axios.post<any[]>(
        "http://localhost:3090/api/get-post/" + id
      );
      setData(data);
      console.log("Data from API:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, [id]);

  const isNewMember = (createdAt: string) => {
    const createdDate = new Date(createdAt);
    const currentTime = new Date();
    const difference = currentTime.getTime() - createdDate.getTime();
    const daysDifference = difference / (1000 * 3600 * 24);
    return daysDifference <= 7;
  };
  const getMinutesDifference = (updatedAt: string) => {
    const time1 = new Date();
    const time2 = new Date(updatedAt);
    const differenceInMillis = Math.abs(time1.getTime() - time2.getTime());
    const minutesDifference = differenceInMillis / 60000;
    if (minutesDifference < 1) {
      return "Mới đăng";
    }
    return formatTime(minutesDifference);
  };
  const formatTime = (minutes: any): string => {
    if (minutes < 1) {
      return "Mới đăng";
    }
    if (minutes < 60) {
      return `${Math.floor(minutes)} phút trước`;
    }
    if (minutes < 1440) {
      const hours = Math.floor(minutes / 60);
      return `${hours} giờ trước`;
    }
    if (minutes < 43800) {
      const days = Math.floor(minutes / 1440);
      return `${days} ngày trước`;
    }
    if (minutes < 525600) {
      const months = Math.floor(minutes / 43800);
      return `${months} tháng trước`;
    }
    const years = Math.floor(minutes / 525600);
    return `${years} năm trước`;
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {/* ở dưới này là banner left bên phải */}
        <div className={styles["banner-left"]}>
          <div className={styles["box-list-post"]}>
            <input
              className={styles.input}
              type="search"
              name="search"
              placeholder="Tìm Kiếm..."
            />
            <div className={styles.box}>
              <div className={styles["box-title"]}>
                <span>Các Bài Viết Nổi Bật</span>
              </div>
              <div className={styles["box-post"]}>
                <div className={styles["box-post-row"]}>
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_love_red.png"
                    alt=""
                  />
                  <p>Được Yêu Thích Nhất</p>
                </div>
                <div className={styles["box-post-row"]}>
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_chat.png"
                    alt=""
                  />
                  <p>Được Quan Tâm Nhiều Nhất</p>
                </div>
                <div className={styles["box-post-row"]}>
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                    alt=""
                  />
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    Được biên tập viên lựa chọn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["box-category"]}>
            <div className={styles["box-category-row"]}>
              <img src={ic_homepage} alt="" />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Trang chủ
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Dịch
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Học Tiếng Nhật
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Du Học Nhật Bản
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Việc Làm Tiếng Nhật
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Văn Hoá Nhật Bản
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Du Lịch Nhật Bản
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Góc Chia Sẻ
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                CNTT
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Cơ Khí
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Xây dựng
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Y Tế
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Tìm bạn học chung
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Tìm gia sư tiếng nhật
              </a>
            </div>

            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Cuộc sống hàng ngày ở Nhật Bản
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Ẩm thực Nhật Bản
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Hỏi đáp Mazii Premium
              </a>
            </div>
            <div className={styles["box-category-row"]}>
              <img
                src="https://mazii.net/assets/imgs/icon/ic_admin.png"
                alt=""
              />
              <a
                href="https://mazii.net/vi-VN/qa"
                className={styles["custom-link"]}
              >
                Khác
              </a>
            </div>
          </div>
        </div>
        {/* ở trên này là banner left bên phải */}

        {/* ở đây dưới là banner  ở giữa  */}
        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            className={styles["banner-img"]}
            src="https://template.eupgroup.net/uploads/1686120271128-vi_todai.png"
            alt=""
          />

          <div className={styles["latest-news"]}>
            <h3 onClick={() => navigate("/community/" + data._id)}>
              {data?.title}
            </h3>
            {/* community */}
            <div className={styles["latest-news-user"]}>
              <img
                src="https://data.mazii.net/user_data/3472771678421491.jpg"
                alt=""
              />
              <div className={styles["latest-news-user-member"]}>
                <span className={styles["name-user"]}>{data?.user?.name}</span>
                <div className="post-information-total">
                  <span className={styles["post-information"]}>
                    {data?.user?.createdAt
                      ? isNewMember(data.user.createdAt)
                        ? "Thành viên mới"
                        : "Thành viên cũ"
                      : "Không có thông tin"}
                  </span>
                  <span className={styles["post-information"]}>
                    {getMinutesDifference(data?.updatedAt)}
                  </span>

                  <span className={styles["post-information"]}>Khác</span>
                </div>
              </div>
            </div>
            <p className={styles["status-real"]}>{data?.content}</p>
            <div className="status-post">
              <div className={styles["like-comment"]}>
                <div
                  className={styles["like-comment-row"]}
                  onClick={() => handleTymClick(data?._id, data?.user.id)}
                >
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_love.png"
                    alt=""
                  />
                  <span>Yêu thích</span>
                  {data?.tym.length}
                </div>

                <div
                  onClick={() => commentconsst(data?._id)}
                  className={styles["like-comment-row"]}
                >
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_cmt.png"
                    alt=""
                  />
                  <span>Bình luận</span>
                  {data?.comments.length}
                </div>

                <div className={styles["like-comment-row"]}>
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_follow.png"
                    alt=""
                  />
                  <span>Theo dõi</span>
                </div>
                <div className={styles["like-comment-row"]}>
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_report.png"
                    alt=""
                  />
                  <span>Báo cáo</span>
                </div>
                <div className={styles["like-comment-row"]}>
                  <img
                    src="https://mazii.net/assets/imgs/icon/ic_share.png"
                    alt=""
                  />
                  <span>Chia sẻ</span>
                </div>
              </div>
            </div>

            {idComment === data?._id && (
              <div className={styles["clans-này-to-0nef"]}>
                {/* từ thằng này */}

                <div className={styles["container-comment"]}>
                  <img
                    className={styles["img-comment"]}
                    src="https://data.mazii.net/user_data/3472771678421491.jpg"
                    alt=""
                  />

                  <div className={styles["bbutton-input"]}>
                    {/* <input className={styles['comment-inp']} type="text" name="" id="" /> */}
                    <TextEditor />
                  </div>
                </div>
                <div className="mb-5">
                  {data?.comments.map((comment: any) => (
                    <div key={comment.id}>
                      <div className={styles["latest-news-user"]}>
                        <img
                          src="https://data.mazii.net/user_data/3472771678421491.jpg"
                          alt=""
                        />
                        <div className={styles["latest-news-user-member"]}>
                          <span
                            style={{ paddingRight: "20px" }}
                            className={styles["name-user"]}
                          >
                            {comment.nameUser}
                          </span>
                          <span className={styles["post-information"]}>
                            Khác
                          </span>
                          <div className="post-information-total">
                            <div className={styles["comment"]}>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: comment.comments,
                                }}
                              />
                            </div>

                            <div className={styles["tym-comment-fake"]}>
                              <div className={styles["like-comment-row"]}>
                                <img
                                  src="https://mazii.net/assets/imgs/icon/ic_love.png"
                                  alt=""
                                />
                                {comment.tym && comment.tym.length}
                              </div>

                              <div className={styles["like-comment-row"]}>
                                <img
                                  src="https://mazii.net/assets/imgs/icon/ic_report.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ở đây trên là banner  ở giữa  */}

        {/* ở dưới này là banner right bên phải */}
        <div className={styles["banner-right"]}>
          <div className={styles["box-list-post"]}>
            <div className={styles["box-2"]}>
              <div className={styles["box-title-2"]}>
                <a
                  href="https://mazii.net/vi-VN/qa"
                  className={styles["custom-link"]}
                >
                  Câu hỏi được quan tâm
                </a>
              </div>
              <div className={styles["box-post-2"]}>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    1. Buồn Ngủ
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    2. dẹp
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    3. dịch giúp mình nhé。金型部品
                  </a>
                </div>

                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    4. router wifi
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    4. Tình hình
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    5. Job tuyển từ Việt Nam cho kỹ sư kém tiếng nhưng có kin...
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    6. Dành cho các bạn IT muốn làm Remote.
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    7. Ai biết việc làm ở mito ai biết chỉ cho mình với mọi n...
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    8. Thi tokute bảo dưỡng oto có khó ko các đại ka?
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    9. Top các cucu liều nhất mazii{" "}
                  </a>
                </div>
                <div className={styles["box-post-row-2"]}>
                  <a
                    href="https://mazii.net/vi-VN/qa"
                    className={styles["custom-link"]}
                  >
                    10. Thi tokute bảo dưỡng oto có khó ko các đại ka?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.charts}>
            <div className={styles.question}>
              <a href="https://mazii.net/vi-VN/qa" className="custom-link">
                Câu hỏi được quan tâm
              </a>
            </div>
            <div className={styles["charts-time"]}>
              <span>Tuần</span>
              <span>Tháng</span>
              <span>Năm</span>
            </div>
            <div className={styles["charts-user"]}>
              <div className={styles["charts-user-ratings"]}>
                <div className={styles.ratings}>
                  <img
                    className={styles["ratings-img-user"]}
                    src="https://data.mazii.net/user_data/353511610430520.jpg"
                    alt=""
                  />
                  <img className={styles["img-ic-top"]} src={ic_top_2} alt="" />
                  <span>虹294</span>
                </div>
                <div className={styles.ratings}>
                  <img
                    className={styles["ratings-img-user-one"]}
                    src="https://data.mazii.net/user_data/2471641713835577.jpg"
                    alt=""
                  />
                  <img className={styles["img-ic-one"]} src={ic_top_1} alt="" />
                  <span>虹294</span>
                </div>
                <div className={styles.ratings}>
                  <img
                    className={styles["ratings-img-user"]}
                    src="https://data.mazii.net/user_data/7403551714117590.jpg"
                    alt=""
                  />
                  <img className={styles["img-ic-top"]} src={ic_top_2} alt="" />
                  <span>虹294</span>
                </div>
              </div>
              <div className={styles["charts-user-vertical"]}>
                <div className={styles["vertical-user"]}>
                  <img
                    src="https://data.mazii.net/user_data/6603861675156573.jpg"
                    alt=""
                  />
                  <div className={styles["info-information"]}>
                    <span>BCT Switch</span>
                    <p>100 điểm</p>
                  </div>
                </div>
                <div className={styles["vertical-user"]}>
                  <img
                    src="https://data.mazii.net/user_data/51271674000330.jpg"
                    alt=""
                  />
                  <div className={styles["info-information"]}>
                    <span>Hạ Long Rất đẹp nhé </span>
                    <p>100 điểm</p>
                  </div>
                </div>
                <div className={styles["vertical-user"]}>
                  <img
                    src="https://data.mazii.net/user_data/2029931714920305.jpg"
                    alt=""
                  />
                  <div className={styles["info-information"]}>
                    <span>Sầm Sơn Còn đẹp hơn </span>
                    <p>100 điểm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ở dưới này là banner right bên phải */}
      </div>
      <Footer />
    </div>
  );
};

export default DetailsComunity;
