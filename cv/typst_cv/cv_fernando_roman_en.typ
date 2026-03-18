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
    address: "41909, Salteras, Sevilla, Spain",
    positions: (
      "Robotics and Automation Engineer",
    ),
  ),
  profile-picture: image("../images/foto_cv.jpg"),
  language: "en",
  date: none,
  font: "Source Sans Pro",
)

#include "sections/summary_en.typ"
#include "sections/experience_en.typ"
#include "sections/projects_en.typ"
#include "sections/honors_en.typ"

#pagebreak()

#include "sections/education_en.typ"


#include "sections/certifications_en.typ"
#include "sections/skills_en.typ"
#include "sections/soft_skills_en.typ"
#include "sections/languages_en.typ"
