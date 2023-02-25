# Blog Project

This is a blog project built with Next.js 13 as the frontend and Sanity as the backend. It's a simple website that allows you to write and publish blog posts. It's designed to be easy to use and modify, with a simple and clean interface that makes it easy to navigate.

### Getting Started

To get started with this project, you will need to have the following tools installed:

```
Node.js
npm or yarn
Git
```
You will also need to sign up for a Sanity account and create a new project to use as your backend. You will need to obtain your project ID and dataset name, which you will use to configure your project.

To install and run the project, follow these steps:

Clone this repository to your local machine using the command git clone https://github.com/your-username/your-repo.git
Navigate to the project directory with cd your-repo
Install the dependencies with npm install or yarn install
Create a .env.local file in the project root directory and add your Sanity project ID and dataset name, like this:
makefile
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=your-dataset-name
NEXT_PUBLIC_SANITY_API_VERSION=2022-11-15
```
Run the development server with npm run dev or yarn dev
Open your browser and navigate to http://localhost:3000 to view the website
Folder Structure

The project has the following folder structure:
```
/components - contains reusable UI components used throughout the website
/lib - contains helper functions and utility files
/pages - contains the website's APIs, that fetch the data from sanity into next.js
/public - contains static files, such as images and fonts
/schema - contains the schema definition for your Sanity project
/app - contains all the pages for the admin and the user.
```
### Writing Blog Posts

To write and publish blog posts, you can use the Sanity Studio interface. You can access the Studio by navigating to http://localhost:3333 in your browser. From there, you can create new blog posts and publish them to your website.

The blog posts are stored in your Sanity dataset, and the website will automatically fetch and display them on the homepage and individual blog post pages.

### Running the Project

To run the project, navigate to the project directory and run the following command:

```
npm install
npm run dev
```

This will start the development server and open the website in your default browser. Any changes you make to the code will be automatically reloaded, so you can see the results of your changes in real-time.

##

This blog project is a great starting point for building a personal blog. It's built with modern tools and frameworks, and is designed to be easily customizable and extendable. Use it as a starting point, and build on it to create a unique and personal blog that showcases your writing and ideas.
