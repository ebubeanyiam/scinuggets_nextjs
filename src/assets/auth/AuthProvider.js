import server from "../../firebase/config";

export const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const authFunction = (provider) => {
  server
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      if (res.additionalUserInfo.isNewUser) {
        db.collection("registeredEmails").doc(res.user.email).set({
          userID: res.user.uid,
        });
        server.firestore().collection("users").doc(res.user.uid).set({
          displayName: res.user.displayName,
          bio: "",
          username: "",
          photoUrl: res.user.photoURL,
          website: "",
          timestamp,
        });
      }
    });
};

export const mailAuthFunction = (email, password, setLoading, setE, status) => {
  setLoading(true);

  if (status === "Login") {
    server
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          setLoading(false);
          return;
        }
      })
      .catch((e) => {
        setLoading(false);
        setE(e.message);
      });
  } else {
    server
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        if (res) {
          await server
            .firestore()
            .collection("registeredEmails")
            .doc(email)
            .set({
              userID: res.user.uid,
            });
          await server.firestore().collection("users").doc(res.user.uid).set({
            displayName: "",
            bio: "",
            username: "",
            photoUrl: "",
            website: "",
            timestamp,
          });
          if (res.additionalUserInfo.isNewUser) {
            server
              .auth()
              .currentUser.sendEmailVerification()
              .then(() => {
                console.log("Email sent");
              })
              .catch((e) => console.log(e));
          }
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        setE(`Error: ${e.message}`);
      });
  }
};

export const checkEmail = async (props) => {
  props.setLoading(true);
  if (props.emailLoginValue.match(validEmail)) {
    const emailRef = server
      .firestore()
      .collection("registeredEmails")
      .doc(props.emailLoginValue);
    if (props.status === "Sign up") {
      emailRef.get().then((res) => {
        if (res.exists) {
          props.setErrorMessage("That email is already registered");
          props.setLoading(false);
          return;
        } else {
          props.setLoginStep(1);
          props.setLoading(false);
          props.setErrorMessage("");
          props.setEnterPassword(true);
          props.setFormSubHeading("Create a new password for your account");
        }
      });
    }
    if (props.status === "Login") {
      emailRef.get().then((res) => {
        if (res.exists) {
          props.setLoginStep(1);
          props.setLoading(false);
          props.setErrorMessage("");
          props.setEnterPassword(true);
          props.setFormSubHeading(
            "Enter the password associated with your account"
          );
          return;
        } else {
          props.setLoading(false);
          props.setErrorMessage("Email isn't registered");
        }
      });
    }
  } else {
    props.setLoading(false);
    props.setErrorMessage(
      props.emailLoginValue.length < 1
        ? "You haven't typed in an Email"
        : "Invalid Email"
    );
  }
};

export const checkPassword = (props) => {
  if (props.status === "Sign up") {
    if (!props.passwordLoginValue.match(validPassword)) {
      props.setErrorMessage(
        "Password must be at least 8 characters and contain an uppercase letter, lowercase letter and a number "
      );
    } else {
      props.setErrorMessage("");
    }
  }
};
