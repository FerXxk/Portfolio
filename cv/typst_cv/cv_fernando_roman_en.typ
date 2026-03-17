#import "template.typ": *

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
  position: "Robotics and Automation Engineer",
  address: "41909, Salteras, Seville, Spain",
  mobile: "+34 611 46 73 16",
  email: "ferromhid@gmail.com",
  github: "github.com/FerXxk",
  linkedin: "linkedin.com/in/fernandoromhid",
  photo: image("../images/foto_cv.jpg")
)

#include "sections/summary_en.typ"
#include "sections/experience_en.typ"
#include "sections/projects_en.typ"
#include "sections/honors_en.typ"
#include "sections/education_en.typ"

#include "sections/certifications_en.typ"
#include "sections/skills_en.typ"
#include "sections/soft_skills_en.typ"
#include "sections/languages_en.typ"

#makecvfooter(
  left-content: datetime.today().display("[month repr:long] [year]"),
  center-content: "Fernando Román Hidalgo · CV",
  right-content: context counter(page).display()
)
