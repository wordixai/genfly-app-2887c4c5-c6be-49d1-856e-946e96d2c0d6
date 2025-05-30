import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Brew Haven
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Where every cup tells a story and every moment becomes a memory
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-6 text-lg">
            View Menu
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
}