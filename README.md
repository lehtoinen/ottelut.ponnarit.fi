# Fixtures for Helsingin Ponnistus

Built with [Astro](https://astro.build/), bundled with [Bun](https://bun.sh/package-manager) and using data from the [Taso API](https://spl.torneopal.fi/taso/rest/help) by [TorneoPal](https://www.torneopal.fi/).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                          | Action                                           |
| :------------------------------- | :----------------------------------------------- |
| `bun install`                    | Installs dependencies                            |
| `bun run dev` or `bun run start` | Starts local dev server at `localhost:4321`      |
| `bun run build`                  | Build your production site to `./dist/`          |
| `bun run preview`                | Preview your build locally, before deploying     |
| `bun test`                       | Run unit tests                                   |
| `bun run astro ...`              | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help`        | Get help using the Astro CLI                     |

## Environment variables

Read access to the Taso API is needed to display fixtures. More info on the API in the [Tason rajapinta](https://tuki.palloliitto.fi/fi/support/solutions/articles/103000036813-tason-rajapinta) documentation (in Finnish).

Required keys and configuration are defined as env variables:

- `TORNEOPAL_API_KEY`: the club specific API key (can be requested in Taso)
- `TORNEOPAL_CLUB_ID`: the Taso id of the club to fetch the fixtures of (the owner of the provided API key). You can find this for example by searching for the club in [Tulospalvelu](tulospalvelu.palloliitto.fi). The id is the URL for a club (for example, `79` for [Helsingin Ponnistus](https://tulospalvelu.palloliitto.fi/club/79/info))
- `TORNEOPAL_COMPETITION_ID`: the id of the competition to fetch the fixtures of. Typically, there's a competition for every area, sport and season. E.g. `etejp24` where `ete` is for "eteläinen", `jp` is for "jalkapallo" (football, as opposed to futsal) and `24` is for season "2024"
- `MOCK_TORNEOPAL_REQUESTS`: when `true`, bypass all API requests and use the mock fixtures in `src/test/fixures` instead (usually during development to avoid redundant calls to the API)

### .env

You add env vars via an `.env` file in the project root. Example:

```
TORNEOPAL_API_KEY=
TORNEOPAL_CLUB_ID=
TORNEOPAL_COMPETITION_ID=
MOCK_TORNEOPAL_REQUESTS=false
```
