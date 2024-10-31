import { IdInput } from "@components/Common/IdInput";
import { NameInput } from "@components/Common/NameInput";
import { PasswordInput } from "@components/Common/PasswordInput";
import { CheckPassword } from "@components/MyPage/CheckPassword";
import { Radio } from "@components/Common/Radio";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserInfo } from "@customTypes/userInfo";
import { getUserInfo } from "@services/auth/getUserInfo";
import { Loading } from "@components/Common/Loading";
import { updateUser } from "@services/auth/updateUser";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";

export const InfoContent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: userInfo,
    isLoading,
    error
  } = useQuery<UserInfo, Error>({
    queryKey: ["userInfo"],
    queryFn: getUserInfo
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      alert("사용자 정보가 성공적으로 업데이트되었습니다.");
    },
    onError: (error: Error) => {
      alert(`업데이트 실패: ${error.message}`);
    }
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const [username, password, group] = [
      formData.get("name") as UserInfo["username"],
      formData.get("password") as string,
      formData.get("group") as UserInfo["group"]
    ];

    const updatedData: Partial<UserInfo> & { password?: string } = { username, group };

    let isValid = true;

    if (username !== userInfo?.username) {
      const isNameValid = AUTH_INPUT_VALIDATION.name.regexp.test(username);
      if (!isNameValid) {
        alert(AUTH_INPUT_VALIDATION.name.errorMessage);
        isValid = false;
      }
    }

    if (password.trim() !== "") {
      const isPasswordValid = AUTH_INPUT_VALIDATION.password.regexp.test(password);
      if (!isPasswordValid) {
        alert(AUTH_INPUT_VALIDATION.password.errorMessage);
        isValid = false;
      } else {
        updatedData.password = password;
      }
    }

    if (isValid) {
      mutation.mutate(updatedData);
    }
  };

  if (isLoading) {
    return (
      <div className="flex">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userInfo) {
    return <div>사용자 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div className="mx-auto max-w-[768px] py-4">
      {!isVerified ? (
        <CheckPassword onSuccess={() => setIsVerified(true)} />
      ) : (
        <form className="" onSubmit={onSubmit}>
          <IdInput defaultValue={userInfo.userId} disabled={true} />
          <NameInput defaultValue={userInfo.username} />
          <PasswordInput required={false} />

          <div className="mb-5 flex items-center justify-between gap-1 md:gap-10">
            <Radio id="student" name="group" text="학생" value="학생" defaultChecked={userInfo.group === "학생"} />
            <Radio id="seeker" name="group" text="취준생" value="취준생" defaultChecked={userInfo.group === "취준생"} />
            <Radio
              id="developer"
              name="group"
              text="개발자"
              value="개발자"
              defaultChecked={userInfo.group === "개발자"}
            />
            <Radio id="etc" name="group" text="기타" value="기타" defaultChecked={userInfo.group === "기타"} />
          </div>
          <button type="submit" className="primary-btn p-6 text-14 md:p-7 md:text-16" disabled={mutation.isPending}>
            {mutation.isPending ? "저장 중..." : "저장"}
          </button>
        </form>
      )}
    </div>
  );
};
