---
title: "WENDI"
subtitle: "CS304 Final Project"
date: 2024-01-06 00:00:00
description: The Wellesley Evaluation Network for Dorm Information (WENDI) is a web tool designed to streamline the housing selection journey. WENDI facilitates effortless navigation through campus housing options, enhanced by genuine peer reviews and data inputs from fellow students. This tool allows users to report and share insights about the rooms they and their peers have lived in, offering a rich source of real-world data and experiences.
featured_image: "/images/projects/wendi/wellesleylogo.png"
---

![](/images/projects/wendi/wellesleylogo.png)

---

## WENDI

The Wellesley Evaluation Network for Dorm Information (WENDI) is a web tool designed to streamline the housing selection journey.
WENDI facilitates effortless navigation through campus housing options, enhanced by genuine peer reviews and data inputs from fellow students. This tool allows users to report and share insights about the rooms they and their peers have lived in, offering a rich source of real-world data and experiences.

---

### Technology Stack

- **Flask**: Used as the web framework
- **MySQL**: Database for storing user data and reviews
- **HTML/CSS**: For structuring and styling the web pages

---

### Main Features

#### User Registration/Join Page

- Allows new users to create an account with us
- Hashes passwords with Bcrypt
- Implements sessions so that only logged-in users can post a review/access previous reviews

#### Landing Page

- Displays all residential halls, categorized by complex
- Interactive elements to navigate to specific dorms

#### Dorm Page

- Lists rooms in the selected dorm
- Room filtering by capacity
- Links to individual room pages

#### Room Page

- Shows reviews and comments for a specific room
- Ability to submit comments (requires login)

#### Room Review Page

- Form to submit reviews for a specific room
- Options to rate various aspects of the room and attach images

#### Home Page

- Personalized space for users to navigate their reviews and comments
- Links to individual review/comment pages

---

### GitHub Repository

Explore the codebase of WENDI on GitHub:

<a href="https://github.com/yanziv/WENDI">GitHub Repository</a>

---

### Visual Showcase

#### WENDI Platform Highlights

_**A Comprehensive Exploration of Key Endpoints**_

Explore WENDI's features through these snapshots capturing the essence of the housing selection journey. From insightful peer reviews to user-friendly interfaces, these images showcase the various endpoints that make WENDI a powerful tool for navigating campus housing.

<div class="gallery" data-columns="1">
	<img src="/images/projects/wendi/wendi1.png">
	<img src="/images/projects/wendi/wendi2.png">
	<img src="/images/projects/wendi/wendi3.png">
	<img src="/images/projects/wendi/wendi4.png">
	<img src="/images/projects/wendi/wendi5.png">
	<img src="/images/projects/wendi/wendi6.png">
	<img src="/images/projects/wendi/wendi7.png">
</div>

---

### Video Demo

#### Navigating WENDI

_**A Visual Tour of the Housing Selection Journey**_

Take a virtual stroll through the Wellesley Evaluation Network for Dorm Information (WENDI) with the demo video. This visual showcase provides an in-depth exploration of the website, guiding you through its intuitive design and highlighting key endpoints. Get a firsthand look at how WENDI streamlines the housing selection journey for students. This video serves as a comprehensive guide to the functionality and user-friendly features of WENDI.

<iframe src="https://player.vimeo.com/video/900056296?h=7c27fd7379" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

---

**Team Members:** Annabel Yao(yy102@wellesley.edu), Emma Lim (el110@wellesley.edu), Hae Rin Hong (hhong6@wellesley.edu), Veronica Lin (yl102@wellesley.edu)
