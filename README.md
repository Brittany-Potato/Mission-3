# ------------------------- MISSION THREE

Project:
Due to the insurance process redesign, management is expecting a lot of staff in the department to be re-trained into other roles. Build an application that can be used by a staff member to practice job interviews for another role. Here is a description of the requirements.

Specifications:
The user will see the following items.
• A “Job title” textbox that allow users to type in a job title that they interview for. It is a free-text field, not a drop down selection.
• A <div> or textarea in the middle that displays both what the user typed and the response of the AI Interviewer as they appear.
• A textbox that allow users to type in response
• A submit button that will submit the response to the application. Upon receiving the response, the application will send the response to generative AI via API to get a response.

## ------------------------- FRONT END

| DONE|

Installs:

- React
- React-DOM

Process:

App.jsx - Main file.
App.css & index.css - Wiped.
ai-container - Created, will be the main communication container.

| TODO |

- Connect to the backend.
- Add in the functions to get the input and text boxes all linked together for smooth message progression etc.
- Create the rest of the website?

## -------------------------- BACK END

| DONE |

- Installed npm, express, dotenv, cors, nodemon, jest, google/genai, axios
- Set up a simple server setup
- Added the AI API key in the .env
- Put in the first function for the AI
- I found adding the API tricky, I had to change all my (Const " " = require(" ")) because when using the API you need to use import instead. The initial function the API website provided wasnt work and with some troubleshooting I ended up changing it a fair bit.

| TODO |

- Build initial server and install/import the needed modules etc.
- Generate and collect the API key from the chosen AI API -> Put in the .env file.
- Connect the backend the the frontend to act as the middleman betweent he AI API and the frontend.
- Add in the API code and configure the AI, lots of guides on the website (For gemini).
- Add in the messages/prompts.
