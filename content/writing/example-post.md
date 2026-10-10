---
title: "Example post — formatting reference"
date: 2026-09-24
summary: "A draft that only appears in local dev. It shows every formatting feature the writing section supports. Delete it once you've published your first real post."
type: "Documentation"
tags: ["Meta", "Markdown"]
draft: true
---

This post is marked `draft: true`, so it shows up when you run `npm run dev` but **never on the live site**.

## Headings get anchor links

Every `##` heading gets an id, so you can link to a section like [this](#code-blocks).

## Code blocks

```python
import torch
from torch_geometric.nn import DynamicEdgeConv

def nt_xent(z1, z2, tau=0.1):
    z = torch.nn.functional.normalize(torch.cat([z1, z2]), dim=1)
    sim = z @ z.T / tau
    sim.fill_diagonal_(float("-inf"))
    n = z1.size(0)
    targets = torch.cat([torch.arange(n, 2 * n), torch.arange(n)])
    return torch.nn.functional.cross_entropy(sim, targets)
```

Inline code works too: `model.eval()`.

## Math

Inline math like $\mathcal{L} = -\log p(x)$, or a display block:

$$
\ell_{i,j} = -\log \frac{\exp(\mathrm{sim}(z_i, z_j)/\tau)}{\sum_{k \neq i} \exp(\mathrm{sim}(z_i, z_k)/\tau)}
$$

## Tables

| Augmentation   | Linear probe acc. |
| -------------- | ----------------- |
| None           | 0.00              |
| Rotation       | 0.00              |
| Rotation + jitter | 0.00           |

## Lists, quotes, and images

- Bullet lists
- [x] Task lists
- [ ] Unchecked items

> Blockquotes for callouts or quotes.

Images go in `public/writing/` and are referenced like `![alt text](/writing/figure.png)`.
