
import React from 'react';

const Favorites = ({height, width, color}) => {
  return (
    <div className='favoritesIcon tooltip'>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={width} height={height} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path d="M1240 4786 c-321 -58 -587 -195 -809 -417 -164 -163 -284 -357 -355 -569 -54 -164 -67 -239 -73 -427 -8 -246 25 -431 117 -664 155 -390 419 -759 860 -1200 380 -380 783 -706 1281 -1035 209 -138 241 -154 302 -154 62 0 94 17 357 193 689 463 1309 1020 1682 1514 287 378 458 746 508 1091 16 109 7 401 -15 502 -130 591 -573 1031 -1165 1157 -121 26 -459 26 -580 0 -270 -58 -494 -170 -708 -356 l-82 -72 -83 72 c-210 183 -431 295 -697 354 -102 23 -436 29 -540 11z m2608 -332 c224 -40 441 -154 607 -319 164 -165 276 -377 319 -605 20 -105 20 -302 1 -414 -48 -276 -228 -630 -478 -944 -361 -451 -925 -949 -1560 -1377 l-177 -119 -160 108 c-428 287 -827 608 -1154 926 -510 497 -811 961 -896 1380 -25 122 -27 321 -4 440 83 439 405 784 846 906 111 31 338 43 454 25 298 -46 554 -197 751 -443 73 -92 128 -118 205 -97 45 12 71 35 161 146 178 218 475 374 769 402 99 10 203 5 316 -15z"/>
        </g>
      </svg>

    </div>
  );
};

export default Favorites;