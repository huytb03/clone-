import translate from "@iamtraction/google-translate";
import comment from "../models/comment.js";

export const translateControllers = {
  handelTranslateByUser: async (req, res) => {
    try {
      const { option, text } = req.body;
      if (option == "en") {
        translate(text, { from: "en", to: "vi" })
          .then((data) => {
            console.log(data.text);
            console.log(data.from.autoCorrected); // OUTPUT: true
            console.log(data.from.text.value); // OUTPUT: [Thank] you
            console.log(data.from.text.didYouMean); // OUTPUT: false
            return res.status(200).json({
              en: text,
              vi: data.text,
            }); // OUTPUT
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (option == "vi") {
        translate(text, { from: "vi", to: "en" })
          .then((data) => {
            console.log(data.text);
            console.log(data.from.autoCorrected); // OUTPUT: true
            console.log(data.from.text.value); // OUTPUT: [Thank] you
            console.log(data.from.text.didYouMean); // OUTPUT: false
            return res.status(200).json({
              vi: text,
              en: data.text,
            }); // OUTPUT
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  commentTransaction: async (req, res) => {
    try {
      const { id } = req.params;
      const { message } = req.body;
      if (!message) {
        return res.status(500).json({
          message: "message not found",
        });
      }
      const data = new comment({
        idUser: id,
        nameComment: message,
      }).save();
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  getAllComment: async (req, res) => {
    try {
      const data = await comment.find({}).populate("idUser");
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  getIdComment: async (req, res) => {
    try {
      const data = await comment.findById(req.params.id).populate("idUser");
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
};
