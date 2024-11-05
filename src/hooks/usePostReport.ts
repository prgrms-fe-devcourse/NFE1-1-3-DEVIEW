import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reportPost } from "@/services/report/reportPost";
import { toast } from "react-hot-toast";
import { POST_DETAIL_QUERY_KEY } from "@constants/queryKey";

type ReportPostRequest = {
  postId: string;
  reason: string;
};

type ReportPostResponse = {
  message: string;
};

type usePostReportProps = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export const usePostReport = ({ onSuccess, onError }: usePostReportProps) => {
  const queryClient = useQueryClient();

  return useMutation<ReportPostResponse, Error, ReportPostRequest>({
    mutationFn: reportPost,
    onSuccess: (data) => {
      // 성공 시 게시글 상세 정보 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: [POST_DETAIL_QUERY_KEY]
      });

      // API 응답의 메시지로 토스트 표시
      toast.success(data.message);

      // 성공 콜백 실행
      onSuccess?.();
    },
    onError: (error) => {
      // 에러 메시지 토스트로 표시
      toast.error(error.message);

      // 에러 콜백 실행
      onError?.(error);
    }
  });
};

export default usePostReport;
