# DEVIEW

Deview는 개발자, 취준생들을 위한 코드리뷰 웹사이트로, React와 TypeScript를 기반으로 구축된 반응형 웹 애플리케이션입니다.

# Production

[Deview](https://nfe-1-1-3-deview.vercel.app/)

## Figma

[DEV 3차 DEVIEW (Copy)](<https://www.figma.com/design/ukWNFZRnocaboeFxzK4ZVK/DEV-3%EC%B0%A8-DEVIEW-(Copy)?t=QNjvt1YWxlzDctuy-0>)

# ⭐ _Deview ReadMe_ ⭐

![alt text](image.png)

- 배포 URL : https://nfe-1-1-3-deview.vercel.app/
- Test ID : test1234
- Test PW : test1234

## ♻️ 개발 환경

### 개발 스택

**프론트엔드**

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /> <img src="https://img.shields.io/badge/Zustand-593D88?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" /> <img src="https://img.shields.io/badge/Tanstack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="Tanstack Query" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" /> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" /> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />

**백엔드**

[GitHub - shlee9999/deview-backend: deview 프로젝트의 backend 레포지토리](https://github.com/shlee9999/deview-backend)

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />

### 협업 도구

<img src="https://img.shields.io/badge/Github Projects-181717?style=for-the-badge&logo=github&logoColor=white" alt="Github Projects" />

### 인프라 & 도구

**배포 환경**

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /> <img src="https://img.shields.io/badge/CloudType-000000?style=for-the-badge&logo=cloudtype&logoColor=white" alt="CloudType" />

**디자인 협업**

<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />

## 📃 컨벤션

---

- 커밋 컨벤션
  - **Feat**: 새로운 기능 추가
  - **Fix**: 버그 수정
  - **Docs**: 문서 수정
  - **Refactor**: 코드 리펙토링
  - **Chore**: 빌드 업무 수정, 패키지 매니저 수정
  - **Style** : 코드 포맷팅, 세미콜론 누락, 기능 코드 변경이 없는 경우
- 코드 컨벤션

  1. 컴포넌트

     1. rfc
     2. rfcn

     ```tsx
     type ComponentProps = {
       name: string;
     };

     export const Component = ({ name }: ComponentProps) => {
       return <div>Component</div>;
     };
     ```

  2. hook

     ```jsx
     export function useHook(){
     	...
     }
     ```

  3. **ESLint, Prettier 사용**
  4. 상수, 변수 명명 규칙
     1. 버튼
        1. button→btn
     2. 배열
        1. users (s)
        2. user + List(단수명 + List)
  5. 콜백함수 → 화살표
  6. 주석

     1. anchor?
     2. Better Comments vscode 확장
     3. 기본 주석 색상 바꾸기 - settings.json에 다음 추가

        ```jsx
         "editor.tokenColorCustomizations": {
            "textMateRules": [
              {
                "scope": ["comment", "comment punctuation.definition.comment"],
                "settings": {
                  "foreground": "#EFDC05",
                  "fontStyle": ""
                }
              }
            ]
          },
        ```

  7. 폴더 네이밍
     1. 컴포넌트 파일 명명규칙
     2. 컴포넌트 이외의 파일 명명규칙
     3. 컴포넌트 폴더 - 파스칼
     4. 최상위 폴더 - 카멜
  8. 이벤트핸들러 네이밍

     <button onClick={onClick}>리셋 버튼</button>

## 🛠️ 채택한 개발 기술

---

### **프론트엔드 핵심 기술**

**TailwindCSS**

- 직관적인 유틸리티 클래스로 빠른 UI 개발 가능
- 커스터마이징이 용이하고 번들 사이즈 최적화
- 반응형 디자인 구현이 편리
- 컴포넌트 단위의 스타일링으로 재사용성 향상

**Zustand**

- 간단하고 직관적인 상태 관리 라이브러리
- Redux보다 적은 보일러플레이트 코드
- Flux 패턴을 따르는 예측 가능한 상태 흐름
- TypeScript 지원이 우수하며 러닝커브가 낮음

### **데이터 관리**

**React Query**

- 서버 상태 관리의 효율적 처리
- 주요 기능:
  - 데이터 캐싱 및 자동 갱신
  - 신선한 데이터 유지(Fresh & Stale)
  - 옵티미스틱 업데이트 지원
  - 무한 스크롤/페이지네이션 구현 용이
  - 백그라운드 데이터 업데이트

### 개발 환경 경험

- **ESLint & Prettier**: 일관된 코드 스타일 유지
- **TypeScript**: 타입 안정성 확보
- **Vite**: 빠른 개발 서버 및 빌드 성능

## 🌴 브랜치 전략

GitHub Flow를 채택한 주요 이유와 특징을 체계적으로 설명하겠습니다.

**선택 이유**

- 짧은 개발 기간에 최적화된 단순하고 직관적인 워크플로우
- 신속한 배포와 효율적인 협업

### 주요 특징

**브랜치 구조**

- 단일 메인 브랜치(main)를 중심으로 운영
- 기능 개발을 위한 피처 브랜치 생성 및 빠른 병합
- 브랜치 전략이 단순하여 초기 학습 곡선이 낮음

**협업 프로세스**

- Pull Request를 통한 코드 리뷰 시스템
- 자동화된 테스트와 배포 프로세스 지원
- 지속적인 피드백과 개선이 가능한 구조

### 장점

- 유연하고 가벼운 워크플로우
- 빠른 피드백과 지속적인 개선

## **🏗️ 프로젝트 구조**

---

- Front-End
  ```
  📦src
   ┣ 📂assets            # 정적 자원
   ┣ 📂components        # 컴포넌트
   ┃ ┣ 📂Common         # 공통 컴포넌트
   ┃ ┣ 📂LoginPage      # 로그인 페이지 관련
   ┃ ┣ 📂MainPage       # 메인 페이지 관련
   ┃ ┣ 📂MyPage         # 마이 페이지 관련
   ┃ ┣ 📂PostCreatePage # 포스트 생성 관련
   ┃ ┣ 📂PostDetailPage # 포스트 상세 관련
   ┃ ┣ 📂PostPage       # 포스트 목록 관련
   ┃ ┣ 📂RankPage       # 랭킹 페이지 관련
   ┃ ┗ 📂RegisterPage   # 회원가입 관련
   ┣ 📂constants         # 상수
   ┣ 📂customTypes      # 타입 정의
   ┣ 📂hooks            # 커스텀 훅
   ┣ 📂pages            # 페이지 컴포넌트
   ┣ 📂services         # API 서비스
   ┃ ┣ 📂auth          # 인증 관련
   ┃ ┣ 📂comment       # 댓글 관련
   ┃ ┣ 📂notification  # 알림 관련
   ┃ ┣ 📂post          # 게시글 관련
   ┃ ┣ 📂report        # 신고 관련
   ┃ ┗ 📂user          # 사용자 관련
   ┣ 📂stores           # 상태 관리
   ┣ 📂utils            # 유틸리티
   ┗ 📜App.tsx          # 앱 진입점
  ```
- Back-End
  ```
  📦src
   ┣ 📂.vscode
   ┃ ┗ 📜settings.json
   ┣ 📂config
   ┃ ┣ 📜database.js
   ┃ ┣ 📜server.js
   ┃ ┗ 📜socket.js
   ┣ 📂controllers
   ┃ ┣ 📜authController.js
   ┃ ┣ 📜commentController.js
   ┃ ┣ 📜notificationController.js
   ┃ ┣ 📜postController.js
   ┃ ┣ 📜reportController.js
   ┃ ┗ 📜userController.js
   ┣ 📂middleware
   ┃ ┣ 📜authMiddleware.js
   ┃ ┣ 📜commentMiddleware.js
   ┃ ┣ 📜corsMiddleware.js
   ┃ ┣ 📜index.js
   ┃ ┗ 📜postMiddleware.js
   ┣ 📂models
   ┃ ┣ 📜Comment.js
   ┃ ┣ 📜Like.js
   ┃ ┣ 📜Notification.js
   ┃ ┣ 📜Post.js
   ┃ ┣ 📜Report.js
   ┃ ┣ 📜Scrap.js
   ┃ ┣ 📜Thumb.js
   ┃ ┣ 📜User.js
   ┃ ┗ 📜View.js
   ┣ 📂routes
   ┃ ┣ 📜authRoutes.js
   ┃ ┣ 📜commentRoutes.js
   ┃ ┣ 📜index.js
   ┃ ┣ 📜notificationRoutes.js
   ┃ ┣ 📜postRoutes.js
   ┃ ┣ 📜reportRoutes.js
   ┃ ┗ 📜userRoutes.js
   ┣ 📂utils
   ┃ ┗ 📜getPaginated.js
   ┣ 📜.env
   ┣ 📜.gitignore
   ┣ 📜app.js
   ┣ 📜package-lock.json
   ┗ 📜package.json
  ```

## **🙋‍♂️ 역할 분담**

---

|                                                                   👩‍💻 민정아                                                                    |                                                                                         👨‍💻 송웅규                                                                                          |                                                                                   👩‍💻 이가은                                                                                    |                                                                              👨‍💻 이성훈                                                                               |                                                                     👨‍💻 조천산                                                                     |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
|                                           <img src="프로필이미지주소.jpg" width="200" height="200"/>                                           |                                                                 <img src="프로필이미지주소.jpg" width="200" height="200"/>                                                                 |                                                           <img src="프로필이미지주소.jpg" width="200" height="200"/>                                                           |                                                      <img src="프로필이미지주소.jpg" width="200" height="200"/>                                                      |                                            <img src="프로필이미지주소.jpg" width="200" height="200"/>                                             |
| **담당 페이지** <br> - 검색 페이지 <br> - 랭킹 페이지 <br><br> **주요 기능** <br> - 헤더 <br> - 알림 <br> - 검색 및 검색 목록 <br> - 랭킹 목록 | **담당 페이지** <br> - 메인 페이지 <br> - 게시글 목록 <br> - 유저 게시글 목록 <br><br> **주요 기능** <br> - 반응형 슬라이드 메인배너 <br> - 게시글 리스트 공용 컴포넌트 <br> - 스켈레톤 UI | **담당 페이지** <br> - MyPage <br> - Footer <br><br> **주요 기능** <br> - UserProfile <br> - UserPosts <br> - UserComments <br> - UserScraps <br> - UserInfo <br> - CodeViewer | **Front-End** <br> **담당 페이지** <br> - 로그인 페이지 <br> - 회원가입 페이지 <br> - 관리자 페이지 <br> - 에러 페이지 <br><br> **Back-End** <br> - 모든 백엔드 전임 | **담당 페이지** <br> - 게시물 작성 페이지 <br> - 게시물 상세 페이지 <br><br> **주요 기능** <br> - 게시글 CRUD <br> - 댓글 CRUD <br> - 무한 스크롤 |
|              [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](GitHub주소)               |                                    [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](GitHub주소)                                     |                              [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](GitHub주소)                               |                         [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](GitHub주소)                          |                [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](GitHub주소)                |
|            [![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:이메일주소)             |                                  [![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:이메일주소)                                   |                            [![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:이메일주소)                             |                       [![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:이메일주소)                        |              [![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:이메일주소)              |

## **📅 개발 기간 및 작업 관리**

---

### **⏰ 개발 기간**

- 전체 개발 기간 : 24/10/22 ~ 24/11/06
- UI 구현 : 24/10/22~24/10/25
- 기능 구현 : 24/10/25 ~ 24/11/06

### **📋 이슈 관리**

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유
- 버그 리포트, 기능 요청 등 목적에 따른 이슈 템플릿 구성

## **🧐 신경 쓴 부분**

---

optimistic update

## **📄 페이지별 기능**

---

### [MainPage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/214ef1d3-741a-4db4-8ef3-9a2fa9d139a2/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/8cf1272d-bef8-41ef-8d2c-0fb740f64aa3/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/16794b80-8053-4be4-b1a1-218496dafabc/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/53bfb8cf-1967-413c-b8c3-9d312a75af96/image.png)

- 게시물 조회
  - 배너
    - 가장 조회수가 많은 게시물
    - 오늘 올린 게시물 중 조회수가 가장 많은 게시물
    - 답변의 좋아요가 가장 많이 달린 리뷰어
  - 가장 좋아요가 많이 달린 인기 게시글 3개
  - 답변이 달리지 않은 질문 2개
  - 최신 게시글
  - 에러/로딩 대체 UI

### [PostPage]

![{8DDA7F94-70C3-4A88-A495-70ACCFB02FB9}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/e2741cc5-e519-4dec-a7e7-4780935e00c2/8DDA7F94-70C3-4A88-A495-70ACCFB02FB9.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/d3ab8a19-3185-48e3-bb8b-2ce263c5ca1f/image.png)

- 게시물 리스트 조회
  - 정렬 토글버튼을 통한 인기/최신 게시글 변경
  - 무한스크롤
  - 에러/초기 로딩 대체 UI

### [RankPage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/6b23a9f9-1146-4514-8e24-acb2cfba56ae/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/cf757a05-89e4-40e7-bdf5-c1b588e0369c/image.png)

- 유저 랭킹
  - 해당 유저가 단 댓글에 추천수가 많은 순으로 순위 결정
  - 유저 ID, 속한 그룹, 추천수, 게시글 보기
  - 게시글 보기는 해당 유저가 작성한 게시글을 볼 수 있음

### [SearchPage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/b5f3d78c-32f2-40f1-9f0e-6fe79d0e3a39/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/e6eecedd-e3c7-4622-9834-390e085ec4a0/image.png)

- 검색 기능
  - 검색어를 입력하거나 필터를 선택해 검색할 수 있음
  - 필터만 선택 가능하고 최대 3개 선택할 수 있음
  - 검색 목록 클릭하면 해당 PostDetailPage로 이동

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/e810ffb9-feab-469c-b397-d39cd9a18c93/image.png)

### [LoginPage]

![{655702FF-D910-4FE5-81EC-1A5AD7CE9C8D}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/0d3a45bf-c77e-491d-bea6-2786c3bd36d2/655702FF-D910-4FE5-81EC-1A5AD7CE9C8D.png)

![{1AEB9061-3F8B-4056-979E-4F6F738FB313}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/4d05721e-7f9f-49fd-9a67-6eb59c64d670/1AEB9061-3F8B-4056-979E-4F6F738FB313.png)

- 로그인 기능
  - 아이디
  - 비밀번호

### [RegisterPage]

![{AB190A99-CC3D-4A9D-9CF2-34B858EEB340}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/c0927d51-4f8f-48b9-9236-f9b264280b34/AB190A99-CC3D-4A9D-9CF2-34B858EEB340.png)

![{9A0C94AA-1CD8-4ACD-A569-CBD34C9C355E}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/2a451998-8d5c-4958-a129-b94d10729931/9A0C94AA-1CD8-4ACD-A569-CBD34C9C355E.png)

- 회원가입 기능
  - 아이디
  - 비밀번호
  - 이름
  - 그룹

### [PostCreatePage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/cb3926a6-e091-4f60-8b77-a3fbbec014d7/image.png)

- 게시글 작성
  - 게시글 제목
  - 게시글 내용
  - 관련 내용에 대한 언어 및 버전 정보
    - - - 버튼으로 추가, 삭제
  - 질문하고 싶은 코드 작성
    - Quill 에디터를 이용해 코드의 경우 하이라이팅

### [PostDetailPage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/b406665a-89aa-4d0e-8bfc-8f863c6b6915/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/898fee55-f0c9-48a4-96bb-f1c65364d46b/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/8e180660-712a-439b-b8b0-f3266714ffe3/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/1577732a-1cb1-41d1-84be-132ffcabe3c5/image.png)

- 게시글 세부
  - 게시글 제목
  - 작성일, 작성자, 언어 및 버전 정보
  - 내용 및 코드
  - 본인이 작성한 게시글은 수정 및 삭제
  - 게시글에 좋아요, 스크랩, 신고
  - 댓글 기능
  - 댓글 추천 가능
  - 본인이 작성한 댓글 수정 및 삭제

### [PostUpdatePage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/4b6c2707-9960-4bfd-b9fd-4120193b0105/image.png)

- 게시글 수정
  - 게시글 제목, 내용, 언어 및 버전, 코드 수정
  -

### [MyPage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/6ff6b787-2d9b-4d50-96a8-acbd9bda801e/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/67d24a5d-274a-4721-9d3c-591a8d5e9cd2/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/767e0d85-c876-453b-926a-345151595f9f/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/dc9bc76e-ace1-4699-99fa-59d84e342fbf/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/dbbeb61a-38d0-457b-a910-905b35e58677/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/5ceb4ee5-b9b1-453a-99ca-fcffe239ea2a/image.png)

- 마이페이지
  - 프로필 (회원가입하면 랜덤 지정)
  - 이름(그룹)
  - 내 게시글 - 내가 작성한 게시글
  - 내 댓글 - 내가 작성한 댓글
  - 스크랩 - 내가 스크랩한 글
  - 내 정보 - 비밀번호 입력 시 내 정보 열람 및 수정

### [Alarm]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/31991cbe-bdde-406f-95db-d2ae505d7863/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/8ce50ec8-abb8-464d-a13c-65155548cfa0/image.png)

- 내 게시물에 댓글 달릴 경우
- 내 게시물에 추천
- 신고 5회 이상
- 삭제 가능, 전체 확인 가능

### [ErrorPage]

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/b154b5a6-5c70-403f-8dce-370786a2c1fe/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/dbc49794-b983-4f69-8afa-b5c54d5f9b82/165d3043-5a62-4bbc-a9f6-5669264ddbce/image.png)

- 에러 페이지

## **🔧 트러블 슈팅**

---

- React Quill

  - 저장한 데이터를 받아오는 과정에서, 데이터 손실
  - 에디터가 데이터 타입 변환 과정에서 데이터 구조를 바꾸면서 기존 데이터의 손실이 일어남
  - CodeViewer에서 react quill을 read only 로 보여줬으나, 이러한 문제로 react-quill없이 그냥 html 태그로 불러오는 방식으로 변환
    - 이때 highlight.js를 사용해서 highlighter 적용

- 존재하지 않는 속성에 접근하거나 API가 에러를 반환할 경우 페이지 전체가 다운되는 문제
  - 옵셔널 체인을 통해 존재하지 존재여부를 미리 검사
  - react-error-boundary를 도입해 에러발생 시 fallback 컴포넌트로 대체되도록 변경

## Back-End

- MongoDB 용량 제한 → 이미지 업로드 제한 → `boring-avatar` 사용하여 DB 차지 X
- 좋아요, 스크랩만 해도 updatedAt 변경됨 → `timestamp: false`
- MongoDB timestamp가 UTC 시간으로만 저장됨 → 모든 스키마의 createdAt, updatedAt의 getter에 moment 라이브러리 사용하여 해결
-

## **🎯 개선 목표**

---

- 소속 기능을 확대 및 세분화
  - 소속 집단 뿐 아니라 소속 회사/학교를 추가
  - ‘블라인드’와 유사한 인증제로 변경
  - 검증된 유명한 회사의 개발자에게 코드리뷰를 받을 수 있는 기회
- 특정 유저에게 코드리뷰 신청
  - 유명 회사에 소속한 개발자에게 직접 리뷰를 신청할 수 있는 방식
  - 리뷰어 지정시 신청비가 발생 : 기본적으로 리뷰어에게 전달되며 약간의 수수료를 통한 수익구조
- 업적 시스템
  - 리뷰어의 활동에 따른 업적(미션) 진척도 상승
  - 일정 수치 달성 시 보상을 통해 게시글/댓글에서 자신의 프로필을 장식할 수 있는 뱃지,칭호를 획득가능
  - 뱃지를 통해 간접적으로 리뷰어의 답변 퀄리티와 신뢰도를 알 수 있음
- 더 세분화된 정렬 및 필터링
- 더 세분화된 게시글/댓글 평가 기능
- 게시글 임시 저장
- 대댓글 기능
- 오랫동안 답변을 못 받은 게시글을 위한 AI 답변
- 깃허브 파일링크를 본문에 첨부하면 해당 내용이 코드박스로 보여지는 기능

## **📝 프로젝트 후기**

---

### 민정아

React Query 활용에 대해 더 깊이 이해할 수 있었고, 즐거웠습니다!

### 송웅규

협업 경험을 쌓을 수 있는 좋은 프로젝트였습니다. 지금까지 프로젝트 중 가장 많은 도움이 될 것 같습니다.

### 이가은

같이 개발하는 동안 너무 재밌었고 많이 배웠습니다! 😄

팀원분들 덕분에 크게 막히는 부분 없이 잘 마무리할 수 있었던 것 같습니다!

### 이성훈

주로 백엔드를 맡게 되어 모르는 부분이 많았지만 그만큼 많이 공부할 수 있었던 것 같고,

프론트는 팀원분들 모두 열심히 해주셔서 짧은 시간 내에 완성할 수 있었던 것 같습니다!

### 조천산

팀원들 덕분에 짧은 기간임에도 완성할 수 있었다고 생각합니다.

분위기도 너무 좋았고 즐겁게 개발한다는 것이 어떤 건지 알게된 시간이었습니다!
