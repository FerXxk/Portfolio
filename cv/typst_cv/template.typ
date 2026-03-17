// Colors (from Awesome CV)
#let awesome-red = rgb("#DC3522")
#let darktext = rgb("#414141")
#let text-color = rgb("#333333")
#let graytext = rgb("#5D5D5D")
#let lighttext = rgb("#999999")

// Fonts
#let headerfont = "Roboto"
#let bodyfont = "Source Sans Pro"

// Layout Settings
#let cvSection(title) = {
  v(1.5em)
  let title-str = if type(title) == str { title } else { title.text }
  let (first-three, rest) = if title-str.len() >= 3 {
    (title-str.slice(0, 3), title-str.slice(3))
  } else {
    (title-str, "")
  }
  
  stack(
    dir: ltr,
    spacing: 0.5em,
    text(size: 16pt, weight: "bold", fill: awesome-red)[#first-three],
    text(size: 16pt, weight: "bold", fill: darktext)[#rest],
    v(0.5em),
    line(length: 100%, stroke: 1pt + graytext)
  )
  v(0.8em)
}

#let cvParagraph(content) = {
  v(0.5em)
  text(size: 10pt, fill: text-color)[#content]
  v(0.5em)
}

#let cvEntry(
  title: "",
  society: "",
  logo: none,
  location: "",
  date: "",
  description: none
) = {
  v(0.6em)
  grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    [
      #text(size: 11pt, weight: "bold", fill: darktext)[#title] \
      #{
        if logo != none {
          box(logo, baseline: 25%)
          h(0.3em)
        }
      }
      #text(size: 10pt, fill: graytext, style: "italic")[#society]
    ],
    align(right)[
      #text(size: 9pt, weight: "bold", fill: awesome-red)[#location] \
      #text(size: 9pt, fill: graytext, style: "italic")[#date]
    ]
  )
  if description != none {
    v(0.3em)
    text(size: 10pt, fill: text-color)[#description]
  }
}

#let cvHonor(
  award: "",
  event: "",
  location: "",
  date: ""
) = {
  v(0.4em)
  grid(
    columns: (1fr, auto),
    [
      #text(weight: "bold", fill: darktext)[#award],
      #text(fill: text-color)[#event]
    ],
    align(right)[
      #text(fill: awesome-red, size: 9pt)[#location]
      #h(0.5em)
      #text(fill: graytext, size: 9pt, style: "italic")[#date]
    ]
  )
}

#let cvSkill(category: "", skills: "") = {
  v(0.4em)
  grid(
    columns: (1.5in, 1fr),
    column-gutter: 1em,
    align(right)[#text(weight: "bold", fill: darktext)[#category]],
    text(fill: text-color)[#skills]
  )
}

#let icon(name, color: darktext) = {
  text(font: "FontAwesome", fill: color)[#name]
}

#let makecvheader(
  firstname: "",
  lastname: "",
  position: "",
  address: "",
  mobile: "",
  email: "",
  github: "",
  linkedin: "",
  photo: none,
) = {
  grid(
    columns: (1fr, if photo != none { 3cm } else { 0pt }),
    column-gutter: 1.5em,
    align(center + horizon)[
      #stack(
        dir: ttb,
        spacing: 0.6em,
        [
          #text(size: 32pt, weight: "light", fill: graytext)[#firstname]
          #text(size: 32pt, weight: "bold", fill: text-color)[#lastname]
        ],
        text(size: 10pt, weight: "bold", fill: awesome-red)[#upper(position)],
        text(size: 8pt, fill: lighttext, style: "italic")[#address],
        text(size: 8pt, fill: text-color)[
          #{
            let items = ()
            if mobile != "" { items.push(icon("\u{f095}") + h(0.3em) + mobile) }
            if email != "" { items.push(icon("\u{f0e0}") + h(0.3em) + email) }
            if github != "" { items.push(icon("\u{f09b}") + h(0.3em) + github) }
            if linkedin != "" { items.push(icon("\u{f08c}") + h(0.3em) + linkedin) }
            items.join(h(1em) + "|" + h(1em))
          }
        ]
      )
    ],
    if photo != none {
      align(right + horizon)[
        #box(
          clip: true,
          radius: 0.5em,
          stroke: 0.5pt + graytext,
          photo
        )
      ]
    }
  )
}

#let cvEntries(content) = { content }
#let cvHonors(content) = { content }
#let cvSkills(content) = { content }


#let makecvfooter(left-content: "", center-content: "", right-content: "") = [
  #v(1fr)
  #set text(size: 8pt, fill: lighttext)
  #grid(
    columns: (1fr, 1fr, 1fr),
    align(left)[#left-content],
    align(center)[#center-content],
    align(right)[#right-content]
  )
]

