export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white-sub flex-center">
      <div className="relative space-y-6 p-6 text-center">
        <div className="space-y-4">
          <h1 className="text-[50px] font-bold text-black md:text-[80px]">404</h1>
          <h2 className="text-20 font-semibold text-gray md:text-28">페이지를 찾을 수 없습니다</h2>
          <p className="text-16 text-gray md:text-24">요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.</p>
        </div>

        <div className="space-x-4">
          <button
            onClick={() => window.history.back()}
            className="rounded bg-lightgray px-6 py-4 text-16 font-medium text-black transition duration-200 hover:opacity-80 md:text-24"
          >
            이전 페이지
          </button>

          <a href="/" className="primary-btn px-6 py-4 text-16 font-medium md:text-24">
            홈으로 가기
          </a>
        </div>
      </div>
    </div>
  );
}
