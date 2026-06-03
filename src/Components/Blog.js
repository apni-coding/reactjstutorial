import { useState, useRef, useEffect } from "react";
import { db } from "../firebaseInit";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

export default function Blog() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    // async function fetchData() {
    //   const snapShot = await getDocs(collection(db, "blogs"));
    //   //       snapShot.forEach((doc) => {
    //   //   // doc.data() is never undefined for query doc snapshots
    //   //   console.log(doc.id, " => ", doc.data());
    //   // });
    //   const blogs = snapShot.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.data(),
    //     };
    //   });
    //   setBlogs(blogs);
    // }
    // fetchData();
    const blogs = onSnapshot(collection(db, "blogs"), (snapShot) => {
      const blogs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setBlogs(blogs);
    });
  }, []);

  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "No blog";
    }
  }, [blogs]);

  async function handleSubmit(e) {
    e.preventDefault();
    // setBlogs([
    //   {
    //     title: formData.title,
    //     content: formData.content,
    //   },
    //   ...blogs,
    // ]);
    await addDoc(collection(db, "blogs"), {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });
    // setTitle('');
    // setContent('');
    setFormData({ title: "", content: "" });
    titleRef.current.focus();
  }

  const removeBlog = (i) => {
    const filterBlogs = blogs.filter((blog, index) => i !== index);
    setBlogs(filterBlogs);
  };

  return (
    <>
      <h1>Write a Blog!</h1>

      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({ content: e.target.value, title: formData.title })
              }
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      <h2> Blogs </h2>
      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <div className="blog-btn">
            <button className="btn remove" onClick={() => removeBlog(i)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
