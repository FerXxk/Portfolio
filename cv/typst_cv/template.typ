#let awesome-red = rgb("CA63A8") // Adjust to match Awesome CI Red
#let darktext = rgb("414141")
#let text-color = rgb("333333")
#let graytext = rgb("5D5D5D")
#let lighttext = rgb("999999")

#let cvSection(title) = {
  v(1em)
  text(weight: "bold", size: 14pt, fill: awesome-red)[#title]
  line(length: 100%, stroke: 0.5pt + graytext)
  v(0.5em)
}

#let cvParagraph(content) = {
  text(size: 10pt, fill: text-color)[#content]
}

#let cvEntry(title: "", society: "", logo: none, location: "", date: "", description: none) = {
  grid(
    columns: (1fr, auto),
    row-gutter: 0.5em,
    [
      *#text(size: 11pt)[#title]* \
      #if logo != none [ #box(logo, baseline: 30%) ] #text(fill: graytext)[#society]
    ],
    align(right)[
      #text(fill: awesome-red, size: 9pt)[*#location*] \
      #text(fill: graytext, style: "italic", size: 9pt)[#date]
    ]
  )
  if description != none {
    v(0.3em)
    text(size: 10pt, fill: text-color)[#description]
  }
  v(0.8em)
}

#let cvEntries(content) = {
  content
}

#let cvHonors(content) = {
  content
}

#let cvHonor(award: "", event: "", location: "", date: "") = {
  grid(
    columns: (auto, 1fr, auto, auto),
    column-gutter: 1em,
    row-gutter: 0.5em,
    text(fill: darktext)[*#award*],
    text(fill: text-color)[#event],
    text(fill: awesome-red, size: 9pt)[*#location*],
    text(fill: graytext, style: "italic", size: 9pt)[#date]
  )
}

#let cvSkills(content) = {
  v(0.5em)
  content
}

#let cvSkill(category: "", skills: "") = {
  grid(
    columns: (3fr, 7fr),
    column-gutter: 1em,
    align(right)[*#category*],
    text(fill: text-color)[#skills]
  )
  v(0.3em)
}
