export function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Cafe interior" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2015, Brew Haven began as a small corner café with a big dream: to create a space where coffee isn't just served, but celebrated. Our journey started with a passion for exceptional coffee and a desire to build a community around it.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, we source our beans directly from sustainable farms around the world, roast them in-house to perfection, and serve them with care and creativity. But Brew Haven is more than just coffee—it's a haven for connection, conversation, and comfort.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-amber-800">7+</span>
                <span className="text-gray-600">Years of Excellence</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-amber-800">15</span>
                <span className="text-gray-600">Coffee Varieties</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-amber-800">3</span>
                <span className="text-gray-600">Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}