import React from 'react';
import HowItWorksImage from '../assets/HowItWorks.svg';

const classes = {
  LandingMain: 'w-full h-screen flex flex-col',
  Introduction: 'w-full flex flex-col justify-center items-center gap-4',
  Exalyte: 'text-[4rem] font-bold text-[#007BFF] -mb-2 ml-1',
  sentence1: 'text-[2rem] font-medium text-center',
  AI: 'text-[#007BFF]',
  sentence2: 'text-[1.5rem] font-medium text-center leading-1',
  buttons: 'flex gap-2 mt-4',
  button1: 'border-2 p-2  rounded-2xl ',
  button2: 'bg-[#007BFF] text-white p-2 rounded-2xl',
  features: 'w-full flex flex-col justify-center items-center gap-4 mt-16',
  featuresGrid: 'flex flex-wrap justify-center gap-8 mx-4',
  featuresCard: 'flex flex-col gap-4 max-w-[540px]   rounded-lg',
  featureTitle: 'text-[2.5rem] font-bold text-[#007BFF]',
  featuresTitle: 'text-[1.7rem] font-bold leading-1 text-[#007BFF]',
    HowItWorks: 'w-full flex flex-col justify-center items-center gap-4 mt-16',
    HowItWorksTitle: 'text-[2.5rem] font-bold text-[#007BFF]',
    HowItWorksImage: 'max-w-[500px] -ml-12 mb-4'
};

const features = [
  {
    title: 'Instant Test Creation',
    description:
      "Create tests in minutes by simply uploading your document. Exalyte's AI analyzes your content and generates questions instantly—saving you time and effort",
  },
  {
    title: 'Customizable Questions',
    description:
      'Edit, remove, or add questions to suit your teaching style. Choose from multiple question types, including multiple-choice, short answers, and essay questions, for a tailored assessment.',
  },
  {
    title: 'AI-Powered Grading & Feedback',
    description:
      "Let Exalyte's AI evaluate text-based answers, providing accurate grading and personalized feedback for students. Focus on teaching, while Exalyte handles the assessment.",
  },
  {
    title: 'Scheduling and Control',
    description:
      'Set your test’s start time or go live immediately. Control the duration and availability, so students can complete assessments on your schedule.',
  },
];

const Landing = () => {
  return (
    <div className={classes.LandingMain}>
      <div className={classes.Introduction}>
        <div className={classes.Exalyte}>Exalyte</div>
        <div className={classes.text}>
          <div className={classes.sentence1}>
            Create Tests Instantly with <span className={classes.AI}>AI-Powered</span> Precision.
          </div>
          <div className={classes.sentence2}>
            Generate, Customize, and Deliver Tests in Minutes. Accessible for
            <br /> Teachers, Easy for Students.
          </div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.button1}>Join test</div>
          <div className={classes.button2}>Get Started</div>
        </div>
      </div>
      <div className={classes.features}>
        <div className={classes.featureTitle}>Features</div>
        <div className={classes.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={classes.featuresCard}>
              <div className={classes.featuresTitle}>{feature.title}</div>
              <div className='text-[20px]'>{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.HowItWorks}>
        <div className={classes.HowItWorksTitle}>How It Works</div>
        <div className={classes.HowItWorksImage}>
            <img src={HowItWorksImage} className='object-contain max-w-[500px]'/>
        </div>
      </div>
    </div>
  );
};

export default Landing;