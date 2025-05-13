enum Members {
    "Pikachu" = "피카츄",
    "Raichu" = "라이츄",
    "Charmander" = "파이리",
    "Squirtle" = "꼬부기",
    "Butterfree" = "버터플",
    "Slowbro" = "야도란",
    "Pidgeotto" = "피존투",
    "Aerodactyl" = "프테라",
    "Snorlax" = "잠만보",
}

interface Member {
    name: Members;
    hasLeaderExperience: boolean;
}

// 모든 멤버와 팀장 경험 메타데이터
const allMembers: Member[] = [
    { name: Members.Pikachu, hasLeaderExperience: false },
    { name: Members.Raichu, hasLeaderExperience: false }, // 라이츄: 특별 팀
    { name: Members.Charmander, hasLeaderExperience: false },
    { name: Members.Squirtle, hasLeaderExperience: false },
    { name: Members.Butterfree, hasLeaderExperience: false },
    { name: Members.Slowbro, hasLeaderExperience: true },
    { name: Members.Pidgeotto, hasLeaderExperience: false },
    { name: Members.Aerodactyl, hasLeaderExperience: false },
    { name: Members.Snorlax, hasLeaderExperience: true },
];

// 배열 섞기 함수
function shuffle<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// 팀장 선정 (팀장 경험이 없는 멤버 중에서 랜덤)
function pickLeader(candidates: Member[]): Member {
    const nonLeaders = candidates.filter(m => !m.hasLeaderExperience);
    if (nonLeaders.length === 0) {
        throw new Error("팀장 경험이 없는 후보가 없습니다.");
    }
    const idx = Math.floor(Math.random() * nonLeaders.length);
    return nonLeaders[idx];
}

// 팀 구성 및 팀장 선출
function createTeams(): { leader: Member; members: Member[] }[] {
    // 1팀: 라이츄 단독
    const team1 = allMembers.find(m => m.name === Members.Raichu)!;

    // 나머지 멤버들
    const pool = allMembers.filter(m => m.name !== Members.Raichu);
    const shuffled = shuffle(pool);

    // 2, 3팀: 각각 4명씩
    const team2Members = shuffled.slice(0, 4);
    const team3Members = shuffled.slice(4, 8);

    // 팀장 선출
    const team2Leader = pickLeader(team2Members);
    const team3Leader = pickLeader(team3Members);

    return [
        { leader: team1, members: [team1] },
        { leader: team2Leader, members: team2Members },
        { leader: team3Leader, members: team3Members },
    ];
}

// CLI 출력 (테이블 형태)
function printTeams() {
    const teams = createTeams();

    const tableData = teams.map((team, idx) => ({
        팀: `${idx + 1}팀`,
        팀장: team.leader.name,
        팀원: team.members.map(m => m.name).join(", "),
    }));

    console.table(tableData);
}

// 실행
printTeams();