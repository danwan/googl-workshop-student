/**
 * Google Apps Script - Workshop Calendar Event Creator
 *
 * Creates 15 realistic TechBond calendar events.
 *
 * Two ways to use it:
 *   STUDENT (self-service, Lab 6.0): leave PARTICIPANTS empty. The events are
 *     created on YOUR calendar only. No invites are sent to anyone.
 *   FACILITATOR (bulk seeding): after pasting this script into Apps Script,
 *     list participant emails in PARTICIPANTS in that browser-side copy only.
 *     Never add real addresses to this repository file. Every event is then
 *     created with them as guests, so it lands on their calendars via invites.
 *
 * SETUP:
 * 1. Go to script.google.com
 * 2. Create new project
 * 3. Paste this entire script
 * 4. (Facilitators only) fill PARTICIPANTS in the Apps Script copy; optionally
 *    set WORKSHOP_MONDAY_OVERRIDE
 * 5. Run > createAllEvents
 * 6. Authorize when prompted
 * 7. Check Execution Log for progress
 */

// ============================================================
// CONFIGURATION
// ============================================================

// Monday of "This Week" (the week the workshop takes place).
// Leave as null to use the Monday of the current week automatically.
// To pin a specific week: new Date('2026-01-13T00:00:00')
const WORKSHOP_MONDAY_OVERRIDE = null;

// FACILITATORS: list participant emails here to invite everyone to the events.
// STUDENTS: leave this empty — the events go on your own calendar only.
const PARTICIPANTS = [];

const WORKSHOP_EVENT_TAG_KEY = 'techbond-agent-academy';
const WORKSHOP_EVENT_TAG_VALUE = 'calendar-seed-v1';

const WORKSHOP_MONDAY = WORKSHOP_MONDAY_OVERRIDE || mondayOfCurrentWeek();

function mondayOfCurrentWeek() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  const day = d.getDay(); // 0=Sun .. 6=Sat
  d.setDate(d.getDate() - ((day + 6) % 7));
  return d;
}

// ============================================================
// EVENT DATA - All 15 events from events.md
// ============================================================

const EVENTS = [
  // Event 1: Weekly Sales Team Standup (Recurring - create for This Week Monday)
  {
    title: 'Weekly Sales Team Standup',
    week: 'this',
    dayOfWeek: 1, // Monday
    startTime: '09:00',
    endTime: '09:30',
    location: 'Virtual - Teams Link',
    description: `Weekly sales team standup meeting.

Agenda:
- Pipeline updates from each region
- Key wins and challenges
- Forecast adjustments
- Action items from previous week

Please come prepared with your top 3 opportunities and any blockers.

Dial-in: [Virtual meeting link]`
  },

  // Event 2: 1:1 with Regional Director (Recurring - create for This Week Tuesday)
  {
    title: '1:1 with Regional Director',
    week: 'this',
    dayOfWeek: 2, // Tuesday
    startTime: '14:00',
    endTime: '14:45',
    location: 'Office - Meeting Room 3',
    description: `Weekly 1:1 meeting with Klaus Weber, Regional Director EMEA.

Standing agenda:
- Personal updates and wellbeing check
- Progress on key accounts
- Career development discussion
- Open items and support needed

Please bring your weekly report and any topics for discussion.`
  },

  // Event 3: Q4 Business Review - EMEA
  {
    title: 'Q4 Business Review - EMEA',
    week: 'this',
    dayOfWeek: 4, // Thursday
    startTime: '10:00',
    endTime: '12:00',
    location: 'Conference Room A + Virtual',
    description: `Quarterly Business Review for EMEA Region

Agenda:
1. Q3 Performance Summary (Sandra Mueller)
2. Financial Review (Thomas Schulz)
3. Key Account Updates (Account Managers)
4. Q4 Targets and Strategy (Klaus Weber)
5. New Product Launch: SecureSeal EV (Jennifer Walsh)
6. Open Discussion and Q&A

Pre-read materials attached. Please review before the meeting.

Dial-in available for remote participants.`
  },

  // Event 4: Customer Call: AutoParts Inc - Contract Review
  {
    title: 'Customer Call: AutoParts Inc - Contract Review',
    week: 'this',
    dayOfWeek: 3, // Wednesday
    startTime: '15:00',
    endTime: '16:00',
    location: 'Virtual - Customer\'s Teams',
    description: `Contract discussion with AutoParts Inc.

Participants:
- Michael Torres (AutoParts Inc. - Procurement Manager)
- TechBond Sales Team

Agenda:
- Review bulk order requirements for BondMax 500
- Discuss pricing and volume discounts
- Delivery timeline confirmation
- Technical support requirements

Action items from last call:
- Send updated pricing proposal
- Confirm Detroit warehouse delivery options`
  },

  // Event 5: Product Demo: SecureSeal EV Adhesives
  {
    title: 'Product Demo: SecureSeal EV Adhesives',
    week: 'next',
    dayOfWeek: 4, // Thursday
    startTime: '11:00',
    endTime: '12:00',
    location: 'R&D Lab + Virtual',
    description: `Product demonstration of SecureSeal EV series for potential customer.

Customer: TierOne Motors
Contact: Jennifer Walsh, VP Procurement

Demo agenda:
1. SecureSeal EV product overview (15 min)
2. Live application demonstration (20 min)
3. Technical specifications review (15 min)
4. Q&A and next steps (10 min)

Required:
- Demo samples prepared
- Technical data sheets printed
- Application equipment ready

Please arrive 30 minutes early for setup.`
  },

  // Event 6: Marketing Campaign Review - CleanWave
  {
    title: 'Marketing Campaign Review - CleanWave',
    week: 'this',
    dayOfWeek: 5, // Friday
    startTime: '10:00',
    endTime: '11:00',
    location: 'Marketing Conference Room',
    description: `Monthly review of CleanWave consumer brand marketing performance.

Agenda:
1. Campaign performance metrics (Emma Rodriguez)
2. Social media analytics (Alex Thompson)
3. Sustainability messaging update (Sarah Chen)
4. Q4 campaign planning
5. Budget review

Please bring your monthly reports and any creative proposals for next quarter.`
  },

  // Event 7: Lab Visit: New Formulation Testing
  {
    title: 'Lab Visit: New Formulation Testing',
    week: 'next',
    dayOfWeek: 2, // Tuesday
    startTime: '09:00',
    endTime: '12:00',
    location: 'R&D Laboratory - Building C',
    description: `Lab visit to review new adhesive formulation testing progress.

Focus areas:
- FlexiGrip next-generation formula
- SecureSeal EV performance validation
- Customer-specific application testing

Safety reminder:
- Lab coat and safety glasses required
- Closed-toe shoes mandatory
- Sign in at reception

Contact: Dr. Maria Fischer (Lab Manager)`
  },

  // Event 8: Supplier Negotiation: RawChem Materials
  {
    title: 'Supplier Negotiation: RawChem Materials',
    week: 'this',
    dayOfWeek: 2, // Tuesday
    startTime: '14:45',
    endTime: '16:45',
    location: 'Meeting Room 5',
    description: `Annual contract negotiation with RawChem Supplier GmbH.

TechBond participants:
- Procurement Manager
- Finance Representative

Supplier participants:
- Peter Schmidt (Customer Service Manager)
- RawChem Account Manager

Agenda:
1. 2025 performance review
2. 2026 volume projections
3. Pricing negotiation
4. Quality and delivery terms
5. Contract renewal terms

Preparation:
- Review current contract terms
- Analyze spending data
- Prepare negotiation targets`
  },

  // Event 9: Trade Show Prep: AutoExpo 2025
  {
    title: 'Trade Show Prep: AutoExpo 2025',
    week: 'this',
    dayOfWeek: 3, // Wednesday
    startTime: '11:00',
    endTime: '12:30',
    location: 'Marketing Conference Room',
    description: `Final preparation meeting for AutoExpo 2025 (November 15-18).

Agenda:
1. Booth design final approval
2. Staff schedule review
3. Demo equipment checklist
4. Customer meeting schedule
5. Marketing materials status
6. Logistics and travel confirmation

Key decisions needed:
- Booth graphics sign-off
- Product display selection
- Giveaway quantities

Attachments: Booth layout, staff schedule draft`
  },

  // Event 10: Safety Training: Lab Procedures
  {
    title: 'Safety Training: Lab Procedures',
    week: 'next',
    dayOfWeek: 3, // Wednesday
    startTime: '09:00',
    endTime: '11:00',
    location: 'Training Room B',
    description: `Mandatory safety training for laboratory personnel.

Topics covered:
1. Chemical handling and storage
2. PPE requirements and usage
3. Emergency procedures
4. Spill response protocols
5. Waste disposal guidelines

Requirements:
- Pre-training quiz completion
- Bring employee ID for attendance
- Wear comfortable clothing

Certification: Required for lab access renewal

Trainer: Andreas Müller (EHS Manager)`
  },

  // Event 11: Budget Planning: 2026
  {
    title: 'Budget Planning: 2026',
    week: 'next',
    dayOfWeek: 1, // Monday
    startTime: '13:00',
    endTime: '15:00',
    location: 'Executive Conference Room',
    description: `Annual budget planning session for 2026 fiscal year.

Agenda:
1. 2025 YTD performance review
2. 2026 revenue targets
3. Department budget requests
4. Capital expenditure priorities
5. Headcount planning

Required preparation:
- Submit preliminary budget requests
- Prepare department business cases
- Identify key investments needed

Materials due: 3 days before meeting`
  },

  // Event 12: Innovation Workshop: Next-Gen Adhesives
  {
    title: 'Innovation Workshop: Next-Gen Adhesives',
    week: 'next',
    dayOfWeek: 5, // Friday
    startTime: '09:00',
    endTime: '13:00',
    location: 'Innovation Center',
    description: `Cross-functional innovation workshop exploring next-generation adhesive technologies.

Workshop objectives:
- Identify emerging market needs
- Brainstorm new product concepts
- Evaluate technology roadmap
- Prioritize R&D investments

Format:
- Trend presentations (1 hour)
- Breakout ideation sessions (1.5 hours)
- Concept presentations (1 hour)
- Prioritization exercise (30 min)

Please come prepared with market insights from your customer conversations.

Lunch provided.`
  },

  // Event 13: Customer Complaint Review: MegaAuto
  {
    title: 'Customer Complaint Review: MegaAuto',
    week: 'this',
    dayOfWeek: 4, // Thursday
    startTime: '14:00',
    endTime: '15:00',
    location: 'Quality Conference Room',
    description: `Review of recent quality complaint from MegaAuto Group.

Incident: Viscosity deviation on SecureSeal batch SS-2025-892

Agenda:
1. Incident timeline review
2. Root cause analysis findings
3. Customer impact assessment
4. Corrective actions proposed
5. Customer communication plan
6. Prevention measures

Required attendees:
- Quality Assurance Manager
- Account Manager (MegaAuto)
- Production Representative

Documentation: Incident report QI-2025-0087`
  },

  // Event 14: Distributor Partner Meeting: EuroDistributors
  {
    title: 'Distributor Partner Meeting: EuroDistributors',
    week: 'this',
    dayOfWeek: 5, // Friday
    startTime: '14:00',
    endTime: '15:30',
    location: 'Meeting Room 4 + Virtual',
    description: `Quarterly partnership review with Euro Distributors GmbH.

EuroDistributors participants:
- Hans Becker (Managing Director)
- Regional Sales Managers

TechBond participants:
- Channel Sales Team
- Product Marketing (for new product briefing)

Agenda:
1. Q3 performance review
2. 2026 business planning
3. Pricing discussion
4. New product training (SecureSeal EV)
5. Marketing support programs
6. Next quarter commitments

Pre-read: Q3 sales report, 2026 proposal`
  },

  // Event 15: Sustainability Committee Monthly (Last Thursday of January = Jan 30)
  {
    title: 'Sustainability Committee Monthly',
    week: 'lastThursday', // Special: last Thursday of month
    dayOfWeek: 4,
    startTime: '15:00',
    endTime: '16:00',
    location: 'Virtual',
    description: `Monthly Sustainability Committee meeting.

Standing agenda:
1. KPI dashboard review (Christine Berg)
2. Initiative updates from working groups
3. Regulatory/compliance updates
4. Stakeholder communications
5. New initiatives and proposals
6. Action items and next steps

Current focus areas:
- Carbon neutral certification progress
- Supplier sustainability program
- Sustainable packaging transition
- 2026 target setting

Committee members: Please submit your updates 24 hours in advance.`
  }
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Calculate the event date based on week and day of week
 */
function calculateEventDate(event) {
  if (event.week === 'lastThursday') {
    // Last Thursday of the workshop month (or next month if already past)
    let d = lastThursdayOfMonth(WORKSHOP_MONDAY);
    if (d < WORKSHOP_MONDAY) {
      const nextMonth = new Date(WORKSHOP_MONDAY);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      d = lastThursdayOfMonth(nextMonth);
    }
    return d;
  }

  // Clone the base date
  const eventDate = new Date(WORKSHOP_MONDAY);

  // dayOfWeek: 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri
  const daysToAdd = event.dayOfWeek - 1; // Monday is 0 offset

  if (event.week === 'next') {
    eventDate.setDate(eventDate.getDate() + 7 + daysToAdd);
  } else {
    // 'this' week
    eventDate.setDate(eventDate.getDate() + daysToAdd);
  }

  return eventDate;
}

/**
 * Last Thursday of the month containing the given date
 */
function lastThursdayOfMonth(date) {
  const d = new Date(date.getFullYear(), date.getMonth() + 1, 0); // last day of month
  while (d.getDay() !== 4) {
    d.setDate(d.getDate() - 1);
  }
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Create Date object with specific time
 */
function createDateTime(date, timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const dateTime = new Date(date);
  dateTime.setHours(hours, minutes, 0, 0);
  return dateTime;
}

function testEventStartTime() {
  const testDate = new Date();
  testDate.setDate(testDate.getDate() + 1); // Tomorrow
  testDate.setHours(10, 0, 0, 0);
  return testDate;
}

function createTaggedEvent(calendar, title, startTime, endTime, options) {
  // Create without invites first: tagging must succeed before anyone is
  // notified, because a later deleteEvent() cannot retract invite emails.
  const createOptions = {};
  Object.keys(options || {}).forEach(key => {
    if (key !== 'guests' && key !== 'sendInvites') {
      createOptions[key] = options[key];
    }
  });

  const event = calendar.createEvent(title, startTime, endTime, createOptions);
  try {
    event.setTag(WORKSHOP_EVENT_TAG_KEY, WORKSHOP_EVENT_TAG_VALUE);
  } catch (error) {
    // Catch cleanup separately so the original tagging failure is preserved.
    try {
      event.deleteEvent();
    } catch (cleanupError) {
      Logger.log('    ⚠ Rollback failed — delete "' + title + '" manually: ' + cleanupError.message);
    }
    throw error;
  }

  if (options && options.guests) {
    addGuestsAfterTagging(event, options.guests, Boolean(options.sendInvites));
  }
  return event;
}

/**
 * Add guests only after the workshop tag is in place. Plain addGuest() does
 * not email invitations, so when invites were requested, send them through
 * the Advanced Calendar service (enable "Google Calendar API" under
 * Services) — the only Apps Script path that notifies existing-event guests.
 */
function addGuestsAfterTagging(event, guests, sendInvites) {
  guests.split(',').forEach(guest => {
    const address = guest.trim();
    if (address) event.addGuest(address);
  });
  if (!sendInvites) return;
  if (typeof Calendar !== 'undefined' && Calendar.Events) {
    // The event is already created and tagged; a transient notification
    // failure must not fail the run, so catch it and log a manual fallback.
    try {
      // event.getId() returns the iCalUID, not the Calendar API event ID —
      // look the event up by iCalUID and patch the API id it returns.
      const lookup = Calendar.Events.list('primary', { iCalUID: event.getId() });
      const apiEvent = lookup && lookup.items && lookup.items[0];
      if (apiEvent) {
        Calendar.Events.patch({}, 'primary', apiEvent.id, { sendUpdates: 'all' });
      } else {
        Logger.log('    ⚠ Could not resolve the Calendar API event ID — guests were added but not emailed. Notify participants manually.');
      }
    } catch (inviteError) {
      Logger.log('    ⚠ Sending invites failed (' + inviteError.message + ') — guests were added but not emailed. Resend invitations manually from Calendar.');
    }
  } else {
    Logger.log('    ⚠ Advanced Calendar service unavailable — guests were added but not emailed. Enable the "Google Calendar API" service and rerun, or notify participants manually.');
  }
}

// ============================================================
// MAIN FUNCTION - Run this to create all events
// ============================================================

function createAllEvents() {
  const calendar = CalendarApp.getDefaultCalendar();
  const inviteMode = PARTICIPANTS.length > 0;

  Logger.log('='.repeat(50));
  Logger.log('WORKSHOP CALENDAR EVENT CREATOR');
  Logger.log('='.repeat(50));
  Logger.log('Workshop Monday: ' + WORKSHOP_MONDAY.toDateString());
  Logger.log(inviteMode
    ? 'Mode: FACILITATOR — inviting ' + PARTICIPANTS.length + ' participants'
    : 'Mode: STUDENT — events go on your own calendar only');
  Logger.log('Events to create: ' + EVENTS.length);
  Logger.log('='.repeat(50));

  let successCount = 0;
  let failCount = 0;

  EVENTS.forEach((event, index) => {
    try {
      const eventDate = calculateEventDate(event);
      const startTime = createDateTime(eventDate, event.startTime);
      const endTime = createDateTime(eventDate, event.endTime);

      Logger.log('');
      Logger.log('[' + (index + 1) + '/' + EVENTS.length + '] Creating: ' + event.title);
      Logger.log('    Date: ' + eventDate.toDateString());
      Logger.log('    Time: ' + event.startTime + ' - ' + event.endTime);

      const options = {
        location: event.location,
        description: event.description
      };
      if (inviteMode) {
        options.guests = PARTICIPANTS.join(',');
        options.sendInvites = true;
      }
      const calendarEvent = createTaggedEvent(calendar, event.title, startTime, endTime, options);

      Logger.log('    ✓ Created successfully (ID: ' + calendarEvent.getId() + ')');
      successCount++;

      // Rate limiting - wait 1 second between API calls
      Utilities.sleep(1000);

    } catch (error) {
      Logger.log('    ✗ FAILED: ' + error.message);
      failCount++;
    }
  });

  // Summary
  Logger.log('');
  Logger.log('='.repeat(50));
  Logger.log('SUMMARY');
  Logger.log('='.repeat(50));
  Logger.log('Created: ' + successCount + '/' + EVENTS.length);
  Logger.log('Failed: ' + failCount);
  Logger.log('');
  Logger.log(inviteMode
    ? 'All participants have been added as guests and will receive invites.'
    : 'Open calendar.google.com — your TechBond week is ready.');
  Logger.log('='.repeat(50));
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Delete all events created by this script (use with caution!)
 * Searches a stable one-year window either side of today, plus the current
 * schedule, so tagged events from earlier runs are still found even if
 * WORKSHOP_MONDAY_OVERRIDE changed between runs.
 */
function deleteAllWorkshopEvents() {
  const calendar = CalendarApp.getDefaultCalendar();
  const eventDates = EVENTS.map(calculateEventDate);
  eventDates.push(testEventStartTime());
  const yearBefore = new Date();
  yearBefore.setDate(yearBefore.getDate() - 366);
  const yearAfter = new Date();
  yearAfter.setDate(yearAfter.getDate() + 366);
  eventDates.push(yearBefore, yearAfter);
  const startDate = new Date(Math.min(...eventDates));
  const endDate = new Date(Math.max(...eventDates));
  startDate.setHours(0, 0, 0, 0);
  endDate.setDate(endDate.getDate() + 1);
  endDate.setHours(0, 0, 0, 0);

  let deleteCount = 0;

  if (typeof Calendar !== 'undefined' && Calendar.Events) {
    // Tags map to private extended properties, so the Advanced Calendar
    // service can filter server-side instead of scanning every event.
    let pageToken;
    do {
      const response = Calendar.Events.list('primary', {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        privateExtendedProperty: WORKSHOP_EVENT_TAG_KEY + '=' + WORKSHOP_EVENT_TAG_VALUE,
        singleEvents: true,
        pageToken: pageToken
      });
      (response.items || []).forEach(item => {
        Logger.log('Deleting: ' + item.summary);
        Calendar.Events.remove('primary', item.id);
        deleteCount++;
        Utilities.sleep(200);
      });
      pageToken = response.nextPageToken;
    } while (pageToken);
  } else {
    const events = calendar.getEvents(startDate, endDate);
    events.forEach(event => {
      if (event.getTag(WORKSHOP_EVENT_TAG_KEY) === WORKSHOP_EVENT_TAG_VALUE) {
        Logger.log('Deleting: ' + event.getTitle() + ' on ' + event.getStartTime().toDateString());
        event.deleteEvent();
        deleteCount++;
        Utilities.sleep(500);
      }
    });
  }

  Logger.log('Deleted ' + deleteCount + ' events');
}

/**
 * Test function - creates just one event to verify setup
 */
function testCreateOneEvent() {
  const calendar = CalendarApp.getDefaultCalendar();
  const testDate = testEventStartTime();

  const endDate = new Date(testDate);
  endDate.setHours(10, 30, 0, 0);

  const options = {
    description: 'This is a test event. You can delete it.'
  };
  if (PARTICIPANTS.length > 0) {
    options.guests = PARTICIPANTS[0]; // Just first participant
    options.sendInvites = false;
  }
  const event = createTaggedEvent(
    calendar,
    'TEST - Workshop Script Verification',
    testDate,
    endDate,
    options
  );

  Logger.log('Test event created: ' + event.getId());
  Logger.log('Check your calendar for tomorrow at 10:00 AM');
}
