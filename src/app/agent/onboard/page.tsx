"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Store,
  User,
  MapPin,
  Phone,
  Camera,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function AgentOnboard() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1 = form, 2 = handover, 3 = success

  // Step 1 State: Form
  const [merchantName, setMerchantName] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");

  // Step 2 State: PIN
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [pinError, setPinError] = useState("");

  const handleProceedToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantName || !shopName || !shopLocation || !phoneNumber) {
      setFormError("Please fill in all the text fields.");
      return;
    }
    setFormError("");
    setStep(2);
  };

  const handlePinChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto focus next
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handlePinKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };

  const handleCompleteSetup = () => {
    if (pin.some((p) => p === "")) {
      setPinError("Please enter a 4-digit PIN.");
      return;
    }
    setPinError("");
    setIsLoading(true);

    // Mock API Call to save merchant & PIN
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Success Screen
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm flex flex-col items-center animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Setup Complete!</h2>
          <p className="text-gray-600 mb-8">
            {merchantName}&apos;s store &quot;{shopName}&quot; has been successfully onboarded.
          </p>
          <button
            onClick={() => router.push("/agent/dashboard")}
            className="w-full bg-orange-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-orange-700 transition-colors shadow-lg"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
        {/* Agent Warning Banner */}
        <div className="bg-blue-600 text-white p-4 text-center z-20 flex flex-col items-center justify-center animate-in slide-in-from-top-4 duration-500">
          <AlertCircle className="w-8 h-8 mb-2 opacity-90" />
          <p className="font-bold text-lg">Agent, please hand the device to the Merchant.</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-white z-10 mt-8 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="w-full max-w-sm text-center">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to Kart Mithra,
              <br />
              <span className="text-orange-600">{merchantName}!</span>
            </h1>
            <p className="text-gray-500 mb-8">
              Please set a 4-digit PIN to secure your account. You will use this to log in.
            </p>

            {pinError && (
              <p className="text-red-500 text-sm font-medium mb-4">{pinError}</p>
            )}

            <div className="flex justify-center gap-4 mb-10">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="password"
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handlePinKeyDown(index, e)}
                  className="w-14 h-16 text-center text-3xl font-bold bg-gray-100 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/20 transition-all outline-none"
                  autoComplete="off"
                  maxLength={1}
                />
              ))}
            </div>

            <button
              onClick={handleCompleteSetup}
              disabled={isLoading}
              className="w-full bg-orange-600 text-white py-4 px-6 rounded-2xl shadow-lg font-bold text-lg flex items-center justify-center hover:bg-orange-700 transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                  Securing Account...
                </>
              ) : (
                "Confirm PIN & Complete Setup"
              )}
            </button>
            
            <button
              onClick={() => setStep(1)}
              disabled={isLoading}
              className="mt-4 text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors"
            >
              Cancel & Return to Agent
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Agent Form
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center px-4 h-16">
          <Link href="/agent/dashboard" className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative z-10">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex-1 text-center -ml-8">
            <h1 className="text-lg font-bold text-gray-900">Onboard Merchant</h1>
          </div>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleProceedToStep2} className="space-y-6 max-w-md mx-auto">
          {formError && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
              {formError}
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Merchant Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={merchantName}
                  onChange={(e) => setMerchantName(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                  placeholder="e.g. Ramesh Kumar"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Shop Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Store className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                  placeholder="e.g. Sri Balaji Kirana"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Shop Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={shopLocation}
                  onChange={(e) => setShopLocation(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                  placeholder="e.g. Kukatpally, Hyderabad"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                />
              </div>
            </div>
          </div>

          {/* Photo Uploads */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              type="button"
              className="flex flex-col items-center justify-center p-6 bg-orange-50 border-2 border-dashed border-orange-200 rounded-2xl hover:bg-orange-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-orange-800 text-center">Take Shop<br />Photo</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center justify-center p-6 bg-orange-50 border-2 border-dashed border-orange-200 rounded-2xl hover:bg-orange-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-orange-800 text-center">Merchant<br />Selfie</span>
            </button>
          </div>

        </form>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-40 pb-safe">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleProceedToStep2}
            className="w-full bg-gray-900 text-white py-4 px-6 rounded-2xl shadow-xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98]"
          >
            Proceed to Merchant PIN Setup
          </button>
        </div>
      </div>
    </div>
  );
}
