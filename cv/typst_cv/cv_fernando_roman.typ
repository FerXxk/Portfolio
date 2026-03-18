#import "template.typ": *

#show: resume.with(
  author: (
    firstname: "Fernando",
    lastname: "Román Hidalgo",
    email: "ferromhid@gmail.com",
    phone: "611467316",
    github: "FerXxk",
    linkedin: "fernandoromhid",
    address: "41909, Salteras, Sevilla, España",
    positions: (
      "Ingeniero de Robótica y Automatización",
    ),
  ),
  profile-picture: image("../images/foto_cv.jpg"),
  date: datetime.today().display(),
  font: ("Source Sans 3", "Segoe UI", "Calibri"),
  header-font: ("Roboto", "Segoe UI"),
)

#include "sections/summary.typ"
#include "sections/experience.typ"
#include "sections/projects.typ"
#include "sections/honors.typ"
#include "sections/education.typ"

#pagebreak()

#include "sections/certifications.typ"
#include "sections/skills.typ"
#include "sections/soft_skills.typ"
#include "sections/languages.typ"
