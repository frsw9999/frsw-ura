export const About = () => {
  return (
    <div
      className="ABOUT"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "90vw",
        maxWidth: "600px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "WDXL Lubrifont JP N, sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        ABOUT
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            width: "50%",
            borderRadius: "50%",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          src={`${process.env.PUBLIC_URL}/about/profile_photo.jpeg`}
          alt="my-photo"
        />
      </div>
      <div className="name"
        style={{
          width: "100%",
          fontSize: "30px",
          fontWeight: "bold",
        }}>
        月面時代
      </div>
      <div>
        最近やっと野菜が美味しく食べられるようになってきたが、ナスとピーマンだけはどうしても苦手。
        剣道をしていた影響か、人生の半分以上を坊主で過ごしてきたため髪が長い状態に慣れていない。定期的に丸刈りにしているが、その度に親が悲しんでいる。
        (どうやら、ただでさえモテない自分が坊主になることでさらにモテないと思っているようだ。0に何をかけても0だというのに。)
        暖房に弱く、すぐ爆発しそうになる。
        イェロゲにハマった影響で絵を描き始めており人生がとっても楽しい。ハッピーピープルワオ！！！！！
      </div>
    </div>
  );
};
