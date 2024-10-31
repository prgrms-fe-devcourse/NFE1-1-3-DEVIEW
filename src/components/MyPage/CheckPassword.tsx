import { PasswordInput } from "@components/Common/PasswordInput";
import { checkPassword } from "@services/auth/checkPassword";
import { useMutation } from "@tanstack/react-query";

type CheckPasswordProps = {
  onSuccess: () => void;
};

export const CheckPassword = ({ onSuccess }: CheckPasswordProps) => {
  const mutation = useMutation({
    mutationFn: checkPassword,
    onSuccess: () => {
      onSuccess();
    },
    onError: (error: Error) => {
      alert(error.message);
    }
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    mutation.mutate({ password });
  };

  return (
    <form className="flex flex-col border-2" onSubmit={onSubmit}>
      <PasswordInput />
      <button type="submit" className="primary-btn mt-4 p-6 text-14 md:p-7 md:text-16" disabled={mutation.isPending}>
        {mutation.isPending ? "확인 중..." : "확인"}
      </button>
    </form>
  );
};
