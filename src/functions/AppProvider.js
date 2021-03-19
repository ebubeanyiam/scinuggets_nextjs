import server from "../firebase/config";

// Get current time for homepage
export const getTime = () => {
  const hours = new Date().getHours();

  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 16) {
    return "Good Afternoon";
  } else {
    return "Good evening";
  }
};

// Fetch user data for user context
export const getUserData = async (user) => {
  let data;

  await server
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      if (doc.data()) {
        data = doc.data();
      }
    });

  return data;
};

// Send Email Verification
export const resendEmail = () => {
  server
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      alert("Email sent");
    })
    .catch((e) => {
      alert("Error", e.message);
    });
};
