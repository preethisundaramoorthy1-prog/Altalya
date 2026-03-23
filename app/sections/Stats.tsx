export default function Stats() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-purple-500">500+</h2>
          <p className="text-gray-400">Students Trained</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-500">50+</h2>
          <p className="text-gray-400">Projects Built</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-pink-500">20+</h2>
          <p className="text-gray-400">Industry Mentors</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-500">95%</h2>
          <p className="text-gray-400">Placement Success</p>
        </div>
      </div>
    </section>
  );
}