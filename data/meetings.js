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
          id: "pc-2026-10-02",
          date: "2026-10-02",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160083",
          location: "AC Hotel Portsmouth Downtown/Waterfront, Portsmouth, NH",
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
          id: "pc-2026-06-16-18",
          date: "2026-06-16",
          date_end: "2026-06-18",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "9:30 a.m.",
              title: "Call to Order and General Session",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              agenda_number: "1",
              title: "Approve the draft minutes of the Participants Committee meetings held on April 30 and May 7, 2026",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "2",
              title: "Adopt and approve all actions recommended by the Technical Committees set forth on the Consent Agenda",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "3",
              title: "Receive remarks from Vamsi Chadalavada, Chief Executive Officer, ISO New England, including summary of ISO Board and Board Committee meetings",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "4",
              title: "Receive a Systems and Market Operations Report (June report reflecting May data)",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "5",
              title: "Receive a report on the ISO's preliminary 2027 and 2028 Operating and Capital Budgets by Kelly Reyngold, Chief Financial Officer, ISO New England",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "6",
              title: "Consider and take action on changes to Section IV.A and Section IV.B of the Tariff to clarify how the ISO's Calendar Year Rates will be administered if not authorized by FERC or otherwise effective by January 1",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "7",
              title: "Consider and take action on changes to the Pay-For-Performance (PFP) treatment of external transactions during Capacity Scarcity Conditions and settlement calculations, and related revisions to Tariff Sections I, III, the Billing Policy, and the Financial Assurance Policy (FAP)",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              agenda_number: "8",
              title: "Consider and take action on changes to cap the PFP Capacity Balancing Ratio at 1.0 and related revisions to Tariff Sections I, III, and the FAP",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              agenda_number: "9",
              title: "Consider and take action on the ISO's proposed downward adjustment to the Performance Payment Rate (PPR) and related revisions to Sections III.13.7 and III.15",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              agenda_number: "10",
              title: "Consider and take action on Day-Ahead Ancillary Services (DAAS) post-implementation market adjustments in response to recommendations by the Internal Market Monitor (IMM)",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pc-2026-06-15",
          date: "2026-06-15",
          iso_ne_url: "",
          location: "",
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
          id: "pc-2026-05-07",
          date: "2026-05-07",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "10:00 AM",
              agenda_number: "1",
              title: "Consider a slate of candidates for election to the ISO Board, as recommended by the Joint Nominating Committee (Executive Session)",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "10:30 AM",
              agenda_number: "2",
              title: "Approve the draft minutes of the April 9, 2026 Participants Committee meeting",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "3",
              title: "Adopt and approve the actions recommended by the Technical Committees set forth on the Consent Agenda",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "4",
              title: "ISO Board and Board Committee meeting summaries (none; no meetings since April 9 Participants Committee meeting)",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "5",
              title: "Systems and Market Operations Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "6",
              title: "Report on current contested matters before the FERC and the Federal Courts",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "7",
              title: "Reports from Committees, Subcommittees and other working groups: Markets Committee, Reliability Committee, Transmission Committee, Budget & Finance Subcommittee, Membership Subcommittee",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "8",
              title: "Administrative matters",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              agenda_number: "9",
              title: "Transact such other business as may properly come before the meeting",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pc-2026-04-30",
          date: "2026-04-30",
          iso_ne_url: "",
          location: "",
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
          id: "pc-2026-09-03",
          date: "2026-09-03",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160082",
          location: "TBD",
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
          id: "pc-2026-08-06",
          date: "2026-08-06",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160081",
          location: "Virtual WebEx Meeting",
          agenda_items: [
            {
              order: 1,
              time: "10:00 AM",
              agenda_number: "1",
              title: "Approve the draft minutes of the June 16-18, 2026 Participants Committee Summer Meeting",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              agenda_number: "2",
              title: "Adopt and approve the actions recommended by the Technical Committees set forth on the Consent Agenda",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "2A",
              title: "Consider, and take action, as appropriate, on revisions to Section IV.A of the Tariff (Self-Funding Tariff) to reflect implementation of the Asset Condition Reviewer process",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "3",
              title: "Receive summaries of the ISO Board or Board Committee meetings held since the last summaries were circulated",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "4",
              title: "Receive a Systems and Market Operations Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "5",
              title: "Receive a report on current contested matters before the FERC and the Federal Courts",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "6",
              title: "Receive reports from Committees, Subcommittees and other working groups: Markets Committee, Reliability Committee, Transmission Committee, Budget & Finance Subcommittee, Membership Subcommittee",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "7",
              title: "Administrative matters",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              agenda_number: "8",
              title: "Transact such other business as may properly come before the meeting",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pc-2026-04-09",
          date: "2026-04-09",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160080",
          location: "The Equinox, Manchester Village, VT",
          agenda_items: [
            {
              order: 1,
              agenda_number: "1",
              title: "Approve the draft minutes of the March 5, 2026 Participants Committee meeting",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              agenda_number: "2",
              title: "Adopt and approve the action recommended by the Reliability Committee set forth on the Consent Agenda",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "3",
              title: "ISO Chief Executive Officer Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "4",
              title: "Systems and Market Operations Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "5",
              title: "ISO update on the 2026 Annual Work Plan",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "6",
              title: "ISO Information Technology (IT) and Cybersecurity Report from Rudy Pawul, ISO Vice President of Information and Cybersecurity Services",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "7",
              title: "Consider, and take action, as appropriate, on changes to the NEPOOL Generation Information System (GIS) to allow a NEPOOL GIS login to be linked and have access to multiple GIS Accounts",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "8",
              title: "Report on current contested matters before the FERC and the Federal Courts",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              agenda_number: "9",
              title: "Reports from Committees, Subcommittees and other working groups",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              agenda_number: "10",
              title: "Administrative matters",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              agenda_number: "11",
              title: "Transact such other business as may properly come before the meeting",
              type: "procedural",
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
          id: "mc-2026-10-06",
          date: "2026-10-06",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160105",
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
          id: "mc-2026-07-07-09",
          date: "2026-07-07",
          date_end: "2026-07-09",
          iso_ne_url: "",
          location: "",
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
          id: "mc-2026-06-09-11",
          date: "2026-06-09",
          date_end: "2026-06-11",
          iso_ne_url: "",
          location: "",
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
          id: "mc-2026-05-21",
          date: "2026-05-21",
          iso_ne_url: "",
          location: "",
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
          id: "mc-2026-05-12-14",
          date: "2026-05-12",
          date_end: "2026-05-14",
          iso_ne_url: "",
          location: "",
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
          id: "mc-2026-04-21",
          date: "2026-04-21",
          iso_ne_url: "",
          location: "",
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
          id: "mc-2026-09-08-10",
          date: "2026-09-08",
          date_end: "2026-09-10",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=163989",
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
          id: "mc-2026-08-11-13",
          date: "2026-08-11",
          date_end: "2026-08-13",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160101",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:35",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:35 - 9:40",
              agenda_number: "1.A",
              title: "Approval of Minutes (66.67% Vote) - Minutes of the (i) July 7-9, 2026 Markets Committee meeting, (ii) July 7-9, 2026 Joint meeting of the Markets and Reliability Committees, (iii) July 23, 2026 Joint meeting of the Reliability and Markets Committee",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:40 - 9:50",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Stakeholder Process Memo",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "9:50 - 11:00",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Transition Mechanism, cont.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "11:00 - 11:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Gas Only Resource Firm Contract Requirements Update",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "11:30 - 12:15",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Follow-Up Medley",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "1:00 - 3:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Offer Formation and Mitigation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "3:30 - 5:00",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Resource Accreditation Modeling, cont.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "9:30 - 10:45",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA FirstLight Power Presentations",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "10:45 - 12:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Impact Analysis: Market Clearing Results Follow Up",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "1:15 - 3:15",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA NESCOE Presentation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              time: "3:15 - 4:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Calpine Conceptual Amendment",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 13,
              time: "4:30 - 5:00",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Advanced Energy United CAR-SA Feedback",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 14,
              time: "9:30 - 12:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Tariff Review",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 15,
              time: "1:00 - 3:50",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Tariff Review, cont.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 16,
              time: "3:50 - 3:55",
              agenda_number: "3.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 17,
              time: "3:55 - 4:00",
              agenda_number: "4.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "mc-2026-07-21",
          date: "2026-07-21",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=163991",
          location: "Virtual",
          agenda_items: [
            {
              order: 1,
              time: "9:00 - 9:05",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 - 9:45",
              agenda_number: "2.0",
              title: "Winter Quarterly Markets Report",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:45 - 10:30",
              agenda_number: "3.0",
              title: "Capacity Auction Reforms - Seasonal / Accreditation (CAR-SA) Tariff Redlines - Initial redline review regarding auditing in Section III.1.5-7 and qualification in Section III.15.2",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "10:30 - 12:30",
              agenda_number: "3.0",
              title: "Quarterly Follow-Up Medley - Additional follow-up details from questions raised at prior meetings",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "12:30 - 12:35",
              agenda_number: "4.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "12:35 - 12:45",
              agenda_number: "5.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "mc-2026-04-14-16",
          date: "2026-04-14",
          date_end: "2026-04-16",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160092",
          location: "Renaissance Hotel & Conference Center, 1657 Worcester Rd, Framingham, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:35",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:35 - 9:40",
              agenda_number: "1.A",
              title: "Approval of Minutes of the (i) March 10-12, 2026 Markets Committee meeting, (ii) March 10-12, 2026 Joint meeting of the Markets and Reliability Committees, and (iii) March 17, 2026 Joint meeting of the Reliability and Markets Committees (66.67% Vote)",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:40 - 12:00",
              agenda_number: "2.0",
              title: "Day-Ahead Ancillary Services Post-Implementation Adjustments – Proposed changes to the Day-Ahead Ancillary Services market in response to IMM recommendations (Future Vote, 1st MC Mtg, WMPP ID: 192)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "12:00 - 12:20",
              agenda_number: "3.0",
              title: "GIS Working Group – Request for referral related to VT RES allowing for a portion of facility output to be qualified for a specific Tier of the RES; Request for a vote on the CES-E updates (2nd MC Meeting, 66.67% Vote)",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "1:00 - 1:45",
              agenda_number: "4.0",
              title: "Pay-for-Performance Revisions: Performance Payment Rate – Discussion of the proposed downward adjustment to the Performance Payment Rate including a review of initial redlines (Future Vote, WMPP ID: 191, 2nd MC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "1:45 - 2:15",
              agenda_number: "5.0",
              title: "Pay-for-Performance Revisions: Balancing Ratio (FERC Order on the NEPGA Complaint EL25-106) – Discussion of the proposed revisions to cap the PFP Balancing Ratio at 1.0 to comply with the Order including a review of initial redlines (Future Vote, WMPP ID: 189, 2nd MC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "2:15 - 3:30",
              agenda_number: "6.0",
              title: "Pay-for-Performance Revisions: Treatment of External Transactions – Discussion of revisions to PFP treatment of external transactions during capacity scarcity conditions and settlement calculations including a review of initial redlines (Future Vote, WMPP ID: 190, 2nd MC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "3:30 - 5:00",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Imports Modeling and Accreditation – Continued discussion on how imports are proposed to be modeled and accredited under the CAR-SA design (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 2nd MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "9:30 - 11:00",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Non-Firm Gas Capacity Demand Curve – Additional details on auction participation for gas-only resources, including the timing of gas contract submissions (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 4th MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "11:00 - 12:30",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Gas-Only Resource Contract Requirements – Introduction to current thinking and considerations for firm gas contract requirements (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 1st MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "1:15 - 1:45",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Gas-Only Resource Contract Requirements, Continued (Joint Meeting of the Markets and Reliability Committees, 1st MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              time: "1:45 - 5:00",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Impact Analysis: Resource Accreditation Modeling – Presentation and discussion of the initial results future cases 1, 2, and 3, gas constraint for the near-term base case, additional analysis and sensitivities (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 4th MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 13,
              time: "9:30 - 10:15",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Impact Analysis: Market Clearing Assumptions and Methodology – Presentation discussing how ISO has interpreted the Market Clearing Impact Analysis stakeholder input form and final assumptions and methodology (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 3rd MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 14,
              time: "10:15 - 12:15",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Resource Qualification Process – Introduction to the resource qualification process, including resource creation, modifications, MRIC calculation, and eligibility for seasonal and monthly auctions (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 1st MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 15,
              time: "12:45 - 2:45",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Seasonal Offer Construction and Mitigation – Discussion on methodology for developing seasonal competitive offers with accredited values, clarification on the day-ahead must-offer requirement, and introduction to mitigation (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 2nd MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 16,
              time: "2:45 - 3:45",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): Capacity Market Cost Allocation – Continued discussion of the framework for allocating costs under the CAR-SA design (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 2nd MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 17,
              time: "3:45 - 4:45",
              agenda_number: "7.0",
              title: "Capacity Auction Reforms – Seasonal/Accreditation (CAR-SA): CAR-SA Follow-Up Medley – A compilation of follow-ups on questions raised at prior meetings, including additional detail on Hybrid and IPRs (Joint Meeting of the Markets and Reliability Committees, Future Vote, WMPP ID: 185, 1st MC/RC Mtg)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 18,
              time: "4:45 - 4:55",
              agenda_number: "8.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 19,
              time: "4:55 - 5:00",
              agenda_number: "9.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
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
          id: "rc-2026-10-20",
          date: "2026-10-20",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160119",
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
          id: "rc-2026-07-07-09",
          date: "2026-07-07",
          date_end: "2026-07-09",
          iso_ne_url: "",
          location: "",
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
          id: "rc-2026-08-11-13",
          date: "2026-08-11",
          date_end: "2026-08-13",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:35",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:35 - 9:40",
              agenda_number: "1.A",
              title: "Approval of Minutes (66.67% Vote) - Minutes of the (i) July 7-9, 2026 Markets Committee meeting, (ii) July 7-9, 2026 Joint meeting of the Markets and Reliability Committees, (iii) July 23, 2026 Joint meeting of the Reliability and Markets Committee",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:40 - 9:50",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Stakeholder Process Memo",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "9:50 - 11:00",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Transition Mechanism, continued discussion on a glidepath into the CAR-SA design",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "11:00 - 11:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Gas Only Resource Firm Contract Requirements Update",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "11:30 - 12:15",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Follow-Up Medley, continued discussion on various design elements and stakeholder questions, including resource qualification and imports",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "1:00 - 3:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Offer Formation and Mitigation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "3:30 - 5:00",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Resource Accreditation Modeling, continued",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "9:30 - 10:45",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: FirstLight Power Presentations - Pay-for-Performance Balancing Ratio Under CAR-SA and Conceptual Amendment on Risk Split: Demand Curve and Accreditation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "10:45 - 12:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Impact Analysis - Market Clearing Results Follow Up",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "1:15 - 3:15",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: NESCOE Presentation on conceptual amendments covering MRI-based Net CONE assumptions, Transition Capacity Market Price Cap, and Transition Gas Demand Curve",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              time: "3:15 - 4:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Calpine Conceptual Amendment on the calculation of ambient air offer quantities",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 13,
              time: "4:30 - 5:00",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Advanced Energy United CAR-SA Feedback, continued discussion of AEU's concerns and amendment concepts",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 14,
              time: "9:30 - 12:30",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Tariff Review - Initial redline review regarding Resource Adequacy Assessment, Accreditation, Gas Constraint Design, and ancillary items",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 15,
              time: "1:00 - 3:50",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA: Tariff Review, continued",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 16,
              time: "3:50 - 3:55",
              agenda_number: "3.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 17,
              time: "3:55 - 4:00",
              agenda_number: "4.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "rc-2026-06-24",
          date: "2026-06-24",
          iso_ne_url: "",
          location: "",
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
          id: "rc-2026-09-16",
          date: "2026-09-16",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160118",
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
          id: "rc-2026-06-25",
          date: "2026-06-25",
          iso_ne_url: "",
          location: "",
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
          id: "rc-2026-06-09-11",
          date: "2026-06-09",
          date_end: "2026-06-11",
          iso_ne_url: "",
          location: "",
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
          id: "rc-2026-05-21",
          date: "2026-05-21",
          iso_ne_url: "",
          location: "",
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
          id: "rc-2026-05-12-14",
          date: "2026-05-12",
          date_end: "2026-05-14",
          iso_ne_url: "",
          location: "",
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
          id: "rc-2026-08-18-19",
          date: "2026-08-18",
          date_end: "2026-08-19",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160122",
          location: "Beauport Hotel, Gloucester, MA",
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
          id: "rc-2026-07-23",
          date: "2026-07-23",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160117",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:45",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              agenda_number: "1.1",
              title: "Meeting Minutes (66.67% Vote) - June 9-11, 2026 Joint MC/RC Meeting; June 24, 2026 Joint MC/RC/TC Meeting; June 25, 2026 RC Meeting",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:45 - 9:50",
              agenda_number: "2.0",
              title: "Reliability Committee Consent Agenda (Notification) - Review and concurrence of Generator and Transmission Applications that require Level 0 or I treatment",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "2.1",
              title: "Discussion of Any Projects Pulled from the Consent Agenda",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "9:50 - 11:45",
              agenda_number: "3.0",
              title: "Capacity Auction Reforms - Seasonal/Accreditation (22nd MC/RC Mtg) (Future Vote) - Accreditation Process Flows & DCap Follow-ups and Post-RAA Accreditation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "12:30 - 1:15",
              agenda_number: "4.0",
              title: "Transmission Cost Allocations (TCAs)",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "4.1",
              title: "Eversource Energy South Naugatuck to Devon Rebuild Project TCAs (2nd RC Mtg) (66.67% Vote) - Suite of five TCAs: ES-23-TCA-03, ES-23-TCA-44, ES-24-TCA-08, ES-25-TCA-05, ES-26-TCA-03",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "4.2",
              title: "Eversource Energy Hurd State Park Area Project TCAs (2nd RC Mtg) (66.67% Vote) - Suite of four TCAs: ES-22-TCA-28, ES-24-TCA-18, ES-26-TCA-06, ES-26-TCA-09",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              agenda_number: "4.3",
              title: "Central Maine Power Section 226 Structure Replacements TCA (1st RC Mtg) (66.67% Vote) - CMP-26-TCA-07",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              agenda_number: "4.4",
              title: "New England Power Belmont Substation Asset Condition Replacements TCA (1st RC Mtg) (66.67% Vote) - NEP-26-TCA-02",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "1:15 - 2:00",
              agenda_number: "5.0",
              title: "Operating Procedures (OPs)",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              agenda_number: "5.1",
              title: "Order No. 2222 Conforming Changes (1st RC Mtg) (Future Vote) - Discussion on conforming changes to OP-8, OP-14, and OP-23",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 13,
              agenda_number: "5.2",
              title: "OP-14 Appendix B - Data Explanation of Terms and Instructions for Data Preparation for ISO Form NX-12D (1st RC Mtg) (Future Vote) - Discussion on revisions to update figure labels and clarify language",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 14,
              agenda_number: "5.3",
              title: "Order No. 881 Conforming Changes (1st RC Mtg) (Future Vote) - Discussion on conforming changes to OP-18 and OP-19",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 15,
              time: "2:00 - 3:25",
              agenda_number: "6.0",
              title: "Planning Procedures (PPs)",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 16,
              agenda_number: "6.1",
              title: "Planning Procedure 9 - Major Substation Bus Arrangement Requirements and Guidelines (2nd RC Mtg) (66.67% Vote) - Discussion and vote on SATOA conforming changes",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 17,
              agenda_number: "6.2",
              title: "Planning Procedures 5-1 and 5-3 (2nd RC Mtg) (Future Vote) - Discussion on proposed revisions to enhance the PPA process",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 18,
              agenda_number: "6.3",
              title: "Planning Procedure 5-6 - Interconnection Planning Procedure for Generation and Elective Transmission Upgrades (1st RC Mtg) (Future Vote) - Discussion on Order No. 881 conforming changes and revisions to support the first full Cluster Study",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 19,
              time: "3:25 - 3:30",
              agenda_number: "7.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 20,
              time: "3:30",
              agenda_number: "8.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "rc-2026-07-16",
          date: "2026-07-16",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=161677",
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
          id: "tc-2026-10-14",
          date: "2026-10-14",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160132",
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
          id: "tc-2026-08-11-13",
          date: "2026-08-11",
          date_end: "2026-08-13",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:35",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:35 - 9:40",
              agenda_number: "1.A",
              title: "Approval of Minutes (66.67% Vote) - Minutes of the (i) July 7-9, 2026 Markets Committee meeting, (ii) July 7-9, 2026 Joint meeting of the Markets and Reliability Committees, (iii) July 23, 2026 Joint meeting of the Reliability and Markets Committee",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:40 - 9:50",
              agenda_number: "2.0",
              title: "Joint Meeting of the Markets, Reliability, and Transmission Committees - CAR-SA Stakeholder Process Memo",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "9:50 - 11:00",
              agenda_number: "2.0",
              title: "CAR-SA Transition Mechanism, cont. - Continued discussion on a glidepath into the CAR-SA design",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "11:00 - 11:30",
              agenda_number: "2.0",
              title: "CAR-SA Gas Only Resource Firm Contract Requirements Update - Continued discussion on the requirements for firm gas in relation to the non-firm gas constraint",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "11:30 - 12:15",
              agenda_number: "2.0",
              title: "CAR-SA Follow-Up Medley - Continued discussion on various design elements and stakeholder questions, including resource qualification and imports",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "1:00 - 3:30",
              agenda_number: "2.0",
              title: "CAR-SA Offer Formation and Mitigation - Continued discussion on initial Capacity Offer Price Threshold (COPT), considerations for price formation with a capped BR, and stakeholder follow-ups including updated IPR day-ahead must offer requirements",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "3:30 - 5:00",
              agenda_number: "2.0",
              title: "CAR-SA Resource Accreditation Modeling, cont. - Presentation on base case capacity zone requirements or limits for each zone and the associated demand curves, additional data requested, and updated weather weighting based on FirstLight's methodology",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "9:30 - 10:45",
              agenda_number: "2.0",
              title: "CAR-SA FirstLight Power Presentations - Pay-for-Performance Balancing Ratio Under CAR-SA; Conceptual Amendment on Risk Split: Demand Curve and Accreditation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "10:45 - 12:30",
              agenda_number: "2.0",
              title: "CAR-SA Impact Analysis: Market Clearing Results Follow Up - Market clearing results for the transition mechanism, continued discussion on directional market clearing results with alternative Net ICR assumptions, continued discussion on Seasonal Demand Anchor Points, qualitative analysis of Balancing Ratio Capping, and discussion of an updated price cap",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "1:15 - 3:15",
              agenda_number: "2.0",
              title: "CAR-SA NESCOE Presentation - Conceptual amendments covering: 1) MRI-based Net CONE assumptions, 2) Transition Capacity Market Price Cap, and 3) Transition Gas Demand Curve",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              time: "3:15 - 4:30",
              agenda_number: "2.0",
              title: "CAR-SA Calpine Conceptual Amendment - Conceptual amendment on the calculation of ambient air offer quantities",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 13,
              time: "4:30 - 5:00",
              agenda_number: "2.0",
              title: "CAR-SA Advanced Energy United Feedback - Continued discussion of AEU's concerns and amendment concepts",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 14,
              time: "9:30 - 12:30",
              agenda_number: "2.0",
              title: "CAR-SA Tariff Review - Initial redline review regarding: Resource Adequacy Assessment (RAA), Accreditation, and Gas Constraint Design, and ancillary items; focusing on changes to Section III.12 and select sections of III.15",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 15,
              time: "1:00 - 3:50",
              agenda_number: "2.0",
              title: "CAR-SA Tariff Review, cont.",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 16,
              time: "3:50 - 3:55",
              agenda_number: "3.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 17,
              time: "3:55 - 4:00",
              agenda_number: "4.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "tc-2026-09-15",
          date: "2026-09-15",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160131",
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
          id: "tc-2026-06-24",
          date: "2026-06-24",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:35",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              agenda_number: "1.1",
              title: "Meeting Minutes - May 28, 2026 TC Meeting Minutes",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:35 - 10:30",
              agenda_number: "2.0",
              title: "Capacity Auction Reforms - Seasonal/Accreditation (2nd TC/MC/RC Mtg) (Future Vote) - Initial review of Tariff redlines aligning deactivations in a seasonal framework",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "10:30 - 11:00",
              agenda_number: "3.0",
              title: "PTO AC Notification of Schedule 9 & Schedule 1 Rates (1st TC Mtg) - Introductory update on Schedule 9 Regional Network Service rates effective January 1, 2027, Schedule 1 Service rates effective June 1, 2026, and revised Schedule 9 RNS rate effective January 1, 2026",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "11:00 - 12:25",
              agenda_number: "4.0",
              title: "Asset Condition Reviewer (6th TC Mtg) - Continued review and vote on incremental proposal adjustments and redline changes to the Transmission Operating Agreement (TOA) and Tariff",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "12:45 - 1:25",
              agenda_number: "4.2",
              title: "Maine Office of Public Advocate (ME OPA) Amendment (2nd TC Mtg) - Discussion and vote on ME OPA's proposed amendment to the TOA and Tariff related to the ISO's AC Reviewer proposal",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "12:45 - 1:55",
              agenda_number: "5.0",
              title: "FERC Show Cause Order to ISO-NE & PTOs (1st TC Meeting) - Review of NEPOOL Counsel's summary on FERC's June 18, 2026 show-cause order (Docket No. EL26-72) to the ISO and the Participating Transmission Owners",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "1:55 - 2:00",
              agenda_number: "6.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "2:00",
              agenda_number: "7.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "tc-2026-05-28",
          date: "2026-05-28",
          iso_ne_url: "",
          location: "",
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
          id: "tc-2026-04-21",
          date: "2026-04-21",
          iso_ne_url: "",
          location: "",
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
          id: "tc-2026-08-18-19",
          date: "2026-08-18",
          date_end: "2026-08-19",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160122",
          location: "Beauport Hotel, Gloucester, MA",
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
          id: "tc-2026-07-16",
          date: "2026-07-16",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=161677",
          location: "DoubleTree Hotel, Westborough, MA",
          agenda_items: [
            {
              order: 1,
              time: "9:30 - 9:35",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              agenda_number: "1.1",
              title: "Meeting Minutes (66.67% Vote) - June 24, 2026 TC/MC/RC Meeting Minutes and June 24, 2026 TC Meeting Minutes",
              type: "vote",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:35 - 10:00",
              agenda_number: "2.1",
              title: "PTO AC Notification of Schedule 9 & Schedule 1 Rates",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "10:00 - 10:30",
              agenda_number: "2.2",
              title: "Five-Year Forecast of RNS Rates",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "10:30 - 12:30",
              agenda_number: "3.0",
              title: "Surplus Interconnection Service",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "1:15 - 1:45",
              agenda_number: "4.1",
              title: "Abeyance Request and Section 205 Filing",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "1:45 - 2:55",
              agenda_number: "4.2",
              title: "Informational Report on Resource Adequacy",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "2:55 - 3:00",
              agenda_number: "5.0",
              title: "Other Business",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "3:00",
              agenda_number: "6.0",
              title: "Closing Remarks/Adjourn for the Day",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
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
          id: "pac-2026-09-23",
          date: "2026-09-23",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160143",
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
          id: "pac-2026-06-23",
          date: "2026-06-23",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "9:00 – 9:05",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 – 11:30",
              agenda_number: "2.0",
              title: "Transmission Owner Asset Management",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "2.1",
              title: "W-23 69 kV Line Asset Condition Refurbishment (Rafael Panos, National Grid)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "2.2",
              title: "Canal Station 345 kV Autotransformer Replacements (Paul Melzan, Eversource)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "2.3",
              title: "North Cambridge Substation – Cable System Partial Replacement (Paul Melzan, Eversource)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "2.4",
              title: "Montville Substation – New 115/69 kV Control Enclosure and Cable Separation (George Wegh, Eversource)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "2.5",
              title: "NH Asset Condition Structure Replacements – Lines B172 and C129 (Chris Soderman, Eversource)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "11:30 – 11:45",
              agenda_number: "3.0",
              title: "2026 Economic Study - Stakeholder-Requested Scenario Submission (Kim Quach, ISO New England)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "11:45 – 12:00",
              agenda_number: "4.0",
              title: "RSP Project List and Asset Condition List June 2026 Update (Daniel Schwarting, ISO New England)",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "12:00",
              agenda_number: "5.0",
              title: "Closing Remarks/Adjourn",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pac-2026-05-27",
          date: "2026-05-27",
          iso_ne_url: "",
          location: "",
          agenda_items: [
            {
              order: 1,
              time: "9:00 – 9:05",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 – 10:45",
              agenda_number: "2.0",
              title: "Transmission Owner Asset Management",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "2.1",
              title: "Low-Pressure Fluid Filled Cable Replacement (Joshua Cefaratti, United Illuminating)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "2.2",
              title: "301 Asset Condition Replacement (Rafael Panos, National Grid)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "2.3",
              title: "E-157/E-157E/E-157W Asset Condition Replacement (Rafael Panos, National Grid)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "2.4",
              title: "CMP Section 226 Structure Replacements (Devin Carrier, Central Maine Power Company)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "2.5",
              title: "332 West Farnum to Kent County 345kV Line Rebuild (George Nemeh, Rhode Island Energy)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              time: "10:45 – 11:15",
              agenda_number: "3.0",
              title: "Transmission Planning Study Assumption Updates (Andrew Kniska, ISO New England)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "11:15 – 11:45",
              agenda_number: "4.0",
              title: "2026 Economic Study - Benchmark Scenario Assumptions (Kim Quach, ISO New England)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "11:45 – 12:15",
              agenda_number: "5.0",
              title: "2025 LTTP RFP - Follow-Up to RFP Objective Analysis (Steven Judd, ISO New England)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "12:15",
              agenda_number: "6.0",
              title: "Closing Remarks/Adjourn",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pac-2026-08-26",
          date: "2026-08-26",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160142",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              time: "9:00 – 9:05",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 – 12:10",
              agenda_number: "2.0",
              title: "Transmission Owner Asset Management",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "2.1",
              title: "Vernon Station #13 Rebuild/Huntington #3026 – Cost Update",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "2.2",
              title: "I-135S/J-136S 115 kV Line Asset Condition Refurbishment",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "2.3",
              title: "E-205E and E-205W 230 kV Line Asset Condition Replacement",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "2.4",
              title: "Deerfield #4 Substation Asset Replacements",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "2.5",
              title: "Old Town 115/13.8 kV Substation Rebuild Update",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "2.6",
              title: "Rhode Island Energy Transmission Relay Upgrade Program",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              agenda_number: "2.7",
              title: "Line 114 Extension – Cost Update on RSP #1730",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              agenda_number: "2.8",
              title: "2027 RNS Rate Overview and Forecast",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              time: "12:40 – 1:25",
              agenda_number: "3.0",
              title: "2026 Economic Study - Benchmark Scenario Preliminary Results",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              time: "1:25",
              agenda_number: "4.0",
              title: "Closing Remarks/Adjourn",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pac-2026-07-28",
          date: "2026-07-28",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160141",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              time: "9:00 – 9:05",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 – 9:45",
              agenda_number: "2.0",
              title: "2036 New England Short Circuit Needs Assessment",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              time: "9:45 – 11:40",
              agenda_number: "3.0",
              title: "Transmission Owner Asset Management",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              agenda_number: "3.1",
              title: "O-15N 69 kV Line Asset Condition Replacement",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              agenda_number: "3.2",
              title: "394/397 345 kV Lines Asset Condition Replacement",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              agenda_number: "3.3",
              title: "Highland Substation Rebuild & Synchronous Condenser Addition Cost Update",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              agenda_number: "3.4",
              title: "345 kV Breaker Replacements: Fitzwilliam (NH), Scovill Rock (CT), Ludlow (MA)",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 8,
              agenda_number: "3.5",
              title: "Line 191 Optical Ground Wire (OPGW) Replacement Project",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 9,
              time: "11:40 – 12:00",
              agenda_number: "4.0",
              title: "Asset Condition Reviewer Update",
              type: "informational",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 10,
              time: "12:30 – 1:30",
              agenda_number: "5.0",
              title: "Interim Asset Condition Reviewer",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 11,
              agenda_number: "5.1",
              title: "Interim Asset Condition Reviewer – Eversource 1670/1771 Replacement Project",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 12,
              agenda_number: "5.2",
              title: "Interim Asset Condition Reviewer – Eversource 325/331/344 Rebuild Project",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 13,
              time: "1:30 – 1:45",
              agenda_number: "6.0",
              title: "TO LSP Public Policy Memos",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 14,
              time: "1:45 – 4:45",
              agenda_number: "7.0",
              title: "2025 LTTP RFP – Preliminary Preferred Solution",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 15,
              time: "4:45",
              agenda_number: "8.0",
              title: "Closing Remarks/Adjourn",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            }
          ]
        },
        {
          id: "pac-2026-04-28",
          date: "2026-04-28",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160138",
          location: "WebEx",
          agenda_items: [
            {
              order: 1,
              time: "9:00 – 9:05",
              agenda_number: "1.0",
              title: "Chair's Opening Remarks",
              type: "procedural",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 2,
              time: "9:05 – 9:35",
              agenda_number: "2.0",
              title: "Transmission Owner Asset Management",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 3,
              agenda_number: "2.1",
              title: "Line 1785, OPGW Installation",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 4,
              time: "9:35 – 9:45",
              agenda_number: "3.0",
              title: "2026 Public Policy Transmission Upgrade Process",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 5,
              time: "9:45 – 10:30",
              agenda_number: "4.0",
              title: "Final Draft 2026 Energy and Seasonal Peak Forecasts",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 6,
              time: "10:30 – 12:00",
              agenda_number: "5.0",
              title: "2024 Economic Studies Lessons Learned",
              type: "presentation",
              materials: [],
              summary: "",
              maine_relevance: "",
              topic_tags: []
            },
            {
              order: 7,
              time: "12:00",
              agenda_number: "6.0",
              title: "Closing Remarks/Adjourn",
              type: "procedural",
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
          id: "lfwg-2026-09-25",
          date: "2026-09-25",
          iso_ne_url: "https://www.iso-ne.com/event-details?eventId=160220",
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
