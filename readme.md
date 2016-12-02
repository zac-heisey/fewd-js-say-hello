# Say Hello

This repositories contains the first solution for [Exercises for Programmers](https://pragprog.com/book/bhwb/exercises-for-programmers) by [Brian Hogan](//github.com/napcs).

## Problem Statement

Create a page that prompts for a name and prints a greeting using that name.


## Example Output

```
What is your name? Victor
Hello Victor, nice to meet you!
```

### Inputs: 

 * name


### Processes:

 * prompt for name
 * print a greeting


### Outputs:

 * greeting


## Test Plan

Input:

  * name: Victor

Expected result:

  * greeting: Hello Victor, nice to meet you!


## Pseudocode

```
SayHello
  Prompt for name with "What is your name?"

  greeting = "Hello, " + name + ", nice to meet you!"

  Display greeting
End
```
