# The Mathematics of Meaning

## Vectors & Embeddings

## Topic Overview

This Topic introduces the mathematical foundation behind embeddings, vectors, semantic search, and similarity-based retrieval.

The main idea is that modern AI applications can represent text as numerical vectors, allowing computers to compare and retrieve information based on meaning rather than only exact keywords.

The General concept of this Topic turn text into number vectors so a computer can compare meanings using math.

1. The Problem with Keywords

  - Traditional keyword search looks for matching characters or words.

## The exact-match trap
 
 * <b>Synonyms:</b> Different words can point to the same idea. A user may search for 'computer' while the database      says 'laptop'. Exact matching may return nothing.
 * <b>Word variations:</b> A search for 'run' may not match 'running', 'runner', or 'ran' unless extra rules are added.
 * <b>Spelling and wording:</b> A user might type 'JS framework' while the document says 'JavaScript library'. The meaning is close, but the
 * <b>Context:</b> The same word can have different meanings depending on surrounding words

 <b>Note: Polysemy means a word has multiple meanings. A keyword search may match the word but misunderstand the concept</b>

 2. <b>Semantic Search:</b> (Matching Meaning Instead of Letters)

 - Semantic search focuses on the meaning of the query rather than only matching the exact words.

 ## 3. What Is an Embedding?

 An embedding is a numerical representation of text. 
 It translates a word, phrase, sentence, paragraph, or document into a list of numbers called a vector

 These numbers (vector) allow computers to compare, rank, cluster, and search text using mathematical operations.

 *  The embedding model: (translator)

 An embedding model is the AI model that performs the translation from text to vector.

 * Vectors & Dimensions

 A vector is a list of numbers representing coordinates in a mathematical space.

A simple example:

Fat     → [5, 1]
Long    → [1, 5]

In real embedding systems, vectors can contain hundreds or thousands of dimensions. it capture topic, tone, grammar, domain, intent, and relationships at the same time.

## 4. Measuring Similarity with Cosine Similarity

Once text has been turned into vectors, the next question is: how similar are two vectors? One common
method is <b>cosine similarity</b>

Formula
Cosine Similarity = (A · B) / (||A|| × ||B||)

It measures the angle between two vectors.

If vectors point in similar directions, their meanings are considered more similar.

* How to read cosine similarity scores

-  1.0 ------  Same direction
-  0.7 ------- to 0.9 Very related
-  Around 0.0 ------- Weakly related or unrelated
- -1.0 ------- Opposite direction

## How Semantic Search Works in an Application

Semantic search usually happens in two phases: an indexing phase and a query phase.

<b>Phase 1 </b>— Indexing

Documents
   ↓ 
Chunk the documents (Break)
   ↓ 
Create embeddings 
   ↓ 
Store vectors + original text + metadata 
   ↓ 
Build vector index

<b>Phase 2</b> — Searching

User Query
    ↓
Create Query Embedding
    ↓
Compare with Stored Vectors
    ↓
Calculate Similarity
    ↓
Rank Results
    ↓
Apply Threshold
    ↓
Return Top Results

<b>The query must use the same embedding model as the stored documents for meaningful comparison.</b>

## Thresholds: the cut-off point

A threshold defines the minimum similarity score required for a result to be accepted.
A good threshold reduces the chance that the model uses unrelated context

## RAG connection
In retrieval-augmented generation, embeddings help find relevant source text before an AI model writes an answer.

## 5. Limitations, Mistakes, and Best Practices

Embeddings are powerful, but they are not perfect. A good search system usually combines embeddings withcareful design.

* Limitations

- Ambiguity — a word such as "jaguar" can have multiple meanings.
- Domain language — specialized terminology may not always be represented well.
- Freshness — new terminology may not be understood without updated information.
- Bias — embedding models can reflect patterns in their training data.
- Score differences — similarity scores from different models should not be treated as directly equivalent.
- Chunking problems — chunks that are too large or too small can reduce retrieval quality.

* Best Practices

- Use the same embedding model for documents and queries.
- Store the original text together with each vector.
- Store useful metadata.
- Test using real user queries.
- Tune top_k and similarity thresholds.
- Use metadata filters when appropriate.
- Combine semantic search with keyword search when exact terms matter.
 