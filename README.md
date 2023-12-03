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

## Dynamic nested route

To create review detail page of a product 1

products/1/reivews/3

![nested route structure](image-3.png)

Then we create reviews and reviewId inside

In the last level of nested route, we can receive all parameters of url path

## Route group

![Route group](image-4.png)

With this structure, we don't need to add auth route in url path

To view login page
http://localhost:3000/login

To view forgot password page
http://localhost:3000/forgot-password

To view forgot register page
http://localhost:3000/register

## Layouts

A layout is UI that is shared between multiple pages in the app

![Layout](image-5.png)

![Render Layout](image-6.png)

## Nested Layout

With nested route we can receive children and params, which is helpful for creating sidebar

Layout for product detail page

![Layout for product detail page](image-7.png)

## Metadata for layout and page

### Metadata for layout

![Alt text](image-8.png)

### Metadata for page

![Alt text](image-9.png)

## Link component navigation

Using Link to add new route url path

Link's operating mechanism is similar to Stack (Last in first out)

if we add replace property for Link tag, it will replace the current history state instead of adding a new URL to the stack
