 
import { FcGoogle } from "react-icons/fc"; 
import useAuth from "../CustomHook/useAuth";

const SocialLogin = () => {
  const { logInGoogle } = useAuth();
  const handlerGoogleLogin = () => {
    logInGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="text-center">
      <div className="divider">OR</div>
      <div className="flex items-center justify-center">
        <button onClick={handlerGoogleLogin} className="text-4xl">
          {" "}
          <FcGoogle></FcGoogle>
        </button>
      </div> 
    </div>
  );
};

export default SocialLogin;
