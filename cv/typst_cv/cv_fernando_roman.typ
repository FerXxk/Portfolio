#import "template.typ": *

#set page(
  paper: "a4",
  margin: (left: 1.4cm, right: 1.4cm, top: 1.5cm, bottom: 1.8cm),
)


// Header
#align(center)[
  #text(size: 24pt, fill: darktext)[*Fernando* #text(fill: awesome-red)[Román Hidalgo]] \
  #text(size: 12pt, fill: graytext)[Ingeniero de Robótica y Automatización] \
  #v(0.5em)
  #text(
    size: 9pt,
  )[41909, Salteras, Sevilla, España | 611467316 | ferromhid\@gmail.com | github.com/FerXxk | linkedin.com/in/fernandoromhid]
]

#include "sections/summary.typ"
#include "sections/experience.typ"
#include "sections/projects.typ"
#include "sections/honors.typ"
#include "sections/education.typ"


#include "sections/certifications.typ"
#include "sections/skills.typ"
#include "sections/soft_skills.typ"
#include "sections/languages.typ"
