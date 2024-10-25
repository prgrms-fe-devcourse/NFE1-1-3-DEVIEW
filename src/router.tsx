import Footer from "@components/Common/Footer";
import { Header } from "@components/Common/Header";
import AssignPage from "@pages/AssignPage";
import ErrorPage from "@pages/ErrorPage";
import LoginPage from "@pages/LoginPage";
import MainPage from "@pages/MainPage";
import MyPage from "@pages/MyPage";
import PostCreatePage from "@pages/PostCreatePage";
import PostDetailPage from "@pages/PostDetailPage";
import PostPage from "@pages/PostPage";
import RankPage from "@pages/RankPage";
import SearchPage from "@pages/SearchPage";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/post",
        element: <PostPage />
      },
      {
        path: "/post/:id",
        element: <PostDetailPage />
      },
      {
        path: "/post/create",
        element: <PostCreatePage />
      },
      {
        path: "/mypage",
        element: <MyPage />
      },
      {
        path: "/rank",
        element: <RankPage />
      },
      {
        path: "/search/:query",
        element: <SearchPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/assign",
    element: <AssignPage />
  }
]);
