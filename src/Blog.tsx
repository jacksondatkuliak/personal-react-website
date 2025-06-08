import "./main.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

const containerStyle = {
  width: "90vw",
  margin: "1vh auto 1vh auto",
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
            <NavLink
              className="text-link-alt blogTopLink"
              style={{ fontSize: "1.5rem" }}
              to="/blog"
            >
              Blog
            </NavLink>
          </h4>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              marginRight: "3vw",
            }}
          >
            <h3>
              <NavLink
                to="/blog/acquisition"
                style={{
                  paddingRight: "30px",
                  marginLeft: "auto",
                }}
                className="blogLink"
              >
                What is AP: Image Acquisition
              </NavLink>
            </h3>
            <h3>
              <NavLink
                style={{ paddingRight: "30px" }}
                className="blogLink"
                to="/blog/processing"
              >
                What is AP: Image Processing
              </NavLink>
            </h3>
            <h3>
              <NavLink className="blogLink" to="/blog/resources">
                Beginner Resources
              </NavLink>
            </h3>
          </div>
        </div>
        <div>
          <p
            style={{
              paddingTop: "20px",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            Welcome to my blog page! Click on the links at the top to read an
            article.
          </p>
        </div>
        <div style={{ paddingTop: "20px", fontSize: "1.1rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Blog;
