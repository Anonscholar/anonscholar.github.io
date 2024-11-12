---
title: Constructing the reals
description: cuts and and an overwiew of forming the reals.
authors: [ascholar]
date: yyyy-mm-dd
tags: [math, analysis]
---
This week’s post is my first attempt at a more educational post than weekly updates. I am busy with NSEP and BL4S right now,
so there isn’t much to say about them really. Without further ado, let’s get into it.

## What must be assumed
I believe I heard it from a Feynman interview, we must stop *somewhere* when explaining a topic to someone else. It’s true really, otherwise I would start here with telling you how to count. But that would take ages and delay this post by a year. So we begin at a ground of common understanding. I assume from you, the knowledge of basic set theory. You don’t need to know ZFC, just the basic, naive version suffices. 

I also assume prior knowledge of $\mathbb{Q}$, $\mathbb{Z}$, $\mathbb{N}$. In particular, for $\mathbb{Q}$, I assume the *field* axioms. I’ll list them out for completion. 

1. *Commutavity*, $x+y = y+x$ and $xy = yx$.
2. *Associativity*, $x + (y+z) = (x+y) + z$, and $x(yz) = (xy)z$.
3. *Distributivity*, $x(y + z) = xy + xz$.
4. *Identity*. There exist two *distinct* identity elements, $0$ and $1$ such that $x + 0 = x$ and $x \cdot 1 = x$.
5. *Inverses*, for $\forall x \in \mathbb{R} \setminus \{0\}$ there exists a $y$ such that $xy = 1$ and $\forall x \in \mathbb{R}$, there exists a $z \in \mathbb{R}$, such that $x + z = 0$. These are called the multiplicative and additive inverse of $x$ and are denoted as $1/x$ or $x^{-1}$ and $-x$.

And the basic properties that follow from this, inverses and identities are unique, $ab = (-a)(-b)$, etc. If you want to read more on field, you can look at my notes on undergrad math. 

## The Rationals are incomplete
The rationals are a nice structure, they form an *ordered field*, that is they follow the above field axioms, and have a relation ($<$), on them
by which we can formulate notions of “greater” and “lesser”. Fields in particular are quite nice. Briefly, a field is a set, $\mathbb{F}$, with two
operations, $(+, \cdot)$ which are functions of the form,

$$
\cdot, + \colon \mathbb{F} \times \mathbb{F} \to \mathbb{F},
$$
which follow the above axioms. The operation are placeholders, any two operations similar to addition and multiplication that follow the field axioms form a field. A field is a *general* structure. 

If $\mathbb{Q}$ is an ordered field in itself, (so that we can perform the usual operations on it, addition, subtraction, multiplication and division as well as the ordering relations, $<, >, =$) why do we want to look further? The idea stems from the fact that rationals are incomplete. A very classic way to show that is consider $\sqrt{ 2 }$. We will show now, that there is no $x \in \mathbb{Q}$ such that $x^2 =2$. 

You already know that all rationals can be written in the form $p/q$, where $p, q \in \mathbb{Z}$. We can take $p, q$ to be co-prime, because if they had a common factor we would cancel it out. Let’s assume ${} \sqrt{ 2 }$ is rational, so that there exist $p, q$ such that,

$$
\frac{p}{q} = \sqrt{ 2 }.
$$
Now let’s square both sides so that we can work with $2$, 
$$
p^2 = 2q^2.
$$

Let’s see, note that $p^2$ is even. That must also mean $p$ is even (if it were not, it’s square would not be even). So that we can write,

$$
\begin{align}
 p  & = 2k  \\
4k^2  & = 2q^2  \\
q^2  & = 2k^2,
\end{align}
$$
which implies that $q$ is even two. But now, $p, q$ are both divided by $2$, which violates our earlier assumption of them being-coprime!

So there cannot exist such $p, q$, and $\sqrt{ 2 }$ is not rational. If we represent rational numbers on a line, this is a *hole*, its somewhere between 1.4 and 1.5, but not rational. To be precise this a hole of zero radius. The rationals have all sort of these “holes” in them, we call them *irrationals*. 

