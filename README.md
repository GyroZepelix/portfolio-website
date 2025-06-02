# My Portfolio website

- Simple portfolio website made with React and Shadcn. You can access it at [dgjalic.com](https://dgjalic.com).

## How to Deploy

### Prerequisites

1. Ensure you have Docker with Docker Composed installed and fully running
2. Have a server with Traefik set up with docker compose
3. Setup Traefik with an external network attached to it called 'traefik-reverse-proxy'

### Deployment

```shell
$ cd portfolio-website
$ docker compose up -d
```
