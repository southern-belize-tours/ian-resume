import { Component, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'resume-body',
  templateUrl: './resume-body.component.html',
  styleUrls: ['./resume-body.component.scss']
})
export class ResumeBodyComponent implements OnInit {

  panelCareerOpenState: boolean = true;
  panelProjectOpenState: boolean = true;
  panelEducationOpenState: boolean = true;
  panelAwardOpenState: boolean = true;
  panelTechOpenState: boolean = true;
  panelMiscOpenState: boolean = true;

  awards: Array<String> = ["PCAP (Python Certified Associate Programmer)",
  "AWS Certified Cloud Practitioner",
  "UCSC Dean's List (high academic performance) Winter 2016, Spring 2017, Spring 2018, Summer 2018",
  "USD Dean's List (high academic performance) Fall 2022, Summer 2022",
  "TS/SCI Security Clearance",
  "Currently pursuing AWS Certified Associate Practitioner"];

  miscSkills: Array<String> = [
    "Strong interpersonal communication and leadership skills",
    "Proficient speaker, reader, and writer of German (Hochdeutsch, 4 years), Spanish (2 years), and Italian (2 years)",
    "Adult CPR/AED Certified (AHA)",
    "Certified Personal Support Worker (State of Oregon)",
    "Certified Personal Trainer (NFPA)"
  ];

  tooltipVar = "asdf";

  constructor() { }

  ngOnInit(): void {
  }

}

class accredential {
  name: String = "";
  date?: String = "";
  link?: String = "";

}