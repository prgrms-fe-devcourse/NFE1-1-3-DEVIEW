import { useUserStore } from "@stores/userStore";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute 컴포넌트의 props 타입 정의
type ProtectedRouteProps = {
  children: ReactNode;
  requireLogin?: boolean;
  redirectUrl?: string;
  forAdmin?: boolean;
};

/**
 * 사용자의 로그인 상태에 따라 접근을 제어하는 컴포넌트
 * 아무 props도 넘기지 않을 시 로그인이 필요한 페이지에 사용됨
 *
 * @param {ReactNode} children - 보호될 자식 컴포넌트들
 * @param {boolean} [requireLogin=true] - 로그인이 필요한지 여부
 * @param {string} [redirectUrl="/"] - 조건 불일치 시 리다이렉트할 URL
 * @returns {ReactNode} 조건에 따라 자식 컴포넌트 또는 리다이렉트 컴포넌트
 */
export const ProtectedRoute = ({
  children,
  requireLogin = true,
  redirectUrl = "/login",
  forAdmin = false
}: ProtectedRouteProps) => {
  // 사용자의 로그인 상태를 가져옴
  const { isLoggedIn, userInfo } = useUserStore();

  if (isLoggedIn && forAdmin && userInfo?.role === "admin") {
    return <>{children}</>;
  }
  // 로그인 상태와 요구사항이 일치하지 않으면 리다이렉트
  if (isLoggedIn !== requireLogin) {
    return <Navigate to={redirectUrl} replace />;
  }

  // 조건이 충족되면 자식 컴포넌트 렌더링
  return <>{children}</>;
};
