import { createGlobalStyle } from "styled-components";
import sixDots from "./6dots.svg";

export default createGlobalStyle`
  :root {
    --font-heading: "Playfair Display", serif;
    --font-body: "Montserrat", sans-serif;

    --orange: #f2994a;
    --white: #fff;

    --gray-1: #333333;
    --gray-2: #4f4f4f;
    --gray-3: #828282;
    --gray-4: #bdbdbd;
  }

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
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .checkbox {
    position: relative;
    display: inline-block;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  .checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--white);
    border-radius: 0.25rem;
    box-shadow: inset 0 0 0 1px var(--gray-3);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox:hover input ~ .checkbox__checkmark {
    background: rgba(0, 0, 0, 0.08);
  }

  .checkbox input:checked ~ .checkbox__checkmark {
    background: var(--orange);
    box-shadow: inset 0 0 0 1px #da7822;
  }

  .checkbox__mark {
    display: none;
    font-size: 1.25rem;
    color: var(--white);
  }

  .checkbox input:checked ~ .checkbox__checkmark .checkbox__mark {
    display: block;
  }

  body {
    padding-top: 2rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .six-dots {
    width: 13px;
    height: 8px;
    background: url(${sixDots});
  }

  .hero {
    margin-bottom: 1.5rem;
  }

  .hero__title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .hero__description {
    display: flex;
    align-items: baseline;
    margin-top: 0.75rem;
  }

  .hero__description .six-dots {
    flex-shrink: 0;
  }

  .hero__description > p {
    flex: 1;
    font-weight: 500;
    font-style: italic;
    font-size: 1rem;
    color: var(--gray-2);
    font-family: var(--font-body);
    margin-left: 0.75rem;
  }

  .hero__image {
    margin-top: 0.75rem;
  }

  .hero__image img {
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
  }

  .detail {
    display: flex;
    align-items: flex-start;
  }

  .detail__icon {
    margin-right: 0.5rem;
    font-size: 1.25rem;
    color: var(--gray-2);
    user-select: none;
  }

  .detail__label {
    font-size: 0.75rem;
    color: var(--gray-4);
    text-transform: uppercase;
    font-family: var(--font-body);
    font-weight: 700;
  }

  .detail__content {
    color: var(--gray-1);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 0.875rem;
  }

  .detail--active .detail__icon,
  .detail--active .detail__content {
    color: var(--orange);
  }

  .aside__details {
    display: flex;
    margin-top: 1.25rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .aside__details > * {
    min-width: 128px;
    margin-bottom: 1rem;
  }

  .section {
    margin-top: 2rem;
  }

  .section__title {
    color: var(--gray-1);
    font-weight: 700;
    font-family: var(--font-heading);
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .meal__title {
    color: var(--gray-1);
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  .ingredient {
    display: flex;
  }

  .ingredient__content {
    color: var(--gray-1);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .ingredient__content i {
    font-weight: 500;
  }

  .ingredient__checkbox {
    margin-right: 0.5rem;
    padding-top: 0.25rem;
  }

  .meal .ingredient:not(:first-of-type) {
    margin-top: 0.25rem;
  }

  .ingredients .meal:not(:first-of-type) {
    margin-top: 2rem;
  }

  .instructions ol {
    counter-reset: instructions;
    list-style: none;
    padding: 0;
    margin: 2rem 0 0 0;
    padding-left: 3rem;

  }

  .instructions ol li {
    counter-increment: instructions;
    position: relative;
    font-size: 1rem;
    line-height: 1.5;
    font-family: var(--font-body);
  }

  .instructions ol li:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }

  .instructions ol li::before {
    position: absolute;
    top: 0;
    left: calc(-3rem);
    content: counter(instructions);

    color: var(--orange);
    width: 2.25rem;
    height: 2.25rem;
    border-radius: .25rem;
    background: var(--orange);

    color: var(--white);
    font-size: 1.5rem;
    font-family: var(--font-heading);
    text-align: center;
    line-height: 1.1;
    font-weight: 700;
  }

  .instructions ol li:nth-child(2)::before {
    line-height: 1.2;
  }
  .instructions ol li:nth-child(6)::before {
    line-height: 1.4;
  }

  .instructions__source {
    margin-top: 1.5rem;
    color: var(--gray-3);
    font-size: 0.75rem;
    line-height: 1.5;
    font-family: var(--font-body);
  }

  .footer {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2.5rem;
  }

  .footer a {
    font-family: var(--font-body);
    text-decoration: none;
    color: var(--gray-3);
    text-decoration: underline;
  }

  .footer a:hover {
    color: var(--gray-2);
  }

  @media (min-width: 520px) {
    .layout__main {
      max-width: 520px;
      flex-shrink: 0;
    }
  }

  @media (min-width: 520px) and (max-width: 764px) {
    body {
      margin: 0 auto;
      max-width: 520px;
    }
  }

  @media (min-width: 765px) {
    .layout {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .layout__aside {
      order: 1;
      width: min-content;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 2rem 2rem 1rem 2rem;
    }

    .hero {
      margin-bottom: 2rem;
    }

    .hero__title {
      font-size: 3rem;
    }

    .hero__description {
      max-width: 592px;
      margin-top: 1.75rem;
    }

    .hero__image {
      margin-top: 1.5rem;
    }

    .detail__icon {
      font-size: 1.5rem;
    }

    .detail__label {
      margin-bottom: 0.25rem;
    }

    .section__title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .ingredients {
      margin-top: 0;
    }

    .ingredient__content {
      font-size: 1rem;
    }

    .ingredient__checkbox {
      margin-right: 0.875rem;
    }

    .meal__title {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      padding-bottom: 0.75rem;
      box-shadow: 0 1px rgba(0, 0, 0, 0.12);
    }

    .meal .ingredient:not(:first-of-type) {
      margin-top: 0.75rem;
    }

    .instructions__source {
      margin-top: 2.5rem;
      font-size: 1rem;
    }

    .footer a {
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 969px) {
    body {
      margin: 0 auto;
      max-width: 969px;
    }
  }
`;
