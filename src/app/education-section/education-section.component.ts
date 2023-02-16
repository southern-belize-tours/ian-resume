import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent implements OnInit {

  educationItems: Array<educationItem> = [
    {name: "University of San Diego",
    start: "01/2022",
    end: "08/2023",
    credential: "M.S.",
    focus: "Applied Artificial Intelligence & Machine Learning",
    repoUrl: "https://github.com/ianfeekes-sandiego",
    description: "",
    gpa: "3.88"},
    {name: "University of California, Santa Cruz",
    start: "09/2015",
    end: "06/2019",
    credential: "B.S.",
    focus: "Agile Software Engineering",
    repoUrl: "https://github.com/ianfeekes",
    description: "",
    gpa: "3.24"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class educationItem {
  name: String = "";
  start: String = "";
  end: String = "";
  credential: String = "";
  focus: String = "";
  repoUrl: String = "";
  description: String = "";
  gpa: String = "";
}