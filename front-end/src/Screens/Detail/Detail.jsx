import Layout from "../../Components/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/posts.js";
import { createComment } from "../../services/comments.js";

export default function Detail({ user, toggle, setToggle }) {
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({
    body: "",
  });

  let { post_id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      let response = await getPost(post_id);
      setPost(response);
    };
    fetchPost();
  }, [toggle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await createComment(formData, post_id)
    setToggle(prev => !prev)
  };

  if (!post) return <h1>loading...</h1>;

  return (
    <Layout user={user}>
      <div className="detail-container">
        <h1>{post.post.title}</h1>
        <h3>{post.post.body}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write a comment"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
        {post.comments.length ?
          post.comments.map((comment) => (
            <div>
              <h4>{comment.body}</h4>
              <p>{comment.user}</p>
            </div>
          )):null}
      </div>
    </Layout>
  );
}
