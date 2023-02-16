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
      "Generated hundreds of tour bookings, and tens-of-thousands of users by singlehandedly developing live tour websites southernbelizetours.com and cave-tubing.net by writing modern website interfaces written in ReactJS with Springboot Java back-end",
      "Improved Google Analytics traffic, Google Search Ranking, and Lighthouse audit metrics by integrating websites to the cloud, deploying the software in AWS EC2, Amplify, and Lambda, configuring Route53 DNS and caching queries with Cloudfront"
   ]},
   {title: "Simultaneous Location and Mapping (SLAM), Continental ", start: "01/2019", end: "06/2019",
   items: [
    "Created data-capturing rig hardware by combining radar, wheel-encoders, and camera imaging sensors.",
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