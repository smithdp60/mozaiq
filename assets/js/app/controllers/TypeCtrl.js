mozaiqApp.controller('TypeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

  console.log("TypeCtrl loaded");

  $rootScope.userType = "INTJ";



  if ($rootScope.userType == "INTJ") {
    $scope.type = [
    {"title" : "Overview",
    "content" : "<p>It’s lonely at the top, and being one of the rarest and most strategically capable personality types, INTJs know this all too well.</p><p>INTJs form just two percent of the population, and women of this personality type are especially rare, forming just 0.8% of the population – it is often a challenge for them to find like-minded individuals who are able to keep up with their relentless intellectualism and chess-like maneuvering.</p><p>People with the INTJ personality type are imaginative yet decisive, ambitious yet private, amazingly curious, but they do not squander their energy.</p>"},

    {"title" : "Strengths",
    "content" : "<p><strong>Quick, Imaginative and Strategic Mind</strong> – INTJs pride themselves on their minds, taking every opportunity to improve their knowledge, and this shows in the strength and flexibility of their strategic thinking. Insatiably curious and always up for an intellectual challenge, INTJs can see things from many perspectives. INTJs use their creativity and imagination not so much for artistry, but for planning contingencies and courses of action for all possible scenarios.</p><p><strong>High Self-Confidence</strong> – INTJs trust their rationalism above all else, so when they come to a conclusion, they have no reason to doubt their findings. This creates an honest, direct style of communication that isn't held back by perceived social roles or expectations. When INTJs are right, they're right, and no amount of politicking or hand-holding is going to change that fact – whether it's correcting a person, a process, or themselves, they'd have it no other way.</p><p><strong>Independent and Decisive</strong> – This creativity, logic and confidence come together to form individuals who stand on their own and take responsibility for their own actions. Authority figures do not impress INTJs, nor do social conventions or tradition, and no matter how popular something is, if they have a better idea, INTJs will stand against anyone they have to in a bid to have it changed. Either an idea is the most rational or it's wrong, and INTJs will apply this to their arguments as well as their own behavior, staying calm and detached from these sometimes emotionally charged conflicts. INTJs will only be swayed by those who follow suit.</p><p><strong>Hard-working and determined</strong> – If something piques their interest, INTJs can be astonishingly dedicated to their work, putting in long hours and intense effort to see an idea through. INTJs are incredibly efficient, and if tasks meet the criteria of furthering a goal, they will find a way to consolidate and accomplish those tasks. However, this drive for efficiency can also lead to a sort of elaborate laziness, wherein INTJs find ways to bypass seeming redundancies which don't seem to require a great deal of thought – this can be risky, as sometimes double-checking one's work is the standard for a reason.</p><p><strong>Open-minded</strong> – All this rationalism leads to a very intellectually receptive personality type, as INTJs stay open to new ideas, supported by logic, even if (and sometimes especially if) they prove INTJs' previous conceptions wrong. When presented with unfamiliar territory, such as alternate lifestyles, INTJs tend to apply their receptiveness and independence, and aversion to rules and traditions, to these new ideas as well, resulting in fairly liberal social senses.</p><p><strong>Jacks-of-all-Trades</strong> – INTJs' open-mindedness, determination, independence, confidence and strategic abilities create individuals who are capable of doing anything they set their minds to. Excelling at analyzing anything life throws their way, INTJs are able to reverse-engineer the underlying methodology of most any system and apply the concepts that are exposed wherever needed. INTJs tend to have their pick of professions, from IT architects to political masterminds.</p>"},

    {"title" : "Weaknesses",
    "content" : "<p><strong>Arrogant</strong> – INTJs are perfectly capable of carrying their confidence too far, falsely believing that they've resolved all the pertinent issues of a matter and closing themselves off to the opinions of those they believe to be intellectually inferior. Combined with their irreverence for social conventions, INTJs can be brutally insensitive in making their opinions of others all too clear.</p><p><strong>Judgmental</strong> – INTJs tend to have complete confidence in their thought process, because rational arguments are almost by definition correct – at least in theory. In practice, emotional considerations and history are hugely influential, and a weak point for INTJs is that they brand these factors and those who embrace them as illogical, dismissing them and considering their proponents to be stuck in some baser mode of thought, making it all but impossible to be heard.</p><p><strong>Overly analytical</strong> – A recurring theme with INTJs is their analytical prowess, but this strength can fall painfully short where logic doesn't rule – such as with human relationships. When their critical minds and sometimes neurotic level of perfectionism (often the case with Turbulent INTJs) are applied to other people, all but the steadiest of friends will likely need to make some distance, too often permanently.</p><p><strong>Loathe</strong> highly structured environments – Blindly following precedents and rules without understanding them is distasteful to INTJs, and they disdain even more authority figures who blindly uphold those laws and rules without understanding their intent. Anyone who prefers the status quo for its own sake, or who values stability and safety over self-determination, is likely to clash with INTJ personality types. Whether it's the law of the land or simple social convention, this aversion applies equally, often making life more difficult than it needs to be.</p><p><strong>Clueless in romance</strong> – This antipathy to rules and tendency to over-analyze and be judgmental, even arrogant, all adds up to a personality type that is often clueless in dating. Having a new relationship last long enough for INTJs to apply the full force of their analysis on their potential partner's thought processes and behaviors can be challenging. Trying harder in the ways that INTJs know best can only make things worse, and it's unfortunately common for them to simply give up the search. Ironically, this is when they're at their best, and most likely to attract a partner.</p>"},

    {"title" : "Interaction",
    "content" : "Interaction Content"},

    {"title" : "Careers",
    "content" : "Careers Content"},

    {"title" : "Research",
    "content" : "Research Content"}
    ];
  }


}])


mozaiqApp.filter('unsafe', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});