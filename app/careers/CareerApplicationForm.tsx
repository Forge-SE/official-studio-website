"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { headingVariants, subtextVariants } from "../components/layout/Animations";
import type { CareerOpening } from "./data";

type CareerApplicationFormProps = {
  opening: CareerOpening;
  openings: CareerOpening[];
  onSelectOpening: (openingId: string) => void;
};

type CareerApplicationValues = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  portfolio: string;
  availability: string;
  message: string;
};

const initialValues: CareerApplicationValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedIn: "",
  portfolio: "",
  availability: "",
  message: "",
};

const inputClassName =
  "sub w-full border border-gray-300 rounded-md p-3 mt-1";

export default function CareerApplicationForm({
  opening,
  openings,
  onSelectOpening,
}: CareerApplicationFormProps) {
  const [submittedRole, setSubmittedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik<CareerApplicationValues>({
    initialValues,
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      location: Yup.string().required("Location is required"),
      availability: Yup.string().required("Availability is required"),
      message: Yup.string().required("Please share more context"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("/api/careers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            roleId: opening.id,
            roleTitle: opening.title,
            roleTeam: opening.team,
          }),
        });

        const result = await res.json();

        if (!res.ok || !result.success) {
          setError(
            result.error || "Something went wrong while sending your application.",
          );
          return;
        }

        setSubmittedRole(opening.title);
        resetForm();
      } catch {
        setError("Something went wrong while sending your application.");
      } finally {
        setLoading(false);
      }
    },
  });

  if (submittedRole) {
    return (
      <div className="rounded-[32px] border border-black/10 bg-white p-6 md:p-10 shadow-[6px_6px_0px_0px] shadow-black/5">
        <div className="flex min-h-[420px] flex-col items-start justify-center gap-5 text-left">
          <Image src="/near-me.svg" alt="" width={72} height={72} />
          <div className="space-y-3">
            <h3 className="text-3xl text-black">Application received</h3>
            <p className="sub text-sm md:text-base text-(--black-color)">
              We have received your application for {submittedRole}. If there is
              a fit, our team will reach out with the next steps.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmittedRole(null);
              setError("");
            }}
            className="cursor-pointer sub bg-(--primary-color) text-white text-sm px-4 py-3 rounded-sm shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300"
          >
            Apply for another role
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-black/10 bg-white p-6 md:p-10 shadow-[6px_6px_0px_0px] shadow-black/5">
      <div className="grid gap-10 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <motion.h3
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl text-black"
            >
              Application details
            </motion.h3>
            <motion.p
              variants={subtextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sub text-sm md:text-base text-(--black-color)"
            >
              Select the role you are applying for, then share the context that
              best represents your work and experience.
            </motion.p>
          </div>

          <div className="space-y-5 rounded-[28px] border border-black/10 bg-black p-6 text-white">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.24em] text-white/60 sub">
                Selected opening
              </div>
              <h4 className="text-2xl leading-tight">{opening.title}</h4>
              <p className="sub text-sm text-white/80">{opening.summary}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[opening.team, opening.type, opening.location].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs md:text-sm sub"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-base font-medium text-gray-700 ds">
              Role
            </label>
            <div className="flex flex-wrap gap-2">
              {openings.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectOpening(item.id)}
                  className={`cursor-pointer rounded-sm border px-3 py-2 text-sm transition sub ${
                    opening.id === item.id
                      ? "bg-(--primary-color) text-white border-(--primary-color) shadow-[2px_2px_0px_0px] shadow-blue-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
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
                className={inputClassName}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="text-red-500 text-sm sub">{formik.errors.fullName}</p>
              ) : null}
            </div>

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
                className={inputClassName}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm sub">{formik.errors.email}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
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
                className={inputClassName}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="text-red-500 text-sm sub">{formik.errors.phone}</p>
              ) : null}
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Current Location
              </label>
              <input
                type="text"
                name="location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
                className={inputClassName}
              />
              {formik.touched.location && formik.errors.location ? (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.location}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                Availability
              </label>
              <input
                type="text"
                name="availability"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.availability}
                className={inputClassName}
                placeholder="Immediate, 2 weeks, part-time evenings..."
              />
              {formik.touched.availability && formik.errors.availability ? (
                <p className="text-red-500 text-sm sub">
                  {formik.errors.availability}
                </p>
              ) : null}
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 ds">
                LinkedIn URL (optional)
              </label>
              <input
                type="text"
                name="linkedIn"
                onChange={formik.handleChange}
                value={formik.values.linkedIn}
                className={inputClassName}
                placeholder="https://linkedin.com/in/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 ds">
              Portfolio / GitHub URL (optional)
            </label>
            <input
              type="text"
              name="portfolio"
              onChange={formik.handleChange}
              value={formik.values.portfolio}
              className={inputClassName}
              placeholder="https://github.com/... or your portfolio"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 ds">
              {opening.applicationPrompt}
            </label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              rows={7}
              className={`${inputClassName} text-[14px]`}
              placeholder="Share your experience, context, and why you are excited about this role."
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 text-sm sub">{formik.errors.message}</p>
            ) : null}
          </div>

          {error ? <p className="text-red-500 text-sm sub">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full md:w-auto sub bg-(--primary-color) text-white text-sm px-5 py-3 rounded-sm shadow-[2px_2px_0px_0px] shadow-blue-800 hover:shadow-none transition-shadow duration-300 disabled:cursor-not-allowed disabled:opacity-80"
          >
            {loading ? (
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                <span>Send application</span>
                <kbd className="ml-2 rounded-xs border border-white/40 bg-white/15 px-1 text-xs">
                  -&gt;
                </kbd>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
