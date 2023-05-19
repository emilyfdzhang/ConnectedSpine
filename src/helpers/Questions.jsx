import { Bold } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';

const Questions = [
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Terms of Service',
    type: null,
    qId: 'terms', // 0
    index: 0,
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Who are you answering this questionaire for?',
    type: null,
    qId: 'identity', // 1
    index: 1,
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: "Let's get some basic info about you first.",
    type: null,
    qId: 'basic-info', // 2
    index: 2,
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'What brings you here today?',
    options: [
      'A new pain or sensation in the back and/or neck',
      'Back and/or neck pain that has been chronic or occuring for some time',
      'A potential emergency or urgent care visit',
    ],
    type: 'Multiselect',
    qId: '00', // 3
    index: 3,
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Do any of the following apply?',
    options: [
      'I have fallen recently',
      'I lifted something heavy (moving, picking up children, weightligting, etc.',
      'I was injured or hurt myself (in a sports-related activity or otherwise)',
      'I was involved in motor vehicle accident',
      'None of the above',
    ],
    type: 'Select',
    qId: '01', // 4
    index: 4,
  },
  {
    section: 1,
    section_name: 'Basic Info',
    prompt: 'Did your symptoms start after the incident?',
    options: ['Yes', 'No', 'Not sure'],
    type: 'Select',
    qId: '02', // 5
    index: 5,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How long have you been experiencing these symptoms?',
    options: ['A few minutes', 'A few hours', 'A few days', 'Weeks', 'Month +'],
    type: 'Select',
    qId: '03', // 6
    index: 6,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Choose the area(s) where you are feeling pain and/or discomfort.',
    options: ['Neck', 'Upper Back', 'Middle Back', 'Lower Back'],
    type: 'Multibutton',
    qId: '04', // 7
    index: 7,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Where are you feeling pain/discomfort in your lower back?',
    options: ['ON THE LEFT', 'IN THE MIDDLE', 'ON THE RIGHT'],
    type: 'Multibutton',
    qId: '05', // 8
    index: 8,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How would you describe the sensation you are feeling?',
    options: [
      'SHARP PAIN',
      'SHOOTING PAIN',
      'NUMBNESS AND/OR TINGLING',
      'DULL, ACHING PAIN',
      'TIGHTNESS AND LIMITED MOVEMENT',
    ],
    type: 'Multibutton',
    qId: '06', // 9
    index: 9,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How does the sharp pain change?',
    sub_questions: [
      'Choose all that apply. The sensation gets worse when I...',
      'Choose all that apply. I get some relief from the sensation when I...',
    ],
    options: [
      'STAND UP',
      'SIT DOWN',
      'LEAN FORWARD',
      'LEAN BACK',
      'AM MOVING',
      'AM AT REST',
      'NONE OF THE ABOVE',
    ],
    type: 'Multibutton',
    qId: '06-SHARP-01', // 10
    index: 10,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How difficult has the sharp pain made your day-to-day activites?',
    options: [
      'Not at all difficult',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    type: 'Select',
    qId: '06-SHARP-02', // 11
    index: 11,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How does the shooting pain change?',
    sub_questions: [
      'Choose all that apply. The sensation gets worse when I...',
      'Choose all that apply. I get some relief from the sensation when I...',
    ],
    options: [
      'STAND UP',
      'SIT DOWN',
      'LEAN FORWARD',
      'LEAN BACK',
      'AM MOVING',
      'AM AT REST',
      'NONE OF THE ABOVE',
    ],
    type: 'Multibutton',
    qId: '06-SHOOTING-01', // 12
    index: 12,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt:
      'How difficult has the shooting pain made your day-to-day activites?',
    options: [
      'Not at all difficult',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    type: 'Select',
    qId: '06-SHOOTING-02', // 13
    index: 13,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Regarding the shooting pain',
    sub_questions: ['In which leg(s) do you feel it?'],

    options: ['RIGHT', 'LEFT', 'BOTH'],
    type: 'Selectbutton',
    qId: '06-SHOOTING-03', // 14
    index: 14,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Regarding the shooting pain',
    sub_questions: [
      'Does it travel to your feet?',
      'Is the pain there even when you are resting?',
    ],

    options: ['YES', 'NO'],
    type: 'Selectbutton',
    qId: '06-SHOOTING-04', // 15
    index: 15,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How does the numbness and/or tingling change?',
    sub_questions: [
      'Choose all that apply. The sensation gets worse when I...',
      'Choose all that apply. I get some relief from the sensation when I...',
    ],
    options: [
      'STAND UP',
      'SIT DOWN',
      'LEAN FORWARD',
      'LEAN BACK',
      'AM MOVING',
      'AM AT REST',
      'NONE OF THE ABOVE',
    ],
    type: 'Multibutton',
    qId: '06-NUMBNESS-01', // 16
    index: 16,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt:
      'How difficult has the numbness and/or tingling made your day-to-day activites?',
    options: [
      'Not at all difficult',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    type: 'Select',
    qId: '06-NUMBNESS-02', // 17
    index: 17,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Regarding the numbness and/or tingling',
    sub_questions: ['In which leg(s) do you feel it?'],

    options: ['RIGHT', 'LEFT', 'BOTH'],
    type: 'Selectbutton',
    qId: '06-NUMBNESS-03', // 18
    index: 18,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Regarding the numbness and/or tingling',
    sub_questions: [
      'Does it involve your feet?',
      'If the numbness and/or tingling involves your feet (select Not Applicable if it does not), does it travel up from your feet?',
      'If the numbness and/or tingling involves your feet (select Not Applicable if it does not), does it radiate down from your back?',
      'Do you have similar symptoms in your hands?',
      'Do you feel you have problems with your balance?',
      'Have you ever been diagnosed with Diabetes?',
      'Have you ever been diagnosed with a Vitamin B12 deficiency?',
    ],

    options: ['YES', 'NO', 'NOT APPLICABLE'],
    type: 'Selectbutton',
    qId: '06-NUMBNESS-04', // 19
    index: 19,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How does the dull, aching pain change?',
    sub_questions: [
      'Choose all that apply. The sensation gets worse when I...',
      'Choose all that apply. I get some relief from the sensation when I...',
    ],
    options: [
      'STAND UP',
      'SIT DOWN',
      'LEAN FORWARD',
      'LEAN BACK',
      'AM MOVING',
      'AM AT REST',
      'NONE OF THE ABOVE',
    ],
    type: 'Multibutton',
    qId: '06-DULL-01', // 20
    index: 20,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt:
      'How difficult has the dull, aching pain made your day-to-day activites?',
    options: [
      'Not at all difficult',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    type: 'Select',
    qId: '06-DULL-02', // 21
    index: 21,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'How does the tightness and limited movement change?',
    sub_questions: [
      'Choose all that apply. The sensation gets worse when I...',
      'Choose all that apply. I get some relief from the sensation when I...',
    ],
    options: [
      'STAND UP',
      'SIT DOWN',
      'LEAN FORWARD',
      'LEAN BACK',
      'AM MOVING',
      'AM AT REST',
      'NONE OF THE ABOVE',
    ],
    type: 'Multibutton',
    qId: '06-TIGHTNESS-01', // 22
    index: 22,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt:
      'How difficult has the tightness and limited movement made your day-to-day activites?',
    options: [
      'Not at all difficult',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    type: 'Select',
    qId: '06-TIGHTNESS-02', // 23
    index: 23,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Regarding the tightness',
    sub_questions: [
      'Are the symptoms worse in the morning when you first wake up?',
      'If symptoms are worse in the morning (select Not Applicable if not), do the symptoms get better over the course of the day?',
      'Does it feel like a pulled muscle?',
      'Does it get better with anti - inflammatory pain medication, such as Tylenol or Advil',
    ],

    options: ['YES', 'NO', 'NOT APPLICABLE'],
    type: 'Selectbutton',
    qId: '06-TIGHTNESS-03', // 24
    index: 24,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Have you taken medication for your symptoms?',
    options: [
      'Yes, I have taken over-the-counter relievers or anti-inflammatory medication(Advil, Tylenol, Aspirin,etc.)',
      'Yes, I have taken prescription pain relievers',
      'Yes, I have taken muscle relaxers',
      'No',
      'Not sure',
    ],
    type: 'Select',
    qId: '07', // 25
    index: 25,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Have you had similar pain before?',
    options: ['YES', 'NO', 'NOT SURE'],
    type: 'Selectbutton',
    qId: '08',
    index: 26,
  },
  {
    section: 2,
    section_name: 'Symptoms',
    prompt: 'Are you experiencing weakness in your arms and legs?',
    options: [
      'Yes, I am experiencing weakness on one sife of my body',
      'Yes, I am experiencing weakness on both sides of my body',
      'No',
      'Not sure',
    ],
    type: 'Select',
    qId: '09',
    index: 27,
  },

  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Are you experiencing any of the following?',
    options: [
      'Fever (temperatures higher than 101.5)',
      'Chills',
      'Shortness of breath',
      'Abdominal pain',
    ],
    type: 'Multibutton',
    qId: '10',
    index: 28,
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Are you experiencing any of the following?',
    options: [
      'Cannot control when I go to the bathroom',
      'Groin/scrotum pain',
      'Chest pain',
      'Nausea',
    ],
    type: 'Multibutton',
    qId: '11',
    index: 29,
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt:
      'Are you experiencing any pain near your kidneys (deep within one or both sides, just under ribs)?',
    options: ['Yes', 'No', 'Not Sure'],
    type: 'Selectbutton',
    qId: '12',
    index: 30,
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Regarding your symptoms...',
    sub_questions: [
      'Are you feeling light headed?',
      'Did you pass out?',
      'Have you noticed any blood in your urine?',
    ],
    options: ['Yes', 'No', 'Not Sure'],
    type: 'Selectbutton',
    qId: '13',
    index: 31,
  },
  {
    section: 3,
    section_name: 'Safety Check',
    prompt: 'Regarding your history...',
    sub_questions: [
      'Have you ever been diagnosed with cancer?',
      'Has any direct family member of your family been diagnosed with cancer',
      'Have you had your bone health checked recently?',
      'Are you currently sexually active?',
      'Do you currently smoke?',
      'Have you smoked in the past?',
    ],
    options: ['Yes', 'No', 'Not Sure'],
    type: 'Selectbutton',
    qId: '14',
    index: 32,
  },
];
export default Questions;
