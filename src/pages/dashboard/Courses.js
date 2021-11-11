import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import CourseService from "../services/CourseService";

const Courses = () => {
  useEffect(() => {
    getCourses();
  }, []);
  const [courses, setCourses] = useState({});
  const getCourses = () => {
    CourseService.getCourses().then((res) => {
      console.log(res);
      // setCourses({ res });
      // setCourses([res]);

      setCourses({ courses: res.data });
    });
  };
  console.log(courses);
  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <div>
        <h2 className="text-center">Course List</h2>
        <div className="row table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead>
              <tr>
                <th>Course No.</th>
                <th>Course Name</th>
                <th> Code</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => {
                return (
                  <tr key={course.courseId}>
                    <td>{course.courseId}</td>
                    <td>{course.courseName}</td>
                    <td>{course.courseCode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Courses;
