# 🏗️ Use Data Attributes to Display Hidden Number

Work with a partner to implement the following user story:

* As a player, I want to reveal hidden numbers by clicking on empty boxes. When I click on a revealed number, I want that number to be hidden again.

## Acceptance Criteria

* It's done when I click on an empty box and the hidden number is revealed.

* It's done when I click on a revealed number, and the number is hidden once more.

## Assets

The following image demonstrates the web application's appearance and functionality:

![Six boxes appear in a grid, with the numbers 1, 3, and 5 displayed on three of the boxes while the remaining three appear blank.](./images/01-screenshot.png)

---

## 💡 Hints

How can we use the `dataset` object to access an element's data attributes?

The dataset object is a property of the Element interface that provides read/write access to these custom data attributes.
Data attribute names starting with data- are converted to camelCase when accessed through the dataset object.
You can use both dot notation and bracket notation to access data attributes.
The dataset object is dynamic, meaning you can add or remove attributes as needed.

Data attribute values are always strings.   
You can use hasOwnProperty to check if a specific data attribute exists.
Be mindful of potential browser compatibility issues with older browsers.
By using the dataset object, you can effectively store and retrieve custom data associated with elements in your HTML

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* We have learned `getAttribute()` and `setAttribute()`. What other methods can you use to access an element's attributes?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
