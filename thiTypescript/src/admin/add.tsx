import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { AddForm, addSchema } from "../api/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { create, translate } from "../api/products";
import logoSearch from "../assets/search.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logoChange from "../assets/arrows.png";
import { saveNoteByUser } from "../api/auth";
import { toast } from "react-toastify";
import QuestionAnswer from "./QuestionAnswer";

export default function Add({
  handelTranslateShow,
  handelTranslateHide,
  getTextTranslate,
}: any) {
  const [inputText, setInputText] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [translatedText, setTranslatedText] = useState("");
  const [checkOffTranslate, setCheckOffTranslate] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [queryParameters] = useSearchParams();
  const checkEnVi: string | null = queryParameters.get("check");
  const speak = (text: string) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };
  const navigate = useNavigate();
  const [dataSave, setDataSave] = useState({
    noteVI: "",
    nodeEN: "",
  });
  console.log(user, "user");
  const handleTranslate = () => {
    const dataTranslate = {
      option: !checkEnVi || checkEnVi == "vi" ? "en" : "vi",
      text: inputText,
    };
    const data = translate(dataTranslate)
      .then((dataTrans) => {
        getTextTranslate(inputText);
        setTranslatedText(
          !checkEnVi || checkEnVi == "vi"
            ? dataTrans.data.vi
            : dataTrans.data.en
        );
        setDataSave({
          noteVI: dataTrans.data.vi,
          nodeEN: dataTrans.data.en,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    setCheckOffTranslate(true);
    handelTranslateShow();
  };
  const handelSaveTranslate = () => {
    saveNoteByUser(user._id, dataSave)
      .then((data) => {
        toast.success("Note saved successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const changeEnVi = () => {
    navigate({
      search: createSearchParams({
        check: !checkEnVi || checkEnVi == "vi" ? "en" : "vi",
      }).toString(),
    });
  };
  useEffect(() => {
    {
      !checkEnVi || checkEnVi == "vi"
        ? setTextInput("Input Text (English)")
        : setTextInput("Input Text (Vietnamese)");
    }
    {
      !checkEnVi || checkEnVi == "vi"
        ? setTranslated("Translated Text (Vietnamese)")
        : setTranslated("Translated Text (English)");
    }
  }, [checkEnVi]);
  return (
    <div className="">
      <Container style={{ gap: "50px" }} className="mt-5 d-flex">
        <Row style={{ width: "500px" }}>
          <Col style={{ width: "500px" }}>
            <h1 className="text-center mb-4">Translate App</h1>
            <Form>
              <Form.Group controlId="formInputText">
                <Form.Label>{textInput}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <p
                  className=""
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    paddingTop: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => speak(inputText)}
                >
                  Phát âm
                </p>
              </Form.Group>
              <img
                src={logoChange}
                onClick={changeEnVi}
                style={{
                  width: "40px",
                  transform: "rotate(-90deg)",
                  display: "block",
                  margin: "0 auto",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
                alt=""
              />
              <Form.Group controlId="formTranslatedText">
                <Form.Label>{translated}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={translatedText}
                  readOnly
                />
              </Form.Group>
              <p
                className=""
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  paddingTop: "5px",
                  cursor: "pointer",
                }}
                onClick={() => speak(translatedText)}
              >
                Phát âm
              </p>

              <Button
                style={{ marginTop: "20px" }}
                variant="primary"
                onClick={handleTranslate}
              >
                Translate
              </Button>
              {checkOffTranslate && (
                <>
                  <Button
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                    variant="danger"
                    onClick={() => {
                      handelTranslateHide();
                      setCheckOffTranslate(false);
                      setTranslatedText("");
                      setInputText("");
                    }}
                  >
                    Tắt dịch
                  </Button>
                  <Button
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                    variant="success"
                    onClick={handelSaveTranslate}
                  >
                    Lưu lại
                  </Button>
                </>
              )}
            </Form>
          </Col>
        </Row>
        <QuestionAnswer/>
      </Container>
    </div>
  );
}
