import axios from "axios";

type RefreshResponseProps = {
  accessToken: string;
};

export async function refresh(): Promise<RefreshResponseProps> {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/refresh`);
    return Promise.resolve(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response);
        return Promise.reject(new Error("리프레시 토큰 에러"));
      }
    }
    if (error instanceof Error) {
      console.error(error);
      alert(error.message);
    }
    console.error("An unexpected error occurred:", error);
    alert("An unexpected error occurred");
    return Promise.reject(error);
  }
}
