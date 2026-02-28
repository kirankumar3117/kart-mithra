"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Loader2, Store } from "lucide-react";

export default function AgentLogin() {
  const router = useRouter();
  const [agentId, setAgentId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Mock API call to authenticate agent
    setTimeout(() => {
      if (agentId && password) {
        // Success
        router.push("/agent/dashboard");
      } else {
        // Validation error
        setError("Please enter both Agent ID and Password.");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-orange-600 p-8 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Agent Portal</h1>
          <p className="text-orange-100 mt-2">Kart Mithra Field Operations</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Agent ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={agentId}
                  onChange={(e) => setAgentId(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="e.g. AGT-1042"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-600 text-white flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Authenticating...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kart Mithra. All rights reserved.
      </div>
    </div>
  );
}
