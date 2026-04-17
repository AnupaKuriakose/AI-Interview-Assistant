# AI Interview Assistant

An AI-powered interview simulation tool built with React and Vercel AI SDK.
This application helps users practice technical interviews by generating questions, evaluating responses, and providing structured feedback.

---

## 🚀 Features

* Interactive mock interview experience
* Role-based interview modes (Frontend, Backend, etc.)
* AI-generated questions based on user input
* Answer evaluation with:

  * Strengths
  * Areas of improvement
  * Suggested better answers
* Real-time streaming responses for smooth chat experience

---

## 🧠 How It Works

The application uses a structured prompt-driven workflow to simulate an interview:

1. The AI asks one question at a time
2. The user submits an answer
3. The AI evaluates the answer with detailed feedback
4. The conversation continues iteratively

This controlled interaction is achieved through prompt engineering and maintaining conversation context across messages.

---

## 🏗️ Tech Stack

* React
* Vercel AI SDK
* OpenAI GPT models

---

## ⚙️ Architecture

### Frontend

* Chat-based UI built with React
* Manages message state and user input
* Displays streaming responses

### Backend

* Serverless API route using Vercel
* Handles communication with LLM
* Streams responses back to frontend

---

## 🔑 Key Concepts Demonstrated

* Prompt engineering for controlled AI behavior
* Stateful conversation handling
* Streaming UI updates
* AI-driven workflow design

---

## 🌐 Live Demo

(TODO Add your deployed Vercel link here)

---

## 📸 Screenshots / Demo

(TODOAdd GIF or screenshots)

---

## ▶️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-interview-assistant.git
cd ai-interview-assistant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

```bash
OPENAI_API_KEY=your_api_key
```

### 4. Run locally

```bash
npm run dev
```

---

## 📌 Future Improvements

* Interview scoring system
* Resume-based question generation (RAG)
* Voice-based mock interviews
* Persistent chat history

---

## 💡 Why This Project?

This project goes beyond a simple API integration by designing a structured AI interaction system.
It demonstrates how large language models can be guided to perform multi-step workflows like a real interview process.
