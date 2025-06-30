import { Experience, Project, Education, BlogPost, SkillCategory, Certificate } from './types';

export const CONTACT_INFO = {
  email: 'prateekm2112@gmail.com',
  linkedin: 'https://linkedin.com/in/prateekm2112',
  github: 'https://github.com/Prateek2112',
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Data Scientist',
    company: 'Model Earth (USA)',
    period: 'Sep 2024 - Present',
    description: [
      'Developed webpages by utilizing GitHub API, providing customizable views for users through interactive web interfaces.',
      'Built and maintained interactive dashboards on platforms such as Tableau and Power BI, delivering key insights through real-time visualizations on Anvil and Google Colab.',
    ],
    logoUrl: 'https://picsum.photos/seed/modelearth/200',
  },
  {
    role: 'Research Assistant - Data Science',
    company: 'Rutgers University',
    period: 'Jan 2023 - Jan 2024',
    description: [
      'Engineered a Python-based solution to extract and categorize text from newspaper PDFs into separate article blocks, employing PyPDF2 and Tesseract OCR.',
      "Developed an NLP-driven system to generate summaries using techniques like TextRank and spaCy's entity recognition.",
      'Designed and implemented a Python pipeline that converts video inputs into phrase-level timestamps, combining PyDub and Whisper.',
    ],
    logoUrl: 'https://picsum.photos/seed/rutgers/200',
  },
  {
    role: 'Data Scientist',
    company: 'Nihilent Limited',
    period: 'Jun 2020 - Jun 2022',
    description: [
      'Led the training of advanced ML models (Time Series, Random Forest, XGBoost) to forecast inventory management with 94% accuracy.',
      'Engineered a robust ETL pipeline leveraging ELK Stack and SQL to process 300,000+ data points daily.',
      'Leveraged K-Means and Hierarchical Clustering for customer segmentation, boosting marketing ROI by 18%.',
      'Conducted A/B tests on customer engagement initiatives, improving user interactions by 25%.',
    ],
    logoUrl: 'https://picsum.photos/seed/nihilent/200',
  },
  {
    role: 'Systems Engineer',
    company: 'Infosys Limited',
    period: 'Feb 2018 - Jul 2019',
    description: [
      'Created a web application with Flask and MySQL, reducing loading times by 20%.',
      'Deployed Data Pipelines using Apache Airflow and automated scripts to handle large datasets.',
      'Spearheaded data visualization dashboards using Power BI, resulting in 20% faster decision-making.',
      'Applied EDA and Feature Engineering on website traffic data, improving user retention by 8%.',
    ],
    logoUrl: 'https://picsum.photos/seed/infosys/200',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Email Spam Classifier',
    keyTargets: ['Spam Detection using SVM', 'NLP for text preprocessing', 'Achieve 95% accuracy'],
    keyLibraries: ['Scikit-learn', 'NLTK', 'Pandas'],
    programmingLanguage: 'Python',
    description:
      'Built an email spam detection system using Support Vector Machine (SVM), leveraging NLP techniques for text preprocessing and achieving 95% accuracy on a labeled dataset of 5,000+ messages.',
    imageUrl: 'https://picsum.photos/seed/spam/400/300',
  },
  {
    title: 'Automated Attendance System',
    keyTargets: ['Real-time facial recognition', 'Custom VGG19 model', '99.67% accuracy'],
    keyLibraries: ['TensorFlow', 'VGG19', 'Tkinter'],
    programmingLanguage: 'Python',
    description:
      'Designed a real-time attendance system utilizing facial recognition powered by a customized VGG19 model, achieving 99.67% accuracy and incorporating Google Sheets API to streamline tracking.',
    imageUrl: 'https://picsum.photos/seed/face/400/300',
  },
   {
    title: 'Interactive GitHub Dashboards',
    keyTargets: ['Customizable views', 'Interactive web interfaces', 'Real-time visualizations'],
    keyLibraries: ['GitHub API', 'Tableau', 'Power BI'],
    programmingLanguage: 'JavaScript',
    description: 'Developed webpages by utilizing GitHub API, providing customizable views for users through interactive web interfaces and dashboards.',
    imageUrl: 'https://picsum.photos/seed/github-dash/400/300',
  },
  {
    title: 'PDF Text Extraction & Categorization',
    keyTargets: ['Extract text from PDFs', 'Categorize article blocks', 'Reliable text recognition'],
    keyLibraries: ['PyPDF2', 'Tesseract OCR', 'spaCy'],
    programmingLanguage: 'Python',
    description: 'Engineered a Python-based solution to extract and categorize text from newspaper PDFs into separate article blocks.',
    imageUrl: 'https://picsum.photos/seed/pdf-extract/400/300',
  },
  {
    title: 'Inventory Forecasting',
    keyTargets: ['Predict inventory needs', 'Reduce stockouts by 10%', '94% forecast accuracy'],
    keyLibraries: ['Time Series', 'Random Forest', 'XGBoost'],
    programmingLanguage: 'Python',
    description: 'Led the training of advanced ML models to forecast inventory management with 94% accuracy, reducing stockouts by 10%.',
    imageUrl: 'https://picsum.photos/seed/inventory/400/300',
  },
  {
    title: 'Customer Segmentation',
    keyTargets: ['Segment customers by purchase patterns', 'Boost targeted marketing ROI by 18%'],
    keyLibraries: ['K-Means', 'Hierarchical Clustering', 'Scikit-learn'],
    programmingLanguage: 'Python',
    description: 'Leveraged K-Means and Hierarchical Clustering to segment customers based on purchasing patterns, resulting in an 18% boost in targeted marketing performance.',
    imageUrl: 'https://picsum.photos/seed/segmentation/400/300',
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Science - Computer Science',
    institution: 'Rutgers University-New Brunswick',
    period: 'Sep 2022 - May 2024',
    logoUrl: 'https://picsum.photos/seed/rutgers_edu/200',
  },
  {
    degree: 'Post Graduate Diploma - Data Science',
    institution: 'Praxis Business School',
    period: 'Jul 2019 - Apr 2020',
    logoUrl: 'https://picsum.photos/seed/praxis/200',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    title: 'The Algorithmic Mind: Building AI for Board Games',
    category: 'AI',
    excerpt: 'How Classical Algorithms still deliver the Most Potent Solutions in Game Development.',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/seed/blog1/400/300',
  },
  {
    title: 'Unlocking Neural Networks: Advanced Gradient Techniques',
    category: 'ML',
    excerpt: 'The fundamental algorithms still form the backbone of today’s neural network evolution.',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/seed/blog2/400/300',
  },
  {
    title: 'Twitter Sentiment Analysis: Building a ML Pipeline',
    category: 'NLP',
    excerpt: 'Unlocking the emotional pulse of Twitter topics, one tweet at a time, with natural language processing and machine learning.',
    readTime: '7 min read',
    imageUrl: 'https://picsum.photos/seed/blog3/400/300',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'R', 'SQL', 'HTML5', 'CSS', 'C++', 'Java', 'JavaScript'],
  },
  {
    title: 'Machine Learning',
    skills: ['Linear/Logistic Regression', 'Decision trees', 'Clustering', 'NLP', 'OpenCV', 'KNN', 'SVM'],
  },
  {
    title: 'Frameworks/Libraries',
    skills: ['Pandas', 'NumPy', 'Keras', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'NLTK', 'Seaborn', 'PySpark', 'Flask', 'Django'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Git', 'Docker', 'Power BI', 'Tableau', 'ELK Stack', 'Jupyter'],
  },
];


export const CERTIFICATIONS_DATA: Certificate[] = [
    {
        title: 'Machine Learning',
        issuer: 'Coursera',
        imageUrl: 'https://picsum.photos/seed/cert1/400/500'
    },
    {
        title: 'Google Data Analytics',
        issuer: 'Google',
        imageUrl: 'https://picsum.photos/seed/cert2/400/500'
    }
];
