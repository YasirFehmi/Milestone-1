import Head from 'next/head';
import PersonalInfo from './components/PersonalInfo';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>John Doe - CV</title>
      </Head>
      <main>
        <PersonalInfo />
        <EducationSection />
        <SkillsSection />
      </main>
    </div>
  );
}
