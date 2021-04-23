import Link from "next/Link";

export default function BlogHeader({ user, data }) {
  return (
    <div className="blog__header-container">
      <div className="blog__header">
        <div className="profile">
          {/* <Link to="/">
                  <h1>Category</h1>
                </Link> */}
        </div>
        <div className="header__actions">
          {user && user.uid === data.postedBy && (
            <Link href={`editor.scinuggets.com/${data.slug}/edit`}>
              <a>
                <button>Edit</button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
