import "./main.css";
import { Outlet } from "react-router";

const containerStyle = {
  width: "90vw",
  margin: "1vh auto 0 auto",
};

/**
 * Renders skeleton for blog. <Outlet /> renders individual blog posts.
 * @returns blog content
 */
function Blog() {
  return (
    <>
      <div style={containerStyle}>
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: "3vw" }}>
            <a className="text-link" href="/blog">
              Blog
            </a>
          </h4>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              marginRight: "3vw",
            }}
          >
            <h3>
              <a
                className="text-link-alt"
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
                className="text-link-alt"
                href="/blog/processing"
              >
                What is AP: Image Processing
              </a>
            </h3>
            <h3>
              <a
                className="text-link-alt"
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
