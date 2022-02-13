import { authService } from "../firebaseService";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function AuthSocial() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
  };

  return (
    <div>
      <button name="google" onClick={onSocialClick}>
        Continue with Google
      </button>
      <button name="github" onClick={onSocialClick}>
        Continue with Github
      </button>
    </div>
  );
}
export default AuthSocial;