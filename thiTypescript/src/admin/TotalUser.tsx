import React, { useEffect, useState } from "react";
import { getAllUser, removelUser } from "../api/auth";
import { toast } from "react-toastify";

const TotalUser = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const handelgetUser = async () => {
      const { data } = await getAllUser();
      console.log(data);
      setDataUser(data);
    };
    handelgetUser();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="float-end my-5">
          <a href="../user/add.html" className="text-decoration-none">
            <button className="btn btn-success">Add người dùng</button>
          </a>
        </div>
        <center>
          <h1>List người dùng</h1>
        </center>
        <div className="list  p-3 ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col ">#</th>
                <th scope="col">Họ Tên</th>
                <th scope="col">Email</th>
                <th scope="col">Quyền hạn</th>
                <th scope="col">Số từ đã lưu</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {dataUser?.map((db: any, index: number) => (
                <tr key={db._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{db.name}</td>
                  <td>{db.email}</td>
                  <td>{db.role}</td>
                  <td>{db.note.length}</td>
                  <td style={{ display: "flex", gap: "5px" }}>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this user?"
                          )
                        ) {
                          removelUser(db._id)
                            .then((response) => {
                              toast.success("User deleted successfully");
                              setTimeout(() => {
                                window.location.reload();
                              }, 2500);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        }
                      }}
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Xóa
                    </button>
                    {/* xóa */}
                    <button className="btn btn-primary p-2"> Cập nhật</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
