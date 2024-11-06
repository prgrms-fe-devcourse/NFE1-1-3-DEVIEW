import { Footer } from "@components/Common/Footer";
import { Header } from "@components/Common/Header";
import { ProtectedRoute } from "@components/Common/ProtectedRoute";
import { ScrollToTop } from "@components/Common/ScrollToTop";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  AdminPage,
  ErrorPage,
  LoginPage,
  MainPage,
  MyPage,
  PostCreatePage,
  PostDetailPage,
  PostPage,
  PostUpdatePage,
  RankPage,
  RegisterPage,
  SearchPage
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <div id="wrapper">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
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
        path: "/post/popular",
        element: <PostPage />
      },
      {
        path: "/post/user/:id",
        element: <PostPage />
      },
      {
        path: "/post/:id",
        element: <PostDetailPage />
      },
      {
        path: "/post/create",
        element: (
          <ProtectedRoute>
            <PostCreatePage />
          </ProtectedRoute>
        )
      },
      {
        path: "/post/update/:postId",
        element: (
          <ProtectedRoute>
            <PostUpdatePage />
          </ProtectedRoute>
        )
      },
      {
        path: "/mypage",
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/rank",
        element: <RankPage />
      },
      {
        path: "/search/:query",
        element: <SearchPage />
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute forAdmin requireLogin redirectUrl="/">
            <AdminPage />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute redirectUrl="/" requireLogin={false}>
        <LoginPage />
      </ProtectedRoute>
    )
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute redirectUrl="/" requireLogin={false}>
        <RegisterPage />
      </ProtectedRoute>
    )
  }
]);
