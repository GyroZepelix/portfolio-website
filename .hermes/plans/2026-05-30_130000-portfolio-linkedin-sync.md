# Portfolio Website Update Plan — LinkedIn Sync

**Goal:** Update portfolio website to reflect current LinkedIn profile data, with user
approval on each section before execution.

**Source:** LinkedIn PDF export (2026-05-30) — `dgjalic-linkedin.pdf`

**Repository:** `git@github.com:GyroZepelix/portfolio-website.git`
**Path:** `/opt/data/documents/1-projects/portfolio-website`

---

## Gap Analysis (LinkedIn vs Current Site)

| Section | Current Site | LinkedIn (actual) | Severity |
|---|---|---|---|
| Hero tagline | "Full-Stack Software Engineer specializing in backend architecture" | "Founder & CEO @ AXIO \| Leading Software Development Initiatives" | High |
| Experience | 2 entries: OG Backend Eng + OG Intern | 4 entries: AXIO CEO, Deutsche Bahn Backend, OG Full-stack, OG Intern | High |
| Experience OG role | "July 2023 - Present" (merged Deutsche Bahn work into OG) | Deutsche Bahn was a SEPARATE employer in Frankfurt | High |
| About text | "over 3 years of professional experience" | Now over 4 years (2022–2026) | Medium |
| About — BASF/DeutscheBahn | Listed as "clients" of OG | Deutsche Bahn was direct employer; BASF was a client through OG | Medium |
| Education — school name | "Technical Education Program" | "Srednja Strukovna Škola Antuna Horvata" | Low |
| Education — description | "mechanical and electronic systems integration" | "Mechatronics, Robotics, and Automation Engineering" | Low |
| Education — certs | Missing Rust certs | "Ultimate Rust Crash Course" + "Ultimate Rust 2: Intermediate Concepts" | Low |
| Skills | Missing Kafka, Vue | LinkedIn lists Kafka (AWS Textract pipeline), Vue (frontend) | Low |

---

## Proposed Changes

### 🔴 HIGH PRIORITY

#### 1. Experience section — split into 4 real entries

**File:** `src/components/experience.tsx`

Replace 2 entries with 4. Each entry has: company, role, dates, location, summary, tech tags.

| # | Company | Role | Dates | Location |
|---|---|---|---|---|
| 1 | AXIO | Founder & CEO | March 2026 – Present | Đakovo, Croatia |
| 2 | Deutsche Bahn | Backend Developer | Dec 2023 – Feb 2026 | Frankfurt, Germany |
| 3 | OG Consultancy Services | Full-stack Developer | July 2023 – Feb 2026 | Đakovo, Croatia |
| 4 | OG Consultancy Services | Developer Internship | July 2022 – Aug 2022 | Đakovo, Croatia |

> **Note on overlap:** OG Full-stack (Jul 2023–Feb 2026) overlaps with Deutsche Bahn (Dec 2023–Feb 2026).
> The LinkedIn PDF shows both — OG as a concurrent role. Keep both but note the overlap is
> acceptable for a portfolio (OG was likely contracting to DB during that period).

**Open question for Domagoj:**
- How do you want to handle the overlapping OG/DB period? Show both? Merge into DB as primary?
- AXIO summary — what do you want it to say? The one I wrote last time was generic. What's your actual focus at AXIO?

#### 2. Hero tagline

**File:** `src/components/hero.tsx:43`

> **Open question:** "Founder & CEO @ AXIO" is the LinkedIn headline. For a portfolio aimed at
> potential employers/clients, do you want the CEO title prominent, or would you prefer something
> like "Backend Engineer & Founder" that keeps the engineering identity first?

Options to choose from:
- A) "Founder & CEO @ AXIO — Building scalable backend systems and cloud-native architectures"
- B) "Backend Engineer & Founder — Microservices, Cloud, and Systems Architecture"
- C) Keep current: "Full-Stack Software Engineer specializing in backend architecture"
- D) Your own wording: _____________

### 🟡 MEDIUM PRIORITY

#### 3. About section — update facts

**File:** `src/components/about.tsx`

Changes:
- "over 3 years" → "over 4 years" (factual correction)
- "BASF and DeutscheBahn" → "Deutsche Bahn and BASF" (DB was direct employer, list first)
- Add concrete results: mention AWS Textract + Kafka pipeline (45%→98% accuracy)

**Open question:** Keep or drop the "space technology and exploration" closer? It's personal color, not on LinkedIn.

#### 4. Education section

**File:** `src/components/education.tsx`

Changes:
- Institution: "Technical Education Program" → "Srednja Strukovna Škola Antuna Horvata"
- Description: Update to "Mechatronics, Robotics, and Automation Engineering"
- Add 2 Rust certifications (Ultimate Rust Crash Course, Ultimate Rust 2)

### 🟢 LOW PRIORITY / OPTIONAL

#### 5. Skills — add missing tech

**File:** `src/components/skills.tsx`

- Backend: add "Kafka"
- Frontend: add "Vue"
- DevOps: add "Graylog"

---

## Implementation Approach

**Recommended: One section at a time, user approves each before next.**

1. **Experience** (biggest change, most impact) → review → iterate
2. **Hero tagline** → user picks option A/B/C/D → implement
3. **About text** → review → implement
4. **Education** → implement
5. **Skills** → implement
6. **Commit & push**

Each step: I show the exact before/after, you say yes/no/adjust, then I apply.

---

## Files That Will Change

| File | Lines | Type of change |
|---|---|---|
| `src/components/experience.tsx` | ~70 lines changed | Data array rewrite |
| `src/components/hero.tsx` | 1 line | String change |
| `src/components/about.tsx` | ~10 lines | Text updates |
| `src/components/education.tsx` | ~12 lines added | New entries + text fix |
| `src/components/skills.tsx` | 3 lines | Add tags |

**Total: ~5 files, ~100 lines changed. No structural or component changes — data-only.**

---

## Risks

- **No risk to site functionality** — all changes are static data arrays and text strings
- **No dependencies changed** — no npm install needed
- **Easily revertible** — one `git revert` per step if something looks wrong

---

## Next Step

Domagoj, please answer these to unblock:

1. **Experience overlap:** How to handle OG + Deutsche Bahn overlapping period?
2. **Hero tagline:** A, B, C, or your own wording?
3. **AXIO summary:** What should the AXIO experience card say?
4. **About closer:** Keep or drop the space exploration line?
5. **Approach:** One section at a time with review, or just execute all at once?

Once I have your answers, I'll implement exactly what you want — no surprises.
