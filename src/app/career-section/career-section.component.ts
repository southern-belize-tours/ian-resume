import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'career-section',
  templateUrl: './career-section.component.html',
  styleUrls: ['./career-section.component.scss']
})
export class CareerSectionComponent implements OnInit {

  jobs = [
    {title: "Software Engineer/ELDP Senior, BAE Systems", start: "09/2019", end: "Current", items: [
      {title: "Virtual Cloud Compute (VC3)", start: "01/2023", end: "Current",
      items: [
        "Automated infrastructure deployment by standing up productions tools and platform services (Ansible, Chef, Morpheus, Rancher)",
        "Safely configured cloud and hybrid environments for several on-prem tenant programs with infrastructure services (VMware vSphere, Azure, Eucalyptus, AWS)"
      ]},
      {title: "SPARTAN (Classified)", start: "02/2022", end: "01/2023",
      items: [
       "Increased end-user adoption by 20% through modernizing UI to consistent, robust interface by leveraging modern & responsive design principles and building a centralized styles library",
       "Reduced operational defects and strengthened regression testing pipeline by integrating and automating Cypress styles testing and increasing KarmaJS code coverage to 80%"
     ]},
     {title: "F-2 & F-16 Avionics Test Engineering", start: "09/2019", end: "02/2022",
     items: [
       "Led software development and release validation for C/C++ device drivers (Digitizer, IPA, Colorimeter), ATLAS compiler tools (written in C++), and ATLAS test scripts",
       "Greatly improved development agility through creating and administering Jenkins servers and build/test pipeline scripts",
       "Modernized software development pipelines by automating transition from Clearcase/Clearquest to Git/Jira while maintaining artifacts for over 30 years of system releases"
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