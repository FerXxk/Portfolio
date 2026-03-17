#import "template.typ": *

#set page(
  paper: "a4",
  margin: (left: 1.4cm, right: 1.4cm, top: 1.5cm, bottom: 1.8cm),
)

#set text(font: "Roboto", size: 10pt)
#show heading: set text(font: "Roboto")

#makecvheader(
  firstname: "Fernando",
  lastname: "Román Hidalgo",
  position: "Ingeniero de Robótica y Automatización",
  address: "41909, Salteras, Sevilla, España",
  mobile: "611467316",
  email: "ferromhid@gmail.com",
  github: "github.com/FerXxk",
  linkedin: "linkedin.com/in/fernandoromhid",
  photo: image("../images/foto_cv.jpg")
)

#include "sections/summary.typ"
#include "sections/experience.typ"
#include "sections/projects.typ"
#include "sections/honors.typ"
#include "sections/education.typ"


#include "sections/certifications.typ"
#include "sections/skills.typ"
#include "sections/soft_skills.typ"
#include "sections/languages.typ"

#makecvfooter(
  left-content: datetime.today().display("[month repr:long] [year]"),
  center-content: "Fernando Román Hidalgo · CV",
  right-content: context counter(page).display()
)
