#import "@preview/modern-cv:0.9.0": *
#import "@preview/modern-cv:0.9.0": resume as modern-resume

#fa-version("6")

// Increase spacing between sections
#show heading.where(level: 1): it => {
  set block(above: 6.0em, below: 3.0em)
  it
}

// Increase spacing between entries and items
#show grid: set block(above: 3.5em, below: 3.5em)
#show block: set block(above: 3.5em, below: 3.5em)
#set par(spacing: 2.0em)


// Helper to maintain compatibility with existing section files if possible
// or at least provide a central place for styling.

#let cvSection(title) = [
  #v(2.5em, weak: true)
  = #title
  #v(1.5em, weak: true)
]


#let cvEntries(content) = { content }
#let cvHonors(content) = { content }
#let cvSkills(content) = { content }

#let resume-skill(type, info) = {
  resume-item[*#type*: #info]
}

// Logo helper for institutions and companies
#let logo-location(logo-path, name) = {
  grid(
    columns: (auto, auto),
    gutter: 0.5em,
    align: horizon,
    image(logo-path, height: 1.1em),
    name
  )
}

// Wrapper for modern-cv resume to disable default footer and apply custom styling
#let resume(..args) = {
  let named = args.named()
  let language = named.at("language", default: "en")
  
  // Use "sp" for Spanish if "es" is provided
  if language == "es" {
    named.insert("language", "sp")
  }

  // Disable modern-cv's default footer to remove the "Résumé" suffix
  named.insert("show-footer", false)
  
  // Call the original modern-cv resume
  modern-resume(..named, ..args.pos())

  // Apply our custom footer
  set page(
    footer: context [
      #set text(8pt, gray)
      #grid(
        columns: (1fr, 1fr),
        if language == "sp" or language == "es" [Curriculum Vitae] else [Curriculum Vitae],
        align(right, counter(page).display())
      )
    ],
    footer-descent: 20%,
  )
}
