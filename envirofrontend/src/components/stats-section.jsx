import { Card, CardContent } from "../components/ui/card"
import { TrendingUp, Users, MapPin, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across India",
      color: "blue",
    },
    {
      icon: Users,
      number: "50+",
      label: "Satisfied Clients",
      description: "Industries, municipalities & hospitals",
      color: "green",
    },
    {
      icon: MapPin,
      number: "10+",
      label: "States Covered",
      description: "Pan-India service network",
      color: "purple",
    },
    {
      icon: Zap,
      number: "99%",
      label: "Uptime Guarantee",
      description: "Reliable system performance",
      color: "amber",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Trusted by Leading Organizations</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our track record speaks for itself - delivering excellence across diverse sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent className={`w-8 h-8 text-${stat.color}-600`} />
                  </div>
                  <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                  <div className="text-lg font-semibold text-slate-800 mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
