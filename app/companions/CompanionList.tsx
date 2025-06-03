import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Define the getSubjectColor function
const getSubjectColor = (subject: string): string => {
  const colorMap: Record<string, string> = {
    math: '#3B82F6',      // blue
    science: '#10B981',   // green
    english: '#F59E0B',   // yellow
    history: '#8B5CF6',   // purple
    art: '#EF4444',       // red
    music: '#06B6D4',     // cyan
    // Add more subjects as needed
  };
  
  return colorMap[subject.toLowerCase()] || '#6B7280'; 
};

interface Companion {
  id: string;
  name: string;
  subject: string;
  topic: string;
  duration: string;
}

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({ title, companions, classNames }: CompanionsListProps) => {
  return (
    <div>
      <article className={cn('companion-list', classNames)}>
        <h2 className="font-bold text-3xl">{title}</h2>
        <Table>
          <TableCaption>A list of your companions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Companion</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>  
            {companions && companions.length > 0 ? (
              companions.map(({ id, subject, name, topic, duration }) => (
                <TableRow key={id}>
                  <TableCell>
                    <Link href={`/companions/${id}`}>
                      <div className="flex items-center gap-2">
                        <div 
                          className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" 
                          style={{ backgroundColor: getSubjectColor(subject) }}
                        >
                          <Image 
                            src={`/icons/${subject}.svg`} 
                            alt={subject} 
                            width={35} 
                            height={35} 
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-bold  text-xl">{name}</p>
                          <p className="font-bold  text-sm">{topic}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <p className="font-medium"></p>
                          <p className="text-sm text-gray-500">{subject}</p>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>{subject}</TableCell>
                  <TableCell>{topic}</TableCell>
                  <TableCell>{duration}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500">
                  No companions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </article>
    </div>
  );
};

export default CompanionList;