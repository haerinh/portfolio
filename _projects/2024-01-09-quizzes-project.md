---
title: "Fun Facts"
subtitle: "CS204 Project"
date: 2024-01-05 00:00:00
description: >
  "Fun Facts" is an application designed for formatting and answering multiple-choice quizzes, inspired by the familiar format of platforms like Sakai. This project focuses on generating a user-friendly interface with radio button sets for each quiz question, providing a seamless experience for answering questions and self-grading.
featured_image: "/images/projects/quizzes/funfact.png"
---

![](/images/projects/quizzes/funfact1.png)

### Project Overview

- **Quiz Format:** The application begins by defining a set of multiple-choice questions in a JSON format, mirroring the structure commonly found in online quiz platforms. Each question, represented as a JavaScript object literal, includes the question itself (Q), four answer options (A-D), and the correct answer (ANS).
- **Responsive Design:** The interface adapts to various screen sizes, ensuring a consistent and user-friendly layout. For narrower screens, questions stack vertically, while wider screens display questions side by side. The application leverages Bootstrap's grid system for responsive and visually appealing layouts.
- **Answering Questions:** Users interact with the application by selecting their answers from the provided radio button sets. The interface is designed to be intuitive and straightforward, mimicking the experience of taking quizzes on familiar platforms like Sakai.
- **Self-Grading:** After answering each question, users can initiate the grading process. The application employs an event delegation mechanism for efficient handling of the grading functionality, allowing users to assess their answers without keeping track of the overall score.
- **Dynamic DOM Manipulation:** The core functionality involves dynamic manipulation of the Document Object Model (DOM). Drawing inspiration from the "Dynamic DOM" reading, the application organizes and presents quiz questions dynamically, enhancing the overall user experience.

---

### Technical Highlights

#### JavaScript and jQuery

- **Question Class:** Utilizes the object-oriented programming (OOP) approach with the `Question` class to dynamically create question elements with radio buttons and a grading button.
- **Data Handling:** Stores quiz questions in a JavaScript array and dynamically generates question instances based on the data.
- **Event Handling:** Implements event delegation using jQuery to handle button clicks and trigger the grading process.

#### CSS Styling

- **Responsive Design:** Utilizes Flexbox and media queries to create a responsive and visually appealing design that adjusts to different screen sizes.
- **Aesthetic Choices:** Incorporates pastel tones, rounded corners, and subtle gradients to enhance the overall visual appeal.
- **Class-based Styling:** Uses CSS classes such as `.correct` and `.incorrect` to dynamically highlight correct and incorrect answers.

#### HTML Structure

- **Logical Layout:** Defines a clean HTML structure with a `main` element, heading, and two outer divs for organizing quiz questions.
- **Semantic Tags:** Utilizes semantic HTML tags like `h1` and `div` for better code structure and accessibility.

This project showcases a blend of dynamic JavaScript functionality, jQuery event handling, and CSS styling, resulting in an interactive Fun Fact Quiz.
