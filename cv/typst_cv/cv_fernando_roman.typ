#import "template.typ": *

#show: resume.with(
  author: (
    firstname: "Fernando",
    lastname: "Román Hidalgo",
    email: "ferromhid@gmail.com",
    phone: "611467316",
    github: "FerXxk",
    linkedin: "fernandoromhid",
    custom: (
      (icon: "home", text: "Portfolio", link: "https://ferxxk.github.io/Portfolio/"),
    ),
    address: "41909, Salteras, Sevilla, España",
    positions: (
      "Ingeniero de Robótica y Automatización",
    ),
  ),
  profile-picture: image("../images/foto_cv.jpg"),
  language: "es",
  date: none,
  font: "Source Sans Pro",
)

#include "sections/summary.typ"
#include "sections/experience.typ"
#include "sections/projects.typ"
#include "sections/honors.typ"


#pagebreak()
#include "sections/education.typ"



#include "sections/certifications.typ"
#include "sections/skills.typ"
#include "sections/soft_skills.typ"
#include "sections/languages.typ"
