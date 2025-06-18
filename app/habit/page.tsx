import React from "react";
import { Button } from "@/components/ui/button";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const initialHabits = ["Drink water", "Exercise", "Read"];

export default function HabitPage() {
  const [habits, setHabits] = React.useState(initialHabits);
  const [checks, setChecks] = React.useState<{
    [habit: number]: { [day: number]: boolean };
  }>({});

  const toggle = (hIndex: number, dIndex: number) => {
    setChecks((prev) => ({
      ...prev,
      [hIndex]: {
        ...prev[hIndex],
        [dIndex]: !prev[hIndex]?.[dIndex],
      },
    }));
  };

  const addHabit = () => {
    const name = prompt("Habit name?");
    if (name) setHabits((h) => [...h, name]);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Habit Tracker</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Habit</th>
            {days.map((d) => (
              <th key={d} className="border p-2">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, hIndex) => (
            <tr key={hIndex}>
              <td className="border p-2 text-left">{habit}</td>
              {days.map((_, dIndex) => (
                <td key={dIndex} className="border p-2 text-center">
                  <input
                    type="checkbox"
                    checked={!!checks[hIndex]?.[dIndex]}
                    onChange={() => toggle(hIndex, dIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Button onClick={addHabit}>Add Habit</Button>
      </div>
    </div>
  );
}
