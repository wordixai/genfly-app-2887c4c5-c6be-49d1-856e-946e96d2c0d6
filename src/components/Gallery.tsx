const images = [
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Coffee art"
  },
  {
    url: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Pastries display"
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Coffee brewing"
  },
  {
    url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Cafe interior"
  },
  {
    url: "https://images.unsplash.com/photo-1497935586047-9242eb4fc795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "People enjoying coffee"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our cozy atmosphere and delicious offerings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg shadow-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                style={{ height: index === 0 ? '600px' : '300px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}