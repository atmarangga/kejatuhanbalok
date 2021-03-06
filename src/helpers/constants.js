export const MARGIN_LEFT = 4;
export const MARGIN_RIGHT = 4;
export const MARGIN_TOP = 4;
export const TOTAL_MARGIN_HORIZONTAL = MARGIN_LEFT + MARGIN_RIGHT;
export const TOTAL_BOX_HORIZONTAL = 10;
export const TOTAL_BOX_VERTICAL = 21;
export const CONTROLLER_HEIGHT = 150;

export const DIRECTION_DOWN = 'DOWN';
export const DIRECTION_LEFT = 'LEFT';
export const DIRECTION_RIGHT = 'RIGHT';

export const I_PIECE = 1;
export const S_PIECE = 2;
export const Z_PIECE = 3;
export const T_PIECE = 4;
export const L_PIECE = 5;
export const J_PIECE = 6;
export const O_PIECE = 7;

export const COLOR_I_PIECE = "#FF0";
export const COLOR_S_PIECE = "#0F0";
export const COLOR_Z_PIECE = "#F00";
export const COLOR_T_PIECE = "#0FF";
export const COLOR_L_PIECE = "#0AFAA0";
export const COLOR_J_PIECE = "#00F";
export const COLOR_O_PIECE = "#FA09FF";




// base matrix and colors
export const MATRIX_I_PIECE = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

export const MATRIX_S_PIECE = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
export const MATRIX_Z_PIECE = [[0, 0, 0], [3, 3, 0], [0, 3, 3]];
export const MATRIX_T_PIECE = [[0, 0, 0], [4, 4, 4], [0, 4, 0]];
export const MATRIX_L_PIECE = [[0, 0, 0], [5, 5, 5], [5, 0, 0]];
export const MATRIX_J_PIECE = [[0, 0, 0], [6, 6, 6], [0, 0, 6]];
export const MATRIX_O_PIECE = [[7, 7], [7, 7]]; // no rotation
