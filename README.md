# SampleNx

Client-APP demo https://sample-nx.vercel.app/

## Pages

### List Species

show list of star wars species

### Detail Species

show more detail information of species

## Project Description

- This project was generated using [Nx](https://nx.dev).
- it has keyboard navigation support. `tab` or `arrow down` to move down and `arrow up` move up.
- responsive
- `Client-app` is on apps directory which using next.js.
- `Client-api` package is used to fetch all data from graphql server, it is splitted so it can be used in other project (DRY)
- `Shared-type` is used to placed any kind of shareable types.
- Using `chakra-ui` as based component to build web page
- `module` dir is used to placed any kind of component,logic,utils which related to their domain
- `utils` is used to placed hook, component, infrastructure things which not related to any kind of domain. (TODO) It can be splitted to a different package if needed (Can be shared with other react project)

## TODO

- adding RN sample project (use nx to generate RN project)
