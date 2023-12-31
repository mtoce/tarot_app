// constants/index.js

export const WhyBlurb = {
    first: "Through Tarot, you're encouraged to explore the depths of your psyche and confront the questions that linger in your mind. Each card's symbolism and interpretation provide a unique perspective, guiding you toward greater self-awareness and understanding.",
    second: "This ancient practice encourages you to trust your intuition, fostering a stronger connection to your inner wisdom. As you engage in Tarot readings, you'll find that it not only helps you make decisions but also encourages personal growth by promoting mindfulness and self-reflection.",
    third: "Incorporating Tarot into your life can be a transformative and empowering experience, enabling you to navigate life's twists and turns with newfound clarity and purpose. So, whether you're seeking guidance, inner peace, or simply a way to connect more deeply with yourself, Tarot reading is a wonderful and illuminating journey to embark upon.",
}                       

export const features = [
    {
        id: "feature-1",
        icon: "/icons/mirror.svg",
        iconLink: "https://thenounproject.com/icon/mirror-4142792/",
        title: "Mirrors",
        content:
        "Tarot cards are mirrors, reflecting your inner world, so you can see your thoughts and emotions with newfound clarity and understanding.",
    },
    {
        id: "feature-2",
        icon: "/icons/harmony.svg",
        iconLink: "https://thenounproject.com/icon/alignment-4653397/",
        title: "Harmony",
        content:
        "Reading tarot promotes harmony within by helping to clarify values, goals, and choices that resonate with one's authentic self.",
    },
    {
        id: "feature-3",
        icon: "/icons/connection.svg",
        iconLink: "https://thenounproject.com/icon/connection-2108637/",
        title: "Connection",
        content:
        "Tarot anchors you in the present and strengthens your connection to the world by harmonizing your internal and external experiences.",
    },
    {
        id: "feature-4",
        icon: "/icons/peace.svg",
        icon1: "icons/peace.svg",
        icon2: "icons/peace2.svg",
        iconLink: "https://thenounproject.com/icon/peace-6139949/",
        title: "Peace",
        content:
        "Readings cultivate inner peace by providing a meditative space to explore life's complexities and find solace in the wisdom of the cards.",
    },
  ];

export const TarotTestimonials = {
    First: {
        name: "Tasha Jade",
        quote: "I believe that Tarot is a deep practice. It helps us uncover the mysteries of this lifetime and to seek out Truth.",
        source: "https://www.dailymagic.ca/post/how-reading-tarot-changed-my-life",
    },
    Second: {
        name: "Miranda Cook",
        quote: "I’ve changed more lives as a tarot card reader than as a social worker",
        source: "https://metro.co.uk/2022/09/18/ive-changed-more-lives-as-a-tarot-card-reader-than-as-a-social-worker-17379620/",
    },
    Third: {
        name: "3rd person",
        quote: "",
        source: "",
    }
}

export const Cards = { 
    MajorArcana: {
        Fool: {
            name: "The Fool",
            rank: '0',
            number: 0,
            upright: '(Beginnings, innocence, spontaneity, opportunity  free-spirited)',
            reversed: '(Risk-taking, false-start,recklessness, holding back, apathy, ignoring an opportunity)',
            description: 'The Fool description here...',
            rev_description: 'The Fool reversed description here...',
            suit: 'Major',
        },
        Magician: {
            name: "The Magician",
            rank: 'I',
            number: 1,
            upright: '(Manifestation, inspiration, empowered thoughts, diplomacy, communication)',
            reversed: '(Delays, deception, disempowered thoughts, manipulation, avoidance)',
            description: 'The Magician description here...',
            suit: 'Major',
        },
        HighPriestess: {
            name: "The High Priestess",
            rank: 'II',
            number: 2,
            upright: '(Intuition, divine feminine, dreams, subconcious mind)',
            reversed: '(Secrets, withdrawal, silence, disconnection)',
            description: 'The High Priestess description here...',
            suit: 'Major',
        },
        Empress: {
            name: "The Empress",
            rank: 'III',
            number: 3,
            upright: '(Femininity, fertility, beauty, nurture, abundance, peace, security, creativity)',
            reversed: '(Creative block, dependence, imbalance, insecurity, relationships suffer)',
            description: 'The Empress description here...',
            suit: 'Major',
        },
        Emperor: {
            name: "The Emperor",
            rank: 'IV',
            number: 4,
            upright: '(Masculinity, authority, structure, protection, support, order)',
            reversed: '(Domination, abuse of power, excessive control, lack of discipline, inflexibility, greed)',
            description: 'description here...',
            suit: 'Major',
        },
        Hierophant: {
            name: "The Hierophant",
            rank: 'V',
            number: 5,
            upright: '(Tradition, orthodoxy, conformity, spiritual wisdom, unity, alliance, commitment) )',
            reversed: '(Segregation, radical ideals, freedom, challenging the status quo, misleading a group)',
            description: 'description here...',
            suit: 'Major',
        },
        Lovers: {
            name: "The Lovers",
            rank: 'VI',
            number: 6,
            upright: '(Love, harmony, attraction, bonding, alignment of values, decisions, maturity)',
            reversed: '(Self-love, disharmony, repulsion, misalignment of values, lust over love)',
            description: 'description here...',
            suit: 'Major',
        },
        Chariot: {
            name: "The Chariot",
            rank: 'VII',
            number: 7,
            upright: '(Action, progress, energy, determination, victory, mastery, journey)',
            reversed: '(Opposition, roadblocks, lack of direction, confusion, scattered energy, failure)',
            description: 'description here...',
            suit: 'Major',
        },
        Strength: {
            name: "Strength",
            rank: 'VIII',
            number: 8,
            upright: '(Strength, courage, patience, compassion, resilience, physical strength, health)',
            reversed: '(Fear, self-doubt, impatience, cowardice, physical weakness, avoiding a challenge)',
            description: 'description here...',
            suit: 'Major',
        },
        Hermit: {
            name: "The Hermit",
            rank: 'IX',
            number: 9,
            upright: '(Introspection, solitude, reflection, inner guidance, self-healing)',
            reversed: '(Isolation - unwanted/unexpected, withdrawal, loneliness, lack of support)',
            description: 'description here...',
            suit: 'Major',
        },
        WheelOfFortune: {
            name: "The Wheel of Fortune",
            rank: 'X',
            number: 10,
            upright: '(Fate, destiny, karma, good luck, change, opportunity)',
            reversed: '(Resistance to change, bad luck, breaking cycles, disruption, disconnection)',
            description: 'description here...',
            suit: 'Major',
        },
        Justice: {
            name: "Justice",
            rank: 'XI',
            number: 11,
            upright: '(Justice, fairness, truth, balance, law, cause & effect, accountability)',
            reversed: '(Unfairness, lack of accountability, dishonesty, miscarriage of justice)',
            description: 'description here...',
            suit: 'Major',
        },
        HangedMan: {
            name: "The Hanged Man",
            rank: 'XII',
            number: 12,
            upright: '(Suspension, time, waiting, transition, reversals, sacrifice)',
            reversed: '(Stalling, indecision, delays, resistance, wasting time, time for action)',
            description: 'description here...',
            suit: 'Major',
        },
        Death: {
            name: "Death",
            rank: 'XIII',
            number: 13,
            upright: '(Endings, change, transformation, transition, letting go)',
            reversed: '(Resistance to change, holding on, anger, regret, shock, stress)',
            description: 'description here...',
            suit: 'Major',
        },
        Temperance: {
            name: "Temperance",
            rank: 'XIV',
            number: 14,
            upright: '(Balance, moderation, reconciliation, adjustment)',
            reversed: '(Imbalance, excess, re-alignment, living in past / future, feeling overwhelmed)',
            description: 'description here...',
            suit: 'Major',
        },
        Devil: {
            name: "The Devil",
            rank: 'XV',
            number: 15,
            upright: '(Addiction, temptation, restriction, lust, shadow self, anger, materialism)',
            reversed: '(Releasing limiting beliefs, breaking a (bad) habit, detachment, confronting dark thoughts)',
            description: 'description here...',
            suit: 'Major',
        },
        Tower: {
            name: "The Tower",
            rank: 'XVI',
            number: 16,
            upright: '(Upheaval, sudden change, chaos, revelation, awakening, destruction, illumination, shock)',
            reversed: '(Fear of change, averting disaster, personal transformation, self-blame for events out of your control)',
            description: 'description here...',
            suit: 'Major',
        },
        Star: {
            name: "The Star",
            rank: 'XVII',
            number: 17,
            upright: '(Hope, faith, purpose, renewal, healing, wishes, inspiration, guidance)',
            reversed: '(Despair, disbelief, uncertainty, lack of faith, lack of perseverance, lack of support)',
            description: 'description here...',
            suit: 'Major',
        },
        Moon: {
            name: "The Moon",
            rank: 'XVIII',
            number: 18,
            upright: '(Illusion, subconscious, mystery, dreams, indecision, deception, fear)',
            reversed: '(Repressed emotion, release of fear, inner confusion, downgrading expectations)',
            description: '',
            suit: 'Major',
        },
        Sun: {
            name: "The Sun",
            rank: 'XIX',
            number: 19,
            upright: '(Positivity, optimism, warmth, fun, success, vitality, family, well-being)',
            reversed: '(Temporariliy: overly optimistic, struggling to see the sun, or feeling clouded)',
            description: '',
            suit: 'Major',
        },
        Judgment: {
            name: "Judgment",
            rank: 'XX',
            number: 20,
            upright: '(Judgment, rebirth, absolution, inner calling, the past, memories, awakening)',
            reversed: '(Inner critic, self-doubt, ignoring the call, past disrupts the present, guilt, trapped in the past, grieving)',
            description: '',
            suit: 'Major',
        },
        World: {
            name: "The World",
            rank: 'XXI',
            number: 21,
            upright: '(Completion, success, accomplishment, reward, integration, expansion, travel)',
            reversed: '(Delays, short-cuts, perfectionism, clinging to unrealistic goals, pressure to perform)',
            description: '',
            suit: 'Major',
        },
    },
    MinorArcana: {
        Swords: {
            Ace: {
                name: 'Ace of Swords',
                rank: 'Ace',
                abbr: 'A-S',
                number: 1,
                upright: '(Breakthroughs, insight, new ideas, mental clarity, success)',
                reversed: '(Clouded judgment, rethinking an idea, breakthrough is coming soon)',
                description: 'description here...',
                suit: 'Swords',
            },
            Two: {
                name: 'Two of Swords',
                rank: 'Two',
                abbr: '2-S',
                number: 2,
                upright: '(Avoidance, procrastination, clashing decisions, weighing of options, an impasse)',
                reversed: '(Indecision, confusion, stalemate, deception)',
                description: 'description here...',
                suit: 'Swords',
            },
            Three: {
                name: 'Three of Swords',
                rank: 'Three',
                abbr: '3-S',
                number: 3,
                upright: '(Heartbreak, emotional pain, suffering, grief, hurt, betrayal)',
                reversed: '(Forgiveness, releasing pain, negative self-talk)',
                description: 'description here...',
                suit: 'Swords',
            },
            Four: {
                name: 'Four of Swords',
                rank: 'Four',
                abbr: '4-S',
                number: 4,
                upright: '(Refuge, rest, relaxation, meditation, recuperation, contemplation)',
                reversed: '(Imposed time-out, exhaustion, burnt out, stagnation)',
                description: 'description here...',
                suit: 'Swords',
            },
            Five: {
                name: 'Five of Swords',
                rank: 'Five',
                abbr: '5-S',
                number: 5,
                upright: '(Conflict, disagreements, defeat, competition, exposure)',
                reversed: '(Reconciliation, making amends, false premise for conflict)',
                description: 'description here...',
                suit: 'Swords',
            },
            Six: {
                name: 'Six of Swords',
                rank: 'Six',
                abbr: '6-S',
                number: 6,
                upright: '(Transition, change, rite of passage, moving on)',
                reversed: '(Resistance to change, naivety, fixation on one outcome)',
                description: 'description here...',
                suit: 'Swords',
            },
            Seven: {
                name: 'Seven of Swords',
                rank: 'Seven',
                abbr: '7-S',
                number: 7,
                upright: '(Theft, betrayal, deception, transgression, mistrust, strategy)',
                reversed: '(Imposter syndrome, self-deceit, keeping secrets)',
                description: 'description here...',
                suit: 'Swords',
            },
            Eight: {
                name: 'Eight of Swords',
                rank: 'Eight',
                abbr: '8-S',
                number: 8,
                upright: '(Self-imposed restriction, imprisonment, victim mentality)',
                reversed: '(Restrictive thoughts lead to panic, releasing restrictive thoughts, new perspectives, self-forgiveness)',
                description: 'description here...',
                suit: 'Swords',
            },
            Nine: {
                name: 'Nine of Swords',
                rank: 'Nine',
                abbr: '9-S',
                number: 9,
                upright: '(Insomnia, depression, nightmares, anxiety, wory, fear)',
                reversed: '(Deep-seated fears, despair, victimhood, releasing worry, recovery)',
                description: 'description here...',
                suit: 'Swords',
            },
            Ten: {
                name: 'Ten of Swords',
                rank: 'Ten',
                abbr: '10-S',
                number: 10,
                upright: '(Finality, betrayal, broken bonds, painful endings, deep wounds, loss)',
                reversed: '(Resisting an inevitable end, recovery, regeneration)',
                description: 'description here...',
                suit: 'Swords',
            },
            Page: {
                name: 'Page of Swords',
                rank: 'Page',
                abbr: 'P-S',
                number: 11,
                upright: '(Vigilance, inspiration, communication, curiosity, alert)',
                reversed: '(Haste, scatterbrained, manipulative, insulting, gossipy)',
                description: 'description here...',
                suit: 'Swords',
            },
            Knight: {
                name: 'Knight of Swords',
                rank: 'Knight',
                abbr: 'N-S',
                number: 12,
                upright: '(Ambitious, driven, quick-thinking, daring, assertive, direct)',
                reversed: '(Rude, aggressive, vicious, ruthless, arrogant)',
                description: 'description here...',
                suit: 'Swords',
            },
            Queen: {
                name: 'Queen of Swords',
                rank: 'Queen',
                abbr: 'Q-S',
                number: 13,
                upright: '(Honest, independent, principled, fair, unbiased judgment)',
                reversed: '(Cruel, deceitful, malicious, manipulative, pessimistic, cold-hearted)',
                description: 'description here...',
                suit: 'Swords',
            },
            King: {
                name: 'King of Swords',
                rank: 'King',
                abbr: 'K-S',
                number: 14,
                upright: '(Authority, discipline, reason, morality, integrity, mental clarity)',
                reversed: '(Controlling, cold, irrational, inhumane, oppressive)',
                description: 'description here...',
                suit: 'Swords',
            },
        },
        Cups: {
            Ace: {
                name: 'Ace of Cups',
                rank: 'Ace',
                abbr: 'A-C',
                number: 1,
                upright: '(Beginnings, love, creativity, flow)',
                reversed: '(Self-love, repressed emotions, imagined insecurity)',
                description: 'description here...',
                suit: 'Cups',
            },
            Two: {
                name: 'Two of Cups',
                rank: 'Two',
                abbr: '2-C',
                number: 2,
                upright: '(Unified love, partnership, mutual attraction, passion, harmony)',
                reversed: '(Self-love, disharmony, distrust, secrets, doubt)',
                description: 'description here...',
                suit: 'Cups',
            },
            Three: {
                name: 'Three of Cups',
                rank: 'Three',
                abbr: '3-C',
                number: 3,
                upright: '(Celebrations, friendship, community, gatherings)',
                reversed: '(Gossip, scandal, excess celebration, isolation, solitude, imbalanced social life)',
                description: 'description here...',
                suit: 'Cups',
            },
            Four: {
                name: 'Four of Cups',
                rank: 'Four',
                abbr: '4-C',
                number: 4,
                upright: '(Contemplation, meditation, apathy, boredom, indifference)',
                reversed: '(Retreat, withdrawal, clarity, awareness, acceptance)',
                description: 'description here...',
                suit: 'Cups',
            },
            Five: {
                name: 'Five of Cups',
                rank: 'Five',
                abbr: '5-C',
                number: 5,
                upright: '(Sadness, dissapointment, regret, failure, grief)',
                reversed: '(Acceptance, self-forgiveness, contentment, moving on)',
                description: 'description here...',
                suit: 'Cups',
            },
            Six: {
                name: 'Six of Cups',
                rank: 'Six',
                abbr: '6-C',
                number: 6,
                upright: '(Nostalgia, reunion, childhood, innocence, joy)',
                reversed: '(Living in the past, leaving home, independence, lacking playfulness)',
                description: 'description here...',
                suit: 'Cups',
            },
            Seven: {
                name: 'Seven of Cups',
                rank: 'Seven',
                abbr: '7-C',
                number: 7,
                upright: '(Mystery, fantasy, possibility, imagination, illusion)',
                reversed: '(Disarray, confusion, distractions, lack of purpose)',
                description: 'description here...',
                suit: 'Cups',
            },
            Eight: {
                name: 'Eight of Cups',
                rank: 'Eight',
                abbr: '8-C',
                number: 8,
                upright: '(Departure, resolution, change, detachment)',
                reversed: '(Stagnation, monotony, avoidance, fear of change)',
                description: 'description here...',
                suit: 'Cups',
            },
            Nine: {
                name: 'Nine of Cups',
                rank: 'Nine',
                abbr: '9-C',
                number: 9,
                upright: '(Wish-come-true, reward, satisfaction, abundance, gratitude)',
                reversed: '(Indulgence, disappointment, underachievment, delays, disconnection, desperation)',
                description: 'description here...',
                suit: 'Cups',
            },
            Ten: {
                name: 'Ten of Cups',
                rank: 'Ten',
                abbr: '10-C',
                number: 10,
                upright: '(Togetherness, homecomings, love, domestic harmony, fulfillment)',
                reversed: '(Disconnection, misaligned values, domestic conflict, disharmony)',
                description: 'description here...',
                suit: 'Cups',
            },
            Page: {
                name: 'Page of Cups',
                rank: 'Page',
                abbr: 'P-C',
                number: 11,
                upright: '(Idealism, innocence, creative opportunities, curiosity, possibility)',
                reversed: '(Emotional vulnerability, creative blocks, emotional immaturity)',
                description: 'description here...',
                suit: 'Cups',
            },
            Knight: {
                name: 'Knight of Cups',
                rank: 'Knight',
                abbr: 'N-C',
                number: 12,
                upright: '(Charm, romance, beauty, promise, invitation)',
                reversed: '(Unrealistic, jealousy, moodiness, vanity)',
                description: 'description here...',
                suit: 'Cups',
            },
            Queen: {
                name: 'Queen of Cups',
                rank: 'Queen',
                abbr: 'Q-C',
                number: 13,
                upright: '(Compassion, sensitivity, emotional stability, support)',
                reversed: '(Dependence, insecurity, martyrdom, neediness)',
                description: 'description here...',
                suit: 'Cups',
            },
            King: {
                name: 'King of Cups',
                rank: 'King',
                abbr: 'K-C',
                number: 14,
                upright: '(Wisdom, steadiness, diplomacy, emotional balance)',
                reversed: '(Overwhelm, destruction, blame, denial)',
                description: 'description here...',
                suit: 'Cups',
            },
        },
        Wands: {
            Ace: {
                name: 'Ace of Wands',
                rank: 'Ace',
                abbr: 'A-W',
                number: 1,
                upright: '(Inspiration, passion, desire, creation, willpower)',
                reversed: '(Apathy, boredom, lack of passion, lack of desire)',
                description: 'description here...',
                suit: 'Wands',
            },
            Two: {
                name: 'Two of Wands',
                rank: 'Two',
                abbr: '2-W',
                number: 2,
                upright: '(Planning, decisions, progress, discovery, travel)',
                reversed: '(Poor planning, playing it safe, fear of change, recklessness)',
                description: 'description here...',
                suit: 'Wands',
            },
            Three: {
                name: 'Three of Wands',
                rank: 'Three',
                abbr: '3-W',
                number: 3,
                upright: '(Expansion, foresight, manifestation, rapid growth)',
                reversed: '(Obstacles, frustration, delays)',
                description: 'description here...',
                suit: 'Wands',
            },
            Four: {
                name: 'Four of Wands',
                rank: 'Four',
                abbr: '4-W',
                number: 4,
                upright: '(Establishment, community, reward, home, celebration)',
                reversed: '(Transcience, lack of support, oucast, solitude, domestic conflict)',
                description: 'description here...',
                suit: 'Wands',
            },
            Five: {
                name: 'Five of Wands',
                rank: 'Five',
                abbr: '5-W',
                number: 5,
                upright: '(Competition, rivalry, conflict, tension, disagreement)',
                reversed: '(Avoiding conflict, respecting differences, inner conflict, tension release)',
                description: 'description here...',
                suit: 'Wands',
            },
            Six: {
                name: 'Six of Wands',
                rank: 'Six',
                abbr: '6-W',
                number: 6,
                upright: '(Victory, success, acknowledgement, self-confidence)',
                reversed: "(Egotism, lack of recognition, punishment, overly sensitive to others' opinions)",
                description: 'description here...',
                suit: 'Wands',
            },
            Seven: {
                name: 'Seven of Wands',
                rank: 'Seven',
                abbr: '7-W',
                number: 7,
                upright: '(Challenges, anticipation, negotiation, advocacy, perseverance)',
                reversed: '(Overwhelm, giving up, halted progress, ruined confidence)',
                description: 'description here...',
                suit: 'Wands',
            },
            Eight: {
                name: 'Eight of Wands',
                rank: 'Eight',
                abbr: '8-W',
                number: 8,
                upright: '("Go!", Rapid action, movement, quick decisions)',
                reversed: '(Panic, waiting, slowing down, delayed action)',
                description: 'description here...',
                suit: 'Wands',
            },
            Nine: {
                name: 'Nine of Wands',
                rank: 'Nine',
                abbr: '9-W',
                number: 9,
                upright: '(Resilience, grit, defense, determination, last stand)',
                reversed: '(Obstinacy, exhaustion, resentment, fatigue, overworked)',
                description: 'description here...',
                suit: 'Wands',
            },
            Ten: {
                name: 'Ten of Wands',
                rank: 'Ten',
                abbr: '10-W',
                number: 10,
                upright: '(Duty, work, responsibility, burden)',
                reversed: '(Burnt out, burden, martyrdom, overwhelm)',
                description: 'description here...',
                suit: 'Wands',
            },
            Page: {
                name: 'Page of Wands',
                rank: 'Page',
                abbr: 'P-W',
                number: 11,
                upright: '(Exploration, excitement, freedom, creativity)',
                reversed: '(Procrastination, lack of direction, creating conflict, negative conversations)',
                description: 'description here...',
                suit: 'Wands',
            },
            Knight: {
                name: 'Knight of Wands',
                rank: 'Knight',
                abbr: 'N-W',
                number: 12,
                upright: '(Action, adventure, bravery, passion, desire, progress)',
                reversed: '(Impulsiveness, recklessness, anger, egotism)',
                description: 'description here...',
                suit: 'Wands',
            },
            Queen: {
                name: 'Queen of Wands',
                rank: 'Queen',
                abbr: 'Q-W',
                number: 13,
                upright: '(Expression, courage, joy, energy, empowerment)',
                reversed: '(Insecurity, jealousy, selfishness)',
                description: 'description here...',
                suit: 'Wands',
            },
            King: {
                name: 'King of Wands',
                rank: 'King',
                abbr: 'K-W',
                number: 14,
                upright: '(Leadership, honor, openness, inspiration)',
                reversed: '(Oppression, restriction, resentment, overbearing, high expectations)',
                description: 'description here...',
                suit: 'Wands',
            },
        },
        Pentacles: {
            Ace: {
                name: 'Ace of Pentacles',
                rank: 'Ace',
                abbr: 'A-P',
                number: 1,
                upright: '(Opportunity, beginnings, prosperity, new venture, business)',
                reversed: '(Missed opportunity, bad investment, false start, materialism)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Two: {
                name: 'Two of Pentacles',
                rank: 'Two',
                abbr: '2-P',
                number: 2,
                upright: '(Prioritization, adaptation, time management, balancing decisions)',
                reversed: '(Irresponsibility, disorganization, poor budgeting, re-prioritization)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Three: {
                name: 'Three of Pentacles',
                rank: 'Three',
                abbr: '3-P',
                number: 3,
                upright: '(Collaboration, teamwork, implementation, projects)',
                reversed: '(Working alone, unfinished work, lack of interest, misalignment)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Four: {
                name: 'Four of Pentacles',
                rank: 'Four',
                abbr: '4-P',
                number: 4,
                upright: '(Conservation, scarcity, security, frugality)',
                reversed: '(Greed, over-spending, possessiveness)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Five: {
                name: 'Five of Pentacles',
                rank: 'Five',
                abbr: '5-P',
                number: 5,
                upright: '(Poor, poverty consciousness, need, lack)',
                reversed: '(Charity, improvement, recovery, hoarding)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Six: {
                name: 'Six of Pentacles',
                rank: 'Six',
                abbr: '6-P',
                number: 6,
                upright: '(Charity, generosity, sharing, gifts)',
                reversed: '(Strings attached, stinginess, theft, debt)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Seven: {
                name: 'Seven of Pentacles',
                rank: 'Seven',
                abbr: '7-P',
                number: 7,
                upright: '(Investment, effort, perseverance, diligence, long-term view)',
                reversed: '(Lack of results, distractions, empty effort, short-term view)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Eight: {
                name: 'Eight of Pentacles',
                rank: 'Eight',
                abbr: '8-P',
                number: 8,
                upright: '(Apprenticeship, high standards, mastery, skill development)',
                reversed: '(Uninspired, lack of motivation, lack of passion, perfectionism)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Nine: {
                name: 'Nine of Pentacles',
                rank: 'Nine',
                abbr: '9-P',
                number: 9,
                upright: '(Luxury, abundance, fruits of labor, financial independence)',
                reversed: '(Hustling, false success, reckless spending)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Ten: {
                name: 'Ten of Pentacles',
                rank: 'Ten',
                abbr: '10-P',
                number: 10,
                upright: '(Legacy, culmination, inheritance, stability)',
                reversed: '(Fleeting success, lack of stability, financial loss)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Page: {
                name: 'Page of Pentacles',
                rank: 'Page',
                abbr: 'P-P',
                number: 11,
                upright: '(Financial opportunity, manifestation, diligence, ambition)',
                reversed: '(Laziness, lack of commitment, procrastination)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Knight: {
                name: 'Knight of Pentacles',
                rank: 'Knight',
                abbr: 'N-P',
                number: 12,
                upright: '(Productivity, hard work, routine, efficiency)',
                reversed: '(Obsessiveness, work without reward, feeling "stuck")',
                description: 'description here...',
                suit: 'Pentacles',
            },
            Queen: {
                name: 'Queen of Pentacles',
                rank: 'Queen',
                abbr: 'Q-P',
                number: 13,
                upright: '(Nurture, practicality, creature comforts, financial security)',
                reversed: '(Smothering, bribery, jealousy, work-home conflict)',
                description: 'description here...',
                suit: 'Pentacles',
            },
            King: {
                name: 'King of Pentacles',
                rank: 'King',
                abbr: 'K-P',
                number: 14,
                upright: '(Wealth, leadership, security, discipline, abundance)',
                reversed: '(Corruption, over-materialism, financially inept, stand against materialism)',
                description: 'description here...',
                suit: 'Pentacles',
            },
        }

    }
}