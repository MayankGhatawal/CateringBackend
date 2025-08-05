import { Card, CardContent } from "../components/ui/card"
import {
  Award,
  Users,
  Clock,
  Shield,
  Wrench,
  Leaf,
  CheckCircle,
  Star,
} from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Extensive industry expertise in environmental engineering solutions",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers and technicians dedicated to excellence",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock maintenance and technical support services",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO certified processes and guaranteed performance standards",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Wrench,
      title: "Turnkey Solutions",
      description: "Complete end-to-end project execution and implementation",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable and environmentally conscious technology solutions",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ]

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 text-green-800 border border-green-200 rounded-full text-sm font-medium mb-4">
            ⭐ Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Your Trusted Environmental Partner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With years of experience and a commitment to excellence, we deliver reliable, affordable, and sustainable
            environmental solutions across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

   
       {/* Achievements Section */}
<div className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-slate-800 border">
  {/* Flipped Wave Background at Bottom */}
  <div className="absolute inset-0 z-0 transform rotate-180">
    <svg
      className="w-full h-full object-cover"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#bfdbfe" /* Tailwind's blue-200 */
        fillOpacity="1"
        d="M0,224L40,213.3C80,203,160,181,240,165.3C320,149,400,139,480,154.7C560,171,640,213,720,208C800,203,880,149,960,128C1040,107,1120,117,1200,122.7C1280,128,1360,128,1400,128L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      />
    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center mb-12">
    <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h3>
    <p className="text-xl text-slate-600">Numbers that speak for our excellence</p>
  </div>

  <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
    {achievements.map((achievement, index) => {
      const Icon = achievement.icon
      return (
        <div key={index} className="text-center">
          <Icon className="w-8 h-8 mx-auto mb-4 text-slate-600" />
          <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
          <div className="text-sm md:text-base text-slate-700">{achievement.label}</div>
        </div>
      )
    })}
  </div>
</div>




        {/* Certifications & Standards */}
        <div className="mt-16 rounded-2xl shadow-lg p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Certifications & Standards</h3>
            <p className="text-slate-600">Committed to quality and environmental compliance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001", "CE Certified"].map((cert, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="font-semibold text-slate-800">{cert}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
