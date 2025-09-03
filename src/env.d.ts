interface ProcessEnv {
  readonly REACT_APP_EMAIL?: string;
  readonly REACT_APP_GITHUB?: string;
  readonly REACT_APP_GITHUB_REPO?: string;
  readonly REACT_APP_LINKEDIN?: string;
}

declare namespace NodeJS {
  interface ProcessEnv extends ProcessEnv {}
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";
declare module "*.svg";
declare module "*.gif";