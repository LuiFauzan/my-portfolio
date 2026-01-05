import Container from '@/components/layout/Container';
interface Skill {
    name: string;
    category: string;
    level: string;
    icon: string | null;
}
interface SkillProps {
    skills: Skill[];
}
export default function Skills({ skills }: SkillProps) {
    const groupedSkills = skills.reduce<Record<string, Skill[]>>(
        (acc, skill) => {
            if (!acc[skill.category]) {
                acc[skill.category] = [];
            }
            acc[skill.category].push(skill);
            return acc;
        },
        {},
    );
    const levelConfig: Record<
        string,
        { percent: number; color: string; label: string }
    > = {
        beginner: { percent: 33.3, color: 'bg-red-500', label: 'Beginner' },
        intermediate: {
            percent: 66.6,
            color: 'bg-yellow-500',
            label: 'Intermediate',
        },
        advanced: { percent: 99.9, color: 'bg-blue-500', label: 'Advanced' },
    };

    return (
        <section id="skills" className="bg-black py-24 text-white">
            <Container>
                <div className="space-y-12 px-2 md:px-15 lg:px-4">
                    {/* HEADER */}
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Skills & Tools
                        </h2>
                        <p className="text-gray-400">
                            Technologies and tools I use to build digital
                            products, from concept to production.
                        </p>
                        <p className="text-gray-400 flex gap-2">
                            <h1>Notice : </h1>
                            <ul>
                                <li>
                                    <span>Beginner</span>
                                    <div className='h-1.5 rounded-full bg-red-500' style={{ width:33.3 }}></div>
                                </li>
                                <li>
                                    <span>Intermediate</span>
                                    <div className='h-1.5 rounded-full bg-yellow-500' style={{ width:66.6 }}></div>
                                </li>
                                <li>
                                    <span>Advanced</span>
                                    <div className='h-1.5 rounded-full bg-blue-500' style={{ width:99.9 }}></div>
                                </li>

                            </ul>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(groupedSkills).map(
                            ([category, items]) => (
                                <div
                                    key={category}
                                    className="space-y-4 border border-white/10 p-6"
                                >
                                    {/* CATEGORY TITLE */}
                                    <h3 className="text-lg font-semibold capitalize">
                                        {category}
                                    </h3>

                                    {/* SKILL LIST */}
                                    <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                                        {items.map((skill) => {
                                            const levelKey =
                                                skill.level?.toLowerCase(); // 🔑
                                            const level = levelConfig[levelKey];

                                            if (!level) return null; // ⛑️ safety guard

                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="space-y-1"
                                                >
                                                    <div className="flex items-center text-sm">
                                                        <span>
                                                            {skill.name}
                                                        </span>

                                                        <span className="text-xs text-gray-400">
                                                            {/* {level.label} */}
                                                        </span>
                                                    </div>

                                                    <div className="h-1.5 lg:w-96 w-[209px] rounded-full bg-white/10">
                                                        <div
                                                            className={`h-1.5 rounded-full ${level.color}`}
                                                            style={{
                                                                width: `${level.percent}%`,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
