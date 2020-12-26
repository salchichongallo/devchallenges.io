import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    font-size: 16px;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .content {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;

    &__photo {
      width: 102px;
      height: auto;
      overflow: hidden;
      border-radius: 0.75rem;
      margin-bottom: 0.875rem;
    }

    &__name {
      font-size: 1.125rem;
      color: #4e5150;
      line-height: 1;
    }

    &__location {
      font-size: 0.875rem;
      color: #a9a9a9;
      line-height: 1;
      margin-top: 0.5rem;
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(78px, 100px));
    grid-gap: 0.75rem;
    margin-top: 1rem;
  }

  .stat {
    background: #efefef;
    padding: 0.75rem 0;
    text-align: center;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    transition: box-shadow 125ms ease-in-out;

    &:hover {
      box-shadow: 0 0 0 2px salmon;
    }

    h3 {
      font-weight: 600;
      color: #4e5150;
    }

    p {
      color: #a9a9a9;
      font-weight: 600;
    }
  }

  .gallery {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, minmax(109px, auto));
    grid-template-rows: repeat(3, minmax(109px, auto));

    &__image {
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
      transition: box-shadow 125ms ease-in-out;

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  footer {
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    a {
      text-decoration: none;
      color: #828282;
      text-decoration: underline;
    }
  }

  @media (min-width: 600px) {
    .profile {
      margin-top: 2rem;
      margin-bottom: 3rem;

      &__photo {
        width: 156px;
        margin-bottom: 1rem;
      }

      &__name {
        font-size: 1.5rem;
      }

      &__location {
        font-size: 1rem;
        margin-top: 0.75rem;
      }
    }

    .stats {
      grid-gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .gallery {
      grid-gap: 2rem;
    }

    .footer a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 900px) {
    .content {
      max-width: 900px;
      margin: 0 auto;
    }
  }
`;
