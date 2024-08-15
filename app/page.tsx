import { promises as fs } from 'fs';
import YogaPoseCard from '@/ui/yoga-pose-card/YogaPoseCard';
import { YogaPosesList } from '@/interfaces/yoga-pose';
import path from 'node:path';
import styles from './page.module.css';

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Home({
  searchParams
}: Props) {
  const query = searchParams?.query || '';
  const file = await fs.readFile(path.join(process.cwd() + '/public/assets/yoga-poses.json'), 'utf8');
  const { yogaPoses }: YogaPosesList = JSON.parse(file);
  const filteredYogaPoses = query ? yogaPoses.filter(pose => pose.level === query) : yogaPoses;

  return (
    <div className={styles.wrapper}>
      {filteredYogaPoses.map(yogaPose => (
        <YogaPoseCard
          key={yogaPose.id}
          yogaPose={yogaPose} />
      ))}
    </div>
  );
}
