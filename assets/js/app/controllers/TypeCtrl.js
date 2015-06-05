// mozaiqApp.controller('TypeCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

//   console.log("TypeCtrl loaded");

//   if ("/type/intj" == $location.$$path.toLowerCase()) {
//     $scope.type = "INTJ - The Mastermind";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well.</p><p>INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering.</p><p>People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.</p><p>INTJs are perceptive about systems and strategy, and often understand the world as a chess board to be navigated. They want to understand how systems work, and how events proceed: the INTJ often has a unique ability to foresee logical outcomes. They enjoy applying themselves to a project or idea in depth, and putting in concentrated effort to achieve their goals.</p><p>INTJs have a hunger for knowledge and strive to constantly increase their competence; they are often perfectionists with extremely high standards of performance for themselves and others. They tend to have a keen interest in self-improvement and are lifelong learners, always looking to add to their base of information and awareness.</p>"},

//     {"title" : "Strengths",
//     "content" : "<p><b>Quick, Imaginative and Strategic Mind</strong> – INTJs pride themselves on their minds, taking every opportunity to improve their knowledge, and this shows in the strength and flexibility of their strategic thinking. Insatiably curious and always up for an intellectual challenge, INTJs can see things from many perspectives. INTJs use their creativity and imagination not so much for artistry, but for planning contingencies and courses of action for all possible scenarios.</p><p><b>High Self-Confidence</strong> – INTJs trust their rationalism above all else, so when they come to a conclusion, they have no reason to doubt their findings. This creates an honest, direct style of communication that isn't held back by perceived social roles or expectations. When INTJs are right, they're right, and no amount of politicking or hand-holding is going to change that fact – whether it's correcting a person, a process, or themselves, they'd have it no other way.</p><p><b>Independent and Decisive</strong> – This creativity, logic and confidence come together to form individuals who stand on their own and take responsibility for their own actions. Authority figures do not impress INTJs, nor do social conventions or tradition, and no matter how popular something is, if they have a better idea, INTJs will stand against anyone they have to in a bid to have it changed. Either an idea is the most rational or it's wrong, and INTJs will apply this to their arguments as well as their own behavior, staying calm and detached from these sometimes emotionally charged conflicts. INTJs will only be swayed by those who follow suit.</p><p><b>Hard-working and determined</strong> – If something piques their interest, INTJs can be astonishingly dedicated to their work, putting in long hours and intense effort to see an idea through. INTJs are incredibly efficient, and if tasks meet the criteria of furthering a goal, they will find a way to consolidate and accomplish those tasks. However, this drive for efficiency can also lead to a sort of elaborate laziness, wherein INTJs find ways to bypass seeming redundancies which don't seem to require a great deal of thought – this can be risky, as sometimes double-checking one's work is the standard for a reason.</p><p><b>Open-minded</strong> – All this rationalism leads to a very intellectually receptive personality type, as INTJs stay open to new ideas, supported by logic, even if (and sometimes especially if) they prove INTJs' previous conceptions wrong. When presented with unfamiliar territory, such as alternate lifestyles, INTJs tend to apply their receptiveness and independence, and aversion to rules and traditions, to these new ideas as well, resulting in fairly liberal social senses.</p><p><b>Jacks-of-all-Trades</strong> – INTJs' open-mindedness, determination, independence, confidence and strategic abilities create individuals who are capable of doing anything they set their minds to. Excelling at analyzing anything life throws their way, INTJs are able to reverse-engineer the underlying methodology of most any system and apply the concepts that are exposed wherever needed. INTJs tend to have their pick of professions, from IT architects to political masterminds.</p>"},

//     {"title" : "Weaknesses",
//     "content" : "<p><b>Arrogant</strong> – INTJs are perfectly capable of carrying their confidence too far, falsely believing that they've resolved all the pertinent issues of a matter and closing themselves off to the opinions of those they believe to be intellectually inferior. Combined with their irreverence for social conventions, INTJs can be brutally insensitive in making their opinions of others all too clear.</p><p><b>Judgmental</strong> – INTJs tend to have complete confidence in their thought process, because rational arguments are almost by definition correct – at least in theory. In practice, emotional considerations and history are hugely influential, and a weak point for INTJs is that they brand these factors and those who embrace them as illogical, dismissing them and considering their proponents to be stuck in some baser mode of thought, making it all but impossible to be heard.</p><p><b>Overly analytical</strong> – A recurring theme with INTJs is their analytical prowess, but this strength can fall painfully short where logic doesn't rule – such as with human relationships. When their critical minds and sometimes neurotic level of perfectionism (often the case with Turbulent INTJs) are applied to other people, all but the steadiest of friends will likely need to make some distance, too often permanently.</p><p><b>Loathe</strong> highly structured environments – Blindly following precedents and rules without understanding them is distasteful to INTJs, and they disdain even more authority figures who blindly uphold those laws and rules without understanding their intent. Anyone who prefers the status quo for its own sake, or who values stability and safety over self-determination, is likely to clash with INTJ personality types. Whether it's the law of the land or simple social convention, this aversion applies equally, often making life more difficult than it needs to be.</p><p><b>Clueless in romance</strong> – This antipathy to rules and tendency to over-analyze and be judgmental, even arrogant, all adds up to a personality type that is often clueless in dating. Having a new relationship last long enough for INTJs to apply the full force of their analysis on their potential partner's thought processes and behaviors can be challenging. Trying harder in the ways that INTJs know best can only make things worse, and it's unfortunately common for them to simply give up the search. Ironically, this is when they're at their best, and most likely to attract a partner.</p>"},

//     {"title" : "Interaction",
//     "content" : "<p>INTJs are typically reserved and serious, and seem to spend a lot of time thinking. They are curious about the world around them and often want to know the principle behind what they see. They thoroughly examine the information they receive, and if asked a question, will typically consider it at length before presenting a careful, complex answer. INTJs think critically and clearly, and often have an idea about how to do something more efficiently. They can be blunt in their presentation, and often communicate in terms of the larger strategy, leaving out the details.</p><p>Although INTJs aren’t usually warm or particularly gregarious, they tend to have a self-assured manner with people based on their own security in their intelligence. They relate their ideas with confidence, and once they have arrived at a conclusion they fully expect others to see the wisdom in their perceptions. They are typically perfectionists and appreciate an environment of intellectual challenge. They enjoy discussing interesting ideas, and may get themselves into trouble because of their take-no-prisoners attitude: if someone’s beliefs don’t make logical sense, the Mastermind typically has no qualms about pointing that out.</p>"},

//     {"title" : "Careers",
//     "content" : "<ul><b>Business and Financial</b><br><li>Accountant or Auditor</li><li>Budget Analyst</li><li>Cost Estimator</li><li>Financial Analyst</li><li>Insurance Underwriter</li><li>Loan Officer</li><li>Logistician</li><li>Management Consultant</li><li>Market Research Analyst</li><li>Personal Financial Advisor</li><li>Tax Examiner</li><li>Financial Manager</li><li>Top Executive</li><li>Sales Engineer</li><br><b>Math</b><br><li>Actuary</li><li>Mathematician</li><li>Operations Research Analyst</li><li>Statistician</li><br><b>Architecture and Engineering</b><br><li>Aerospace Engineer</li><li>Agricultural Engineer</li><li>Architect</li><li>Biomedical Engineer</li><li>Chemical Engineer</li><li>Civil Engineer</li><li>Computer Hardware Engineer</li><li>Electrical or Electronics Engineer</li><li>Environmental Engineer</li><li>Health and Safety Engineer</li><li>Industrial Engineer</li><li>Mechanical Engineer</li><li>Mechanical Engineering Technician</li><li>Mining or Geological Engineer</li><li>Nuclear Engineer</li><li>Petroleum Engineer</li><li>Surveyor</li><li>Architectural or Engineering Manager</li><br><b>Sciences</b><br><li>Atmospheric Scientist</li><li>Biochemist or Biophysicist</li><li>Chemist or Materials Scientist</li><li>Economist</li><li>Environmental Scientist</li><li>Geoscientist</li><li>Historian</li><li>Hydrologist</li><li>Medical Scientist</li><li>Microbiologist</li><li>Political Scientist</li><br><b>Arts, Design, and Communications</b><br><li>Art Director</li><li>Industrial Designer</li><li>Editor</li><li>Translator</li><li>Photographer</li><li>Reporter</li><li>Technical Writer</li><li>Writer</li><br><b>Healthcare</b><br><li>Optometrist</li><li>Pharmacist</li><li>Physician or Surgeon</li><li>Podiatrist</li><br><b>Education</b><br><li>Technical Education Teacher</li><li>Professor</li><li>College Administrator</li><br><b>Computers and Information Technology</b><br><li>Computer Programmer</li><li>Computer Support Specialist</li><li>Computer Systems Analyst</li><li>Database Administrator</li><li>Information Security Analyst</li><li>Network Administrator</li><li>Software Developer</li><li>Web Developer</li><li>Computer and IS Manager</li><li>Computer Network Architect</li><li>Computer Scientist</li><br><b>Construction</b><br><li>Construction Manager</li><li>Building Inspector</li><br><b>Legal</b><br><li>Judge or Hearing Officer</li><li>Lawyer</li><li>Paralegal or Legal Assistant</li><br><b>Protective Service</b><br><li>Police Detective</li><li>Private Investigator</li></ul>"},

//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>2% of the general population</li><li>3% of men</li><li>1% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Discreet, Industrious, Logical, Deliberate, Self-Confident, and Methodical</li><li>Among types least likely to suffer heart disease and cardiac problems</li><li>Least likely of all the types to believe in a higher spiritual power</li><li>One of two types with highest college GPA</li><li>Among types with highest income</li><li>Personal values include Achievement</li><li>Of all types, least likely to state that they value Home/family, Financial security, Relationships & friendships, and Community service</li><li>Overrepresented among MBA students and female small business owners</li><li>Commonly found in scientific or technical fields, computer occupations, and legal professions</li></ul>"}
//     ];


// } else if ("/type/entj" == $location.$$path.toLowerCase()) {
//     $scope.type = "ENTJ - The Commander";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>ENTJs are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. But unlike their Feeling (F) counterpart, ENTJs are characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they've set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have ENTJs to thank for many of the businesses and institutions we take for granted every day.</p><p>ENTJs are often very motivated by success in their careers and enjoy hard work. They are ambitious and interested in gaining power and influence. To the ENTJ, decision-making is a vocation. They want to be in a position to make the call and put plans into motion.</p><p>ENTJs tend to be blunt and decisive. Driven to get things done, they can sometimes be critical or brusque in the pursuit of a goal. They are typically friendly and outgoing, although they may not pick up on emotional subleties in other people. They often love working with others toward a common goal, but may not find time to attend to their feelings. They are focused on results and want to be productive, competent, and influential.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Efficient – ENTJs see inefficiency not just as a problem in its own right, but as something that pulls time and energy away from all their future goals, an elaborate sabotage consisting of irrationality and laziness. People with the ENTJ personality type will root out such behavior wherever they go.
//     Energetic – Rather than finding this process taxing ENTJs are energized by it, genuinely enjoying leading their teams forward as they implement their plans and goals.
//     Self-Confident – ENTJs couldn't do this if they were plagued by self-doubt – they trust their abilities, make known their opinions, and believe in their capacities as leaders.
//     Strong-Willed – Nor do they give up when the going gets tough – ENTJ personalities strive to achieve their goals, but really nothing is quite as satisfying to them as rising to the challenge of each obstacle in their run to the finish line.
//     Strategic Thinkers – ENTJs exemplify the difference between moment-to-moment crisis management and navigating the challenges and steps of a bigger plan, and are known for examining every angle of a problem and not just resolving momentary issues, but moving the whole project forward with their solutions.
//     Charismatic and Inspiring – These qualities combine to create individuals who are able to inspire and invigorate others, who people actually want to be their leaders, and this in turn helps ENTJs to accomplish their often ambitious goals that could never be finished alone.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Stubborn and Dominant – Sometimes all this confidence and willpower can go too far, and ENTJs are all too capable of digging in their heels, trying to win every single debate and pushing their vision, and theirs alone.
//     Intolerant – 'It's my way or the highway' – People with the ENTJ personality type are notoriously unsupportive of any idea that distracts from their primary goals, and even more so of ideas based on emotional considerations. ENTJs won't hesitate a second to make that fact clear to those around them.
//     Impatient – Some people need more time to think than others, an intolerable delay to quick-thinking ENTJs. They may misinterpret contemplation as stupidity or disinterest in their haste, a terrible mistake for a leader to make.
//     Arrogant – ENTJ personalities respect quick thoughts and firm convictions, their own qualities, and look down on those who don't match up. This relationship is a challenge for most other personality types who are perhaps not timid in their own right, but will seem so beside overbearing ENTJs.
//     Poor Handling of Emotions – All this bluster, alongside the assumed supremacy of rationalism, makes ENTJs distant from their own emotional expression and sometimes downright scornful of others'. People with this personality type often trample others' feelings, inadvertently hurting their partners and friends, especially in emotionally charged situations.
//     Cold and Ruthless – Their obsession with efficiency and unwavering belief in the merits of rationalism, especially professionally, makes ENTJs incredibly insensitive in pursuing their goals, dismissing personal circumstances, sensitivities, and preferences as irrational and irrelevant.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ENTJs are natural leaders, and often take charge no matter where they are. They typically have a clear vision for the future, and intuitively understand how to move people and processes towards that goal. They tend to approach every situation with the attitude of an efficiency analyst, and are not shy about pointing out what could be done better. For the ENTJ, their ideas are a foregone conclusion: it’s just a matter of time before they can move the players to get everything accomplished.

//     ENTJs are often gregarious, and seem to have an idea for how a person will fit into their grand scheme from the moment they are introduced. They are typically direct and may seem presumptuous or even arrogant; they size people and situations up very quickly, and have trouble being anything but honest about what they see. ENTJs are sensitive to issues of power, and seek positions and people of influence. They are characeristically ambitious, and often very engaged in their careers. More than any other type, ENTJs enjoy their work, and may even say that working is what they do for fun.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Business and Financial

//     Accountant or Auditor
//     Budget Analyst
//     Cost Estimator
//     Financial Analyst
//     Loan Officer
//     Logistician
//     Management Analyst
//     Market Research Analyst
//     Meeting or Convention Planner
//     Personal Financial Advisor
//     Purchasing Managers
//     Operations Research Analyst
//     Advertising and Promotions Manager
//     Financial Manager
//     Top Executive

//     Sales

//     Advertising Sales Agent
//     Insurance Sales Agent
//     Real Estate Broker
//     Sales Engineer
//     Securities, Commodities, or Financial Services Sales Agent
//     Sales Manager

//     Architecture and Engineering

//     Aerospace Engineer
//     Agricultural Engineer
//     Architect
//     Biomedical Engineer
//     Chemical Engineer
//     Civil Engineer
//     Computer Hardware Engineer
//     Drafter
//     Electrical or Electronics Engineer
//     Environmental Engineer
//     Health and Safety Engineer
//     Industrial Engineer
//     Landscape Architect
//     Materials Engineer
//     Mechanical Engineer
//     Mining or Geological Engineer
//     Nuclear Engineer
//     Petroleum Engineer
//     Surveyor

//     Life, Physical, and Social Science

//     Agricultural Scientist
//     Atmospheric Scientist
//     Biochemist or Biophysicist
//     Chemist or Materials Scientist
//     Conservation Scientist or Forester
//     Economist
//     Environmental Scientist
//     Geographer
//     Geoscientist
//     Historian
//     Hydrologist
//     Microbiologist
//     Political Scientist
//     Urban or Regional Planner
//     Statistician

//     Arts, Design, and Language

//     Art Director
//     Industrial Designer
//     Reporter
//     Professor
//     Chef
//     Music Director
//     Producer or Director

//     Healthcare

//     Exercise Physiologist
//     Dentist
//     Optometrist
//     Pharmacist
//     Physician or Surgeon

//     Computer and Information Technology

//     Computer Network Architect
//     Computer Scientist
//     Computer Systems Analyst
//     Database Administrator
//     Information Security Analyst
//     Network Administrator
//     Software Developer
//     Computer and IS Manager

//     Construction and Production

//     Construction Manager
//     Construction or Building Inspector
//     Industrial Production Manager

//     Protective Services

//     Correctional Officer
//     Fire Inspector or Investigator
//     Police Officer or Detective
//     Private Detective or Investigator
//     Emergency Management Director

//     Legal

//     Judge or Hearing Officer
//     Lawyer


//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>2% of the general population</li><li>3% of men</li><li>1% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Ambitious, Forceful, Optimistic, Egotistical, Adaptable, and Energetic</li><li>Least likely of all types to report stress resulting from work or finances</li><li>More likely than average to suffer cardiac problems</li><li>Among the least likely of all types to believe in a higher spiritual power</li><li>Among top 4 types in college GPA</li><li>Among most likely to stay in college</li><li>Personal values include Home/Family, Achievement, Creativity, and Learning</li><li>Overrepresented among MBA students and small business owners</li><li>One of two types most likely to be satisfied with their work</li></ul>"}
//     ]
// } else if ("/type/intp" == $location.$$path.toLowerCase()) {
//     $scope.type = "INTP - The Architect";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>

//     The INTP personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there's nothing they'd be more unhappy about than being 'common'. INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, INTPs have been responsible for many scientific discoveries throughout history.</p><p>INTPs present a cool exterior but are privately passionate about reason, analysis, and innovation. They seek to create complex systems of understanding to unify the principles they've observed in their environments. Their minds are complicated and active, and they will go to great mental lengths trying to devise ingenious solutions to interesting problems.</p><p>The INTP is typically non-traditional, and more likely to reason out their own individual way of doing things than to follow the crowd. The INTP is suspicious of assumptions and conventions, and eager to break apart ideas that others take for granted. INTPs are merciless when analyzing concepts and beliefs, and hold little sacred. They are often baffled by other people who remain loyal to ideology that doesn't make logical sense.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Great Analysts and Abstract Thinkers – People with the INTP personality type view the world as a big, complex machine, and recognize that as with any machine, all parts are interrelated. INTPs excel in analyzing these connections, seeing how seemingly unrelated factors tie in with each other in ways that bewilder most other personality types.
//     Imaginative and Original – These connections are the product of an unrelenting imagination – INTPs' ideas may seem counter-intuitive at a glance, and may never even see the light of day, but they will always prove remarkable innovations.
//     Open-Minded – INTPs couldn't make these connections if they thought they knew it all – they are highly receptive to alternate theories, so long as they're supported by logic and facts. In more subjective matters like social norms and traditions, INTPs are usually fairly liberal, with a 'none of my business' sort of attitude – peoples' ideas are what matter.
//     Enthusiastic – When a new idea piques their interest, INTPs can be very enthusiastic – they are a reserved personality type, but if another person shares an interest, they can be downright excited about discussing it. More likely though, the only outward evidence of this enthusiasm will be INTPs' silent pacing or their staring into the distance.
//     Objective – INTPs' analysis, creativity and open-mindedness aren't the tools of some quest for ideology or emotional validation. Rather, it's as though people with the INTP personality type are a conduit for the truths around them, so far as they can be expressed, and they are proud of this role as theoretical mediator.
//     Honest and Straightforward – To know one thing and say another would be terribly disingenuous – INTPs don't often go around intentionally hurting feelings, but they believe that the truth is the most important factor, and they expect that to be appreciated and reciprocated.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Very Private and Withdrawn – While INTPs' intellectualism yields many insights into their surroundings, their surroundings are ironically considered an intrusion on their thoughts. This is especially true with people – INTPs are quite shy in social settings. More complicated situations such as parties exacerbate this, but even close friends struggle to get into INTPs' hearts and minds.
//     Insensitive – Oftentimes INTP personalities get so caught up in their logic that they forget any kind of emotional consideration – they dismiss subjectivity as irrational and tradition as an attempt to bar much-needed progress. Purely emotional situations are often utterly puzzling to INTPs, and their lack of timely sympathy can easily offend.
//     Absent-minded – When INTPs' interest is captured, their absence goes beyond social matters to include the rest of the physical world. INTPs become forgetful, missing even the obvious if it's unrelated to their current infatuation, and they can even forget their own health, skipping meals and sleep as they muse.
//     Condescending – Attempts at connecting with others are often worse than INTPs' withdrawal. People with the INTP personality type take pride in their knowledge and rationale, and enjoy sharing their ideas, but in trying to explain how they got from A to B to Z, they can get frustrated, sometimes simplifying things to the point of insult as they struggle to gauge their conversation partners' perspective. The ultimate insult comes as INTPs give up with a dismissive 'never mind'.
//     Loathe Rules and Guidelines – These social struggles are partly a product of INTPs' desire to bypass the rules, of social conduct and otherwise. While this attitude helps INTPs' strength of unconventional creativity, it also causes them to reinvent the wheel constantly and to shun security in favor of autonomy in ways that can compromise both.
//     Second-Guess Themselves – INTPs remain so open to new information that they often never commit to a decision at all. This applies to their own skills as well – INTP personalities know that as they practice, they improve, and any work they do is second-best to what they could do. Unable to settle for this, INTPs sometimes delay their output indefinitely with constant revisions, sometimes even quitting before they ever begin.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     INTPs are often thoroughly engaged in their own thoughts, and usually appear to others to be offbeat and unconventional. The INTP’s mind is a most active place, and their inward orientation can mean that they neglect superficial things like home décor or appropriate clothing. They don’t tend to bother with small talk but can become downright passionate when talking about science, mathematics, computers, or the larger theoretical problems of the universe. Reality is often of only passing interest to the Architect, as they are more interested in the theory behind it all.

//     INTPs are typically precise in their speech, and communicate complex ideas with carefully chosen words. They insist on intellectual rigor in even the most casual of conversations, and will readily point out inconsistencies of thought or reasoning. Social niceties may fall by the wayside for an INTP who is more interested in analyzing logic, and they may offend others by submitting their dearly held values and beliefs to logical scrutiny.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Technology

//     Computer Network Architect
//     Computer Scientist
//     Computer Programmer
//     Computer Systems Analyst
//     Database Administrator
//     Information Security Analyst
//     Network Administrator
//     Software Developer
//     Web Developer

//     Engineering

//     Aerospace Engineer
//     Biomedical Engineer
//     Chemical Engineer
//     Civil Engineer
//     Computer Hardware Engineer
//     Electrical or Electronics Engineer
//     Environmental Engineer
//     Mechanical Engineer
//     Geological Engineer
//     Nuclear Engineer

//     Sciences

//     Anthropologist or Archaeologist
//     Atmospheric Scientist
//     Biochemist or Biophysicist
//     Chemist
//     Economist
//     Environmental Scientist
//     Geographer
//     Geoscientist
//     Historian
//     Hydrologist
//     Medical Scientist
//     Microbiologist
//     Physicist or Astronomer
//     Political Scientist
//     Psychologist
//     Sociologist
//     Survey Researcher
//     Urban or Regional Planner
//     Zoologist or Wildlife Biologist
//     Physician

//     Business and Law

//     Accountant or Auditor
//     Financial Analyst
//     Management Consultant or Analyst
//     Market Research Analyst
//     Top Executive
//     Sales Engineer
//     Lawyer

//     Arts and Language

//     Graphic Designer
//     Industrial Designer
//     Multimedia Artist or Animator
//     Composer
//     Musician
//     Editor
//     Photographer
//     Technical Writer
//     Writer or Author
//     Professor or College Instructor

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>3% of the general population</li><li>5% of men</li><li>2% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Candid, Ingenious, Complicated, Independent, and Rebellious</li><li>More likely than other types to study a foreign language</li><li>Most frequent type among college students committing alcohol and drug policy violations</li><li>Have lowest level of coping resources of all the types (with ISTPs)</li><li>One of types least likely to believe in a higher spiritual power</li><li>Highest of all types in career dissatisfaction (with INFPs)</li><li>In school, have lower grades than would be predicted from aptitude scores</li><li>More likely than average to complete engineering programs</li><li>Personal values include Autonomy, Freedom, and Independence</li><li>Overrepresented among working MBA students</li><li>Commonly found in science and technical occupations</li></ul>"}
//     ]
// } else if ("/type/entp" == $location.$$path.toLowerCase()) {
//     $scope.type = "ENTP - The Visionary";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>The ENTP personality type is the ultimate devil's advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. Unlike their more determined Judging (J) counterparts, ENTPs don't do this because they are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it's fun. No one loves the process of mental sparring more than ENTPs, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points.</p><p>ENTPs are energized by challenge and are often inspired by a problem that others perceive as impossible to solve. They are confident in their ability to think creatively, and may assume that others are too tied to tradition to see a new way. The Visionary relies on their ingenuity to deal with the world around them, and rarely finds preparation necessary. They will often jump into a new situation and trust themselves to adapt as they go.</p><p>ENTPs are masters of re-inventing the wheel and often refuse to do a task the same way twice. They question norms and often ignore them altogether. Established procedures are uninspiring to the Visionary, who would much rather try a new method (or two) than go along with the standard.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Knowledgeable – ENTPs rarely pass up a good opportunity to learn something new, especially abstract concepts. This information isn't usually absorbed for any planned purpose as with dedicated studying, people with the ENTP personality type just find it fascinating.
//     Quick Thinkers – ENTPs have tremendously flexible minds, and are able to shift from idea to idea without effort, drawing on their accumulated knowledge to prove their points, or their opponents', as they see fit.
//     Original – Having little attachment to tradition, ENTP personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base, with a little raw creativity to hold them together, to formulate bold new ideas. If presented with chronic, systemic problems and given rein to solve them, ENTPs respond with unabashed glee.
//     Excellent Brainstormers – Nothing is quite as enjoyable to ENTPs as analyzing problems from every angle to find the best solutions. Combining their knowledge and originality to splay out every aspect of the subject at hand, rejecting without remorse options that don't work and presenting ever more possibilities, ENTPs are irreplaceable in brainstorming sessions.
//     Charismatic – People with the ENTP personality type have a way with words and wit that others find intriguing. Their confidence, quick thought and ability to connect disparate ideas in novel ways create a style of communication that is charming, even entertaining, and informative at the same time.
//     Energetic – When given a chance to combine these traits to examine an interesting problem, ENTPs can be truly impressive in their enthusiasm and energy, having no qualms with putting in long days and nights to find a solution.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Very Argumentative – If there's anything ENTPs enjoy, it's the mental exercise of debating an idea, and nothing is sacred. More consensus-oriented personality types rarely appreciate the vigor with which ENTP personalities tear down their beliefs and methods, leading to a great deal of tension.
//     Insensitive – Being so rational, ENTPs often misjudge others feelings and push their debates well past others' tolerance levels. People with this personality type don't really consider emotional points to be valid in such debates either, which magnifies the issue tremendously.
//     Intolerant – Unless people are able to back up their ideas in a round of mental sparring, ENTPs are likely to dismiss not just the ideas but the people themselves. Either a suggestion can stand up to rational scrutiny or it's not worth bothering with.
//     Can Find It Difficult to Focus – The same flexibility that allows ENTPs to come up with such original plans and ideas makes them readapt perfectly good ones far too often, or to even drop them entirely as the initial excitement wanes and newer thoughts come along. Boredom comes too easily for ENTPs, and fresh thoughts are the solution, though not always a helpful one.
//     Dislike Practical Matters – ENTPs are interested in what could be – malleable concepts like ideas and plans that can be adapted and debated. When it comes to hard details and day-to-day execution where creative flair isn't just unnecessary but actually counter-productive, ENTP personalities lose interest, often with the consequence of their plans never seeing the light of day.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ENTPs are typically friendly and often charming. They usually want to be seen as clever and may try to impress others with their quick wit and incisive humor. They are curious about the world around them, and want to know how things work. However, for the ENTP, the rules of the universe are made to be broken. They like to find the loopholes and figure out how they can work the system to their advantage. This is not to say the Visionary is malicious: they simply find rules limiting, and believe there is probably a better, faster, or more interesting way to do things that hasn’t been thought of before.

//     The ENTP is characteristically entrepreneurial and may be quick to share a new business idea or invention. They are confident and creative, and typically excited to discuss their many ingenious ideas. The ENTP’s enthusiasm for innovation is infectious, and they are often good at getting other people on board with their schemes. However, they are fundamentally “big-picture” people, and may be at a loss when it comes to recalling or describing details. They are typically more excited about exploring a concept than they are about making it reality, and can seem unreliable if they don’t follow through with their many ideas.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Executive
//     Entrepreneur
//     HR Recruiter
//     Management Consultant
//     Marketing Manager
//     Sales Manager
//     Corporate Trainer
//     Property Manager
//     Venture Capitalist
//     Ad Account Executive
//     Creative Director
//     Financial Planner
//     Stockbroker
//     Real Estate Agent
//     Cost Estimator
//     Public Relations Specialist
//     Reporter
//     Copywriter
//     Art Director
//     Producer or Director
//     Journalist
//     Market Researcher
//     Internet Architect
//     Photographer
//     Actor
//     School Psychologist
//     Organizational Psychologist
//     Chiropractor
//     Political Scientist
//     Attorney
//     Architect
//     Industrial Designer
//     Urban Planner
//     Industrial Engineer
//     Environmental Scientist
//     Drafter
//     Aerospace Engineer
//     Geologist
//     Detective
//     Criminalist
//     Public Administrator
//     Politician
//     Social Scientist
//     Health Care Administrator
//     Education Director

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>3% of the general population</li><li>4% of men</li><li>2% of women</li><br><b>Facts</b><br><li>On personality trait scales, scored as Enterprising, Friendly, Resourceful, Headstrong, Self-Centered, and Independent</li><li>Least likely of all types to suffer heart disease and hypertension</li><li>Least likely of all types to report stress associated with family and health</li><li>Scored among highest of all types in available resources for coping with stress</li><li>Overrepresented among those with Type A behavior</li><li>Among highest of all types on measures of creativity</li><li>One of two types most frequent among violators of college alcohol policy</li><li>Among types most dissatisfied with their work, despite being among the types with highest income</li><li>Commonly found in careers in science, management, technology, and the arts</li></ul>"}
//     ]
// } else if ("/type/infj" == $location.$$path.toLowerCase()) {
//     $scope.type = "INFJ - The Counselor";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>The INFJ personality type is very rare, making up less than one percent of the population, but they nonetheless leave their mark on the world. As Diplomats (NF), they have an inborn sense of idealism and morality, but what sets them apart is the accompanying Judging (J) trait – INFJs are not idle dreamers, but people capable of taking concrete steps to realize their goals and make a lasting positive impact.</p><p>INFJs are guided by a deeply considered set of personal values. They are intensely idealistic, and can clearly imagine a happier and more perfect future. They can become discouraged by the harsh realities of the present, but they are typically motivated and persistent in taking positive action nonetheless. The INFJ feels an intrinsic drive to do what they can to make the world a better place.</p><p>INFJs want a meaningful life and deep connections with other people. They do not tend to share themselves freely but appreciate emotional intimacy with a select, committed few. Although their rich inner life can sometimes make them seem mysterious or private to others, they profoundly value authentic connections with people they trust.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Creative – Combining a vivid imagination with a strong sense of compassion, INFJs use their creativity to resolve not technical challenges, but human ones. People with the INFJ personality type enjoy finding the perfect solution for someone they care about, and this strength makes them excellent counselors and advisors.
//     Insightful – Seeing through dishonesty and disingenuous motives, INFJs step past manipulation and sales tactics and into a more honest discussion. INFJs see how people and events are connected, and are able to use that insight to get to the heart of the matter.
//     Inspiring and Convincing – Speaking in human terms, not technical, INFJs have a fluid, inspirational writing style that appeals to the inner idealist in their audience. INFJs can even be astonishingly good orators, speaking with warmth and passion, if they are proud of what they are speaking for.
//     Decisive – Their creativity, insight and inspiration are able to have a real impact on the world, as INFJs are able to follow through on their ideas with conviction, willpower, and the planning necessary to see complex projects through to the end. INFJs don’t just see the way things ought to be, they act on those insights.
//     Determined and Passionate – When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard. INFJs will rock the boat if they have to, something not everyone likes to see, but their passion for their chosen cause is an inseparable part of their personality.
//     Altruistic – These strengths are used for good. INFJs have strong beliefs and take the actions that they do not because they are trying to advance themselves, but because they are trying to advance an idea that they truly believe will make the world a better place.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Sensitive – When someone challenges or criticizes INFJs’ principles or values, they are likely to receive an alarmingly strong response. People with the INFJ personality type are highly vulnerable to criticism and conflict, and questioning their motives is the quickest way to their bad side.
//     Extremely Private – INFJs tend to present themselves as the culmination of an idea. This is partly because they believe in this idea, but also because INFJs are extremely private when it comes to their personal lives, using this image to keep themselves from having to truly open up, even to close friends. Trusting a new friend can be even more challenging for INFJs.
//     Perfectionistic – INFJs are all but defined by their pursuit of ideals. While this is a wonderful quality in many ways, an ideal situation is not always possible – in politics, in business, in romance – and INFJs too often drop or ignore healthy and productive situations and relationships, always believing there might be a better option down the road.
//     Always Need to Have a Cause – INFJs get so caught up in the passion of their pursuits that any of the cumbersome administrative or maintenance work that comes between them and the ideal they see on the horizon is deeply unwelcome. INFJs like to know that they are taking concrete steps towards their goals, and if routine tasks feel like they are getting in the way, or worse yet, there is no goal at all, they will feel restless and disappointed.
//     Can Burn Out Easily – Their passion, poor patience for routine maintenance, tendency to present themselves as an ideal, and extreme privacy tend to leave INFJs with few options for letting off steam. People with this personality type are likely to exhaust themselves in short order if they don’t find a way to balance their ideals with the realities of day-to-day living.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     INFJs often appear quiet, caring and sensitive, and may be found listening attentively to someone else’s ideas or concerns. They are highly perceptive about people and want to help others achieve understanding. INFJs are not afraid of complex personal problems; in fact, they are quite complex themselves, and have a rich inner life that few are privy to. They reflect at length on issues of ethics, and feel things deeply. Because Counselors initially appear so gentle and reserved, they may surprise others with their intensity when one of their values is threatened or called into question. Their calm exterior belies the complexity of their inner worlds.

//     Because INFJs are such complex people, they may be reluctant to engage with others who might not understand or appreciate them, and can thus be hard to get to know. Although they want to get along with others and support them in their goals, they are fiercely loyal to their own system of values and will not follow others down a path that does not feel authentic to them. When they sense that their values are not being respected, or when their intuition tells them that someone’s intentions are not pure, they are likely to withdraw.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Health Care

//     Physical Therapist
//     Public Health Educator
//     Family Physician
//     Occupational Therapist
//     Psychiatrist
//     Physician Assistant
//     Massage Therapist
//     Nutritionist
//     Medical Researcher

//     Counseling and Social Service

//     Clinical Psychologist
//     Counselor
//     Social Worker
//     Speech Pathologist
//     Clergy

//     Sciences

//     Social Scientist
//     Genealogist
//     Food Scientist
//     Environmental Scientist

//     Business & Law

//     HR Manager
//     Corporate Trainer
//     Environmental Attorney
//     Legal Mediator

//     Education

//     Elementary Teacher
//     Special Education Teacher
//     School Counselor

//     Language and Arts

//     Librarian
//     Curator
//     Translator
//     Editor
//     Technical Writer
//     Writer
//     Graphic Designer
//     Animator
//     Artist
//     Musician
//     Interior Designer

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>2% of the general population</li><li>2% of women</li><li>1% of men</li><br><b>Facts</b><br><li>Least common type in the population</li><li>On personality trait scales, scored as Sincere, Sympathetic, Unassuming, Submissive, Easygoing, Reserved and Patient</li><li>Among highest of all types in college GPA</li><li>Among most likely to stay in college</li><li>Most likely of all types to cope with stress by seeing a therapist</li><li>Highest of all types in marital dissatisfaction</li><li>Personal values include Spirituality, Learning, and Community Service</li><li>Commonly found in careers in religion, counseling, teaching, and the arts</li></ul>"}
//     ]
// } else if ("/type/infp" == $location.$$path.toLowerCase()) {
//     $scope.type = "INFP - The Healer";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p><p>INFP personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the INFP personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.</p><p>INFPs value authenticity and want to be original and individual in what they do. They are often concerned with a search for meaning and truth within themselves. Following tradition holds little appeal for the INFP; they prefer to do their own exploration of values and ideas, and decide for themselves what seems right. INFPs are often offbeat and unconventional, but they feel no desire to conform. The INFP would rather be true to themselves than try to fit in with the crowd.</p><p>INFPs are accepting and nonjudgmental in their treatment of others, believing that each person must follow their own path. They are flexible and accommodating, and can often see many points of view. It is important to the INFP to support other people; however, the INFP may react strongly if they feel their own values are being violated. They especially hate being steamrolled by people who insist there is one right way to do things. INFPs want an open, supportive exchange of ideas.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Idealistic – INFPs' friends and loved ones will come to admire and depend on them for their optimism. Their unshaken belief that all people are inherently good, perhaps simply misunderstood, lends itself to an incredibly resilient attitude in the face of hardship.
//     Seek and Value Harmony – People with the INFP personality type have no interest in having power over others, and don't much care for domineering attitudes at all. They prefer a more democratic approach, and work hard to ensure that every voice and perspective is heard.
//     Open-Minded and Flexible – A live-and-let-live attitude comes naturally to INFPs, and they dislike being constrained by rules. INFPs give the benefit of the doubt too, and so long as their principles and ideas are not being challenged, they'll support others' right to do what they think is right.
//     Very Creative – INFPs combine their intuitive nature with their open-mindedness to allow them to see things from unconventional perspectives. Being able to connect many far-flung dots into a single theme, it's no wonder that many INFPs are celebrated poets and authors.
//     Passionate and Energetic – When something captures INFPs' imagination and speaks to their beliefs, they go all in, dedicating their time, energy, thoughts and emotions to the project. Their shyness keeps them from the podium, but they are the first to lend a helping hand where it's needed.
//     Dedicated and Hard-Working – While others focusing on the challenges of the moment may give up when the going gets tough, INFPs (especially Assertive ones) have the benefit of their far-reaching vision to help them through. Knowing that what they are doing is meaningful gives people with this personality type a sense of purpose and even courage when it comes to accomplishing something they believe in.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Too Idealistic – INFPs often take their idealism too far, setting themselves up for disappointment as, again and again, evil things happen in the world. This is true on a personal level too, as INFPs may not just idealize their partners, but idolize them, forgetting that no one is perfect.
//     Too Altruistic – INFPs sometimes see themselves as selfish, but only because they want to give so much more than they are able to. This becomes a self-fulfilling prophecy, as they try to push themselves to commit to a chosen cause or person, forgetting to take care of the needs of others in their lives, and especially themselves.
//     Impractical – When something captures INFPs' imagination, they can neglect practical matters like day-to-day maintenance and simple pleasures. Sometimes people with the INFP personality type will take this asceticism so far as to neglect eating and drinking as they pursue their passion or cause.
//     Dislike Dealing With Data – INFPs are often so focused on the big picture that they forget the forest is made of individual trees. INFPs are in tune with emotions and morality, and when the facts and data contradict their ideals, it can be a real challenge for them.
//     Take Things Personally – INFPs often take challenges and criticisms personally, rather than as inspiration to reassess their positions. Avoiding conflict as much as possible, INFPs will put a great deal of time and energy into trying to align their principles and the criticisms into a middle ground that satisfies everybody.
//     Difficult to Get to Know – INFPs are private, reserved and self-conscious. This makes them notoriously difficult to really get to know, and their need for these qualities contributes to the guilt they often feel for not giving more of themselves to those they care about.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     INFPs may initially seem cool, as they reserve their most authentic thoughts and feelings for people they know well. They are reflective and often spiritual, and often interested in having meaningful conversations about values, ethics, people, and personal growth. Typically curious and open-minded, the Healer continually seeks a deeper understanding of themselves and of the people around them. They are passionate about their ideals, but private as well; few people understand the depth of the INFP’s commitment to their beliefs.

//     INFPs are sensitive and empathetic, and engage themselves in a lifelong quest for meaning and authenticity. The mundane aspects of life are of less interest to this type, and they are more excited by interesting ideas than by practical facts. They typically accept others without question, and may take special interest in offbeat points of view or alternative lifestyles. They often have a special affection for the arts, especially the avant garde, as they love experiencing new concepts in self-expression.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Arts and Design

//     Fine Artist
//     Fashion Designer
//     Graphic Designer
//     Multimedia Artist or Animator

//     Community and Social Service

//     Mental Health Counselor
//     School or Career Counselor
//     Community Service Manager
//     Social Worker

//     Education and Library

//     Archivist or Curator
//     Elementary School Teacher
//     Librarian
//     Preschool Teacher
//     Professor or College Instructor
//     Special Education Teacher

//     Health Care

//     Audiologist
//     Chiropractor
//     Nutritionist
//     Genetic Counselor
//     Massage Therapist
//     Midwife
//     Occupational Therapist
//     Physical Therapist
//     Speech-Language Pathologist
//     Veterinarian
//     Veterinary Technician

//     Business and Management

//     Fundraiser
//     Human Resources Specialist
//     Training or Development Manager

//     Sciences

//     Anthropologist or Archaeologist
//     Geographer
//     Historian
//     Psychologist
//     Sociologist
//     Zoologist or Wildlife Biologist

//     Communications

//     Editor
//     Film Editor
//     Interpreter or Translator
//     Photographer
//     Public Relations Specialist
//     Writer

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>4% of the general population</li><li>5% of women</li><li>4% of men</li><br><b>Facts</b><br><li>On personality trait measures, score as Artistic, Reflective, Careless, Sensitive, Flexible, and Appreciative</li><li>Among least likely of all types to suffer heart disease</li><li>In men, among least likely to report chronic pain</li><li>Second highest of all types to report marital dissatisfaction</li><li>Among most likely to have suicidal thoughts in college</li><li>Tend to be more successful than the average in learning a foreign language</li><li>Among types most likely to be dissatisfied with their work</li><li>Personal values include Autonomy and Creativity</li><li>Overrepresented in occupations in counseling, writing, and the arts</li></ul>"}
//     ]
// } else if ("/type/enfj" == $location.$$path.toLowerCase()) {
//     $scope.type = "ENFJ - The Teacher";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>ENFJs are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, ENFJs take a great deal of pride and joy in guiding others to work together to improve themselves and their community.</p><p>ENFJs are driven by a deep sense of altruism and empathy for other people. They have an intuitive sense of the emotions of others, and often act as an emotional barometer for the people around them. However, their compassion not reserved for the people close to them: they are often humanitarian in nature, and may feel genuine concern for the ills of the entire human race. They tend to personally experience the feelings of others, and feel compelled to act when they see people suffering.</p><p>ENFJs want close, supportive connections with others, and believe that cooperation is the best way to get things done. They like to be liked and are very sensitive to feedback, both positive and negative. They expect the best not just from themselves, but from others as well, and may find themselves disappointed when others are not as genuine in their intentions as the ENFJ. ENFJs work hard to maintain strong relationships, and strive to be valuable members of their families, groups, and communities.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Tolerant – ENFJs are true team players, and they recognize that that means listening to other peoples' opinions, even when they contradict their own. They admit they don't have all the answers, and are often receptive to dissent, so long as it remains constructive.
//     Reliable – The one thing that galls ENFJs the most is the idea of letting down a person or cause they believe in. If it's possible, ENFJs can always be counted on to see it through.
//     Charismatic – Charm and popularity are qualities ENFJs have in spades. They instinctively know how to capture an audience, and pick up on mood and motivation in ways that allow them to communicate with reason, emotion, passion, restraint – whatever the situation calls for. Talented imitators, ENFJs are able to shift their tone and manner to reflect the needs of the audience, while still maintaining their own voice.
//     Altruistic – Uniting these qualities is ENFJs' unyielding desire to do good in and for their communities, be it in their own home or the global stage. Warm and selfless, ENFJs genuinely believe that if they can just bring people together, they can do a world of good.
//     Natural Leaders – More than seeking authority themselves, ENFJs often end up in leadership roles at the request of others, cheered on by the many admirers of their strong personality and positive vision.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Overly Idealistic – People with the ENFJ personality type can be caught off guard as they find that, through circumstance or nature, or simple misunderstanding, people fight against them and defy the principles they've adopted, however well-intentioned they may be. They are more likely to feel pity for this opposition than anger, and can earn a reputation of naïveté.
//     Too Selfless – ENFJs can bury themselves in their hopeful promises, feeling others' problems as their own and striving hard to meet their word. If they aren't careful, they can spread themselves too thin, and be left unable to help anyone.
//     Too Sensitive – While receptive to criticism, seeing it as a tool for leading a better team, it's easy for ENFJs to take it a little too much to heart. Their sensitivity to others means that ENFJs sometimes feel problems that aren't their own and try to fix things they can't fix, worrying if they are doing enough.
//     Fluctuating Self-Esteem – ENFJs define their self-esteem by whether they are able to live up to their ideals, and sometimes ask for criticism more out of insecurity than out of confidence, always wondering what they could do better. If they fail to meet a goal or to help someone they said they'd help, their self-confidence will undoubtedly plummet.
//     Struggle to Make Tough Decisions – If caught between a rock and a hard place, ENFJs can be stricken with paralysis, imagining all the consequences of their actions, especially if those consequences are humanitarian.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ENFJs are natural teachers, often found organizing people to take part in some educational activity. They tend to take charge of a situation, and guide a group towards those activities and experiences which will help them learn and grow. They intuitively see the potential in people, and with charisma and warmth, they encourage others to pursue greater development of their strengths. They are typically dynamic and productive, and are often visibly energized when leading others to discover new knowledge.

//     ENFJs are typically good communicators, talented at using words to connect with others. They are perceptive about people and enjoy talking about relationships. They often enjoy helping others solve personal problems and like to share their insights about people, their emotions, and their motivations. They are empathetic sometimes to the point of being overinvolved, and can become exhausted if they are surrounded by too much negative emotion.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Community and Social Service

//     Health Educator
//     Marriage and Family Therapist
//     Rehabilitation Counselor
//     School or Career Counselor
//     Social Worker
//     Social or Community Service Manager

//     Media and Communication

//     Editor
//     Interpreter or Translator
//     Photographer
//     Public Relations Specialist
//     Public Relations Manager
//     Reporter
//     Author

//     Education

//     High School Teacher
//     Instructional Coordinator
//     Elementary School Teacher
//     Middle School Teacher
//     Preschool Teacher
//     College Instructor
//     Special Education Teacher
//     Adult Literacy Teacher
//     School Principal
//     College Administrator
//     Childcare Center Director

//     Business, Management, and Sales

//     Advertising and Promotions Manager
//     Human Resources Manager
//     Insurance Sales Agent
//     Real Estate Broker
//     Lodging Manager
//     Flight Attendant
//     Fundraiser
//     Human Resources Specialist
//     Market Research Analyst
//     Meeting or Convention Planner
//     Training or Development Specialist
//     Training or Development Manager
//     Sales Manager

//     Entertainment, Arts and Design

//     Actor
//     Producer or Director
//     Landscape Architect
//     Art Director
//     Floral Designer
//     Industrial Designer
//     Interior Designer

//     Personal Care and Service

//     Cosmetologist
//     Child Care Worker
//     Fitness Trainer

//     Sciences

//     Anthropologist or Archaeologist
//     Forester
//     Historian
//     Psychologist
//     Sociologist
//     Urban or Regional Planner

//     Legal

//     Legal Mediator
//     Lawyer

//     Healthcare

//     Athletic Trainer
//     Audiologist
//     Chiropractor
//     Dental Hygienist
//     Dietitian or Nutritionist
//     Genetic Counselor
//     Nurse Practitioner
//     Occupational Therapist
//     Physical Therapist
//     Physician Assistant
//     Recreational Therapist
//     Speech-Language Pathologist
//     Medical or Health Services Manager

//     Office and Administrative

//     Customer Service Representative
//     Receptionist
//     Executive Assistant

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>3% of the general population</li><li>3% of women</li><li>2% of men</li><br><b>Facts</b><br><li>On personality trait scales, scored as Active, Pleasant, Sociable, Demanding, Impatient, Appreciative, and Compromising</li><li>Most likely of all types to cope with stress by exercising</li><li>Most likely of all types to believe in a higher spiritual power</li><li>Ranked by psychologists as among least likely to have trouble in school</li><li>Personal values include Friendships, Education & Learning, Creativity, and Community Service</li><li>Among types highest in job satisfaction, but also among most likely to report plans to leave their jobs</li><li>Commonly found in careers in religion, teaching, and the arts</li></ul>"}
//     ]
// } else if ("/type/enfp" == $location.$$path.toLowerCase()) {
//     $scope.type = "ENFP - The Champion";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>The ENFP personality is a true free spirit. They are often the life of the party, but unlike Explorers, they are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% of the population that they comprise can certainly be felt in any crowd.</p><p>ENFPs tend to be curious about others and preoccupied with discovering the deeper meaning in people and ideas. They want authentic experience and often seek emotional intensity. ENFPs are easily bored by details and repetition and seek out situations that offer an escape from the mundane. Novelty is attractive to ENFPs, who often have a wide range of interests and friends from many backgrounds.</p><p>ENFPs prize individuality and often consider the pursuit of happiness to be the highest priority in life, both for themselves and for others. They place great importance on personal freedom and self-expression, and want to be able to go wherever inspiration leads.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Curious – When it comes to new ideas, ENFPs aren't interested in brooding – they want to go out and experience things, and don't hesitate to step out of their comfort zones to do so. ENFPs are imaginative and open-minded, seeing all things as part of a big, mysterious puzzle called life.
//     Observant – ENFPs believe that there are no irrelevant actions, that every shift in sentiment, every move and every idea is part of something bigger. To satisfy their curiosity, ENFPs try to notice all of these things, and to never miss a moment.
//     Energetic and Enthusiastic – As they observe, forming new connections and ideas, ENFPs won't hold their tongues – they're excited about their findings, and share them with anyone who'll listen. This infectious enthusiasm has the dual benefit of giving ENFPs a chance to make more social connections, and of giving them a new source of information and experience, as they fit their new friends' opinions into their existing ideas.
//     Excellent Communicators – It's a good thing that ENFPs have such strong people skills, or they'd never express these ideas. ENFPs enjoy both small talk and deep, meaningful conversations, which are just two sides of the same coin for them, and are adept at steering conversations towards their desired subjects in ways that feel completely natural and unforced.
//     Know How to Relax – It's not all “nature of the cosmos” discussions with ENFPs – people with this personality type know that sometimes, nothing is as important as simply having fun and experiencing life's joys. That Intuitive trait lets ENFPs know that it's time to shake things up, and these wild bursts of enthusiastic energy can surprise even their closest friends.
//     Very Popular and Friendly – All this adaptability and spontaneity comes together to form a person who is approachable, interesting and exciting, with a cooperative and altruistic spirit and friendly, empathetic disposition. ENFPs get along with pretty much everyone, and their circles of friends stretch far and wide.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Poor Practical Skills – When it comes to conceiving ideas and starting projects, especially involving other people, ENFPs have exceptional talent. Unfortunately their skill with upkeep, administration, and follow-through on those projects struggles. Without more hands-on people to help push day-to-day things along, ENFPs' ideas are likely to remain just that – ideas.
//     Find it Difficult to Focus – ENFPs are natural explorers of interpersonal connections and philosophy, but this backfires when what needs to be done is that TPS report sitting right in front of them. It's hard for ENFPs to maintain interest as tasks drift towards routine, administrative matters, and away from broader concepts.
//     Overthink Things – ENFPs don't take things at face value – they look for underlying motives in even the simplest things. It's not uncommon for ENFPs to lose a bit of sleep asking themselves why someone did what they did, what it might mean, and what to do about it.
//     Get Stressed Easily – All this overthinking isn't just for their own benefit – ENFPs, especially Turbulent ones, are very sensitive, and care deeply about others' feelings. A consequence of their popularity is that others often look to them for guidance and help, which takes time, and it's easy to see why ENFPs sometimes get overwhelmed, especially when they can't say yes to every request.
//     Highly Emotional – While emotional expression is healthy and natural, with ENFPs even viewing it as a core part of their identity, it can come out strongly enough to cause problems for this personality type. Particularly when under stress, criticism or conflict, ENFPs can experience emotional bursts that are counter-productive at best.
//     Independent to a Fault – ENFPs loathe being micromanaged and restrained by heavy-handed rules – they want to be seen as highly independent masters of their own fates, even possessors of an altruistic wisdom that goes beyond draconian law. The challenge for ENFPs is that they live in a world of checks and balances, a pill they are not happy to swallow.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ENFPs love to talk about people: not just the facts, but what motivates them, what inspires them, and what they envision achieving in life. They’ll often share their own aspirations freely, and want to hear others’ in return. The ENFP is unlikely to judge anyone’s dream, and will discuss the most imaginative and outlandish of fantasies with warm, enthusiastic intensity. They love to explore creative possibilities, and nothing deflates them faster than talking about dry facts or harsh reality.

//     ENFPs often seem unconventional, and may come off as scattered; they don’t tend to be in touch with their physical surroundings. They often overlook the details, as they are more likely to focus on connecting with other people or on exploring their own imagination and self-expression. They have little patience for the mundane and want to experience life with intensity and flair. ENFPs often have an artistic streak, and may be artistic in appearance. Many have developed a distinctive and quirky personal style.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Arts and Entertainment

//     Actor
//     Dancer or Choreographer
//     Music Director or Composer
//     Musician or Singer
//     Producer or Director
//     Art Director
//     Craft or Fine Artist
//     Fashion Designer
//     Floral Designer
//     Interior Designer
//     Multimedia Artist

//     Sales

//     Advertising Sales Agent
//     Insurance Sales Agent
//     Real Estate Agent
//     Retail Salesperson
//     Travel Agent

//     Service and Personal Care

//     Animal Trainer
//     Barber, Hairdresser, or Cosmetologist
//     Child Care Worker
//     Fitness Trainer
//     Recreation Worker
//     Skincare Specialist
//     Bartender
//     Waiter or Waitress

//     Media and Communication

//     Announcer
//     Editor
//     Interpreter
//     Photographer
//     Public Relations Specialist
//     Reporter
//     Writer or Author

//     Science and Nature

//     Anthropologist or Archaeologist
//     Conservation Scientist
//     Psychologist
//     Sociologist
//     Urban or Regional Planner
//     Landscape Architect

//     Education

//     High School Teacher
//     Instructional Coordinator
//     Kindergarten or Elementary School Teacher
//     Middle School Teacher
//     Preschool Teacher
//     Special Education Teacher
//     Teacher Assistant
//     Preschool or Childcare Center Director

//     Healthcare

//     Athletic Trainer
//     Audiologist
//     Chiropractor
//     Dental Assistant
//     Dental Hygienist
//     Nutritionist
//     Genetic Counselor
//     Massage Therapist
//     Nurse Midwife
//     Occupational Health and Safety Specialist
//     Occupational Health and Safety Technician
//     Occupational Therapist
//     Occupational Therapy Assistant or Aide
//     Physical Therapist
//     Physical Therapist Assistant
//     Recreational Therapist
//     Speech-Language Pathologist
//     Veterinarian
//     Veterinary Technologist or Technician

//     Business and Management

//     Fundraiser
//     Human Resources Specialist
//     Meeting or Convention Planner
//     Buyer
//     Training or Development Specialist
//     Training or Development Manager
//     Lodging Manager
//     Public Relations Manager
//     Sales Manager
//     Advertising and Promotions Manager
//     Human Resources Manager
//     Customer Service Representative
//     Receptionist
//     Legal Mediator

//     Community and Social Service

//     Health Educator
//     Mental Health Counselor
//     Rehabilitation Counselor
//     School or Career Counselor
//     Social or Human Service Assistant
//     Social Worker
//     Substance Abuse or Behavioral Disorder Counselor
//     Social or Community Service Manager

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>8% of the general population</li><li>10% of women</li>6% of men</li><br><b>Facts</b><br><li>On personality trait scales, scored as Enthusiastic, Outgoing, Spontaneous, Changeable, Impulsive, Energetic, and Understanding</li><li>Scored among highest of all types in available resources for coping with stress</li><li>ENFP women are less likely to suffer from heart disease</li><li>ENFP men are less likely to suffer from chronic pain</li><li>Rated by psychologists as among most likely of all types to have trouble in school</li><li>Overrepresented among academically talented elementary school students</li><li>Personal values include Home & family, Friendships, Creativity, Learning, and Community Service</li><li>Commonly found in careers in counseling, teaching, religion, and the arts</li></ul>"}
//     ]
// } else if ("/type/istj" == $location.$$path.toLowerCase()) {
//     $scope.type = "ISTJ - The Inspector";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>The ISTJ personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make ISTJs a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the ISTJ personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, ISTJs hold back none of their time and energy completing each relevant task with accuracy and patience.</p><p>ISTJs like to know what the rules of the game are, valuing predictability more than imagination. They rely on their past experience to guide them, and are most comfortable in familiar surroundings. ISTJs trust the proven method, and appreciate the value of dedicated practice to build confidence in their skills.</p><p>ISTJs are hardworking and will persist until a task is done. They are logical and methodical, and often enjoy tasks that require them to use step-by-step reasoning to solve a problem. They are meticulous in their attention to details, and examine things closely to be sure they are correct. With their straightforward logic and orientation to detail, ISTJs work systematically to bring order to their own small parts of the world.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Honest and Direct – Integrity is the heart of the ISTJ personality type. Emotional manipulation, mind games and reassuring lies all run counter to ISTJs' preference for managing the reality of the situations they encounter with plain and simple honesty.
//     Strong-willed and Dutiful – ISTJs embody that integrity in their actions too, working hard and staying focused on their goals. Patient and determined, people with the ISTJ personality type meet their obligations, period.
//     Very Responsible – ISTJs' word is a promise, and a promise means everything. ISTJs would rather run themselves into the ground with extra days and lost sleep than fail to deliver the results they said they would. Loyalty is a strong sentiment for ISTJ personalities, and they fulfill their duties to the people and organizations they've committed themselves to.
//     Calm and Practical – None of their promises would mean much if ISTJs lost their tempers and broke down at every sign of hardship – they keep their feet on the ground and make clear, rational decisions. Peoples' preferences are a factor to consider in this process, and ISTJs work to make the best use of individual qualities, but these decisions are made with effectiveness in mind more so than empathy. The same applies to criticisms, for others and themselves.
//     Create and Enforce Order – The primary goal of any ISTJ is to be effective in what they've chosen to do, and they believe that this is accomplished best when everyone involved knows exactly what is going on and why. Unclear guidelines and people who break established rules undermine this effort, and are rarely tolerated by ISTJs. Structure and rules foster dependability; chaos creates unforeseen setbacks and missed deadlines.
//     Jacks-of-all-trades – Much like Analysts (NT), ISTJs are proud repositories of knowledge, though the emphasis is more on facts and statistics than concepts and underlying principles. This allows ISTJs to apply themselves to a variety of situations, picking up and applying new data and grasping the details of challenging situations as a matter of course.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Stubborn – The facts are the facts, and ISTJs tend to resist any new idea that isn't supported by them. This factual decision-making process also makes it difficult for people with the ISTJ personality type to accept that they were wrong about something – but anyone can miss a detail, even them.
//     Insensitive – While not intentionally harsh, ISTJs are often hurt more sensitive types' feelings by the simple mantra that honesty is the best policy. ISTJ personalities may take emotions into consideration, but really only so far as to determine the most effective way to say what needs to be said.
//     Always by the Book – ISTJs believe that things work best with clearly defined rules, but this makes them reluctant to bend those rules or try new things, even when the downside is minimal. Truly unstructured environments leave ISTJs all but paralyzed.
//     Judgmental – Opinions are opinions and facts are facts, and ISTJs are unlikely to respect people who disagree with those facts, or especially those who remain willfully ignorant of them.
//     Often Unreasonably Blame Themselves – All this can combine to make ISTJs believe they are the only ones who can see projects through reliably. As they load themselves with extra work and responsibilities, turning away good intentions and helpful ideas, ISTJs sooner or later hit a tipping point where they simply can't deliver. Since they've heaped the responsibility on themselves, ISTJs then believe the responsibility for failure is theirs alone to bear.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ISTJs have a serious, conservative air about them. They want to know and follow the rules of the game, and typically seek out predictable surroundings where they understand their role. You may find the ISTJ doing something useful even in social situations (for instance, organizing coats and hats at a party) as they’re often more comfortable taking charge of a task than they are chatting up strangers. When given something to do, they are highly dependable, and follow it through to the end.

//     ISTJs are practical and no-nonsense, and rarely call attention to themselves. Their clothes and possessions tend to be chosen based on utility rather than fashion, and they have an affection for the classics. ISTJs typically speak in a straightforward manner and have a good head for details. They are usually more enthusiastic about sharing factual information than exploring abstract concepts or unproven ideas.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Auditor
//     Actuary
//     Budget Analyst
//     Accountant
//     Chief Information Officer
//     Office Manager
//     Efficiency Analyst
//     Stockbroker
//     Estate Planner
//     Property Manager
//     Real Estate Appraiser
//     Bank Teller
//     Statistician
//     Economist
//     Cost Estimator
//     Airplane Pilot
//     Computer Programmer
//     Database Administrator
//     Electrician
//     Environmental Engineer
//     Mechanic
//     Flight Engineer
//     Civil Engineer
//     Nuclear Engineer
//     Health & Safety Engineer
//     Power Plant Operator
//     Compliance Inspector
//     Geologist
//     Landscaping Manager
//     Farmer or Rancher
//     Technical Instructor
//     School Administrator
//     Criminalist
//     Police Officer
//     Dentist
//     Pharmacist
//     Surgeon
//     Coroner
//     Medical Technologist
//     Physician Assistant
//     Optometrist
//     Health Care Administrator
//     Judge
//     Paralegal
//     Librarian

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>12% of the general population</li><li>7% of women</li><li>16% of men</li><br><b>Facts</b><br><li>On personality trait measures, score as Calm, Stable, Steady, Cautious, and Conventional</li><li>More likely than other types to experience cardiac problems and hypertension</li><li>More likely than other types to experience chronic pain</li><li>Among four highest types in college GPA</li><li>More frequent among African Americans</li><li>Personal values include Financial Security</li><li>Most likely of all types to enjoy a work environment where “everything is done by the book”</li><li>Overrepresented among bank officers, financial managers, MBA students, and small business owners</li><li>Often found in careers in management, administration, law enforcement, and accounting</li></ul>"}
//     ]
// } else if ("/type/estj" == $location.$$path.toLowerCase()) {
//     $scope.type = "ESTJ - The Supervisor";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>ESTJs are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the ESTJ personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, ESTJs often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.</p><p>ESTJs are conventional, factual, and grounded in reality. For the ESTJ, the proof is in the past: what has worked and what has been done before. They value evidence over conjecture, and trust their personal experience. ESTJs look for rules to follow and standards to meet, and often take a leadership role in helping other people meet expectations as well. They concern themselves with maintaining the social order and keeping others in line.</p><p>ESTJs often take on a project manager role at home as well as at work, and excel at setting goals, making decisions, and organizing resources to accomplish a task. The ESTJ wants to achieve efficient productivity and typically believes this is best accomplished when people and systems are well organized.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Dedicated – Seeing things to completion borders on an ethical obligation for ESTJs. Tasks aren't simply abandoned because they've become difficult or boring – people with the ESTJ personality type take them up when they are the right thing to do, and they will be finished so long as they remain the right thing to do.
//     Strong-willed – A strong will makes this dedication possible, and ESTJs don't give up their beliefs because of simple opposition. ESTJs defend their ideas and principles relentlessly, and must be proven clearly and conclusively wrong for their stance to budge.
//     Direct and Honest – ESTJs trust facts far more than abstract ideas or opinions. Straightforward statements and information are king, and ESTJ personalities return the honesty (whether it's wanted or not).
//     Loyal, Patient and Reliable – ESTJs work to exemplify truthfulness and reliability, considering stability and security very important. When ESTJs say they'll do something, they keep their word, making them very responsible members of their families, companies and communities.
//     Enjoy Creating Order – Chaos makes things unpredictable, and unpredictable things can't be trusted when they are needed most – with this in mind, ESTJs strive to create order and security in their environments by establishing rules, structures and clear roles.
//     Excellent Organizers – This commitment to truth and clear standards makes ESTJs capable and confident leaders. People with this personality type have no problem distributing tasks and responsibilities to others fairly and objectively, making them excellent administrators.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Inflexible and Stubborn – The problem with being so fixated on what works is that ESTJs too often dismiss what might work better. Everything is opinion until proven, and ESTJ personalities are reluctant to trust an opinion long enough for it to have that chance.
//     Uncomfortable with Unconventional Situations – ESTJs are strong adherents to tradition and when suddenly forced to try unvetted solutions, they become uncomfortable and stressed. New ideas suggest that their methods weren't good enough, and abandoning what has always worked before in favor of something that may yet fail risks their image of reliability.
//     Judgmental – ESTJs have strong convictions about what is right, wrong, and socially acceptable. ESTJs' compulsion to create order often extends to all things and everyone, ignoring the possibility that there are two right ways to get things done. ESTJs do not hesitate to let these 'deviants' know what they think, considering it their duty to set things right.
//     Too Focused on Social Status – ESTJs take pride in the respect of their friends, colleagues and community and while difficult to admit, are very concerned with public opinion. ESTJs (especially Turbulent ones) can get so caught up in meeting others' expectations that they fail to address their own needs.
//     Difficult to Relax – This need for respect fosters a need to maintain their dignity, which can make it difficult to cut loose and relax for risk of looking the fool, even in good fun.
//     Difficulty Expressing Emotion – This is all evidence of ESTJs' greatest weakness: expressing emotions and feeling empathy. People with the ESTJ personality type get so caught up in the facts and most effective methods that they forget to think of what makes others happy, or of their sensitivity. A detour can be breathtakingly beautiful, a joy for the family, but ESTJs may only see the consequence of arriving at their destination an hour late, hurting their loved ones by rejecting the notion too harshly.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ESTJs command a situation, with the sense that they know how things should go and are ready to take charge to make sure that it happens. They are task-oriented and put work before play. Confident and tough-minded, the ESTJ appears almost always to be in control. ESTJs appreciate structure and often begin to organize as soon as they enter a room. They want to establish the ground rules and make sure everyone does what they’re supposed to.

//     ESTJs are often involved in institutions: clubs, associations, societies, and churches, where they usually take a leadership role. They typically connect with others through sharing ritual and routine. Social interaction for ESTJs often means following an established tradition to engage with others in a structured way. ESTJs tend to respect and seek out hierarchy. They want to know who’s in charge, and will assign levels of responsibility if none exist. Once a structure is in place, ESTJs typically trust authority figures and expect obedience from people of lower rank.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Sales Engineer
//     Stockbroker
//     Insurance Agent
//     Sales Manager
//     Purchasing Agent
//     Real Estate Agent
//     Hotel Manager
//     Credit Analyst
//     Budget Analyst
//     Insurance Adjuster
//     Financial Counselor
//     Project Manager
//     Management Consultant
//     Office Manager
//     Public Administrator
//     Chief Financial Officer
//     Chief Information Officer
//     Military Officer
//     Police Officer
//     Airline Pilot
//     Vocational Teacher
//     Farmer or Rancher
//     Chef
//     Attorney
//     Paralegal
//     Judge
//     Auditor
//     School Principal
//     Property Manager
//     Restaurant Owner
//     Pharmacist
//     Dentist
//     Physician
//     Athletic Trainer
//     Civil Engineer
//     Mechanical Engineer
//     Industrial Engineer
//     Flight Engineer
//     Database Administrator
//     Real Estate Appraiser
//     Cost Estimator
//     Building Inspector
//     Factory Supervisor
//     General Contractor
//     Funeral Director

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>9% of the general population</li><li>6% of women</li><li>11% of men</li><br><b>Facts</b><br><li>On personality trait measures, likely to score as Contented, Energetic, Prejudiced, Self-Satisfied, and Practical</li><li>More likely than other types to exhibit Type A behavior</li><li>Of all types, scored highest in coping resources (with ENFP)</li><li>Ranked 3rd highest in marital satisfaction among all types</li><li>Among top four types in college GPA</li><li>Least likely of all types to think about suicide in college</li><li>Among most likely to stay in college</li><li>Among types most satisfied with their work</li><li>High-ranking personal values include Health, Financial Security, Achievement, and Prestige</li><li>Overrepresented among bank officers, financial managers, and business owners</li></li></ul>"}
//     ]
// } else if ("/type/isfj" == $location.$$path.toLowerCase()) {
//     $scope.type = "ISFJ - The Protector";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>The ISFJ personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though possessing the Feeling (F) trait, ISFJs have excellent analytical abilities; though Introverted (I), they have well-developed people skills and robust social relationships; and though they are a Judging (J) type, ISFJs are often receptive to change and new ideas. As with so many things, people with the ISFJ personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.</p><p>ISFJs are driven by their personal values, and are conscientious in their behavior. They typically want to work hard, get along with others, and make sure they do what is expected of them.</p><p>ISFJs value relationships highly and strive to cooperate and maintain harmony with others. They want stability and longevity in their relationships, and tend to maintain a deep devotion to family. They feel most connected with people they know they can rely upon over the long term.</p><p>ISFJs appreciate tradition and like knowing how things were done in the past. They are loyal to established methods and values, and want to observe the proper, accepted way of doing things. They place great importance on fitting in with established institutions and contributing what they can to maintain strong, stable social structures. In groups, they often take on the role of historian, ensuring that new members respect and value the established customs.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Supportive – ISFJs are the universal helpers, sharing their knowledge, experience, time and energy with anyone who needs it, and all the more so with friends and family. People with this personality type strive for win-win situations, choosing empathy over judgment whenever possible.
//     Reliable and Patient – Rather than offering sporadic, excited rushes that leave things half finished, ISFJs are meticulous and careful, taking a steady approach and bending with the needs of the situation just enough to accomplish their end goals. ISFJs not only ensure that things are done to the highest standard, but often go well beyond what is required.
//     Imaginative and Observant – ISFJs are very imaginative, and use this quality as an accessory to empathy, observing others' emotional states and seeing things from their perspective. With their feet firmly planted on the ground, it is a very practical imagination, though they do find things quite fascinating and inspiring.
//     Enthusiastic – When the goal is right, ISFJs take all this support, reliability and imagination and apply it to something they believe will make a difference in people's lives – whether fighting poverty with a global initiative or simply making a customer's day.
//     Loyal and Hard-Working – Given a little time, this enthusiasm grows into loyalty – ISFJ personalities often form an emotional attachment to the ideas and organizations they've dedicated themselves to. Anything short of meeting their obligations with good, hard work fails their own expectations.
//     Good Practical Skills – The best part is, ISFJs have the practical sense to actually do something with all this altruism. If mundane, routine tasks are what need to be done, ISFJs can see the beauty and harmony that they create, because they know that it helps them to care for their friends, family, and anyone else who needs it.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Humble and Shy – The meek shall inherit the earth, but it's a long road if they receive no recognition at all. This is possibly ISFJs' biggest challenge, as they are so concerned with others' feelings that they refuse to make their thoughts known, or to take any duly earned credit for their contributions. ISFJs' standards for themselves are also so high that, knowing they could have done some minor aspect of a task better, they often downplay their successes entirely.
//     Take Things Too Personally – ISFJs have trouble separating personal and impersonal situations – any situation is still an interaction between two people, after all – and any negativity from conflict or criticism can carry over from their professional to their personal lives, and back again.
//     Repress Their Feelings – People with the ISFJ personality type are private and very sensitive, internalizing their feelings a great deal. Much in the way that ISFJs protect others' feelings, they must protect their own, and this lack of healthy emotional expression can lead to a lot of stress and frustration.
//     Overload Themselves – Their strong senses of duty and perfectionism combine with this aversion to emotional conflict to create a situation where it is far too easy for ISFJs to overload themselves – or to be overloaded by others – as they struggle silently to meet everyone's expectations, especially their own.
//     Reluctant to Change – These challenges can be particularly hard to address since ISFJ personalities value traditions and history highly in their decisions. A situation sometimes needs to reach a breaking point before ISFJs are persuaded by circumstance, or the strong personality of a loved one, to alter course.
//     Too Altruistic – This is all compounded and reinforced by ISFJs' otherwise wonderful quality of altruism. Being such warm, good-natured people, ISFJs are willing to let things slide, to believe that things will get better soon, to not burden others by accepting their offers of help, while their troubles mount unassisted.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ISFJs are characteristically humble and unassuming, and rarely call attention to themselves. They can often be found offering assistance to others in a modest, understated way. They are loyal and hardworking, and often commit themselves to tasks and projects with the aim of being helpful to their families, friends, and communities. They are typically involved in social groups, but do not want the spotlight: they are more likely to be found behind the scenes, working diligently to fulfill their role.

//     ISFJs are oriented to relationships, but can be reserved with new people. They rarely disclose personal information quickly. They tend to be focused and aware of their surroundings, and relate details from their own personal experience. They often converse in terms of what has happened to them and what they have seen first-hand. They are compassionate listeners, and typically remember details about people. They often enjoy hearing the facts about others in the process of making a connection.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Dentist
//     Health Care Administrator
//     Nurse
//     Speech Pathologist
//     Veterinarian
//     Optometrist
//     Family Physician
//     Physical Therapist
//     Radiation Therapist
//     Audiologist
//     Physician Assistant
//     Medical Assistant
//     Dental Hygienist
//     Nutritionist
//     Dialysis Technician
//     Preschool Teacher
//     Elementary Teacher
//     School Administrator
//     Counselor
//     Social Worker
//     Religious Educator
//     Funeral Director
//     Paralegal
//     Court Reporter
//     Probation Officer
//     Credit Counselor
//     Farmer or Rancher
//     Electrician
//     Jeweler
//     Interior Designer
//     Biologist
//     Food Scientist
//     Medical Researcher
//     Conservation Scientist
//     Librarian
//     Curator
//     Historian
//     Genealogist
//     Real Estate Appraiser
//     Office Manager
//     Customer Service Rep
//     Hotel Manager
//     Tech Support Specialist
//     Bookkeeper
//     Administrative Assistant

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>

//     14% of the general population
//     19% of women
//     8% of men</li><br><b>Facts</b><br><li>

//     On personality trait measures, score as Conservative, Conventional, Guarded, and Reserved
//     Among types most likely to believe in a higher spiritual power
//     More likely than average to experience chronic pain
//     Among types most likely to suffer heart disease
//     Second most common type among education majors in college
//     More likely than other types to watch more than 3 hours of television per day
//     Personal values include Happy family, Health and Spirituality
//     Overrepresented among MBA students and male small business owners
//     Among three types with the lowest income
//     Commonly found in education, health care, and religious occupations

//     </li></ul>"}
//     ]
// } else if ("/type/esfj" == $location.$$path.toLowerCase()) {
//     $scope.type = "ESFJ - The Provider";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>People who share the ESFJ personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, ESFJs are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, ESFJs continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.</p><p>ESFJs act according to a strict moral code, and look for others to do the same. They often see things in terms of black and white, right and wrong, and they are typically not shy about sharing their evaluations of others' behavior. ESFJs seek harmony and cooperation, and feel this is best accomplished when everyone follows the same set of rules. They have a sense of order in the way people relate to one another, and often take on roles that allow them to help enforce that social order.</p><p>ESFJs feel a sense of personal responsibility for other people's needs, and are usually eager to get involved and help out. They tend to be serious and practical, dutifully putting business before pleasure—especially the business of caring for others. They typically enjoy routine and often keep a regular schedule that allows them to be organized and productive.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Strong Practical Skills – ESFJs are excellent managers of day-to-day tasks and routine maintenance, enjoying making sure that those who are close to them are well cared for.
//     Strong Sense of Duty – People with the ESFJ personality type have a strong sense of responsibility and strive to meet their obligations, though this may sometimes be more from a sense of social expectations than intrinsic drive.
//     Very Loyal – Valuing stability and security very highly, ESFJs are eager to preserve the status quo, which makes them extremely loyal and trustworthy partners and employees. ESFJs are true pillars of any groups they belong to – whether it is their family or a community club, people with this personality type can always be relied upon.
//     Sensitive and Warm – Helping to ensure that stability, ESFJ personalities seek harmony and care deeply about other people's feelings, being careful not to offend or hurt anybody. ESFJs are strong team players, and win-win situations are the stuff smiles are made of.
//     Good at Connecting with Others – These qualities come together to make ESFJs social, comfortable and well-liked. ESFJ personalities have a strong need to 'belong', and have no problem with small talk or following social cues in order to help them take an active role in their communities.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Worried about Their Social Status – These Strengths are related to a chief Weakness: ESFJs' preoccupation with social status and influence, which affects many decisions they make, potentially limiting their creativity and open-mindedness.
//     Inflexible – ESFJs place a lot of importance on what is socially acceptable, and can be very cautious, even critical of anything unconventional or outside the mainstream. People with this personality type may also sometimes push their own beliefs too hard in an effort to establish them as mainstream.
//     Reluctant to Innovate or Improvise – Just as they can be critical of others' 'unusual' behavior, ESFJs may also be unwilling to step out of their own comfort zones, usually for fear of being (or just appearing) different.
//     Vulnerable to Criticism – It can be especially challenging to change these tendencies because ESFJs are so conflict-averse. ESFJ personalities can become very defensive and hurt if someone, especially a person close to them, criticizes their habits, beliefs or traditions.
//     Often Too Needy – ESFJs need to hear and see a great deal of appreciation. If their efforts go unnoticed, people with the ESFJ personality type may start fishing for compliments, in an attempt to get reassurance of how much they are valued.
//     Too Selfless – The other side of this is that ESFJs sometimes try to establish their value with doting attention, something that can quickly overwhelm those who don't need it, making it ultimately unwelcome. Furthermore, ESFJs often neglect their own needs in the process.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ESFJs may often be found playing host or hostess. They tend to take on the role of organizer without hesitation, and want to be sure that everyone is taken care of. Roles such as committee leader, event planner, and church volunteer suit the ESFJ well. They are typically engaged with their communities and work hard to do their part in maintaining the social order. ESFJs are interested in other people and like to know the details of their lives. Gossip is a favorite pasttime of many ESFJs; they love to share stories about the people around them.

//     ESFJs have a clear moral code that guides their behavior and their expectations from others. They often have strong opinions about how people should behave and the proper thing to do. Manners and other codes of social interaction are often of great interest to ESFJs. They may think in terms of black and white, right and wrong. They can be judgmental of others who they do not think are acting appropriately, but they have the best of intentions: they simply want everyone to follow the rules so they can all get along. The ESFJ wants things to be all right with the people around them, and may become very involved with others’ problems and concerns.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Elementary Teacher
//     Special Education Teacher
//     Child Care Provider
//     School Administrator
//     Counselor
//     Social Worker
//     Health Care Administrator
//     Police Officer
//     Paralegal
//     Court Reporter
//     Real Estate Appraiser
//     Technical Writer
//     Cosmetologist
//     Hotel Manager
//     Caterer
//     Family Physician
//     Dentist
//     Medical Assistant
//     Optometrist
//     Speech Pathologist
//     Nurse
//     Surgeon
//     Physical Therapist
//     Fitness Trainer
//     Dental Hygienist
//     Radiation Therapist
//     Respiratory Therapist
//     Pediatrician
//     Physician Assistant
//     Dietitian
//     Minister
//     Buyer
//     Public Relations Manager
//     HR Manager
//     Corporate Trainer
//     Event Coordinator
//     Funeral Director
//     Real Estate Agent
//     Insurance Agent
//     Merchandise Planner
//     Advertising Sales Agent
//     Office Manager
//     Fundraiser
//     Receptionist
//     Customer Service Rep

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>

//     12% of the general population
//     17% of women
//     8% of men</li><br><b>Facts</b><br><li>

//     Underrepresented among people suffering from substance abuse
//     Among types highest in resources for coping with stress
//     Second most likely of all types to report believing in a higher spiritual power
//     Highest of all types in reported satisfaction with their marriage or intimate relationship
//     Among most likely of all types to stay in college
//     Most likely of all types to be satisfied with their co-workers
//     Values at work include clear structure, security, and the ability to be of service to others
//     Among the types most satisfied with their work
//     Commonly found in careers in education, health care, and religion

//     </li></ul>"}
//     ]
// } else if ("/type/istp" == $location.$$path.toLowerCase()) {
//     $scope.type = "ISTP - The Craftsman";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, ISTPs find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.</p><p>ISTPs are curious about the mechanics of the world around them and typically have a unique ability to manipulate the tools in their environments. They tend to study how things work and often achieve mastery in the use and operation of machines, instruments, and equipment. They seek understanding, but in a practical sense: they like to be able to put their technical knowledge to immediate use and are quickly bored by theory.</p><p>ISTPs tend to be detached and prefer the logic of mechanical things to the complexity of human emotions. Independent and reserved, ISTPs treasure their personal space, and want to be free to be spontaneous and follow their own lead. ISTPs are selective about their relationships, and appreciate others who allow them plenty of freedom to do their own thing.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Optimistic and Energetic – ISTPs are usually up to their elbows in some project or other. Cheerful and good-natured, people with the ISTP personality type (especially Assertive ones) rarely get stressed out, preferring to go with the flow.
//     Creative and Practical – ISTPs are very imaginative when it comes to practical things, mechanics, and crafts. Novel ideas come easily, and they love using their hands to put them into action.
//     Spontaneous and Rational – Combining spontaneity with logic, ISTPs can switch mindsets to fit new situations with little effort, making them flexible and versatile individuals.
//     Know How to Prioritize – This flexibility comes with some unpredictability, but ISTP personalities are able to store their spontaneity for a rainy day, releasing their energy just when it's needed most.
//     Great in a Crisis – With all this hands-on creativity and spontaneity, it's no wonder that ISTPs are naturals in crisis situations. People with this personality type usually enjoy a little physical risk, and they aren't afraid to get their hands dirty when the situation calls for it.
//     Relaxed – Through all this, ISTPs are able to stay quite relaxed. They live in the moment and go with the flow, refusing to worry too much about the future.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Stubborn – As easily as ISTPs go with the flow, they can also ignore it entirely, and usually move in another direction with little apology or sensitivity. If someone tries to change ISTPs' habits, lifestyle or ideas through criticism, they can become quite blunt in their irritation.
//     Insensitive – ISTPs use logic, and even when they try to meet others halfway with empathy and emotional sensitivity, it rarely seems to quite come out right, if anything is even said at all.
//     Private and Reserved – ISTP personalities are notoriously difficult to get to know. They are true introverts, keeping their personal matters to themselves, and often just prefer silence to small talk.
//     Easily Bored – ISTPs enjoy novelty, which makes them excellent tinkerers, but much less reliable when it comes to focusing on things long-term. Once something is understood, ISTPs tend to simply move on to something new and more interesting.
//     Dislike Commitment – Long-term commitments are particularly onerous for ISTPs. They prefer to take things day-by-day, and the feeling of being locked into something for a long time is downright oppressive. This can be a particular challenge in ISTPs' romantic relationships.
//     Risky Behavior – This stubbornness, difficulty with others' emotions, focus on the moment, and easy boredom can lead to unnecessary and unhelpful boundary-pushing, just for fun. ISTPs have been known to escalate conflict and danger just to see where it goes, something that can have disastrous consequences for everyone around if they lose control of the situation.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ISTPs are typically reserved and even aloof. Tolerant and nonjudgmental, the ISTP calmly takes in the details and facts of their surroundings, noticing sensory data and observing how things work. They often tune into what needs to be done, taking care of the immediate needs of the moment in a modest, inconspicuous way. They tend to prefer action to conversation, and are often private about their personal lives. ISTPs are unlikely to “open up” to new people in a conventional way, but may connect with others by sharing an activity or working together to solve a practical problem.

//     ISTPs are good with their hands and often mechanical. They are typically attracted to hands-on hobbies like woodworking or crafts, and may be found tinkering with bicycles, computers, cars, or household appliances. They often have an intuitive understanding of machines and a remarkable ability to fix things. ISTPs have an appreciation for risk and action, and often enjoy thrilling leisure activities like extreme sports, motorcycling, or weaponry.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Carpenter
//     Surveyor
//     Mechanic
//     Commercial Designer
//     Landscape Architect
//     Building Inspector
//     Forester
//     Farmer or Rancher
//     Exercise Physiologist
//     Athletic Trainer
//     Dental Hygienist
//     ER Physician
//     Chef
//     Photographer
//     Jeweler
//     Securities Analyst
//     Purchasing Agent
//     Financial Manager
//     Software Developer
//     Systems Analyst
//     Database Administrator
//     Software Tester
//     Property Manager
//     Office Manager
//     Cost Estimator
//     Economist
//     Budget Analyst
//     Financial Planner
//     Paralegal
//     Criminalist
//     Biologist
//     Geologist
//     Police Officer
//     Firefighter
//     Private Investigator
//     Military Officer
//     Intelligence Agent
//     Airline Pilot
//     Ship and Boat Captain
//     Flight Engineer
//     Civil Engineer
//     Mechanical Engineer
//     Electrical Engineer
//     Air Traffic Controller
//     Machinist

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>

//     5% of the general population
//     2% of women
//     9% of men</li><br><b>Facts</b><br><li>

//     On personality trait measures, score as Critical, Detached, Guarded, Independent, and Resourceful
//     Commonly found in populations of male college scholarship athletes
//     More likely than other types to suffer cardiac problems
//     Lowest ranked of all types in using social coping resources
//     One of four types least satisfied with their marriage or intimate relationship
//     Among types least likely to complete college
//     Personal values include Autonomy; at work, value Stability, Security, Independence, and Achievement
//     Commonly found in skilled trades, technical fields, agriculture, law enforcement, and military occupations

//     </li></ul>"}
//     ]
// } else if ("/type/isfp" == $location.$$path.toLowerCase()) {
//     $scope.type = "ISFP - The Composer";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>ISFP personality types are true artists, but not necessarily in the typical sense where they're out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it's that they use aesthetics, design and even their choices and actions to push the limits of social convention. ISFPs enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they've expressed more than once the phrase 'Don't box me in!'</p><p>ISFPs tend to be tolerant and nonjudgmental, but are deeply loyal to the people and causes that matter to them. They endeavor to accept and support other people, but are ultimately guided by their own core values. They will typically look for ways to be accommodating and may have difficulty dealing with others who are not willing to do the same.</p><p>ISFPs are typically modest and may underestimate themselves. They usually do not like to be in the spotlight, preferring instead to take a supporting role, and will avoid planning and organizing whenever possible. Sensitive and responsive, they step in to do what needs to be done and are satisfied by their personal sense of being helpful to others.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Charming – People with the ISFP personality type are relaxed and warm, and their “live and let live” attitude naturally makes them likable and popular.
//     Sensitive to Others – ISFPs easily relate to others' emotions, helping them to establish harmony and good will, and minimize conflict.
//     Imaginative – Being so aware of others' emotions, ISFP personalities use creativity and insight to craft bold ideas that speak to people's hearts. While it's hard to explain this quality on a resume, this vivid imagination and exploratory spirit help ISFPs in unexpected ways.
//     Passionate – Beneath ISFPs' quiet shyness beats an intensely feeling heart. When people with this personality type are caught up in something exciting and interesting, they can leave everything else in the dust.
//     Curious – Ideas are well and good, but ISFPs need to see and explore for themselves whether their ideas ring true. Work revolving around the sciences may seem a poor match for their traits, but a boldly artistic and humanistic vision is often exactly what research needs to move forward – if ISFPs are given the freedom they need to do so.
//     Artistic – ISFPs are able to show their creativity in tangible ways and with stunning beauty. Whether writing a song, painting an emotion, or presenting a statistic in a graph, ISFPs have a way of visualizing things that resonates with their audience.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Fiercely Independent – Freedom of expression is often ISFPs' top priority. Anything that interferes with that, like traditions and hard rules, creates a sense of oppression for ISFP personalities. This can make more rigidly structured academics and work a challenge.
//     Unpredictable – ISFPs' dislike long-term commitments and plans. The tendency to actively avoid planning for the future can cause strain in ISFPs' romantic relationships and financial hardship later in life.
//     Easily Stressed – ISFPs live in the present, full of emotion. When situations get out of control, people with this personality type (especially Turbulent ones) can shut down, losing their characteristic charm and creativity in favor of gnashing teeth.
//     Overly Competitive – ISFPs can escalate small things into intense competitions, turning down long-term success in their search for glory in the moment, and are unhappy when they lose.
//     Fluctuating Self-Esteem – It's demanded that skills be quantified, but that's hard to do with ISFPs' strengths of sensitivity and artistry. ISFPs' efforts are often dismissed, a hurtful and damaging blow, especially early in life. ISFPs can start to believe the naysayers without strong support.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ISFPs can be difficult to recognize because of their tendency to express themselves through action rather than words. They may initially appear distant or aloof, but if you watch closely, you can observe their caring in the thoughtful things they do for others. They are carefully observant of the practical needs of other people, and often step in with quiet, unassuming assistance at just the moment it is needed. ISFPs prefer to take a supportive role and are rarely assertive or demanding of attention. They are typically tolerant and accepting of others.

//     ISFPs typically have finely tuned artistic sensibilities. They are sensitive to color, texture, and tone, and often have an innate sense of what will be aesthetically pleasing. They are often naturals when it comes to arranging something artistically, and enjoy the process of taking in the sensations around them. ISFPs focus mostly on the experiences of the present moment, and are rarely ambitious, preferring instead to enjoy the simple pleasures of life: friends, family, and sensory delights such as food, music, and art.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Fashion Designer
//     Interior Designer
//     Cosmetologist
//     Artist
//     Landscape Architect
//     Jeweler
//     Carpenter
//     Chef
//     Tailor
//     Graphic Designer
//     Mechanic
//     Forester
//     Surveyor
//     Gardener
//     Florist
//     Nurse
//     Massage Therapist
//     Occupational Therapist
//     Veterinary Assistant
//     Dental Hygienist
//     Physical Therapist
//     Fitness Trainer
//     Optician
//     ER Physician
//     Physician Assistant
//     Dietitian
//     Pharmacist
//     Office Manager
//     Paralegal
//     Insurance Appraiser
//     Botanist
//     Geologist
//     Preschool Teacher
//     Social Worker
//     Translator
//     Special Education Teacher
//     Teacher's Aide
//     Air Traffic Controller
//     Police Officer
//     Firefighter
//     Residential Counselor
//     Animal Trainer
//     Retail Manager
//     Recreation Worker
//     Bookkeeper

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>

//     9% of the general population
//     10% of women
//     8% of men</li><br><b>Facts</b><br><li>

//     On personality trait measures, score as Easygoing
//     Among types most likely to report heart disease and hypertension
//     In college, likely to report low levels of assertiveness
//     In essays, projected themselves the fewest number of years into the future of all the types
//     Among the types least likely to stay in college
//     Most likely of all types to report stress associated with finances and children
//     In a national sample, likely to value a work environment which provides security, clear and simple instructions, and no expectation of extra work hours
//     Underrepresented among MBA students and small business owners
//     Commonly found in occupations in health care, business, and law enforcement

//     </li></ul>"}
//     ]
// } else if ("/type/esfp" == $location.$$path.toLowerCase()) {
//     $scope.type = "ESFP - The Performer";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>If anyone is to be found spontaneously breaking into song and dance, it is the ESFP personality type. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as ESFPs when it comes to encouraging others, and no other personality type does it with such irresistible style.</p><p>ESFPs live in the moment, enjoying what life has to offer. They are especially tuned into their senses and take pleasure in the sights, sounds, smells, and textures around them. ESFPs like to keep busy, filling their lives with hobbies, sports, activities, and friends. Because they'd rather live spontaneously than plan ahead, they can become overextended when there are too many exciting things to do. An ESFP hates nothing more than missing out on the fun.</p><p>Although they are characteristically fun-loving, ESFPs are also typically practical and down-to-earth. They are grounded in reality and are usually keenly aware of the facts and details in their environment, especially as they pertain to people. They are observant of others and their needs, and responsive in offering assistance. ESFPs enjoy helping other people, especially in practical, tangible ways.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Bold – ESFPs aren't known for holding back. Wanting to experience everything there is to experience, people with the ESFP personality type don't mind stepping out of their comfort zones when no one else is willing.
//     Original – Traditions and expectations are secondary to ESFPs, if a consideration at all. ESFP personalities love to experiment with new styles, and constantly find new ways to stick out in the crowd.
//     Aesthetics and Showmanship – Not stopping at mere outfits, ESFPs inject artistic creativity into their words and actions, too. Every day is a performance, and ESFPs love to put on a show.
//     Practical – To ESFPs, the world is meant to be felt and experienced. Truth is stranger than fiction, and ESFPs prefer to see and do than to wax philosophical about 'what-ifs'.
//     Observant – With all this focus on the here and now, on doing and acting, it makes sense that ESFPs are naturals when it comes to noticing real, tangible things and changes.
//     Excellent People Skills – More so than things though, ESFPs love to pay attention to people. They are talkative, witty, and almost never run out of things to discuss. For people with this personality type, happiness and satisfaction stem from the time they spend with the people they enjoy being with.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Sensitive – ESFPs (especially Turbulent ones) are strongly emotional, and very vulnerable to criticism – they can feel like they've been backed into a corner, sometimes reacting badly. This is probably ESFPs' greatest weakness, because it makes it so hard to address any other weaknesses brought to light.
//     Conflict-Averse – ESFPs sometimes ignore and avoid conflict entirely. They tend to say and do what's needed to get out of such situations, then move on to something more fun.
//     Easily Bored – Without constant excitement, ESFPs find ways to create it themselves. Risky behavior, self-indulgence, and the pleasures of the moment over long-term plans are all things ESFPs get into a little too often.
//     Poor Long-Term Planners – In fact, ESFP personalities rarely make detailed plans for the future. To them, things come as they come, and they rarely bother with taking the time to lay out steps and consequences, with the belief that they could change at any moment – even with things that can be planned.
//     Unfocused – Anything that requires long-term dedication and focus is a particular challenge for ESFPs. In academics, dense, unchanging subjects like Classic Literature are much more difficult than more dynamic, relatable subjects like psychology. The trick for ESFPs is to find day-to-day joy in broader goals, and to tough it out with those tedious things that must be done.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     ESFPs are often the life of the party, entertaining and engaging others with humor and enthusiasm. They notice whether other people are having fun, and do their best to create a good time for all. Typically at home in their physical environment, ESFPs may take the lead in getting everyone involved in some active diversion. ESFPs are generally friendly and likable, but can be hard to get close to; although they tend to be very open, they are reluctant to be serious or to talk about anything negative.

//     ESFPs are tuned into their senses, and often gravitate towards pleasing colors and textures in their environments. They often carefully choose fabrics and decorations with which to surround themselves. This attention also often translates into their appearance; ESFPs are often dressed in sensuous fabrics or bright, dazzling colors. They are often up on the latest trends, and like to excite the people around them with new environments and experiences.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     Elementary Teacher
//     Recreation Worker
//     Social Worker
//     Special Education Teacher
//     Nurse
//     Physical Therapist
//     Massage Therapist
//     Occupational Therapist
//     Veterinary Assistant
//     Fitness Trainer
//     Dental Hygienist
//     Pediatrician
//     Physician Assistant
//     Dietitian
//     Child Care Provider
//     Cosmetologist
//     Retail Manager
//     Buyer
//     Public Relations Manager
//     Event Coordinator
//     Corporate Trainer
//     Real Estate Agent
//     Insurance Agent
//     Retail Salesperson
//     Merchandise Planner
//     Landscape Manager
//     Restaurant Host
//     Receptionist
//     Flight Attendant
//     Farmer or Rancher
//     Fashion Designer
//     Interior Designer
//     Jeweler
//     Landscape Architect
//     Chef
//     Florist
//     Gardener
//     Musician
//     Artist
//     Costumer
//     Photographer
//     Police Officer
//     Firefighter
//     Residential Counselor
//     Animal Trainer

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>

//     9% of the general population
//     10% of women
//     7% of men</li><br><b>Facts</b><br><li>

//     On personality trait measures, score as Changeable, Energetic, Forceful, Initiating, and Resourceful
//     More likely to use emotional coping techniques over spiritual or physical resources
//     Tend to look to authority in education rather than expressing intellectual curiosity; prefer hands-on learning
//     Among most likely to stay in college
//     More likely than other types to watch television for more than 3 hours a day
//     Second highest of all types in marital satisfaction
//     Among types with lowest income
//     At work, tend to be satisfied with co-workers but dissatisfied with job security, stress, salary, and accomplishment
//     Personal values include Home/Family, Health, Friendships, Financial Security, and Spirituality
//     Overrepresented in health care, teaching, coaching, and child care occupations

//     </li></ul>"}
//     ]
// } else if ("/type/estp" == $location.$$path.toLowerCase()) {
//     $scope.type = "ESTP - The Dynamo";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>ESTP personality types always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP personalities love to be the center of attention. If an audience member is asked to come on stage, ESTPs volunteer – or volunteer a shy friend.</p><p>Theory, abstract concepts and plodding discussions about global issues and their implications don't keep ESTPs interested for long. ESTPs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. ESTPs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.</p><p>ESTPs are often natural athletes; they easily navigate their physical environment and are typically highly coordinated. They like to use this physical aptitude in the pursuit of excitement and adventure, and they often enjoy putting their skills to the test in risky or even dangerous activities.</p><p>The ESTP's focus is action in the moment. They are engaged with their environments and solve practical problems quickly. ESTPs are excellent in emergencies, when they can apply their logical reasoning to situations where immediate action is necessary. Long-term goals are less interesting to the ESTP, who prefers to see tangible results in the moment.</p>"},
//     {"title" : "Strengths",
//     "content" : "<p>

//     Bold – People with the ESTP personality type are full of life and energy. There is no greater joy for ESTPs than pushing boundaries and discovering and using new things and ideas.
//     Rational and Practical – ESTPs love knowledge and philosophy, but not for their own sake. What's fun for ESTP personalities is finding ideas that are actionable and drilling into the details so they can put them to use. If a discussion is completely arbitrary, there are better uses for ESTPs' time.
//     Original – Combining their boldness and practicality, ESTPs love to experiment with new ideas and solutions. They put things together in ways no one else would think to.
//     Perceptive – This originality is helped by ESTPs' ability to notice when things change – and when they need to change! Small shifts in habits and appearances stick out to ESTPs, and they use these observations to help create connections with others.
//     Direct – This perceptive skill isn't used for mind games – ESTPs prefer to communicate clearly, with direct and factual questions and answers. Things are what they are.
//     Sociable – All these qualities pull together to make a natural group leader in ESTPs. This isn't something that they actively seek – people with this personality type just have a knack for making excellent use of social interactions and networking opportunities.

//     </p>"},
//     {"title" : "Weaknesses",
//     "content" : "<p>

//     Insensitive – Feelings and emotions come second to facts and 'reality' for ESTPs. Emotionally charged situations are awkward, uncomfortable affairs, and ESTPs' blunt honesty doesn't help here. These personalities often have a lot of trouble acknowledging and expressing their own feelings as well.
//     Impatient – ESTPs move at their own pace to keep themselves excited. Slowing down because someone else 'doesn't get it' or having to stay focused on a single detail for too long is extremely challenging for ESTPs.
//     Risk-prone – This impatience can lead ESTPs to push into uncharted territory without thinking of the long-term consequences. ESTP personalities sometimes intentionally combat boredom with extra risk.
//     Unstructured – ESTPs see an opportunity – to fix a problem, to advance, to have fun – and seize the moment, often ignoring rules and social expectations in the process. This may get things done, but it can create unexpected social fallout.
//     May Miss the Bigger Picture – Living in the moment can cause ESTPs to miss the forest for the trees. People with this personality type love to solve problems here and now, perhaps too much. All parts of a project can be perfect, but the project will still fail if those parts do not fit together.
//     Defiant – ESTPs won't be boxed in. Repetition, hardline rules, sitting quietly while they are lectured at – this isn't how ESTPs live their lives. They are action-oriented and hands-on. Environments like school and much entry-level work can be so tedious that they're intolerable, requiring extraordinary effort from ESTPs to stay focused long enough to get to freer positions.

//     </p>"},
//     {"title" : "Interaction",
//     "content" : "<p>

//     The first thing you notice about the ESTP is likely to be their energy. They’re often chatting, joking, and flirting with friends and strangers alike. They enjoy engaging playfully with others and amusing everyone around them with their irreverent sense of humor. They tend to keep people on their toes, never quite knowing what the ESTP will poke fun at next. ESTPs are unabashedly gregarious with people, but their interest in individuals may not last long; they are more likely to work a room, having a laugh with everyone, than they are to engage in depth with any one person.

//     ESTPs are comfortable in their physical environment and always looking for some action or activity. They tend to be the most naturally coordinated of all the types and are often found playing sports or engaging in various physical activities, especially ones with an element of danger. They are the stereotypical “adrenaline junkies” and may be found skydiving, motorcycle racing, or enjoying other extreme sports.

//     </p>"},
//     {"title" : "Careers",
//     "content" : "<p>

//     General Contractor
//     Building Inspector
//     Surveyor
//     Mechanic
//     Forester
//     Carpenter
//     Land Developer
//     Landscape Architect
//     Farmer or Rancher
//     Exercise Physiologist
//     Biologist
//     Chiropractor
//     Fitness Instructor
//     Respiratory Therapist
//     Radiology Technician
//     Real Estate Broker
//     Sales Engineer
//     Stockbroker
//     Sales Manager
//     Property Manager
//     Insurance Agent
//     Hotel Manager
//     Factory Supervisor
//     Cost Estimator
//     Chief Financial Officer
//     Chief Information Officer
//     Budget Analyst
//     Financial Planner
//     Vocational Teacher
//     Television Reporter
//     Military Officer
//     Police Officer
//     Firefighter
//     Athletic Trainer
//     Airline Pilot
//     Flight Engineer
//     Civil Engineer
//     Mechanical Engineer
//     Air Traffic Controller
//     Paramedic
//     Flight Attendant
//     Restaurant Owner
//     Chef
//     Bartender
//     Photographer

//     </p>"},
//     {"title" : "Research",
//     "content" : "<ul><b>Population</b><br><li>

//     4% of the general population
//     3% of women
//     6% of men</li><br><b>Facts</b><br><li>

//     On personality trait measures, score as Dominant, Flexible, Demanding, and Sociable
//     More frequent among patients suffering from chronic pain
//     One of four types reporting highest levels of assertiveness in college
//     One of two types with lowest college GPA
//     Among most likely of all types to stay in college
//     Values at work include autonomy, variety, independence, and structure
//     Overrepresented among MBA students
//     Commonly found in careers in marketing, skilled trades, business, and law enforcement

//     </li></ul>"}
//     ]
// } else {
//     $scope.type = "Sorry, invalid type.";
//     $scope.typeData = [
//     {"title" : "Overview",
//     "content" : "<p>Sorry, invalid type.</p>"}
//     ]
// }
// }])
// .filter('unsafe', ['$sce', function($sce) {
//   return function(val) {
//     return $sce.trustAsHtml(val);
// };
// }]);




//MINIFIED VERSION, NEED TO FINISH FORMATTING TOP HALF

mozaiqApp.controller("TypeCtrl",["$scope","$rootScope","$location",function(e,t,n){console.log("TypeCtrl loaded"),"/type/intj"==n.$$path.toLowerCase()?(e.type="INTJ - The Mastermind",e.typeData=[{title:"Overview",content:"<p>It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well.</p><p>INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering.</p><p>People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.</p><p>INTJs are perceptive about systems and strategy, and often understand the world as a chess board to be navigated. They want to understand how systems work, and how events proceed: the INTJ often has a unique ability to foresee logical outcomes. They enjoy applying themselves to a project or idea in depth, and putting in concentrated effort to achieve their goals.</p><p>INTJs have a hunger for knowledge and strive to constantly increase their competence; they are often perfectionists with extremely high standards of performance for themselves and others. They tend to have a keen interest in self-improvement and are lifelong learners, always looking to add to their base of information and awareness.</p>"},{title:"Strengths",content:"<p><b>Quick, Imaginative and Strategic Mind</strong> – INTJs pride themselves on their minds, taking every opportunity to improve their knowledge, and this shows in the strength and flexibility of their strategic thinking. Insatiably curious and always up for an intellectual challenge, INTJs can see things from many perspectives. INTJs use their creativity and imagination not so much for artistry, but for planning contingencies and courses of action for all possible scenarios.</p><p><b>High Self-Confidence</strong> – INTJs trust their rationalism above all else, so when they come to a conclusion, they have no reason to doubt their findings. This creates an honest, direct style of communication that isn't held back by perceived social roles or expectations. When INTJs are right, they're right, and no amount of politicking or hand-holding is going to change that fact – whether it's correcting a person, a process, or themselves, they'd have it no other way.</p><p><b>Independent and Decisive</strong> – This creativity, logic and confidence come together to form individuals who stand on their own and take responsibility for their own actions. Authority figures do not impress INTJs, nor do social conventions or tradition, and no matter how popular something is, if they have a better idea, INTJs will stand against anyone they have to in a bid to have it changed. Either an idea is the most rational or it's wrong, and INTJs will apply this to their arguments as well as their own behavior, staying calm and detached from these sometimes emotionally charged conflicts. INTJs will only be swayed by those who follow suit.</p><p><b>Hard-working and determined</strong> – If something piques their interest, INTJs can be astonishingly dedicated to their work, putting in long hours and intense effort to see an idea through. INTJs are incredibly efficient, and if tasks meet the criteria of furthering a goal, they will find a way to consolidate and accomplish those tasks. However, this drive for efficiency can also lead to a sort of elaborate laziness, wherein INTJs find ways to bypass seeming redundancies which don't seem to require a great deal of thought – this can be risky, as sometimes double-checking one's work is the standard for a reason.</p><p><b>Open-minded</strong> – All this rationalism leads to a very intellectually receptive personality type, as INTJs stay open to new ideas, supported by logic, even if (and sometimes especially if) they prove INTJs' previous conceptions wrong. When presented with unfamiliar territory, such as alternate lifestyles, INTJs tend to apply their receptiveness and independence, and aversion to rules and traditions, to these new ideas as well, resulting in fairly liberal social senses.</p><p><b>Jacks-of-all-Trades</strong> – INTJs' open-mindedness, determination, independence, confidence and strategic abilities create individuals who are capable of doing anything they set their minds to. Excelling at analyzing anything life throws their way, INTJs are able to reverse-engineer the underlying methodology of most any system and apply the concepts that are exposed wherever needed. INTJs tend to have their pick of professions, from IT architects to political masterminds.</p>"},{title:"Weaknesses",content:"<p><b>Arrogant</strong> – INTJs are perfectly capable of carrying their confidence too far, falsely believing that they've resolved all the pertinent issues of a matter and closing themselves off to the opinions of those they believe to be intellectually inferior. Combined with their irreverence for social conventions, INTJs can be brutally insensitive in making their opinions of others all too clear.</p><p><b>Judgmental</strong> – INTJs tend to have complete confidence in their thought process, because rational arguments are almost by definition correct – at least in theory. In practice, emotional considerations and history are hugely influential, and a weak point for INTJs is that they brand these factors and those who embrace them as illogical, dismissing them and considering their proponents to be stuck in some baser mode of thought, making it all but impossible to be heard.</p><p><b>Overly analytical</strong> – A recurring theme with INTJs is their analytical prowess, but this strength can fall painfully short where logic doesn't rule – such as with human relationships. When their critical minds and sometimes neurotic level of perfectionism (often the case with Turbulent INTJs) are applied to other people, all but the steadiest of friends will likely need to make some distance, too often permanently.</p><p><b>Loathe</strong> highly structured environments – Blindly following precedents and rules without understanding them is distasteful to INTJs, and they disdain even more authority figures who blindly uphold those laws and rules without understanding their intent. Anyone who prefers the status quo for its own sake, or who values stability and safety over self-determination, is likely to clash with INTJ personality types. Whether it's the law of the land or simple social convention, this aversion applies equally, often making life more difficult than it needs to be.</p><p><b>Clueless in romance</strong> – This antipathy to rules and tendency to over-analyze and be judgmental, even arrogant, all adds up to a personality type that is often clueless in dating. Having a new relationship last long enough for INTJs to apply the full force of their analysis on their potential partner's thought processes and behaviors can be challenging. Trying harder in the ways that INTJs know best can only make things worse, and it's unfortunately common for them to simply give up the search. Ironically, this is when they're at their best, and most likely to attract a partner.</p>"},{title:"Interaction",content:"<p>INTJs are typically reserved and serious, and seem to spend a lot of time thinking. They are curious about the world around them and often want to know the principle behind what they see. They thoroughly examine the information they receive, and if asked a question, will typically consider it at length before presenting a careful, complex answer. INTJs think critically and clearly, and often have an idea about how to do something more efficiently. They can be blunt in their presentation, and often communicate in terms of the larger strategy, leaving out the details.</p><p>Although INTJs aren’t usually warm or particularly gregarious, they tend to have a self-assured manner with people based on their own security in their intelligence. They relate their ideas with confidence, and once they have arrived at a conclusion they fully expect others to see the wisdom in their perceptions. They are typically perfectionists and appreciate an environment of intellectual challenge. They enjoy discussing interesting ideas, and may get themselves into trouble because of their take-no-prisoners attitude: if someone’s beliefs don’t make logical sense, the Mastermind typically has no qualms about pointing that out.</p>"},{title:"Careers",content:"<ul><b>Business and Financial</b><br><li>Accountant or Auditor</li><li>Budget Analyst</li><li>Cost Estimator</li><li>Financial Analyst</li><li>Insurance Underwriter</li><li>Loan Officer</li><li>Logistician</li><li>Management Consultant</li><li>Market Research Analyst</li><li>Personal Financial Advisor</li><li>Tax Examiner</li><li>Financial Manager</li><li>Top Executive</li><li>Sales Engineer</li><br><b>Math</b><br><li>Actuary</li><li>Mathematician</li><li>Operations Research Analyst</li><li>Statistician</li><br><b>Architecture and Engineering</b><br><li>Aerospace Engineer</li><li>Agricultural Engineer</li><li>Architect</li><li>Biomedical Engineer</li><li>Chemical Engineer</li><li>Civil Engineer</li><li>Computer Hardware Engineer</li><li>Electrical or Electronics Engineer</li><li>Environmental Engineer</li><li>Health and Safety Engineer</li><li>Industrial Engineer</li><li>Mechanical Engineer</li><li>Mechanical Engineering Technician</li><li>Mining or Geological Engineer</li><li>Nuclear Engineer</li><li>Petroleum Engineer</li><li>Surveyor</li><li>Architectural or Engineering Manager</li><br><b>Sciences</b><br><li>Atmospheric Scientist</li><li>Biochemist or Biophysicist</li><li>Chemist or Materials Scientist</li><li>Economist</li><li>Environmental Scientist</li><li>Geoscientist</li><li>Historian</li><li>Hydrologist</li><li>Medical Scientist</li><li>Microbiologist</li><li>Political Scientist</li><br><b>Arts, Design, and Communications</b><br><li>Art Director</li><li>Industrial Designer</li><li>Editor</li><li>Translator</li><li>Photographer</li><li>Reporter</li><li>Technical Writer</li><li>Writer</li><br><b>Healthcare</b><br><li>Optometrist</li><li>Pharmacist</li><li>Physician or Surgeon</li><li>Podiatrist</li><br><b>Education</b><br><li>Technical Education Teacher</li><li>Professor</li><li>College Administrator</li><br><b>Computers and Information Technology</b><br><li>Computer Programmer</li><li>Computer Support Specialist</li><li>Computer Systems Analyst</li><li>Database Administrator</li><li>Information Security Analyst</li><li>Network Administrator</li><li>Software Developer</li><li>Web Developer</li><li>Computer and IS Manager</li><li>Computer Network Architect</li><li>Computer Scientist</li><br><b>Construction</b><br><li>Construction Manager</li><li>Building Inspector</li><br><b>Legal</b><br><li>Judge or Hearing Officer</li><li>Lawyer</li><li>Paralegal or Legal Assistant</li><br><b>Protective Service</b><br><li>Police Detective</li><li>Private Investigator</li></ul>"},{title:"Research",content:"<ul><b>Population</b><br><li>2% of the general population</li><li>3% of men</li><li>1% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Discreet, Industrious, Logical, Deliberate, Self-Confident, and Methodical</li><li>Among types least likely to suffer heart disease and cardiac problems</li><li>Least likely of all the types to believe in a higher spiritual power</li><li>One of two types with highest college GPA</li><li>Among types with highest income</li><li>Personal values include Achievement</li><li>Of all types, least likely to state that they value Home/family, Financial security, Relationships & friendships, and Community service</li><li>Overrepresented among MBA students and female small business owners</li><li>Commonly found in scientific or technical fields, computer occupations, and legal professions</li></ul>"}]):"/type/entj"==n.$$path.toLowerCase()?(e.type="ENTJ - The Commander",e.typeData=[{title:"Overview",content:"<p>ENTJs are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. But unlike their Feeling (F) counterpart, ENTJs are characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they've set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have ENTJs to thank for many of the businesses and institutions we take for granted every day.</p><p>ENTJs are often very motivated by success in their careers and enjoy hard work. They are ambitious and interested in gaining power and influence. To the ENTJ, decision-making is a vocation. They want to be in a position to make the call and put plans into motion.</p><p>ENTJs tend to be blunt and decisive. Driven to get things done, they can sometimes be critical or brusque in the pursuit of a goal. They are typically friendly and outgoing, although they may not pick up on emotional subleties in other people. They often love working with others toward a common goal, but may not find time to attend to their feelings. They are focused on results and want to be productive, competent, and influential.</p>"},{title:"Strengths",content:"<p>\n\n    Efficient – ENTJs see inefficiency not just as a problem in its own right, but as something that pulls time and energy away from all their future goals, an elaborate sabotage consisting of irrationality and laziness. People with the ENTJ personality type will root out such behavior wherever they go.\n    Energetic – Rather than finding this process taxing ENTJs are energized by it, genuinely enjoying leading their teams forward as they implement their plans and goals.\n    Self-Confident – ENTJs couldn't do this if they were plagued by self-doubt – they trust their abilities, make known their opinions, and believe in their capacities as leaders.\n    Strong-Willed – Nor do they give up when the going gets tough – ENTJ personalities strive to achieve their goals, but really nothing is quite as satisfying to them as rising to the challenge of each obstacle in their run to the finish line.\n    Strategic Thinkers – ENTJs exemplify the difference between moment-to-moment crisis management and navigating the challenges and steps of a bigger plan, and are known for examining every angle of a problem and not just resolving momentary issues, but moving the whole project forward with their solutions.\n    Charismatic and Inspiring – These qualities combine to create individuals who are able to inspire and invigorate others, who people actually want to be their leaders, and this in turn helps ENTJs to accomplish their often ambitious goals that could never be finished alone.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Stubborn and Dominant – Sometimes all this confidence and willpower can go too far, and ENTJs are all too capable of digging in their heels, trying to win every single debate and pushing their vision, and theirs alone.\n    Intolerant – 'It's my way or the highway' – People with the ENTJ personality type are notoriously unsupportive of any idea that distracts from their primary goals, and even more so of ideas based on emotional considerations. ENTJs won't hesitate a second to make that fact clear to those around them.\n    Impatient – Some people need more time to think than others, an intolerable delay to quick-thinking ENTJs. They may misinterpret contemplation as stupidity or disinterest in their haste, a terrible mistake for a leader to make.\n    Arrogant – ENTJ personalities respect quick thoughts and firm convictions, their own qualities, and look down on those who don't match up. This relationship is a challenge for most other personality types who are perhaps not timid in their own right, but will seem so beside overbearing ENTJs.\n    Poor Handling of Emotions – All this bluster, alongside the assumed supremacy of rationalism, makes ENTJs distant from their own emotional expression and sometimes downright scornful of others'. People with this personality type often trample others' feelings, inadvertently hurting their partners and friends, especially in emotionally charged situations.\n    Cold and Ruthless – Their obsession with efficiency and unwavering belief in the merits of rationalism, especially professionally, makes ENTJs incredibly insensitive in pursuing their goals, dismissing personal circumstances, sensitivities, and preferences as irrational and irrelevant.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ENTJs are natural leaders, and often take charge no matter where they are. They typically have a clear vision for the future, and intuitively understand how to move people and processes towards that goal. They tend to approach every situation with the attitude of an efficiency analyst, and are not shy about pointing out what could be done better. For the ENTJ, their ideas are a foregone conclusion: it’s just a matter of time before they can move the players to get everything accomplished.\n\n    ENTJs are often gregarious, and seem to have an idea for how a person will fit into their grand scheme from the moment they are introduced. They are typically direct and may seem presumptuous or even arrogant; they size people and situations up very quickly, and have trouble being anything but honest about what they see. ENTJs are sensitive to issues of power, and seek positions and people of influence. They are characeristically ambitious, and often very engaged in their careers. More than any other type, ENTJs enjoy their work, and may even say that working is what they do for fun.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Business and Financial\n\n    Accountant or Auditor\n    Budget Analyst\n    Cost Estimator\n    Financial Analyst\n    Loan Officer\n    Logistician\n    Management Analyst\n    Market Research Analyst\n    Meeting or Convention Planner\n    Personal Financial Advisor\n    Purchasing Managers\n    Operations Research Analyst\n    Advertising and Promotions Manager\n    Financial Manager\n    Top Executive\n\n    Sales\n\n    Advertising Sales Agent\n    Insurance Sales Agent\n    Real Estate Broker\n    Sales Engineer\n    Securities, Commodities, or Financial Services Sales Agent\n    Sales Manager\n\n    Architecture and Engineering\n\n    Aerospace Engineer\n    Agricultural Engineer\n    Architect\n    Biomedical Engineer\n    Chemical Engineer\n    Civil Engineer\n    Computer Hardware Engineer\n    Drafter\n    Electrical or Electronics Engineer\n    Environmental Engineer\n    Health and Safety Engineer\n    Industrial Engineer\n    Landscape Architect\n    Materials Engineer\n    Mechanical Engineer\n    Mining or Geological Engineer\n    Nuclear Engineer\n    Petroleum Engineer\n    Surveyor\n\n    Life, Physical, and Social Science\n\n    Agricultural Scientist\n    Atmospheric Scientist\n    Biochemist or Biophysicist\n    Chemist or Materials Scientist\n    Conservation Scientist or Forester\n    Economist\n    Environmental Scientist\n    Geographer\n    Geoscientist\n    Historian\n    Hydrologist\n    Microbiologist\n    Political Scientist\n    Urban or Regional Planner\n    Statistician\n\n    Arts, Design, and Language\n\n    Art Director\n    Industrial Designer\n    Reporter\n    Professor\n    Chef\n    Music Director\n    Producer or Director\n\n    Healthcare\n\n    Exercise Physiologist\n    Dentist\n    Optometrist\n    Pharmacist\n    Physician or Surgeon\n\n    Computer and Information Technology\n\n    Computer Network Architect\n    Computer Scientist\n    Computer Systems Analyst\n    Database Administrator\n    Information Security Analyst\n    Network Administrator\n    Software Developer\n    Computer and IS Manager\n\n    Construction and Production\n\n    Construction Manager\n    Construction or Building Inspector\n    Industrial Production Manager\n\n    Protective Services\n\n    Correctional Officer\n    Fire Inspector or Investigator\n    Police Officer or Detective\n    Private Detective or Investigator\n    Emergency Management Director\n\n    Legal\n\n    Judge or Hearing Officer\n    Lawyer\n\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>2% of the general population</li><li>3% of men</li><li>1% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Ambitious, Forceful, Optimistic, Egotistical, Adaptable, and Energetic</li><li>Least likely of all types to report stress resulting from work or finances</li><li>More likely than average to suffer cardiac problems</li><li>Among the least likely of all types to believe in a higher spiritual power</li><li>Among top 4 types in college GPA</li><li>Among most likely to stay in college</li><li>Personal values include Home/Family, Achievement, Creativity, and Learning</li><li>Overrepresented among MBA students and small business owners</li><li>One of two types most likely to be satisfied with their work</li></ul>"}]):"/type/intp"==n.$$path.toLowerCase()?(e.type="INTP - The Architect",e.typeData=[{title:"Overview",content:"<p>\n\n    The INTP personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there's nothing they'd be more unhappy about than being 'common'. INTPs pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, INTPs have been responsible for many scientific discoveries throughout history.</p><p>INTPs present a cool exterior but are privately passionate about reason, analysis, and innovation. They seek to create complex systems of understanding to unify the principles they've observed in their environments. Their minds are complicated and active, and they will go to great mental lengths trying to devise ingenious solutions to interesting problems.</p><p>The INTP is typically non-traditional, and more likely to reason out their own individual way of doing things than to follow the crowd. The INTP is suspicious of assumptions and conventions, and eager to break apart ideas that others take for granted. INTPs are merciless when analyzing concepts and beliefs, and hold little sacred. They are often baffled by other people who remain loyal to ideology that doesn't make logical sense.</p>"},{title:"Strengths",content:"<p>\n\n    Great Analysts and Abstract Thinkers – People with the INTP personality type view the world as a big, complex machine, and recognize that as with any machine, all parts are interrelated. INTPs excel in analyzing these connections, seeing how seemingly unrelated factors tie in with each other in ways that bewilder most other personality types.\n    Imaginative and Original – These connections are the product of an unrelenting imagination – INTPs' ideas may seem counter-intuitive at a glance, and may never even see the light of day, but they will always prove remarkable innovations.\n    Open-Minded – INTPs couldn't make these connections if they thought they knew it all – they are highly receptive to alternate theories, so long as they're supported by logic and facts. In more subjective matters like social norms and traditions, INTPs are usually fairly liberal, with a 'none of my business' sort of attitude – peoples' ideas are what matter.\n    Enthusiastic – When a new idea piques their interest, INTPs can be very enthusiastic – they are a reserved personality type, but if another person shares an interest, they can be downright excited about discussing it. More likely though, the only outward evidence of this enthusiasm will be INTPs' silent pacing or their staring into the distance.\n    Objective – INTPs' analysis, creativity and open-mindedness aren't the tools of some quest for ideology or emotional validation. Rather, it's as though people with the INTP personality type are a conduit for the truths around them, so far as they can be expressed, and they are proud of this role as theoretical mediator.\n    Honest and Straightforward – To know one thing and say another would be terribly disingenuous – INTPs don't often go around intentionally hurting feelings, but they believe that the truth is the most important factor, and they expect that to be appreciated and reciprocated.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Very Private and Withdrawn – While INTPs' intellectualism yields many insights into their surroundings, their surroundings are ironically considered an intrusion on their thoughts. This is especially true with people – INTPs are quite shy in social settings. More complicated situations such as parties exacerbate this, but even close friends struggle to get into INTPs' hearts and minds.\n    Insensitive – Oftentimes INTP personalities get so caught up in their logic that they forget any kind of emotional consideration – they dismiss subjectivity as irrational and tradition as an attempt to bar much-needed progress. Purely emotional situations are often utterly puzzling to INTPs, and their lack of timely sympathy can easily offend.\n    Absent-minded – When INTPs' interest is captured, their absence goes beyond social matters to include the rest of the physical world. INTPs become forgetful, missing even the obvious if it's unrelated to their current infatuation, and they can even forget their own health, skipping meals and sleep as they muse.\n    Condescending – Attempts at connecting with others are often worse than INTPs' withdrawal. People with the INTP personality type take pride in their knowledge and rationale, and enjoy sharing their ideas, but in trying to explain how they got from A to B to Z, they can get frustrated, sometimes simplifying things to the point of insult as they struggle to gauge their conversation partners' perspective. The ultimate insult comes as INTPs give up with a dismissive 'never mind'.\n    Loathe Rules and Guidelines – These social struggles are partly a product of INTPs' desire to bypass the rules, of social conduct and otherwise. While this attitude helps INTPs' strength of unconventional creativity, it also causes them to reinvent the wheel constantly and to shun security in favor of autonomy in ways that can compromise both.\n    Second-Guess Themselves – INTPs remain so open to new information that they often never commit to a decision at all. This applies to their own skills as well – INTP personalities know that as they practice, they improve, and any work they do is second-best to what they could do. Unable to settle for this, INTPs sometimes delay their output indefinitely with constant revisions, sometimes even quitting before they ever begin.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    INTPs are often thoroughly engaged in their own thoughts, and usually appear to others to be offbeat and unconventional. The INTP’s mind is a most active place, and their inward orientation can mean that they neglect superficial things like home décor or appropriate clothing. They don’t tend to bother with small talk but can become downright passionate when talking about science, mathematics, computers, or the larger theoretical problems of the universe. Reality is often of only passing interest to the Architect, as they are more interested in the theory behind it all.\n\n    INTPs are typically precise in their speech, and communicate complex ideas with carefully chosen words. They insist on intellectual rigor in even the most casual of conversations, and will readily point out inconsistencies of thought or reasoning. Social niceties may fall by the wayside for an INTP who is more interested in analyzing logic, and they may offend others by submitting their dearly held values and beliefs to logical scrutiny.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Technology\n\n    Computer Network Architect\n    Computer Scientist\n    Computer Programmer\n    Computer Systems Analyst\n    Database Administrator\n    Information Security Analyst\n    Network Administrator\n    Software Developer\n    Web Developer\n\n    Engineering\n\n    Aerospace Engineer\n    Biomedical Engineer\n    Chemical Engineer\n    Civil Engineer\n    Computer Hardware Engineer\n    Electrical or Electronics Engineer\n    Environmental Engineer\n    Mechanical Engineer\n    Geological Engineer\n    Nuclear Engineer\n\n    Sciences\n\n    Anthropologist or Archaeologist\n    Atmospheric Scientist\n    Biochemist or Biophysicist\n    Chemist\n    Economist\n    Environmental Scientist\n    Geographer\n    Geoscientist\n    Historian\n    Hydrologist\n    Medical Scientist\n    Microbiologist\n    Physicist or Astronomer\n    Political Scientist\n    Psychologist\n    Sociologist\n    Survey Researcher\n    Urban or Regional Planner\n    Zoologist or Wildlife Biologist\n    Physician\n\n    Business and Law\n\n    Accountant or Auditor\n    Financial Analyst\n    Management Consultant or Analyst\n    Market Research Analyst\n    Top Executive\n    Sales Engineer\n    Lawyer\n\n    Arts and Language\n\n    Graphic Designer\n    Industrial Designer\n    Multimedia Artist or Animator\n    Composer\n    Musician\n    Editor\n    Photographer\n    Technical Writer\n    Writer or Author\n    Professor or College Instructor\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>3% of the general population</li><li>5% of men</li><li>2% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Candid, Ingenious, Complicated, Independent, and Rebellious</li><li>More likely than other types to study a foreign language</li><li>Most frequent type among college students committing alcohol and drug policy violations</li><li>Have lowest level of coping resources of all the types (with ISTPs)</li><li>One of types least likely to believe in a higher spiritual power</li><li>Highest of all types in career dissatisfaction (with INFPs)</li><li>In school, have lower grades than would be predicted from aptitude scores</li><li>More likely than average to complete engineering programs</li><li>Personal values include Autonomy, Freedom, and Independence</li><li>Overrepresented among working MBA students</li><li>Commonly found in science and technical occupations</li></ul>"}]):"/type/entp"==n.$$path.toLowerCase()?(e.type="ENTP - The Visionary",e.typeData=[{title:"Overview",content:"<p>The ENTP personality type is the ultimate devil's advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. Unlike their more determined Judging (J) counterparts, ENTPs don't do this because they are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it's fun. No one loves the process of mental sparring more than ENTPs, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points.</p><p>ENTPs are energized by challenge and are often inspired by a problem that others perceive as impossible to solve. They are confident in their ability to think creatively, and may assume that others are too tied to tradition to see a new way. The Visionary relies on their ingenuity to deal with the world around them, and rarely finds preparation necessary. They will often jump into a new situation and trust themselves to adapt as they go.</p><p>ENTPs are masters of re-inventing the wheel and often refuse to do a task the same way twice. They question norms and often ignore them altogether. Established procedures are uninspiring to the Visionary, who would much rather try a new method (or two) than go along with the standard.</p>"},{title:"Strengths",content:"<p>\n\n    Knowledgeable – ENTPs rarely pass up a good opportunity to learn something new, especially abstract concepts. This information isn't usually absorbed for any planned purpose as with dedicated studying, people with the ENTP personality type just find it fascinating.\n    Quick Thinkers – ENTPs have tremendously flexible minds, and are able to shift from idea to idea without effort, drawing on their accumulated knowledge to prove their points, or their opponents', as they see fit.\n    Original – Having little attachment to tradition, ENTP personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base, with a little raw creativity to hold them together, to formulate bold new ideas. If presented with chronic, systemic problems and given rein to solve them, ENTPs respond with unabashed glee.\n    Excellent Brainstormers – Nothing is quite as enjoyable to ENTPs as analyzing problems from every angle to find the best solutions. Combining their knowledge and originality to splay out every aspect of the subject at hand, rejecting without remorse options that don't work and presenting ever more possibilities, ENTPs are irreplaceable in brainstorming sessions.\n    Charismatic – People with the ENTP personality type have a way with words and wit that others find intriguing. Their confidence, quick thought and ability to connect disparate ideas in novel ways create a style of communication that is charming, even entertaining, and informative at the same time.\n    Energetic – When given a chance to combine these traits to examine an interesting problem, ENTPs can be truly impressive in their enthusiasm and energy, having no qualms with putting in long days and nights to find a solution.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Very Argumentative – If there's anything ENTPs enjoy, it's the mental exercise of debating an idea, and nothing is sacred. More consensus-oriented personality types rarely appreciate the vigor with which ENTP personalities tear down their beliefs and methods, leading to a great deal of tension.\n    Insensitive – Being so rational, ENTPs often misjudge others feelings and push their debates well past others' tolerance levels. People with this personality type don't really consider emotional points to be valid in such debates either, which magnifies the issue tremendously.\n    Intolerant – Unless people are able to back up their ideas in a round of mental sparring, ENTPs are likely to dismiss not just the ideas but the people themselves. Either a suggestion can stand up to rational scrutiny or it's not worth bothering with.\n    Can Find It Difficult to Focus – The same flexibility that allows ENTPs to come up with such original plans and ideas makes them readapt perfectly good ones far too often, or to even drop them entirely as the initial excitement wanes and newer thoughts come along. Boredom comes too easily for ENTPs, and fresh thoughts are the solution, though not always a helpful one.\n    Dislike Practical Matters – ENTPs are interested in what could be – malleable concepts like ideas and plans that can be adapted and debated. When it comes to hard details and day-to-day execution where creative flair isn't just unnecessary but actually counter-productive, ENTP personalities lose interest, often with the consequence of their plans never seeing the light of day.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ENTPs are typically friendly and often charming. They usually want to be seen as clever and may try to impress others with their quick wit and incisive humor. They are curious about the world around them, and want to know how things work. However, for the ENTP, the rules of the universe are made to be broken. They like to find the loopholes and figure out how they can work the system to their advantage. This is not to say the Visionary is malicious: they simply find rules limiting, and believe there is probably a better, faster, or more interesting way to do things that hasn’t been thought of before.\n\n    The ENTP is characteristically entrepreneurial and may be quick to share a new business idea or invention. They are confident and creative, and typically excited to discuss their many ingenious ideas. The ENTP’s enthusiasm for innovation is infectious, and they are often good at getting other people on board with their schemes. However, they are fundamentally “big-picture” people, and may be at a loss when it comes to recalling or describing details. They are typically more excited about exploring a concept than they are about making it reality, and can seem unreliable if they don’t follow through with their many ideas.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Executive\n    Entrepreneur\n    HR Recruiter\n    Management Consultant\n    Marketing Manager\n    Sales Manager\n    Corporate Trainer\n    Property Manager\n    Venture Capitalist\n    Ad Account Executive\n    Creative Director\n    Financial Planner\n    Stockbroker\n    Real Estate Agent\n    Cost Estimator\n    Public Relations Specialist\n    Reporter\n    Copywriter\n    Art Director\n    Producer or Director\n    Journalist\n    Market Researcher\n    Internet Architect\n    Photographer\n    Actor\n    School Psychologist\n    Organizational Psychologist\n    Chiropractor\n    Political Scientist\n    Attorney\n    Architect\n    Industrial Designer\n    Urban Planner\n    Industrial Engineer\n    Environmental Scientist\n    Drafter\n    Aerospace Engineer\n    Geologist\n    Detective\n    Criminalist\n    Public Administrator\n    Politician\n    Social Scientist\n    Health Care Administrator\n    Education Director\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>3% of the general population</li><li>4% of men</li><li>2% of women</li><br><b>Facts</b><br><li>On personality trait scales, scored as Enterprising, Friendly, Resourceful, Headstrong, Self-Centered, and Independent</li><li>Least likely of all types to suffer heart disease and hypertension</li><li>Least likely of all types to report stress associated with family and health</li><li>Scored among highest of all types in available resources for coping with stress</li><li>Overrepresented among those with Type A behavior</li><li>Among highest of all types on measures of creativity</li><li>One of two types most frequent among violators of college alcohol policy</li><li>Among types most dissatisfied with their work, despite being among the types with highest income</li><li>Commonly found in careers in science, management, technology, and the arts</li></ul>"}]):"/type/infj"==n.$$path.toLowerCase()?(e.type="INFJ - The Counselor",e.typeData=[{title:"Overview",content:"<p>The INFJ personality type is very rare, making up less than one percent of the population, but they nonetheless leave their mark on the world. As Diplomats (NF), they have an inborn sense of idealism and morality, but what sets them apart is the accompanying Judging (J) trait – INFJs are not idle dreamers, but people capable of taking concrete steps to realize their goals and make a lasting positive impact.</p><p>INFJs are guided by a deeply considered set of personal values. They are intensely idealistic, and can clearly imagine a happier and more perfect future. They can become discouraged by the harsh realities of the present, but they are typically motivated and persistent in taking positive action nonetheless. The INFJ feels an intrinsic drive to do what they can to make the world a better place.</p><p>INFJs want a meaningful life and deep connections with other people. They do not tend to share themselves freely but appreciate emotional intimacy with a select, committed few. Although their rich inner life can sometimes make them seem mysterious or private to others, they profoundly value authentic connections with people they trust.</p>"},{title:"Strengths",content:"<p>\n\n    Creative – Combining a vivid imagination with a strong sense of compassion, INFJs use their creativity to resolve not technical challenges, but human ones. People with the INFJ personality type enjoy finding the perfect solution for someone they care about, and this strength makes them excellent counselors and advisors.\n    Insightful – Seeing through dishonesty and disingenuous motives, INFJs step past manipulation and sales tactics and into a more honest discussion. INFJs see how people and events are connected, and are able to use that insight to get to the heart of the matter.\n    Inspiring and Convincing – Speaking in human terms, not technical, INFJs have a fluid, inspirational writing style that appeals to the inner idealist in their audience. INFJs can even be astonishingly good orators, speaking with warmth and passion, if they are proud of what they are speaking for.\n    Decisive – Their creativity, insight and inspiration are able to have a real impact on the world, as INFJs are able to follow through on their ideas with conviction, willpower, and the planning necessary to see complex projects through to the end. INFJs don’t just see the way things ought to be, they act on those insights.\n    Determined and Passionate – When INFJs come to believe that something is important, they pursue that goal with a conviction and energy that can catch even their friends and loved ones off guard. INFJs will rock the boat if they have to, something not everyone likes to see, but their passion for their chosen cause is an inseparable part of their personality.\n    Altruistic – These strengths are used for good. INFJs have strong beliefs and take the actions that they do not because they are trying to advance themselves, but because they are trying to advance an idea that they truly believe will make the world a better place.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Sensitive – When someone challenges or criticizes INFJs’ principles or values, they are likely to receive an alarmingly strong response. People with the INFJ personality type are highly vulnerable to criticism and conflict, and questioning their motives is the quickest way to their bad side.\n    Extremely Private – INFJs tend to present themselves as the culmination of an idea. This is partly because they believe in this idea, but also because INFJs are extremely private when it comes to their personal lives, using this image to keep themselves from having to truly open up, even to close friends. Trusting a new friend can be even more challenging for INFJs.\n    Perfectionistic – INFJs are all but defined by their pursuit of ideals. While this is a wonderful quality in many ways, an ideal situation is not always possible – in politics, in business, in romance – and INFJs too often drop or ignore healthy and productive situations and relationships, always believing there might be a better option down the road.\n    Always Need to Have a Cause – INFJs get so caught up in the passion of their pursuits that any of the cumbersome administrative or maintenance work that comes between them and the ideal they see on the horizon is deeply unwelcome. INFJs like to know that they are taking concrete steps towards their goals, and if routine tasks feel like they are getting in the way, or worse yet, there is no goal at all, they will feel restless and disappointed.\n    Can Burn Out Easily – Their passion, poor patience for routine maintenance, tendency to present themselves as an ideal, and extreme privacy tend to leave INFJs with few options for letting off steam. People with this personality type are likely to exhaust themselves in short order if they don’t find a way to balance their ideals with the realities of day-to-day living.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    INFJs often appear quiet, caring and sensitive, and may be found listening attentively to someone else’s ideas or concerns. They are highly perceptive about people and want to help others achieve understanding. INFJs are not afraid of complex personal problems; in fact, they are quite complex themselves, and have a rich inner life that few are privy to. They reflect at length on issues of ethics, and feel things deeply. Because Counselors initially appear so gentle and reserved, they may surprise others with their intensity when one of their values is threatened or called into question. Their calm exterior belies the complexity of their inner worlds.\n\n    Because INFJs are such complex people, they may be reluctant to engage with others who might not understand or appreciate them, and can thus be hard to get to know. Although they want to get along with others and support them in their goals, they are fiercely loyal to their own system of values and will not follow others down a path that does not feel authentic to them. When they sense that their values are not being respected, or when their intuition tells them that someone’s intentions are not pure, they are likely to withdraw.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Health Care\n\n    Physical Therapist\n    Public Health Educator\n    Family Physician\n    Occupational Therapist\n    Psychiatrist\n    Physician Assistant\n    Massage Therapist\n    Nutritionist\n    Medical Researcher\n\n    Counseling and Social Service\n\n    Clinical Psychologist\n    Counselor\n    Social Worker\n    Speech Pathologist\n    Clergy\n\n    Sciences\n\n    Social Scientist\n    Genealogist\n    Food Scientist\n    Environmental Scientist\n\n    Business & Law\n\n    HR Manager\n    Corporate Trainer\n    Environmental Attorney\n    Legal Mediator\n\n    Education\n\n    Elementary Teacher\n    Special Education Teacher\n    School Counselor\n\n    Language and Arts\n\n    Librarian\n    Curator\n    Translator\n    Editor\n    Technical Writer\n    Writer\n    Graphic Designer\n    Animator\n    Artist\n    Musician\n    Interior Designer\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>2% of the general population</li><li>2% of women</li><li>1% of men</li><br><b>Facts</b><br><li>Least common type in the population</li><li>On personality trait scales, scored as Sincere, Sympathetic, Unassuming, Submissive, Easygoing, Reserved and Patient</li><li>Among highest of all types in college GPA</li><li>Among most likely to stay in college</li><li>Most likely of all types to cope with stress by seeing a therapist</li><li>Highest of all types in marital dissatisfaction</li><li>Personal values include Spirituality, Learning, and Community Service</li><li>Commonly found in careers in religion, counseling, teaching, and the arts</li></ul>"}]):"/type/infp"==n.$$path.toLowerCase()?(e.type="INFP - The Healer",e.typeData=[{title:"Overview",content:"<p><p>INFP personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the INFP personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.</p><p>INFPs value authenticity and want to be original and individual in what they do. They are often concerned with a search for meaning and truth within themselves. Following tradition holds little appeal for the INFP; they prefer to do their own exploration of values and ideas, and decide for themselves what seems right. INFPs are often offbeat and unconventional, but they feel no desire to conform. The INFP would rather be true to themselves than try to fit in with the crowd.</p><p>INFPs are accepting and nonjudgmental in their treatment of others, believing that each person must follow their own path. They are flexible and accommodating, and can often see many points of view. It is important to the INFP to support other people; however, the INFP may react strongly if they feel their own values are being violated. They especially hate being steamrolled by people who insist there is one right way to do things. INFPs want an open, supportive exchange of ideas.</p>"},{title:"Strengths",content:"<p>\n\n    Idealistic – INFPs' friends and loved ones will come to admire and depend on them for their optimism. Their unshaken belief that all people are inherently good, perhaps simply misunderstood, lends itself to an incredibly resilient attitude in the face of hardship.\n    Seek and Value Harmony – People with the INFP personality type have no interest in having power over others, and don't much care for domineering attitudes at all. They prefer a more democratic approach, and work hard to ensure that every voice and perspective is heard.\n    Open-Minded and Flexible – A live-and-let-live attitude comes naturally to INFPs, and they dislike being constrained by rules. INFPs give the benefit of the doubt too, and so long as their principles and ideas are not being challenged, they'll support others' right to do what they think is right.\n    Very Creative – INFPs combine their intuitive nature with their open-mindedness to allow them to see things from unconventional perspectives. Being able to connect many far-flung dots into a single theme, it's no wonder that many INFPs are celebrated poets and authors.\n    Passionate and Energetic – When something captures INFPs' imagination and speaks to their beliefs, they go all in, dedicating their time, energy, thoughts and emotions to the project. Their shyness keeps them from the podium, but they are the first to lend a helping hand where it's needed.\n    Dedicated and Hard-Working – While others focusing on the challenges of the moment may give up when the going gets tough, INFPs (especially Assertive ones) have the benefit of their far-reaching vision to help them through. Knowing that what they are doing is meaningful gives people with this personality type a sense of purpose and even courage when it comes to accomplishing something they believe in.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Too Idealistic – INFPs often take their idealism too far, setting themselves up for disappointment as, again and again, evil things happen in the world. This is true on a personal level too, as INFPs may not just idealize their partners, but idolize them, forgetting that no one is perfect.\n    Too Altruistic – INFPs sometimes see themselves as selfish, but only because they want to give so much more than they are able to. This becomes a self-fulfilling prophecy, as they try to push themselves to commit to a chosen cause or person, forgetting to take care of the needs of others in their lives, and especially themselves.\n    Impractical – When something captures INFPs' imagination, they can neglect practical matters like day-to-day maintenance and simple pleasures. Sometimes people with the INFP personality type will take this asceticism so far as to neglect eating and drinking as they pursue their passion or cause.\n    Dislike Dealing With Data – INFPs are often so focused on the big picture that they forget the forest is made of individual trees. INFPs are in tune with emotions and morality, and when the facts and data contradict their ideals, it can be a real challenge for them.\n    Take Things Personally – INFPs often take challenges and criticisms personally, rather than as inspiration to reassess their positions. Avoiding conflict as much as possible, INFPs will put a great deal of time and energy into trying to align their principles and the criticisms into a middle ground that satisfies everybody.\n    Difficult to Get to Know – INFPs are private, reserved and self-conscious. This makes them notoriously difficult to really get to know, and their need for these qualities contributes to the guilt they often feel for not giving more of themselves to those they care about.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    INFPs may initially seem cool, as they reserve their most authentic thoughts and feelings for people they know well. They are reflective and often spiritual, and often interested in having meaningful conversations about values, ethics, people, and personal growth. Typically curious and open-minded, the Healer continually seeks a deeper understanding of themselves and of the people around them. They are passionate about their ideals, but private as well; few people understand the depth of the INFP’s commitment to their beliefs.\n\n    INFPs are sensitive and empathetic, and engage themselves in a lifelong quest for meaning and authenticity. The mundane aspects of life are of less interest to this type, and they are more excited by interesting ideas than by practical facts. They typically accept others without question, and may take special interest in offbeat points of view or alternative lifestyles. They often have a special affection for the arts, especially the avant garde, as they love experiencing new concepts in self-expression.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Arts and Design\n\n    Fine Artist\n    Fashion Designer\n    Graphic Designer\n    Multimedia Artist or Animator\n\n    Community and Social Service\n\n    Mental Health Counselor\n    School or Career Counselor\n    Community Service Manager\n    Social Worker\n\n    Education and Library\n\n    Archivist or Curator\n    Elementary School Teacher\n    Librarian\n    Preschool Teacher\n    Professor or College Instructor\n    Special Education Teacher\n\n    Health Care\n\n    Audiologist\n    Chiropractor\n    Nutritionist\n    Genetic Counselor\n    Massage Therapist\n    Midwife\n    Occupational Therapist\n    Physical Therapist\n    Speech-Language Pathologist\n    Veterinarian\n    Veterinary Technician\n\n    Business and Management\n\n    Fundraiser\n    Human Resources Specialist\n    Training or Development Manager\n\n    Sciences\n\n    Anthropologist or Archaeologist\n    Geographer\n    Historian\n    Psychologist\n    Sociologist\n    Zoologist or Wildlife Biologist\n\n    Communications\n\n    Editor\n    Film Editor\n    Interpreter or Translator\n    Photographer\n    Public Relations Specialist\n    Writer\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>4% of the general population</li><li>5% of women</li><li>4% of men</li><br><b>Facts</b><br><li>On personality trait measures, score as Artistic, Reflective, Careless, Sensitive, Flexible, and Appreciative</li><li>Among least likely of all types to suffer heart disease</li><li>In men, among least likely to report chronic pain</li><li>Second highest of all types to report marital dissatisfaction</li><li>Among most likely to have suicidal thoughts in college</li><li>Tend to be more successful than the average in learning a foreign language</li><li>Among types most likely to be dissatisfied with their work</li><li>Personal values include Autonomy and Creativity</li><li>Overrepresented in occupations in counseling, writing, and the arts</li></ul>"}]):"/type/enfj"==n.$$path.toLowerCase()?(e.type="ENFJ - The Teacher",e.typeData=[{title:"Overview",content:"<p>ENFJs are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, ENFJs take a great deal of pride and joy in guiding others to work together to improve themselves and their community.</p><p>ENFJs are driven by a deep sense of altruism and empathy for other people. They have an intuitive sense of the emotions of others, and often act as an emotional barometer for the people around them. However, their compassion not reserved for the people close to them: they are often humanitarian in nature, and may feel genuine concern for the ills of the entire human race. They tend to personally experience the feelings of others, and feel compelled to act when they see people suffering.</p><p>ENFJs want close, supportive connections with others, and believe that cooperation is the best way to get things done. They like to be liked and are very sensitive to feedback, both positive and negative. They expect the best not just from themselves, but from others as well, and may find themselves disappointed when others are not as genuine in their intentions as the ENFJ. ENFJs work hard to maintain strong relationships, and strive to be valuable members of their families, groups, and communities.</p>"},{title:"Strengths",content:"<p>\n\n    Tolerant – ENFJs are true team players, and they recognize that that means listening to other peoples' opinions, even when they contradict their own. They admit they don't have all the answers, and are often receptive to dissent, so long as it remains constructive.\n    Reliable – The one thing that galls ENFJs the most is the idea of letting down a person or cause they believe in. If it's possible, ENFJs can always be counted on to see it through.\n    Charismatic – Charm and popularity are qualities ENFJs have in spades. They instinctively know how to capture an audience, and pick up on mood and motivation in ways that allow them to communicate with reason, emotion, passion, restraint – whatever the situation calls for. Talented imitators, ENFJs are able to shift their tone and manner to reflect the needs of the audience, while still maintaining their own voice.\n    Altruistic – Uniting these qualities is ENFJs' unyielding desire to do good in and for their communities, be it in their own home or the global stage. Warm and selfless, ENFJs genuinely believe that if they can just bring people together, they can do a world of good.\n    Natural Leaders – More than seeking authority themselves, ENFJs often end up in leadership roles at the request of others, cheered on by the many admirers of their strong personality and positive vision.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Overly Idealistic – People with the ENFJ personality type can be caught off guard as they find that, through circumstance or nature, or simple misunderstanding, people fight against them and defy the principles they've adopted, however well-intentioned they may be. They are more likely to feel pity for this opposition than anger, and can earn a reputation of naïveté.\n    Too Selfless – ENFJs can bury themselves in their hopeful promises, feeling others' problems as their own and striving hard to meet their word. If they aren't careful, they can spread themselves too thin, and be left unable to help anyone.\n    Too Sensitive – While receptive to criticism, seeing it as a tool for leading a better team, it's easy for ENFJs to take it a little too much to heart. Their sensitivity to others means that ENFJs sometimes feel problems that aren't their own and try to fix things they can't fix, worrying if they are doing enough.\n    Fluctuating Self-Esteem – ENFJs define their self-esteem by whether they are able to live up to their ideals, and sometimes ask for criticism more out of insecurity than out of confidence, always wondering what they could do better. If they fail to meet a goal or to help someone they said they'd help, their self-confidence will undoubtedly plummet.\n    Struggle to Make Tough Decisions – If caught between a rock and a hard place, ENFJs can be stricken with paralysis, imagining all the consequences of their actions, especially if those consequences are humanitarian.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ENFJs are natural teachers, often found organizing people to take part in some educational activity. They tend to take charge of a situation, and guide a group towards those activities and experiences which will help them learn and grow. They intuitively see the potential in people, and with charisma and warmth, they encourage others to pursue greater development of their strengths. They are typically dynamic and productive, and are often visibly energized when leading others to discover new knowledge.\n\n    ENFJs are typically good communicators, talented at using words to connect with others. They are perceptive about people and enjoy talking about relationships. They often enjoy helping others solve personal problems and like to share their insights about people, their emotions, and their motivations. They are empathetic sometimes to the point of being overinvolved, and can become exhausted if they are surrounded by too much negative emotion.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Community and Social Service\n\n    Health Educator\n    Marriage and Family Therapist\n    Rehabilitation Counselor\n    School or Career Counselor\n    Social Worker\n    Social or Community Service Manager\n\n    Media and Communication\n\n    Editor\n    Interpreter or Translator\n    Photographer\n    Public Relations Specialist\n    Public Relations Manager\n    Reporter\n    Author\n\n    Education\n\n    High School Teacher\n    Instructional Coordinator\n    Elementary School Teacher\n    Middle School Teacher\n    Preschool Teacher\n    College Instructor\n    Special Education Teacher\n    Adult Literacy Teacher\n    School Principal\n    College Administrator\n    Childcare Center Director\n\n    Business, Management, and Sales\n\n    Advertising and Promotions Manager\n    Human Resources Manager\n    Insurance Sales Agent\n    Real Estate Broker\n    Lodging Manager\n    Flight Attendant\n    Fundraiser\n    Human Resources Specialist\n    Market Research Analyst\n    Meeting or Convention Planner\n    Training or Development Specialist\n    Training or Development Manager\n    Sales Manager\n\n    Entertainment, Arts and Design\n\n    Actor\n    Producer or Director\n    Landscape Architect\n    Art Director\n    Floral Designer\n    Industrial Designer\n    Interior Designer\n\n    Personal Care and Service\n\n    Cosmetologist\n    Child Care Worker\n    Fitness Trainer\n\n    Sciences\n\n    Anthropologist or Archaeologist\n    Forester\n    Historian\n    Psychologist\n    Sociologist\n    Urban or Regional Planner\n\n    Legal\n\n    Legal Mediator\n    Lawyer\n\n    Healthcare\n\n    Athletic Trainer\n    Audiologist\n    Chiropractor\n    Dental Hygienist\n    Dietitian or Nutritionist\n    Genetic Counselor\n    Nurse Practitioner\n    Occupational Therapist\n    Physical Therapist\n    Physician Assistant\n    Recreational Therapist\n    Speech-Language Pathologist\n    Medical or Health Services Manager\n\n    Office and Administrative\n\n    Customer Service Representative\n    Receptionist\n    Executive Assistant\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>3% of the general population</li><li>3% of women</li><li>2% of men</li><br><b>Facts</b><br><li>On personality trait scales, scored as Active, Pleasant, Sociable, Demanding, Impatient, Appreciative, and Compromising</li><li>Most likely of all types to cope with stress by exercising</li><li>Most likely of all types to believe in a higher spiritual power</li><li>Ranked by psychologists as among least likely to have trouble in school</li><li>Personal values include Friendships, Education & Learning, Creativity, and Community Service</li><li>Among types highest in job satisfaction, but also among most likely to report plans to leave their jobs</li><li>Commonly found in careers in religion, teaching, and the arts</li></ul>"}]):"/type/enfp"==n.$$path.toLowerCase()?(e.type="ENFP - The Champion",e.typeData=[{title:"Overview",content:"<p>The ENFP personality is a true free spirit. They are often the life of the party, but unlike Explorers, they are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% of the population that they comprise can certainly be felt in any crowd.</p><p>ENFPs tend to be curious about others and preoccupied with discovering the deeper meaning in people and ideas. They want authentic experience and often seek emotional intensity. ENFPs are easily bored by details and repetition and seek out situations that offer an escape from the mundane. Novelty is attractive to ENFPs, who often have a wide range of interests and friends from many backgrounds.</p><p>ENFPs prize individuality and often consider the pursuit of happiness to be the highest priority in life, both for themselves and for others. They place great importance on personal freedom and self-expression, and want to be able to go wherever inspiration leads.</p>"},{title:"Strengths",content:"<p>\n\n    Curious – When it comes to new ideas, ENFPs aren't interested in brooding – they want to go out and experience things, and don't hesitate to step out of their comfort zones to do so. ENFPs are imaginative and open-minded, seeing all things as part of a big, mysterious puzzle called life.\n    Observant – ENFPs believe that there are no irrelevant actions, that every shift in sentiment, every move and every idea is part of something bigger. To satisfy their curiosity, ENFPs try to notice all of these things, and to never miss a moment.\n    Energetic and Enthusiastic – As they observe, forming new connections and ideas, ENFPs won't hold their tongues – they're excited about their findings, and share them with anyone who'll listen. This infectious enthusiasm has the dual benefit of giving ENFPs a chance to make more social connections, and of giving them a new source of information and experience, as they fit their new friends' opinions into their existing ideas.\n    Excellent Communicators – It's a good thing that ENFPs have such strong people skills, or they'd never express these ideas. ENFPs enjoy both small talk and deep, meaningful conversations, which are just two sides of the same coin for them, and are adept at steering conversations towards their desired subjects in ways that feel completely natural and unforced.\n    Know How to Relax – It's not all “nature of the cosmos” discussions with ENFPs – people with this personality type know that sometimes, nothing is as important as simply having fun and experiencing life's joys. That Intuitive trait lets ENFPs know that it's time to shake things up, and these wild bursts of enthusiastic energy can surprise even their closest friends.\n    Very Popular and Friendly – All this adaptability and spontaneity comes together to form a person who is approachable, interesting and exciting, with a cooperative and altruistic spirit and friendly, empathetic disposition. ENFPs get along with pretty much everyone, and their circles of friends stretch far and wide.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Poor Practical Skills – When it comes to conceiving ideas and starting projects, especially involving other people, ENFPs have exceptional talent. Unfortunately their skill with upkeep, administration, and follow-through on those projects struggles. Without more hands-on people to help push day-to-day things along, ENFPs' ideas are likely to remain just that – ideas.\n    Find it Difficult to Focus – ENFPs are natural explorers of interpersonal connections and philosophy, but this backfires when what needs to be done is that TPS report sitting right in front of them. It's hard for ENFPs to maintain interest as tasks drift towards routine, administrative matters, and away from broader concepts.\n    Overthink Things – ENFPs don't take things at face value – they look for underlying motives in even the simplest things. It's not uncommon for ENFPs to lose a bit of sleep asking themselves why someone did what they did, what it might mean, and what to do about it.\n    Get Stressed Easily – All this overthinking isn't just for their own benefit – ENFPs, especially Turbulent ones, are very sensitive, and care deeply about others' feelings. A consequence of their popularity is that others often look to them for guidance and help, which takes time, and it's easy to see why ENFPs sometimes get overwhelmed, especially when they can't say yes to every request.\n    Highly Emotional – While emotional expression is healthy and natural, with ENFPs even viewing it as a core part of their identity, it can come out strongly enough to cause problems for this personality type. Particularly when under stress, criticism or conflict, ENFPs can experience emotional bursts that are counter-productive at best.\n    Independent to a Fault – ENFPs loathe being micromanaged and restrained by heavy-handed rules – they want to be seen as highly independent masters of their own fates, even possessors of an altruistic wisdom that goes beyond draconian law. The challenge for ENFPs is that they live in a world of checks and balances, a pill they are not happy to swallow.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ENFPs love to talk about people: not just the facts, but what motivates them, what inspires them, and what they envision achieving in life. They’ll often share their own aspirations freely, and want to hear others’ in return. The ENFP is unlikely to judge anyone’s dream, and will discuss the most imaginative and outlandish of fantasies with warm, enthusiastic intensity. They love to explore creative possibilities, and nothing deflates them faster than talking about dry facts or harsh reality.\n\n    ENFPs often seem unconventional, and may come off as scattered; they don’t tend to be in touch with their physical surroundings. They often overlook the details, as they are more likely to focus on connecting with other people or on exploring their own imagination and self-expression. They have little patience for the mundane and want to experience life with intensity and flair. ENFPs often have an artistic streak, and may be artistic in appearance. Many have developed a distinctive and quirky personal style.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Arts and Entertainment\n\n    Actor\n    Dancer or Choreographer\n    Music Director or Composer\n    Musician or Singer\n    Producer or Director\n    Art Director\n    Craft or Fine Artist\n    Fashion Designer\n    Floral Designer\n    Interior Designer\n    Multimedia Artist\n\n    Sales\n\n    Advertising Sales Agent\n    Insurance Sales Agent\n    Real Estate Agent\n    Retail Salesperson\n    Travel Agent\n\n    Service and Personal Care\n\n    Animal Trainer\n    Barber, Hairdresser, or Cosmetologist\n    Child Care Worker\n    Fitness Trainer\n    Recreation Worker\n    Skincare Specialist\n    Bartender\n    Waiter or Waitress\n\n    Media and Communication\n\n    Announcer\n    Editor\n    Interpreter\n    Photographer\n    Public Relations Specialist\n    Reporter\n    Writer or Author\n\n    Science and Nature\n\n    Anthropologist or Archaeologist\n    Conservation Scientist\n    Psychologist\n    Sociologist\n    Urban or Regional Planner\n    Landscape Architect\n\n    Education\n\n    High School Teacher\n    Instructional Coordinator\n    Kindergarten or Elementary School Teacher\n    Middle School Teacher\n    Preschool Teacher\n    Special Education Teacher\n    Teacher Assistant\n    Preschool or Childcare Center Director\n\n    Healthcare\n\n    Athletic Trainer\n    Audiologist\n    Chiropractor\n    Dental Assistant\n    Dental Hygienist\n    Nutritionist\n    Genetic Counselor\n    Massage Therapist\n    Nurse Midwife\n    Occupational Health and Safety Specialist\n    Occupational Health and Safety Technician\n    Occupational Therapist\n    Occupational Therapy Assistant or Aide\n    Physical Therapist\n    Physical Therapist Assistant\n    Recreational Therapist\n    Speech-Language Pathologist\n    Veterinarian\n    Veterinary Technologist or Technician\n\n    Business and Management\n\n    Fundraiser\n    Human Resources Specialist\n    Meeting or Convention Planner\n    Buyer\n    Training or Development Specialist\n    Training or Development Manager\n    Lodging Manager\n    Public Relations Manager\n    Sales Manager\n    Advertising and Promotions Manager\n    Human Resources Manager\n    Customer Service Representative\n    Receptionist\n    Legal Mediator\n\n    Community and Social Service\n\n    Health Educator\n    Mental Health Counselor\n    Rehabilitation Counselor\n    School or Career Counselor\n    Social or Human Service Assistant\n    Social Worker\n    Substance Abuse or Behavioral Disorder Counselor\n    Social or Community Service Manager\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>8% of the general population</li><li>10% of women</li>6% of men</li><br><b>Facts</b><br><li>On personality trait scales, scored as Enthusiastic, Outgoing, Spontaneous, Changeable, Impulsive, Energetic, and Understanding</li><li>Scored among highest of all types in available resources for coping with stress</li><li>ENFP women are less likely to suffer from heart disease</li><li>ENFP men are less likely to suffer from chronic pain</li><li>Rated by psychologists as among most likely of all types to have trouble in school</li><li>Overrepresented among academically talented elementary school students</li><li>Personal values include Home & family, Friendships, Creativity, Learning, and Community Service</li><li>Commonly found in careers in counseling, teaching, religion, and the arts</li></ul>"}]):"/type/istj"==n.$$path.toLowerCase()?(e.type="ISTJ - The Inspector",e.typeData=[{title:"Overview",content:"<p>The ISTJ personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make ISTJs a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the ISTJ personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, ISTJs hold back none of their time and energy completing each relevant task with accuracy and patience.</p><p>ISTJs like to know what the rules of the game are, valuing predictability more than imagination. They rely on their past experience to guide them, and are most comfortable in familiar surroundings. ISTJs trust the proven method, and appreciate the value of dedicated practice to build confidence in their skills.</p><p>ISTJs are hardworking and will persist until a task is done. They are logical and methodical, and often enjoy tasks that require them to use step-by-step reasoning to solve a problem. They are meticulous in their attention to details, and examine things closely to be sure they are correct. With their straightforward logic and orientation to detail, ISTJs work systematically to bring order to their own small parts of the world.</p>"},{title:"Strengths",content:"<p>\n\n    Honest and Direct – Integrity is the heart of the ISTJ personality type. Emotional manipulation, mind games and reassuring lies all run counter to ISTJs' preference for managing the reality of the situations they encounter with plain and simple honesty.\n    Strong-willed and Dutiful – ISTJs embody that integrity in their actions too, working hard and staying focused on their goals. Patient and determined, people with the ISTJ personality type meet their obligations, period.\n    Very Responsible – ISTJs' word is a promise, and a promise means everything. ISTJs would rather run themselves into the ground with extra days and lost sleep than fail to deliver the results they said they would. Loyalty is a strong sentiment for ISTJ personalities, and they fulfill their duties to the people and organizations they've committed themselves to.\n    Calm and Practical – None of their promises would mean much if ISTJs lost their tempers and broke down at every sign of hardship – they keep their feet on the ground and make clear, rational decisions. Peoples' preferences are a factor to consider in this process, and ISTJs work to make the best use of individual qualities, but these decisions are made with effectiveness in mind more so than empathy. The same applies to criticisms, for others and themselves.\n    Create and Enforce Order – The primary goal of any ISTJ is to be effective in what they've chosen to do, and they believe that this is accomplished best when everyone involved knows exactly what is going on and why. Unclear guidelines and people who break established rules undermine this effort, and are rarely tolerated by ISTJs. Structure and rules foster dependability; chaos creates unforeseen setbacks and missed deadlines.\n    Jacks-of-all-trades – Much like Analysts (NT), ISTJs are proud repositories of knowledge, though the emphasis is more on facts and statistics than concepts and underlying principles. This allows ISTJs to apply themselves to a variety of situations, picking up and applying new data and grasping the details of challenging situations as a matter of course.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Stubborn – The facts are the facts, and ISTJs tend to resist any new idea that isn't supported by them. This factual decision-making process also makes it difficult for people with the ISTJ personality type to accept that they were wrong about something – but anyone can miss a detail, even them.\n    Insensitive – While not intentionally harsh, ISTJs are often hurt more sensitive types' feelings by the simple mantra that honesty is the best policy. ISTJ personalities may take emotions into consideration, but really only so far as to determine the most effective way to say what needs to be said.\n    Always by the Book – ISTJs believe that things work best with clearly defined rules, but this makes them reluctant to bend those rules or try new things, even when the downside is minimal. Truly unstructured environments leave ISTJs all but paralyzed.\n    Judgmental – Opinions are opinions and facts are facts, and ISTJs are unlikely to respect people who disagree with those facts, or especially those who remain willfully ignorant of them.\n    Often Unreasonably Blame Themselves – All this can combine to make ISTJs believe they are the only ones who can see projects through reliably. As they load themselves with extra work and responsibilities, turning away good intentions and helpful ideas, ISTJs sooner or later hit a tipping point where they simply can't deliver. Since they've heaped the responsibility on themselves, ISTJs then believe the responsibility for failure is theirs alone to bear.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ISTJs have a serious, conservative air about them. They want to know and follow the rules of the game, and typically seek out predictable surroundings where they understand their role. You may find the ISTJ doing something useful even in social situations (for instance, organizing coats and hats at a party) as they’re often more comfortable taking charge of a task than they are chatting up strangers. When given something to do, they are highly dependable, and follow it through to the end.\n\n    ISTJs are practical and no-nonsense, and rarely call attention to themselves. Their clothes and possessions tend to be chosen based on utility rather than fashion, and they have an affection for the classics. ISTJs typically speak in a straightforward manner and have a good head for details. They are usually more enthusiastic about sharing factual information than exploring abstract concepts or unproven ideas.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Auditor\n    Actuary\n    Budget Analyst\n    Accountant\n    Chief Information Officer\n    Office Manager\n    Efficiency Analyst\n    Stockbroker\n    Estate Planner\n    Property Manager\n    Real Estate Appraiser\n    Bank Teller\n    Statistician\n    Economist\n    Cost Estimator\n    Airplane Pilot\n    Computer Programmer\n    Database Administrator\n    Electrician\n    Environmental Engineer\n    Mechanic\n    Flight Engineer\n    Civil Engineer\n    Nuclear Engineer\n    Health & Safety Engineer\n    Power Plant Operator\n    Compliance Inspector\n    Geologist\n    Landscaping Manager\n    Farmer or Rancher\n    Technical Instructor\n    School Administrator\n    Criminalist\n    Police Officer\n    Dentist\n    Pharmacist\n    Surgeon\n    Coroner\n    Medical Technologist\n    Physician Assistant\n    Optometrist\n    Health Care Administrator\n    Judge\n    Paralegal\n    Librarian\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>12% of the general population</li><li>7% of women</li><li>16% of men</li><br><b>Facts</b><br><li>On personality trait measures, score as Calm, Stable, Steady, Cautious, and Conventional</li><li>More likely than other types to experience cardiac problems and hypertension</li><li>More likely than other types to experience chronic pain</li><li>Among four highest types in college GPA</li><li>More frequent among African Americans</li><li>Personal values include Financial Security</li><li>Most likely of all types to enjoy a work environment where “everything is done by the book”</li><li>Overrepresented among bank officers, financial managers, MBA students, and small business owners</li><li>Often found in careers in management, administration, law enforcement, and accounting</li></ul>"}]):"/type/estj"==n.$$path.toLowerCase()?(e.type="ESTJ - The Supervisor",e.typeData=[{title:"Overview",content:"<p>ESTJs are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the ESTJ personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, ESTJs often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.</p><p>ESTJs are conventional, factual, and grounded in reality. For the ESTJ, the proof is in the past: what has worked and what has been done before. They value evidence over conjecture, and trust their personal experience. ESTJs look for rules to follow and standards to meet, and often take a leadership role in helping other people meet expectations as well. They concern themselves with maintaining the social order and keeping others in line.</p><p>ESTJs often take on a project manager role at home as well as at work, and excel at setting goals, making decisions, and organizing resources to accomplish a task. The ESTJ wants to achieve efficient productivity and typically believes this is best accomplished when people and systems are well organized.</p>"},{title:"Strengths",content:"<p>\n\n    Dedicated – Seeing things to completion borders on an ethical obligation for ESTJs. Tasks aren't simply abandoned because they've become difficult or boring – people with the ESTJ personality type take them up when they are the right thing to do, and they will be finished so long as they remain the right thing to do.\n    Strong-willed – A strong will makes this dedication possible, and ESTJs don't give up their beliefs because of simple opposition. ESTJs defend their ideas and principles relentlessly, and must be proven clearly and conclusively wrong for their stance to budge.\n    Direct and Honest – ESTJs trust facts far more than abstract ideas or opinions. Straightforward statements and information are king, and ESTJ personalities return the honesty (whether it's wanted or not).\n    Loyal, Patient and Reliable – ESTJs work to exemplify truthfulness and reliability, considering stability and security very important. When ESTJs say they'll do something, they keep their word, making them very responsible members of their families, companies and communities.\n    Enjoy Creating Order – Chaos makes things unpredictable, and unpredictable things can't be trusted when they are needed most – with this in mind, ESTJs strive to create order and security in their environments by establishing rules, structures and clear roles.\n    Excellent Organizers – This commitment to truth and clear standards makes ESTJs capable and confident leaders. People with this personality type have no problem distributing tasks and responsibilities to others fairly and objectively, making them excellent administrators.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Inflexible and Stubborn – The problem with being so fixated on what works is that ESTJs too often dismiss what might work better. Everything is opinion until proven, and ESTJ personalities are reluctant to trust an opinion long enough for it to have that chance.\n    Uncomfortable with Unconventional Situations – ESTJs are strong adherents to tradition and when suddenly forced to try unvetted solutions, they become uncomfortable and stressed. New ideas suggest that their methods weren't good enough, and abandoning what has always worked before in favor of something that may yet fail risks their image of reliability.\n    Judgmental – ESTJs have strong convictions about what is right, wrong, and socially acceptable. ESTJs' compulsion to create order often extends to all things and everyone, ignoring the possibility that there are two right ways to get things done. ESTJs do not hesitate to let these 'deviants' know what they think, considering it their duty to set things right.\n    Too Focused on Social Status – ESTJs take pride in the respect of their friends, colleagues and community and while difficult to admit, are very concerned with public opinion. ESTJs (especially Turbulent ones) can get so caught up in meeting others' expectations that they fail to address their own needs.\n    Difficult to Relax – This need for respect fosters a need to maintain their dignity, which can make it difficult to cut loose and relax for risk of looking the fool, even in good fun.\n    Difficulty Expressing Emotion – This is all evidence of ESTJs' greatest weakness: expressing emotions and feeling empathy. People with the ESTJ personality type get so caught up in the facts and most effective methods that they forget to think of what makes others happy, or of their sensitivity. A detour can be breathtakingly beautiful, a joy for the family, but ESTJs may only see the consequence of arriving at their destination an hour late, hurting their loved ones by rejecting the notion too harshly.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ESTJs command a situation, with the sense that they know how things should go and are ready to take charge to make sure that it happens. They are task-oriented and put work before play. Confident and tough-minded, the ESTJ appears almost always to be in control. ESTJs appreciate structure and often begin to organize as soon as they enter a room. They want to establish the ground rules and make sure everyone does what they’re supposed to.\n\n    ESTJs are often involved in institutions: clubs, associations, societies, and churches, where they usually take a leadership role. They typically connect with others through sharing ritual and routine. Social interaction for ESTJs often means following an established tradition to engage with others in a structured way. ESTJs tend to respect and seek out hierarchy. They want to know who’s in charge, and will assign levels of responsibility if none exist. Once a structure is in place, ESTJs typically trust authority figures and expect obedience from people of lower rank.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Sales Engineer\n    Stockbroker\n    Insurance Agent\n    Sales Manager\n    Purchasing Agent\n    Real Estate Agent\n    Hotel Manager\n    Credit Analyst\n    Budget Analyst\n    Insurance Adjuster\n    Financial Counselor\n    Project Manager\n    Management Consultant\n    Office Manager\n    Public Administrator\n    Chief Financial Officer\n    Chief Information Officer\n    Military Officer\n    Police Officer\n    Airline Pilot\n    Vocational Teacher\n    Farmer or Rancher\n    Chef\n    Attorney\n    Paralegal\n    Judge\n    Auditor\n    School Principal\n    Property Manager\n    Restaurant Owner\n    Pharmacist\n    Dentist\n    Physician\n    Athletic Trainer\n    Civil Engineer\n    Mechanical Engineer\n    Industrial Engineer\n    Flight Engineer\n    Database Administrator\n    Real Estate Appraiser\n    Cost Estimator\n    Building Inspector\n    Factory Supervisor\n    General Contractor\n    Funeral Director\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>9% of the general population</li><li>6% of women</li><li>11% of men</li><br><b>Facts</b><br><li>On personality trait measures, likely to score as Contented, Energetic, Prejudiced, Self-Satisfied, and Practical</li><li>More likely than other types to exhibit Type A behavior</li><li>Of all types, scored highest in coping resources (with ENFP)</li><li>Ranked 3rd highest in marital satisfaction among all types</li><li>Among top four types in college GPA</li><li>Least likely of all types to think about suicide in college</li><li>Among most likely to stay in college</li><li>Among types most satisfied with their work</li><li>High-ranking personal values include Health, Financial Security, Achievement, and Prestige</li><li>Overrepresented among bank officers, financial managers, and business owners</li></li></ul>"}]):"/type/isfj"==n.$$path.toLowerCase()?(e.type="ISFJ - The Protector",e.typeData=[{title:"Overview",content:"<p>The ISFJ personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though possessing the Feeling (F) trait, ISFJs have excellent analytical abilities; though Introverted (I), they have well-developed people skills and robust social relationships; and though they are a Judging (J) type, ISFJs are often receptive to change and new ideas. As with so many things, people with the ISFJ personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.</p><p>ISFJs are driven by their personal values, and are conscientious in their behavior. They typically want to work hard, get along with others, and make sure they do what is expected of them.</p><p>ISFJs value relationships highly and strive to cooperate and maintain harmony with others. They want stability and longevity in their relationships, and tend to maintain a deep devotion to family. They feel most connected with people they know they can rely upon over the long term.</p><p>ISFJs appreciate tradition and like knowing how things were done in the past. They are loyal to established methods and values, and want to observe the proper, accepted way of doing things. They place great importance on fitting in with established institutions and contributing what they can to maintain strong, stable social structures. In groups, they often take on the role of historian, ensuring that new members respect and value the established customs.</p>"},{title:"Strengths",content:"<p>\n\n    Supportive – ISFJs are the universal helpers, sharing their knowledge, experience, time and energy with anyone who needs it, and all the more so with friends and family. People with this personality type strive for win-win situations, choosing empathy over judgment whenever possible.\n    Reliable and Patient – Rather than offering sporadic, excited rushes that leave things half finished, ISFJs are meticulous and careful, taking a steady approach and bending with the needs of the situation just enough to accomplish their end goals. ISFJs not only ensure that things are done to the highest standard, but often go well beyond what is required.\n    Imaginative and Observant – ISFJs are very imaginative, and use this quality as an accessory to empathy, observing others' emotional states and seeing things from their perspective. With their feet firmly planted on the ground, it is a very practical imagination, though they do find things quite fascinating and inspiring.\n    Enthusiastic – When the goal is right, ISFJs take all this support, reliability and imagination and apply it to something they believe will make a difference in people's lives – whether fighting poverty with a global initiative or simply making a customer's day.\n    Loyal and Hard-Working – Given a little time, this enthusiasm grows into loyalty – ISFJ personalities often form an emotional attachment to the ideas and organizations they've dedicated themselves to. Anything short of meeting their obligations with good, hard work fails their own expectations.\n    Good Practical Skills – The best part is, ISFJs have the practical sense to actually do something with all this altruism. If mundane, routine tasks are what need to be done, ISFJs can see the beauty and harmony that they create, because they know that it helps them to care for their friends, family, and anyone else who needs it.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Humble and Shy – The meek shall inherit the earth, but it's a long road if they receive no recognition at all. This is possibly ISFJs' biggest challenge, as they are so concerned with others' feelings that they refuse to make their thoughts known, or to take any duly earned credit for their contributions. ISFJs' standards for themselves are also so high that, knowing they could have done some minor aspect of a task better, they often downplay their successes entirely.\n    Take Things Too Personally – ISFJs have trouble separating personal and impersonal situations – any situation is still an interaction between two people, after all – and any negativity from conflict or criticism can carry over from their professional to their personal lives, and back again.\n    Repress Their Feelings – People with the ISFJ personality type are private and very sensitive, internalizing their feelings a great deal. Much in the way that ISFJs protect others' feelings, they must protect their own, and this lack of healthy emotional expression can lead to a lot of stress and frustration.\n    Overload Themselves – Their strong senses of duty and perfectionism combine with this aversion to emotional conflict to create a situation where it is far too easy for ISFJs to overload themselves – or to be overloaded by others – as they struggle silently to meet everyone's expectations, especially their own.\n    Reluctant to Change – These challenges can be particularly hard to address since ISFJ personalities value traditions and history highly in their decisions. A situation sometimes needs to reach a breaking point before ISFJs are persuaded by circumstance, or the strong personality of a loved one, to alter course.\n    Too Altruistic – This is all compounded and reinforced by ISFJs' otherwise wonderful quality of altruism. Being such warm, good-natured people, ISFJs are willing to let things slide, to believe that things will get better soon, to not burden others by accepting their offers of help, while their troubles mount unassisted.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ISFJs are characteristically humble and unassuming, and rarely call attention to themselves. They can often be found offering assistance to others in a modest, understated way. They are loyal and hardworking, and often commit themselves to tasks and projects with the aim of being helpful to their families, friends, and communities. They are typically involved in social groups, but do not want the spotlight: they are more likely to be found behind the scenes, working diligently to fulfill their role.\n\n    ISFJs are oriented to relationships, but can be reserved with new people. They rarely disclose personal information quickly. They tend to be focused and aware of their surroundings, and relate details from their own personal experience. They often converse in terms of what has happened to them and what they have seen first-hand. They are compassionate listeners, and typically remember details about people. They often enjoy hearing the facts about others in the process of making a connection.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Dentist\n    Health Care Administrator\n    Nurse\n    Speech Pathologist\n    Veterinarian\n    Optometrist\n    Family Physician\n    Physical Therapist\n    Radiation Therapist\n    Audiologist\n    Physician Assistant\n    Medical Assistant\n    Dental Hygienist\n    Nutritionist\n    Dialysis Technician\n    Preschool Teacher\n    Elementary Teacher\n    School Administrator\n    Counselor\n    Social Worker\n    Religious Educator\n    Funeral Director\n    Paralegal\n    Court Reporter\n    Probation Officer\n    Credit Counselor\n    Farmer or Rancher\n    Electrician\n    Jeweler\n    Interior Designer\n    Biologist\n    Food Scientist\n    Medical Researcher\n    Conservation Scientist\n    Librarian\n    Curator\n    Historian\n    Genealogist\n    Real Estate Appraiser\n    Office Manager\n    Customer Service Rep\n    Hotel Manager\n    Tech Support Specialist\n    Bookkeeper\n    Administrative Assistant\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>\n\n    14% of the general population\n    19% of women\n    8% of men</li><br><b>Facts</b><br><li>\n\n    On personality trait measures, score as Conservative, Conventional, Guarded, and Reserved\n    Among types most likely to believe in a higher spiritual power\n    More likely than average to experience chronic pain\n    Among types most likely to suffer heart disease\n    Second most common type among education majors in college\n    More likely than other types to watch more than 3 hours of television per day\n    Personal values include Happy family, Health and Spirituality\n    Overrepresented among MBA students and male small business owners\n    Among three types with the lowest income\n    Commonly found in education, health care, and religious occupations\n\n    </li></ul>"}]):"/type/esfj"==n.$$path.toLowerCase()?(e.type="ESFJ - The Provider",e.typeData=[{title:"Overview",content:"<p>People who share the ESFJ personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, ESFJs are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, ESFJs continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.</p><p>ESFJs act according to a strict moral code, and look for others to do the same. They often see things in terms of black and white, right and wrong, and they are typically not shy about sharing their evaluations of others' behavior. ESFJs seek harmony and cooperation, and feel this is best accomplished when everyone follows the same set of rules. They have a sense of order in the way people relate to one another, and often take on roles that allow them to help enforce that social order.</p><p>ESFJs feel a sense of personal responsibility for other people's needs, and are usually eager to get involved and help out. They tend to be serious and practical, dutifully putting business before pleasure—especially the business of caring for others. They typically enjoy routine and often keep a regular schedule that allows them to be organized and productive.</p>"},{title:"Strengths",content:"<p>\n\n    Strong Practical Skills – ESFJs are excellent managers of day-to-day tasks and routine maintenance, enjoying making sure that those who are close to them are well cared for.\n    Strong Sense of Duty – People with the ESFJ personality type have a strong sense of responsibility and strive to meet their obligations, though this may sometimes be more from a sense of social expectations than intrinsic drive.\n    Very Loyal – Valuing stability and security very highly, ESFJs are eager to preserve the status quo, which makes them extremely loyal and trustworthy partners and employees. ESFJs are true pillars of any groups they belong to – whether it is their family or a community club, people with this personality type can always be relied upon.\n    Sensitive and Warm – Helping to ensure that stability, ESFJ personalities seek harmony and care deeply about other people's feelings, being careful not to offend or hurt anybody. ESFJs are strong team players, and win-win situations are the stuff smiles are made of.\n    Good at Connecting with Others – These qualities come together to make ESFJs social, comfortable and well-liked. ESFJ personalities have a strong need to 'belong', and have no problem with small talk or following social cues in order to help them take an active role in their communities.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Worried about Their Social Status – These Strengths are related to a chief Weakness: ESFJs' preoccupation with social status and influence, which affects many decisions they make, potentially limiting their creativity and open-mindedness.\n    Inflexible – ESFJs place a lot of importance on what is socially acceptable, and can be very cautious, even critical of anything unconventional or outside the mainstream. People with this personality type may also sometimes push their own beliefs too hard in an effort to establish them as mainstream.\n    Reluctant to Innovate or Improvise – Just as they can be critical of others' 'unusual' behavior, ESFJs may also be unwilling to step out of their own comfort zones, usually for fear of being (or just appearing) different.\n    Vulnerable to Criticism – It can be especially challenging to change these tendencies because ESFJs are so conflict-averse. ESFJ personalities can become very defensive and hurt if someone, especially a person close to them, criticizes their habits, beliefs or traditions.\n    Often Too Needy – ESFJs need to hear and see a great deal of appreciation. If their efforts go unnoticed, people with the ESFJ personality type may start fishing for compliments, in an attempt to get reassurance of how much they are valued.\n    Too Selfless – The other side of this is that ESFJs sometimes try to establish their value with doting attention, something that can quickly overwhelm those who don't need it, making it ultimately unwelcome. Furthermore, ESFJs often neglect their own needs in the process.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ESFJs may often be found playing host or hostess. They tend to take on the role of organizer without hesitation, and want to be sure that everyone is taken care of. Roles such as committee leader, event planner, and church volunteer suit the ESFJ well. They are typically engaged with their communities and work hard to do their part in maintaining the social order. ESFJs are interested in other people and like to know the details of their lives. Gossip is a favorite pasttime of many ESFJs; they love to share stories about the people around them.\n\n    ESFJs have a clear moral code that guides their behavior and their expectations from others. They often have strong opinions about how people should behave and the proper thing to do. Manners and other codes of social interaction are often of great interest to ESFJs. They may think in terms of black and white, right and wrong. They can be judgmental of others who they do not think are acting appropriately, but they have the best of intentions: they simply want everyone to follow the rules so they can all get along. The ESFJ wants things to be all right with the people around them, and may become very involved with others’ problems and concerns.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Elementary Teacher\n    Special Education Teacher\n    Child Care Provider\n    School Administrator\n    Counselor\n    Social Worker\n    Health Care Administrator\n    Police Officer\n    Paralegal\n    Court Reporter\n    Real Estate Appraiser\n    Technical Writer\n    Cosmetologist\n    Hotel Manager\n    Caterer\n    Family Physician\n    Dentist\n    Medical Assistant\n    Optometrist\n    Speech Pathologist\n    Nurse\n    Surgeon\n    Physical Therapist\n    Fitness Trainer\n    Dental Hygienist\n    Radiation Therapist\n    Respiratory Therapist\n    Pediatrician\n    Physician Assistant\n    Dietitian\n    Minister\n    Buyer\n    Public Relations Manager\n    HR Manager\n    Corporate Trainer\n    Event Coordinator\n    Funeral Director\n    Real Estate Agent\n    Insurance Agent\n    Merchandise Planner\n    Advertising Sales Agent\n    Office Manager\n    Fundraiser\n    Receptionist\n    Customer Service Rep\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>\n\n    12% of the general population\n    17% of women\n    8% of men</li><br><b>Facts</b><br><li>\n\n    Underrepresented among people suffering from substance abuse\n    Among types highest in resources for coping with stress\n    Second most likely of all types to report believing in a higher spiritual power\n    Highest of all types in reported satisfaction with their marriage or intimate relationship\n    Among most likely of all types to stay in college\n    Most likely of all types to be satisfied with their co-workers\n    Values at work include clear structure, security, and the ability to be of service to others\n    Among the types most satisfied with their work\n    Commonly found in careers in education, health care, and religion\n\n    </li></ul>"}]):"/type/istp"==n.$$path.toLowerCase()?(e.type="ISTP - The Craftsman",e.typeData=[{title:"Overview",content:"<p>ISTPs love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, ISTPs find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.</p><p>ISTPs are curious about the mechanics of the world around them and typically have a unique ability to manipulate the tools in their environments. They tend to study how things work and often achieve mastery in the use and operation of machines, instruments, and equipment. They seek understanding, but in a practical sense: they like to be able to put their technical knowledge to immediate use and are quickly bored by theory.</p><p>ISTPs tend to be detached and prefer the logic of mechanical things to the complexity of human emotions. Independent and reserved, ISTPs treasure their personal space, and want to be free to be spontaneous and follow their own lead. ISTPs are selective about their relationships, and appreciate others who allow them plenty of freedom to do their own thing.</p>"},{title:"Strengths",content:"<p>\n\n    Optimistic and Energetic – ISTPs are usually up to their elbows in some project or other. Cheerful and good-natured, people with the ISTP personality type (especially Assertive ones) rarely get stressed out, preferring to go with the flow.\n    Creative and Practical – ISTPs are very imaginative when it comes to practical things, mechanics, and crafts. Novel ideas come easily, and they love using their hands to put them into action.\n    Spontaneous and Rational – Combining spontaneity with logic, ISTPs can switch mindsets to fit new situations with little effort, making them flexible and versatile individuals.\n    Know How to Prioritize – This flexibility comes with some unpredictability, but ISTP personalities are able to store their spontaneity for a rainy day, releasing their energy just when it's needed most.\n    Great in a Crisis – With all this hands-on creativity and spontaneity, it's no wonder that ISTPs are naturals in crisis situations. People with this personality type usually enjoy a little physical risk, and they aren't afraid to get their hands dirty when the situation calls for it.\n    Relaxed – Through all this, ISTPs are able to stay quite relaxed. They live in the moment and go with the flow, refusing to worry too much about the future.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Stubborn – As easily as ISTPs go with the flow, they can also ignore it entirely, and usually move in another direction with little apology or sensitivity. If someone tries to change ISTPs' habits, lifestyle or ideas through criticism, they can become quite blunt in their irritation.\n    Insensitive – ISTPs use logic, and even when they try to meet others halfway with empathy and emotional sensitivity, it rarely seems to quite come out right, if anything is even said at all.\n    Private and Reserved – ISTP personalities are notoriously difficult to get to know. They are true introverts, keeping their personal matters to themselves, and often just prefer silence to small talk.\n    Easily Bored – ISTPs enjoy novelty, which makes them excellent tinkerers, but much less reliable when it comes to focusing on things long-term. Once something is understood, ISTPs tend to simply move on to something new and more interesting.\n    Dislike Commitment – Long-term commitments are particularly onerous for ISTPs. They prefer to take things day-by-day, and the feeling of being locked into something for a long time is downright oppressive. This can be a particular challenge in ISTPs' romantic relationships.\n    Risky Behavior – This stubbornness, difficulty with others' emotions, focus on the moment, and easy boredom can lead to unnecessary and unhelpful boundary-pushing, just for fun. ISTPs have been known to escalate conflict and danger just to see where it goes, something that can have disastrous consequences for everyone around if they lose control of the situation.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ISTPs are typically reserved and even aloof. Tolerant and nonjudgmental, the ISTP calmly takes in the details and facts of their surroundings, noticing sensory data and observing how things work. They often tune into what needs to be done, taking care of the immediate needs of the moment in a modest, inconspicuous way. They tend to prefer action to conversation, and are often private about their personal lives. ISTPs are unlikely to “open up” to new people in a conventional way, but may connect with others by sharing an activity or working together to solve a practical problem.\n\n    ISTPs are good with their hands and often mechanical. They are typically attracted to hands-on hobbies like woodworking or crafts, and may be found tinkering with bicycles, computers, cars, or household appliances. They often have an intuitive understanding of machines and a remarkable ability to fix things. ISTPs have an appreciation for risk and action, and often enjoy thrilling leisure activities like extreme sports, motorcycling, or weaponry.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Carpenter\n    Surveyor\n    Mechanic\n    Commercial Designer\n    Landscape Architect\n    Building Inspector\n    Forester\n    Farmer or Rancher\n    Exercise Physiologist\n    Athletic Trainer\n    Dental Hygienist\n    ER Physician\n    Chef\n    Photographer\n    Jeweler\n    Securities Analyst\n    Purchasing Agent\n    Financial Manager\n    Software Developer\n    Systems Analyst\n    Database Administrator\n    Software Tester\n    Property Manager\n    Office Manager\n    Cost Estimator\n    Economist\n    Budget Analyst\n    Financial Planner\n    Paralegal\n    Criminalist\n    Biologist\n    Geologist\n    Police Officer\n    Firefighter\n    Private Investigator\n    Military Officer\n    Intelligence Agent\n    Airline Pilot\n    Ship and Boat Captain\n    Flight Engineer\n    Civil Engineer\n    Mechanical Engineer\n    Electrical Engineer\n    Air Traffic Controller\n    Machinist\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>\n\n    5% of the general population\n    2% of women\n    9% of men</li><br><b>Facts</b><br><li>\n\n    On personality trait measures, score as Critical, Detached, Guarded, Independent, and Resourceful\n    Commonly found in populations of male college scholarship athletes\n    More likely than other types to suffer cardiac problems\n    Lowest ranked of all types in using social coping resources\n    One of four types least satisfied with their marriage or intimate relationship\n    Among types least likely to complete college\n    Personal values include Autonomy; at work, value Stability, Security, Independence, and Achievement\n    Commonly found in skilled trades, technical fields, agriculture, law enforcement, and military occupations\n\n    </li></ul>"}]):"/type/isfp"==n.$$path.toLowerCase()?(e.type="ISFP - The Composer",e.typeData=[{title:"Overview",content:"<p>ISFP personality types are true artists, but not necessarily in the typical sense where they're out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it's that they use aesthetics, design and even their choices and actions to push the limits of social convention. ISFPs enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they've expressed more than once the phrase 'Don't box me in!'</p><p>ISFPs tend to be tolerant and nonjudgmental, but are deeply loyal to the people and causes that matter to them. They endeavor to accept and support other people, but are ultimately guided by their own core values. They will typically look for ways to be accommodating and may have difficulty dealing with others who are not willing to do the same.</p><p>ISFPs are typically modest and may underestimate themselves. They usually do not like to be in the spotlight, preferring instead to take a supporting role, and will avoid planning and organizing whenever possible. Sensitive and responsive, they step in to do what needs to be done and are satisfied by their personal sense of being helpful to others.</p>"},{title:"Strengths",content:"<p>\n\n    Charming – People with the ISFP personality type are relaxed and warm, and their “live and let live” attitude naturally makes them likable and popular.\n    Sensitive to Others – ISFPs easily relate to others' emotions, helping them to establish harmony and good will, and minimize conflict.\n    Imaginative – Being so aware of others' emotions, ISFP personalities use creativity and insight to craft bold ideas that speak to people's hearts. While it's hard to explain this quality on a resume, this vivid imagination and exploratory spirit help ISFPs in unexpected ways.\n    Passionate – Beneath ISFPs' quiet shyness beats an intensely feeling heart. When people with this personality type are caught up in something exciting and interesting, they can leave everything else in the dust.\n    Curious – Ideas are well and good, but ISFPs need to see and explore for themselves whether their ideas ring true. Work revolving around the sciences may seem a poor match for their traits, but a boldly artistic and humanistic vision is often exactly what research needs to move forward – if ISFPs are given the freedom they need to do so.\n    Artistic – ISFPs are able to show their creativity in tangible ways and with stunning beauty. Whether writing a song, painting an emotion, or presenting a statistic in a graph, ISFPs have a way of visualizing things that resonates with their audience.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Fiercely Independent – Freedom of expression is often ISFPs' top priority. Anything that interferes with that, like traditions and hard rules, creates a sense of oppression for ISFP personalities. This can make more rigidly structured academics and work a challenge.\n    Unpredictable – ISFPs' dislike long-term commitments and plans. The tendency to actively avoid planning for the future can cause strain in ISFPs' romantic relationships and financial hardship later in life.\n    Easily Stressed – ISFPs live in the present, full of emotion. When situations get out of control, people with this personality type (especially Turbulent ones) can shut down, losing their characteristic charm and creativity in favor of gnashing teeth.\n    Overly Competitive – ISFPs can escalate small things into intense competitions, turning down long-term success in their search for glory in the moment, and are unhappy when they lose.\n    Fluctuating Self-Esteem – It's demanded that skills be quantified, but that's hard to do with ISFPs' strengths of sensitivity and artistry. ISFPs' efforts are often dismissed, a hurtful and damaging blow, especially early in life. ISFPs can start to believe the naysayers without strong support.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ISFPs can be difficult to recognize because of their tendency to express themselves through action rather than words. They may initially appear distant or aloof, but if you watch closely, you can observe their caring in the thoughtful things they do for others. They are carefully observant of the practical needs of other people, and often step in with quiet, unassuming assistance at just the moment it is needed. ISFPs prefer to take a supportive role and are rarely assertive or demanding of attention. They are typically tolerant and accepting of others.\n\n    ISFPs typically have finely tuned artistic sensibilities. They are sensitive to color, texture, and tone, and often have an innate sense of what will be aesthetically pleasing. They are often naturals when it comes to arranging something artistically, and enjoy the process of taking in the sensations around them. ISFPs focus mostly on the experiences of the present moment, and are rarely ambitious, preferring instead to enjoy the simple pleasures of life: friends, family, and sensory delights such as food, music, and art.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Fashion Designer\n    Interior Designer\n    Cosmetologist\n    Artist\n    Landscape Architect\n    Jeweler\n    Carpenter\n    Chef\n    Tailor\n    Graphic Designer\n    Mechanic\n    Forester\n    Surveyor\n    Gardener\n    Florist\n    Nurse\n    Massage Therapist\n    Occupational Therapist\n    Veterinary Assistant\n    Dental Hygienist\n    Physical Therapist\n    Fitness Trainer\n    Optician\n    ER Physician\n    Physician Assistant\n    Dietitian\n    Pharmacist\n    Office Manager\n    Paralegal\n    Insurance Appraiser\n    Botanist\n    Geologist\n    Preschool Teacher\n    Social Worker\n    Translator\n    Special Education Teacher\n    Teacher's Aide\n    Air Traffic Controller\n    Police Officer\n    Firefighter\n    Residential Counselor\n    Animal Trainer\n    Retail Manager\n    Recreation Worker\n    Bookkeeper\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>\n\n    9% of the general population\n    10% of women\n    8% of men</li><br><b>Facts</b><br><li>\n\n    On personality trait measures, score as Easygoing\n    Among types most likely to report heart disease and hypertension\n    In college, likely to report low levels of assertiveness\n    In essays, projected themselves the fewest number of years into the future of all the types\n    Among the types least likely to stay in college\n    Most likely of all types to report stress associated with finances and children\n    In a national sample, likely to value a work environment which provides security, clear and simple instructions, and no expectation of extra work hours\n    Underrepresented among MBA students and small business owners\n    Commonly found in occupations in health care, business, and law enforcement\n\n    </li></ul>"}]):"/type/esfp"==n.$$path.toLowerCase()?(e.type="ESFP - The Performer",e.typeData=[{title:"Overview",content:"<p>If anyone is to be found spontaneously breaking into song and dance, it is the ESFP personality type. ESFPs get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as ESFPs when it comes to encouraging others, and no other personality type does it with such irresistible style.</p><p>ESFPs live in the moment, enjoying what life has to offer. They are especially tuned into their senses and take pleasure in the sights, sounds, smells, and textures around them. ESFPs like to keep busy, filling their lives with hobbies, sports, activities, and friends. Because they'd rather live spontaneously than plan ahead, they can become overextended when there are too many exciting things to do. An ESFP hates nothing more than missing out on the fun.</p><p>Although they are characteristically fun-loving, ESFPs are also typically practical and down-to-earth. They are grounded in reality and are usually keenly aware of the facts and details in their environment, especially as they pertain to people. They are observant of others and their needs, and responsive in offering assistance. ESFPs enjoy helping other people, especially in practical, tangible ways.</p>"},{title:"Strengths",content:"<p>\n\n    Bold – ESFPs aren't known for holding back. Wanting to experience everything there is to experience, people with the ESFP personality type don't mind stepping out of their comfort zones when no one else is willing.\n    Original – Traditions and expectations are secondary to ESFPs, if a consideration at all. ESFP personalities love to experiment with new styles, and constantly find new ways to stick out in the crowd.\n    Aesthetics and Showmanship – Not stopping at mere outfits, ESFPs inject artistic creativity into their words and actions, too. Every day is a performance, and ESFPs love to put on a show.\n    Practical – To ESFPs, the world is meant to be felt and experienced. Truth is stranger than fiction, and ESFPs prefer to see and do than to wax philosophical about 'what-ifs'.\n    Observant – With all this focus on the here and now, on doing and acting, it makes sense that ESFPs are naturals when it comes to noticing real, tangible things and changes.\n    Excellent People Skills – More so than things though, ESFPs love to pay attention to people. They are talkative, witty, and almost never run out of things to discuss. For people with this personality type, happiness and satisfaction stem from the time they spend with the people they enjoy being with.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Sensitive – ESFPs (especially Turbulent ones) are strongly emotional, and very vulnerable to criticism – they can feel like they've been backed into a corner, sometimes reacting badly. This is probably ESFPs' greatest weakness, because it makes it so hard to address any other weaknesses brought to light.\n    Conflict-Averse – ESFPs sometimes ignore and avoid conflict entirely. They tend to say and do what's needed to get out of such situations, then move on to something more fun.\n    Easily Bored – Without constant excitement, ESFPs find ways to create it themselves. Risky behavior, self-indulgence, and the pleasures of the moment over long-term plans are all things ESFPs get into a little too often.\n    Poor Long-Term Planners – In fact, ESFP personalities rarely make detailed plans for the future. To them, things come as they come, and they rarely bother with taking the time to lay out steps and consequences, with the belief that they could change at any moment – even with things that can be planned.\n    Unfocused – Anything that requires long-term dedication and focus is a particular challenge for ESFPs. In academics, dense, unchanging subjects like Classic Literature are much more difficult than more dynamic, relatable subjects like psychology. The trick for ESFPs is to find day-to-day joy in broader goals, and to tough it out with those tedious things that must be done.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    ESFPs are often the life of the party, entertaining and engaging others with humor and enthusiasm. They notice whether other people are having fun, and do their best to create a good time for all. Typically at home in their physical environment, ESFPs may take the lead in getting everyone involved in some active diversion. ESFPs are generally friendly and likable, but can be hard to get close to; although they tend to be very open, they are reluctant to be serious or to talk about anything negative.\n\n    ESFPs are tuned into their senses, and often gravitate towards pleasing colors and textures in their environments. They often carefully choose fabrics and decorations with which to surround themselves. This attention also often translates into their appearance; ESFPs are often dressed in sensuous fabrics or bright, dazzling colors. They are often up on the latest trends, and like to excite the people around them with new environments and experiences.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    Elementary Teacher\n    Recreation Worker\n    Social Worker\n    Special Education Teacher\n    Nurse\n    Physical Therapist\n    Massage Therapist\n    Occupational Therapist\n    Veterinary Assistant\n    Fitness Trainer\n    Dental Hygienist\n    Pediatrician\n    Physician Assistant\n    Dietitian\n    Child Care Provider\n    Cosmetologist\n    Retail Manager\n    Buyer\n    Public Relations Manager\n    Event Coordinator\n    Corporate Trainer\n    Real Estate Agent\n    Insurance Agent\n    Retail Salesperson\n    Merchandise Planner\n    Landscape Manager\n    Restaurant Host\n    Receptionist\n    Flight Attendant\n    Farmer or Rancher\n    Fashion Designer\n    Interior Designer\n    Jeweler\n    Landscape Architect\n    Chef\n    Florist\n    Gardener\n    Musician\n    Artist\n    Costumer\n    Photographer\n    Police Officer\n    Firefighter\n    Residential Counselor\n    Animal Trainer\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>\n\n    9% of the general population\n    10% of women\n    7% of men</li><br><b>Facts</b><br><li>\n\n    On personality trait measures, score as Changeable, Energetic, Forceful, Initiating, and Resourceful\n    More likely to use emotional coping techniques over spiritual or physical resources\n    Tend to look to authority in education rather than expressing intellectual curiosity; prefer hands-on learning\n    Among most likely to stay in college\n    More likely than other types to watch television for more than 3 hours a day\n    Second highest of all types in marital satisfaction\n    Among types with lowest income\n    At work, tend to be satisfied with co-workers but dissatisfied with job security, stress, salary, and accomplishment\n    Personal values include Home/Family, Health, Friendships, Financial Security, and Spirituality\n    Overrepresented in health care, teaching, coaching, and child care occupations\n\n    </li></ul>"}]):"/type/estp"==n.$$path.toLowerCase()?(e.type="ESTP - The Dynamo",e.typeData=[{title:"Overview",content:"<p>ESTP personality types always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, ESTP personalities love to be the center of attention. If an audience member is asked to come on stage, ESTPs volunteer – or volunteer a shy friend.</p><p>Theory, abstract concepts and plodding discussions about global issues and their implications don't keep ESTPs interested for long. ESTPs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. ESTPs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.</p><p>ESTPs are often natural athletes; they easily navigate their physical environment and are typically highly coordinated. They like to use this physical aptitude in the pursuit of excitement and adventure, and they often enjoy putting their skills to the test in risky or even dangerous activities.</p><p>The ESTP's focus is action in the moment. They are engaged with their environments and solve practical problems quickly. ESTPs are excellent in emergencies, when they can apply their logical reasoning to situations where immediate action is necessary. Long-term goals are less interesting to the ESTP, who prefers to see tangible results in the moment.</p>"},{title:"Strengths",content:"<p>\n\n    Bold – People with the ESTP personality type are full of life and energy. There is no greater joy for ESTPs than pushing boundaries and discovering and using new things and ideas.\n    Rational and Practical – ESTPs love knowledge and philosophy, but not for their own sake. What's fun for ESTP personalities is finding ideas that are actionable and drilling into the details so they can put them to use. If a discussion is completely arbitrary, there are better uses for ESTPs' time.\n    Original – Combining their boldness and practicality, ESTPs love to experiment with new ideas and solutions. They put things together in ways no one else would think to.\n    Perceptive – This originality is helped by ESTPs' ability to notice when things change – and when they need to change! Small shifts in habits and appearances stick out to ESTPs, and they use these observations to help create connections with others.\n    Direct – This perceptive skill isn't used for mind games – ESTPs prefer to communicate clearly, with direct and factual questions and answers. Things are what they are.\n    Sociable – All these qualities pull together to make a natural group leader in ESTPs. This isn't something that they actively seek – people with this personality type just have a knack for making excellent use of social interactions and networking opportunities.\n\n    </p>"},{title:"Weaknesses",content:"<p>\n\n    Insensitive – Feelings and emotions come second to facts and 'reality' for ESTPs. Emotionally charged situations are awkward, uncomfortable affairs, and ESTPs' blunt honesty doesn't help here. These personalities often have a lot of trouble acknowledging and expressing their own feelings as well.\n    Impatient – ESTPs move at their own pace to keep themselves excited. Slowing down because someone else 'doesn't get it' or having to stay focused on a single detail for too long is extremely challenging for ESTPs.\n    Risk-prone – This impatience can lead ESTPs to push into uncharted territory without thinking of the long-term consequences. ESTP personalities sometimes intentionally combat boredom with extra risk.\n    Unstructured – ESTPs see an opportunity – to fix a problem, to advance, to have fun – and seize the moment, often ignoring rules and social expectations in the process. This may get things done, but it can create unexpected social fallout.\n    May Miss the Bigger Picture – Living in the moment can cause ESTPs to miss the forest for the trees. People with this personality type love to solve problems here and now, perhaps too much. All parts of a project can be perfect, but the project will still fail if those parts do not fit together.\n    Defiant – ESTPs won't be boxed in. Repetition, hardline rules, sitting quietly while they are lectured at – this isn't how ESTPs live their lives. They are action-oriented and hands-on. Environments like school and much entry-level work can be so tedious that they're intolerable, requiring extraordinary effort from ESTPs to stay focused long enough to get to freer positions.\n\n    </p>"},{title:"Interaction",content:"<p>\n\n    The first thing you notice about the ESTP is likely to be their energy. They’re often chatting, joking, and flirting with friends and strangers alike. They enjoy engaging playfully with others and amusing everyone around them with their irreverent sense of humor. They tend to keep people on their toes, never quite knowing what the ESTP will poke fun at next. ESTPs are unabashedly gregarious with people, but their interest in individuals may not last long; they are more likely to work a room, having a laugh with everyone, than they are to engage in depth with any one person.\n\n    ESTPs are comfortable in their physical environment and always looking for some action or activity. They tend to be the most naturally coordinated of all the types and are often found playing sports or engaging in various physical activities, especially ones with an element of danger. They are the stereotypical “adrenaline junkies” and may be found skydiving, motorcycle racing, or enjoying other extreme sports.\n\n    </p>"},{title:"Careers",content:"<p>\n\n    General Contractor\n    Building Inspector\n    Surveyor\n    Mechanic\n    Forester\n    Carpenter\n    Land Developer\n    Landscape Architect\n    Farmer or Rancher\n    Exercise Physiologist\n    Biologist\n    Chiropractor\n    Fitness Instructor\n    Respiratory Therapist\n    Radiology Technician\n    Real Estate Broker\n    Sales Engineer\n    Stockbroker\n    Sales Manager\n    Property Manager\n    Insurance Agent\n    Hotel Manager\n    Factory Supervisor\n    Cost Estimator\n    Chief Financial Officer\n    Chief Information Officer\n    Budget Analyst\n    Financial Planner\n    Vocational Teacher\n    Television Reporter\n    Military Officer\n    Police Officer\n    Firefighter\n    Athletic Trainer\n    Airline Pilot\n    Flight Engineer\n    Civil Engineer\n    Mechanical Engineer\n    Air Traffic Controller\n    Paramedic\n    Flight Attendant\n    Restaurant Owner\n    Chef\n    Bartender\n    Photographer\n\n    </p>"},{title:"Research",content:"<ul><b>Population</b><br><li>\n\n    4% of the general population\n    3% of women\n    6% of men</li><br><b>Facts</b><br><li>\n\n    On personality trait measures, score as Dominant, Flexible, Demanding, and Sociable\n    More frequent among patients suffering from chronic pain\n    One of four types reporting highest levels of assertiveness in college\n    One of two types with lowest college GPA\n    Among most likely of all types to stay in college\n    Values at work include autonomy, variety, independence, and structure\n    Overrepresented among MBA students\n    Commonly found in careers in marketing, skilled trades, business, and law enforcement\n\n    </li></ul>"}]):(e.type="Sorry, invalid type.",e.typeData=[{title:"Overview",content:"<p>Sorry, invalid type.</p>"}])
}]).filter("unsafe",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]);