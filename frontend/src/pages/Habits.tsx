import { useState } from 'react';
import NewHabit from '../components/habits/NewHabit';
import HabitCard, { type HabitCardData } from '../components/habits/HabitCard';
import HabitDetails from '../components/habits/HabitDetails';
import { BookOpen, Brain, Code2, Dumbbell } from 'lucide-react';

const habits: HabitCardData[] = [
  {
    title: 'Deep Reading',
    cadence: '45 min / day',
    streak: 12,
    icon: BookOpen,
    activity: [true, true, true, true, false, true, true],
    progress: {
      current: 31,
      goal: 45,
      unit: 'min',
    },
    completion: 86,
    nextGoal: 15,
    description: 'Engaging with complex texts to expand cognitive architecture and empathy.',
    impact: 142,
    month: 'October',
    monthlyActivity: [
      true, true, true, true, false, true, true,
      true, true, false, true, true, true, true,
      true, true, true, true, true, false, true,
      true, true, true, true, true, true, true,
      true, true, true, false, false, false, false,
    ],
    reflections: [
      {
        text: 'Finished The Master and His Emissary. Deep insights into brain lateralization.',
        date: 'Oct 24, 08:38 PM',
      },
      {
        text: 'Focus was lower today. Need to start 10 mins earlier.',
        date: 'Oct 22, 09:15 PM',
      },
    ],
  },
  {
    title: 'Functional Fitness',
    cadence: '60 min / session',
    streak: 5,
    icon: Dumbbell,
    activity: [true, false, true, true, true, true, true],
    progress: {
      current: 48,
      goal: 60,
      unit: 'min',
    },
    completion: 78,
    nextGoal: 7,
    description: 'Strength and conditioning sessions built around durable energy and movement quality.',
    impact: 86,
    month: 'October',
    monthlyActivity: [
      true, false, true, true, true, true, true,
      false, true, true, true, false, true, true,
      true, true, false, true, true, true, false,
      true, true, true, true, true, false, true,
      false, true, true, false, false, false, false,
    ],
    reflections: [
      {
        text: 'Squats felt strong after a longer warmup. Keep the mobility block.',
        date: 'Oct 25, 07:12 AM',
      },
      {
        text: 'Conditioning was rough, but recovery breathing helped.',
        date: 'Oct 23, 06:48 AM',
      },
    ],
  },
  {
    title: 'Meditation',
    cadence: '20 min / am',
    streak: 42,
    icon: Brain,
    activity: [true, true, true, true, true, true, true],
    progress: {
      current: 20,
      goal: 20,
      unit: 'min',
    },
    completion: 100,
    nextGoal: 45,
    description: 'Morning stillness practice for attention, emotional range, and calmer transitions.',
    impact: 64,
    month: 'October',
    monthlyActivity: [
      true, true, true, true, true, true, true,
      true, true, true, true, true, true, true,
      true, true, true, true, true, true, true,
      true, true, true, true, true, true, true,
      true, true, true, true, false, false, false,
    ],
    reflections: [
      {
        text: 'Noticed more patience before opening messages. That small pause matters.',
        date: 'Oct 26, 06:20 AM',
      },
      {
        text: 'Easy session today. Less chasing, more noticing.',
        date: 'Oct 24, 06:18 AM',
      },
    ],
  },
  {
    title: 'Algorithm Study',
    cadence: '1 hr / daily',
    streak: 8,
    icon: Code2,
    activity: [false, true, true, false, true, true, true],
    progress: {
      current: 40,
      goal: 60,
      unit: 'min',
    },
    completion: 71,
    nextGoal: 10,
    description: 'Deliberate problem solving to sharpen pattern recognition and implementation speed.',
    impact: 118,
    month: 'October',
    monthlyActivity: [
      false, true, true, false, true, true, true,
      true, true, false, true, true, false, true,
      true, false, true, true, true, true, true,
      false, true, true, true, false, true, true,
      true, true, false, false, false, false, false,
    ],
    reflections: [
      {
        text: 'Sliding window finally clicked after rewriting the invariant in plain English.',
        date: 'Oct 25, 10:05 PM',
      },
      {
        text: 'Tried to rush DP. Slowing down made the state transition obvious.',
        date: 'Oct 21, 09:44 PM',
      },
    ],
  },
];

const Habits = () => {
  const [selectedHabitTitle, setSelectedHabitTitle] = useState(habits[0].title);
  const selectedHabit = habits.find((habit) => habit.title === selectedHabitTitle) ?? habits[0];

  return (
    <main className="mx-auto grid w-full max-w-340 gap-5 px-5 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(330px,390px)] lg:items-start lg:px-8">
      <div className="min-w-0">
        <NewHabit />

        <section className="mt-5 grid gap-5 sm:grid-cols-2">
          {habits.map((habit) => (
            <HabitCard
              key={habit.title}
              {...habit}
              isActive={habit.title === selectedHabitTitle}
              onSelect={() => setSelectedHabitTitle(habit.title)}
            />
          ))}
        </section>
      </div>

      <HabitDetails habit={selectedHabit} />
    </main>
  );
};

export default Habits;
