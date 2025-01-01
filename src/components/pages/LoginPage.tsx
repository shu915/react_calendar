import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from "../atoms/Input";
import { LoginInfo } from "../../types/login";
import { useState, FormEvent } from "react";
import { login } from "../../api/login";

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });


  const changeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  }

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const result = login(loginInfo);
      console.log(result);
    } catch {
      setErrorMessage("ログインに失敗しました");
    }
}

  return (
    <div className="w-[500px] bg-white rounded-lg p-10">
      <form className="flex flex-col justify-center items-center gap-10" onSubmit={handleLogin}>

        <h1 className="text-3xl text-lime-800 font-bold text-center">ログイン</h1>
        {errorMessage && <p className="p-5 bg-red-500 text-white w-[80%] rounded-lg">{errorMessage}</p>}
      <div className="w-[80%]">
        <Input type="email" placeholder="メールアドレス" name="email" value={loginInfo.email} onChange={changeLoginInfo} />
      </div>
      <div className="w-[80%]">
        <Input type="password" placeholder="パスワード" name="password" value={loginInfo.password} onChange={changeLoginInfo} />
      </div>
          <PrimaryBtn onClick={() => null}>ログイン</PrimaryBtn>
      </form>
    </div>
  );
};

