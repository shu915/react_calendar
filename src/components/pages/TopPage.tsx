import { PrimaryBtn } from "../atoms/PrimaryBtn"
import { useNavigate } from "react-router-dom";
export const TopPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }
  return (
      <div className="text-center">
      <h1 className="text-7xl logo">スケジュール管理APP</h1>
      <p className="pt-[10vh] text-5xl">お互いのスケジュールを管理するアプリです</p>

      <div className="pt-[20vh]">
          <PrimaryBtn onClick={handleLogin} size="lg">ログイン</PrimaryBtn>
      </div>
      </div>
  )
}
