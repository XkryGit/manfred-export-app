import { css } from '@emotion/css';
import { theme } from '@/core/theme';
import { ColorPrincipal, ColorSecondary } from './mf-color.constants';

export const buttonStyle = css`
  background-color: ${ColorPrincipal};
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-family: Avenir, sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 900;

  &:hover {
    transition: background 0.25s ease-in-out;
    background-color: ${ColorSecondary};
  }

  @media (min-width: 834px) and (max-width: 1024px) {
    width: 40%;
    margin: 0 auto;
  }

  /* @media (max-width: 1024px) {
    margin-bottom: ${theme.spacing(4)}
  } */

  @media (min-width: 1024px) {
    /* width: 80%;
    position: relative;
    right: 30em;
    bottom: 10em; */
  }
`;
