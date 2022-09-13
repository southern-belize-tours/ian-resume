import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'career-section',
  templateUrl: './career-section.component.html',
  styleUrls: ['./career-section.component.scss']
})
export class CareerSectionComponent implements OnInit {

  jobs = [
    {title: "Software Engineer/ELDP II, BAE Systems", start: "09/2019", end: "Current", items: [
      {title: "SPARTAN (Classified)", start: "02/2022", end: "Current", 
      items: [
       "Full-Stack/UI development of web application in CI/CD pipeline under agile environment",
       "Upgraded UI to consistent, robust interface by building styles library and leveraging best UI practices with use of Selenium/Cypress testing"
     ]},
     {title: "F-2 & F-16 Avionics Test Engineering", start: "09/2019", end: "02/2022",
     items: [
       "Wrote C/C++ device drivers (Digitizer, DMM, AFG, IPA, Colorimeter), test support software, ATLAS compiler software, and ATLAS test scripts for avionics testing hardware",
       "Lead Administer for software maintenance, SCM, Jenkins, pioneered F-2 project transition from clearcase/clearquest to Jira/git while maintaining customer transparency"
     ]}
    ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class job {
  title: string = "";
  start: string = "";
  end: string = "";
  items: Array<careerItem> = [];
}

class careerItem {
  title: string = "";
  start: string = "";
  end: string = ""
  items: Array<string> = [];
}