import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {

  skills: Array<technicalSkill> = [
    {name: "Technical & Programming Languages",
    items: ["JavaScript (React/JSX, Angular, VanillaJS, WebGL),", "C/C++", "Python3", "Java", "CSS/SCSS/SASS", "HTML, XML", "ATLAS", "Bat/sh"]},
    {name: "Integrated Development Environments",
    items: ["Visual Studio/VS Code", "Jupyter/Google Collaboratory", "Anaconda", "Xcode", "Android Studio"]},
    {name: "Software Tools",
    items: ["CM (Git, Clearcase)", "CI/CD (Jenkins, Atlassian Suite)", "Testing & Automation (Karma, Google Test, Cypress, Selenium, NI Suite)", "Cloud (AWS, Azure)", "OS (Ubuntu/Redhat, Windows, MacOS, ROS2)"]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class technicalSkill {
  name: String = "";
  items: Array<String> = [];
}
