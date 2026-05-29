# 🥗 DigiDiet ASEAN
> **One Number. Smarter Meals. A Connected Circle of Care.**

[![Website Status](https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fdigidiet-asean.vercel.app%2F&style=flat-edge&color=00875A)](https://digidiet-asean.vercel.app/)
[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-000000?style=flat-edge&logo=nextdotjs)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38BDB8?style=flat-edge&logo=tailwindcss)](https://tailwindcss.com/)
[![Telegram Bot API](https://img.shields.io/badge/Interface-Telegram%20Bot%20API-26A5E4?style=flat-edge&logo=telegram)](https://core.telegram.org/bots)

DigiDiet ASEAN is an AI-powered conversational ecosystem designed to radically simplify Type 2 Diabetes management across the ASEAN region. By replacing complex, high-friction tracking applications with a zero-learning-curve Telegram bot interface (**NutriPulse Bot**), we close the loop between data entry, cultural nutrition analysis, and proactive clinical care.

🚀 **Explore the Live Interface:** [digidiet-asean.vercel.app](https://digidiet-asean.vercel.app/)

---

## 📖 The Story & The ASEAN Crisis

Managing Type 2 Diabetes shouldn't require a degree in data logging. Traditional manual tracking applications fail chronic patients due to three distinct regional friction points:

*   **⚡ Input Fatigue:** Clinical datasets show that **67% of chronic patients completely abandon manual logging** within 30 days due to over-engineered, multi-step application interfaces.
*   **🌏 The Cultural Nutritional Gap:** Global nutrition and carbohydrate logging databases heavily lack localization. They offer zero contextual understanding of diverse regional foods, making tracking highly inaccurate and culturally alienating for ASEAN users.
*   **🔗 The Broken Care Loop:** Tracking metrics are often trapped in isolated apps. Family support networks and primary care physicians lack unified, automated, real-time telemetry visibility when critical sugar spikes occur.

---

## 💡 The Modular Architecture

DigiDiet ASEAN transforms metabolic data tracking from a chore into a seamless, conversational flow divided into three distinct phases:

### 1. Zero-Friction Input (The Patient)
Instead of opening a separate dashboard, navigating logs, and typing extensive carbohydrate summaries, the patient drops a single raw glucose reading (e.g., `150`) directly into a lightweight, highly responsive Telegram Bot conversation window.

### 2. Contextual Translation (The AI Core)
The background engine matches the logged metabolic metrics against a localized regional nutritional database. Instead of just showing abstract medical warnings, it provides immediate, culturally conversational dietary suggestions (e.g., *“Great job staying in range. Try swapping your standard Kuy Teav for a variant with double bean sprouts to lower glycemic load.”*)

### 3. Automated Telemetry Loop (The Circle of Care)
The platform breaks tracking isolation by handling data routing dynamically:
*   **Clinical Sync:** Records are instantly compiled into clean data panels for physician dashboards.
*   **Family Nudges:** If extreme or anomalous numbers are logged, the bot handles automated, gentle safety routing triggers directly to designated family chat spaces.

---

## 🛠️ Built Modularly

The repository features a highly structured, scalable layout optimized for rapid deployment and performance:

```text
src/
├── app/
│   ├── layout.tsx         # Global fonts, providers, and root structure
│   └── page.tsx           # Widescreen minimalist landing page canvas
├── components/
│   ├── ui/                # atomic core components (buttons, badges)
│   ├── sections/          # Modular landing layout components
│   │   ├── problem-section.tsx   # Asymmetric 2-column validation grid
│   │   └── solution-section.tsx  # Interactive 3-column workflow engine
│   ├── dashboard/         # Mock data gauges and visualization matrix
│   └── telegram/          # Custom phone viewport and custom 3x4 keypad