# Cookie Run Kingdom (P1 - Project)

## Intro

Web app that displays Cookie Run Kingdom JSON data within HTML.

## Functionality

- As a user I want to visit the web app and see a list of six Cookie Run Kingdom characters when the page loads.
-- In this list, I want to see each Cookie's character name, rarity, battle position, battle type, and an image of each Cookie.
- As a user, I want to check the checkbox on the page, and then see the Cookies displayed in alphabetical order by name.
- As a user, I want to search by Cookie names by typing the name into the search/input box.
- As a user, I want to see three battle position like buttons (Positions: Front, Middle, and Back). I want to click a like button, see the like counter increase by 1 and see the Cookies with the matching battle position.

## Features
Here’s what you’ll find in this my project: 
- Single page web application using HTML, CSS, and JavaScript
    - Cookie Run Kingdom JSON server with db.json
    - Data is accessed asynchronously
- Event listeners included:
    - DOMContentLoaded
       - All Cookies are displayed on the page
       - Items displayed are text strings with each characters name, rarity, position, type, and image
    - Keyup
       - Specific Cookies are displayed sting filter 
    - Click
       - Specific Cookie battle position like counter increases 
    - Checkbox
       - All Cookies are displayed in alphabetical order by Cookie name.
- Array Iteration
    - filter method is used to search Cookies by name input as well as like buttons 
    - sort method is used to sort alphabetically by checkbox
    - map is used to create and display HTML elements