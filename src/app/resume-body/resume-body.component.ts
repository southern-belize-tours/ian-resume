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
  "TS/SCI Security Clearance",
  "Currently pursuing AWS Certified Associate Practitioner"];

  miscSkills: Array<String> = [
    "Strong leadership and interpersonal communication skills",
    "Proficient speaker, reader, and writer of German (Hochdeutsch, 4 years). Some experience with Spanish (2 years), and Italian (2 years)",
    "Eligable for Swiss B/L Visa (Spouse with B/L Visa)",
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