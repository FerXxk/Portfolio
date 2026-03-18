#import "@preview/modern-cv:0.9.0": *

#fa-version("6")

// Increase spacing between sections
#show heading.where(level: 1): it => {
  set block(above: 4.5em, below: 2.0em)
  it
}

// Increase spacing between entries and items
#show grid: set block(above: 2.0em, below: 2.0em)
#show block: set block(above: 2.0em, below: 2.0em)
#set par(spacing: 1.5em)


// Helper to maintain compatibility with existing section files if possible
// or at least provide a central place for styling.

#let cvSection(title) = [= #title]

#let cvEntries(content) = { content }
#let cvHonors(content) = { content }
#let cvSkills(content) = { content }

#let resume-skill(type, info) = {
  resume-item[*#type*: #info]
}

// Logo helper for institutions and companies
#let logo-location(logo-path, name) = {
  box(height: 1.1em, baseline: 25%)[#image(logo-path)]
  h(0.5em)
  name
}
