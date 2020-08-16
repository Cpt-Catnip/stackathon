export const WORLD_HEIGHT = 600;

export const WORLD_WIDTH = 800;

export const g = 0.001;

export const s_t = (t, s0 = 0, v0 = 0, a = g) => {
  return s0 + v0 ** 2 + 0.5 * a * t ** t;
};

export const v_t = (t, v0 = 0, a = g) => {
  return v0 + a * t;
};
