import React, { useState } from "react";
import Add from "../../admin/add";

const MainTranslate = () => {
  const [checkTranslate, setCheckTranslate] = useState(false);
  const [textTranslate, setTextTranslate] = useState("");
  const handelTranslateShow = () => {
    setCheckTranslate(true);
  };
  const handelTranslateHide = () => {
    setCheckTranslate(false);
  };
  const getTextTranslate = (text: string) => {
    setTextTranslate(text);
  };

  return (
    <div>
      <Add
        handelTranslateShow={handelTranslateShow}
        handelTranslateHide={handelTranslateHide}
        getTextTranslate={getTextTranslate}
      />
      {/* col-md-9 col-sm-12 col-xs-12 screen-search */}
      {checkTranslate && checkTranslate&&(
        <div
          style={{ margin: "0 auto", backgroundColor: "#f4f4f4" }}
          className="d-flex justify-content-center"
        >
          <div className="tab-container ">
            <div title="Từ vựng" className="">
              <div id="pos-mobile" className="">
                <div>
                  <div>
                    <h2 className="tt-main-tab1">
                      Kết quả tra cứu {textTranslate}
                    </h2>
                    <div>
                      <div>
                        <div className="google-translate-result word-detail-content bg-white">
                          <div className="box-btn-right-df">
                            <div className="btn-item item-audio">
                              <div className="sprite_1 icon-22 ic_volume inline" />
                            </div>
                            {/**/}
                            <div
                              data-toggle="modal"
                              className="btn-item add-note-me"
                            >
                              <div className="sprite_1 icon-22 ic_add inline" />
                            </div>
                          </div>
                          <div className="gogl-wrap">
                            <div className="gogl-sentences">
                              <div className="gogl-sentence">
                                <div className="cl-type type-1">
                                  <ruby>
                                    <span>リメンバーボード</span>
                                    <rt />
                                  </ruby>
                                  <span>Danh từ</span>
                                </div>
                              </div>
                              {/**/}
                              <div className="gogl-sentence">bảng ghi nhớ</div>
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                            {/**/}
                          </div>
                          <div className="gogl-word-search-helper">
                            Dịch tự động
                          </div>
                        </div>
                        {/**/}
                      </div>
                      <div>
                        <div className="bg-shadow3 box-check-grammar">
                          <div
                            style={{ backgroundColor: "#facaca" }}
                            className="result-check-grammar bg-red"
                          >
                            <p
                              style={{
                                fontWeight: "bold",
                                paddingLeft: "20px",
                                paddingTop: "10px",
                              }}
                              className="txt-gr "
                            >
                              Kiểm tra ngữ pháp:
                            </p>
                            <div>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  paddingLeft: "20px",
                                  paddingTop: "10px",
                                }}
                                className="txt-number"
                              >
                                Gợi ý sửa lỗi ngữ pháp, chính tả
                              </p>
                            </div>
                            <div
                              style={{
                                fontWeight: "bold",
                                paddingLeft: "20px",
                                paddingTop: "10px",
                              }}
                              className="txt-allow cl-red"
                            >
                              {" "}
                              5 / 5{" "}
                            </div>
                            <div
                              style={{
                                fontWeight: "bold",
                                paddingLeft: "20px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                              }}
                              className=""
                            >
                              <div className="btn btn-success">Kiểm tra</div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="modal-report-grammar"
                          role="dialog"
                          className="modal fade"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content box-content">
                              <button
                                type="button"
                                aria-label="close"
                                className="close"
                              >
                                <img
                                  src="assets/imgs/icon/ic_close.png"
                                  alt="icon"
                                  title="close"
                                  className="icon"
                                />
                              </button>
                              <div className="modal-body">
                                <p className="tt-main">Góp ý</p>
                                <div className="content-report">
                                  <p className="txt-report-gr" />
                                  <div className="txt-content-gr">
                                    {" "}
                                    リメンバーボード{" "}
                                  </div>
                                  {/**/}
                                  <textarea
                                    rows={3}
                                    placeholder="Nhập nội dung góp ý"
                                    className="ng-untouched ng-pristine ng-valid"
                                    data-gramm="false"
                                    wt-ignore-input="true"
                                    defaultValue={""}
                                  />
                                  <p className="txt-noti" />
                                </div>
                                <div className="btn-send"> Gửi </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    {/**/}
                    <div
                      style={{ backgroundColor: "white", marginTop: "10px" }}
                      className="widget-container tokenizer bg-content-df"
                    >
                      <div className="title-tokenizer">
                        {" "}
                      リメンバーボード có thể được phân tích như sau:{" "}
                      </div>
                      <table className="table">
                        <tbody>
                          <tr className="table-tokenizer-header">
                            <th>Từ</th>
                            <th>Từ loại:</th>
                            <th>Thể từ điển</th>
                          </tr>
                          <tr className="tokenizer-row">
                            <td>リメンバーボード</td>
                            <td>名詞, 固有名詞</td>
                            <td className="tokenizer-clickable">*</td>
                          </tr>
                          {/**/}
                        </tbody>
                      </table>
                    </div>
                    {/**/}
                    <div className="box-suggest word-detail-content bg-white">
                      <p>
                        Nếu bạn biết ý nghĩa chính xác hơn của từ này, hãy đóng
                        góp cho cộng đồng Mazii!
                      </p>
                      <button className="btn-suggest">Đóng góp</button>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                </div>
                {/**/}
                {/**/}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainTranslate;
