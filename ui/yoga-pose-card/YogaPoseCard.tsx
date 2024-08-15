import { YogaPose } from '@/interfaces/yoga-pose';

interface Props {
  yogaPose: YogaPose;
}

export default async function YogaPoseCard({ yogaPose }: Props) {
  return (
    <div key={yogaPose.id}>{yogaPose.englishName}</div>
  );
}
