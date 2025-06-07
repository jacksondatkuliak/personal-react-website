import "./main.css";

const containerStyle = {
  width: "80vw",
  margin: "3vh auto 0 auto",
  zIndex: 1,
  overflow: "hidden",
};

/**
 * Contact page
 * @returns page content
 */
function Contact() {
  return (
    <>
      <div style={containerStyle}>
        <h2>Contact Me</h2>
        <p>
          If you have data acquisition requests, questions, or need to contact
          me for some reason feel free to reach out through my{" "}
          <a
            href="https://discordapp.com/users/176162318835646465"
            className="text-link"
            target="_blank"
            rel="noopener"
          >
            discord
          </a>{" "}
          (username jdat) or email me at jdatastro@gmail.com
        </p>
        <h2>About My Data</h2>
        <p>
          My data comes from a combination of the different telescope setups I
          have had over the course of my AP journey. If you would like any of my
          data, please reach out to me through my discord and I will send it!
        </p>
        <p>
          <a
            href="/processes.xpsm"
            className="text-link"
            target="_blank"
            rel="noopener"
          >
            PixInsight Icons Download
          </a>
        </p>
      </div>
    </>
  );
}

export default Contact;
