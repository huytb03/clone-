import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import { getIdUser } from "../api/auth";

const UserSaved = () => {
  const [dataUser, setDataUser] = useState([])
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const handelGetDataUser = async () => {
      const { data } = await getIdUser(user._id)
      console.log(data, 'datadata')
      setDataUser(data.note)
    }
    handelGetDataUser()
  },[user._id])
  return (
    <div>
      <Header />
      {dataUser.map((items: any) => {
        return  <div
          style={{ margin: "0 auto", width:'800px',marginTop:'20px' , backgroundColor: "#f4f4f4" }}
      >
        <div className="google-translate-result word-detail-content bg-white">
          <div className="box-btn-right-df">
            <div className="btn-item item-audio">
              <div className="sprite_1 icon-22 ic_volume inline" />
            </div>
            {/**/}
            <div data-toggle="modal" className="btn-item add-note-me">
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
                <div className="gogl-sentence">Tiếng anh : {items.nodeEN}</div>
              <div className="gogl-sentence">Tiếng Việt : {items.noteVI}</div>

              {/**/}
              {/**/}
              {/**/}
            </div>
            {/**/}
          </div>
          <div className="gogl-word-search-helper">Dịch tự động</div>
        </div>
        {/**/}
      </div>
      })}


      <Footer />
    </div>
  );
};

export default UserSaved;
