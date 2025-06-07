import "./main.css";
import ImageContainer from "./components/ImageContainer";

function Home() {
  return (
    <>
      {/** page container div */}
      <div
        style={{
          width: "100%",
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
          }}
        >
          <ImageContainer
            image={"images/m45.jpg"}
            name={"M45 - Pleiades"}
            imageLink={"https://www.astrobin.com/2p28qh/"}
            int_time={"3 hours"}
            camera={"ASI 294MM Pro"}
            fl={"335mm f/4.7"}
            mount={"Skywatcher HEQ5 Pro"}
            filters={"ZWO LRGB"}
            date={"11/2/2024"}
          />
          <div>
            <ImageContainer
              image={"images/heartsho.jpg"}
              name={"IC1805 - Heart Nebula"}
              imageLink={"https://www.astrobin.com/ducxvr/"}
              int_time={"8 hours"}
              camera={"ASI 294MM Pro"}
              fl={"335mm f/4.7"}
              mount={"Skywatcher HEQ5 Pro"}
              filters={"Antlia EDGE 4.5nm SHO"}
              date={"9/14/2024"}
            />
            <ImageContainer
              image={"images/ngc7822sho.jpg"}
              name={"NGC7822"}
              imageLink={"https://www.astrobin.com/t6j5zl/"}
              int_time={"5 hours"}
              camera={"ASI 1600MM Pro"}
              fl={"335mm f/4.7"}
              mount={"Skywatcher HEQ5 Pro"}
              filters={"Antlia EDGE 4.5nm SHO"}
              date={"9/8/2024"}
            />
            <ImageContainer
              image={"images/ngc7331.jpg"}
              name={"NGC7331 group, Stephan's Quintet"}
              imageLink={"https://www.astrobin.com/a8m48s/"}
              int_time={"2.5 hours"}
              camera={"ASI 1600MM Pro"}
              fl={"335mm f/4.7"}
              mount={"Skywatcher HEQ5 Pro"}
              filters={"ZWO LRGB"}
              date={"9/1/2024"}
            />
            <ImageContainer
              image={"images/california.jpg"}
              name={"NGC1499 - California Nebula"}
              imageLink={"https://www.astrobin.com/tj9few/"}
              int_time={"1.5 hours"}
              camera={"ASI 1600MM Pro"}
              fl={"335mm f/4.7"}
              mount={"Skywatcher HEQ5 Pro"}
              filters={"ZWO LRGB"}
              date={"8/14/2024"}
            />
            <ImageContainer
              image={"images/2024nan.jpg"}
              name={"NGC7000 - North America Nebula"}
              imageLink={"https://www.astrobin.com/nezuoe/"}
              int_time={"18.5 hours"}
              camera={"Modded Canon Rebel T7i"}
              fl={"200mm f/4"}
              mount={"Explore Scientific iEXOS100-2"}
              filters={"ZWO LRGB"}
              date={"7/26/2024-8/10/2024"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
