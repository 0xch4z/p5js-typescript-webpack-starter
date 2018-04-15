interface Window {
  preload(): void;
  setup(): void;
  draw(): void;
  remove(): void;
  noLoop(): void;
  loop(): void;
  push(): void;
  pop(): void;
  redraw(): void;
}

declare var window: Window;
