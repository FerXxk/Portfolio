#import "template.typ": *

#set page(
  paper: "a4",
  margin: (left: 1.4cm, right: 1.4cm, top: 1.5cm, bottom: 1.8cm),
)

#set text(font: "Roboto", size: 10pt) // Adjust font family as needed

// Header
#align(center)[
  #text(size: 24pt, fill: darktext)[*Fernando* #text(fill: awesome-red)[Román Hidalgo]] \
  #text(size: 12pt, fill: graytext)[Robotics and Automation Engineer] \
  #v(0.5em)
  #text(
    size: 9pt,
  )[41909, Salteras, Seville, Spain | +34 611 46 73 16 | ferromhid\@gmail.com | github.com/FerXxk | linkedin.com/in/fernandoromhid]
]

#include "sections/summary_en.typ"
#include "sections/experience_en.typ"
#include "sections/projects_en.typ"
#include "sections/honors_en.typ"
#include "sections/education_en.typ"

#include "sections/certifications_en.typ"
#include "sections/skills_en.typ"
#include "sections/soft_skills_en.typ"
#include "sections/languages_en.typ"
