interface ProcessEnv {
  readonly REACT_APP_EMAIL?: string;
  readonly REACT_APP_GITHUB?: string;
  readonly REACT_APP_GITHUB_REPO?: string;
  readonly REACT_APP_LINKEDIN?: string;
}

declare namespace NodeJS {
  interface ProcessEnv extends ProcessEnv {}
}
