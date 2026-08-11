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
  t,    // 번역 객체
}) {
  return (
    <>
      <Input
        label={t.nameLabel}
        name="name"
        type="text"
        icon={<img src={userIcon} alt="" width={14} height={14} />}
        placeholder={t.namePlaceholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label={t.emailLabel}
        name="email"
        type="email"
        icon={<img src={mailIcon} alt="" width={14} height={14} />}
        placeholder={t.emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label={t.passwordLabel}
        name="password"
        type="password"
        icon={<img src={lockIcon} alt="" width={14} height={14} />}
        placeholder={t.passwordPlaceholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label={t.companyNameLabel}
        name="companyName"
        type="text"
        icon={<img src={buildingIcon} alt="" width={14} height={14} />}
        placeholder={t.companyNamePlaceholder}
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </>
  );
}