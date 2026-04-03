"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  sendContactEmail,
  resetStatus,
  ContactFormData,
} from "../store/slices/contactSlice";
import { RootState } from "../store/store";
import { useEffect } from "react";

import type { AppDispatch } from "../store/store";

export default function ContactForm() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.contact,
  );

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => dispatch(resetStatus()), 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Numele este obligatoriu"),
    email: Yup.string()
      .email("Email invalid")
      .required("Emailul este obligatoriu"),
    subject: Yup.string().required("Subiectul este obligatoriu"),
    message: Yup.string()
      .min(10, "Mesajul trebuie să aibă minim 10 caractere")
      .required("Mesajul este obligatoriu"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values: ContactFormData, { resetForm }) => {
        dispatch(sendContactEmail(values)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") resetForm();
        });
      }}
    >
      {() => (
        <Form className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-label text-[10px] uppercase tracking-widest text-outline"
              >
                Nume Complet
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Popescu Ion"
                className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-label text-[10px] uppercase tracking-widest text-outline"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="ion@exemplu.ro"
                className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="font-label text-[10px] uppercase tracking-widest text-outline"
            >
              Subiect
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              placeholder="Înscriere club"
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="font-label text-[10px] uppercase tracking-widest text-outline"
            >
              Mesaj
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Cum te putem ajuta?"
              rows={4}
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary outline-none py-3 transition-colors font-body text-on-surface resize-none"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-[0.75rem] font-bold uppercase tracking-widest px-10 py-4 rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            {loading ? "Se trimite..." : "Trimite Mesaj"}
          </button>

          {success && (
            <p className="text-green-500 mt-2">Email trimis cu succes!</p>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </Form>
      )}
    </Formik>
  );
}
