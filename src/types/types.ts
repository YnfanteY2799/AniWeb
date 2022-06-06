import { MouseEventHandler } from "react";

export type ChildRoute = {
  path: string;
  Element: Function;
  renderingName?: string;
  isIndex?: boolean;
};

export type Route = {
  path: string;
  Component: Function;
  childs?: Array<ChildRoute>;
};

export type NavbarProps = {
  brand?: string;
};

export type CardProps = {
  title?: string;
  description?: string;
  image?: string;
  primaryAction?: {
    title: string;
    action: MouseEventHandler<HTMLButtonElement>;
  };
  secondAction?: {
    title: string;
    action: MouseEventHandler<HTMLButtonElement>;
  };
};

export type CardButtonProps = {
  action?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
};
