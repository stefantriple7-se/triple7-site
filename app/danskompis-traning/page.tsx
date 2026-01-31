import React from "react";
import Image from "next/image";

const renderImage = (src: string, alt: string, caption: string) => {
  return (
    <figure
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        flex: "0 1 160px",             // ← ger en "kortbredd" som kan wrappas
        maxWidth: "180px",             // maxbredd per kort
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "1.5rem",
          border: "1px solid #e2e8f0",
          backgroundColor: "#f8fafc",
          boxShadow: "0 10px 20px rgba(15, 23, 42, 0.08)",
          padding: "0.75rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            display: "block",
            width: "100%",          // ← fyll figuren
            height: "auto",
          }}
        />
      </div>
      <figcaption
        style={{
          fontSize: "0.75rem",
          color: "#64748b",
          textAlign: "center",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
};

export default function DanskompisTrainingPage() {
  return (
    <div className="page mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <section className="mb-12">
        <p className="mb-3 inline-flex rounded-full border border-pink-200/60 bg-pink-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-pink-700">
          Part of the &quot;Danskompis&quot; family
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Danskompis – Träning
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-slate-600 md:text-base">
          An Android app that turns your Spotify playlists into interval-based
          training sessions. Built for dancers, coaches, and instructors who
          want the music to drive the workout – not the stopwatch.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Internal / beta
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
            Kotlin · Jetpack Compose · Spotify SDK
          </span>
        </div>
      </section>

      <section
        style={{
          marginTop: "1rem",
          padding: "0 1.5rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#0284c7",
            }}
          >
            App screenshots
          </h3>

          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            Danskompis Träning – Spotify-powered interval workouts
          </p>

         <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {renderImage(
              "/danskompis-traning/splash.jpeg",
              "Danskompis Träning – Start screen",
              "App start screen with the possibility to log in to your Premium Spotify account."
            )}
            {renderImage(
              "/danskompis-traning/playlists.jpeg",
              "Danskompis Träning – Playlists screen",
              "Playlists screen where you select which playlist to use for the workout."
            )}
            {renderImage(
              "/danskompis-traning/workoutview.jpeg",
              "Danskompis Träning – Workout screen",
              "The workout screen showing duration and pause selectors for each track."
            )}
            {renderImage(
              "/danskompis-traning/playing.jpeg",
              "Danskompis Träning – Song playing screen",
              "Current song playing for the configured duration."
            )}
            {renderImage(
              "/danskompis-traning/paus.jpeg",
              "Danskompis Träning – Song pause screen",
              "Current song paused for the set duration."
            )}
            {renderImage(
              "/danskompis-traning/save.jpeg",
              "Danskompis Träning – Save new template screen",
              "Saving a new user template with custom duration and pause settings. If applied, it will be used for every song in the workout."
            )}
            {renderImage(
              "/danskompis-traning/templates.jpeg",
              "Danskompis Träning – Select template screen",
              "Select predefined or user-defined templates to apply to the current workout."
            )}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Key features
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Designed to make it simple to run structured interval sessions using
          music you already love.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Connect to Spotify Premium"
            description="Sign in with your Spotify account and pull your personal playlists directly into the app."
          />
          <FeatureCard
            title="Per-track play & rest times"
            description="Configure per-track play and pause durations, like 60/20, 90/30, or fully custom values for each song."
          />
          <FeatureCard
            title="Save workouts and templates"
            description="Store complete workouts for a specific playlist, and create generic templates that can be reused across playlists."
          />
          <FeatureCard
            title="Visual progress & audio cues"
            description="Progress bars for play and pause, plus audio cues at 60, 30, and 10 seconds remaining in the pause."
          />
        </div>
      </section>

      {/* Tech + consulting angle */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Technical overview
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Danskompis – Träning is built as a modern Android application with a
          focus on clean architecture, predictable state management, and smooth
          integration with external music services.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <TechBlock
            title="Stack & UI"
            items={[
              "Kotlin",
              "Jetpack Compose + Material 3",
              "Coroutines & Flows for state",
            ]}
          />
          <TechBlock
            title="Spotify integration"
            items={[
              "Spotify App Remote SDK for playback",
              "Spotify Web API for metadata & artwork",
              "Token management via DataStore",
            ]}
          />
          <TechBlock
            title="Workout engine"
            items={[
              "Custom PlaylistWorkoutEngine with PLAYING/PAUSING phases",
              "Time-driven logic with millisecond timers",
              "Audio cues based on remaining pause time",
            ]}
          />
          <TechBlock
            title="Storage & configuration"
            items={[
              "JSON-based per-playlist workout configs",
              "SharedPreferences for global templates",
              "Reusable presets for different session styles",
            ]}
          />
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          Availability & current status
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          The app is currently available in a limited internal/beta setup and
          requires a personal Spotify Premium account to function. Due to
          Spotify&apos;s current rules around API quotas, it has not yet been
          released as a public Google Play listing, but is used in smaller
          training groups and as a reference project in my consulting work.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Interested in something similar?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            If you&apos;re looking to build a training app, internal tool, or
            music-driven experience for your company, dance club, or sports
            organisation,{" "}
            <a className="link" href="mailto:contact@triple7.se">
              contact us
            </a>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-">
          <span className="text-xs text-slate-500">
            <span className="font-semibold text-slate-800">
              Triple7 Studios{" "}
            </span>
            · Apps, games & digital products
          </span>
        </div>
      </section>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

type TechBlockProps = {
  title: string;
  items: string[];
};

function TechBlock({ title, items }: TechBlockProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}