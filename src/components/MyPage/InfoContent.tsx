import { IdInput } from "@components/Common/IdInput";
import { NameInput } from "@components/Common/NameInput";
import { PasswordInput } from "@components/Common/PasswordInput";
import { CheckPassword } from "@components/MyPage/CheckPassword";
import { Radio } from "@components/Common/Radio";
import { useState } from "react";

type InfoContentProps = {
  data: {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    team?: string;
    created_at?: string;
  };
};

export const InfoContent = ({ data }: InfoContentProps) => {
  const [isVerified, setIsVerified] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedData = {
      username: formData.get("name") as string,
      password: formData.get("password") as string,
      team: formData.get("group") as string
    };
    // TODO: 업데이트 처리
  };

  // TODO: Ratio 컴포넌트 공통으로 이동
  return (
    <div className="mx-auto max-w-[768px] py-4">
      {!isVerified ? (
        <CheckPassword onSuccess={() => setIsVerified(true)} correctPassword={data.password ?? ""} />
      ) : (
        <form className="" onSubmit={onSubmit}>
          <IdInput defaultValue={data.email} disabled={true} />
          <NameInput defaultValue={data.username} />
          <PasswordInput defaultValue={data.password} />

          <div className="mb-5 flex items-center justify-between gap-1 md:gap-10">
            <Radio id="student" name="group" text="학생" value="학생" defaultChecked={data.team === "학생"} />
            <Radio id="seeker" name="group" text="취준생" value="취준생" defaultChecked={data.team === "취준생"} />
            <Radio id="developer" name="group" text="개발자" value="개발자" defaultChecked={data.team === "개발자"} />
            <Radio id="etc" name="group" text="기타" value="기타" defaultChecked={data.team === "기타"} />
          </div>
          <button type="submit" className="primary-btn p-6 text-14 md:p-7 md:text-20">
            저장
          </button>
        </form>
      )}
    </div>
  );
};
