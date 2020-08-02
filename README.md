# Simple React Portfolio

## Completed Tasks
- imported bootstrap template stylesheet for a quick theme
- updated sections and overwrote styles as needed
- basic portfolio site built

## Todo
- finish dockerization
- configure AWS server
- launch MVP portfolio site
- update components
- optimize and remove redundancies
- build backend


## Docker

### Dev
`docker-compose build`
`docker-compose up`

### Production
- build and test run on the server
  - `docker-compose -f docker-compose.production.yml up --build`
- run docker-compose in the background
  - `docker-compose -f docker-compose.production.yml up -d`