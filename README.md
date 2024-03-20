# Pokemon App #

## A simple, searchable encyclopedia of Pokemon##

**Link to platform: https://pokemon-23k7omdlj-pillroys-projects.vercel.app/**

This application is created and deployed as a simple encyclopedia Pokemon app, serving selected data from [PokeAPI](https://pokeapi.co/). Use the app to search for your favourite pokemon, and click to view more detailed characteristics (*attributes & base stats*).

![Desktop screenshot](/public/images/platform-screenshot.jpg)

### Key User Information ###

- Go to https://pokemon-23k7omdlj-pillroys-projects.vercel.app/ to use
- To report an issue with the application, email **walkertom1996@gmail.com** with the details*

**When reporting an issue, a screen recording or screenshot with a clear explanation of the user action(s) taken before the issue arises are extremely helpful to the development team*

### Developer Information ###

**This is a [Next.js](https://nextjs.org/) 14 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses App router, TypeScript, Radix-UI and TailwindCSS.**

#### Getting Started ####

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Key methods/approaches & justifications ####

- Pokemon list data is called **server-side** for load-time performance
- Detail modal designs for mobile and desktop are **filed separately** for flexibility ease in future design modifications

#### Known issues ####

- Modal loading time for mbile is an issue. **Loading context needs adding for this** (*use pokeball gif*)
- Nesting warning in global css file (*nesting used for element-specific scroll bar styling*)

#### Learn More ####

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### Deploy on Vercel ####

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
