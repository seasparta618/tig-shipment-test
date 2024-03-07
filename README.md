# Tig Frontend Code Testing
Time spent: around 4 hours from 20:40 - 00:25 without ReadMe

## Description:
This project is a shipment tracking system that allows users to view and manage shipments. It features a user interface built with React and Chakra UI, where users can see a list of shipments, their details, and tracking history. 

## Technologies Used
React: A JavaScript library for building user interfaces.
Chakra UI: A simple, modular, and accessible component library that provides building blocks to create React applications.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Vite: A modern frontend build tool that provides a fast and lean development experience.

## How to Run the project

1. Please clone the project from [this repo](https://github.com/seasparta618/tig-shipment-test.git)
2. Install all the dependencies using `npm install`
3. Using `npm run dev` to start the application
4. The application will run on `localhost:5173` by default

## Design Path
Design Path
1. Initial Setup: Setting up essential tools like `Prettier`, `ESLint`,` testing environment`, and `alias path mapping`.
2. Data and Types: Defined `types and mock data functions`. Used mock data to test functionality and component elements first. For type definitions and mocks, refer to `src/types` and `src/mock`. 
3. Also considered special states such as `Zero Content`, `Error Content`, and `Loading Content`, which are defined as separate components in `src/components/common/contentStates`.
4. Main Screen: Customized the main screen to create a displayable container.
5. Shipment List: Developed ShipmentList and ShipmentItem components and wrote unit tests for them.
6. Shipment Page: Constructed ShipmentPage and adjusted the style.
7. Shipment Detail Page: Developed ShipDetailPage using the Drawer component from Chakra UI for the sliding modal.
8. Header and Other Components: Developed the Header, Accordion Toggle, Info Grid, and Tracking History components with unit tests.
9. Modal Actions: Added actions to show/hide the sliding modal and tested with manual clicking with mock data.
10. Sorting: Did not implement the sorting function due to the lack of a clear sorting rule in the description. However, sorted the data from the GraphQL API before display to ensure proper initial list display even if the API returns unordered data.

## What can be improved:
1. Absolutely integration test should be added
2. Should consider using Next.js or Remix for better initial data loading and server-side rendering. For Next.js, can use getServerSideProps or getStaticProps to fetch initial data, or for Remix, can use loader function to preload data first
3. Storybook should be applied, when the project is pretty big and there are steps to reach the path to place the new feature, it would be better to deploy the components including atoms or molecures into storybook first.