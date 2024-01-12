const defaultCV = {
  name: 'John Smith',
  birthday: '1990 aug 25',
  job: 'Software Engineer',
  objective:
    'To obtain a challenging and rewarding position as a software engineer in a reputable company.',
  contactInfo: {
    address: ' 123 Main Street, New York, NY 10001',
    phone: '(123) 456-7890',
    email: 'john.smith@example.com',
  },
  skills: [
    'Proficient in Java, Python, C#, SQL, HTML, CSS, JavaScript, and other programming languages',
    'Experienced in developing web applications, desktop applications, mobile applications, and databases',
    'Familiar with agile methodologies, software development life cycle, and design patterns',
    'Excellent problem-solving, communication, and teamwork skills',
  ],
  education: [
    {
      department: 'Bachelor of Science in Computer Science, University of ABC',
      duration: {
        start: '2020',
        end: '2024',
      },
      gpa: '3.8/4.0',
    },
    {
      department: 'High School Diploma, XYZ High School',
      duration: {
        start: '2016',
        end: '2020',
      },
      gpa: '4.0/4.0',
    },
  ],

  Experience: [
    {
      position: ' Software Engineer Intern, Google',
      duration: {
        start: 'June 2023',
        end: 'August 2023',
      },
      achievements: [
        'Developed a web application using Python, Django, and Google Cloud Platform',
        'Implemented features such as user authentication, data visualization, and API integration',
        'Tested and debugged the application using unit testing, code review, and logging tools',
        'Collaborated with other interns and mentors using Git, Slack, and Jira',
      ],
    },
    {
      position: 'Software Developer, ABC Inc.',
      duration: {
        start: 'January 2022',
        end: 'May 2022',
      },
      achievements: [
        'Created a desktop application using C#, .NET, and SQL Server',
        'Designed and developed the user interface, business logic, and database layers',
        'Performed code analysis, optimization, and documentation',
        'Provided technical support and maintenance to the clients',
      ],
    },
  ],

  Projects: [
    {
      title: 'Online Shopping System, University of ABC',
      duration: {
        start: 'September 2022',
        end: 'December 2022',
      },
      achievements: [
        'Built an online shopping system using Java, Spring Boot, and MySQL',
        'Implemented functionalities such as product catalog, shopping cart, checkout, payment, and order management',
        'Applied security measures such as encryption, hashing, and SSL',
        'Deployed the system on AWS and Heroku',
      ],
    },
    {
      title: 'Chatbot, University of ABC',
      duration: {
        start: 'January 2021',
        end: 'April 2021',
      },
      achievements: [
        'Developed a chatbot using Python, TensorFlow, and NLTK',
        'Trained the chatbot on a dataset of customer service conversations',
        'Integrated the chatbot with a web interface using Flask and Bootstrap',
        "Evaluated the chatbot's performance using metrics such as accuracy, recall, and F1-score",
      ],
    },
  ],
  Awards: [
    { title: 'Google Code Jam, Finalist', date: '2023' },
    { title: 'Microsoft Certified: Azure Developer Associate', date: '2022' },
    { title: 'Oracle Certified Professional: Java SE 11 Developer', date: '2021' },
    { title: 'ACM International Collegiate Programming Contest, Regional Champion', date: '2020' },
  ],
  Hobbies: [
    'Reading, writing, and blogging about technology and software development',
    'Playing chess, sudoku, and video games',
    'Volunteering at local community centers and animal shelters',
  ],
};

export default defaultCV;
