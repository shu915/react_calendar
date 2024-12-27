import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";

export const LoginPage = () => {
  return (
    <div className="w-[500px] bg-white rounded-lg p-10">
      <form className="flex flex-col justify-center items-center gap-10">

      <h1 className="text-3xl text-lime-800 font-bold text-center">ログイン</h1>
      <div className="w-[80%]">
        <Input type="email" placeholder="メールアドレス" />
      </div>
      <div className="w-[80%]">
        <Input type="password" placeholder="パスワード" />
      </div>
      <div className="w-[80%]">
        <PrimaryBtn>ログイン</PrimaryBtn>
      </div>
      </form>
    </div>
  );
};

