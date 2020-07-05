function NotFound404() {
  return (
    <div className="container">
      <main>
        <div className="header">404 Not Found</div>

        <div className="hero">
          <div className="crowImage">
            <img src="/images/Scarecrow.png" alt="Scare crow" />
          </div>

          <div className="hero-info">
            <h1 className="title">I have bad news for you</h1>
            <p className="description">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <button type="button">Back to homepage</button>
          </div>
        </div>
      </main>

      <footer>Jimmy Murillo @ DevChallenges.io</footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@600&family=Space+Mono:wght@400;700&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          background: #fff;
          font-size: 16px;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        p {
          margin: 0;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          width: 100%;
        }

        .header {
          font-size: 24px;
          line-height: 25px;
          font-family: "Inconsolata", monospace;
          padding: 20px 0 0 24px;
        }

        .hero {
          margin-top: 4rem;
        }

        .hero-info {
          padding-left: 1.5rem;
        }

        .crowImage {
          padding: 0 44px;
          margin-bottom: 60px;
        }

        .crowImage img {
          // make image responsive
          max-width: 100%;
          height: auto;
        }

        .title {
          font-weight: bold;
          font-size: 48px;
          font-family: "Space Mono", monospace;
          line-height: 71px;
          letter-spacing: -0.035rem;
          margin-bottom: 28px;
          color: #333;
        }

        .description {
          font-size: 18px;
          line-height: 27px;
          letter-spacing: -0.035rem;
          font-weight: 400;
          font-family: "Space Mono", monospace;
          color: #4f4f4f;
          margin-bottom: 68px;
        }

        button {
          border: none;
          text-transform: uppercase;
          line-height: 21px;
          font-size: 14px;
          letter-spacing: -0.035rem;
          font-weight: bold;
          font-family: "Space Mono", monospace;
          background: #333;
          color: #fff;
          padding: 24px 43px;
        }

        footer {
          margin-top: 120px;
          font-family: "Montserrat", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          padding-bottom: 40px;
          text-align: center;
        }

        @media (min-width: 500px) {
          .hero,
          .header {
            margin-left: auto;
            margin-right: auto;
            max-width: 500px;
          }
        }

        @media (min-width: 900px) {
          .header {
            padding: 40px 0 0 77px;
            max-width: 100%;
            margin: auto;
          }

          .hero {
            max-width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 96px;
            padding: 0 1.5rem;
          }

          .crowImage {
            padding: 0;
            margin-bottom: 0;
            width: 100%;
            max-width: 540px;
          }

          .title {
            font-size: 64px;
            line-height: 95px;
          }

          .description {
            font-size: 24px;
            line-height: 36px;
            max-width: 380px;
          }
        }

        @media (min-width: 1200px) {
          .hero-info {
            padding-left: 96px;
          }

          .title {
            max-width: 586px;
          }
        }
      `}</style>
    </div>
  );
}

export default NotFound404;
