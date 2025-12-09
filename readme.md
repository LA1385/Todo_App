

---

# 📌 To-Do App – README Summary

This project is a simple mobile-friendly **To-Do List Web App** built using **HTML, TailwindCSS, and JavaScript**, with **localStorage** for saving user data and tasks.

## 🚀 Features

### 👤 **User Profile System**

* Users enter a **username** and select a **gender**.
* Gender selection automatically updates the **profile picture**.
* Username and gender are saved via **localStorage**.
* The interface switches to a greeting mode (e.g., *“Hi John”*) once the user logs in.
* Users can **change their username** anytime.

### 🧠 **Motivational Quote Generator**

* Fetches random motivational quotes from:
  **[https://dummyjson.com/quotes/random/motivational](https://dummyjson.com/quotes/random/motivational)**
* Display includes:

  * Quote text
  * Author
* Includes a **Generate Quote** button with loading state and error handling.

### 📝 **To-Do List System**

* Users can:

  * Add tasks
  * Add a time for each task
* Tasks are saved under a unique key: **task_username**
* Tasks **persist after page reload**.
* Each task includes a **Done** button:

  * Removes the task from the UI
  * Updates localStorage accordingly

### 💾 **LocalStorage Usage**

The app stores:

* Username (`name`)
* Gender (`gender`)
* Tasks (`task_username`)

This ensures the app remembers user settings and tasks even after refreshing or closing the page.

## 📱 Mobile Behavior

* Fully visible and functional on small screens.
* On larger screens (desktop/tablets), a message appears indicating the page is designed for mobile use.

## 🏗️ Tech Stack

* **HTML5**
* **TailwindCSS**
* **Vanilla JavaScript**
* **LocalStorage API**
* **Font Awesome Icons**

## 📂 Main Files

* `index.html` – Structure and UI
* `scripts.js` – App logic (user system, quote API, tasks)
* `output.css` – TailwindCSS compiled file
* `images/` – Profile images (default, male, female)

---

