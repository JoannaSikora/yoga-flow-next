import { promises as fs } from 'fs';
import YogaPoseCard from '@/ui/yoga-pose-card/YogaPoseCard';
import { YogaPosesList } from '@/app/interfaces/yoga-pose';

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
  const file = await fs.readFile(process.cwd() + '/assets/yoga-poses.json', 'utf8');
  const { yogaPoses }: YogaPosesList = JSON.parse(file);
  const filteredYogaPoses = query ? yogaPoses.filter(pose => pose.level === query) : yogaPoses;

  return (
    <>
      {filteredYogaPoses.map(yogaPose => (
        <YogaPoseCard
          key={yogaPose.id}
          yogaPose={yogaPose} />
      ))}
    </>
  );
}
