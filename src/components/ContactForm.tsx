"use client";

import { useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useI18n } from "@/lib/i18n-provider";
import type { TranslationKey } from "@/lib/i18n";
import T from "./T";

const FORM_ID = "mljenpya";

const serviceOptions: { value: string; key: TranslationKey }[] = [
  { value: "Ski & snowboard lessons", key: "form.service.lessons" },
  { value: "Guided skiing", key: "form.service.guiding" },
  { value: "Winter hiking / snowshoe", key: "form.service.hiking" },
  { value: "Mountaineering", key: "form.service.mountaineering" },
  { value: "Accommodation & transport", key: "form.service.logistics" },
  { value: "Other", key: "form.service.other" },
];

export default function ContactForm() {
  const { lang, translate } = useI18n();
  const [state, handleSubmit] = useForm(FORM_ID);
  const [serviceError, setServiceError] = useState(false);

  if (state.succeeded) {
    return (
      <p className="form-success">
        <T k="form.success" />
      </p>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const selected = new FormData(event.currentTarget).getAll("service");
    if (selected.length === 0) {
      event.preventDefault();
      setServiceError(true);
      return;
    }
    setServiceError(false);
    return handleSubmit(event);
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="ESA website inquiry" />
      <input type="hidden" name="language" value={lang === "zh" ? "Chinese" : "English"} />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="inquiry-form__honeypot"
        aria-hidden="true"
      />

      <div className="inquiry-form__row">
        <label htmlFor="name">
          <T k="form.name" />
        </label>
        <input id="name" type="text" name="name" required autoComplete="name" />
        <ValidationError field="name" prefix="Name" errors={state.errors} />
      </div>

      <div className="inquiry-form__row">
        <label htmlFor="email">
          <T k="form.email" />
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} />
      </div>

      <div className="inquiry-form__grid">
        <div className="inquiry-form__row">
          <label htmlFor="dates">
            <T k="form.dates" />
          </label>
          <input
            id="dates"
            type="text"
            name="dates"
            required
            placeholder={translate("form.dates.placeholder")}
          />
        </div>
        <div className="inquiry-form__row">
          <label htmlFor="group_size">
            <T k="form.group" />
          </label>
          <input
            id="group_size"
            type="number"
            name="group_size"
            min={1}
            step={1}
            required
            placeholder={translate("form.group.placeholder")}
          />
        </div>
      </div>

      <fieldset className="inquiry-form__row">
        <legend>
          <T k="form.service" />
        </legend>
        <p className="inquiry-form__hint">
          <T k="form.service.hint" />
        </p>
        <div className="inquiry-checks">
          {serviceOptions.map(({ value, key }) => (
            <label key={value} className="inquiry-check">
              <input
                type="checkbox"
                name="service"
                value={value}
                onChange={() => setServiceError(false)}
              />
              <span>{translate(key)}</span>
            </label>
          ))}
        </div>
        {serviceError ? (
          <p className="form-error">
            <T k="form.service.required" />
          </p>
        ) : null}
      </fieldset>

      <div className="inquiry-form__row">
        <label htmlFor="message">
          <T k="form.message" />
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={translate("form.message.placeholder")}
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} />
      </div>

      {state.errors && state.errors.getFormErrors().length > 0 ? (
        <p className="form-error">
          <T k="form.error" />
        </p>
      ) : null}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={state.submitting}
      >
        <T k={state.submitting ? "form.submitting" : "form.submit"} />
      </button>
    </form>
  );
}
