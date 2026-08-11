import Input from "./ui/Input";
import userIcon from "../../assets/icons/user.svg";
import mailIcon from "../../assets/icons/mail.svg";
import lockIcon from "../../assets/icons/lock.svg";
import buildingIcon from "../../assets/icons/building.svg";
import keyIcon from "../../assets/icons/key.svg";


export default function MemberSignupForm({
  name, setName,
  email, setEmail,
  password, setPassword,
  inviteCode, setInviteCode,
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
        label="회사 코드"
        name="inviteCode"
        type="text"
        icon={<img src={keyIcon} alt="" width={14} height={14} />}
        placeholder="ECHO-4821"
        hint="대표님에게 받은 코드를 입력하세요."
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
      />
    </>
  );
}