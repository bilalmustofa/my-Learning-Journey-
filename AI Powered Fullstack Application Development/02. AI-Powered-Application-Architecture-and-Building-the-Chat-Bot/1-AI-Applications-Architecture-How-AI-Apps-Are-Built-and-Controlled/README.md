## AI Architecture, Model Selection & Advanced Terminology 

AI Architecture, Model Selection & Prompt Engineering

This folder contains my learning note from the AI Architecture, Model Selection & Advanced Terminology topics

This Topics focuses on understanding how AI applications are structured, how different AI components work together, how to select models, and how to design effective prompts for Large Language Models (LLMs).

 What I Learned
 1. Anatomy of an AI Application

I learned how the main parts of an AI application work together:

                    AI Application
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    Frontend          Backend          Database
        │                │                │
        │                │                └── Data & Memory
        │                │
        │                └── Orchestration
        │                    Authentication
        │                    Prompt Engineering
        │                    Guardrails
        │
        └── User Interface
                 │
                 ▼
              LLM API
                 │
                 ▼
           AI Model / Brain
 ### LLM API — The Brain

AI models such as GPT, Gemini, and Claude can be accessed through APIs.

The API acts as the connection between my application and the underlying AI model. The model responds based on the prompt and data provided to it.

### Backend — The Orchestrator

The backend manages important application logic such as:

Prompt engineering
Authentication
Guardrails
User permissions
Asynchronous tasks
Context construction
Communication with the LLM

Common backend technologies include:

Node.js
Express
FastAPI

### Frontend — The Interface

The frontend provides the interface where users:

Enter prompts
View AI responses
Interact with buttons and controls
Receive streaming responses

### Database — Data & Memory

The database stores information such as:

User data
Chat messages
Conversation history
Session information

Because the model does not automatically remember previous requests, relevant history can be retrieved from the database and included in a new prompt.