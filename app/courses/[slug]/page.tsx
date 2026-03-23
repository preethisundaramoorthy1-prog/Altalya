import { notFound } from "next/navigation";
import BackButton from "../../components/BackButton";

const coursesData: any = {
  "ai-ml": {
    title: "AI & ML",
    description: "Learn Artificial Intelligence and Machine Learning.",
  },
  robotics: {
    title: "Robotics",
    description: "Build robots and automation systems.",
  },
  iot: {
    title: "IoT",
    description: "Work with sensors and smart devices.",
  },
};

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = coursesData[slug];
  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* ✅ BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
  <BackButton />
</div>
      {/* COURSE CONTENT */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold">{course.title}</h1>
        <p className="mt-6 text-gray-400 max-w-xl">
          {course.description}
        </p>
      </div>

    </div>
  );
}