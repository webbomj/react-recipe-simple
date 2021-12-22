import React from 'react';

const Protein = ({height, width, color}) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width={width} height={height} viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill={color} stroke="none">
      <path d="M325 4856 c-127 -31 -232 -116 -288 -233 l-32 -68 0 -800 0 -800 32
      -68 c57 -120 169 -208 301 -236 35 -7 230 -11 577 -11 l524 0 -60 -83 c-69
      -95 -167 -288 -203 -400 -93 -287 -93 -615 0 -902 164 -506 591 -878 1129
      -982 124 -23 386 -24 515 0 654 121 1140 661 1189 1322 14 189 -9 390 -65 564
      -36 110 -134 304 -203 399 l-60 82 524 0 c347 0 542 4 577 11 132 28 244 116
      301 236 l32 68 0 800 0 800 -32 68 c-57 120 -169 208 -301 236 -80 17 -4388
      14 -4457 -3z m4441 -181 c65 -19 116 -63 148 -127 l26 -52 0 -741 0 -741 -26
      -52 c-14 -29 -42 -66 -62 -82 -72 -60 -76 -60 -743 -60 l-608 0 -72 54 c-506
      381 -1231 380 -1742 -3 l-68 -51 -608 0 c-667 0 -671 0 -743 60 -20 16 -48 53
      -62 82 l-26 52 0 741 0 741 26 52 c31 62 83 108 144 127 69 21 4343 22 4416 0z
      m-2008 -1710 c542 -88 968 -512 1058 -1054 24 -150 16 -369 -21 -509 -58 -224
      -153 -398 -315 -575 -115 -126 -340 -268 -520 -327 -247 -82 -544 -82 -800 0
      -163 53 -356 169 -489 294 -125 119 -263 340 -321 516 -81 244 -81 550 1 794
      149 447 540 783 1000 860 113 19 293 19 407 1z"/>
      <path d="M400 4184 c-8 -4 -25 -16 -37 -27 l-23 -20 0 -382 0 -382 22 -20 c33
      -29 57 -35 95 -22 53 17 63 48 63 197 l0 128 85 11 c109 13 167 46 212 122 80
      134 38 292 -97 366 -51 27 -63 29 -180 32 -69 1 -132 0 -140 -3z m225 -189
      c73 -30 65 -123 -12 -144 -21 -6 -50 -11 -65 -11 l-28 0 0 85 0 85 35 0 c20 0
      51 -7 70 -15z"/>
      <path d="M1074 4181 c-54 -23 -54 -26 -54 -428 l0 -372 24 -28 c19 -22 32 -28
      66 -28 34 0 47 6 66 28 23 27 24 35 24 168 0 106 3 139 13 139 7 0 46 -68 87
      -151 41 -83 83 -158 93 -167 11 -10 35 -17 59 -17 48 0 88 39 88 86 0 16 -28
      86 -64 157 l-63 127 47 45 c133 129 92 354 -79 428 -42 18 -273 28 -307 13z
      m263 -205 c55 -64 1 -136 -102 -136 l-35 0 0 86 0 86 57 -4 c46 -4 61 -10 80
      -32z"/>
      <path d="M1905 4181 c-54 -14 -113 -50 -144 -88 -52 -63 -61 -112 -61 -338 0
      -226 9 -275 61 -338 68 -83 196 -114 301 -74 57 22 133 102 148 155 13 48 13
      466 0 514 -14 48 -90 132 -139 151 -49 20 -127 28 -166 18z m113 -204 c21 -20
      22 -26 22 -222 0 -196 -1 -202 -22 -222 -13 -11 -31 -23 -41 -26 -26 -9 -76
      19 -87 49 -13 33 -13 365 0 399 11 28 64 56 89 47 9 -3 26 -14 39 -25z"/>
      <path d="M2434 4176 c-54 -24 -65 -95 -21 -143 17 -19 31 -23 84 -23 l63 0 0
      -316 c0 -186 4 -323 10 -334 15 -28 67 -42 108 -29 59 19 62 39 62 379 l0 300
      58 0 c61 0 89 17 106 64 12 35 -13 87 -50 102 -46 19 -375 19 -420 0z"/>
      <path d="M3130 4183 c-8 -3 -25 -15 -37 -26 l-23 -20 0 -382 0 -382 26 -24
      c25 -24 27 -24 234 -24 190 0 210 2 229 19 41 38 33 132 -14 150 -9 3 -79 6
      -156 6 l-139 0 0 80 0 80 123 1 c67 0 138 5 157 12 43 15 65 55 56 103 -11 57
      -32 64 -193 64 l-143 0 0 85 0 85 139 0 c77 0 147 3 156 6 8 4 23 20 31 36 23
      45 11 94 -29 118 -29 18 -50 20 -217 19 -102 0 -192 -3 -200 -6z"/>
      <path d="M3891 4179 c-51 -20 -50 -18 -51 -422 0 -232 4 -385 10 -397 15 -28
      69 -43 109 -29 59 21 61 37 61 422 0 231 -4 355 -11 377 -8 22 -22 37 -45 46
      -38 16 -41 16 -73 3z"/>
      <path d="M4310 4178 c-48 -26 -50 -39 -50 -420 0 -203 4 -368 10 -382 22 -58
      110 -69 150 -19 18 23 20 41 21 192 l0 166 90 -182 c74 -152 94 -185 120 -199
      37 -18 74 -12 107 18 l22 21 0 382 0 382 -22 20 c-33 29 -57 35 -95 22 -54
      -18 -63 -47 -64 -216 l0 -148 -83 165 c-46 91 -92 173 -103 182 -27 24 -73 31
      -103 16z"/>
      <path d="M3251 2469 c-19 -6 -49 -20 -66 -32 -18 -12 -247 -222 -510 -466
      -263 -245 -491 -456 -507 -469 l-29 -24 -103 100 c-91 89 -110 103 -161 118
      -132 38 -258 -15 -321 -136 -27 -52 -26 -172 3 -225 12 -22 115 -133 230 -246
      236 -234 254 -246 368 -237 44 4 77 14 107 31 57 34 1245 1138 1281 1190 36
      53 50 110 44 173 -9 88 -62 165 -142 206 -46 24 -144 32 -194 17z m130 -198
      c32 -32 35 -48 18 -83 -6 -13 -251 -246 -545 -518 -707 -656 -689 -640 -721
      -640 -21 0 -67 40 -225 197 -173 172 -198 201 -198 228 0 32 31 71 60 75 41 6
      63 -10 190 -135 132 -130 139 -135 179 -135 37 0 48 7 114 68 40 37 286 265
      546 507 260 242 483 445 495 452 33 19 55 15 87 -16z"/>
      </g>
    </svg>
  );
};

export default Protein;