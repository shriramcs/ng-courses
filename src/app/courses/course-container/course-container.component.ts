import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course-container",
  templateUrl: "./course-container.component.html",
  styleUrls: ["./course-container.component.scss"],
})
export class CourseContainerComponent implements OnInit {
  constructor() {}

  courseList = [
    {
      courseId: "WEB_BASIC",
      title: "Web Development Basics",
      details: ["HTML 5", "CSS 3", "Javascript", "DOM"],
    },
    {
      courseId: "WEB_FULLSTACK",
      title: "MERN - Fullstack",
      subtitle: "Fullstack Web Develppment",
      details: [
        "HTML 5, CSS 3, Javascript and DOM",
        "Node.js and Express.js",
        "Mongo",
        "React",
      ],
    },
    {
      courseId: "WEB_FULLSTACK",
      title: "MEAN - Fullstack",
      details: [
        "HTML 5, CSS 3, Javascript and DOM",
        "Node.js and Express.js",
        "Mongo",
        "Angular",
      ],
    },
  ];

  ngOnInit() {}
}
