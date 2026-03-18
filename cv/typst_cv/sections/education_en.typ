// CV Section: Education
#import "../template.typ": *

#cvSection("Education")

#show heading.where(level: 2): it => text(size: 11pt, weight: "bold")[#it.body]

#resume-entry(
  title: "Master's Degree in Electronic Engineering, Robotics and Automation",
  location: logo-location("../images/US-marca-principal.png", [University of Seville \ Seville, Spain]),
  date: "2025 - 2026",
  description: "",
)

#resume-entry(
  title: "Bachelor's Degree in Electronic Engineering, Robotics and Mechatronics",
  location: logo-location("../images/US-marca-principal.png", [University of Seville \ Seville, Spain]),
  date: "2021 - 2025",
  description: "GPA: 7.5/10",
)

#resume-entry(
  title: "Technological Baccalaureate (Graduated with Honors distinction)",
  location: logo-location("../images/logo_junta.png", [IES Heliche \ Seville, Spain]),
  date: "2019 - 2021",
  description: "",
)
