---
title: "Film GenderGap"
subtitle: "CS230 Final Project"
date: 2024-01-04 00:00:00
description: >
  In my CS307 Computer Graphics Final Project, I created an immersive solar system experience, featuring a dynamic display of planets and captivating particle animations. The project aimed to showcase key graphics concepts learned during the course, emphasizing hierarchical modeling, materials, lighting, user interaction, and animation.
featured_image: "/images/projects/newBechdel/newBechdel.png"
---

![]({{ site.baseurl }}/images/projects/newBechdel/newBechdel1.png)

### Project Overview

For CS230 Data Structures final project, our team embarked on an exploratory journey into the realm of gender representation in movies. Drawing inspiration from the renowned Bechdel-Wallace Test, a simple yet effective metric for measuring feminism in movies, we sought to delve deeper into the nuances of gender equality in the film industry.

---

### Introduction

The Bechdel-Wallace Test, originating in the 1980s, set the foundation for our exploration. It focused on the presence of at least two named female characters engaging in a conversation not centered around a man. In our project, we expanded upon this concept by analyzing the top fifty movies released in 2016 through twelve distinct tests. These tests covered categories such as behind the camera, beyond white women, female protagonists, and the supporting cast.

---

### Methodology

Our methodology involved creating a custom "feminist score" for each movie. We selected seven tests, including the Bechdel Test, Ko Test, Pierce Test, Villarreal Test, Koeze-Dottle Test, Feldman Test, and Rees Davies Test. By assigning points based on the percentage of tests passed, we calculated a score ranging from 1 to 100. Movies were then sorted based on their feminist scores using a priority queue, with tiebreakers determined by alphabetical order.

---

### Main Features:

**1. Data Parsing and Movie Creation:**
The `MovieCollection` class is designed to read and parse movie data from files. It constructs a collection of movies by creating instances of the `Movie` class, each representing a film with a title, actors, and Bechdel test results. The `readMovies` method reads a file containing movie titles and corresponding test results, while the `readCast` method populates the movies with their respective casts.

**2. Feminist Score Calculation:**
The heart of the project lies in the `Movie` class, where the `feministScore` method calculates a feminist score for each movie based on a custom method. The score is determined by analyzing the results of specific Bechdel tests, and movies are ranked accordingly.

**3. Actor Class:**
The `Actor` class represents an actor with a name and gender. It is used in conjunction with the `Movie` class to create a list of actors for each movie.

**4. Priority Queue Sorting:**
The `rankMovies` method in the `MovieCollection` class utilizes a priority queue to sort movies based on their feminist scores. The sorting considers ties and orders movies alphabetically by title in case of equal scores.

---

### Technical Highlights:

**1. Object-Oriented Design:**
The project follows a robust object-oriented design with well-defined classes (Movie, Actor, MovieCollection) in Java. Each class has specific responsibilities, promoting code modularity and maintainability.

**2. Custom Feminist Scoring System:**
The implementation of a custom feminist scoring system showcases creativity in addressing the complex issue of gender representation in movies. The score is calculated based on a subset of Bechdel tests.

**3. Testing and Debugging:**
The `main` methods in both `MovieCollection` and `Movie` classes demonstrate thorough testing of functionalities. It includes scenarios such as reading files, creating movies, calculating feminist scores, and sorting movies.

---

### Conclusions

Surprisingly, our results revealed numerous ties among movies. The movie with the highest feminist score was "Independence Day: Resurgence," followed by others categorized with scores of 71, 57, 42, 28, or 14. Notably, movies that might seem to have a high feminist score on the surface often ended up with lower scores. This realization underscored the importance of tests that highlight contributions behind the screen.

---

**Team Members:** Alejandra Robayo(ar111@wellesley.edu), Nile Rankin-Watson(nr100@wellesley.edu), Hae Rin Hong(hhong6@wellesley.edu)

<a href="https://haerinh.github.io/portfolio/" class="button button--large" >View Projects</a>
