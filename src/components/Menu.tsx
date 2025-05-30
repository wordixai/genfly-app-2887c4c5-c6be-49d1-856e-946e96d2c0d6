import { Coffee, Cake, Utensils } from "lucide-react";

const menuItems = [
  {
    category: "Coffee",
    icon: Coffee,
    items: [
      { name: "Espresso", price: "$3.50", description: "Rich and intense single shot" },
      { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
      { name: "Latte", price: "$4.75", description: "Espresso with lots of steamed milk and light foam" },
      { name: "Cold Brew", price: "$5.25", description: "Slow-steeped for 12 hours, smooth and bold" }
    ]
  },
  {
    category: "Pastries",
    icon: Cake,
    items: [
      { name: "Croissant", price: "$3.75", description: "Buttery, flaky French pastry" },
      { name: "Cinnamon Roll", price: "$4.25", description: "Soft roll with cinnamon and cream cheese frosting" },
      { name: "Blueberry Muffin", price: "$3.95", description: "Made with fresh blueberries and lemon zest" },
      { name: "Chocolate Chip Cookie", price: "$2.95", description: "Soft-baked with Belgian chocolate chunks" }
    ]
  },
  {
    category: "Light Meals",
    icon: Utensils,
    items: [
      { name: "Avocado Toast", price: "$8.95", description: "Sourdough with avocado, radish, and microgreens" },
      { name: "Breakfast Sandwich", price: "$7.95", description: "Egg, cheese, and bacon on a brioche bun" },
      { name: "Quinoa Bowl", price: "$10.95", description: "With roasted vegetables and tahini dressing" },
      { name: "Chicken Panini", price: "$9.95", description: "Grilled chicken with pesto and mozzarella" }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in serving the finest coffee and food made with locally sourced, fresh ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-amber-800 mr-3" />
                <h3 className="text-2xl font-bold text-amber-800">{category.category}</h3>
              </div>
              <div className="space-y-6">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <span className="text-amber-800 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic mb-4">
            Ask our staff about daily specials and seasonal offerings
          </p>
        </div>
      </div>
    </section>
  );
}