---
title: "Oats: An Ahead-of-Time Compiler for a TypeScript-Inspired Language"
tags: ["compilers", "typescript", "llvm", "systems-programming"]
date: "2025-10-14"
summary: "Exploring the design and implementation of Oats, an experimental ahead-of-time compiler that compiles a TypeScript-inspired language to native executables via LLVM."
---

**Oats** is my ongoing project to create an ahead-of-time (AOT) compiler for a
programming language inspired by TypeScript, with influences from Swift and
Rust. The goal is to compile source code directly to native executables using
LLVM, providing predictable performance and minimal runtime overhead.

## Project Motivation

Traditional interpreted languages like JavaScript and Python offer great
developer experience but can struggle with performance-critical applications.
Languages like Rust and Swift provide excellent performance but often come with
steep learning curves and complex memory management.

Oats aims to bridge this gap by offering:

- **TypeScript-like syntax** for familiar developer experience
- **Ahead-of-time compilation** for native performance
- **Memory safety** through ownership and borrowing concepts
- **Zero-cost abstractions** inspired by Rust

## Technical Architecture

The compiler pipeline follows a traditional multi-stage approach:

1. **Lexical Analysis**: Tokenize source code into meaningful units
2. **Parsing**: Build an Abstract Syntax Tree (AST) from tokens
3. **Semantic Analysis**: Type checking and symbol resolution
4. **Intermediate Representation**: Convert AST to LLVM IR
5. **Optimization**: Apply LLVM optimization passes
6. **Code Generation**: Emit native machine code

## Language Design Decisions

### Type System

Oats features a structural type system with:

- **Interface-based typing** similar to TypeScript
- **Generic types** with monomorphization
- **Union and intersection types**
- **Optional and nullable types**

### Memory Management

Drawing from Rust's ownership model:

- **Ownership semantics** prevent data races
- **Borrow checking** ensures memory safety
- **Automatic memory management** for simple cases
- **Manual control** when needed for performance

### Syntax Inspirations

```typescript
interface Printable {
  print(): void;
}

class Document implements Printable {
  private title: string;
  private content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  print(): void {
    console.log(`${this.title}: ${this.content}`);
  }
}
```

## Implementation Challenges

### LLVM Integration

Working with LLVM has been both rewarding and challenging:

- **IR Generation**: Translating high-level constructs to LLVM IR
- **Optimization Passes**: Leveraging LLVM's extensive optimization framework
- **Target Triples**: Supporting multiple architectures and operating systems
- **Debugging**: Correlating source code to generated assembly

### Type System Complexity

Implementing a sound type system requires careful handling of:

- **Type inference** algorithms
- **Generic instantiation** strategies
- **Variance and subtyping** rules
- **Error reporting** for type mismatches

## Current Status and Roadmap

The project is in active development with:

- **Lexer and parser** implemented
- **Basic type checking** working
- **LLVM IR generation** in progress
- **Standard library** design ongoing

Future milestones include:

- Complete LLVM backend implementation
- Comprehensive test suite
- Package management system
- IDE tooling and language server

## Lessons Learned

Working on Oats has taught me about:

- **Compiler construction** principles
- **Language design** trade-offs
- **Systems programming** concepts
- **LLVM ecosystem** and tooling

The project continues to evolve as I explore the boundaries of programming
language design and implementation. Check out the
[repository](https://gitlab.com/Chrono-byte/oats) to follow the development!
