import data from "../../content/courses.json";

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Courses</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.courses.map((course, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="mt-3 text-gray-400">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}