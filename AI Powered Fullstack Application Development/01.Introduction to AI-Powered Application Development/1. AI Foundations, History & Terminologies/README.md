# AI Foundations, History & Terminology

## What is Artificial Intelligence?

Intelligence can be understood as the ability to understand a situation, connect ideas, learn from experience, and solve problems to achieve a goal.

AI is a way of building software systems that can recognize patterns, make predictions, generate content, and support human decision-making.

## Natural Intelligence vs Artificial Intelligence
Natural Intelligence

- Found in humans and animals
- Based on biological systems
- Uses experience, senses, memory, emotion, creativity, and social understanding

Artificial Intelligence

- Created using software and hardware
- Uses data, algorithms, statistical patterns, and mathematical models
- Can perform tasks such as language understanding, image recognition, code generation,      recommendations, and question answering.

##  The Different Types of AI & Key Concepts

AI → ML → DL → Generative AI

One of the most important concepts I learned is that these technologies can be understood as layers:

Artificial Intelligence (AI)
        │
        └── Machine Learning (ML)
                │
                └── Deep Learning (DL)
                        │
                        └── Generative AI

- Artificial Intelligence (AI)

The broadest concept. AI includes systems that perform tasks that normally require human-like intelligence, such as recognizing patterns, solving problems, making decisions, or understanding language.

- Machine Learning (ML)

Machine Learning is a way of creating AI systems that learn patterns from data instead of requiring developers to manually program every rule.

- Deep Learning (DL)

Deep Learning is a type of Machine Learning that uses multi-layer neural networks. It is especially useful for complex data such as images, audio, text, and video.

- Generative AI

Generative AI focuses on creating new content such as:

Text
Images
Audio
Code
Other types of content

Unlike traditional systems that mainly classify or analyze existing data, generative models can produce new content based on learned patterns.

## The Model

a model is the final product we get after training an AI system. It is the learned result of a training process. It is not the same as the algorithm, the app, or the API

## Levels of Intelligence: ANI, AGI, and ASI

- ANI (Artificial Narrow Intelligence) - “The Specialist”
  ANI systems are characterized by their exceptional proficiency at ONE specific task or a very tightly defined set of tasks.

-  AGI (Artificial General Intelligence) - "The Human Level"
   An AGI system would be defined as an AI that can successfully perform any intellectual task that a human being is capable of.

- Artificial Super intelligence (ASI):
  The final and most speculative stage of AI. and (ASI) is theoretical and describes an AI that not only matches human intelligence but surpasses it in all aspects, including creativity, problem-solving ability, and social skills. 

- Foundation Models
  Foundation models are large general-purpose models trained on broad data and then adapted for many tasks. Instead of building a separate model for every small problem, developers can use one foundation model as a powerful base and guide it with prompts, tools, retrieved data, or fine-tuning.

  # Large Language Models

  - How LLMs Actually Work ?
An LLM generates text by repeatedly predicting the next token based on the prompt and previous tokens.

  - Tokens
LLMs do not read text exactly the way humans read words. They break text into tokens. A token may be a whole word, part of a word, punctuation, or a space. Tokenization matters because tokens affect cost, context limits, and speed.

  - Context Window
The context window is the amount of text the model can consider in one request. It includes the system message, user message, chat history, retrieved documents, examples, and sometimes tool outputs. 

  - Temperature
Temperature controls how predictable or creative the model is when selecting tokens.

Temperature	Behavior
Low	        More precise and predictable
Medium	        Balanced and conversational
High	        More creative and varied

  - Hallucinations
An AI hallucination happens when a model produces an answer that sounds confident but is wrong, invented, or unsupported.
As a developer, I need to verify AI-generated code and information instead of accepting it blindly.

# The AI Foundations, History & Terminology Topic is finished.