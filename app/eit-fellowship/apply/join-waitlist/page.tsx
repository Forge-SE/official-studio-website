"use client";

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      country: "",
      role: "",
      reason: "",
      heardFrom: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      country: Yup.string().required("Country is required"),
      role: Yup.string().required("Please select a role"),
      reason: Yup.string().required("Please tell us why you’re interested"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (result.success) {
        setLoading(false);
        setSubmitted(true);
        resetForm();
      }
    },
  });

  const roles = [
    "Aspiring Entrepreneur",
    "Founder",
    "Engineer",
    "Student",
    "Researcher",
    "Other",
  ];

  const sources = [
    "Social Media",
    "Friend or Colleague",
    "EIT Website",
    "Event or Workshop",
    "Other",
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-start px-5 md:px-10 mt-1 md:pt-24 pb-36 w-full md:gap-0 gap-16">
      {/* LEFT SIDE */}
      <div className="flex flex-col-reverse md:flex-col justify-center items-start w-full md:w-1/2 gap-5">
        <div className="w-full space-y-4">
          <h1 className="hidden md:flex text-4xl md:text-5xl ds font-semibold text-black">
            Join the EIT Fellowship Waitlist
          </h1>
          <h1 className="md:hidden flex text-4xl ds font-semibold text-black">
            EIT Fellowship Waitlist
          </h1>
          <p className="sub text-sm w-full md:text-base md:max-w-xl">
            Be the first to know when applications open for the next EIT
            Fellowship cohort. Gain access to hands-on learning, mentorship, and
            resources to grow as a tech entrepreneur.
          </p>
        </div>

        <Image
          src="/fellowship.jpg"
          alt="EIT Fellowship"
          width={500}
          height={500}
          className="rounded-lg mt-10"
        />
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {submitted ? (
          <div className="h-[60vh] flex flex-col justify-center items-center text-center">
            <Image src="/near-me.svg" alt="" width={80} height={80} />
            <h2 className="text-2xl font-semibold text-black mt-3">
              You’re on the waitlist!
            </h2>
            <p className="text-gray-600 mt-2 sub max-w-sm">
              We’ll notify you once applications open. Stay tuned for updates
              and opportunities to engage with the EIT community.
            </p>
          </div>
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white w-full max-w-md space-y-5"
          >
            {/* FULL NAME */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className="sub w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.fullName}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="sub w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="sub w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* COUNTRY */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Country of Residence
              </label>
              <input
                type="text"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className="sub w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.country}
                </p>
              )}
            </div>

            {/* ROLE */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Role / Background
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {roles.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => formik.setFieldValue("role", r)}
                    className={`px-3 py-1 rounded-sm border text-sm transition sub ${
                      formik.values.role === r
                        ? "bg-(--primary-color) text-white border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-blue-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              {formik.touched.role && formik.errors.role && (
                <p className="text-red-500 text-sm sub">{formik.errors.role}</p>
              )}
            </div>

            {/* LINKEDIN */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                LinkedIn / Portfolio (optional)
              </label>
              <input
                type="text"
                name="linkedIn"
                onChange={formik.handleChange}
                value={formik.values.linkedIn}
                className="sub w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            {/* REASON */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Why do you want to join the EIT Fellowship?
              </label>
              <textarea
                name="reason"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reason}
                rows={4}
                className="sub text-[14px] w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Tell us about your goals or interests..."
              />
              {formik.touched.reason && formik.errors.reason && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.reason}
                </p>
              )}
            </div>

            {/* HOW THEY HEARD */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                How did you hear about us? (optional)
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {sources.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => formik.setFieldValue("heardFrom", s)}
                    className={`px-3 py-1 rounded-sm border text-sm transition sub ${
                      formik.values.heardFrom === s
                        ? "bg-(--primary-color) text-white border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-blue-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="cursor-pointer w-full sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
            >
              {loading ? (
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  <span>Join Waitlist</span>{" "}
                  <kbd className="h-4 border border-white/40 bg-white/15 px-1 text-sm rounded-xs ml-1">
                    <span className="text-xs">↪</span>
                  </kbd>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
