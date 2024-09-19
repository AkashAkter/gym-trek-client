# Gym Trek

## Introduction

Gym Trek's application empowers users to manage products effortlessly. You can create, edit, and remove products, as well as filter them by category. The app also allows you to set minimum and maximum price limits and search for products by title. Users can add items to their cart and proceed directly to checkout from there.

This README will walk you through the process of setting up and running the project on your local machine.

## Features

- Api debouncing for the search functionality to reduce the number of API calls
- Cart management system
- Reload alert
- Stripe

## Technology Stack

- React
- Redux Toolkit
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Formik
- Stripe

## Getting Started

To begin working on the project, adhere to the guidelines listed below.

### Prerequisites

Verify that the following programs are installed on your computer:

- Git
- Node.js (v20.9.0 recommended)
- npm or any package installer

### Cloning the Repository

First, clone the repository using the following command:

```
git clone https://github.com/AkashAkter/gym-trek-client.git

```

### Installing Dependencies

Open the project file in terminal and run `npm install`

```
npm install

```

### Setting Up Environment Variables

Create a .env file in the root directory of the project and add your MongoDB credentials:

```
VITE_IMGBB_KEY=imgbb api key
VITE_BASE_API=
VITE_STRIPE_PUBLISHABLE_KEY=your Stripe Publish key
```

### Running the Project

Once you have set up the environment variables, you can run the project locally.

```
npm run dev

```

### Accessing the Project

```
http://localhost:5173
```
