# FrontEnd Web Presence
## Background
The San Diego Zoo Wildlife Association (SDZWA) manages a vast network of multimedia sensors within the grounds of their
Safari Park. Researchers at SDZWA deploy various sensor types across large physical distances throughout their enclosures.
Current methods of retrieving data are very hands-on and not scalable. In addition to this scalability problem, there is no
way to determine the health of a given sensor at any time without physical access. In order to more efficiently manage these
nodes, we are creating a web-based user interface to view their sensors’ output, metadata, and sensor health - all managed via
a secure, reliable database capable of collection and storage of sensor information. To implement this solution, our group uses
React and NodeJS with a SQLite database to build a tool that will centralize access to these sensors. This web application will
allow researchers to easily view and manage data across large networks, resulting in more accessible information and higher
potential for meaningful scientific results.

## The Team

The frontend team consists of:

* Ahmed Hussaini: MS CSE --> AI/ML
* Brandon DalPorto: MS CSE --> Systems/Security
* Malcolm McSwain: MS CSE --> Systems/WebDev

We are all first year Master's students interesting in creating a web application capable of real world use. Using our expertise gained from our different backgrounds and educations, we have brought done our best to create a viable product over this past quarter.

## Organization

The organization of the frontend is as follows. Pages/ holds the login, registration, edit sensor, sensor and dashboard pages written using React-Bootstrap libraries. Components/ holds some external components for the dashboard tiling. Styles/ contains the CSS styling for the application. Services/ contains the API functions for placing API requests to the backend server, separated by user requests in User.ts and sensor requests in Sensor.ts, as well as a createRequest() method that generalizes all requests in Api.ts. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Required components for this project are React, NodeJS, and NextJS. See below for official documentation on installing those on your device:

React: https://reactjs.org/docs/getting-started.html

Node: https://nodejs.org/en/download/package-manager/

NextJS: https://nextjs.org/docs/getting-started



First, install the project dependencies:

```bash
npm install
```
To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Next Steps

Visit the backend github at https://github.com/UCSD-E4E/sdzwa-sensor-dashboard-backend for starting up the docker image, SQLite database, and Prisma ORM.
