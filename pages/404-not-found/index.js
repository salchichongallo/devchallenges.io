import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import DevProfileLink from "../../components/DevProfileLink";
import scarecrowUrl from "./Scarecrow.png";

const GlobalStyles = createGlobalStyle`
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
`;

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    flex: 1;
    width: 100%;
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

  ${DevProfileLink} {
    text-decoration: none;
    color: #333;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Header = styled.header`
  font-size: 24px;
  line-height: 25px;
  font-family: "Inconsolata", monospace;
  padding: 20px 0 0 24px;

  @media (min-width: 500px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }

  @media (min-width: 900px) {
    padding: 40px 0 0 77px;
    max-width: 100%;
    margin: auto;
  }
`;

const HeroSection = styled.div`
  margin-top: 4rem;

  @media (min-width: 500px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }

  @media (min-width: 900px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 96px;
    padding: 0 1.5rem;
  }
`;

const ScareCrow = styled.div`
  padding: 0 44px;
  margin-bottom: 60px;

  img {
    /* make image responsive */
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 900px) {
    padding: 0;
    margin-bottom: 0;
    width: 100%;
    max-width: 540px;
  }
`;

const HeroInfo = styled.div`
  padding-left: 1.5rem;

  h1 {
    font-weight: bold;
    font-size: 48px;
    font-family: "Space Mono", monospace;
    line-height: 71px;
    letter-spacing: -0.035rem;
    margin-bottom: 28px;
    color: #333;
  }

  p {
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

  @media (min-width: 900px) {
    h1 {
      font-size: 64px;
      line-height: 95px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
      max-width: 380px;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 96px;

    h1 {
      max-width: 586px;
    }
  }
`;

function NotFound404() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@600&family=Space+Mono:wght@400;700&display=swap"
          />
        </Head>
        <main>
          <Header>404 Not Found</Header>

          <HeroSection>
            <ScareCrow>
              <img src={scarecrowUrl} alt="Scare crow" />
            </ScareCrow>

            <HeroInfo>
              <h1>I have bad news for you</h1>
              <p>
                The page you are looking for might be removed or is temporarily
                unavailable
              </p>
              <button type="button">Back to homepage</button>
            </HeroInfo>
          </HeroSection>
        </main>

        <footer>
          <DevProfileLink />
        </footer>
      </Layout>
    </>
  );
}

export default NotFound404;
