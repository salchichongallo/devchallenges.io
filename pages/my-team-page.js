import Head from "next/head";

const TEAM_MEMBERS = [
  {
    name: "Bill Mahoney",
    role: "Product owner",
    imgSrc: "/images/my-team-page/photo1.png",
  },
  {
    name: "Saba Cabrera",
    role: "Art director",
    imgSrc: "/images/my-team-page/photo2.png",
  },
  {
    name: "Shae Le",
    role: "Tech lead",
    imgSrc: "/images/my-team-page/photo3.png",
  },
  {
    name: "Skylah Lu",
    role: "UX Designer",
    imgSrc: "/images/my-team-page/photo4.png",
  },
  {
    name: "Griff Richards",
    role: "Developer",
    imgSrc: "/images/my-team-page/photo5.png",
  },
  {
    name: "Stan John",
    role: "Developer",
    imgSrc: "/images/my-team-page/photo6.png",
  },
];

function MyTeamPage() {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=PT+Serif:wght@400;700&family=Poppins&display=swap"
        />
      </Head>

      <header>
        <h1 className="title">The creative crew</h1>
        <div className="who-we-are">
          <h2>Who We Are</h2>
          <p>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </header>

      <div className="team">
        {TEAM_MEMBERS.map(({ name, role, imgSrc }) => (
          <div key={name} className="member">
            <div className="avatar-container">
              <div className="avatar">
                <img src={imgSrc} alt={name} />
              </div>
              <div className="role">{role}</div>
            </div>
            <div className="name">{name}</div>
          </div>
        ))}
      </div>

      <footer>
        <a
          href="https://devchallenges.io/profile/PPGDlVc9JMi4fOFL2ubF"
          target="_blank"
          rel="noopener"
        >
          Jimmy Murillo @ DevChallenges.io
        </a>
      </footer>

      <style jsx>{`
        /* Member Profile */
        .avatar-container {
          // Prevent role to overflow
          display: flex;
        }

        .avatar {
          width: 138px;
        }

        .avatar img {
          max-width: 100%;
          height: auto;
        }

        .role {
          margin-left: 10px;
          font-size: 10px;
          line-height: 13px;
          font-family: "PT Serif", serif;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          text-transform: uppercase;
          vertical-align: top;
        }

        .name {
          margin-top: 1rem;
          font-weight: bold;
          font-size: 14px;
          line-height: 21px;
          font-family: "Poppins", sans-serif;
        }

        .container {
          padding: 0 1.5rem;
        }

        header {
          margin-bottom: 64px;
          padding-top: 1rem;
        }

        .title {
          font-family: "PT Serif", sans-serif;
          font-weight: bold;
          font-size: 36px;
          line-height: 48px;
          letter-spacing: -0.045em;
          margin: 0 0 38px 0;
        }

        .who-we-are h2 {
          font-weight: bold;
          font-size: 18px;
          line-height: 27px;
          font-family: "Poppins", sans-serif;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }

        .who-we-are p {
          margin: 0;
          font-size: 14px;
          line-height: 21px;
          font-family: "Poppins", sans-serif;
        }

        /* Member List */
        .team {
          display: grid;
          grid-template-columns: auto auto;
          grid-column-gap: 1rem;
          margin-bottom: 4rem;
        }

        .team .member:nth-child(even) {
          margin-top: 3rem;
        }

        footer {
          font-family: "Montserrat", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          padding-bottom: 30px;
          text-align: center;
        }

        footer a {
          text-decoration: none;
          color: #a9a9a9;
        }

        footer a:hover,
        footer a:focus {
          color: #6b6b6b;
          text-decoration: underline;
        }

        @media (min-width: 600px) {
          .avatar {
            width: 238px;
          }

          .role {
            font-size: 12px;
            line-height: 16px;
          }

          .name {
            font-size: 18px;
            line-height: 27px;
          }

          .container {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          header {
            padding-top: 1.5rem;
          }

          .team {
            justify-content: center;
            grid-column-gap: 2rem;
          }

          .team .member:nth-child(even) {
            margin-top: 3.5rem;
          }
        }

        @media (min-width: 900px) {
          .container {
            max-width: 900px;
            padding: 0;
          }

          header {
            display: flex;
            width: 100%;
            padding-top: 7rem;
          }

          .title {
            width: 100%;
          }

          .who-we-are p {
            font-size: 18px;
            line-height: 27px;
          }

          .team {
            grid-column-gap: 3.5rem;
            grid-template-columns: auto auto auto;
            margin-bottom: 7rem;
          }

          .team .member:nth-child(3n + 2) {
            margin-top: 6rem;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #fff;
          font-size: 16px;
          color: #000;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default MyTeamPage;
