import "../main.css";

type Props = {
  image: string; // url to image to display
  name: string; // target name
  imageLink: string; // link to full resolution image (usually on astrobin)
  int_time: string; // integration time
  camera: string; // camera model
  fl: string; // focal length/ratio
  mount: string; // mount
  filters: string; // filters
  date: string; // date
};

const image_style = { width: "60%", padding: "0%" };
const name_style = {
  paddingTop: "10px",
  marginBottom: "0px",
  fontSize: "125%",
};
const text_style = { margin: 0, fontSize: "115%" };
const div_style = { padding: "20px" };
/**
 * Creates image container to render on main page
 *
 * @param props Contains metadata
 */
function ImageContainer(props: Props) {
  return (
    <>
      <div style={div_style}>
        <img
          src={props.image}
          className="image-with-border"
          style={image_style}
        ></img>
        <p style={name_style}>
          <a
            href={props.imageLink}
            className="text-link"
            target="_blank"
            rel="noopener"
          >
            {props.name}
          </a>
        </p>
        <p style={text_style}>
          Total Integration Time: <b>{props.int_time}</b>
          <br />
          Camera: <b>{props.camera}</b>
          <br />
          Focal Length: <b>{props.fl}</b>
          <br />
          Mount: <b>{props.mount}</b>
          <br />
          Filters: <b>{props.filters}</b>
          <br />
          Date: <b>{props.date}</b>
        </p>
      </div>
    </>
  );
}

export default ImageContainer;
