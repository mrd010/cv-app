const defaultCV = {
  name: 'John Smith',
  birthday: '1990-5-20',
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

      start: '2020',
      end: '2024',

      gpa: '3.8',
    },
    {
      department: 'High School Diploma, XYZ High School',

      start: '2016',
      end: '2020',

      gpa: '4.0',
    },
  ],

  experience: [
    {
      position: 'Software Engineer Intern, Google',

      start: 'June 2023',
      end: 'August 2023',
    },
    {
      position: 'Software Developer, ABC Inc.',

      start: 'January 2022',
      end: 'May 2022',
    },
  ],

  projects: [
    {
      title: 'Online Shopping System, University of ABC',

      start: 'September 2022',
      end: 'December 2022',
    },
    {
      title: 'Chatbot, University of ABC',

      start: 'January 2021',
      end: 'April 2021',
    },
  ],
  awards: [
    { title: 'Google Code Jam, Finalist', date: '2023' },
    { title: 'Microsoft Certified: Azure Developer Associate', date: '2022' },
    { title: 'Oracle Certified Professional: Java SE 11 Developer', date: '2021' },
    { title: 'ACM International Collegiate Programming Contest, Regional Champion', date: '2020' },
  ],
};

export default defaultCV;
