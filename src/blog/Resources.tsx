import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Useful resources for beginners starting AP
 * @returns Resources blog post
 */
function Resources() {
  return (
    <>
      <p>Written by Jackson Datkuliak, last updated 6/1/2025</p>
      <p>
        There is a significant amount of information I left out of the beginner
        articles to try and keep it (somewhat) reasonable for an average person
        to read and learn about astrophotography. If you have any questions or
        would like to learn more, you can reach out to me through my discord!
        I’d be happy to answer any questions. I would also like to list some
        great beginner resources to learn about astrophotography. This hobby is
        incredibly deep, and if you are truly interested in taking it on, having
        some good learning resources will be absolutely necessary. One of the
        biggest sources of learning for me was through watching YouTube videos.
        I will warn you, there are a lot of people on YouTube that have
        absolutely no idea what they are talking about. I will list some
        YouTubers that I believe have good, informative videos for beginners. I
        am NOT endorsing everything these guys say, but I can definitely say
        they have all had a big impact on my astrophotography journey.
      </p>
      <p>
        <a
          href="https://www.youtube.com/@NebulaPhotos"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Nico Carver, Nebula Photos
        </a>{" "}
        creates fantastic beginner and budget friendly tutorials
      </p>
      <p>
        <a
          href="https://www.youtube.com/@AstroBackyard"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Trevor Jones, AstroBackyard
        </a>{" "}
        creates fun, cinematic tutorials and reviews
      </p>
      <p>
        <a
          href="https://www.youtube.com/@CuivTheLazyGeek"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Cuiv, The Lazy Geek
        </a>{" "}
        creates in-depth, information dense videos that cover complex
        astrophotography topics
      </p>
      <p>
        Alongside YouTube content, there are also some very handy guides made by
        community members
      </p>
      <p>
        <a
          href="https://www.nightphotons.com/guides/"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Charles Hagen's Guides
        </a>{" "}
        are some of the best for narrowband processing and multiscale gradient
        removal
      </p>
      <p>
        If you like diving into the documentation, there is also good
        documentation for most of the common astrophotography related programs.
      </p>
      <p>
        <a
          href="https://pixinsight.com.ar/index.php?a=home&i=en"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Official PixInsight Resources
        </a>
      </p>
      <p>
        <a
          href="https://siril.org/docs/"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Siril Documentation
        </a>
      </p>
      <p>
        <a
          href="https://nighttime-imaging.eu/docs/master/site/"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          NINA Documentation
        </a>
      </p>
      <p>
        <a
          href="https://openphdguiding.org/documentation/"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          PHD2 Documentation
        </a>
      </p>
      <p>
        I always recommend people try processing other's data, so in addition to
        some of the discord servers listed below having data sharing channels,
        you can find free data to process at these links
      </p>
      <p>
        <a
          href="https://data.bortle.org/"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Bortle.org
        </a>
      </p>
      <p>
        <a
          href="https://datasets.miscellaneousnerdery.com/"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Damen's Datasets
        </a>
      </p>
      <p>
        <a
          href="https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          MAST: Barbara A. Mikulski Archive for Space Telescopes
        </a>
      </p>
      <p>
        You will inevitably find yourself with lots of questions and no answers,
        so here are some discord servers where you can ask more experienced
        astrophotographers specific questions about anything
      </p>
      <p>
        <a
          href="https://discord.gg/astronomy"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Observational Astronomy
        </a>
      </p>
      <p>
        <a
          href="https://discord.gg/friendlycosmos"
          className="text-link-alt"
          target="_blank"
          rel="noopener"
        >
          Friendly Cosmos
        </a>
      </p>
      <p>
        And finally, heres a few more pictures I didn't know where else to put
        on in the blog. I hope you like my cat.
      </p>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        <img
          src="/images/blog/resources/noah1.jpeg"
          className="image-with-border "
        />
        <img
          src="/images/blog/resources/noah2.jpeg"
          className="image-with-border"
        />
        <img src="/images/blog/resources/untracked.jpeg" className="image-with-border" />
      </div>
    </>
  );
}

export default Resources;
