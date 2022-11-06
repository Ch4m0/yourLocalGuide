import Image from "next/image";

import Looking from "./looking";
import cocora from '../public/cocora.jpg'


export default function Banner() {
  const sectionStyle = {
    background: "#000",
  };

  const bg_cyclerStyle = {
    height: "632px",
    zIndex: "0",
    position: "relative",
  };

  const bg_cyclerImageStyle = {
    margin: "0 auto",
    width: "100%",
    minHeight: "900px",
    backgroundColor: "#000",
    position: "absolute",
  };

  return (
    <section id="outer_banner" style={sectionStyle}>
      <div id="bg_cycler" style={bg_cyclerStyle}>
        <div style={bg_cyclerImageStyle}>
          <Image
            alt="cocora"
            class="lcp_reduced"
            src={cocora}
            width="100%" height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <Looking></Looking>
      </div>
    </section>
  );
}
