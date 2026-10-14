# Viva Preparation Bot

A complete, frontend-only viva preparation platform for engineering students. It works by opening `index.html` directly in a browser and can be deployed easily on GitHub Pages.

## Features

- Subject-wise question bank across core engineering topics
- Search and filtering by subject, difficulty, and question type
- Chatbot-style viva assistant with instant quick access
- Project viva question generator
- Practical viva question suggestions
- Rapid-fire question mode
- Mock viva with keyword-based evaluation
- Interactive multiple-choice quizzes with subject, difficulty, and question-count filters
- Quiz feedback, answer review, and local score history
- Bookmarking and progress tracking using `localStorage`
- Light/dark mode
- Floating quick-chat button for instant viva access
- Explain Simply mode for beginner-friendly answers
- Expanded subject coverage across core CS, mechanical, civil, electrical, electronics, and DEMP engineering areas
- Wide question taxonomy including definition, design, safety, calculation, troubleshooting, procedure, and fault-analysis prompts
- Responsive dashboard for desktop, tablet, and mobile
- No backend, no database, no API keys, no installation required

## Subjects Covered

- DSA
- Java
- Python
- DBMS
- SQL
- Operating Systems
- Computer Networks
- COA
- TOC
- AI
- ML
- IoT
- Software Engineering
- Web Technology
- Cloud Computing
- Cybersecurity
- SDN
- Compiler Design
- Distributed Systems
- Big Data
- Git & GitHub
- Object-Oriented Programming
- Digital Electronics
- Computer Graphics
- Data Mining
- Embedded Systems
- Microprocessor
- Discrete Mathematics
- DEMP
- Workshop Technology
- Manufacturing Processes
- Metrology & Quality Control
- Mechanical Engineering
- Civil Engineering
- Electrical Engineering
- Electronics Engineering
- Electronics & Communication Engineering
- Power Systems
- Control Systems
- Chemical Engineering
- Instrumentation Engineering
- Production Engineering
- Automobile Engineering
- Robotics
- Renewable Energy
- VLSI
- Biomedical Engineering
- Engineering Drawing
- Materials Science
- Thermodynamics
- Fluid Mechanics
- Strength of Materials
- CAD/CAM
- Industrial Engineering
- Engineering Economics
- Signals & Systems
- Engineering Mathematics
- Hydraulics
- Thermal Engineering
- Heat Transfer
- Environmental Engineering
- Transportation Engineering
- Structural Analysis
- Design of Machine Elements
- Machine Tools
- Foundry and Welding
- Project Viva
- Practical Viva

## Project Structure

```text
Viva-Preparation-Bot/
├── index.html
├── style.css
├── script.js
├── README.md
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## How to Run

1. Download or clone the project.
2. Open `index.html` directly in a browser.
3. The app is fully frontend-only and will work without a server.

## How to Add Questions

Edit the `SUBJECT_TOPICS` object and the `buildQuestionBank()` function in `script.js` to add or customize more viva questions.

Example format:

```javascript
{
  subject: "DBMS",
  topic: "Normalization",
  difficulty: "Easy",
  question: "What is normalization?",
  answer: "...",
  simpleAnswer: "...",
  example: "...",
  importantPoint: "...",
  followUps: ["...", "...", "..."]
}
```

## How `localStorage` Works

The app stores:

- bookmarks
- mock viva scores
- quiz scores
- attempted questions
- recent subjects
- theme preference

This is handled in the browser using `localStorage`, so no server-side database is needed.

## Deploying to GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to Settings → Pages.
4. Select the branch and folder containing the app, usually `main` and `/root`.
5. Save the settings.
6. GitHub Pages will provide a URL like:

```text
https://YOUR-USERNAME.github.io/Viva-Preparation-Bot/
```

## Future Improvements

- More subject topics and deeper question bank
- Better semantic matching for chatbot answers
- More advanced mock viva scoring
- Audio-based viva practice
- Progress reports and analytics
- Quiz export and PDF generation

## Notes

This project is intentionally designed to be simple, educational, and portable so it can be used straight from the filesystem and deployed on GitHub Pages without any custom backend.
