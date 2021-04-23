import server from "../../firebase/config";
import slugify from "slugify";

export const saveDraft = async (props, title) => {
  props.setSaving(true);
  const savedData = await props.instanceRef.current.save();
  if (props.draftId) {
    server
      .firestore()
      .collection("drafts")
      .add({
        title,
        savedData,
        author: props.user.uid,
      })
      .then((res) => {
        props.setSaving(false);
        props.setDraftId(res.id);
        // window.history.pushState({}, "", `/drafts/${res.id}`);
      });
  } else {
    server
      .firestore()
      .collection("drafts")
      .doc(props.draftId)
      .set({
        title,
        savedData,
        author: props.user.uid,
      })
      .then(() => {
        props.setSaving(false);
      });
  }
};

export const saveArticle = async (
  user,
  props,
  title,
  subtitle,
  tags,
  file,
  p,
  draftId
) => {
  p(true);
  let featuredImage = null;
  let authorName = "";
  let authorImage = "";

  const saveData = async () => {
    const slugifyRes = slugify(title, {
      lower: true,
    });
    const slug = `${slugifyRes}-${props.draftId}`;
    const savedData = await props.instanceRef.current.save();

    await db
      .collection("posts")
      .doc(slug)
      .set({
        authorName,
        authorImage,
        edited: false,
        lastEdited: null,
        title,
        subtitle,
        slug,
        savedData,
        timestamp,
        postedBy: user.uid,
        featuredImage,
        featuredImageIsSet: featuredImage ? true : false,
        tags,
        likes: {
          count: 0,
          liked_by: [],
        },
        comments: {
          count: 0,
          comments: [],
        },
        saved: {
          count: 0,
          saved_by: [],
        },
        draftId,
        postViews: 0,
      })
      .then((res) => {
        window.location.replace(`/${slug}`);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  await db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      if (doc.data()) {
        authorName = doc.data().displayName;
        authorImage = doc.data().photoUrl;
      }
    });

  if (file) {
    store
      .ref(file.name)
      .put(file)
      .then(async (snapshot) => {
        await snapshot.ref.getDownloadURL().then((res) => {
          featuredImage = res;
        });
        saveData();
      });
  } else {
    saveData();
  }
};

export const addFeaturedImage = (e, setFile, setPostImage) => {
  const types = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/svg",
    "image/webp",
  ];

  let selectedFile = e.target.files[0];

  if (selectedFile && types.includes(selectedFile.type)) {
    const reader = new FileReader();
    reader.onload = () => {
      setFile(selectedFile);
      setPostImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  } else {
    alert("File type not supported");
  }
};

export const editorImageFile = async (file) => {
  let response;

  await server
    .storage()
    .ref(file.name)
    .put(file)
    .then(async (snapshot) => {
      await snapshot.ref.getDownloadURL().then((res) => {
        response = res;
      });
    });

  return {
    success: 1,
    file: {
      url: response,
    },
  };
};

export const editorImageUrl = async (url) => {
  return {
    success: 1,
    file: {
      url: url,
    },
  };
};
