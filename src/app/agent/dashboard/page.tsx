import Link from "next/link";
import { Plus, Store, MapPin, Calendar, User } from "lucide-react";

const mockShops = [
  {
    id: 1,
    shopName: "Sri Balaji Kirana",
    merchantName: "Ramesh Kumar",
    location: "Kukatpally, Hyd",
    date: "2023-10-25",
  },
  {
    id: 2,
    shopName: "Laxmi Provisions",
    merchantName: "Suresh Reddy",
    location: "Ameerpet, Hyd",
    date: "2023-10-24",
  },
  {
    id: 3,
    shopName: "FreshMart Daily",
    merchantName: "Anita Sharma",
    location: "Madhapur, Hyd",
    date: "2023-10-23",
  },
  {
    id: 4,
    shopName: "Venkateshwara Stores",
    merchantName: "Venkatesh Rao",
    location: "Gachibowli, Hyd",
    date: "2023-10-22",
  },
];

export default function AgentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <div className="bg-orange-600 text-white pt-12 pb-20 px-6 rounded-b-[2rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-orange-900 opacity-20 rounded-full blur-xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome, Agent Kunal!</h1>
          <div className="inline-flex items-center bg-orange-700/50 backdrop-blur-sm rounded-full px-4 py-2 mt-2 border border-orange-500/30">
            <Store className="w-4 h-4 text-orange-200 mr-2" />
            <span className="text-orange-100 text-sm font-medium">
              Total Shops Onboarded: <strong className="ml-1 text-white text-base">12</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-8 relative z-20">
        <div className="flex justify-between items-end mb-4 px-1 text-gray-800">
          <h2 className="text-xl font-bold">Recent Onboardings</h2>
        </div>

        <div className="space-y-4">
          {mockShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mr-3 shrink-0">
                  <Store className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">
                    {shop.shopName}
                  </h3>
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full inline-block mt-1">
                    Active
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
                  <span className="truncate">{shop.merchantName}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
                  <span className="truncate">{shop.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
                  <span>{shop.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50">
        <Link href="/agent/onboard" className="block max-w-md mx-auto">
          <button className="w-full bg-orange-600 text-white py-4 px-6 rounded-2xl shadow-[0_8px_30px_rgb(234,88,12,0.3)] font-bold text-lg flex items-center justify-center hover:bg-orange-700 hover:shadow-[0_8px_30px_rgb(234,88,12,0.4)] transition-all active:scale-[0.98]">
            <Plus className="w-6 h-6 mr-2" />
            Onboard New Merchant
          </button>
        </Link>
      </div>
    </div>
  );
}
