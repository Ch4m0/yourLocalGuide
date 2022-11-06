import Looking from "./looking";

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
          <img
            class="lcp_reduced"
            src="https://www.semana.com/resizer/IYlJDSnB6zlyI_ueOZCOPi61CnM=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JFRZQ4JICREXZCO4GQPC36LMSQ.jpg"
            width="100%"
          />
        </div>

        <Looking ></Looking>
      </div>
    </section>
  );
}
