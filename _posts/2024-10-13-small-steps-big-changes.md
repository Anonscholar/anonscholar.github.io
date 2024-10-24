---
title: Small steps, big changes
description: towards a better life
author: adyansh
date: 2024-10-13 16:29:00 +0530
categories: [Life, Olympiads]
tags: [olympiad, journey]
comments: true
math: true
  # TAG names should always be lowercase
---
Welcome to a new post. This is a little off-schedule[^1], but anyways things will be a lot
more scheduled from now. The posts will also be hopefully longer, and there are other changes. Lets talk
about them first.

## All that has changed

It has only been 10 days really since the last post, but there have been a substantial amount of changes.

The first, and the biggest one is that I have left my coaching. And that also amounts to me taking
essentially and uncertain hiatus for JEE. There was a lot of thought that went into it, and I was
certainly _not_ happy with my coaching for quite a while. It had also been taking a toll on my health and
olympiad prep. So here we are, now at home 24/7.

The second thing is that I am switching from the promised bi-weekly (a post per 14 days) to
a weekly schedule, starting this week. So expect the next post this sunday! I am also trying to
write longer posts — hopefully the length of this post does reflect that.

Other than this, its been some _interesting_ 10 days and the last week has gone by pretty okay-ish

## The First Week

The last week has been the first week ever since I left coaching, and well it has not been the best,
but I still have done better than the previous two weeks. Although not upto the standards I have set for myself.

I have started Griffiths EM, just about done with chapters 1 and 2 — did them in parallel. I have not
exactly been loving its problems, they're mathematically intense, but I didn't enjoy solving them too
much. For example, after introducing the electric field, Griffiths marks problem 2.7 as important,
which involves solving for the electric field of a spherical shell, of radius $R$ with area density,
$\sigma$, at a point a height $z$. The sphere is centered at the origin.

Notably, this problem was before he introduced Gauss's law, which just about trivializes it. The
intended solution was just to use the cosine rule to find the distance between the infinitesimal area element as,

$$r = \sqrt{R^2 + z^2 - 2Rz\cos\theta},$$

where $\theta \in [0, \pi]$ in spherical co-ordinates. And of course, the horizontal components of the electric field cancel out, so you have a factor of,

$$\cos \varphi = \frac{z - R\cos\theta}{\sqrt{R^2 + z^2 - 2Rz\cos\theta}}$$

You then integrate over the surface area and get the integral,

$$E_z = \frac{1}{4\pi\epsilon_0} \int_0^{\pi}\int_0^{2\pi}\frac{\sigma R^2\sin\theta(z - R\cos\theta)}{(R^2 + z^2 - 2Rz\cos\theta)^{3/2}}d\theta d\phi.$$

The solution of this integral involves some absolute values, so you need to write down the answer for
two cases, $R < z$ and $z < R$. How annoyingly tedious!

Other than that, the first chapter wasn't that great[^2], and I'll be going over Professor Tong's notes
on vector calculus on the side, as I had been earlier.

In mathematics, I went over geometry a bit in the last few days. It hasn't been the smoothest
ride so far, but I have heard it gets better so here's to hoping. RMO is in 20 days, and as long as all the problems aren't geometry, I am quite sure of doing pretty good. Working on inequalities and geometry for now. I will be giving many mocks in the next two weeks. On that note, recently
went over some stylistic changes in my notes, including the font, do tell me how they look now!

I haven't got too much time to do pure mathematics recently, and I am hoping to fix that
in the next week. Last week was an improvement, and next one will be an even greater one!

Some vague plans for the following week is to grind out a lot of geo and inequalites, finish up
magnetism and also do fluids — the only chapter in 11th I haven't done, mostly because of
procrastination. Revise some mechanics and thermodynamics too, and just nail that stuff down
finally with Kevin Zhou's handouts. I'll also start working on my fitness a little,
and now that I have finally been getting time and fixing some schedule, maybe some thoughts
about the things I have been reading (both in fiction and academics). Also registered for
Pcup, so a few months of getting wrecked in problems, but also learning a lot, so yes (:.

For today I'll be kind of relaxing a little, fix some stuff for better organization of the things I am doing (which are quite a bit), maybe read up on some stuff for bl4s, or a little pure mathematics, and watch a movie. I had to travel quite a bit yesterday for a family gathering, and the traffic yesterday was incredibly tedious.
I was stuck there for a better part of about 2.5 hours. So I am pretty tired today, and yeah the schedule for today reflects that.

Hopefully this post was better than the last ones. Please do criticize me on any lacking portion of my posts, that will help me immensely in getting better. Goodbye, and here's to a good week!

[^1]: it really is not, I just messed up the schedule for the second post.
[^2]: This is partly because of my background in pure mathematics, I believe for just about anyone wanting to learn vector calculus for physics, they are quite sufficient.
