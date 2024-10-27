import { router } from "@/router";
import { AccessTokenStorage } from "@utils/localStorage";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  useEffect(() => {
    //todo initial login
    if (AccessTokenStorage.hasToken()) {
      //사용자가 이전에 로그아웃 하지 않고 종료한 상태
      //쿠키가 남아있다(refreshToken)
      /*
        1. /auth/user 시도한다
          a. 액세스토큰이 만료되지 않았다면 성공할 것이다.
            i. 유저 정보 userStore에 저장
          b. 액세스토큰이 만료되었다면 오류가 날 것이다.
            i. refresh 요청
              1. refresh 토큰이 만료되지 않았다면 요청에 성공할 것이다.
                a. accessToken을 발급받게 된다.
                b. 로컬스토리지에 토큰 저장
                c. 유저 정보 userStore에 저장
              2. refresh 토큰 만료 -> 에러
                a. 로그인 하라는 알림 메시지를 띄운다.
                   (강제로 로그인 페이지로 이동시키지 않는다.)
                => (사용자가) 작업 내용을 따로 저장할 수 있다.
      */
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
