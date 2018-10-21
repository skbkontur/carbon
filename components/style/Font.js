/*
 * See https://developers.google.com/web/updates/2016/02/font-display and
 * https://css-tricks.com/font-display-masses/#article-header-id-2
 * for `font-display` information
 */
export default () => (
  <style jsx global>
    {`
      /* latin */
      @font-face {
        font-family: 'Consolas';
        font-display: swap;
        font-style: normal;
        src: local('Consolas');
      }
    `}
  </style>
)
