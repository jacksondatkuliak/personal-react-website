import "./main.css";
import { Outlet } from "react-router";
function Blog() {
  return (
    <>
      <div
        style={{
          width: "90%",
          paddingTop: "1%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <h3>Blog</h3>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              paddingRight: "30px",
            }}
          >
            <h3>
              <a
                className="text-link"
                href="/blog/acquisition"
                style={{
                  fontSize: "80%",
                  paddingRight: "30px",
                  marginLeft: "auto",
                }}
              >
                What is AP: Image Acquisition
              </a>
            </h3>
            <h3>
              <a
                style={{ fontSize: "80%", paddingRight: "30px" }}
                className="text-link"
                href="/blog/processing"
              >
                What is AP: Image Processing
              </a>
            </h3>
            <h3>
              <a
                className="text-link"
                href="/blog/resources"
                style={{ fontSize: "80%" }}
              >
                Beginner Resources
              </a>
            </h3>
          </div>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Blog;
