import { Star, MapPin, Zap, Wrench, AirVent, Phone, Search, Shield } from 'lucide-react';

const services = [
  { Icon: Zap, label: 'Electrician', color: 'text-amber-500', bg: 'bg-amber-50' },
  { Icon: Wrench, label: 'Plumber', color: 'text-blue-500', bg: 'bg-blue-50' },
  { Icon: AirVent, label: 'AC Repair', color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

const providers = [
  { name: 'Rajesh Kumar', service: 'Electrician', area: 'Andheri West', verified: true },
  { name: 'Suresh Patel', service: 'Plumber', area: 'Bandra East', verified: true },
  { name: 'Amit Sharma', service: 'AC Technician', area: 'Powai', verified: true },
];

export default function HomeFixPreview() {
  return (
    <div className="relative w-full bg-gradient-to-br from-ink-50 to-blue-50/40 rounded-xl overflow-hidden border border-ink-200/60 shadow-2xl">
      {/* App header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-white/80 backdrop-blur-sm border-b border-ink-200/50">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-accent-500 flex items-center justify-center shrink-0">
            <Wrench className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-bold text-ink-900 shrink-0">HomeFix</span>
          <span className="hidden sm:inline text-[10px] text-ink-400 font-medium truncate">India's Trusted Home Services</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink-100">
            <MapPin className="w-3 h-3 text-accent-600" />
            <span className="text-[10px] font-medium text-ink-700">Mumbai</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-400 to-accent-600" />
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 sm:px-5 py-3 bg-white/50 border-b border-ink-200/30">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-ink-200 shadow-sm">
          <Search className="w-3.5 h-3.5 text-ink-400 shrink-0" />
          <span className="text-[11px] text-ink-400 truncate">Search for electricians, plumbers, AC repair...</span>
        </div>
      </div>

      {/* Body — stacked on mobile, side-by-side on sm+ */}
      <div className="flex flex-col sm:flex-row">
        {/* Left: service cards */}
        <div className="sm:w-[42%] p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-ink-200/30 space-y-2.5">
          <div className="text-[10px] font-bold text-ink-500 uppercase tracking-wider mb-1">Browse Services</div>
          {services.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-ink-200/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
                <s.Icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-ink-900">{s.label}</div>
                <div className="text-[9px] text-ink-400">Available near you</div>
              </div>
              <div className="text-[10px] font-bold text-accent-600 shrink-0">Book</div>
            </div>
          ))}
        </div>

        {/* Right: provider cards */}
        <div className="sm:w-[58%] p-3 sm:p-4">
          <div className="flex items-center justify-between mb-1">
            <div className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Top Providers</div>
            <div className="text-[9px] text-ink-400">Verified &middot; Rated</div>
          </div>
          <div className="space-y-2.5">
            {providers.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-ink-200/50 shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ink-200 to-ink-300 flex items-center justify-center shrink-0 text-[11px] font-bold text-ink-600">
                  {p.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-ink-900 truncate">{p.name}</span>
                    {p.verified && (
                      <Shield className="w-3 h-3 text-emerald-500 shrink-0" />
                    )}
                  </div>
                  <div className="text-[9px] text-ink-400 truncate">{p.service} &middot; {p.area}</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-ink-200'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
