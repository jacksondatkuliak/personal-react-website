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
          <div
            style={{
              display: "flex",
              marginRight: "3vw",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
            }}
          >
            <p>
              <NavLink
                to="/blog/acquisition"
                style={{
                  paddingRight: "30px",
                  fontSize: window.innerWidth < 768 ? "1.25em" : "1.5em",
                  lineHeight: window.innerWidth < 768 ? "0.5em" : "1.4em",
                  whiteSpace: "nowrap",
                }}
                className="blog-link"
              >
                What is AP: Image Acquisition
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{
                  paddingRight: "30px",
                  fontSize: window.innerWidth < 768 ? "1.25em" : "1.5em",
                  lineHeight: window.innerWidth < 768 ? "0.5em" : "1.4em",
                }}
                className="blog-link"
                to="/blog/processing"
              >
                What is AP: Image Processing
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{
                  fontSize: window.innerWidth < 768 ? "1.25em" : "1.5em",
                  lineHeight: window.innerWidth < 768 ? "0.5em" : "1.4em",
                }}
                className="blog-link"
                to="/blog/resources"
              >
                Beginner Resources
              </NavLink>
            </p>
          </div>
        </div>
        <div>
          <p
            style={{
              paddingTop: "20px",
              textAlign: "center",
              fontSize: "1.2em",
            }}
          >
            Welcome to my blog page! Click on the links at the top to read an
            article.
          </p>
        </div>
        <div style={{ paddingTop: "20px", fontSize: "1.1em" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Blog;
