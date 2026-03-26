// NEPOOL Meeting Tracker — Data File
// Update this file each week as new meetings and materials are posted.
//
// item.type: "presentation" | "vote" | "informational" | "procedural"
// item.maine_relevance: "high" | "medium" | "low" | ""
// item.time: use "Tue 9:30 AM" format for multi-day meetings; plain "9:30 AM" for single-day
// item.agenda_number: matches ISO-NE file naming (e.g. "A02.1.a") for auto-linking scraped docs
// item.project_id: links to data/projects.js
// meeting.webex_url: optional join link
// Times are taken directly from posted agenda documents. PAC agendas note that
// "times are an approximation and subject to change."

window.MEETINGS_DATA = {
  last_updated: "2026-03-26",
  committees: [
    {
      id: "pc",
      name: "Participants Committee",
      abbr: "PC",
      tier: "core",
      description: "Top-level NEPOOL governance body. Votes on market rule changes and ISO-NE budget.",
      meetings: [
        {
          id: "pc-2026-04-09",
          date: "2026-04-09",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160080",
          location: "The Equinox, Manchester Village, VT",
          agenda_items: [
            {
              order: 1,
              title: "Approve March 5, 2026 minutes",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              title: "Consent Agenda — RC recommended actions",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              title: "ISO CEO Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["daas", "pfp"]
            },
            {
              order: 4,
              title: "Systems & Market Operations Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: []
            },
            {
              order: 5,
              title: "New England Winter 2025/26 Review",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["winter-review", "daas", "fuel-security"]
            },
            {
              order: 6,
              title: "Litigation Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["offshore-wind", "car-pd"]
            },
            {
              order: 7,
              title: "Committee Reports",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pc-2026-03-05",
          date: "2026-03-05",
          iso_ne_url: "https://nepool.com/meetings/",
          location: "Sheraton Boston Hotel, 39 Dalton St., Boston, MA",
          agenda_items: [
            {
              order: 1,
              title: "Approve February 5, 2026 minutes",
              type: "vote",
              materials: [
                { "label": "Composite (nepool.com)", "url": "https://nepool.com/wp-content/uploads/2026/02/NPC_2026.03.05_Composite5.pdf" },
                { "label": "Notice of Actions", "url": "https://nepool.com/wp-content/uploads/2026/03/NPC_NOA_20260305.pdf" },
                { "label": "Initial Notice (iso-ne.com)", "url": "https://www.iso-ne.com/static-assets/documents/100032/npc-2026-03-05-initial.pdf" },
                { "label": "Supplemental Notice (iso-ne.com)", "url": "https://www.iso-ne.com/static-assets/documents/100033/npc-2026-03-05-composite4.pdf" }
              ],
              summary: "Approved unanimously (one abstention). February 5 meeting included ISO CEO remarks on DAAS market costs, review of Winter Storm Fern operations, and committee reports.",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              title: "Consent Agenda — RC-recommended OP revisions (OP-5, OP-12, OP-22)",
              type: "vote",
              materials: [],
              summary: "Approved unanimously (one abstention). Three operating procedure changes: OP-5 revisions to align Resource Outage Coordination with the Prompt Auction structure; OP-12 revisions updating the Voltage Schedule Annual Transmittal Form; OP-22 and Appendix C revisions to support ISO PMU/Central Phasor Data Concentrator CIP compliance.",
              maine_relevance: "low",
              topic_tags: ["operating-procedures"]
            },
            {
              order: 3,
              title: "OP-2A Revisions — PMU/PDC Maintenance Equipment List",
              type: "vote",
              materials: [],
              summary: "Approved unanimously (one abstention). Revises Appendix A to OP-2 to document required response times for PMU and PDC infrastructure repair notifications. Both OP-2A and OP-22 take effect April 2026.",
              maine_relevance: "low",
              topic_tags: ["operating-procedures", "cip"]
            },
            {
              order: 4,
              title: "Joint Nominating Committee Update — ISO Board Re-elections",
              type: "informational",
              materials: [],
              summary: "Update on activities of the Joint Nominating Committee. ISO Board members Mark Vannoy and Craig Ivey, both eligible for re-election in 2026, presented to the Committee. The JNC will also identify a new additional candidate to be introduced later in the Spring.",
              maine_relevance: "low",
              topic_tags: ["governance"]
            },
            {
              order: 5,
              title: "ISO CEO Report — Dr. Chadalavada",
              type: "informational",
              materials: [],
              summary: "New CEO Dr. Chadalavada outlined priorities: (1) DAAS market refinements — costs exceeded expectations; ISO targeting improvements for Winter 2026/27; (2) PFP rate review; (3) compliance with NEPGA Complaint Order (import/export charge imbalance); (4) NECEC went commercial January 16, 2026.",
              maine_relevance: "high",
              topic_tags: ["daas", "pfp", "necec", "capacity-market"]
            },
            {
              order: 6,
              title: "Systems & Market Operations Report — February data",
              type: "informational",
              materials: [],
              summary: "January 2026 energy market value hit $2.7 billion — new post-SMD record. Winter Storm Fern (Jan 24–Feb 1): 66 million gallons fuel oil burned; DOE issued first-ever Section 202(c) emergency order. NECEC commercial Jan 16. DAAS cost spike during cold weather to be analyzed further.",
              maine_relevance: "high",
              topic_tags: ["winter-review", "daas", "fuel-security", "necec", "offshore-wind"]
            },
            {
              order: 7,
              title: "Litigation Report",
              type: "informational",
              materials: [],
              summary: "Federal courts issued preliminary injunctions staying BOEM's stop-work orders on NE offshore wind projects — projects continue while litigation is pending. CAR-PD at FERC: NEPOOL filed supplemental comments; FERC action expected.",
              maine_relevance: "high",
              topic_tags: ["offshore-wind", "car-pd"]
            },
            {
              order: 8,
              title: "Committee Reports (MC, RC, TC, B&F, Membership, JNC)",
              type: "informational",
              materials: [],
              summary: "MC: April 14-15 meeting focuses on CAR-SA. RC: April 22 meeting at DoubleTree Westborough. TC: February 24 meeting continues Surplus Interconnection Service discussion and ACP reviewer role.",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        }
      ]
    },
    {
      id: "mc",
      name: "Markets Committee",
      abbr: "MC",
      tier: "core",
      description: "Develops and oversees wholesale electricity market rules for energy, capacity, and ancillary services.",
      meetings: [
        {
          id: "mc-2026-04-14-16",
          date: "2026-04-14",
          date_end: "2026-04-16",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160092",
          location: "Renaissance Hotel & Conference Center, 1657 Worcester Rd, Framingham, MA",
          agenda_items: [
            {
              order: 1,
              title: "Agenda pending — check back closer to the meeting date.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "mc-2026-03-10-12",
          date: "2026-03-10",
          date_end: "2026-03-12",
          iso_ne_url: "",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "Tue 9:35 AM",
              agenda_number: "A01.A.i",
              title: "Approve Feb 10–11 MC Minutes; Feb 10–11 & Feb 12 Joint MC/RC Minutes",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              time: "Tue 9:40 AM",
              agenda_number: "A02",
              title: "GIS Working Group Referral — Maine Class III Renewable Energy Credits",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["renewable-energy", "maine-specific", "gis"]
            },
            {
              order: 3,
              time: "Tue 10:00 AM",
              agenda_number: "A03",
              title: "Pay-For-Performance Revisions: Performance Penalty Rate",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["pfp", "capacity-market"]
            },
            {
              order: 4,
              time: "Tue 10:45 AM",
              agenda_number: "A04",
              project_id: "market-design-grid",
              title: "Pay-For-Performance Revisions: Balancing Ratio (FERC Order on NEPGA Complaint EL25-106)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["pfp", "ferc", "capacity-market"]
            },
            {
              order: 5,
              time: "Tue 11:30 AM",
              agenda_number: "A05",
              title: "Pay-For-Performance Revisions: Treatment of External Transactions & Potential Clean-Up Changes",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["pfp", "capacity-market"]
            },
            {
              order: 6,
              time: "Tue 1:15 PM",
              agenda_number: "A06",
              title: "Dynamic Operating Reserves",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["ancillary-services", "market-design"]
            },
            {
              order: 7,
              time: "Tue 3:00 PM",
              agenda_number: "7.1.a",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): IPR Modeling & Accreditation Follow-Up",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation"]
            },
            {
              order: 8,
              time: "Tue 3:45 PM",
              agenda_number: "7.1.b",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Hybrid Modeling & Accreditation — Continued",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation"]
            },
            {
              order: 9,
              time: "Wed 9:30 AM",
              agenda_number: "7.1.c",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Imports Modeling & Accreditation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "imports"]
            },
            {
              order: 10,
              time: "Wed 11:00 AM",
              agenda_number: "7.1.d",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): EFORd Values Update",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation"]
            },
            {
              order: 11,
              time: "Wed 11:30 AM",
              agenda_number: "7.1.e",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Capacity Market Cost Allocation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "cost-allocation"]
            },
            {
              order: 12,
              time: "Wed 1:00 PM",
              agenda_number: "7.1.f",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Competitive Offer Construction, Self-Supply & Seasonal Definition Impacts",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market"]
            },
            {
              order: 13,
              time: "Thu 9:30 AM",
              agenda_number: "7.1.g",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Impact Analysis — Market Clearing",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "forecast"]
            },
            {
              order: 14,
              time: "Thu 10:45 AM",
              agenda_number: "7.1.h",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Impact Analysis — Resource Accreditation Modeling",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation"]
            }
          ]
        },
        {
          id: "mc-2026-02-10-11",
          date: "2026-02-10",
          date_end: "2026-02-11",
          iso_ne_url: "",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "Tue 9:35 AM",
              agenda_number: "A01.A",
              title: "Approve Jan 13-14 MC Minutes; Jan 13-14, Jan 22, Dec 18 Joint MC/RC Minutes",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              time: "Tue 9:40 AM",
              agenda_number: "A02.1.a",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Intermittent Power Resource Modeling & Accreditation",
              type: "presentation",
              materials: [],
              summary: "Second detailed presentation on how Intermittent Power Resources (IPR) — wind and solar — are proposed to be modeled and accredited under the CAR-SA design. Covers methodology for seasonal capability assessment of weather-dependent resources.",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "offshore-wind", "accreditation"]
            },
            {
              order: 3,
              time: "Tue 1:00 PM",
              agenda_number: "A02.1.b",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Hybrid Resource Modeling & Accreditation",
              type: "presentation",
              materials: [],
              summary: "Introduction to proposed methodology for modeling hybrid resources (e.g., solar+storage) under CAR-SA. Covers how co-located generation and storage assets would be accredited as a combined unit vs. separately.",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation"]
            },
            {
              order: 4,
              time: "Wed 9:30 AM",
              agenda_number: "A02.1.c",
              project_id: "car-sa",
              title: "CAR-SA (Joint MC/RC): Impact Analysis — Resource Accreditation Modeling & Market Clearing",
              type: "presentation",
              materials: [],
              summary: "Follow-up on CAR-SA Impact Analysis: resource accreditation modeling assumptions and survey responses; introduction to market clearing methodology assumptions.",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation", "forecast"]
            },
            {
              order: 5,
              time: "Wed 1:15 PM",
              agenda_number: "A03",
              title: "IMM Recommendations — DAAS Market Improvements",
              type: "presentation",
              materials: [],
              summary: "The Internal Market Monitor (IMM) presented targeted recommendations for improvements to the Day-Ahead Ancillary Services (DAAS) market following Winter Storm Fern, which revealed DAAS costs significantly exceeded expectations. ISO CEO noted intent to have refinements ready for Winter 2026/27.",
              maine_relevance: "high",
              topic_tags: ["daas", "imm"]
            },
            {
              order: 6,
              time: "Wed 3:45 PM",
              agenda_number: "A04",
              title: "IMM Fall 2025 Quarterly Markets Report",
              type: "informational",
              materials: [],
              summary: "Quarterly summary from the Internal Market Monitor covering market performance, competitiveness, and any concerns in New England's wholesale markets through Fall 2025.",
              maine_relevance: "medium",
              topic_tags: ["imm"]
            }
          ]
        }
      ]
    },
    {
      id: "rc",
      name: "Reliability Committee",
      abbr: "RC",
      tier: "core",
      description: "Oversees bulk power system reliability standards, studies, and compliance for New England.",
      meetings: [
        {
          id: "rc-2026-04-22",
          date: "2026-04-22",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160114",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              title: "Agenda pending — check back closer to the meeting date.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "rc-2026-03-17",
          date: "2026-03-17",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160113",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:35 AM",
              agenda_number: "A01.1",
              title: "Approve Feb 10-11 Joint MC/RC Minutes and Feb 12 RC Minutes",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:45 AM",
              agenda_number: "A02",
              title: "Consent Agenda — Level 0/I Generator PPAs (incl. Nextsun Energy Solar, LELWD-26-G01)",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["interconnection", "solar"]
            },
            {
              order: 3,
              time: "9:50 AM",
              agenda_number: "A03",
              title: "Level II/III PPAs — RIE E-183W 115 kV Partial Rebuild & First Street 115 kV Substation (CEII)",
              type: "vote",
              materials: [],
              summary: "Two Rhode Island Energy transmission PPAs: (1) E-183W rebuild from Franklin Square to Wampanoag substation, East Providence (in-service May 2027); (2) First Street 115 kV substation creation in East Providence (in-service June 2028). Both are CEII-restricted items.",
              maine_relevance: "low",
              topic_tags: ["interconnection", "transmission-planning"]
            },
            {
              order: 4,
              time: "10:15 AM",
              agenda_number: "A04.a",
              project_id: "car-sa",
              title: "CAR-SA: Deliverability Modeling — Summary of All Resource Types",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["car-sa", "capacity-market", "accreditation"]
            },
            {
              order: 5,
              time: "1:00 PM",
              agenda_number: "A05",
              title: "Transmission Cost Allocations — Eversource Deerfield, N133, Manchester & Amherst Projects",
              type: "vote",
              materials: [],
              summary: "Four Eversource asset condition TCAs: (1) Deerfield 345/115 kV relay replacements ($7.2M pool-supported); (2) N133 115 kV structure replacements — 19 wood H-frames replaced with weathering steel ($5.5M); (3) Manchester 345 kV circuit breaker replacements — 8 pneumatic CBs replaced ($18.3M); (4) Amherst 345 kV circuit breaker replacements — 4 pneumatic CBs replaced ($10.3M).",
              maine_relevance: "medium",
              topic_tags: ["asset-condition", "tca", "cost-allocation", "eversource"]
            },
            {
              order: 6,
              time: "1:30 PM",
              agenda_number: "A06",
              title: "Regional Energy Shortfall Threshold (REST) Long-Term Assessments & Sensitivity Process",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["reliability", "energy-security", "forecast"]
            },
            {
              order: 7,
              time: "2:15 PM",
              agenda_number: "A07",
              title: "Annual Review of Load Power Factor Audits",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["load-forecasting"]
            },
            {
              order: 8,
              time: "3:00 PM",
              agenda_number: "A08",
              title: "Operating Procedures: OP-16 Appendix K (Short Circuit Data) & OP-23 Appendix G (Reactive Resources)",
              type: "presentation",
              materials: [],
              summary: "Two operating procedure revisions: OP-16 Appendix K updates data requirements and submittal methods for short circuit data; OP-23 Appendix G adds new resources to the reactive capability auditing list.",
              maine_relevance: "low",
              topic_tags: ["operating-procedures"]
            },
            {
              order: 9,
              time: "3:30 PM",
              agenda_number: "A09",
              project_id: "order-2023",
              title: "Planning Procedure 10 — Order No. 2023 Conforming Changes",
              type: "presentation",
              materials: [],
              summary: "Proposed revisions to Planning Procedure 10 (PP-10: Planning Procedure to Support the Forward Capacity Market) to incorporate FERC Order 2023 conforming changes.",
              maine_relevance: "medium",
              topic_tags: ["interconnection", "ferc", "compliance"]
            },
            {
              order: 10,
              time: "4:15 PM",
              agenda_number: "A10",
              title: "NYISO/ISO-NE Coordination Agreement",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["regional-planning"]
            }
          ]
        },
        {
          id: "rc-2026-02-12",
          date: "2026-02-12",
          iso_ne_url: "",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 AM",
              title: "Consent Agenda — OP-5, OP-12, OP-22 Revisions (recommend to PC)",
              type: "vote",
              materials: [],
              summary: "Unanimous RC votes recommending to PC: OP-5 revisions aligning Resource Outage Coordination with Prompt Delivery auction structure; OP-12 updates to the Voltage Schedule Annual Transmittal Form; OP-22/Appendix C revisions supporting ISO PMU/PDC CIP compliance. All three approved by PC on March 5 Consent Agenda.",
              maine_relevance: "low",
              topic_tags: ["operating-procedures", "cip", "car-pd"]
            },
            {
              order: 2,
              time: "10:00 AM",
              agenda_number: "A02",
              title: "VELCO Proposed Plan Application (PPA)",
              type: "vote",
              materials: [],
              summary: "The RC considered and acted on a Proposed Plan Application from Vermont Electric Power Company (VELCO) for a transmission project under the NEPOOL reliability planning process.",
              maine_relevance: "low",
              topic_tags: ["transmission-planning", "velco"]
            },
            {
              order: 3,
              time: "1:30 PM",
              agenda_number: "A03",
              title: "National Grid Transmission Cost Allocation — Asset Condition Refurbishment",
              type: "vote",
              materials: [],
              summary: "The RC considered the TCA for a National Grid asset condition refurbishment project. Asset condition projects are reviewed for regional cost allocation under the NEPOOL Tariff.",
              maine_relevance: "medium",
              topic_tags: ["asset-condition", "tca", "cost-allocation"]
            }
          ]
        }
      ]
    },
    {
      id: "tc",
      name: "Transmission Committee",
      abbr: "TC",
      tier: "core",
      description: "Reviews transmission planning studies, cost allocations, and interconnection queue.",
      meetings: [
        {
          id: "tc-2026-04-16",
          date: "2026-04-16",
          iso_ne_url: "",
          location: "ISO-NE / WebEx",
          agenda_items: [
            {
              order: 1,
              title: "Agenda pending — check back closer to the meeting date.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "tc-2026-03-18",
          date: "2026-03-18",
          iso_ne_url: "",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 AM",
              agenda_number: "A01.1",
              title: "Approve February 24, 2026 TC Meeting Minutes",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:40 AM",
              agenda_number: "A02",
              project_id: "asset-condition",
              title: "Asset Condition Reviewer — Conceptual Framework (continued)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["asset-condition", "acp-reviewer", "cmp", "versant"]
            }
          ]
        },
        {
          id: "tc-2026-02-24",
          date: "2026-02-24",
          iso_ne_url: "",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 AM",
              agenda_number: "A01.1",
              title: "Approve January 21, 2026 TC Meeting Minutes",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:40 AM",
              agenda_number: "A02",
              project_id: "order-2023",
              title: "Surplus Interconnection Service — Stakeholder Feedback & Continued Discussion",
              type: "presentation",
              materials: [],
              summary: "Stakeholder organizations (Renew Northeast, NRDC, AEU, Sigma Power, JERA Americas, Industrial Wind Action) presented feedback on Surplus Interconnection Service. ISO-NE then presented a continued discussion of concepts and review of that feedback.",
              maine_relevance: "medium",
              topic_tags: ["interconnection", "surplus-interconnection"]
            },
            {
              order: 3,
              time: "1:15 PM",
              agenda_number: "A03",
              project_id: "asset-condition",
              title: "Asset Condition Reviewer — Conceptual Framework & Tariff Changes (continued)",
              type: "presentation",
              materials: [],
              summary: "Continued discussion of the framework under which ISO-NE would serve as an independent reviewer of transmission owner asset condition projects. Relevant to how CMP and Versant asset refurbishment projects would be reviewed and cost-allocated.",
              maine_relevance: "high",
              topic_tags: ["asset-condition", "acp-reviewer", "cost-allocation", "cmp", "versant"]
            }
          ]
        }
      ]
    },
    {
      id: "pac",
      name: "Planning Advisory Committee",
      abbr: "PAC",
      tier: "core",
      description: "Reviews ISO-NE's long-range regional system planning and economic studies.",
      meetings: [
        {
          id: "pac-2026-04-28",
          date: "2026-04-28",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160138",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              title: "Agenda pending — check back closer to the meeting date.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pac-2026-03-24",
          date: "2026-03-24",
          iso_ne_url: "",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              time: "9:00 AM",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 AM",
              agenda_number: "A02.1",
              project_id: "asset-condition",
              title: "Versant Power — Chester SVC Valves and Controls Upgrade",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["asset-condition", "versant", "maine-specific"]
            },
            {
              order: 3,
              time: "9:30 AM",
              agenda_number: "A02.2",
              project_id: "asset-condition",
              title: "Eversource — Long Mountain 345 kV Breaker Replacement and Cable Separation & Shielding Project",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["asset-condition", "eversource"]
            },
            {
              order: 4,
              time: "9:55 AM",
              agenda_number: "A02.3",
              project_id: "asset-condition",
              title: "Eversource — Stony Hill 48C 115 kV Substation Relay Upgrades",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["asset-condition", "eversource"]
            },
            {
              order: 5,
              time: "10:30 AM",
              agenda_number: "A03",
              project_id: "asset-condition",
              title: "RSP Project List & Asset Condition List — March 2026 Update",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["asset-condition", "transmission-planning"]
            },
            {
              order: 6,
              time: "10:45 AM",
              agenda_number: "A04",
              project_id: "planning-grid",
              title: "2025 Long-Term Transmission Planning RFP — Initial Review & RFP Objectives Results",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "high",
              topic_tags: ["transmission-planning", "clean-energy", "regional-planning"]
            }
          ]
        },
        {
          id: "pac-2026-02-25",
          date: "2026-02-25",
          iso_ne_url: "",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              time: "9:05 AM",
              agenda_number: "A02.1",
              project_id: "asset-condition",
              title: "Eversource — Lines 325, 331 & 344 Rebuild: West Medway Substation to West Walpole Substation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["asset-condition", "eversource"]
            },
            {
              order: 2,
              time: "9:35 AM",
              agenda_number: "A02.2",
              project_id: "asset-condition",
              title: "VELCO — F206 Upgrade",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "low",
              topic_tags: ["asset-condition", "velco"]
            }
          ]
        },
        {
          id: "pac-2026-01-27",
          date: "2026-01-27",
          iso_ne_url: "",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              time: "9:05 AM",
              agenda_number: "A02.1",
              title: "National Grid — Belmont #98 Asset Replacements",
              type: "presentation",
              materials: [],
              summary: "National Grid (Rafael Panos) presented on asset replacement projects at the Belmont #98 substation. These are Transmission Owner-developed asset management projects reviewed by the PAC under the regional transmission planning process.",
              maine_relevance: "low",
              topic_tags: ["asset-condition", "national-grid"]
            },
            {
              order: 2,
              time: "9:35 AM",
              agenda_number: "A02.2",
              title: "Eversource — Connecticut River Crossing Projects Update",
              type: "presentation",
              materials: [],
              summary: "Eversource (Chris Soderman) provided an update on Connecticut River Crossing transmission projects.",
              maine_relevance: "low",
              topic_tags: ["asset-condition", "eversource"]
            },
            {
              order: 3,
              time: "10:05 AM",
              agenda_number: "A02.3",
              title: "Eversource — NH Asset Condition Structure Replacements (Lines 367, A126, A152, B143, K174, M127)",
              type: "presentation",
              materials: [],
              summary: "Eversource (Chris Soderman) presented on NH transmission structure replacements across six identified lines.",
              maine_relevance: "medium",
              topic_tags: ["asset-condition", "eversource", "cost-allocation"]
            },
            {
              order: 4,
              time: "11:30 AM",
              agenda_number: "A03",
              project_id: "planning-grid",
              title: "2026 Public Policy Transmission Upgrade Process",
              type: "informational",
              materials: [],
              summary: "ISO-NE (Steven Judd) presented on the 2026 PPTU process. Identifies transmission upgrades needed to support state renewable energy mandates, including Maine's offshore wind and clean energy procurement goals.",
              maine_relevance: "high",
              topic_tags: ["public-policy-transmission", "clean-energy", "offshore-wind"]
            },
            {
              order: 5,
              time: "11:45 AM",
              agenda_number: "A04",
              project_id: "planning-grid",
              title: "Initiation of the 2026 Economic Study & Survey",
              type: "informational",
              materials: [],
              summary: "ISO-NE (Richard Kortnitsky) presented initiation of the 2026 Economic Transmission Study. Evaluates potential economic transmission upgrades through reduced congestion and lower production costs.",
              maine_relevance: "medium",
              topic_tags: ["economic-study", "transmission-planning"]
            },
            {
              order: 6,
              time: "1:00 PM",
              agenda_number: "A05.1",
              project_id: "asset-condition",
              title: "Asset Condition Reviewer — Feedback on Draft List of Projects Subject to Interim Review",
              type: "informational",
              materials: [],
              summary: "ISO-NE (Brent Oberlin) presented stakeholder feedback on the draft list of projects subject to interim review under the proposed ISO Asset Condition Reviewer framework. Determines which in-flight ACP projects will be reviewed by ISO before the full framework is finalized.",
              maine_relevance: "high",
              topic_tags: ["asset-condition", "acp-reviewer", "cmp", "versant"]
            },
            {
              order: 7,
              time: "1:35 PM",
              agenda_number: "A05.2",
              project_id: "asset-condition",
              title: "Asset Condition Reviewer — Conceptual Framework & Stakeholder Feedback",
              type: "informational",
              materials: [],
              summary: "ISO-NE (Al McBride and Fatou Dieng) presented the conceptual framework for ISO-NE's new role as an independent ACP reviewer, and solicited feedback. Highly relevant to Maine as CMP and Versant regularly bring projects through this process.",
              maine_relevance: "high",
              topic_tags: ["asset-condition", "acp-reviewer", "cmp", "versant", "cost-allocation"]
            }
          ]
        }
      ]
    },
    {
      id: "lfwg",
      name: "Load Forecasting Working Group",
      abbr: "LFWG",
      tier: "secondary",
      description: "Reviews ISO-NE load forecast methodology and results.",
      meetings: [
        {
          id: "lfwg-2026-03-27",
          date: "2026-03-27",
          iso_ne_url: "",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              agenda_number: "A01",
              title: "Final Draft 2026 Energy and Seasonal Peak Forecasts",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["load-forecasting", "forecast"]
            },
            {
              order: 2,
              agenda_number: "A02",
              title: "Final Draft Large Load Forecast",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "medium",
              topic_tags: ["load-forecasting", "forecast"]
            }
          ]
        }
      ]
    },
    {
      id: "dgwg",
      name: "Distributed Generation Working Group",
      abbr: "DGWG",
      tier: "secondary",
      description: "Addresses policy and interconnection issues related to distributed energy resources.",
      meetings: []
    },
    {
      id: "clg",
      name: "Consumer Liaison Group",
      abbr: "CLG",
      tier: "secondary",
      description: "Forum for consumer advocates and state agencies to engage with ISO-NE on market and reliability issues.",
      meetings: [
        {
          id: "clg-2026-03-25",
          date: "2026-03-25",
          iso_ne_url: "https://www.iso-ne.com/committees/industry-collaborations/consumer-liaison",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: []
        }
      ]
    }
  ]
};
