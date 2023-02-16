import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {

  skills: Array<technicalSkill> = [
    {name: "Technical & Programming Languages",
    items: ["JavaScript (JSON, React/JSX, Angular, VanillaJS, WebGL)", "C/C++ (03, 11)", "Java (XML, Springboot)", "Front-End Styles (HTML, CSS/SCSS/SASS)", "Scripting (Python3 PowerShell, Shell, ATLAS)"]},
    {name: "Integrated Development Environments",
    items: ["Visual Studio/VS Code", "Jupyter/Google Collaboratory", "Anaconda", "Xcode", "Android Studio"]},
    {name: "Software Tools",
    items: ["SCM (Git, Clearcase)", "CI/CD (Jenkins, GitLab, Atlassian Suite)", "Testing & Automation (Karma, Google Test, Cypress, Selenium)", "Cloud (AWS, Azure)", "OS (Ubuntu/Redhat, Windows, MacOS, ROS2)"]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class technicalSkill {
  name: String = "";
  items: Array<String> = [];
}
