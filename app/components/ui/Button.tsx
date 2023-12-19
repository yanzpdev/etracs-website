import { FaPlay } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

interface ButtonProps {
  onClick: () => void;
  btnText: string;
  compName: string;
  btnStyle: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, btnText, compName, btnStyle }) => {
  return (
    <button className={btnStyle} onClick={onClick}>
      {compName === 'home' ? <FaPlay /> : null}
      {compName === 'solutions' ? <FaPlay /> : null}
      {compName === 'solutionsvid' ? <FaPlay /> : null}
      {compName === 'google' ? <FcGoogle className='my-auto text-[#0866ff]' size={25}/> : null}
      {compName === 'facebook' ? <FaFacebook className='my-auto text-[#0866ff]' size={25}/> : null}
      {btnText}
    </button>
  );
};

export default Button;
