"use client";

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";

const BuildWithUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
      file: null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      projectType: Yup.string().required("Please select a project type"),
      timeline: Yup.string().required("Please select a timeline"),
      message: Yup.string().required("Please describe your project"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await fetch("/api/contact", {
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

  // Tag options
  const projectTypes = [
    "Web App",
    "Mobile App",
    "SaaS Platform",
    "Consultation",
    "Other",
  ];
  const budgets = ["Below $5k", "$5k–$10k", "$10k–$25k", "Above $25k"];
  const timelines = ["ASAP", "1–3 months", "3–6 months", "Flexible"];

  return (
    <section className="flex justify-center items-start px-10 pt-24 pb-36 w-full">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-start w-1/2 gap-5">
        <h1 className="text-5xl ds font-semibold text-black">
          Let&apos;s create something remarkable
        </h1>
        <p className="sub text-base max-w-xl">
          We collaborate with ambitious teams to design, engineer, and launch
          products that scale. Share a few details about your project — we’ll
          review it and get in touch to explore how we can make it happen
          together.
        </p>
        <Image
          src="/tv.jpg"
          alt="Build with us"
          width={500}
          height={500}
          className="rounded-lg mt-10"
        />
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-1/2 flex justify-center items-center">
        {submitted ? (
          <div className="h-[60vh] flex flex-col justify-center items-center">
            <Image src="/near-me.svg" alt="" width={80} height={80} />
            <div className="text-center ">
              <h2 className="text-2xl font-semibold text-black">
                Thank you for reaching out!
              </h2>
              <p className="text-gray-600 mt-2 sub">
                We’ve received your message and will get back to you shortly.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white   w-full max-w-md space-y-5"
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
                className=" sub w-full border border-gray-300 rounded-md p-2 mt-1"
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
                className=" sub w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* COMPANY */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Company / Organization (optional)
              </label>
              <input
                type="text"
                name="company"
                onChange={formik.handleChange}
                value={formik.values.company}
                className=" sub w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* PROJECT TYPE */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Project Type
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => formik.setFieldValue("projectType", type)}
                    className={`px-3 py-1 rounded-sm border text-sm transition sub ${
                      formik.values.projectType === type
                        ? "bg-(--primary-color) text-white border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-blue-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {formik.touched.projectType && formik.errors.projectType && (
                <p className="text-red-500 text-sm mt-1 sub">
                  {formik.errors.projectType}
                </p>
              )}
            </div>

            {/* BUDGET */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Project Budget (optional)
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => formik.setFieldValue("budget", b)}
                    className={`px-3 py-1 rounded-sm border text-sm transition sub ${
                      formik.values.budget === b
                        ? "bg-(--primary-color) text-white border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-blue-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Project Timeline
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {timelines.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => formik.setFieldValue("timeline", t)}
                    className={`px-3 py-1 rounded-sm border text-sm transition sub ${
                      formik.values.timeline === t
                        ? "bg-(--primary-color) text-white border border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-blue-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {formik.touched.timeline && formik.errors.timeline && (
                <p className="text-red-500 text-sm mt-1 sub">
                  {formik.errors.timeline}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Message / Project Description
              </label>
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                rows={4}
                className=" sub  text-[14px] w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Tell us a bit about your project..."
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* FILE UPLOAD */}
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                File Upload (optional)
              </label>
              <input
                type="file"
                name="file"
                onChange={(event) =>
                  formik.setFieldValue("file", event.currentTarget.files?.[0])
                }
                className="w-full border border-gray-300 rounded-md p-2 mt-1 sub text-sm"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm  shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
            >
              {loading ? (
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  <span>Send Message</span>{" "}
                  <kbd className="h-4 border border-white/40 bg-white/15  px-1 text-sm rounded-xs ml-1">
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

export default BuildWithUs;
