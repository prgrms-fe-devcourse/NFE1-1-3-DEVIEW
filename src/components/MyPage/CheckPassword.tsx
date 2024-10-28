import { PasswordInput } from "@components/Common/PasswordInput";

type CheckPasswordProps = {
  onSuccess: () => void;
  correctPassword: string;
};

export const CheckPassword = ({ onSuccess, correctPassword }: CheckPasswordProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputPassword = formData.get("password") as string;

    if (inputPassword === correctPassword) {
      onSuccess();
      console.log(inputPassword);
    } else {
      console.log(inputPassword);
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <form className="flex flex-col border-2" onSubmit={onSubmit}>
      <PasswordInput />
      <button type="submit" className="primary-btn p-7">
        확인
      </button>
    </form>
  );
};
