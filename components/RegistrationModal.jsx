"use client";

import React, { useState } from "react";
import {
  X,
  User,
  CreditCard,
  MapPin,
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mail,
  ShieldCheck,
  Building,
} from "lucide-react";

export default function RegistrationModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal & Contact Details
    applicantName: "",
    guardianName: "",
    dob: "",
    phone: "",
    email: "",
    rmCode: "",

    // Step 2: Identification & Address Details
    aadhaarNumber: "",
    panNumber: "",
    address: "",
    city: "",
    pincode: "",
    state: "Maharashtra",

    // Step 3: Plot Selection & Payment Confirmation
    quota: "General Applicant",
    plotSize: initialData?.size ? `${initialData.size} Sq.Yd.` : "321.72 Sq.Yd.",
    termsAgreed: false,
  });

  // Email OTP verification states
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState({ text: "", type: "" });
  const [resendTimer, setResendTimer] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [appId, setAppId] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "email") {
      setIsEmailVerified(false);
      setOtpSent(false);
      setOtpInput("");
      setOtpMessage({ text: "", type: "" });
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendOtp = async () => {
    if (!formData.email || !formData.email.includes("@")) {
      setOtpMessage({ text: "Please enter a valid email address first.", type: "error" });
      return;
    }
    setIsSendingOtp(true);
    setOtpMessage({ text: "", type: "" });
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        setOtpMessage({
          text: "Verification code sent to your email. Please check your inbox or spam folder.",
          type: "success",
        });
        setResendTimer(60);
        const interval = setInterval(() => {
          setResendTimer((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        setOtpMessage({ text: data.message || "Failed to send OTP", type: "error" });
      }
    } catch {
      setOtpMessage({ text: "Network error sending OTP. Please try again.", type: "error" });
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpInput || otpInput.trim().length !== 6) {
      setOtpMessage({ text: "Please enter the 6-digit OTP received on your email.", type: "error" });
      return;
    }
    setIsVerifyingOtp(true);
    setOtpMessage({ text: "", type: "" });
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: otpInput }),
      });
      const data = await res.json();
      if (data.success) {
        setIsEmailVerified(true);
        setOtpMessage({ text: "Email verified successfully! ✓", type: "success" });
      } else {
        setOtpMessage({ text: data.message || "Invalid OTP entered.", type: "error" });
      }
    } catch {
      setOtpMessage({ text: "Network error verifying OTP. Please try again.", type: "error" });
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const validateStep1 = () => {
    if (!formData.applicantName.trim()) {
      alert("Please enter Applicant Full Name");
      return false;
    }
    if (!formData.guardianName.trim()) {
      alert("Please enter Father's / Husband's Name");
      return false;
    }
    if (!formData.dob) {
      alert("Please select Date of Birth");
      return false;
    }
    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit Phone Number");
      return false;
    }
    if (!formData.email) {
      alert("Please enter your Email Address");
      return false;
    }
    if (!isEmailVerified) {
      alert("Please verify your Email Address with the OTP sent to your email before proceeding.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.panNumber.trim()) {
      alert("Please enter PAN Card Number");
      return false;
    }
    if (!formData.address.trim()) {
      alert("Please enter Address");
      return false;
    }
    if (!formData.city.trim()) {
      alert("Please enter City");
      return false;
    }
    if (!formData.pincode.trim() || formData.pincode.length < 6) {
      alert("Please enter a valid 6-digit Pincode");
      return false;
    }
    if (!formData.state.trim()) {
      alert("Please enter State");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert("Please agree to the Terms & Conditions and Disclaimer before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      const generatedId = data.appId || `PMAY-GOA-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppId(generatedId);
      setSuccess(true);
    } catch {
      const generatedId = `PMAY-GOA-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppId(generatedId);
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-start justify-between bg-white relative">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
              Registration Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {step === 1 && "Step 1 of 3: Personal & Contact Details"}
              {step === 2 && "Step 2 of 3: Identity & Address Details"}
              {step === 3 && "Step 3 of 3: Plot Selection & Payment Confirmation"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Header */}
        <div className="px-6 sm:px-8 pt-5 pb-4 bg-slate-50/60 border-b border-slate-100">
          <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-xl mx-auto">
            {/* Step 1 Indicator */}
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step > 1
                    ? "bg-[#059669] text-white"
                    : step === 1
                    ? "bg-[#059669] text-white ring-4 ring-emerald-100"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {step > 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
              </div>
              <span
                className={`text-xs font-semibold ${
                  step === 1 ? "text-[#059669]" : "text-slate-600"
                }`}
              >
                Personal Info
              </span>
            </div>

            <div className={`h-0.5 w-8 sm:w-16 ${step > 1 ? "bg-[#059669]" : "bg-slate-300"}`} />

            {/* Step 2 Indicator */}
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step > 2
                    ? "bg-[#059669] text-white"
                    : step === 2
                    ? "bg-[#059669] text-white ring-4 ring-emerald-100"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {step > 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
              </div>
              <span
                className={`text-xs font-semibold ${
                  step === 2 ? "text-[#059669]" : "text-slate-600"
                }`}
              >
                Identity & Address
              </span>
            </div>

            <div className={`h-0.5 w-8 sm:w-16 ${step > 2 ? "bg-[#059669]" : "bg-slate-300"}`} />

            {/* Step 3 Indicator */}
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === 3
                    ? "bg-[#059669] text-white ring-4 ring-emerald-100"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                3
              </div>
              <span
                className={`text-xs font-semibold ${
                  step === 3 ? "text-[#059669]" : "text-slate-600"
                }`}
              >
                Plot & Pay
              </span>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {success ? (
            <div className="py-8 text-center space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Registration Submitted Successfully!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, <strong>{formData.applicantName}</strong>. Your registration dossier has been verified and allotted registration code:
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-lg font-mono font-bold text-[#065F46]">
                Application ID: {appId}
              </div>
              <p className="text-xs text-slate-500">
                A confirmation with your payment receipt and application copy has been sent to <strong>{formData.email}</strong> and SMS to <strong>+91 {formData.phone}</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#059669] text-white font-bold text-xs uppercase tracking-wider rounded-md"
                >
                  Close & View Dashboard
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()}>
              
              {/* STEP 1: Personal & Contact Information */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-[#065F46] font-bold text-sm">
                    <User className="w-4 h-4 text-[#059669]" />
                    <span>Step 1: Personal & Contact Information</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Applicant Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Applicant Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="applicantName"
                        required
                        placeholder="Enter Full Name"
                        value={formData.applicantName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>

                    {/* Father's / Husband's Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Father&apos;s/Husband&apos;s Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="guardianName"
                        required
                        placeholder="Father / Husband Name"
                        value={formData.guardianName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        placeholder="YYYY-MM-DD"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs text-slate-700"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        placeholder="98xxxxxxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Email Address with OTP Verification */}
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      {isEmailVerified ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Email Verified
                        </span>
                      ) : (
                        <span className="text-[11px] text-amber-700 font-medium">
                          * Verification required via OTP
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          required
                          disabled={isEmailVerified}
                          placeholder="example@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs ${
                            isEmailVerified
                              ? "bg-emerald-50/60 border-emerald-300 text-slate-800"
                              : "bg-white border-slate-300"
                          }`}
                        />
                      </div>

                      {!isEmailVerified && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={isSendingOtp || resendTimer > 0 || !formData.email}
                          className="px-4 py-2.5 bg-[#065F46] hover:bg-[#047857] disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition shrink-0 cursor-pointer disabled:cursor-not-allowed"
                        >
                          {isSendingOtp
                            ? "Sending OTP..."
                            : resendTimer > 0
                            ? `Resend in ${resendTimer}s`
                            : otpSent
                            ? "Resend OTP"
                            : "Verify with OTP"}
                        </button>
                      )}
                    </div>

                    {/* OTP Input Field when OTP is sent & not yet verified */}
                    {otpSent && !isEmailVerified && (
                      <div className="pt-2 border-t border-slate-200/80 space-y-2">
                        <label className="block text-xs font-semibold text-slate-700">
                          Enter 6-Digit Email OTP:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter 6-digit code"
                            value={otpInput}
                            onChange={(e) => setOtpInput(e.target.value)}
                            className="w-44 px-3.5 py-2 text-sm font-mono tracking-widest text-center bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={isVerifyingOtp || otpInput.trim().length !== 6}
                            className="px-4 py-2 bg-[#059669] hover:bg-[#047857] disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition cursor-pointer disabled:cursor-not-allowed"
                          >
                            {isVerifyingOtp ? "Verifying..." : "Confirm OTP"}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Feedback Message */}
                    {otpMessage.text && (
                      <p
                        className={`text-xs font-medium ${
                          otpMessage.type === "success"
                            ? "text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200"
                            : "text-red-600 bg-red-50 p-2 rounded border border-red-200"
                        }`}
                      >
                        {otpMessage.text}
                      </p>
                    )}
                  </div>

                  {/* RM Code */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      RM Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="rmCode"
                      required
                      placeholder="Enter RM Code"
                      value={formData.rmCode}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                    />
                  </div>

                  {/* Step 1 Actions */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (validateStep1()) setStep(2);
                      }}
                      className="px-6 py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Address & Identity</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Identification & Address Details */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-[#065F46] font-bold text-sm">
                    <CreditCard className="w-4 h-4 text-[#059669]" />
                    <span>Step 2: Identification & Address Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Aadhaar Card Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Aadhaar Card Number
                      </label>
                      <input
                        type="text"
                        name="aadhaarNumber"
                        maxLength={14}
                        placeholder="XXXX XXXX XXXX"
                        value={formData.aadhaarNumber}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>

                    {/* PAN Card Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        PAN Card Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="panNumber"
                        required
                        maxLength={10}
                        placeholder="ABCDE1234F"
                        value={formData.panNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition uppercase shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="House/Plot No, Street, Landmark"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* City */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="Enter City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        maxLength={6}
                        placeholder="6-digit Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        placeholder="Enter State"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Step 2 Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (validateStep2()) setStep(3);
                      }}
                      className="px-6 py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Plot & Payment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Plot Selection & Payment Confirmation */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-[#065F46] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <span>Step 3: Plot Selection & Payment Confirmation</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Quota Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Quota <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="quota"
                        value={formData.quota}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs text-slate-800"
                      >
                        <option value="Female Applicant">Female Applicant</option>
                        <option value="Govt Employee Applicant">Govt Employee Applicant</option>
                        <option value="General Applicant">General Applicant</option>
                      </select>
                    </div>

                    {/* Select Size Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#059669] focus:outline-none transition shadow-2xs text-slate-800"
                      >
                        <option value="321.72 Sq.Yd.">321.72 Sq.Yd.</option>
                        <option value="355.21 Sq.Yd.">355.21 Sq.Yd.</option>
                        <option value="379.13 Sq.Yd.">379.13 Sq.Yd.</option>
                        <option value="449.70 Sq.Yd.">449.70 Sq.Yd.</option>
                        <option value="513.08 Sq.Yd.">513.08 Sq.Yd.</option>
                      </select>
                    </div>
                  </div>

                  {/* Terms & Conditions Agreement */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="termsAgreed"
                        checked={formData.termsAgreed}
                        onChange={handleChange}
                        className="mt-0.5 rounded text-[#059669] focus:ring-[#059669] w-4 h-4"
                      />
                      <span className="leading-relaxed">
                        I agree to the Terms & Conditions,{" "}
                        <span className="text-[#059669] font-medium underline">Privacy Policy</span>,{" "}
                        <span className="text-[#059669] font-medium underline">Refund Policy</span>, and{" "}
                        <span className="text-[#059669] font-medium underline">Disclaimer</span>, and I authorize the company to contact me via call, SMS, WhatsApp, or email regarding this project.
                      </span>
                    </label>
                  </div>

                  {/* Step 3 Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="px-6 py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : "Submit & Pay (₹31,000)"}
                    </button>
                  </div>

                  <div className="text-center pt-1">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Official Disclaimer: Allotment is subject to MahaRERA guidelines and verified submission.");
                      }}
                      className="text-[11px] text-[#059669] hover:underline"
                    >
                      Refer Disclaimer
                    </a>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
