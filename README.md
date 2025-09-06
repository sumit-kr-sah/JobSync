JobSync
Project Overview
JobSync is an AI-powered resume screening tool designed to help users assess how well their resume matches a specific job description. The application provides a score and offers ATS-based suggestions to help users optimize their resumes and improve their chances of getting noticed by recruiters. Built with a focus on privacy and security, the application utilizes a secure, personal cloud for each user.

Features
AI-Powered Screening: The tool uses a powerful AI model to analyze and score the compatibility of a resume against a given job description, helping users quickly understand their fit for a role.

Secure Personal Cloud Integration: Built on top of Puter, an open-source internet operating system that provides a privacy-first personal cloud. This ensures that all user data, including resumes and personal information, is securely stored and processed.

Seamless Drag-and-Drop: Users can easily upload their resumes with a user-friendly drag-and-drop interface, powered by react-dropzone.

Intelligent Suggestions: The application leverages Claude 3.7 Sonnet to generate ATS-based suggestions, providing actionable insights to refine and enhance resume content.

Dynamic Routing: Utilizes React Router v7 to create a smooth and intuitive single-page application experience.

Traffic Monitoring: The project's usage and user engagement are tracked and monitored using Google Analytics.

Technologies Used
Frontend:

React.js

React Router v7

react-dropzone

AI/Backend:

Puter (for cloud services, authentication, and processing)

Claude 3.7 Sonnet (for AI-powered suggestions)

Analytics:

Google Analytics

Getting Started
To get a local copy of the project up and running, follow these steps.

Prerequisites
Node.js (v16 or higher)

npm or yarn

Installation
Clone the repository:

git clone [https://github.com/sumit-kr-sah/JobSync.git](https://github.com/sumit-kr-sah/JobSync.git)
cd JobSync

Install the project dependencies:

npm install
# or
yarn install

Environment Variables:
The project requires configuration for the Puter and Claude APIs. Create a .env file in the root directory and add the necessary credentials.

# Example .env file
REACT_APP_PUTER_API_KEY=your_puter_api_key
REACT_APP_CLAUDE_API_KEY=your_claude_api_key

(Note: The actual variable names may vary. Refer to the project's source code for the correct names.)

Running the Application
To start the application in development mode, you would typically use a command defined in the package.json file. 

# To start the development server
npm run dev

If the project uses a custom script, please check the "scripts" section in the package.json file for the correct command.
