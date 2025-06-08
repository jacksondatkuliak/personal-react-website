import "./main.css";
import ImageContainer from "./components/ImageContainer";
import { useEffect, useRef, useState } from "react";

// Images
const images = [
  {
    image: "images/m45.jpg",
    name: "M45 - Pleiades",
    imageLink: "https://www.astrobin.com/2p28qh/",
    int_time: "3 hours",
    camera: "ASI 294MM Pro",
    fl: "335mm f/4.7",
    mount: "Skywatcher HEQ5 Pro",
    filters: "ZWO LRGB",
    date: "11/2/2024",
  },
  {
    image: "images/heartsho.jpg",
    name: "IC1805 - Heart Nebula",
    imageLink: "https://www.astrobin.com/ducxvr/",
    int_time: "8 hours",
    camera: "ASI 294MM Pro",
    fl: "335mm f/4.7",
    mount: "Skywatcher HEQ5 Pro",
    filters: "Antlia EDGE 4.5nm SHO",
    date: "9/14/2024",
  },
  {
    image: "images/ngc7822sho.jpg",
    name: "NGC7822",
    imageLink: "https://www.astrobin.com/t6j5zl/",
    int_time: "5 hours",
    camera: "ASI 1600MM Pro",
    fl: "335mm f/4.7",
    mount: "Skywatcher HEQ5 Pro",
    filters: "Antlia EDGE 4.5nm SHO",
    date: "9/8/2024",
  },
  {
    image: "images/ngc7331.jpg",
    name: "NGC7331 group, Stephan's Quintet",
    imageLink: "https://www.astrobin.com/a8m48s/",
    int_time: "2.5 hours",
    camera: "ASI 1600MM Pro",
    fl: "335mm f/4.7",
    mount: "Skywatcher HEQ5 Pro",
    filters: "ZWO LRGB",
    date: "9/1/2024",
  },
  {
    image: "images/california.jpg",
    name: "NGC1499 - California Nebula",
    imageLink: "https://www.astrobin.com/tj9few/",
    int_time: "1.5 hours",
    camera: "ASI 1600MM Pro",
    fl: "335mm f/4.7",
    mount: "Skywatcher HEQ5 Pro",
    filters: "ZWO HO",
    date: "8/14/2024",
  },
  {
    image: "images/2024nan.jpg",
    name: "NGC7000 - North America Nebula",
    imageLink: "https://www.astrobin.com/nezuoe/",
    int_time: "18.5 hours",
    camera: "Modded Canon Rebel T7i",
    fl: "200mm f/4",
    mount: "Explore Scientific iEXOS100-2",
    filters: "ZWO LRGB",
    date: "7/26/2024-8/10/2024",
  },
  {
    image: "images/rc6trunk.jpg",
    name: "IC1396 - Elephant's Trunk",
    imageLink: "https://www.astrobin.com/14boq6/",
    int_time: "3.5 hours",
    camera: "ASI 533MC Pro",
    fl: "940mm f/6.2",
    mount: "Skywatcher HEQ5 Pro",
    filters: "SVBony UVIR Cut",
    date: "7/31/2024",
  },
  {
    image: "images/nanbowshock.jpg",
    name: "NGC7000 - Bow Shock",
    imageLink: "https://www.astrobin.com/pbrhcw/",
    int_time: "4 hours",
    camera: "ASI 533MC Pro",
    fl: "940mm f/6.2",
    mount: "Skywatcher HEQ5 Pro",
    filters: "SVBony SV220(Ha+Oiii)",
    date: "7/15/2024-7/18/2024",
  },
  {
    image: "images/cygnus.jpg",
    name: "Cygnus Widefield",
    imageLink: "https://www.astrobin.com/w3seic/",
    int_time: "11.75 hours",
    camera: "Modded Canon Rebel T7i",
    fl: "50mm f/4",
    mount: "Explore Scientific iEXOS100-2",
    filters: "Astronomik Clip In UVIR Cut",
    date: "6/9/2024-6/12/2024",
  },
  {
    image: "images/sadrreflection.jpg",
    name: "vDb131 - Sadr Region Reflection 2x1 Mosaic",
    imageLink: "https://www.astrobin.com/4aovne/",
    int_time: "10.65 hours",
    camera: "ASI 533MC Pro",
    fl: "940mm f/6.2",
    mount: "Skywatcher HEQ5 Pro",
    filters: "SVBony UVIR Cut",
    date: "6/9/24-6/14/24",
  },
  {
    image: "images/ngc6992.jpg",
    name: "NGC6992 - Witch's Broom",
    imageLink: "https://www.astrobin.com/j18cq4/",
    int_time: "1.5 hours",
    camera: "ASI 533MC Pro",
    fl: "940mm f/6.2",
    mount: "Skywatcher HEQ5 Pro",
    filters: "SVBony SV220(Ha+Oiii)",
    date: "6/25/2024",
  },
  {
    image: "images/m101.jpg",
    name: "M101 - Pinwheel Galaxy",
    imageLink: "https://www.astrobin.com/or427v/",
    int_time: "5.3 hours RGB 2.5 hours HA",
    camera: "ASI 533MC Pro",
    fl: "940mm f/6.2",
    mount: "Skywatcher HEQ5 Pro",
    filters: "SVBony UVIR Cut, SVBony SV220(Ha+Oiii)",
    date: "5/15/2024-5/27/2024",
  },
  {
    image: "images/m63.jpg",
    name: "M63 - Sunflower Galaxy",
    imageLink: "https://www.astrobin.com/ssoho7/",
    int_time: "2 hours",
    camera: "ASI 533 MC Pro",
    fl: "940mm f/6.2",
    mount: "Skywatcher HEQ5 Pro",
    filters: "SVBony UVIR Cut",
    date: "5/11/2024",
  },
  // Beehive Cluster commented out
  {
    image: "images/virgostarry.jpg",
    name: "Virgo Supercluster",
    imageLink: "https://www.astrobin.com/37rngo/",
    int_time: "2.5 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "Explore Scientific iEXOS100-2",
    filters: "SVBony UVIR Cut",
    date: "3/11/24",
  },
  {
    image: "images/ic2169.jpg",
    name: "IC2169 - Dreyers Nebula",
    imageLink: "https://www.astrobin.com/1qe7mr/",
    int_time: "2.6 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "SkyWatcher HEQ5 Pro",
    filters: "SVBony UVIR Cut",
    date: "12/11/2023",
  },
  {
    image: "images/ngc6960.jpg",
    name: "Veil Nebula (Cygnus Loop)",
    imageLink: "https://www.astrobin.com/ovand5/",
    int_time: "9.45 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "SkyWatcher HEQ5 Pro",
    filters: "SVBony SV220(Ha+Oiii)",
    date: "9/30/2023-10/1/2023",
  },
  {
    image: "images/ic410.jpg",
    name: "IC410 - Tadpoles Nebula",
    imageLink: "https://www.astrobin.com/ld8rvz/",
    int_time: "7.5 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "SkyWatcher HEQ5 Pro",
    filters: "SVBony SV220(Ha+Oiii)",
    date: "9/30/2023-10/1/2023",
  },
  {
    image: "images/m33.jpg",
    name: "M33 - Triangulam Galaxy",
    imageLink: "https://www.astrobin.com/e8fe23/",
    int_time: "7.3 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "SkyWatcher EQ5 Pro",
    filters: "SVBony UVIR Cut",
    date: "8/19/2023 - 9/10/2023",
  },
  {
    image: "images/vdb139.jpg",
    name: "vdB139/141 - Iris/Ghost Nebulae",
    imageLink: "https://www.astrobin.com/q35btn/",
    int_time: "14 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "SkyWatcher EQ5 Pro",
    filters: "SVBony UVIR Cut",
    date: "8/12/2023-9/15/2023",
  },
  {
    image: "images/m31.jpg",
    name: "M31 - Andromeda Galaxy",
    imageLink: "https://www.astrobin.com/npgb4k/",
    int_time: "5 hours",
    camera: "ASI 533MC Pro",
    fl: "200mm f/4",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "SVBony UVIR Cut",
    date: "8/8/2023",
  },
  // Heart Nebula commented out
  {
    image: "images/lobster.jpg",
    name: "Cave/Bubble/Lobster Claw Nebulae",
    imageLink: "https://www.astrobin.com/ud5q4f/",
    int_time: "4.5 hours",
    camera: "Modded Canon Rebel T7i",
    fl: "200mm f/4",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Astronomik Clip In UVIR Cut",
    date: "7/30/2023",
  },
  {
    image: "images/ngc7822.jpg",
    name: "NGC7822 - Question Mark Nebula",
    imageLink: "https://www.astrobin.com/hxhn90/",
    int_time: "4.25 hours",
    camera: "Modded Canon Rebel T7i",
    fl: "200mm f/4",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Astronomik Clip In UVIR Cut",
    date: "7/29/2023",
  },
  {
    image: "images/ngc7000.jpg",
    name: "NGC7000 - North America Nebula",
    imageLink: "https://www.astrobin.com/g6n12x/",
    int_time: "3.8 hours",
    camera: "Modded Canon Rebel T7i",
    fl: "200mm f/4",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Astronomik Clip In UVIR Cut",
    date: "7/25/2023",
  },
  {
    image: "images/trunk.jpg",
    name: "IC1396 - Elephant's Trunk Nebula",
    imageLink: "https://www.astrobin.com/d3h8my/",
    int_time: "12 hours",
    camera: "Modded Canon Rebel T7i",
    fl: "200mm f/4",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Astronomik Clip In UVIR Cut",
    date: "7/9/2023-7/22/2023",
  },
  {
    image: "images/pinwheel.jpg",
    name: "M101 - Pinwheel  Galaxy",
    imageLink: "https://www.astrobin.com/mvhtn3/",
    int_time: "3.2 hours",
    camera: "Stock Canon Rebel T7i",
    fl: "135mm f/2.8",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Stock",
    date: "6/4/2023",
  },
  {
    image: "images/bode.jpg",
    name: "M81 - Bode's Galaxy",
    imageLink: "https://www.astrobin.com/jm30he/",
    int_time: "2.8 hours",
    camera: "Stock Canon Rebel T7i",
    fl: "135mm f/2.8",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Stock",
    date: "6/1/2023",
  },
  {
    image: "images/nan.jpg",
    name: "NGC7000 - North America Nebula",
    imageLink: "https://www.astrobin.com/1o2vyg/",
    int_time: "3 hours",
    camera: "Stock Canon Rebel T7i",
    fl: "135mm f/2.8",
    mount: "SkyWatcher Star Adventurer 2i",
    filters: "Stock",
    date: "5/31/2023",
  },
];

function Home() {
  const [visibleCount, setVisibleCount] = useState(10); // Start with 5 images
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < images.length) {
          setVisibleCount((prev) => prev + 50); // Load 5 more
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [visibleCount]);
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
          style={{
            width: "90%",
            textAlign: "center",
            fontSize: "1.2rem",
            margin: "auto",
          }}
        >
          <p>
            Processing done with PixInsight/Siril/Photoshop. I also use the
            RC-Astro plugins for PixInsight, including BlurXTerminator.
          </p>
          <p>Click the name of the object to see full resolution images</p>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          {/** ImageContainers */}
          {images.slice(0, visibleCount).map((img, index) => (
            <ImageContainer key={index} {...img} />
          ))}

          {/* load more images */}
          <div ref={loadMoreRef} style={{ height: "10vh" }} />
        </div>
      </div>
    </>
  );
}

export default Home;
