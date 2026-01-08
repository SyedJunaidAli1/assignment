# Notes Management App

A simple Notes Management application built using **React (Next.js App Router)** as part of an internship assessment.  
The app demonstrates core React fundamentals such as component-based architecture, state management, and UI state handling (loading, empty, and error states).

---

## ✨ Features

- Add notes with title and optional description
- Delete existing notes
- Input validation with error handling
- Simulated loading state
- Empty state when no notes exist
- Clean and responsive UI using Tailwind CSS

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript (TSX)**
- **Tailwind CSS**

> Note: Next.js is used only as a React framework. All logic runs on the client side.

---

## 📂 Project Structure

```
app/
│
├── page.tsx // Main component (state management)
├── components/
│ ├── NoteForm.tsx // Add note form with validation
│ ├── NoteList.tsx // Renders list of notes
│ ├── NoteItem.tsx // Individual note item
│ ├── Loader.tsx // Loading state UI
│ └── EmptyState.tsx// Empty state UI
│
├── layout.tsx
└── globals.css
```

---

## 🧠 State Management & Flow

- All application state is managed in `page.tsx` using React hooks:
  - `useState` for notes and loading state
  - `useEffect` to simulate an API call using `setTimeout`

### State Flow:

1. App loads → `isLoading` is `true`
2. Loader is displayed
3. After simulated delay, loader disappears
4. User can add or delete notes
5. If no notes exist, empty state is shown

---

## ⏳ Loading State

- A simulated API call is created using `setTimeout`
- While loading, a spinner-based loader is displayed
- Once loading completes, the main UI is rendered

---

## 📭 Empty State

- If no notes are available, a user-friendly empty state message is shown
- Encourages users to add their first note

---

## ⚠️ Error Handling

- Title field validation is implemented
- Displays an error message if the title is empty
- Submit button is disabled until valid input is provided

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/SyedJunaidAli1/assignment
cd assignment
```

### 2. Install dependencies

```
bun install
```

### 3. Start the development server

```
bun run dev
```


### 📌 Notes

* No backend or database is used

* No external state management libraries (Redux, Context API)

* Focused purely on React fundamentals as required