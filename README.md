# Next.Js

## Routing

- Next.js has a file-system based routing mechanism
- URL paths which users can access in the browser are defined by files and folders in your codebase
  _To create about page_
  We need to create about folder and file with name: page.tsx

Folder structure

![create about page](image.png)

about/page.tsx

![about/page.tsx](image-1.png)

## Dynamic routes

To create list products and view detail individual product through url path
/products/1 and /products/2

![product list](image-2.png)

product detail page receives params as a props and get id of product

if we name dynamic routes as id, we can get

    const id = params.id

if we name dynamic routes as slug, we can get

    const slug = params.slug
