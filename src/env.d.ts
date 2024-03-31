/// <reference types="astro/client" />

interface ImportMetaEnv {
  TORNEOPAL_API_KEY: string;
  TORNEOPAL_CLUB_ID: string;
  TORNEOPAL_COMPETITION_ID: string;
  MOCK_TORNEOPAL_REQUESTS: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
