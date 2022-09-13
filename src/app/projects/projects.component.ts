import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<project> = [
    {title: "Full Stack Tour Websites", start: "01/2019", end: "Current", 
    items: [
      "Developed live tour websites southern-belize-tours.com and cave-tubing.com, generating hundreds of tour bookings, and tens-of-thousands of users",
     "Written in react JS with springboot java back-end, deployed in AWS EC2, Amplify, Lambda, and Route 53 tools, cached with Cloudfront, and improved leveraging user data from Google Analytics"
   ]},
   {title: "SLAM, Continental ", start: "01/2019", end: "06/2019",
   items: [
    "Created preliminary data-capturing rig hardware by combining radar, wheel-encoders, and camera imaging sensors.",
    "Leveraged data-fusion SLAM algorithm by creating and capturing rig data streams with C/C++ scripts in a ROS2 environment",
    "Filtered & cleaned sensor noise data for SLAM algorithm by designing and programming an Extended Kalman Filter (EKF) in Python"
   ]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

class project {
  title: string = "";
  start: string = "";
  end: string = ""
  items: Array<string> = [];
}