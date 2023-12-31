import axios from "axios";

//로그인
export const loginRequest = async ({ id, pwd }) => {
  try {
    const response = await axios.post("http://hxlab.co.kr:30000/users/login", {
      id,
      pwd,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//이메일 인증 보내기
export const sendEmail = async ({ email }) => {
  try {
    const response = await axios.post("http://hxlab.co.kr:30000/users/auth", {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//이메일 인증 체크
export const emailCheck = async ({ email, auth_number }) => {
  try {
    const response = await axios.post(
      "http://hxlab.co.kr:30000/users/auth-check",
      { email, auth_number }
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

//회원가입
export const singup = async ({
  id,
  pwd,
  name,
  email,
  birth,
  certification,
}) => {
  try {
    const response = await axios.post(
      "http://hxlab.co.kr:30000/users/register",
      {
        id,
        pwd,
        name,
        email,
        birth,
        certification,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//아이디 찾기
export const findId = async ({ name, email, certification }) => {
  try {
    const response = await axios.get("http://hxlab.co.kr:30000/users/find-id", {
      params: { name, email, certification },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
//비밀번호 변경
export const changePwd = async ({ id, pwd, certification }) => {
  try {
    const response = await axios.put(
      "http://hxlab.co.kr:30000/users/change-pwd",
      {
        id,
        pwd,
        certification,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//회원탈퇴
export const deleteUser = async ({ id, pwd }) => {
  try {
    const response = await axios.delete(
      "http://hxlab.co.kr:30000/users/delete",
      {
        data: { id, pwd },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//카드 등록
export const cardRegist = async ({
  card_number,
  expiry,
  birth,
  pwd_2digit,
  id,
  certification,
}) => {
  try {
    const response = await axios.post(
      "http://hxlab.co.kr:30000/users/card-regist",
      {
        card_number,
        expiry,
        birth,
        pwd_2digit,
        id,
        certification,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//카드 리스트 조회
export const cardList = async ({ id }) => {
  try {
    const response = await axios.get(
      "http://hxlab.co.kr:30000/users/card-list",
      {
        params: {
          id,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//결제 내역
export const expenseList = async ({ id, year, month }) => {
  try {
    const response = await axios.get(
      "http://hxlab.co.kr:30000/users/pay-list",
      {
        params: {
          id,
          year,
          month,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//결제 카드 변경
export const chageMainCard = async ({ id, card_num }) => {
  try {
    const response = await axios.put(
      "http://hxlab.co.kr:30000/users/change-card",
      {
        id,
        card_num,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

//카드 삭제
export const deleteCard = async ({ id, card_num }) => {
  try {
    const response = await axios.delete(
      "http://hxlab.co.kr:30000/users/card-delete",
      {
        data: {
          id,
          card_num,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
