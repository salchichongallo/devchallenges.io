import Head from "next/head";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import VisuallyHidden from "../components/VisuallyHidden";

function Menu() {
  const [isOpen, setOpen] = React.useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <div className="app-menu">
      <div className="hamburger">
        <button onClick={toggleMenu} type="button">
          <VisuallyHidden>Open menu</VisuallyHidden>
          <svg
            aria-hidden
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 19.5H29.25V16.3333H0.75V19.5ZM0.75 11.5833H29.25V8.41667H0.75V11.5833ZM0.75 0.5V3.66667H29.25V0.5H0.75Z"
              fill="#F2F2F2"
            />
          </svg>
        </button>
        {isOpen && (
          <RemoveScroll>
            <FocusLock>
              <div
                aria-modal
                role="dialog"
                aria-label="Hamburger menu"
                className="menu"
              >
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="close-btn"
                >
                  <VisuallyHidden>Close menu</VisuallyHidden>
                  <svg
                    aria-hidden
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.0833 3.14919L20.8508 0.916687L12 9.76752L3.14913 0.916687L0.916626 3.14919L9.76746 12L0.916626 20.8509L3.14913 23.0834L12 14.2325L20.8508 23.0834L23.0833 20.8509L14.2325 12L23.0833 3.14919Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </button>
                <nav>
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">Collection</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </FocusLock>
          </RemoveScroll>
        )}
      </div>
      <nav className="desktop-menu">
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .menu {
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
          height: 100vh;
          background: #181719;
        }

        .close-btn {
          top: 20px;
          right: 20px;
          position: absolute;
        }

        .menu nav {
          margin-top: 196px;
        }

        .menu ul {
          padding: 0;
          list-style: none;
          text-align: center;
        }

        .menu a {
          color: inherit;
          text-decoration: none;
          font-size: 18px;
          line-height: 22px;
          font-weight: 500;
          font-family: "Montserrat", sans-serif;
          padding: 16px;
          display: inline-block;
        }

        .menu a:not(.active) {
          color: rgba(255, 255, 255, 0.7);
        }

        .menu a:hover,
        .menu a:focus {
          color: #fff;
        }

        .menu a.active {
          font-weight: bold;
        }

        @media (orientation: landscape) {
          .menu nav {
            margin-top: 96px;
          }
        }

        .desktop-menu {
          display: none;
        }

        @media (min-width: 1200px) {
          .desktop-menu {
            margin: 0;
            display: block;
          }

          .desktop-menu ul {
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
            display: flex;
          }

          .desktop-menu li:not(last) {
            margin-right: 32px;
          }

          .desktop-menu a {
            color: inherit;
            text-decoration: none;
            font-size: 18px;
            line-height: 22px;
            font-weight: 500;
            font-family: "Montserrat", sans-serif;
            padding: 16px;
            display: inline-block;
          }

          .desktop-menu a:not(.active) {
            color: rgba(255, 255, 255, 0.7);
          }

          .desktop-menu a:hover,
          .desktop-menu a:focus {
            color: #fff;
          }

          .desktop-menu a.active {
            font-weight: bold;
          }

          .hamburger {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://devchallenges.io/profile/PPGDlVc9JMi4fOFL2ubF"
        target="_blank"
        rel="noopener"
      >
        Jimmy Murillo @ DevChallenges.io
      </a>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: center;
          margin: 50px 0 24px 0;
        }

        .footer a {
          text-align: center;
          text-decoration: none;
          font-weight: 600;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          line-height: 17px;
          color: #a9a9a9;
          margin: 0;
          padding: 14px 32px 0 32px;
          border-top: 1px solid #a9a9a9;
        }

        .footer a:hover,
        .footer a:focus {
          color: #fff;
        }

        @media (min-width: 1200px) {
          .footer {
            margin: 96px 0 48px 0;
          }

          .footer a {
            padding: 8px;
            border-top: none;
          }
        }
      `}</style>
    </footer>
  );
}

function InteriorConsultant() {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&family=Lora:wght@400;700&family=Montserrat:wght@300;400;500;700&display=swap"
        />
      </Head>

      <header>
        <div className="logo">This Interior</div>
        <Menu />
      </header>

      <main>
        <div>
          <h1 className="title">Modern Interior</h1>
          <p className="description">
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <a href="#" className="read-more">
            <span>Read more</span>
            <svg
              aria-hidden
              width="19"
              height="8"
              viewBox="0 0 19 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.65 3.65L15.86 0.86C15.54 0.54 15 0.76 15 1.21V3H1C0.45 3 0 3.45 0 4C0 4.55 0.45 5 1 5H15V6.79C15 7.24 15.54 7.46 15.85 7.14L18.64 4.35C18.84 4.16 18.84 3.84 18.65 3.65Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <article>
          <div>
            <img src="/images/interior-consultant/photo1.png" alt="Interior" />
          </div>
          <div className="card-container">
            <div className="card">
              <header>
                <div className="avatar">
                  <img
                    src="/images/interior-consultant/photo2.png"
                    alt="Aliza Webber"
                  />
                </div>
                <div>
                  <h2 className="author">
                    <a href="#">Aliza Webber</a>
                  </h2>
                  <p>Interior Designer</p>
                </div>
              </header>
              <h1 className="design-name">
                Designed in 2020 by <div>Aliza Webber</div>
              </h1>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          padding: 20px 12px 0 12px;
        }

        .container > header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          padding: 8px;
          border: 1px solid #fff;
          display: inline-block;
          text-transform: uppercase;
          font-family: "Crimson Pro", serif;
          font-weight: 200;
          font-size: 14px;
          line-height: 16px;
        }

        main {
          margin-top: 48px;
        }

        .title {
          font-size: 36px;
          line-height: 46px;
          font-family: "Lora", serif;
          font-weight: normal;
          margin-bottom: 25px;
        }

        .description {
          max-width: 250px;
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 17px;
        }

        .read-more {
          display: inline-block;
          margin-top: 24px;
          padding: 16px;
          text-decoration: none;
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          outline: 2px solid #fdd262;
          color: #463408;
          background: #fdd262;
        }

        .read-more:hover,
        .read-more:focus {
          text-decoration: underline;
        }

        .read-more svg {
          margin-left: 16px;
        }

        article {
          margin-top: 38px;
        }

        .card-container {
          display: flex;
          justify-content: flex-end;
        }

        .card {
          margin-top: -12%;
          margin-left: 16px;
          margin-right: 16px;
          padding: 12px 24px 24px 24px;
          width: 100%;
          max-width: 300px;
          background: #181719;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .card header {
          display: flex;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 14px;
        }

        .design-name {
          font-family: "Lora", serif;
          font-weight: bold;
          font-size: 18px;
          line-height: 23px;
          margin-top: 16px;
        }

        .design-name a {
          text-decoration: none;
          color: inherit;
        }

        .author {
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
        }

        .author a {
          text-decoration: none;
          color: inherit;
        }

        .card p {
          margin-top: 4px;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #828282;
        }

        @media (min-width: 356px) {
          .card {
            margin-right: 5%;
            margin-left: initial;
          }
        }

        @media (min-width: 600px) {
          .container {
            max-width: 600px;
            margin: 0 auto;
          }
        }

        @media (min-width: 1200px) {
          .container {
            max-width: 1200px;
          }

          main {
            margin-top: 128px;
            display: flex;
            width: 100%;
            justify-content: space-between;
          }

          main > div {
            margin-right: 96px;
          }

          article {
            flex: 1;
            max-width: 740px;
            margin: 0;
          }

          .title {
            font-size: 48px;
            line-height: 61px;
            margin-bottom: 40px;
          }

          .description {
            font-size: 24px;
            max-width: 410px;
            line-height: 29px;
          }

          .read-more {
            font-size: 18px;
            line-height: 22px;
            margin-top: 48px;
          }

          .card {
            max-width: 410px;
            padding: 24px 32px 24px 32px;
          }

          .avatar {
            width: 50px;
            height: 50px;
          }

          .author {
            font-size: 16px;
            line-height: 19px;
          }

          .card p {
            font-size: 14px;
            line-height: 17px;
            margin-top: 6px;
          }

          .design-name {
            font-size: 24px;
            line-height: 31px;
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
          color: #fff;
          background: #181719;
        }

        * {
          box-sizing: border-box;
        }

        *:focus {
          outline: 2px solid #fdd262;
        }

        button {
          padding: 0;
          border: none;
          background: transparent;
          -webkit-appearance: none;
          cursor: pointer;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        h1,
        h2,
        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default InteriorConsultant;
