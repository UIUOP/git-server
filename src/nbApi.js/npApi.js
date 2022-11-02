import axios from "axios";
const HEADER = "application/json";
const NB_DOMAIN = "http://localhost:8090/KH_SEMI_BACK/";

const nbApi = {


  // 게시판 글작성
  App2: async function (title, content) {
    const boardObj = {
      title: title,
      content: content
    };
    return await axios.post(NB_DOMAIN + "BoardWriteServlet", boardObj, HEADER);
  }
}
export default nbApi;
