const Questions =
    [
        {
            section: 1,
            section_name: "Basic Info",
            prompt: "Terms of Service"
        },
        {
            section: 1,
            section_name: "Basic Info",
            prompt: "Who are you answering this questionaire for?"
        },
        {
            section: 1,
            section_name: "Basic Info",
            prompt: "Let's get some basic info about you first."

        },
        {
            section: 1,
            section_name: "Basic Info",
            prompt: "What brings you here today?"
        },
        {
            section: 1,
            section_name: "Basic Info",
            prompt: "Do any of the following apply?"
        },
        {
            section: 1,
            section_name: "Basic Info",
            prompt: "Did your symptoms start after the incident?"
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "How long have you been experiencing these symptoms?",
            options: ["a few minutes", "a few hours", "a few days", "Weeks", "Month +"]
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "Choose the area(s) where you are feeling pain and/or discomfort",
            options: ["Neck", "Upper Back", "Middle Back", "Lower Back"]

        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "Where are you feeling pain/discomfort in your lower back?",
            options: ["ON THE LEFT", "IN THE MIDDLE", "ON THE RIGHT"]

        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "How would you describe the sensation you are feeling?",
            options: ["SHARP PAIN", "SHOOTING PAIN", "NUMBNESS AND/OR TINGLING", "DULL, ACHING PAIN", "TIGHTNESS AND LIMITED MOVEMENT"]
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "How does the dull, aching pain change?",
            sub_question: ["Choose all that apply. The sensation gets worse when I...", "Choose all that apply.I get some relief from the sensation when I..."],
            options: ["STAND UP", "SIT DOWN", "LEAN FORWARD", "LEAN BACK", "AM MOVING", "AM AT REST", "NONE OF THE ABOVE"]
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "How difficult has the dull, aching pain made your day-to-day activites?",
            options: ["Not at all difficult", "Somewhat difficult", "Very difficult", "Extremely difficult"],
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "Regarding the tightness",
            subquestion: ["Does it feel like a pulled muscle?", "Does it get better with anti-inflammatory pain medication, such as Tylenol or Advil"],
            options: ["YES", "NO", "NOT SURE"]
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "Have you taken medication for your symptoms?",
            options: ["Yes, I have taken over-the-counter relievers or anti-inflammatory medication(Advil, Tylenol, Aspirin,etc.)", "Yes, I have taken prescription pain relievers", "Yes, I have taken muscle relaxers", "No", "Not sure"],
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "Have you had similar pain before?",
            options: ["YES", "NO", "NOT SURE"]
        },
        {
            section: 2,
            section_name: "Symptoms",
            prompt: "Are you experiencing weakness in your arms and legs?",
            options: ["Yes, I am experiencing weakness on one sife of my body", "Yes, I am experiencing weakness on both sides of my body", "No", "Not sure"]
        },

        {
            section: 3,
            section_name: "Safety Check",
            prompt: "Are you experiencing any of the following?"
        },
        {
            section: 3,
            section_name: "Safety Check",
            prompt: "Are you experiencing any pain near your kidneys (deep within one or both sides, just under ribs)?"
        },
        {
            section: 3,
            section_name: "Safety Check",
            prompt: "Regarding your symptoms..."
        },
        {
            section: 3,
            section_name: "Safety Check",
            prompt: "Regarding your history..."
        },


    ]
export default Questions;
