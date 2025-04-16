'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CodeBlock as CodeBlockIcon } from '@phosphor-icons/react/dist/ssr/CodeBlock';
import { DiamondsFour as DiamondsFourIcon } from '@phosphor-icons/react/dist/ssr/DiamondsFour';
import { Palette as PaletteIcon } from '@phosphor-icons/react/dist/ssr/Palette';
import { Timer as TimerIcon } from '@phosphor-icons/react/dist/ssr/Timer';

import { NoSsr } from '@/components/core/no-ssr';

export function Productivity(): React.JSX.Element {
  const { colorScheme } = useColorScheme();

  return (
    <div>
      <Container maxWidth="md" sx={{ pt: '4rem' }}>
        <Stack spacing={3}>
          <Typography color="text.secondary" component="p" sx={{ textAlign: 'center' }} variant="overline">
            Used by companies like:
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: 'center',
              borderTop: '0.0625rem solid var(--mui-palette-divider)',
              borderBottom: '0.0625rem solid var(--mui-palette-divider)',
              color: 'var(--mui-palette-neutral-500)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              py: '1rem',
            }}
          >
            <svg fill="none" height="36" viewBox="0 0 133 36" width="133" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M77.4069 9.92864L85.0581 7.0798L77.4069 4.14957V0.161194L90.5116 5.45189V8.70771L77.4069 13.9984V9.92864Z"
                fill="currentColor"
              />
              <path
                d="M5.04645 35.1612C2.27901 35.1612 -6.10352e-05 33.7775 -6.10352e-05 30.6844V30.5216C-6.10352e-05 26.7775 3.25575 25.4751 7.24413 25.4751H9.11622V24.7426C9.11622 23.1961 8.46506 22.3007 6.83715 22.3007C5.37203 22.3007 4.63947 23.1147 4.55808 24.2542H0.488311C0.813893 20.8356 3.49994 19.2077 7.08134 19.2077C10.7441 19.2077 13.4302 20.7542 13.4302 24.5798V34.8356H9.27901V33.0449C8.46506 34.1844 7.08134 35.1612 5.04645 35.1612ZM9.11622 29.7891V28.324H7.40692C5.29064 28.324 4.2325 28.8937 4.2325 30.2775V30.4403C4.2325 31.4984 4.88366 32.231 6.34878 32.231C7.81389 32.1496 9.11622 31.3356 9.11622 29.7891ZM23.1162 35.1612C18.8837 35.1612 15.7906 32.5565 15.7906 27.3472V27.103C15.7906 21.8937 19.0465 19.1263 23.1162 19.1263C26.6162 19.1263 29.4651 20.917 29.7906 24.9054H25.7209C25.4767 23.4403 24.6627 22.4635 23.1976 22.4635C21.4069 22.4635 20.1046 23.9286 20.1046 26.9403V27.4286C20.1046 30.5216 21.2441 31.9054 23.1976 31.9054C24.6627 31.9054 25.7209 30.8472 25.9651 29.1379H29.872C29.6279 32.7193 27.2674 35.1612 23.1162 35.1612ZM39.0697 35.1612C34.8372 35.1612 31.7441 32.5565 31.7441 27.3472V27.103C31.7441 21.8937 34.9999 19.1263 39.0697 19.1263C42.5697 19.1263 45.4186 20.917 45.7441 24.9054H41.6744C41.4302 23.4403 40.6162 22.4635 39.1511 22.4635C37.3604 22.4635 36.0581 23.9286 36.0581 26.9403V27.4286C36.0581 30.5216 37.1976 31.9054 39.1511 31.9054C40.6162 31.9054 41.6744 30.8472 41.9186 29.1379H45.8255C45.5813 32.7193 43.2209 35.1612 39.0697 35.1612ZM55.1046 35.1612C50.7093 35.1612 47.6976 32.5565 47.6976 27.4286V27.103C47.6976 21.9751 50.872 19.1263 55.0232 19.1263C58.8488 19.1263 62.0232 21.2426 62.0232 26.3705V28.2426H52.0116C52.1744 31.01 53.3953 32.0682 55.186 32.0682C56.8139 32.0682 57.7093 31.1728 58.0348 30.1147H62.0232C61.5348 32.9635 59.093 35.1612 55.1046 35.1612ZM52.093 25.3937H57.7907C57.7093 23.1147 56.6511 22.1379 54.9418 22.1379C53.6395 22.2193 52.4186 22.9519 52.093 25.3937ZM64.6279 19.5333H68.9418V21.8123C69.6744 20.3472 71.2209 19.2077 73.5814 19.2077C76.3488 19.2077 78.2209 20.917 78.2209 24.5798V34.8356H73.9069V25.2309C73.9069 23.4403 73.1744 22.6263 71.6279 22.6263C70.1627 22.6263 68.9418 23.5216 68.9418 25.4751V34.8356H64.6279V19.5333ZM86.1162 14.8937V19.5333H89.0465V22.7077H86.1162V29.9519C86.1162 31.0914 86.6046 31.6612 87.6627 31.6612C88.3139 31.6612 88.7209 31.5798 89.1279 31.417V34.7542C88.6395 34.917 87.7441 35.0798 86.686 35.0798C83.3488 35.0798 81.8023 33.5333 81.8023 30.4403V22.7077H80.0116V19.5333H81.8023V16.6844L86.1162 14.8937ZM105.163 34.8356H100.93V32.5565C100.198 34.0216 98.7325 35.1612 96.4535 35.1612C93.686 35.1612 91.6511 33.4519 91.6511 29.8705V19.5333H95.9651V29.3007C95.9651 31.0914 96.6976 31.9054 98.1628 31.9054C99.6279 31.9054 100.849 30.9286 100.849 29.0565V19.5333H105.163V34.8356ZM108.337 19.5333H112.651V22.3821C113.546 20.3472 115.012 19.3705 117.291 19.3705V23.603C114.36 23.603 112.651 24.4984 112.651 27.0216V34.917H108.337V19.5333ZM126 35.1612C121.605 35.1612 118.593 32.5565 118.593 27.4286V27.103C118.593 21.9751 121.767 19.1263 125.919 19.1263C129.744 19.1263 132.919 21.2426 132.919 26.3705V28.2426H122.988C123.151 31.01 124.372 32.0682 126.163 32.0682C127.791 32.0682 128.686 31.1728 129.012 30.1147H133C132.349 32.9635 129.988 35.1612 126 35.1612ZM122.907 25.3937H128.686C128.605 23.1147 127.546 22.1379 125.837 22.1379C124.535 22.2193 123.314 22.9519 122.907 25.3937Z"
                fill="currentColor"
              />
            </svg>
            <svg fill="none" height="33" viewBox="0 0 78 33" width="78" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M72.216 23.0743C72.009 23.0743 71.8665 22.9299 71.8665 22.7221V12.4056H68.386C68.179 12.4056 68.0365 12.2618 68.0365 12.0539V10.6308C68.0365 10.4224 68.179 10.2783 68.386 10.2783H77.651C77.8575 10.2783 78 10.4226 78 10.6308V12.0538C78 12.2616 77.8575 12.4056 77.651 12.4056H74.1705V22.722C74.1705 22.9299 74.0275 23.0743 73.821 23.0743H72.216ZM45.5534 17.9236L43.7262 12.6458L41.8827 17.9236H45.5534ZM49.6058 22.6573C49.6856 22.8659 49.5583 23.0743 49.3358 23.0743H47.6834C47.4448 23.0743 47.3016 22.9625 47.2219 22.7376L46.2847 20.0195H41.1523L40.2134 22.7376C40.1346 22.9627 39.991 23.0743 39.7531 23.0743H38.1963C37.9894 23.0743 37.8462 22.8657 37.9256 22.6573L42.2322 10.5988C42.3119 10.3742 42.4548 10.2788 42.6927 10.2788H44.8222C45.0608 10.2788 45.2198 10.3742 45.2991 10.5988L49.6058 22.6573ZM61.95 21.3465C62.9665 21.3465 63.65 20.8515 64.2065 20.0033L61.6325 17.22C60.6465 17.7803 60.011 18.3393 60.011 19.4592C60.011 20.5631 60.9005 21.3465 61.95 21.3465ZM62.665 11.9736C61.8385 11.9736 61.362 12.502 61.362 13.2056C61.362 13.7493 61.6475 14.2292 62.2995 14.9332C63.4275 14.2769 63.9045 13.8773 63.9045 13.1737C63.9045 12.5174 63.4915 11.9736 62.665 11.9736ZM69.7055 22.6263C69.9115 22.8504 69.785 23.0743 69.53 23.0743H67.5115C67.2415 23.0743 67.0985 23.0099 66.924 22.8017L65.716 21.4588C64.9055 22.5465 63.7765 23.362 61.902 23.362C59.582 23.362 57.7535 21.9545 57.7535 19.5399C57.7535 17.6839 58.7395 16.692 60.2335 15.8605C59.502 15.0129 59.169 14.1171 59.169 13.3338C59.169 11.3499 60.5515 9.9906 62.6325 9.9906C64.7625 9.9906 66.0655 11.2547 66.0655 13.1256C66.0655 14.7251 64.9215 15.62 63.7135 16.2923L65.4935 18.2283L66.4945 16.4681C66.6215 16.2605 66.7645 16.1803 67.0185 16.1803H68.5595C68.8145 16.1803 68.9575 16.3567 68.799 16.6284L67.019 19.6989L69.7055 22.6263ZM53.846 23.0743C54.0525 23.0743 54.1965 22.9299 54.1965 22.7221V12.4056H57.676C57.8825 12.4056 58.0255 12.2618 58.0255 12.0539V10.6308C58.0255 10.4224 57.8825 10.2783 57.676 10.2783H48.4111C48.2042 10.2783 48.0615 10.4226 48.0615 10.6308V12.0538C48.0615 12.2616 48.2043 12.4056 48.4111 12.4056H51.8905V22.722C51.8905 22.9299 52.0345 23.0743 52.2405 23.0743H53.846Z"
                fill="currentColor"
              />
              <path
                d="M6.81529 29.2973C9.51034 31.3978 12.8931 32.6598 16.5632 32.6598C20.5794 32.6598 24.2409 31.1585 27.0353 28.694C27.0692 28.6638 27.0525 28.644 27.0192 28.6638C25.7652 29.507 22.1913 31.3477 16.5633 31.3477C11.6724 31.3477 8.58149 30.2489 6.83599 29.268C6.80259 29.2513 6.79024 29.2765 6.81529 29.2973ZM17.6422 30.115C21.5541 30.115 25.8528 29.0414 28.4237 26.916C29.1273 26.3369 29.7974 25.5662 30.3976 24.5304C30.7432 23.9345 31.081 23.2264 31.3562 22.5304C31.3685 22.4964 31.3477 22.48 31.3224 22.5181C28.9316 26.0606 22.0082 28.2702 14.8596 28.2702C9.80669 28.2702 4.36979 26.6433 2.24122 23.5368C2.22027 23.508 2.19931 23.5204 2.21207 23.5533C4.19499 27.7969 10.2107 30.115 17.6422 30.115ZM13.3681 23.0752C5.23224 23.0752 1.39597 19.26 0.700069 16.6562C0.691489 16.6186 0.666824 16.6269 0.666824 16.6608C0.666824 17.5373 0.753954 18.6684 0.903864 19.4192C0.975379 19.7846 1.27079 20.3582 1.7039 20.8154C3.67398 22.883 8.58569 25.7802 17.092 25.7802C28.6813 25.7802 31.3313 21.8932 31.8724 20.6149C32.2593 19.7006 32.4598 18.0486 32.4598 16.6608C32.4598 16.325 32.4514 16.0568 32.4388 15.7934C32.4388 15.7506 32.4142 15.7472 32.4057 15.7888C31.8266 18.9166 21.9248 23.0752 13.3681 23.0752ZM2.19931 9.79709C1.73313 10.7287 1.21636 12.3002 1.06274 13.1136C0.995404 13.4621 1.02409 13.6295 1.14547 13.8896C2.12062 15.9728 7.05309 19.3058 18.5586 19.3058C25.5778 19.3058 31.0306 17.5696 31.914 14.401C32.0766 13.8178 32.0853 13.202 31.8764 12.3722C31.6429 11.4449 31.2056 10.3636 30.8356 9.60429C30.8233 9.57954 30.8017 9.58319 30.8061 9.61244C30.9436 13.7682 19.4334 16.4466 13.626 16.4466C7.33544 16.4466 2.08737 13.923 2.08737 10.7366C2.08737 10.4304 2.1503 10.1242 2.22885 9.8055C2.23674 9.7764 2.21199 9.77159 2.19931 9.79709ZM27.061 4.69469C27.1278 4.80009 27.1612 4.91257 27.1612 5.06398C27.1612 6.84164 21.7577 9.98634 13.1561 9.98634C6.83599 9.98634 5.65274 7.62564 5.65274 6.12434C5.65274 5.58771 5.85714 5.03861 6.30734 4.48093C6.33194 4.44777 6.31104 4.43501 6.28269 4.45967C5.46159 5.16027 4.70719 5.94859 4.04539 6.79959C3.72918 7.20204 3.53289 7.55854 3.53289 7.77214C3.53289 10.8833 11.2809 13.1391 18.5254 13.1391C26.2446 13.1391 29.6897 10.6018 29.6897 8.37209C29.6897 7.57524 29.3817 7.11004 28.5936 6.20814C28.082 5.62142 27.598 5.14369 27.0858 4.67343C27.061 4.65289 27.0438 4.66962 27.061 4.69469ZM24.6946 2.91743C22.3124 1.47966 19.5458 0.661682 16.5633 0.661682C13.56 0.661682 10.7102 1.50823 8.31934 2.98407C7.60214 3.42849 7.19854 3.78462 7.19854 4.24242C7.19854 5.59191 10.3308 7.04294 15.888 7.04294C21.3874 7.04294 25.653 5.45358 25.653 3.92373C25.653 3.55855 25.336 3.30307 24.6946 2.91743Z"
                fill="currentColor"
              />
            </svg>
            <svg fill="none" height="29" viewBox="0 0 50 29" width="50" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M39.9999 0V21.8032H34.8354V1.08992L39.9999 0ZM25.2944 23.8694C26.7203 23.8694 27.8771 25.0181 27.8771 26.4351C27.8763 27.8513 26.7203 29 25.2944 29C23.8686 29 22.7118 27.8513 22.7118 26.4351C22.7118 25.0181 23.8678 23.8694 25.2944 23.8694ZM25.2944 6.1915C29.692 6.1915 33.2638 9.73353 33.2638 14.1085C33.2638 18.4827 29.692 22.0247 25.2944 22.0247C20.8897 22.0247 17.3243 18.4835 17.3243 14.1077C17.3243 9.73353 20.8969 6.1915 25.2944 6.1915ZM25.2944 16.6734C25.6325 16.6748 25.9675 16.6095 26.2803 16.4813C26.5931 16.3531 26.8776 16.1645 27.1174 15.9263C27.3573 15.6881 27.5478 15.4049 27.6782 15.093C27.8085 14.7811 27.8761 14.4466 27.8771 14.1085C27.8762 13.7704 27.8087 13.4357 27.6784 13.1237C27.5481 12.8117 27.3576 12.5285 27.1177 12.2902C26.8778 12.0519 26.5933 11.8632 26.2805 11.735C25.9676 11.6067 25.6326 11.5414 25.2944 11.5428C24.9564 11.5414 24.6214 11.6067 24.3086 11.7349C23.9958 11.8631 23.7113 12.0517 23.4715 12.2899C23.2316 12.5281 23.041 12.8113 22.9107 13.1232C22.7804 13.4351 22.7128 13.7696 22.7118 14.1077C22.7127 14.4458 22.7802 14.7804 22.9105 15.0925C23.0408 15.4045 23.2313 15.6877 23.4712 15.926C23.711 16.1643 23.9955 16.353 24.3084 16.4812C24.6213 16.6095 24.9563 16.6748 25.2944 16.6734ZM9.04639 16.6734C9.47271 16.674 9.8819 16.5057 10.1843 16.2052C10.4868 15.9047 10.6578 15.4966 10.6599 15.0703C10.6578 14.6439 10.4867 14.2357 10.1841 13.9352C9.88145 13.6347 9.47204 13.4664 9.04558 13.4673H5.17247V16.6734H9.04639ZM5.17167 5.12978V8.33589H8.04186C8.46818 8.33653 8.87738 8.16818 9.17981 7.86771C9.48224 7.56724 9.65326 7.15915 9.65539 6.73283C9.65326 6.30652 9.48224 5.89843 9.17981 5.59796C8.87738 5.29749 8.46818 5.12913 8.04186 5.12978H5.17167ZM13.8024 10.2749C15.051 11.5001 15.8243 13.1958 15.8179 15.0703C15.8179 18.7896 12.7834 21.8032 9.03914 21.8032H0V0H8.03461C11.7788 0 14.8134 3.01439 14.8134 6.73364C14.8134 8.03058 14.4476 9.24858 13.8024 10.2749ZM49.7559 11.6145H47.1814V15.6399C47.1814 16.8587 47.5761 17.7561 48.6096 17.7561C49.2766 17.7561 49.764 17.6062 49.764 17.6062V21.3827C49.764 21.3827 48.695 22.0247 47.2466 22.0247H47.1822C47.1178 22.0247 47.0598 22.0166 46.9953 22.0166H46.9446C46.9164 22.0166 46.8801 22.0102 46.8519 22.0102C43.968 21.8604 42.0097 20.0575 42.0097 16.9296V3.65561L47.1741 2.56489V6.48472H49.7568V11.6153L49.7559 11.6145Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <svg fill="none" height="19" viewBox="0 0 119 19" width="119" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M64.965 8.55517C64.965 8.55517 63.8656 7.85669 63.1858 7.58642C63.1858 7.58642 61.0815 6.58434 60.664 6.10757C60.664 6.10757 59.8439 5.31343 60.3241 4.39105C60.3241 4.39105 60.5251 3.78749 61.3918 3.78749C61.3918 3.78749 62.5201 3.85125 62.5201 4.80406V6.14814H66.5637L66.5567 4.16861C66.5567 4.16861 66.8676 0.926878 61.7938 0.784137C61.7938 0.784137 57.8031 0.514593 56.6585 2.72309C56.6585 2.72309 56.2093 3.2158 56.2093 4.93159V6.17133C56.2093 6.17133 56.1635 7.60164 56.8743 8.52329C56.8743 8.52329 57.2763 9.12758 58.2664 9.79419C58.2664 9.79419 60.2769 10.9064 61.4835 11.5433C61.4835 11.5433 62.7013 12.2577 62.5413 13.3946C62.5413 13.3946 62.4418 14.5619 61.2656 14.5141C61.2656 14.5141 60.1901 14.4648 60.1901 13.32V11.9766H55.8814V13.9279C55.8814 13.9279 55.7608 17.6594 61.2973 17.6594C61.2973 17.6594 66.5877 17.7696 66.8345 13.8301V12.2411C66.8338 12.2411 67.0214 9.8268 64.965 8.55517ZM44.2633 1.24859L42.9093 9.96664H42.5927L41.2994 1.32684H34.545L34.2065 17.1145H38.2057L38.2536 5.21924H38.5681L40.688 17.1124H44.8952L46.9889 5.22359H47.2674L47.3641 17.1145H51.3844L50.9514 1.24859H44.2633ZM20.4573 1.31453L17.7966 17.0964H22.1018L23.678 4.85986H24.032L25.6074 17.0964H29.9119L27.2519 1.31453H20.4573ZM110.794 8.3378V10.6659H111.899V13.1649C111.899 14.3865 110.882 14.409 110.882 14.409C109.647 14.409 109.693 13.2482 109.693 13.2482V4.60408C109.693 3.71358 110.79 3.66576 110.79 3.66576C111.842 3.66576 111.849 4.72798 111.849 4.72798V6.04235H115.903C116.035 3.47664 115.537 2.85569 115.537 2.85569C114.532 0.53561 110.728 0.66241 110.728 0.66241C104.883 0.66241 105.531 5.27069 105.531 5.27069V13.6286C105.657 17.9507 111.417 17.5116 111.514 17.508C114.076 17.2167 114.85 16.3798 114.85 16.3798C115.562 15.8364 115.745 15.0836 115.745 15.0836C115.949 14.6452 116 13.2482 116 13.2482V8.3378H110.794ZM97.3582 10.9064H97.1819L93.0685 1.25293H88.1469V17.116H92.1524L91.9127 7.46397H92.0918L96.3533 17.116H101.125V1.25148H97.069L97.3582 10.9064ZM78.3694 13.1635C78.3694 13.1635 78.4272 14.4655 77.2524 14.4655C77.2524 14.4655 76.0168 14.5336 76.0168 13.1961L76.0042 1.26235H71.6108V13.1011C71.6108 13.1011 71.1602 17.5819 77.3144 17.5819C77.3144 17.5819 82.6626 17.6471 82.6626 13.3069V1.26308H78.3694V13.1635ZM12.0817 8.55517C12.0817 8.55517 10.9837 7.85669 10.3032 7.58714C10.3032 7.58714 8.20032 6.58579 7.78285 6.10829C7.78285 6.10829 6.9627 5.31271 7.44365 4.3925C7.44365 4.3925 7.64392 3.78893 8.5099 3.78893C8.5099 3.78893 9.63892 3.85197 9.63892 4.80478V6.14887H13.6839L13.6762 4.16861C13.6762 4.16861 13.985 0.926878 8.91327 0.784861C8.91327 0.784861 8.53106 0.759499 7.97043 0.788482C7.97043 0.788482 4.89789 0.958033 3.7992 2.68976C3.79285 2.7028 3.78368 2.71223 3.77734 2.72382C3.77734 2.72382 3.32883 3.2158 3.32883 4.93231V6.17205C3.32883 6.17205 3.28229 7.60236 3.99383 8.52402C3.99383 8.52402 4.39579 9.12831 5.38589 9.79491C5.38589 9.79491 7.39569 10.9071 8.60228 11.544C8.60228 11.544 9.82156 12.257 9.66008 13.3953C9.66008 13.3953 9.56064 14.5626 8.38508 14.5148C8.38508 14.5148 7.30966 14.4655 7.30966 13.3207V11.9766H3.00021V13.9293C3.00021 13.9293 2.87962 17.6609 8.41611 17.6609C8.41611 17.6609 13.7051 17.771 13.954 13.8315V12.244C13.954 12.2425 14.1388 9.8268 12.0817 8.55517Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <svg fill="none" height="36" viewBox="0 0 59 36" width="59" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.7684 12.8869C16.7684 13.6049 16.8461 14.1872 16.9819 14.6142C17.1372 15.0411 17.3313 15.5069 17.603 16.0115C17.7 16.1668 17.7388 16.3221 17.7388 16.4579C17.7388 16.652 17.6224 16.8461 17.3701 17.0401L16.1474 17.8553C15.9727 17.9717 15.798 18.0299 15.6428 18.0299C15.4487 18.0299 15.2546 17.9329 15.0605 17.7582C14.7888 17.4671 14.5559 17.1566 14.3619 16.8461C14.1678 16.5161 13.9737 16.1474 13.7602 15.701C12.2464 17.4865 10.3444 18.3793 8.05429 18.3793C6.42402 18.3793 5.12369 17.9135 4.17271 16.9819C3.22172 16.0503 2.73652 14.8082 2.73652 13.2556C2.73652 11.6059 3.31876 10.2668 4.50264 9.25758C5.68652 8.24837 7.25856 7.74376 9.25758 7.74376C9.91744 7.74376 10.5967 7.80199 11.3148 7.89903C12.0329 7.99607 12.7704 8.15133 13.5467 8.326V6.90922C13.5467 5.43422 13.2362 4.40561 12.6345 3.80396C12.0135 3.20232 10.9655 2.9112 9.47106 2.9112C8.79179 2.9112 8.0931 2.98883 7.37501 3.1635C6.65692 3.33817 5.95823 3.55166 5.27896 3.82337C4.96843 3.95922 4.73554 4.03686 4.59968 4.07567C4.46383 4.11449 4.36679 4.1339 4.28916 4.1339C4.01744 4.1339 3.88159 3.93982 3.88159 3.53225V2.58126C3.88159 2.27074 3.9204 2.03784 4.01744 1.90199C4.11448 1.76613 4.28915 1.63028 4.56087 1.49442C5.24014 1.14508 6.05527 0.853961 7.00626 0.621067C7.95725 0.368764 8.96646 0.252317 10.0339 0.252317C12.3434 0.252317 14.0319 0.77633 15.1188 1.82436C16.1862 2.87238 16.7296 4.46383 16.7296 6.5987V12.8869H16.7684ZM8.88883 15.8369C9.52929 15.8369 10.1892 15.7204 10.8878 15.4875C11.5865 15.2546 12.2076 14.8276 12.7316 14.2454C13.0421 13.8767 13.275 13.4691 13.3915 13.0033C13.5079 12.5375 13.5855 11.9747 13.5855 11.3148V10.4997C13.0227 10.3638 12.4211 10.2474 11.8 10.1698C11.179 10.0921 10.5773 10.0533 9.97567 10.0533C8.67534 10.0533 7.72435 10.3056 7.08389 10.8296C6.44343 11.3536 6.13291 12.0911 6.13291 13.0615C6.13291 13.9737 6.3658 14.653 6.851 15.1188C7.31679 15.604 7.99606 15.8369 8.88883 15.8369ZM24.4734 17.9329C24.124 17.9329 23.8911 17.8747 23.7359 17.7388C23.5806 17.6224 23.4447 17.3507 23.3283 16.9819L18.7674 1.97962C18.651 1.59146 18.5928 1.33916 18.5928 1.2033C18.5928 0.892777 18.748 0.718106 19.0586 0.718106H20.9605C21.3293 0.718106 21.5816 0.77633 21.7174 0.912185C21.8727 1.02863 21.9892 1.30034 22.1056 1.66909L25.3661 14.5171L28.3938 1.66909C28.4908 1.28094 28.6072 1.02863 28.7625 0.912185C28.9178 0.795738 29.1895 0.718106 29.5388 0.718106H31.0915C31.4602 0.718106 31.7125 0.77633 31.8678 0.912185C32.023 1.02863 32.1589 1.30034 32.2365 1.66909L35.303 14.6724L38.6605 1.66909C38.777 1.28094 38.9128 1.02863 39.0487 0.912185C39.204 0.795738 39.4563 0.718106 39.8056 0.718106H41.6105C41.9211 0.718106 42.0957 0.873369 42.0957 1.2033C42.0957 1.30034 42.0763 1.39738 42.0569 1.51383C42.0375 1.63028 41.9987 1.78554 41.9211 1.99903L37.2438 17.0013C37.1273 17.3895 36.9915 17.6418 36.8362 17.7582C36.6809 17.8747 36.4286 17.9523 36.0987 17.9523H34.4296C34.0609 17.9523 33.8086 17.8941 33.6533 17.7582C33.498 17.6224 33.3622 17.3701 33.2845 16.9819L30.2763 4.46383L27.2875 16.9625C27.1905 17.3507 27.074 17.603 26.9188 17.7388C26.7635 17.8747 26.4918 17.9329 26.1424 17.9329H24.4734ZM49.4125 18.4569C48.4033 18.4569 47.3941 18.3405 46.4237 18.1076C45.4533 17.8747 44.6964 17.6224 44.1918 17.3313C43.8813 17.1566 43.6678 16.9625 43.5901 16.7878C43.5125 16.6132 43.4737 16.4191 43.4737 16.2444V15.2546C43.4737 14.8471 43.629 14.653 43.9201 14.653C44.0365 14.653 44.153 14.6724 44.2694 14.7112C44.3859 14.75 44.5605 14.8276 44.7546 14.9053C45.4145 15.1964 46.1326 15.4293 46.8895 15.5846C47.6658 15.7398 48.4227 15.8174 49.199 15.8174C50.4217 15.8174 51.3727 15.604 52.0326 15.177C52.6924 14.75 53.0418 14.129 53.0418 13.3332C53.0418 12.7898 52.8671 12.3434 52.5178 11.9747C52.1684 11.6059 51.5086 11.276 50.5576 10.9655L47.7434 10.0921C46.3267 9.64574 45.2786 8.98587 44.6382 8.11251C43.9977 7.25857 43.6678 6.30758 43.6678 5.29837C43.6678 4.48324 43.8424 3.76515 44.1918 3.14409C44.5411 2.52304 45.0069 1.97962 45.5891 1.55265C46.1714 1.10626 46.8313 0.77633 47.6076 0.543435C48.3839 0.31054 49.199 0.213501 50.053 0.213501C50.4799 0.213501 50.9263 0.232909 51.3533 0.291133C51.7997 0.349356 52.2072 0.426988 52.6148 0.504619C53.003 0.601659 53.3717 0.698698 53.7211 0.815146C54.0704 0.931593 54.3421 1.04804 54.5362 1.16449C54.8079 1.31975 55.002 1.47501 55.1184 1.64969C55.2349 1.80495 55.2931 2.01844 55.2931 2.29015V3.20232C55.2931 3.60988 55.1378 3.82337 54.8467 3.82337C54.6915 3.82337 54.4391 3.74574 54.1092 3.59047C53.003 3.08587 51.7609 2.83357 50.3829 2.83357C49.2767 2.83357 48.4033 3.00824 47.8017 3.37699C47.2 3.74574 46.8895 4.30857 46.8895 5.10429C46.8895 5.64771 47.0836 6.1135 47.4717 6.48225C47.8599 6.851 48.578 7.21975 49.6066 7.54969L52.3625 8.42304C53.7599 8.86942 54.7691 9.49047 55.3707 10.2862C55.9724 11.0819 56.2635 11.9941 56.2635 13.0033C56.2635 13.8378 56.0888 14.5948 55.7589 15.2546C55.4095 15.9145 54.9438 16.4967 54.3421 16.9625C53.7405 17.4477 53.0224 17.7971 52.1878 18.0494C51.3145 18.3211 50.4023 18.4569 49.4125 18.4569Z"
                fill="currentColor"
              />
              <path
                clipRule="evenodd"
                d="M53.0806 27.8892C46.6954 32.6053 37.4184 35.1089 29.4418 35.1089C18.2628 35.1089 8.19014 30.975 0.582247 24.1046C-0.0193978 23.5612 0.524023 22.8237 1.24212 23.2507C9.47106 28.025 19.6214 30.9168 30.1211 30.9168C37.2049 30.9168 44.9875 29.4418 52.149 26.4142C53.2165 25.929 54.1286 27.1128 53.0806 27.8892Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M55.7395 24.8615C54.9244 23.8135 50.3441 24.3569 48.2674 24.6092C47.6464 24.6869 47.5494 24.1434 48.1122 23.7359C51.7609 21.174 57.7579 21.9115 58.4566 22.7655C59.1553 23.6388 58.2625 29.6359 54.8467 32.5082C54.3227 32.9546 53.8181 32.7217 54.051 32.1395C54.8273 30.2181 56.5546 25.8901 55.7395 24.8615Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <svg fill="none" height="18" viewBox="0 0 91 18" width="91" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M9.31948 0.161179C14.2843 0.641702 19.7297 3.12384 22.8531 6.72777C26.8569 11.2922 25.496 15.8571 19.8098 16.8977C14.1241 18.0189 6.27616 15.1364 2.27237 10.5714C-0.77095 7.04755 -0.690299 3.52428 2.11219 1.60275L17.8877 13.2944L9.31948 0.161179Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M87.4761 16.8977L85.4745 8.88956C85.2331 7.92908 85.0735 6.96803 84.9139 6.08707H84.8332C84.6736 7.04812 84.593 7.92908 84.3527 8.96965L82.35 16.8977H78.9068L83.4718 0.24127H86.1947L91 16.8977H87.4761ZM34.9445 0.24127L36.9467 8.24887C37.2671 9.20991 37.3472 10.1715 37.5073 11.0514H37.5874C37.7476 10.0909 37.8277 9.12926 38.0679 8.16878L40.0701 0.24127H43.5133L38.9489 16.8977H36.2259L31.4213 0.24127H34.9445ZM45.9949 0.24127H49.2785V16.8977H45.9949V0.24127ZM67.8576 0.24127L69.5383 10.0914L70.8998 0.24127H75.304L76.9858 16.8977H73.6227L72.8219 4.88577L72.2612 8.96965L70.8998 16.8977H68.3375L66.7358 8.88956L66.1752 5.20612V4.88577H66.0951L65.6146 16.8977H62.0907L63.5329 0.24127H67.8576ZM57.4468 0.24127C56.8862 0.641706 56.4863 1.36193 56.166 2.08271C55.285 4.08489 56.2455 5.68607 57.0464 7.12764C57.127 7.28782 57.2877 7.52808 57.3667 7.76834C59.2087 10.8111 59.8494 13.053 58.5686 16.2559L58.2482 16.8972H54.2439C54.7244 16.4962 55.2044 15.9367 55.4446 15.2954C56.4062 13.1331 55.285 11.1314 54.2439 9.1287C53.0431 6.80673 51.7612 4.40468 53.1226 1.1211C53.2033 0.800751 53.5237 0.240143 53.5237 0.240143H57.4468V0.24127Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="lg" sx={{ py: '120px' }}>
        <Stack spacing={8}>
          <Stack maxWidth="700px" spacing={2} sx={{ mx: 'auto' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h3">
              Supercharge your SaaS productivity
            </Typography>
            <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
              Our template is wonderfully simple and user-friendly. It&apos;s easy to love when you focus on essentials
              and skip non-critical extras.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            <Grid md={8} xs={12}>
              <Box
                sx={{
                  bgcolor: 'var(--mui-palette-background-level1)',
                  border: '0.0625rem solid var(--mui-palette-divider)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                }}
              >
                <Stack spacing={2} sx={{ p: 4 }}>
                  <div>
                    <Chip color="primary" icon={<CodeBlockIcon />} label="Quality first" variant="soft" />
                  </div>
                  <Typography variant="h5">Built by experts</Typography>
                  <Typography color="text.secondary" variant="body2">
                    Each template is a well-structured Vite & Next.js project, adhering to MUI best practices. All code
                    is written by our in-house team of experts.
                  </Typography>
                </Stack>
                <Box sx={{ height: '18.75rem', position: 'relative' }}>
                  <NoSsr>
                    <Box
                      component="img"
                      src={
                        colorScheme === 'dark' ? '/assets/home-feature-1-dark.png' : '/assets/home-feature-1-light.png'
                      }
                      sx={{ bottom: 0, height: '100%', position: 'absolute', left: 0, width: 'auto' }}
                    />
                  </NoSsr>
                </Box>
              </Box>
            </Grid>
            <Grid md={4} xs={12}>
              <Box
                sx={{
                  bgcolor: 'var(--mui-palette-background-level1)',
                  border: '0.0625rem solid var(--mui-palette-divider)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                }}
              >
                <Stack spacing={2} sx={{ p: 4 }}>
                  <div>
                    <Chip color="primary" icon={<DiamondsFourIcon />} label="Figma backed" variant="soft" />
                  </div>
                  <Typography variant="h5">Design files</Typography>
                  <Typography color="text.secondary" variant="body2">
                    Figma Files Now Included with Plus & Extended Licenses: Boost Your Creativity!
                  </Typography>
                </Stack>
                <Box sx={{ height: '18.75rem', position: 'relative' }}>
                  <NoSsr>
                    <Box
                      component="img"
                      src={
                        colorScheme === 'dark' ? '/assets/home-feature-2-dark.png' : '/assets/home-feature-2-light.png'
                      }
                      sx={{ bottom: 0, height: '100%', top: '0.25rem', left: 0, position: 'absolute', width: 'auto' }}
                    />
                  </NoSsr>
                </Box>
              </Box>
            </Grid>
            <Grid md={4} xs={12}>
              <Box
                sx={{
                  bgcolor: 'var(--mui-palette-background-level1)',
                  border: '0.0625rem solid var(--mui-palette-divider)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                }}
              >
                <Stack spacing={2} sx={{ p: 4 }}>
                  <div>
                    <Chip color="primary" icon={<PaletteIcon />} label="Themeable" variant="soft" />
                  </div>
                  <Typography variant="h5">Easy to customize</Typography>
                  <Typography color="text.secondary" variant="body2">
                    Tweak the theme in your editor for global style changes.
                  </Typography>
                </Stack>
                <Box sx={{ height: '18.75rem', position: 'relative' }}>
                  <Box
                    component="img"
                    src="/assets/home-feature-3.svg"
                    sx={{ bottom: '-150px', height: '450px', right: 0, position: 'absolute', width: 'auto' }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid md={8} xs={12}>
              <Box
                sx={{
                  bgcolor: 'var(--mui-palette-background-level1)',
                  border: '0.0625rem solid var(--mui-palette-divider)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                }}
              >
                <Stack spacing={2} sx={{ p: 4 }}>
                  <div>
                    <Chip color="primary" icon={<TimerIcon />} label="Save time" variant="soft" />
                  </div>
                  <Typography variant="h5">Built with the latest tech</Typography>
                  <Typography color="text.secondary" variant="body2">
                    Every template provides a thoughtfully structured project, offering a codebase that&apos;s not only
                    productive but also a joy to work with.
                  </Typography>
                </Stack>
                <Box sx={{ height: '18.75rem', position: 'relative' }}>
                  <NoSsr>
                    <Box
                      component="img"
                      src={
                        colorScheme === 'dark' ? '/assets/home-feature-4-dark.png' : '/assets/home-feature-4-light.png'
                      }
                      sx={{ bottom: 0, height: 'auto', left: 0, position: 'absolute', width: '100%' }}
                    />
                  </NoSsr>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
