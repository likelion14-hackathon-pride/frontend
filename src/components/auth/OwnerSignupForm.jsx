import Input from "./ui/Input";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import lockIcon from "../../assets/icons/lock.svg";
import buildingIcon from "../../assets/icons/building.svg";


export default function OwnerSignupForm({
  name, setName,
  email, setEmail,
  password, setPassword,
  companyName, setCompanyName,
}) {
  return (
    <>
      <Input
        label="이름"
        name="name"
        type="text"
        icon={<img src={userIcon} alt="" width={14} height={14} />}
        placeholder="예: 김민수"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="업무용 이메일"
        name="email"
        type="email"
        icon={<img src={mailIcon} alt="" width={14} height={14} />}
        placeholder="daepyo@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="비밀번호"
        name="password"
        type="password"
        icon={<img src={lockIcon} alt="" width={14} height={14} />}
        placeholder="8자 이상"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label="회사 이름"
        name="companyName"
        type="text"
        icon={<img src={buildingIcon} alt="" width={14} height={14} />}
        placeholder="예: 에코랩"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </>
  );
}