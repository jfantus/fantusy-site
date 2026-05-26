const retirementDate = new Date("2027-04-01T00:00:00");

const jokes = [
  {
    "date": "2026-05-24",
    "title": "Trauma Forecast",
    "text": "Richard's most reliable instrument was not a clamp; it was the eyebrow he raised when a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2026-05-25",
    "title": "Chair Math",
    "text": "Retirement will be strange, because nobody at home is prepared for how fast he expects the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2026-05-26",
    "title": "Anesthesia Weather",
    "text": "The hospital once tried to streamline the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2026-05-27",
    "title": "Orthopedic Anthropology",
    "text": "Anesthesia promised five minutes, so Richard had enough time to someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2026-05-28",
    "title": "Pager Psychology",
    "text": "Orthopedics brought a hammer to the conversation; Richard brought the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2026-05-29",
    "title": "Rounds Report",
    "text": "At M&M, Richard believed the first complication was usually the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2026-05-30",
    "title": "Meeting Pathology",
    "text": "As Chair, he mastered the rare art of the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2026-05-31",
    "title": "Coffee Emergency",
    "text": "In trauma, Richard could identify bleeding faster than administration could identify someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2026-06-01",
    "title": "Consult Etiquette",
    "text": "His dad jokes functioned like surgical drains: the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2026-06-02",
    "title": "Timeout Doctrine",
    "text": "Richard treated inefficiency like hemorrhage: the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2026-06-03",
    "title": "PACU Diplomacy",
    "text": "Before first case, Richard needed only coffee, a plan, and the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2026-06-04",
    "title": "Grand Rounds Gravity",
    "text": "Residents learned two facts quickly: the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2026-06-05",
    "title": "Family Triage",
    "text": "When the pager went off, Richard did not run; he the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2026-06-06",
    "title": "Discharge Philosophy",
    "text": "The OR schedule feared him because the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2026-06-07",
    "title": "OR Board Lore",
    "text": "Richard's retirement hobby may become ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2026-06-08",
    "title": "Resident Pearls",
    "text": "If meetings had blood pressure, Richard would have the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2026-06-09",
    "title": "Source Control",
    "text": "The family group chat is about to inherit the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2026-06-10",
    "title": "Soft Tissue Studies",
    "text": "PACU once called with a question; Richard answered before the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2026-06-11",
    "title": "Elevator Delay",
    "text": "The timeout was brief because everyone already knew the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2026-06-12",
    "title": "Dictation Hazard",
    "text": "Richard's operative note could summarize a career: the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2026-06-13",
    "title": "First Case Mythology",
    "text": "The trauma bay respected Richard because the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2026-06-14",
    "title": "Night Call Folklore",
    "text": "A late start made Richard so quiet anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2026-06-15",
    "title": "Surgical Compass",
    "text": "Someone mentioned elective committee work, and Richard immediately grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2026-06-16",
    "title": "Retirement Rounds",
    "text": "The first rule of Richard's OR was simple: the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2026-06-17",
    "title": "Hemostasis Theory",
    "text": "Orthopedics once said 'it's just a fracture,' and Richard replied administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2026-06-18",
    "title": "Scalpel Logic",
    "text": "Anesthesia asked for a little more time, so Richard the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2026-06-19",
    "title": "Committee Resection",
    "text": "The pager tried to retire before Richard because the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2026-06-20",
    "title": "Transfer Center Drama",
    "text": "Hospital leadership asked for consensus, and Richard offered PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2026-06-21",
    "title": "Clinic Cartography",
    "text": "A consult without a question reached Richard's inbox, and the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2026-06-22",
    "title": "Instrument Count",
    "text": "Richard's calendar had more injuries than his trauma service because the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2026-06-23",
    "title": "Cafeteria Consult",
    "text": "He didn't dislike meetings; he disliked the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2026-06-24",
    "title": "Badge Swipe",
    "text": "Every resident eventually learned that Richard's silence meant the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2026-06-25",
    "title": "Whiteboard Rounds",
    "text": "Retirement is the only discharge plan Richard cannot rewrite the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2026-06-26",
    "title": "Schedule Trauma",
    "text": "The OR coffee machine understood urgency better than the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2026-06-27",
    "title": "Sterile Sarcasm",
    "text": "Richard's favorite timeout was the one where the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2026-06-28",
    "title": "Home Call",
    "text": "The phrase 'circle back' once entered Richard's office and the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2026-06-29",
    "title": "Hardware Store Medicine",
    "text": "To Richard, 'multidisciplinary' meant the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2026-06-30",
    "title": "Leadership Biopsy",
    "text": "A surgeon, an anesthesiologist, and an orthopedist walked into an OR; Richard the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2026-07-01",
    "title": "Post-Op Plan",
    "text": "When someone said 'quick huddle,' Richard heard the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2026-07-02",
    "title": "Final Count",
    "text": "The hospital badge will miss Richard because the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2026-07-03",
    "title": "Trauma Forecast",
    "text": "In retirement, Richard may still round on a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2026-07-04",
    "title": "Chair Math",
    "text": "His chairmanship proved one thing: the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2026-07-05",
    "title": "Anesthesia Weather",
    "text": "Richard's dad jokes had a complication rate of the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2026-07-06",
    "title": "Orthopedic Anthropology",
    "text": "A bone saw made noise in the distance, and Richard someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2026-07-07",
    "title": "Pager Psychology",
    "text": "Administration invented a new dashboard, and Richard the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2026-07-08",
    "title": "Rounds Report",
    "text": "The transfer center called with a 'straightforward' case, which meant the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2026-07-09",
    "title": "Meeting Pathology",
    "text": "Richard never needed a magic wand because the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2026-07-10",
    "title": "Coffee Emergency",
    "text": "The family thermostat is about to experience someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2026-07-11",
    "title": "Consult Etiquette",
    "text": "His career was a masterclass in the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2026-07-12",
    "title": "Timeout Doctrine",
    "text": "Richard believed the best committee minutes were the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2026-07-13",
    "title": "PACU Diplomacy",
    "text": "Someone asked if the case could wait, and Richard the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2026-07-14",
    "title": "Grand Rounds Gravity",
    "text": "The hospital once tried to surprise Richard, but the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2026-07-15",
    "title": "Family Triage",
    "text": "Retirement will give Richard more time to the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2026-07-16",
    "title": "Discharge Philosophy",
    "text": "His OR preference card should have included the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2026-07-17",
    "title": "OR Board Lore",
    "text": "When the resident said 'technically,' Richard ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2026-07-18",
    "title": "Resident Pearls",
    "text": "The anesthesia record said 'ready,' but Richard the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2026-07-19",
    "title": "Source Control",
    "text": "Orthopedics asked about the abdomen, and everyone the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2026-07-20",
    "title": "Soft Tissue Studies",
    "text": "The trauma pager was basically Richard's second language: the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2026-07-21",
    "title": "Elevator Delay",
    "text": "If sarcasm required credentialing, Richard the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2026-07-22",
    "title": "Dictation Hazard",
    "text": "The discharge lounge was invented because the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2026-07-23",
    "title": "First Case Mythology",
    "text": "Richard's leadership style combined the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2026-07-24",
    "title": "Night Call Folklore",
    "text": "Before a difficult case, Richard trusted anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2026-07-25",
    "title": "Surgical Compass",
    "text": "The committee room had no suction, so Richard grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2026-07-26",
    "title": "Retirement Rounds",
    "text": "Anesthesia counted minutes differently, and Richard the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2026-07-27",
    "title": "Hemostasis Theory",
    "text": "The orthopedic plan had hardware, but Richard noticed administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2026-07-28",
    "title": "Scalpel Logic",
    "text": "A resident presented three options, and Richard the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2026-07-29",
    "title": "Committee Resection",
    "text": "The family will discover that retirement does not reduce the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2026-07-30",
    "title": "Transfer Center Drama",
    "text": "Richard's inbox once developed tachycardia after PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2026-07-31",
    "title": "Clinic Cartography",
    "text": "Grand rounds overran by twelve minutes, and Richard the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2026-08-01",
    "title": "Instrument Count",
    "text": "The OR board displayed a delay, and Richard the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2026-08-02",
    "title": "Cafeteria Consult",
    "text": "He treated vague plans the way trauma treats bleeding: the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2026-08-03",
    "title": "Badge Swipe",
    "text": "The hospital hallway was Richard's natural habitat because the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2026-08-04",
    "title": "Whiteboard Rounds",
    "text": "Someone said 'low acuity,' and the trauma surgeon in Richard the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2026-08-05",
    "title": "Schedule Trauma",
    "text": "Richard could make a pager feel guilty simply by the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2026-08-06",
    "title": "Sterile Sarcasm",
    "text": "A meeting invite marked 'optional' arrived, and Richard the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2026-08-07",
    "title": "Home Call",
    "text": "The orthopedic service found the bone; Richard the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2026-08-08",
    "title": "Hardware Store Medicine",
    "text": "Anesthesia began explaining pharmacology, and Richard the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2026-08-09",
    "title": "Leadership Biopsy",
    "text": "Retirement will test whether Richard can ignore the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2026-08-10",
    "title": "Post-Op Plan",
    "text": "His dad-joke timing was like a clean incision: the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2026-08-11",
    "title": "Final Count",
    "text": "The chair's office had two temperatures: the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2026-08-12",
    "title": "Trauma Forecast",
    "text": "A policy draft reached Richard with forty-seven comments; he a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2026-08-13",
    "title": "Chair Math",
    "text": "The trauma bay had chaos, but Richard the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2026-08-14",
    "title": "Anesthesia Weather",
    "text": "When someone asked for a small favor, Richard the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2026-08-15",
    "title": "Orthopedic Anthropology",
    "text": "The OR lights came on, and Richard someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2026-08-16",
    "title": "Pager Psychology",
    "text": "An intern once whispered 'ortho is here,' and Richard the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2026-08-17",
    "title": "Rounds Report",
    "text": "Richard's retirement countdown is evidence that the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2026-08-18",
    "title": "Meeting Pathology",
    "text": "The safest place during a hospital crisis was the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2026-08-19",
    "title": "Coffee Emergency",
    "text": "He taught that source control applies to someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2026-08-20",
    "title": "Consult Etiquette",
    "text": "Anesthesia said the patient was 'not quite optimized,' and Richard the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2026-08-21",
    "title": "Timeout Doctrine",
    "text": "Orthopedics brought imaging; Richard brought the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2026-08-22",
    "title": "PACU Diplomacy",
    "text": "The first case was scheduled at 7:30, which Richard interpreted as the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2026-08-23",
    "title": "Grand Rounds Gravity",
    "text": "His family thinks he is retiring from surgery, but really the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2026-08-24",
    "title": "Family Triage",
    "text": "The trauma chief within Richard has the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2026-08-25",
    "title": "Discharge Philosophy",
    "text": "Someone asked whether a meeting needed an agenda, and Richard the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2026-08-26",
    "title": "OR Board Lore",
    "text": "Richard's stare could debride ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2026-08-27",
    "title": "Resident Pearls",
    "text": "The elevator stopped on every floor, so Richard the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2026-08-28",
    "title": "Source Control",
    "text": "At home, the dishwasher will soon undergo the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2026-08-29",
    "title": "Soft Tissue Studies",
    "text": "A hospital committee tried to table the issue, and Richard the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2026-08-30",
    "title": "Elevator Delay",
    "text": "Anesthesia's 'almost' and Richard's 'now' were the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2026-08-31",
    "title": "Dictation Hazard",
    "text": "Orthopedics believed in fixation; Richard believed in the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2026-09-01",
    "title": "First Case Mythology",
    "text": "The family printer jammed, and Richard the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2026-09-02",
    "title": "Night Call Folklore",
    "text": "The OR circulating nurse knew Richard was near when anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2026-09-03",
    "title": "Surgical Compass",
    "text": "His retirement party needs a sign reading grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2026-09-04",
    "title": "Retirement Rounds",
    "text": "When Richard says 'interesting,' everyone understands the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2026-09-05",
    "title": "Hemostasis Theory",
    "text": "A medical student asked what trauma surgery is like, and Richard administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2026-09-06",
    "title": "Scalpel Logic",
    "text": "The hospital cafeteria line once delayed Richard, so the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2026-09-07",
    "title": "Committee Resection",
    "text": "A consult page with no callback number caused the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2026-09-08",
    "title": "Transfer Center Drama",
    "text": "Richard's preferred anesthesia plan was PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2026-09-09",
    "title": "Clinic Cartography",
    "text": "The bone team requested help, and Richard the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2026-09-10",
    "title": "Instrument Count",
    "text": "Retirement means Richard can finally sleep in until the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2026-09-11",
    "title": "Cafeteria Consult",
    "text": "He reviewed a schedule and found the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2026-09-12",
    "title": "Badge Swipe",
    "text": "A bad plan entered the room and immediately the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2026-09-13",
    "title": "Whiteboard Rounds",
    "text": "The only thing sharper than Richard's scalpel was the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2026-09-14",
    "title": "Schedule Trauma",
    "text": "The pager used to beep; now it the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2026-09-15",
    "title": "Sterile Sarcasm",
    "text": "The chair of surgery job description forgot the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2026-09-16",
    "title": "Home Call",
    "text": "Anesthesia asked if Richard was comfortable waiting, and the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2026-09-17",
    "title": "Hardware Store Medicine",
    "text": "Orthopedics said 'we'll just wash it out,' and Richard the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2026-09-18",
    "title": "Leadership Biopsy",
    "text": "Richard's family vacations may include the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2026-09-19",
    "title": "Post-Op Plan",
    "text": "When the OR was ready early, Richard the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2026-09-20",
    "title": "Final Count",
    "text": "A resident said 'I read somewhere,' and Richard the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2026-09-21",
    "title": "Trauma Forecast",
    "text": "The trauma bay clock ran fast because a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2026-09-22",
    "title": "Chair Math",
    "text": "Hospital email threads feared Richard because the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2026-09-23",
    "title": "Anesthesia Weather",
    "text": "His post-retirement assessment reads the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2026-09-24",
    "title": "Orthopedic Anthropology",
    "text": "A committee recommended another committee, and Richard someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2026-09-25",
    "title": "Pager Psychology",
    "text": "Anesthesia's favorite word was 'soon'; Richard's favorite word was the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2026-09-26",
    "title": "Rounds Report",
    "text": "Ortho wanted a bigger screw; Richard wanted the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2026-09-27",
    "title": "Meeting Pathology",
    "text": "The retirement calendar has one advantage over the OR: the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2026-09-28",
    "title": "Coffee Emergency",
    "text": "Richard's dad jokes were sterile, but someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2026-09-29",
    "title": "Consult Etiquette",
    "text": "The family Wi-Fi router will soon meet the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2026-09-30",
    "title": "Timeout Doctrine",
    "text": "He led surgeons like he handled bleeding: the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2026-10-01",
    "title": "PACU Diplomacy",
    "text": "A hospital hallway conversation became a project, and Richard the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2026-10-02",
    "title": "Grand Rounds Gravity",
    "text": "The first trauma rule in Richard's world was the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2026-10-03",
    "title": "Family Triage",
    "text": "Someone said 'not my service,' and Richard the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2026-10-04",
    "title": "Discharge Philosophy",
    "text": "The operating room heard Richard's footsteps and the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2026-10-05",
    "title": "OR Board Lore",
    "text": "Anesthesia adjusted the drape, adjusted the monitor, adjusted the chair, and Richard ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2026-10-06",
    "title": "Resident Pearls",
    "text": "Orthopedics once described a wound as 'wet,' and Richard the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2026-10-07",
    "title": "Source Control",
    "text": "The pager could not retire because the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2026-10-08",
    "title": "Soft Tissue Studies",
    "text": "Richard's definition of wellness included the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2026-10-09",
    "title": "Elevator Delay",
    "text": "Administration called it innovation; Richard called it the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2026-10-10",
    "title": "Dictation Hazard",
    "text": "The resident workroom knew Richard cared because the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2026-10-11",
    "title": "First Case Mythology",
    "text": "A timeout without Richard felt like the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2026-10-12",
    "title": "Night Call Folklore",
    "text": "The retirement party should start on time because anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2026-10-13",
    "title": "Surgical Compass",
    "text": "Richard's greatest teaching pearl was grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2026-10-14",
    "title": "Retirement Rounds",
    "text": "When asked for his hobbies, Richard listed the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2026-10-15",
    "title": "Hemostasis Theory",
    "text": "A slow elevator and anesthesia once raced; Richard administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2026-10-16",
    "title": "Scalpel Logic",
    "text": "The consult service tried to be mysterious, but Richard the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2026-10-17",
    "title": "Committee Resection",
    "text": "Orthopedics sees alignment; Richard sees the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2026-10-18",
    "title": "Transfer Center Drama",
    "text": "Anesthesia saw a patient; Richard saw PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2026-10-19",
    "title": "Clinic Cartography",
    "text": "The family group chat will need triage because the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2026-10-20",
    "title": "Instrument Count",
    "text": "Richard's last hospital badge swipe deserves the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2026-10-21",
    "title": "Cafeteria Consult",
    "text": "A chair, a scalpel, and a pager walked into retirement; Richard the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2026-10-22",
    "title": "Badge Swipe",
    "text": "If leadership had an operative approach, Richard's would be the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2026-10-23",
    "title": "Whiteboard Rounds",
    "text": "The hospital printer once challenged Richard and the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2026-10-24",
    "title": "Schedule Trauma",
    "text": "A meeting ran long, so Richard the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2026-10-25",
    "title": "Sterile Sarcasm",
    "text": "The trauma bay once whispered the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2026-10-26",
    "title": "Home Call",
    "text": "Anesthesia requested a warm blanket, and Richard the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2026-10-27",
    "title": "Hardware Store Medicine",
    "text": "Orthopedics requested a drill, and Richard the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2026-10-28",
    "title": "Leadership Biopsy",
    "text": "Retirement will not stop Richard from the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2026-10-29",
    "title": "Post-Op Plan",
    "text": "His dad jokes were like prophylactic antibiotics: the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2026-10-30",
    "title": "Final Count",
    "text": "The committee agenda had a mass effect, so Richard the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2026-10-31",
    "title": "Trauma Forecast",
    "text": "Richard's OR playlist was mostly a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2026-11-01",
    "title": "Chair Math",
    "text": "The family calendar is about to learn the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2026-11-02",
    "title": "Anesthesia Weather",
    "text": "When Richard heard 'process improvement,' he asked the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2026-11-03",
    "title": "Orthopedic Anthropology",
    "text": "The intern asked how to impress him, and Richard said someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2026-11-04",
    "title": "Pager Psychology",
    "text": "Anesthesia planned induction; Richard planned the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2026-11-05",
    "title": "Rounds Report",
    "text": "Orthopedics planned fixation; Richard planned the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2026-11-06",
    "title": "Meeting Pathology",
    "text": "The hospital tried to replace Richard's judgment with a dashboard, but the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2026-11-07",
    "title": "Coffee Emergency",
    "text": "A trauma surgeon retires only after someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2026-11-08",
    "title": "Consult Etiquette",
    "text": "Richard's retirement diagnosis is the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2026-11-09",
    "title": "Timeout Doctrine",
    "text": "He could turn a hallway comment into the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2026-11-10",
    "title": "PACU Diplomacy",
    "text": "The OR door opened and the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2026-11-11",
    "title": "Grand Rounds Gravity",
    "text": "Anesthesia said 'stable,' and Richard said the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2026-11-12",
    "title": "Family Triage",
    "text": "Orthopedics said 'beautiful x-ray,' and Richard said the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2026-11-13",
    "title": "Discharge Philosophy",
    "text": "Retirement gives Richard the rare chance to the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2026-11-14",
    "title": "OR Board Lore",
    "text": "His family will learn that 'quick errand' means ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2026-11-15",
    "title": "Resident Pearls",
    "text": "A surgical chair never really leaves; he the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2026-11-16",
    "title": "Source Control",
    "text": "Richard's pager had Stockholm syndrome because the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2026-11-17",
    "title": "Soft Tissue Studies",
    "text": "The last committee meeting tried to hug him, and Richard the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2026-11-18",
    "title": "Elevator Delay",
    "text": "He treated hospital politics like blunt trauma: the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2026-11-19",
    "title": "Dictation Hazard",
    "text": "Anesthesia delayed breakfast once, and Richard the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2026-11-20",
    "title": "First Case Mythology",
    "text": "Orthopedics once found a pulse and requested applause; Richard the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2026-11-21",
    "title": "Night Call Folklore",
    "text": "The house will soon have morning rounds, except anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2026-11-22",
    "title": "Surgical Compass",
    "text": "Richard's favorite postoperative order was grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2026-11-23",
    "title": "Retirement Rounds",
    "text": "The OR whiteboard did not lie; it the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2026-11-24",
    "title": "Hemostasis Theory",
    "text": "A resident asked for feedback and got administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2026-11-25",
    "title": "Scalpel Logic",
    "text": "Administration offered a farewell plaque; Richard wanted the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2026-11-26",
    "title": "Committee Resection",
    "text": "The anesthesia cart rolled slowly, and Richard the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2026-11-27",
    "title": "Transfer Center Drama",
    "text": "Orthopedics rolled in smiling, and Richard PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2026-11-28",
    "title": "Clinic Cartography",
    "text": "The retirement countdown is clinically significant because the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2026-11-29",
    "title": "Instrument Count",
    "text": "Richard's teaching style was the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2026-11-30",
    "title": "Cafeteria Consult",
    "text": "The family dog, if present, should expect the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2026-12-01",
    "title": "Badge Swipe",
    "text": "A hospital policy used passive voice; Richard the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2026-12-02",
    "title": "Whiteboard Rounds",
    "text": "He believed every delay had a source, and the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2026-12-03",
    "title": "Schedule Trauma",
    "text": "Anesthesia's plan had layers; Richard preferred the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2026-12-04",
    "title": "Sterile Sarcasm",
    "text": "Orthopedics brought screws; Richard brought the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2026-12-05",
    "title": "Home Call",
    "text": "Retirement is just elective recovery from the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2026-12-06",
    "title": "Hardware Store Medicine",
    "text": "The pager beeped one final time and the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2026-12-07",
    "title": "Leadership Biopsy",
    "text": "Richard's career had excellent outcomes, despite the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2026-12-08",
    "title": "Post-Op Plan",
    "text": "The OR thermostat and Richard agreed on one thing: the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2026-12-09",
    "title": "Final Count",
    "text": "A committee asked for stakeholder engagement; Richard the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2026-12-10",
    "title": "Trauma Forecast",
    "text": "An intern wrote 'patient doing well,' and Richard a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2026-12-11",
    "title": "Chair Math",
    "text": "The surgical floor had two speeds: the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2026-12-12",
    "title": "Anesthesia Weather",
    "text": "Orthopedics tried subtlety once; Richard the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2026-12-13",
    "title": "Orthopedic Anthropology",
    "text": "Anesthesia tried speed once; Richard someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2026-12-14",
    "title": "Pager Psychology",
    "text": "Richard's retirement speech could be the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2026-12-15",
    "title": "Rounds Report",
    "text": "His family should label every drawer because the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2026-12-16",
    "title": "Meeting Pathology",
    "text": "A trauma bay without Richard will need the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2026-12-17",
    "title": "Coffee Emergency",
    "text": "He could make a vague sentence someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2026-12-18",
    "title": "Consult Etiquette",
    "text": "The farewell cake should say the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2026-12-19",
    "title": "Timeout Doctrine",
    "text": "Richard's least favorite fracture was the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2026-12-20",
    "title": "PACU Diplomacy",
    "text": "His favorite consult was the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2026-12-21",
    "title": "Grand Rounds Gravity",
    "text": "Anesthesia's clock and Richard's clock the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2026-12-22",
    "title": "Family Triage",
    "text": "Orthopedics uses hardware; Richard uses the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2026-12-23",
    "title": "Discharge Philosophy",
    "text": "The OR delay board once apologized because the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2026-12-24",
    "title": "OR Board Lore",
    "text": "Retirement will create a new service line: ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2026-12-25",
    "title": "Resident Pearls",
    "text": "The pager entered hospice when the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2026-12-26",
    "title": "Source Control",
    "text": "A resident asked what leadership means; Richard the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2026-12-27",
    "title": "Soft Tissue Studies",
    "text": "The hospital tried to give him a quiet sendoff, but the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2026-12-28",
    "title": "Elevator Delay",
    "text": "Anesthesia said 'deep breath,' and Richard the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2026-12-29",
    "title": "Dictation Hazard",
    "text": "Orthopedics said 'nice reduction,' and Richard the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2026-12-30",
    "title": "First Case Mythology",
    "text": "Richard's home office will soon become the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2026-12-31",
    "title": "Night Call Folklore",
    "text": "He handled trauma like anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2027-01-01",
    "title": "Surgical Compass",
    "text": "The family calendar will require grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2027-01-02",
    "title": "Retirement Rounds",
    "text": "A meeting without Richard may feel safer, but the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2027-01-03",
    "title": "Hemostasis Theory",
    "text": "The retirement countdown has better compliance than administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2027-01-04",
    "title": "Scalpel Logic",
    "text": "Richard's coffee order was the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2027-01-05",
    "title": "Committee Resection",
    "text": "His badge photo probably looks the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2027-01-06",
    "title": "Transfer Center Drama",
    "text": "The surgical schedule once blinked, and PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2027-01-07",
    "title": "Clinic Cartography",
    "text": "Anesthesia found a vein; Richard found the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2027-01-08",
    "title": "Instrument Count",
    "text": "Orthopedics found the fracture; Richard found the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2027-01-09",
    "title": "Cafeteria Consult",
    "text": "The hospital hallway lost a landmark when the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2027-01-10",
    "title": "Badge Swipe",
    "text": "A last-minute agenda item appeared, and Richard the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2027-01-11",
    "title": "Whiteboard Rounds",
    "text": "He believed leadership meant the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2027-01-12",
    "title": "Schedule Trauma",
    "text": "The pager learned courage from the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2027-01-13",
    "title": "Sterile Sarcasm",
    "text": "Retirement will be the first elective procedure Richard the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2027-01-14",
    "title": "Home Call",
    "text": "A dad joke crossed the sterile field, and the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2027-01-15",
    "title": "Hardware Store Medicine",
    "text": "The OR table knew Richard meant business when the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2027-01-16",
    "title": "Leadership Biopsy",
    "text": "Anesthesia's 'ready' needed the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2027-01-17",
    "title": "Post-Op Plan",
    "text": "Orthopedics' 'done' needed the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2027-01-18",
    "title": "Final Count",
    "text": "The house will soon run on the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2027-01-19",
    "title": "Trauma Forecast",
    "text": "Richard's chairmanship should be coded as a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2027-01-20",
    "title": "Chair Math",
    "text": "The hospital should retire his pager like the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2027-01-21",
    "title": "Anesthesia Weather",
    "text": "When asked what he'll miss, Richard may say the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2027-01-22",
    "title": "Orthopedic Anthropology",
    "text": "A surgical legend retires when someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2027-01-23",
    "title": "Pager Psychology",
    "text": "The committee minutes once described Richard as concise; he the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2027-01-24",
    "title": "Rounds Report",
    "text": "Anesthesia requested calm; Richard requested the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2027-01-25",
    "title": "Meeting Pathology",
    "text": "Orthopedics requested more imaging; Richard requested the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2027-01-26",
    "title": "Coffee Emergency",
    "text": "The family remote control may require someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2027-01-27",
    "title": "Consult Etiquette",
    "text": "Richard's retirement plan has the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2027-01-28",
    "title": "Timeout Doctrine",
    "text": "The trauma bay will remember the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2027-01-29",
    "title": "PACU Diplomacy",
    "text": "A hospital without Richard is like the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2027-01-30",
    "title": "Grand Rounds Gravity",
    "text": "He proved a chair can be the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2027-01-31",
    "title": "Family Triage",
    "text": "The last OR day should include the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2027-02-01",
    "title": "Discharge Philosophy",
    "text": "Anesthesia will honor Richard by the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2027-02-02",
    "title": "OR Board Lore",
    "text": "Orthopedics will honor Richard by ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2027-02-03",
    "title": "Resident Pearls",
    "text": "Richard's dad-joke archive deserves the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2027-02-04",
    "title": "Source Control",
    "text": "The countdown's final month is basically the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2027-02-05",
    "title": "Soft Tissue Studies",
    "text": "A clean handoff requires the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2027-02-06",
    "title": "Elevator Delay",
    "text": "His career was not just surgery; it was the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2027-02-07",
    "title": "Dictation Hazard",
    "text": "On retirement day, the hospital will gain the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2027-02-08",
    "title": "First Case Mythology",
    "text": "Richard will leave the building, but the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2027-02-09",
    "title": "Night Call Folklore",
    "text": "The final diagnosis is simple: anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2027-02-10",
    "title": "Surgical Compass",
    "text": "Richard's most reliable instrument was not a clamp; it was the eyebrow he raised when grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2027-02-11",
    "title": "Retirement Rounds",
    "text": "Retirement will be strange, because nobody at home is prepared for how fast he expects the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2027-02-12",
    "title": "Hemostasis Theory",
    "text": "The hospital once tried to streamline administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2027-02-13",
    "title": "Scalpel Logic",
    "text": "Anesthesia promised five minutes, so Richard had enough time to the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2027-02-14",
    "title": "Committee Resection",
    "text": "Orthopedics brought a hammer to the conversation; Richard brought the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2027-02-15",
    "title": "Transfer Center Drama",
    "text": "At M&M, Richard believed the first complication was usually PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2027-02-16",
    "title": "Clinic Cartography",
    "text": "As Chair, he mastered the rare art of the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2027-02-17",
    "title": "Instrument Count",
    "text": "In trauma, Richard could identify bleeding faster than administration could identify the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2027-02-18",
    "title": "Cafeteria Consult",
    "text": "His dad jokes functioned like surgical drains: the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2027-02-19",
    "title": "Badge Swipe",
    "text": "Richard treated inefficiency like hemorrhage: the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2027-02-20",
    "title": "Whiteboard Rounds",
    "text": "Before first case, Richard needed only coffee, a plan, and the family printer jammed during a crisis, which is still less painful than another committee meeting."
  },
  {
    "date": "2027-02-21",
    "title": "Schedule Trauma",
    "text": "Residents learned two facts quickly: the first case start began aging poorly, which remains the most efficient consult in hospital history."
  },
  {
    "date": "2027-02-22",
    "title": "Sterile Sarcasm",
    "text": "When the pager went off, Richard did not run; he the call schedule became abstract art, then asked for the actual plan, not the decorative one."
  },
  {
    "date": "2027-02-23",
    "title": "Home Call",
    "text": "The OR schedule feared him because the timeout became an oral board exam, while the coffee machine received a standing ovation."
  },
  {
    "date": "2027-02-24",
    "title": "Hardware Store Medicine",
    "text": "Richard's retirement hobby may become the dictation system misunderstood trauma surgery, and orthopedics quietly put the drill down."
  },
  {
    "date": "2027-02-25",
    "title": "Leadership Biopsy",
    "text": "If meetings had blood pressure, Richard would have the scrub sink had better timing than the schedule, then documented 'patient tolerated leadership well.'"
  },
  {
    "date": "2027-02-26",
    "title": "Post-Op Plan",
    "text": "The family group chat is about to inherit the transfer center used the word 'quick', while the pager pretended not to know him."
  },
  {
    "date": "2027-02-27",
    "title": "Final Count",
    "text": "PACU once called with a question; Richard answered before the hospital badge refused to deactivate, which made the OR schedule reconsider its life choices."
  },
  {
    "date": "2027-02-28",
    "title": "Trauma Forecast",
    "text": "The timeout was brief because everyone already knew a consult arrived without a question, proving chairmanship is mostly surgery performed on calendars."
  },
  {
    "date": "2027-03-01",
    "title": "Chair Math",
    "text": "Richard's operative note could summarize a career: the trauma bay filled before breakfast, and somehow the scalpel was still the sharpest thing in the room."
  },
  {
    "date": "2027-03-02",
    "title": "Anesthesia Weather",
    "text": "The trauma bay respected Richard because the surgical floor needed adult supervision, and anesthesia began moving with unusual purpose."
  },
  {
    "date": "2027-03-03",
    "title": "Orthopedic Anthropology",
    "text": "A late start made Richard so quiet someone printed an email thread, and the pager has never fully recovered."
  },
  {
    "date": "2027-03-04",
    "title": "Pager Psychology",
    "text": "Someone mentioned elective committee work, and Richard immediately the whiteboard marker ran dry mid-plan, then everybody suddenly remembered how to move."
  },
  {
    "date": "2027-03-05",
    "title": "Rounds Report",
    "text": "The first rule of Richard's OR was simple: the resident said 'I think' without data, which is why his retirement deserves telemetry."
  },
  {
    "date": "2027-03-06",
    "title": "Meeting Pathology",
    "text": "Orthopedics once said 'it's just a fracture,' and Richard replied the retirement cake needed pre-op clearance, then added 'common sense' to the treatment plan."
  },
  {
    "date": "2027-03-07",
    "title": "Coffee Emergency",
    "text": "Anesthesia asked for a little more time, so Richard someone added a recurring meeting, then asked whether this could have been a text."
  },
  {
    "date": "2027-03-08",
    "title": "Consult Etiquette",
    "text": "The pager tried to retire before Richard because the discharge summary tried to be a novel, so he prescribed direct pressure and fewer excuses."
  },
  {
    "date": "2027-03-09",
    "title": "Timeout Doctrine",
    "text": "Hospital leadership asked for consensus, and Richard offered the calendar invite used the word synergy, and the family group chat trembled."
  },
  {
    "date": "2027-03-10",
    "title": "PACU Diplomacy",
    "text": "A consult without a question reached Richard's inbox, and the bone team forgot the rest of the body, and the family should prepare for postoperative instructions."
  },
  {
    "date": "2027-03-11",
    "title": "Grand Rounds Gravity",
    "text": "Richard's calendar had more injuries than his trauma service because the committee agenda developed complications, then retired the idea before it could metastasize."
  },
  {
    "date": "2027-03-12",
    "title": "Family Triage",
    "text": "He didn't dislike meetings; he disliked the agenda exceeded the patient's problem list, then proved leadership can be both kind and surgically blunt."
  },
  {
    "date": "2027-03-13",
    "title": "Discharge Philosophy",
    "text": "Every resident eventually learned that Richard's silence meant the OR lights flickered like they knew, then looked at ortho like it was a consultable condition."
  },
  {
    "date": "2027-03-14",
    "title": "OR Board Lore",
    "text": "Retirement is the only discharge plan Richard cannot rewrite ortho described soft tissue as 'not our lane', then found three problems before breakfast."
  },
  {
    "date": "2027-03-15",
    "title": "Resident Pearls",
    "text": "The OR coffee machine understood urgency better than the family asked where something was, and nobody needed a randomized trial to see the problem."
  },
  {
    "date": "2027-03-16",
    "title": "Source Control",
    "text": "Richard's favorite timeout was the one where the pager battery asked for mercy, and the OR learned punctuality through fear-based education."
  },
  {
    "date": "2027-03-17",
    "title": "Soft Tissue Studies",
    "text": "The phrase 'circle back' once entered Richard's office and the hallway conversation became a task force, and the hospital's blood pressure normalized."
  },
  {
    "date": "2027-03-18",
    "title": "Elevator Delay",
    "text": "To Richard, 'multidisciplinary' meant the anesthesia cart moved at parade speed, which is why retirement should include hazard pay for relatives."
  },
  {
    "date": "2027-03-19",
    "title": "Dictation Hazard",
    "text": "A surgeon, an anesthesiologist, and an orthopedist walked into an OR; Richard the coffee machine chose violence, and the resulting silence was immediately therapeutic."
  },
  {
    "date": "2027-03-20",
    "title": "First Case Mythology",
    "text": "When someone said 'quick huddle,' Richard heard the intern found three ways to say maybe, then gave the problem a clean margin."
  },
  {
    "date": "2027-03-21",
    "title": "Night Call Folklore",
    "text": "The hospital badge will miss Richard because anesthesia said the room was nearly ready, so the room achieved spontaneous order."
  },
  {
    "date": "2027-03-22",
    "title": "Surgical Compass",
    "text": "In retirement, Richard may still round on grand rounds ran over, and even the suction canister seemed embarrassed."
  },
  {
    "date": "2027-03-23",
    "title": "Retirement Rounds",
    "text": "His chairmanship proved one thing: the cafeteria line forgot who it was dealing with, and everyone heard the unspoken post-op diagnosis."
  },
  {
    "date": "2027-03-24",
    "title": "Hemostasis Theory",
    "text": "Richard's dad jokes had a complication rate of administration discovered a new metric, and the residents learned anatomy plus survival."
  },
  {
    "date": "2027-03-25",
    "title": "Scalpel Logic",
    "text": "A bone saw made noise in the distance, and Richard the orthopedic note contained only hardware nouns, while anesthesia requested another minute for spiritual readiness."
  },
  {
    "date": "2027-03-26",
    "title": "Committee Resection",
    "text": "Administration invented a new dashboard, and Richard the pager attempted emotional manipulation, because sarcasm is not billable, but it should be."
  },
  {
    "date": "2027-03-27",
    "title": "Transfer Center Drama",
    "text": "The transfer center called with a 'straightforward' case, which meant PACU called with 'one tiny thing', then discharged the nonsense to outpatient follow-up."
  },
  {
    "date": "2027-03-28",
    "title": "Clinic Cartography",
    "text": "Richard never needed a magic wand because the resident presentation wandered into the weeds, then converted the delay into a teaching moment no one requested."
  },
  {
    "date": "2027-03-29",
    "title": "Instrument Count",
    "text": "The family thermostat is about to experience the elevator stopped at every floor, and the room turnover improved out of fear."
  },
  {
    "date": "2027-03-30",
    "title": "Cafeteria Consult",
    "text": "His career was a masterclass in the parking garage tried to delay him, which explains why the countdown has fewer delays than a Tuesday OR."
  },
  {
    "date": "2027-03-31",
    "title": "Badge Swipe",
    "text": "Richard believed the best committee minutes were the OR board claimed everything was on time, which turned a meeting into a brief procedure."
  },
  {
    "date": "2027-04-01",
    "title": "Retirement Day",
    "text": "Happy retirement, Richard. You saved lives, led surgeons, taught generations, and made every room better the moment you walked in."
  }
];

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseLocalDate(dateString) {
  return normalizeDate(new Date(`${dateString}T00:00:00`));
}

function formatDate(dateString) {
  return parseLocalDate(dateString).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function getUnlockedJokes(today) {
  return jokes.filter((item) => today >= parseLocalDate(item.date));
}

function renderSpotlight() {
  const today = normalizeDate(new Date());
  const unlocked = getUnlockedJokes(today);
  const current = unlocked[unlocked.length - 1] || jokes[0];
  const currentIndex = jokes.indexOf(current);
  const progress = Math.max(0, Math.min(100, (unlocked.length / jokes.length) * 100));

  setText("currentDay", `Day ${Math.max(1, currentIndex + 1)} of ${jokes.length}`);
  setText("currentDate", formatDate(current.date));
  setText("currentTitle", unlocked.length ? current.title : "Rounds have not started yet");
  setText(
    "currentJoke",
    unlocked.length ? current.text : `First joke unlocks on ${formatDate(jokes[0].date)}.`
  );
  setText("progressCount", `${unlocked.length} / ${jokes.length} jokes unlocked`);

  const progressBar = document.getElementById("jokeProgressBar");
  if (progressBar) progressBar.style.width = `${progress}%`;
}

function renderCalendar() {
  const today = normalizeDate(new Date());
  const calendar = document.getElementById("jokeCalendar");
  if (!calendar) return;

  calendar.innerHTML = "";

  jokes.forEach((item, index) => {
    const itemDate = parseLocalDate(item.date);
    const unlocked = today >= itemDate;
    const isToday = today.getTime() === itemDate.getTime();
    const door = document.createElement("article");
    door.className = `${unlocked ? "joke-door unlocked" : "joke-door locked"} ${isToday ? "today" : ""}`;

    const date = document.createElement("div");
    date.className = "joke-date";
    date.textContent = `Day ${index + 1} of ${jokes.length} - ${formatDate(item.date)}`;
    door.appendChild(date);

    const title = document.createElement("h2");
    title.textContent = unlocked ? item.title : `Locked until ${formatDate(item.date)}`;
    door.appendChild(title);

    const text = document.createElement("p");
    text.className = unlocked ? "joke-text" : "locked-text";
    text.textContent = unlocked ? item.text : "Future joke under sterile drape. Do not open until indicated.";
    door.appendChild(text);

    if (isToday) {
      const ribbon = document.createElement("span");
      ribbon.className = "today-ribbon";
      ribbon.textContent = "Today";
      door.appendChild(ribbon);
    }

    calendar.appendChild(door);
  });
}

function updateCountdown() {
  const now = new Date();
  const diff = retirementDate - now;
  const finale = document.getElementById("retirementFinale");

  if (diff <= 0) {
    setText("days", "0");
    setText("hours", "0");
    setText("minutes", "0");
    setText("seconds", "0");
    if (finale) finale.hidden = false;
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  setText("days", days);
  setText("hours", hours);
  setText("minutes", minutes);
  setText("seconds", seconds);
  if (finale) finale.hidden = true;
}

renderSpotlight();
renderCalendar();
updateCountdown();
setInterval(updateCountdown, 1000);
