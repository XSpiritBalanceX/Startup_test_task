import { collectionIconsClassName } from "../utility/IconsClassName";

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  const iconClassName = collectionIconsClassName.find((el) => el.name === name);
  return <i className={iconClassName?.classname}></i>;
};

export default Icon;
