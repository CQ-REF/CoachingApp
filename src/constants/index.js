import {
  lightGreen,
  deepOrange,
  orange,
  blue,
  indigo
} from "@material-ui/core/colors";
import { red } from "@material-ui/core/es/colors";

// Colors
export const TransitionColor = '#094492';
export const ClimateColor = '#0988ec';
export const MathColor = '#e55529';
export const EngagementColor = '#e99c2e';
export const InstructionColor = '#009365';
export const ListeningColor = '#4fd9b3';
export const SequentialColor = '#ffd300';
export const ACColor = '#6f39c4';

export const TransitionTypeColors = {
  lineColor: lightGreen[300],
  travelingColor: orange[400],
  waitingColor: deepOrange[400],
  routinesColor: blue[300],
  behaviorManagementColor: red['A200'],
  otherColor: indigo['A200'],
}


// Team Members
export const CC = {
  'name': 'Caroline Christopher, Ph.D.',
  'initials': 'CC',
  'role': 'Principal Investigator',
  'description': 'Dr. Christopher is the Principal Investigator on the project. ' + 
  'In 2018, she received a 4-year grant from the National Science Foundation (DRK-12-1813008) to develop ' +
  'a web-based coaching tool that guides instructional leaders to collect objective observation data and ' +
  'then links those data with coaching practices.  Her current and previous research experience has included ' +
  'working collaboratively with community partners to implement data-driven change in classroom practices to ' +
  'promote high-quality early education programs. She is currently a Research Assistant Professor at Vanderbilt University.',
  'link' : 'https://peabody.vanderbilt.edu/bio/caroline-christopher',
  'email' : 'caroline.h.christopher@vanderbilt.edu'
};
export const DM = {
  'name': 'Deanna Meador, M.A.',
  'initials': 'DM',
  'role': 'Innovation Garage Director',
  'description': 'Ms. Meador is the Associate Director of Vanderbilt University’s ' +  
  'Center for Innovation, the Wond’ry, and serves as a content developer and liaison between the education ' + 
  'research team and the Wond’ry interns. Her prior background working with the Peabody Research Office, ' +
  'in-depth knowledge of their data collection measures and methods, as well as technical development and ' + 
  'user interface skills makes for a valuable addition to the project team.',
  'link': 'https://www.vanderbilt.edu/thewondry/person/deanna-meador/'
};
export const KN = {
  'name': 'Katherine Newman, Ph.D.',
  'initials': 'KN',
  'role': 'Research Coordinator',
  'description': 'Dr. Newman is the Research Coordinator on this project.  She comes to us with both a ' +
  'researcher and a coaching lens as she received her doctorate in Teaching and Learning from Vanderbilt ' +
  'University and has worked as an instructional coach for Metro Nashville Public Schools.  She was previously ' +
  'one of our coaching partners and has classroom experience as a kindergarten and fifth grade teacher, which ' +
  'gives her the ability to understand the perspectives of the end users for this tool. At the same time, she ' +
  'has a rich understanding of empirical research that informs the development of the tool.'
};
export const CS = {
  'name': 'Clare Speer',
  'initials': 'CS',
  'role': 'Software Developer',
  'description': 'Ms. Speer is a Software Developer on this project.  She ' + 
  'contributes significantly to both the research team and to the engineering team with her background ' + 
  'in statistics and programming.  This combination of skills allows her to understand the language ' +
  'of both groups and provides continuity over the course of the project in terms of the programming ' +
  'required to implement the coaching tool’s functionality.'
};



// Project Advisors
export const DF = {
  'name': 'Dale Farran, Ph.D.',
  'role': 'Former Project Affiliate, Early Childhood Content Expert',
  'job': 'Professor of Teaching and Learning',
  'affiliation': 'Vanderbilt University'
};
export const MF = {
  'name': 'Mary Fuhs, Ph.D.',
  'role': 'Director of Pilot Study',
  'job': 'Assistant Professor of Psychology',
  'affiliation': 'University of Dayton'
};
export const PM = {
  'name': 'Percival Matthews, Ph.D.',
  'role': 'Advisory Board Member',
  'job': 'Assistant Professor of Educational Psychology',
  'affiliation': 'University of Wisconsin'
};
export const LM = {
  'name': 'Laura Moore, M.P.P.',
  'role': 'Advisory Board Member',
  'job': 'Deputy Policy Director for Opportunity Insights',
  'affiliation': 'Harvard University'
};
export const SJW = {
  'name': 'Sandra Jo Wilson, Ph.D.',
  'role': 'Pilot Study Independent Evaluator',
  'job': 'Principal Associate, Social and Economic Policy',
  'affiliation': 'Abt Associates'
};
export const LW = {
  'name': 'Lisa Wiltshire, M.S.',
  'role': 'Advisory Board Member',
  'job': 'Policy Director',
  'affiliation': 'Tennesseans for Quality Early Education'
};
export const JW = {
  'name': 'Jules White, Ph.D.',
  'role': 'Innovation Garage Advisor',
  'job': 'Associate Professor of Computer Science',
  'affiliation': 'Vanderbilt University'
};
export const DS = {
  'name': 'Doug Schmidt, Ph.D.',
  'role': 'Innovation Garage Advisor',
  'job': 'Professor of Computer Science and Computer Engineering',
  'affiliation': 'Vanderbilt University'
};

// Coaching Questions
export const CoachingQuestions = {
  'Transition': {
    'LineQuestions': [
      {
        'name': "TransitionPanel1A",
        'title': "Line-up Process",
        'text': [
          "How do you like to transition children from " +
          "where they are in the classroom to the line-up area?",
          "Do you prefer to line them up individually or send them in groups?"
        ]
      },
      {
        'name': "TransitionPanel1B",
        'title': "Child Engagement",
        'text': [
          "Talk about any types of activities that help children transition during the line-up process.",
          "How do you all decide on what transition activities to do with children?"
        ]
      },
      {
        'name': "TransitionPanel1C",
        'title': "Causes for Waiting",
        'text': [
          "Talk about what children do when they get in line. Do they have designated spots to stand on?",
          "Do certain children have more difficulty lining up? What might help them?"
        ]
      }
    ],
    'TravelingQuestions': [
      {
        'name': "TransitionPanel2A",
        'title': "Travel Destinations",
        'text': [
          "Let's think about the transitions that children make outside the classroom. " +
          "What's outside of your control and what do you have some control over?",
          "Example: We have to walk to the playground on the other side of the building, but we could " +
          "get creative about ways to reduce time spent on bathroom breaks in the hallway."
        ]
      },
      {
        'name': "TransitionPanel2B",
        'title': "Practice and Positive Reinforcement",
        'text':  [
          "Talk about how you reinforce children's successes during transitions." +
          "What's the most effective way you encourage them?"
        ]
      },
      {
        'name': "TransitionPanel2C",
        'title': "Revisiting Routines and Expectations",
        'text': [
          "Talk about some of the transition skills children may need to relearn or practice." +
          "What have you been noticing lately about their challenges during " +
          "transitions outside the classroom?"
        ]
      },
      {
        'name': "TransitionPanel2D",
        'title': "Individualized Support",
        'text': [
          "What are some strategies that help children " +
          "with challenging behavior during long transitions outside the classroom?" +
          "What do children with challenging behavior need to be successful? What motivates " +
          "them at other times during the day?"
        ]
      },
      {
        'name': "TransitionPanel2E",
        'title': "Child Engagement",
        'text': [
          "How do you engage children during walks to other parts of the school building " +
          "(e.g., pretending to walk like an animal)?",
          "Since you can't get around walking that way to the playground, talk about " + 
          "strategies you've used in the past to keep the children engaged. What works?"
        ]
      }
    ],
    'WaitingQuestions': [
      {
        'name': "TransitionPanel3A",
        'title': "Preparation of Materials",
        'text': [
          "Talk about the best time of the day that you've found for gathering materials for " +
          "lessons and activities.",
          "Are there challenging times as well?"
        ]
      },
      {
        'name': "TransitionPanel3B",
        'title': "Teacher Teamwork",
        'text': [
          "How do you and your co-teacher help each other with lesson prep and organization? " +
          "In your experience, what systems seem to work best?",
          "If you could try something new around getting ready for a lesson, what would it be?"
        ]
      },
      {
        'name': "TransitionPanel3C",
        'title': "Child Engagement",
        'text': [
          "Talk about the times of the day that you feel the most organized and prepared.",
          "What are the differences in children's behavior when you feel prepared?"
        ]
      },
      {
        'name': "TransitionPanel3D",
        'title': "Classroom Organization",
        'text': [
          "Talk about how the classroom environment and layout affect children's waiting time.",
          "Where are materials for different activities stored and how quickly can children access materials?"
        ]
      }
    ],
    'RoutinesQuestions': [
      {
        'name': "TransitionPanel4A",
        'title': "Types of Routines",
        'text': [
          "Talk about all the different classroom routines that happen each day. " +
          "Which types are more challenging for children? Why might that be?",
          "Are there one or two classroom routines that you want to focus on? " +
          "On a perfect day, what might those routines look like?"
        ]
      },
      {
        'name': "TransitionPanel4B",
        'title': "Classroom Organization",
        'text': [
          "Talk about the relationship between classroom environment/layout and children's transition time.",
          "Do children spend too much time cleaning up materials? What helps them know where to " +
          "put materials? How does the amount of materials affect clean-up time?",
          "What visuals or other strategies help them during classroom routines?"
        ]
      },
      {
        'name': "TransitionPanel4C",
        'title': "Centers",
        'text': [
          "Talk about the routines and systems that help children choose centers " +
          "and move between centers. What's going well this year?",
          "How are children doing with a) choosing their first center, " +
          "b) leaving one center and going to another one, c) sticking with an activity once they begin?"
        ]
      },
      {
        'name': "TransitionPanel4D",
        'title': "Teacher Teamwork",
        'text': [
          "Talk about how you and your co-teacher work together to make transitions go smoothly.",
          "Do you have designated roles for transition times throughout the day?"
        ]
      },
      {
        'name': "TransitionPanel4E",
        'title': "Number of Transitions",
        'text': [
          "If you could get rid of one transition, what would it be? Is there a " +
          "time of day when you feel like you're constantly reminding children where they should be?", 
          "Look at the daily schedule for any transitions that could be changed or removed."
        ]
      }
    ],
    'BehaviorQuestions': [
      {
        'name': "TransitionPanel5A",
        'title': "Communicating Expectations",
        'text': [
          "Talk about the types of strategies (verbal, visual, gesture) you like to use to " +
          "communicate behavior expectations before, during, and/or after transitions?",
          "Do children know where to go and what to do during a transition? How do they know?"
        ]
      },
      {
        'name': "TransitionPanel5B",
        'title': "Individualized Support",
        'text': [
          "Talk about children who might benefit from individualized strategies to help them during transitions.",
          "What has worked in the past? What have you been thinking about trying?"
        ]
      },
      {
        'name': "TransitionPanel5C",
        'title': "Teacher Teamwork",
        'text': [
          "Talk about how you and the co-teacher work together to teach and reinforce behavior " +
          "expectations during transitions. What has worked? What felt less effective?",
          "How do you decide which member of the teaching team leads the different transitions " +
          "across the day?"
        ]
      },
      {
        'name': "TransitionPanel5D",
        'title': "Reinforcing Behaviors",
        'text': [
          "Talk about how you let children know when they do a transition well. " +
          "What are you looking for so that you can give them positive reinforcement?",
          "How do you respond when they don't meet behavior expectations during transitions?"
        ]
      },
      {
        'name': "TransitionPanel5E",
        'title': "Consistency of Routines",
        'text': [
          "Talk about the challenges you and/or children experience during transitions.",
          "Which part of the transition is the most challenging for children? Why might that be?"
        ]
      }
    ]
  },
  'Climate': {
    'Approvals': [
      {
        'name': 'ClimatePanel1A',
        'title': 'Positive Reinforcement',
        'text': [
          'Talk about the types of child behaviors you typically look for and praise.',
          'What effect does your praise have on children and their learning?'
        ]
      },
      {
        'name': 'ClimatePanel1B',
        'title': 'Time of Day',
        'text': [
          'Talk about times during your schedule (whole group, center time, etc.) ' +
          'that you use behavior approving as a strategy for behavior management.',
          'How does it work in your experience?'
        ]
      },
      {
        'name': 'ClimatePanel1C',
        'title': 'Effort and Ability',
        'text': [
          'Talk about the behaviors you look for when you want to praise children\'s behavior.',
          'When do you decide to praise children\'s effort versus their skill level?'
        ]
      },
      {
        'name': 'ClimatePanel1D',
        'title': 'Specific Children',
        'text': [
          'Talk about how you use praise with different children throughout the day.',
          'Are there children that you worry about--those kids who may not seek out attention?'
        ]
      },
      {
        'name': 'ClimatePanel1E',
        'title': 'Challenging Behavior',
        'text': [
          'It\'s sometimes difficult to find moments to praise children with challenging behavior--' +
          'how do you find ways to praise even the smallest accomplishments?',
          'How do you see past challenging behaviors and give all children positive attention?'
        ]
      },
    ],
    'Redirections': [
      {
        'name': 'ClimatePanel2A',
        'title': 'Activity Type',
        'text': [
          'Are there certain activities during which you feel like you\'re redirecting ' +
          'the children more often? Why might that be?',
          'Do you feel like your redirections are over smaller or more serious issues?'
        ]
      },
      {
        'name': 'ClimatePanel2B',
        'title': 'Time of Day',
        'text': [
          'Think about a time of day in which children really know the classroom ' +
          'routines. What strategies did you use to get them to this point?',
          'Talk about how those strategies could help them learn routines during other ' + 
          'times of the day that feel more stressful.'
        ]
      },
      {
        'name': 'ClimatePanel2C',
        'title': 'Revisiting Expectations',
        'text': [
          'Are there any redirections you give to children that you feel are repetitive?',
          'Talk about some strategies you could use before activities that are challenging ' +
          'for children (modeling what you want the children to do, asking them to practice, ' +
          'then giving specific praise, etc.)?'
        ]
      },
      {
        'name': 'ClimatePanel2D',
        'title': 'Specific Children',
        'text': [
          'Talk about children who might benefit from more strategies (like visuals, ' +
          'a buddy system, or small group/1:1 teaching) to help them with behavior expectations.',
          'Do certain children require more redirections than others? What are their challenges?',
          'In your experience, what strategies might suppport them?'
        ]
      },
    ],
    'Disapprovals': [
      {
        'name': 'ClimatePanel3A',
        'title': 'Activity Type',
        'text': [
          'Think about the type of activity when disapprovals are more frequent.',
          'What might be the cause of children\'s behaviors during whole group, small ' +
          'group, or centers that lead to disapprovals?',
        ]
      },
      {
        'name': 'ClimatePanel3B',
        'title': 'Time of Day',
        'text': [
          'Talk about times of day (arrival, after lunch, dismissal, etc.) that are ' +
          'more challenging for children.',
          'What strategies have you used that help children during these times of day?'
        ]
      },
      {
        'name': 'ClimatePanel3C',
        'title': 'Challenging Behavior',
        'text': [
          'We all know of child behaviors that get under our skin and lead to anger and irritation. ' +
          'How can we reframe those behaviors?',
          'Example: You might reframe hitting with "perhaps the child hits frequently because he ' +
          'wants attention from peers but doesn\'t know how to get it any other way."',
          'What can we do to proactively teach children the skills that they need to reduce ' +
          'these behaviors?'
        ]
      },
    ]
  }
}