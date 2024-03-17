# Project README

## Description

This project is a React application built using Vite, TypeScript, and Tailwind CSS. It utilizes local storage for data storage, async/await for requests, Vitest, and testing-library-react for testing purposes.

The deployed version is available below:
[Wild-Life](https://wild-life-seven.vercel.app)
## Prerequisites

Before running the project, make sure you have Node.js and npm installed on your machine.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Setting API Key

You need to set your API key in the `.env.local` file. The API key should start with `"VITE_API_KEY"`. For example:

```
VITE_API_KEY=YOUR_API_KEY
```

Usage of the API key in the code:

```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

## Usage

To run the project, execute the following command:

```bash
npm run dev
```

This command will start the development server.

## Testing

Testing is implemented using `vitest`, `testing-library-react`. You can run the tests using the following command:

```bash
npm test
```

## Contributors

- Ava Bakuei

## Contact

For any inquiries or issues, please contact ava.bakuie@gmail.com.

---

Feel free to customize this README with additional information specific to your project!
