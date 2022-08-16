import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import { updatePost, getPost } from "../../services/posts.js";
import { useNavigate, useParams } from "react-router-dom";

export default function PostEdit({ user, setToggle }) {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  let navigate = useNavigate();
  let { post_id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      let response = await getPost(post_id);
      setFormData({
        title: response.post.title,
        body: response.post.body,
      });
    };
    fetchPost();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(formData, post_id);
    setToggle((prev) => !prev);
    navigate("/myprofile");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout user={user}>
      <div className="post-screen-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Content"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          <button type="submit" className="">
            Update
          </button>
        </form>
      </div>
    </Layout>
  );
}
