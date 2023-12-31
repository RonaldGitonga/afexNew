import Image from "next/image";
import Link from 'next/link'

import styles from "../../ui/dashboard/courses/courses.module.css";
import Search from "../..//ui/dashboard/search/search";
import Pagination from "../..//ui/dashboard/pagination/pagination";
import { fetchCourses } from "../../lib/data";
import { deleteCourse } from "../../lib/actions";

const coursesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, courses } = await fetchCourses(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a course..." />
        <Link href="/dashboard/courses/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Intake</td>
            <td>Weeks</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <div className={styles.course}>
                  <Image
                    src={course.img || "/nocourse.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.courseImage}
                  />
                  {course.title}
                </div>
              </td>
              <td>{course.desc}</td>
              <td>${course.price}</td>
              <td>{course.intake}</td>
              <td>{course.weeks}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/courses/${course.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteCourse}>
                    <input type="hidden" name="id" value={course.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default coursesPage;
