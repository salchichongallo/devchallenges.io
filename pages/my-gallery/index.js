import React from "react";
import Head from "next/head";
import DevProfileLink from '../../components/DevProfileLink';
import GlobalStyles from "./my-gallery.styles";

function MyGallery() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="content">
        <header className="profile">
          <img
            src={require("./img/profilePhoto.png").default}
            className="profile__photo"
            alt="Rodney Cotton"
          />
          <h1 className="profile__name">Rodney Cotton</h1>
          <p className="profile__location">Helsinki, Finland</p>
          <div className="stats">
            <div className="stat">
              <h3>100</h3>
              <p>Posts</p>
            </div>
            <div className="stat">
              <h3>2,242</h3>
              <p>Followers</p>
            </div>
            <div className="stat">
              <h3>1,432</h3>
              <p>Following</p>
            </div>
          </div>
        </header>

        <section className="gallery">
          <div className="gallery__image">
            <img src={require("./img/photo1.png").default} />
          </div>
          <div className="gallery__image" style={{ gridColumn: "2 / 4" }}>
            <img src={require("./img/photo2.png").default} />
          </div>
          <div className="gallery__image" style={{ gridColumn: "1 / 3" }}>
            <img src={require("./img/photo3.png").default} />
          </div>
          <div
            className="gallery__image"
            style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }}
          >
            <img
              src={require("./img/photo4.png").default}
              style={{ height: "105%" }}
            />
          </div>
          <div className="gallery__image">
            <img src={require("./img/photo5.png").default} />
          </div>
          <div className="gallery__image">
            <img src={require("./img/photo6.png").default} />
          </div>
        </section>

        <footer className="footer">
          <DevProfileLink />
        </footer>
      </div>
    </>
  );
}

export default MyGallery;
