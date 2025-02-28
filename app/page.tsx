export default function Home() {
  return (
    <div
      className="flex-1 max-w-7xl mx-auto h-[calc(100vh-64px)]"
      style={{
        backgroundImage: `url('/spacejoy-sh6Aj176NAQ-unsplash-2500px.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // height: "2500px", // Add a height to make the background visible
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <main className="bg-white bg-opacity-90 m-12 p-10">
          <h1 className="text-5xl font-bold mb-10">Webフロントエンド入門</h1>
          <h3 className="text-3xl font-bold mb-6">ブログについて</h3>
          <p className="text-lg">
            ソフトウェア・エンジニアとして Web
            アプリケーション開発を行っていく中で出会ったコアな知識や使えるテクニックを解説していくブログです。
          </p>
        </main>
        <div>
          <span className="text-white bg-gray-900 px-3 py-1.5">
            Photo by{" "}
            <a href="https://unsplash.com/@spacejoy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Spacejoy
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/white-wooden-cabinet-with-mirror-sh6Aj176NAQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
