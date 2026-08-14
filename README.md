# CirclData CDMX

**Interactive waste-management planning prototype for large-scale events in Mexico City.**

CirclData CDMX is a digital product concept designed to help event organizers estimate waste generation, explore sustainability decisions, and visualize waste-management scenarios before a large-scale event takes place.

The prototype uses **Azteca Stadium in Mexico City during the FIFA World Cup 2026** as its main scenario.

## Live Demo

https://circldatacdmx.vercel.app/

## Product Preview

### Event Setup

![CirclData CDMX — Event Setup](./CirclData%20CDMX.vista%20previa.png)

### Waste Prediction, Sustainability & Optimization

![CirclData CDMX — Waste Prediction and Sustainability](./CirclData%20CDMX.vista%20previa2.png)

## Project Overview

**Project Type:** Digital Product / Interaction Design  
**Context:** Large-scale event waste management  
**Scenario:** Azteca Stadium · Mexico City · FIFA World Cup 2026  
**Primary User:** Event organizer / sustainability manager

## The Problem

Large-scale event organizers need to anticipate how much waste an event may generate and make decisions about collection, separation, infrastructure, and sustainability before the event begins.

Variables such as attendance, event duration, food vendors, waste categories, and container placement can be difficult to interpret when they are presented only as raw numbers or static reports.

CirclData explores how these variables could be transformed into an interactive decision-support experience.

## Product Hypothesis

> If event organizers can visualize how attendance, event duration, and food-selling points affect predicted waste generation, they can make better-informed waste-management decisions before the event.

## Proposed Solution

CirclData CDMX is an interactive dashboard prototype that allows users to configure an event scenario and visualize how operational decisions may affect estimated waste generation and sustainability planning.

### Main Interaction Flow

**1. Event Setup**

Users configure:

* Attendance
* Food vendors
* Event duration

**2. Waste Prediction**

The dashboard displays estimated:

* Organic waste
* Recyclable waste
* Non-recyclable waste
* Total estimated waste

**3. Sustainability Score**

Users can explore how operational decisions, such as reducing single-use plastics, may influence the sustainability score.

**4. AI-assisted Waste Optimization**

The prototype explores how an AI-assisted system could support the placement and distribution of waste-collection points around a large event venue.

**5. Reports & Data Export**

The interface simulates the generation of environmental reports and structured datasets for further analysis.

## Prototype Scope

CirclData CDMX is a **conceptual MVP** created to explore interaction design, data visualization, scenario simulation, and decision-support concepts.

The AI-assisted optimization is presented as a **conceptual product feature** rather than a production machine-learning system.

> The AI-assisted optimization was explored as a product concept rather than implemented as a production AI system.

The waste predictions and recommendations shown in the interface are part of the prototype experience and should not be interpreted as validated environmental forecasts.

## Product Discovery

The project applies product-discovery principles inspired by the **Digital Product School methodology**, including:

* Initial assumptions
* Risk identification
* DPS Bomb Board
* Experiment design
* Predefined success and failure criteria
* Evidence-based iteration

User validation is planned as a next step.

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Recharts
* Lucide React

## Running Locally

Clone the repository:

```bash
git clone https://github.com/digitalproductmx/circldatacdmx.git
```

Enter the project directory:

```bash
cd circldatacdmx
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Performance

The main stadium visual assets were optimized from large PNG files to WebP to improve loading performance, particularly on mobile devices.

## Current Status

* English interface
* Responsive desktop and mobile layout
* Interactive event parameters
* Dynamic waste prediction visualization
* Sustainability score
* AI-assisted optimization concept
* Report and dataset export simulation
* Optimized WebP assets
* GitHub repository
* Vercel deployment

## Next Steps

* Conduct user-testing experiments
* Validate core assumptions using the DPS Bomb Board
* Review accessibility and interaction details
* Explore integration with real environmental datasets
* Refine waste-prediction logic
* Develop the complete case study

## Original Design Source

The first prototype was created with Figma Make and later refined locally.

Original Figma project:

https://circldatacdmx.figma.site/
