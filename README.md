# SiteProof — Construction Project Intelligence Platform

## 1. Product Overview

SiteProof is a contractor-led construction transparency platform for homeowners in India. Contractors manage construction updates and records; homeowners independently track progress, expenses, materials, timelines, and issues from their phones.

**Core promise:** A homeowner should be able to understand what is happening at their construction site without needing to visit every day or repeatedly ask the contractor for updates.

## 2. Primary Workflow

1. Contractor signs up and creates a construction project.
2. Contractor enters project details, homeowner details, budget, location, and expected timeline.
3. Contractor generates a secure invitation link for the homeowner.
4. Homeowner accepts the invitation and accesses their project.
5. Contractor submits daily work updates with photos and notes.
6. Contractor records material purchases, suppliers, quantities, usage, bills, and expenses.
7. Homeowner views progress, payments, material records, delays, and open issues.
8. AI assistant answers homeowner questions using authorized project records and available evidence.

## 3. Core Features

- Contractor registration and login.
- Project creation and secure homeowner invitations.
- Separate contractor and homeowner experiences.
- Daily progress updates with photo evidence.
- Construction phases, tasks, milestones, and delays.
- Weekly material purchase and consumption reports.
- Expense, payment, receipt, and budget tracking.
- Defect/issue reporting and resolution tracking.
- AI-assisted progress analysis and project Q&A.
- Notifications, reports, and an auditable activity history.

## 4. Village-Friendly Design

- Mobile-first, responsive interface.
- Simple language, understandable labels, and clear explanations.
- Design prepared for Hindi and Marathi localization.
- Readable typography, large touch targets, and clear status indicators.
- Optimize images and minimize unnecessary network requests.
- Show currency in INR and use familiar construction units.
- Make the product usable by people with limited technical knowledge.
- Clearly distinguish missing information from zero values.

## 5. AI Trust Rules

- Contractor-reported progress, AI-estimated progress, and human-approved progress must remain separate.
- AI responses must use only records the current user is authorized to access.
- Where possible, answers must reference the relevant update, photo, expense, or material record.
- Clearly state uncertainty and missing evidence.
- Photos alone cannot guarantee exact construction completion or structural safety.
- Never invent construction measurements, prices, records, or verification results.
- Professional engineering assessments must not be replaced by unsupported AI claims.

## 6. Engineering Standards

- Next.js App Router and TypeScript.
- Tailwind CSS and reusable accessible components.
- PostgreSQL and Prisma for persistent data.
- Zod or equivalent schema validation.
- Secure authentication and server-side role-based authorization.
- Modular monolith architecture; avoid unnecessary complexity.
- Protect all project data through server-side membership checks.
- Use transactions for financial records and material movements.
- Keep secrets out of source code and version control.
- Test critical workflows, calculations, permissions, and failure cases.
- Never represent mock data as real production data.

## 7. Development Roadmap

1. Repository foundation and project documentation.
2. Contractor registration, login, and project creation.
3. Secure homeowner invitation and acceptance.
4. Daily updates, photo evidence, and progress review.
5. Schedule, expenses, payments, and material tracking.
6. Issues, notifications, homeowner dashboard, and reports.
7. AI assistant grounded in authorized project records.
8. Security review, automated tests, deployment, and documentation.

## 8. Definition of Done

A feature is complete only when its interface, validation, persistence where required, authorization, loading/error/empty states, and relevant tests are implemented. Run available lint, type checks, tests, and production builds before reporting completion. State clearly what was tested and what remains unfinished.

## 9. Project Documentation

- `AGENTS.md` — repository-wide instructions for AI coding agents.
- `PROJECT_MASTER_SPEC.md` — product requirements and scope.
- `docs/ARCHITECTURE.md` — system architecture and design decisions.
- `docs/IMPLEMENTATION_STATUS.md` — verified implementation progress.

All documentation belongs at the repository root or under the root `docs/` folder, not inside a specific frontend or backend folder.
