import React from 'react';

const Carbs = ({height, width, color}) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width={width} height={height} viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill={color} stroke="none">
      <path d="M2508 4629 c-22 -12 -38 -70 -38 -138 0 -50 -3 -56 -52 -110 -94
      -101 -148 -244 -148 -388 l0 -80 -52 13 c-29 8 -78 14 -109 14 l-58 0 -36 61
      c-43 69 -71 85 -122 68 -39 -12 -67 -58 -58 -92 4 -12 25 -52 46 -88 35 -59
      39 -72 39 -135 0 -99 23 -178 88 -306 2 -5 -6 -8 -18 -8 -11 0 -32 -11 -45
      -25 -23 -22 -25 -31 -25 -127 0 -114 14 -177 58 -272 l29 -63 -32 -12 c-44
      -16 -55 -47 -55 -154 0 -106 18 -186 60 -271 17 -33 30 -61 30 -63 0 -1 -11
      -3 -24 -3 -15 0 -33 -11 -45 -26 -18 -23 -21 -41 -21 -120 0 -115 13 -179 55
      -270 l33 -72 -29 -6 c-42 -8 -59 -50 -59 -147 0 -192 93 -381 256 -520 73 -63
      190 -132 249 -149 l45 -13 0 -276 c0 -285 6 -343 40 -361 32 -17 88 -12 110
      10 19 19 20 33 20 318 l0 297 78 18 c236 53 408 216 467 443 18 69 20 232 3
      268 -6 14 -26 31 -43 37 l-32 12 32 71 c42 91 55 155 55 270 0 79 -3 97 -21
      120 -12 15 -30 26 -45 26 -13 0 -24 2 -24 3 0 2 13 30 30 63 42 85 60 165 60
      271 0 107 -11 138 -55 154 l-32 12 32 71 c42 92 55 155 55 272 0 87 -2 97 -25
      119 -13 14 -34 25 -45 25 -12 0 -20 3 -18 8 66 128 88 207 88 307 0 63 4 77
      31 121 54 83 61 109 45 148 -9 22 -24 37 -45 44 -51 18 -85 -1 -127 -69 l-35
      -59 -57 0 c-53 0 -98 -8 -147 -23 -19 -7 -20 -3 -17 106 6 180 -42 316 -153
      435 l-55 60 0 76 c0 63 -4 80 -20 96 -22 22 -82 27 -112 9z m97 -401 c84 -125
      103 -337 41 -481 -14 -33 -66 -88 -66 -71 0 5 -27 40 -59 76 -47 54 -62 78
      -72 121 -18 83 -7 210 24 279 27 61 74 128 88 128 5 0 24 -24 44 -52z m-393
      -479 c116 -39 209 -122 264 -237 37 -75 55 -92 99 -92 39 0 60 15 89 64 62
      107 199 199 316 213 l53 6 -6 -57 c-14 -136 -108 -262 -243 -326 -46 -23 -106
      -61 -137 -90 -30 -27 -57 -50 -60 -50 -2 0 -17 18 -32 40 -40 57 -140 135
      -227 175 -43 19 -91 52 -116 77 -57 57 -111 168 -119 241 l-6 57 32 0 c17 0
      59 -9 93 -21z m-27 -484 c124 -32 237 -128 294 -250 33 -70 52 -85 106 -85 31
      0 39 6 68 48 75 111 177 188 292 218 87 24 89 23 82 -45 -6 -72 -51 -170 -106
      -233 -28 -31 -68 -59 -133 -91 -51 -25 -116 -67 -145 -92 l-52 -46 -78 80
      c-66 67 -94 87 -176 126 -71 35 -108 59 -137 93 -56 63 -101 161 -107 233 -7
      69 -6 69 92 44z m38 -508 c120 -44 199 -117 257 -239 30 -62 58 -88 95 -88 28
      0 62 23 80 53 35 59 80 109 134 148 57 41 160 79 213 79 l31 0 -6 -56 c-3 -30
      -19 -84 -36 -119 -44 -96 -106 -155 -214 -209 -51 -25 -114 -65 -141 -89 l-50
      -44 -47 57 c-52 63 -156 137 -231 165 -97 36 -203 188 -215 309 l-6 56 36 0
      c20 0 65 -11 100 -23z m-38 -482 c32 -9 80 -27 107 -42 69 -38 154 -131 188
      -207 31 -68 51 -86 95 -86 40 0 62 16 90 64 31 54 118 137 171 164 47 24 139
      52 171 52 20 0 23 -5 23 -38 0 -84 -75 -233 -146 -290 -18 -14 -53 -34 -78
      -44 -60 -23 -118 -61 -172 -110 l-43 -40 -61 66 c-69 73 -147 128 -216 154
      -109 40 -224 211 -224 334 0 44 6 46 95 23z m27 -501 c65 -21 158 -83 200
      -135 20 -24 49 -71 66 -105 17 -33 36 -65 44 -71 44 -35 103 -22 133 30 73
      127 187 204 344 231 l34 6 -6 -60 c-7 -86 -54 -178 -124 -249 -87 -87 -208
      -135 -337 -134 -131 2 -336 150 -415 302 -34 64 -61 147 -61 188 0 19 4 21 38
      16 20 -2 58 -11 84 -19z"/>
      <path d="M980 3740 c-16 -16 -20 -33 -20 -96 l0 -76 -58 -63 c-110 -120 -156
      -251 -150 -432 3 -97 1 -112 -12 -107 -30 11 -114 24 -161 24 -47 0 -48 0 -83
      59 -42 68 -76 87 -126 69 -36 -12 -64 -59 -55 -91 4 -12 24 -51 45 -87 35 -60
      38 -73 43 -160 6 -104 29 -186 76 -262 31 -49 27 -58 -19 -58 -10 0 -28 -12
      -39 -26 -18 -23 -21 -41 -21 -120 0 -115 13 -179 55 -271 29 -63 31 -73 16
      -73 -24 0 -59 -35 -67 -66 -4 -14 -4 -73 -2 -132 4 -89 10 -120 36 -187 77
      -194 246 -332 460 -376 l62 -13 0 -338 c0 -325 1 -339 20 -358 13 -13 33 -20
      60 -20 27 0 47 7 60 20 19 19 20 33 20 363 l0 343 49 13 c27 7 82 32 122 56
      245 144 388 372 389 618 0 94 -17 135 -61 144 -16 3 -28 8 -26 12 63 116 87
      208 87 332 0 82 -3 100 -21 123 -11 14 -29 26 -39 26 -45 0 -50 10 -25 48 47
      72 77 170 82 272 5 87 8 100 42 160 51 87 53 96 37 134 -10 24 -24 37 -49 45
      -51 17 -79 1 -122 -68 l-38 -61 -56 0 c-31 0 -80 -6 -109 -14 l-52 -13 0 80
      c0 146 -55 288 -155 395 l-55 60 0 76 c0 92 -16 116 -80 116 -27 0 -47 -7 -60
      -20z m94 -375 c51 -67 79 -144 84 -234 7 -129 -8 -179 -79 -259 -32 -36 -59
      -71 -59 -76 0 -5 -14 3 -30 19 -41 40 -61 109 -67 241 -5 91 -2 122 12 169 19
      59 87 175 104 175 5 0 21 -16 35 -35z m433 -532 c-8 -80 -63 -187 -128 -249
      -28 -27 -59 -57 -68 -67 -9 -10 -41 -31 -72 -47 -73 -37 -151 -100 -191 -153
      l-33 -44 -58 49 c-32 27 -84 62 -116 77 -74 38 -198 167 -236 246 -16 34 -29
      84 -33 118 l-5 60 54 -7 c115 -14 254 -108 315 -213 29 -48 50 -63 89 -63 44
      0 62 17 99 95 68 140 223 252 355 254 l34 1 -6 -57z m3 -501 c0 -119 -115
      -295 -216 -331 -71 -25 -151 -80 -218 -151 l-67 -71 -55 50 c-31 27 -86 63
      -123 81 -108 51 -114 55 -164 116 -54 66 -88 145 -95 222 -4 50 -3 52 20 52
      38 0 129 -29 178 -58 61 -35 134 -105 165 -158 28 -48 50 -64 90 -64 43 0 63
      17 95 85 36 75 115 165 177 202 51 30 146 62 186 62 25 1 27 -2 27 -37z m0
      -474 c-1 -77 -66 -219 -138 -300 -54 -60 -150 -129 -227 -164 -98 -45 -226
      -31 -358 39 -112 59 -203 195 -214 317 l-6 60 34 -6 c155 -28 257 -92 329
      -208 25 -39 44 -59 67 -67 52 -17 82 4 127 91 22 41 62 98 90 126 70 69 187
      124 284 133 6 1 12 -9 12 -21z"/>
      <path d="M4028 3749 c-22 -12 -38 -70 -38 -138 0 -50 -3 -56 -52 -110 -94
      -101 -148 -244 -148 -388 l0 -80 -52 13 c-29 8 -78 14 -109 14 l-56 0 -38 61
      c-42 69 -71 85 -122 68 -39 -12 -67 -58 -58 -92 4 -12 24 -51 45 -87 35 -60
      38 -72 43 -160 5 -102 35 -200 82 -272 25 -38 20 -48 -25 -48 -10 0 -28 -12
      -39 -26 -18 -23 -21 -41 -21 -120 0 -131 23 -219 87 -335 2 -4 -10 -9 -26 -12
      -44 -9 -61 -50 -61 -144 1 -246 144 -474 389 -618 40 -24 95 -49 122 -56 l49
      -13 0 -343 c0 -330 1 -344 20 -363 22 -22 78 -27 110 -10 34 18 40 75 40 396
      l0 310 73 17 c207 49 364 182 439 372 26 68 32 97 36 192 5 133 -4 167 -53
      184 l-32 12 32 71 c42 91 55 155 55 270 0 79 -3 97 -21 120 -11 14 -29 26 -39
      26 -46 0 -50 9 -19 58 47 76 70 158 76 262 5 87 8 100 43 160 21 36 41 75 45
      87 9 32 -19 79 -55 91 -50 18 -84 -1 -126 -69 l-35 -59 -57 0 c-53 0 -98 -8
      -147 -23 -19 -7 -20 -3 -17 106 6 180 -42 316 -153 435 l-55 60 0 76 c0 63 -4
      80 -20 96 -22 22 -82 27 -112 9z m86 -384 c15 -19 39 -61 54 -93 25 -52 27
      -67 27 -182 0 -147 -15 -218 -57 -266 l-30 -34 -37 48 c-21 26 -48 56 -60 66
      -51 46 -68 227 -31 333 21 59 84 163 99 163 5 0 21 -16 35 -35z m-328 -519
      c93 -46 165 -119 210 -213 37 -76 55 -93 99 -93 39 0 60 15 88 63 32 54 94
      119 146 151 49 32 150 66 192 66 l32 0 -6 -57 c-13 -126 -144 -301 -274 -366
      -28 -15 -78 -48 -110 -75 l-58 -49 -33 44 c-40 52 -118 116 -186 150 -136 69
      -259 234 -273 368 l-6 58 54 -6 c30 -4 85 -22 125 -41z m-67 -495 c33 -10 80
      -30 103 -44 64 -37 141 -124 177 -200 33 -70 52 -87 96 -87 40 0 62 16 90 65
      31 52 122 138 174 164 45 23 137 51 168 51 20 0 23 -5 23 -38 0 -84 -75 -233
      -146 -290 -18 -14 -53 -34 -78 -44 -60 -23 -118 -61 -172 -110 l-43 -40 -67
      71 c-67 72 -147 127 -218 152 -101 36 -216 212 -216 331 0 34 3 38 24 38 13 0
      51 -8 85 -19z m-4 -493 c116 -29 226 -125 284 -246 28 -58 41 -74 66 -82 50
      -16 85 2 125 66 67 107 182 183 304 202 l59 9 -6 -58 c-6 -73 -50 -168 -105
      -230 -118 -133 -328 -189 -467 -125 -77 35 -173 104 -227 164 -72 81 -137 223
      -138 299 0 24 11 24 105 1z"/>
      </g>
    </svg>

  );
};

export default Carbs;