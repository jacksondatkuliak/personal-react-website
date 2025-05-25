import "./main.css";
import ImageContainer from "./components/ImageContainer";

const Home = () => {
  return (
    <>
      {/** page container div */}
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "1%",
        }}
      >
        {/** top text div */}
        <div
          className="text-body"
          style={{ width: "100%", textAlign: "center" }}
        >
          <p>
            Processing done with PixInsight/Siril/Photoshop. I also use the
            RC-Astro plugins for PixInsight, including BlurXTerminator.
          </p>
          <p>Click the name of the object to see full resolution images</p>
        </div>
        {/** ImageContainer divs */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingTop: "1%",
            paddingBottom: "1%",
          }}
        >
          <ImageContainer
            image={"src/images/m45.jpg"}
            name={"M45 - Pleiades"}
            imageLink={"https://www.astrobin.com/2p28qh/"}
            int_time={"3 hours"}
            camera={"ASI 294MM Pro"}
            fl={"335mm f/4.7"}
            mount={"Skywatcher HEQ5 Pro"}
            filters={"ZWO LRGB"}
            date={"11/2/2024"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
