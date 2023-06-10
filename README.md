# design-lab

A simple design system using Storybook for learning purposes.

Based on [Design Systems for Developers tutorial](https://storybook.js.org/tutorials/design-systems-for-developers/).

## Rationale

A design system is solely concerned with presentational elements, not business logic. 
It can (and often does) borrow from existing component libraries. It fosters reuse, 
meaning that one-off components should not be included.

Additional, the system includes other constants such as colors, theming, typography, spacing, grid system, etc. which 
are reused across different projects. These can be expressed as global style variables know as design tokens.