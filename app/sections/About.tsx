import data from "../../content/about.json";

export default function About() {
  return (
    <section className="py-20 text-center px-6">
      <h2 className="text-3xl font-bold">{data.title}</h2>
      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        {data.description}
      </p>
    </section>
  );
}