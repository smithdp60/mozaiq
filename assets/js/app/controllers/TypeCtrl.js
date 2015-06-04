mozaiqApp.controller('TypeCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

  console.log("TypeCtrl loaded");

  if ("/type/intj" == $location.$$path.toLowerCase()) {
    $scope.type = "INTJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p>It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well.</p><p>INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering.</p><p>People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.</p><p>INTJs are perceptive about systems and strategy, and often understand the world as a chess board to be navigated. They want to understand how systems work, and how events proceed: the INTJ often has a unique ability to foresee logical outcomes. They enjoy applying themselves to a project or idea in depth, and putting in concentrated effort to achieve their goals.</p><p>INTJs have a hunger for knowledge and strive to constantly increase their competence; they are often perfectionists with extremely high standards of performance for themselves and others. They tend to have a keen interest in self-improvement and are lifelong learners, always looking to add to their base of information and awareness.</p>"},

    {"title" : "Strengths",
    "content" : "<p><strong>Quick, Imaginative and Strategic Mind</strong> – INTJs pride themselves on their minds, taking every opportunity to improve their knowledge, and this shows in the strength and flexibility of their strategic thinking. Insatiably curious and always up for an intellectual challenge, INTJs can see things from many perspectives. INTJs use their creativity and imagination not so much for artistry, but for planning contingencies and courses of action for all possible scenarios.</p><p><strong>High Self-Confidence</strong> – INTJs trust their rationalism above all else, so when they come to a conclusion, they have no reason to doubt their findings. This creates an honest, direct style of communication that isn't held back by perceived social roles or expectations. When INTJs are right, they're right, and no amount of politicking or hand-holding is going to change that fact – whether it's correcting a person, a process, or themselves, they'd have it no other way.</p><p><strong>Independent and Decisive</strong> – This creativity, logic and confidence come together to form individuals who stand on their own and take responsibility for their own actions. Authority figures do not impress INTJs, nor do social conventions or tradition, and no matter how popular something is, if they have a better idea, INTJs will stand against anyone they have to in a bid to have it changed. Either an idea is the most rational or it's wrong, and INTJs will apply this to their arguments as well as their own behavior, staying calm and detached from these sometimes emotionally charged conflicts. INTJs will only be swayed by those who follow suit.</p><p><strong>Hard-working and determined</strong> – If something piques their interest, INTJs can be astonishingly dedicated to their work, putting in long hours and intense effort to see an idea through. INTJs are incredibly efficient, and if tasks meet the criteria of furthering a goal, they will find a way to consolidate and accomplish those tasks. However, this drive for efficiency can also lead to a sort of elaborate laziness, wherein INTJs find ways to bypass seeming redundancies which don't seem to require a great deal of thought – this can be risky, as sometimes double-checking one's work is the standard for a reason.</p><p><strong>Open-minded</strong> – All this rationalism leads to a very intellectually receptive personality type, as INTJs stay open to new ideas, supported by logic, even if (and sometimes especially if) they prove INTJs' previous conceptions wrong. When presented with unfamiliar territory, such as alternate lifestyles, INTJs tend to apply their receptiveness and independence, and aversion to rules and traditions, to these new ideas as well, resulting in fairly liberal social senses.</p><p><strong>Jacks-of-all-Trades</strong> – INTJs' open-mindedness, determination, independence, confidence and strategic abilities create individuals who are capable of doing anything they set their minds to. Excelling at analyzing anything life throws their way, INTJs are able to reverse-engineer the underlying methodology of most any system and apply the concepts that are exposed wherever needed. INTJs tend to have their pick of professions, from IT architects to political masterminds.</p>"},

    {"title" : "Weaknesses",
    "content" : "<p><strong>Arrogant</strong> – INTJs are perfectly capable of carrying their confidence too far, falsely believing that they've resolved all the pertinent issues of a matter and closing themselves off to the opinions of those they believe to be intellectually inferior. Combined with their irreverence for social conventions, INTJs can be brutally insensitive in making their opinions of others all too clear.</p><p><strong>Judgmental</strong> – INTJs tend to have complete confidence in their thought process, because rational arguments are almost by definition correct – at least in theory. In practice, emotional considerations and history are hugely influential, and a weak point for INTJs is that they brand these factors and those who embrace them as illogical, dismissing them and considering their proponents to be stuck in some baser mode of thought, making it all but impossible to be heard.</p><p><strong>Overly analytical</strong> – A recurring theme with INTJs is their analytical prowess, but this strength can fall painfully short where logic doesn't rule – such as with human relationships. When their critical minds and sometimes neurotic level of perfectionism (often the case with Turbulent INTJs) are applied to other people, all but the steadiest of friends will likely need to make some distance, too often permanently.</p><p><strong>Loathe</strong> highly structured environments – Blindly following precedents and rules without understanding them is distasteful to INTJs, and they disdain even more authority figures who blindly uphold those laws and rules without understanding their intent. Anyone who prefers the status quo for its own sake, or who values stability and safety over self-determination, is likely to clash with INTJ personality types. Whether it's the law of the land or simple social convention, this aversion applies equally, often making life more difficult than it needs to be.</p><p><strong>Clueless in romance</strong> – This antipathy to rules and tendency to over-analyze and be judgmental, even arrogant, all adds up to a personality type that is often clueless in dating. Having a new relationship last long enough for INTJs to apply the full force of their analysis on their potential partner's thought processes and behaviors can be challenging. Trying harder in the ways that INTJs know best can only make things worse, and it's unfortunately common for them to simply give up the search. Ironically, this is when they're at their best, and most likely to attract a partner.</p>"},

    {"title" : "Interaction",
    "content" : "<p>INTJs are typically reserved and serious, and seem to spend a lot of time thinking. They are curious about the world around them and often want to know the principle behind what they see. They thoroughly examine the information they receive, and if asked a question, will typically consider it at length before presenting a careful, complex answer. INTJs think critically and clearly, and often have an idea about how to do something more efficiently. They can be blunt in their presentation, and often communicate in terms of the larger strategy, leaving out the details.</p><p>Although INTJs aren’t usually warm or particularly gregarious, they tend to have a self-assured manner with people based on their own security in their intelligence. They relate their ideas with confidence, and once they have arrived at a conclusion they fully expect others to see the wisdom in their perceptions. They are typically perfectionists and appreciate an environment of intellectual challenge. They enjoy discussing interesting ideas, and may get themselves into trouble because of their take-no-prisoners attitude: if someone’s beliefs don’t make logical sense, the Mastermind typically has no qualms about pointing that out.</p>"},

    {"title" : "Careers",
    "content" : "<ul><b>Business and Financial</b><br><li>Accountant or Auditor</li><li>Budget Analyst</li><li>Cost Estimator</li><li>Financial Analyst</li><li>Insurance Underwriter</li><li>Loan Officer</li><li>Logistician</li><li>Management Consultant</li><li>Market Research Analyst</li><li>Personal Financial Advisor</li><li>Tax Examiner</li><li>Financial Manager</li><li>Top Executive</li><li>Sales Engineer</li><br><b>Math</b><br><li>Actuary</li><li>Mathematician</li><li>Operations Research Analyst</li><li>Statistician</li><br><b>Architecture and Engineering</b><br><li>Aerospace Engineer</li><li>Agricultural Engineer</li><li>Architect</li><li>Biomedical Engineer</li><li>Chemical Engineer</li><li>Civil Engineer</li><li>Computer Hardware Engineer</li><li>Electrical or Electronics Engineer</li><li>Environmental Engineer</li><li>Health and Safety Engineer</li><li>Industrial Engineer</li><li>Mechanical Engineer</li><li>Mechanical Engineering Technician</li><li>Mining or Geological Engineer</li><li>Nuclear Engineer</li><li>Petroleum Engineer</li><li>Surveyor</li><li>Architectural or Engineering Manager</li><br><b>Sciences</b><br><li>Atmospheric Scientist</li><li>Biochemist or Biophysicist</li><li>Chemist or Materials Scientist</li><li>Economist</li><li>Environmental Scientist</li><li>Geoscientist</li><li>Historian</li><li>Hydrologist</li><li>Medical Scientist</li><li>Microbiologist</li><li>Political Scientist</li><br><b>Arts, Design, and Communications</b><br><li>Art Director</li><li>Industrial Designer</li><li>Editor</li><li>Translator</li><li>Photographer</li><li>Reporter</li><li>Technical Writer</li><li>Writer</li><br><b>Healthcare</b><br><li>Optometrist</li><li>Pharmacist</li><li>Physician or Surgeon</li><li>Podiatrist</li><br><b>Education</b><br><li>Technical Education Teacher</li><li>Professor</li><li>College Administrator</li><br><b>Computers and Information Technology</b><br><li>Computer Programmer</li><li>Computer Support Specialist</li><li>Computer Systems Analyst</li><li>Database Administrator</li><li>Information Security Analyst</li><li>Network Administrator</li><li>Software Developer</li><li>Web Developer</li><li>Computer and IS Manager</li><li>Computer Network Architect</li><li>Computer Scientist</li><br><b>Construction</b><br><li>Construction Manager</li><li>Building Inspector</li><br><b>Legal</b><br><li>Judge or Hearing Officer</li><li>Lawyer</li><li>Paralegal or Legal Assistant</li><br><b>Protective Service</b><br><li>Police Detective</li><li>Private Investigator</li></ul>"},

    {"title" : "Research",
    "content" : "<ul><b>Population</b><br><li>2% of the general population</li><li>3% of men</li><li>1% of women</li><br><b>Facts</b><br><li>On personality trait measures, score as Discreet, Industrious, Logical, Deliberate, Self-Confident, and Methodical</li><li>Among types least likely to suffer heart disease and cardiac problems</li><li>Least likely of all the types to believe in a higher spiritual power</li><li>One of two types with highest college GPA</li><li>Among types with highest income</li><li>Personal values include Achievement</li><li>Of all types, least likely to state that they value Home/family, Financial security, Relationships & friendships, and Community service</li><li>Overrepresented among MBA students and female small business owners</li><li>Commonly found in scientific or technical fields, computer occupations, and legal professions</li></ul>"}
    ];


  } else if ("/type/entj" == $location.$$path.toLowerCase()) {
    $scope.type = "ENTJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p>ENTJ</p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/intp" == $location.$$path.toLowerCase()) {
    $scope.type = "INTP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/entp" == $location.$$path.toLowerCase()) {
    $scope.type = "ENTP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/infj" == $location.$$path.toLowerCase()) {
    $scope.type = "INFJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/infp" == $location.$$path.toLowerCase()) {
    $scope.type = "INFP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/enfj" == $location.$$path.toLowerCase()) {
    $scope.type = "ENFJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/enfp" == $location.$$path.toLowerCase()) {
    $scope.type = "ENFP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/istj" == $location.$$path.toLowerCase()) {
    $scope.type = "ISTJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/estj" == $location.$$path.toLowerCase()) {
    $scope.type = "ESTJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/isfj" == $location.$$path.toLowerCase()) {
    $scope.type = "ISFJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/esfj" == $location.$$path.toLowerCase()) {
    $scope.type = "ESFJ";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/istp" == $location.$$path.toLowerCase()) {
    $scope.type = "ISTP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/isfp" == $location.$$path.toLowerCase()) {
    $scope.type = "ISFP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/esfp" == $location.$$path.toLowerCase()) {
    $scope.type = "ESFP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else if ("/type/estp" == $location.$$path.toLowerCase()) {
    $scope.type = "ESTP";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p></p>"},
    {"title" : "Strengths",
    "content" : "<p></p>"},
    {"title" : "Weaknesses",
    "content" : "<p></p>"},
    {"title" : "Interaction",
    "content" : "<p></p>"},
    {"title" : "Careers",
    "content" : "<p></p>"},
    {"title" : "Research",
    "content" : "<p></p>"}
    ]
  } else {
    $scope.type = "Sorry, invalid type.";
    $scope.typeData = [
    {"title" : "Overview",
    "content" : "<p>Sorry, invalid type.</p>"}
    ]
  }

}])


mozaiqApp.filter('unsafe', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});