# SiteProof — Master Product Specification

## Primary user journey
1. Contractor signs up and creates a project.
2. Contractor enters homeowner, property, location, budget, and timeline details.
3. System creates a secure invitation for the homeowner.
4. Homeowner accepts the invitation and sees only their authorized project.
5. Contractor submits daily work updates with photos and notes.
6. Contractor records material deliveries, usage, supplier bills, and expenses.
7. Homeowner reviews progress, timeline, expenses, materials, and issues.
8. AI assistant answers questions using authorized project records and linked evidence.

## Core modules
- Contractor signup/login and project workspace
- Project creation and secure homeowner invitations
- Homeowner dashboard and activity history
- Construction phases, tasks, schedule, and progress reviews
- Daily photo/evidence submissions
- Material inventory, supplier records, and weekly usage reports
- Expenses, receipts, payments, and budget variance
- Defects/issues, responsibility, deadlines, and resolution evidence
- AI project Q&A with record references and uncertainty
- Reports, notifications, audit history, and access management

## Data integrity
- Reported progress is not automatically approved progress.
- AI estimates are separate from contractor reports and human approvals.
- Store money as decimal values, never floating-point calculations.
- Record material movements; derive stock from the movement ledger.
- Preserve financial and approval history with auditable corrections.
- All project data access must enforce project membership and role permissions.
- Invitation tokens must be random, expiring, single-use, and stored securely.
- AI answers must be limited to the requesting user's authorized records.

## Delivery order
1. Foundation and documentation
2. Contractor authentication and project creation
3. Secure homeowner invitation and acceptance
4. Daily progress submissions and review
5. Expenses, materials, schedule, and defects
6. Homeowner dashboard and reports
7. AI Q&A grounded in authorized project records
8. Security review, automated tests, deployment, and documentation

## Definition of done
A feature must have usable UI, validated inputs, persistent data when required,
correct authorization, loading/error/empty states, tests where appropriate,
and documentation. Do not substitute mock data for a claimed working backend.
